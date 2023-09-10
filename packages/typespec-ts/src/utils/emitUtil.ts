import { ContentBuilder } from "@qiaozha/rlc-common";
import { buildSchemaTypes } from "@qiaozha/rlc-common";
import { File, RLCModel } from "@qiaozha/rlc-common";
import { Program, emitFile as emitFileToDisk, joinPaths } from "@typespec/compiler";
import { format } from "prettier";
import { prettierJSONOptions, prettierTypeScriptOptions } from "../lib.js";

export async function emitModels(rlcModels: RLCModel, program: Program) {
  const schemaOutput = buildSchemaTypes(rlcModels);
  if (schemaOutput) {
    const { inputModelFile, outputModelFile } = schemaOutput;
    if (inputModelFile) {
      await emitFile(inputModelFile, program);
    }
    if (outputModelFile) {
      await emitFile(outputModelFile, program);
    }
  }
}

export async function emitContentByBuilder(
  program: Program,
  builderFnOrList: ContentBuilder | ContentBuilder[],
  rlcModels: RLCModel,
  emitterOutputDir?: string
) {
  if (!Array.isArray(builderFnOrList)) {
    builderFnOrList = [builderFnOrList];
  }
  for (const builderFn of builderFnOrList) {
    const contentFile = builderFn(rlcModels);
    if (contentFile) {
      await emitFile(contentFile, program, emitterOutputDir);
    }
  }
}

async function emitFile(
  file: File,
  program: Program,
  emitterOutputDir?: string
) {
  const filePath = joinPaths(emitterOutputDir ?? "", file.path);
  const isJson = /\.json$/gi.test(filePath);
  const isSourceCode = /\.(ts|js)$/gi.test(filePath);
  const licenseHeader = `// Copyright (c) Microsoft Corporation.\n// Licensed under the MIT license.\n`;
  let prettierFileContent = file.content;

  if (isSourceCode) {
    prettierFileContent = `${licenseHeader.trimStart()}\n${prettierFileContent}`;
  }
  // Format the contents if necessary
  if (isJson || isSourceCode) {
    try {
      prettierFileContent = format(
        prettierFileContent,
        isJson ? prettierJSONOptions : prettierTypeScriptOptions
      );
    } catch (e) {
      console.error(`Failed to format file: ${filePath}`);
      throw e;
    }
  }
  await emitFileToDisk(program, {path: filePath, content: prettierFileContent});
}
