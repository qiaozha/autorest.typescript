// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Program, EmitContext } from "@typespec/compiler";
import * as fsextra from "fs-extra";
import {
  buildClientDefinitions,
  buildResponseTypes,
  buildParameterTypes,
  buildIsUnexpectedHelper,
  buildClient,
  buildIndexFile,
  buildTopLevelIndex,
  buildRollupConfig,
  buildTsConfig,
  buildApiExtractorConfig,
  buildPackageFile,
  buildPollingHelper,
  buildPaginateHelper,
  buildEsLintConfig,
  buildKarmaConfigFile,
  buildEnvFile,
  buildEnvBrowserFile,
  buildRecordedClientFile,
  buildSampleTest,
  buildReadmeFile,
  buildSerializeHelper,
  buildLogger,
  RLCOptions,
  normalizeName,
  NameType,
  hasUnexpectedHelper
} from "@azure-tools/rlc-common";
import { transformRLCModel } from "./transform/transform.js";
import { emitContentByBuilder, emitModels } from "./emitUtil.js";
import {
  listClients,
  createSdkContext
} from "@azure-tools/typespec-client-generator-core";
import * as path from "path";
import { buildSharedTypes } from "./modular/buildSharedTypes.js";
import { Project } from "ts-morph";
import { buildClientContext } from "./modular/buildClientContext.js";
import { emitCodeModel } from "./modular/buildCodeModel.js";
import { buildRootIndex } from "./modular/buildRootIndex.js";
import { buildModels } from "./modular/emitModels.js";
import { buildOperationFiles } from "./modular/buildOperations.js";
import { buildApiIndexFile } from "./modular/buildApiIndex.js";
import { buildClassicalClient } from "./modular/buildClassicalClient.js";
import { emitPackage, emitTsConfig } from "./modular/buildProjectFiles.js";
// import { emitPackage, emitTsConfig } from "./modular/buildProjectFiles.js";

export async function $onEmit(context: EmitContext) {
  const program: Program = context.program;
  const options: RLCOptions = context.options;
  const dpgContext = createSdkContext(context);
  const clients = listClients(dpgContext);
  const srcPath: string = context.emitterOutputDir;
  let count = -1;

  const needUnexpectedHelper: Map<string, boolean> = new Map<string, boolean>();
  for (const client of clients) {
    count++;
    const rlcModels = await transformRLCModel(
      program,
      options,
      client,
      context.emitterOutputDir,
      dpgContext
    );
    const pathToClear = rlcModels.srcPath;
    needUnexpectedHelper.set(client.name, hasUnexpectedHelper(rlcModels));
    clearSrcFolder(pathToClear, count, rlcModels?.options?.multiClient);
    await emitModels(rlcModels, program);
    await emitContentByBuilder(program, buildClientDefinitions, rlcModels);
    await emitContentByBuilder(program, buildResponseTypes, rlcModels);
    await emitContentByBuilder(program, buildClient, rlcModels);
    await emitContentByBuilder(program, buildParameterTypes, rlcModels);
    await emitContentByBuilder(program, buildIsUnexpectedHelper, rlcModels);
    await emitContentByBuilder(program, buildIndexFile, rlcModels);
    await emitContentByBuilder(program, buildLogger, rlcModels);
    await emitContentByBuilder(program, buildTopLevelIndex, rlcModels);
    await emitContentByBuilder(program, buildPaginateHelper, rlcModels);
    await emitContentByBuilder(program, buildPollingHelper, rlcModels);
    // buildSerializeHelper
    await emitContentByBuilder(program, buildSerializeHelper, rlcModels);
    // build metadata relevant files
    await emitContentByBuilder(
      program,
      [
        buildEsLintConfig,
        buildRollupConfig,
        buildApiExtractorConfig,
        buildReadmeFile,
        buildPackageFile,
        buildTsConfig
      ],
      rlcModels,
      context.emitterOutputDir
    );
    // build test relevant files
    await emitContentByBuilder(
      program,
      [
        buildKarmaConfigFile,
        buildEnvFile,
        buildEnvBrowserFile,
        buildRecordedClientFile,
        buildSampleTest
      ],
      rlcModels,
      context.emitterOutputDir
    );
  }

  if (options.isModularLibrary) {
    // TODO: Emit modular parts of the library
    const project = new Project();
    const modularCodeModel = emitCodeModel(context, { casing: "camel" });
    buildSharedTypes(project, srcPath);
    const rootIndexFile = project.createSourceFile(
      `${srcPath}/src/index.ts`,
      "",
      {
        overwrite: true
      }
    );
    for (const subClient of modularCodeModel.clients) {
      let subfolder = "";
      if (modularCodeModel.clients.length > 1) {
        subfolder = normalizeName(
          subClient.name.replace("Client", ""),
          NameType.File
        );
      }

      buildClientContext(subClient, project, srcPath, subfolder);
      buildModels(modularCodeModel, project, srcPath, subfolder);
      buildOperationFiles(
        subClient,
        project,
        srcPath,
        subfolder,
        needUnexpectedHelper.get(subClient.name + "Client")
      );
      buildApiIndexFile(project, srcPath, subfolder);
      buildClassicalClient(
        subClient,
        project,
        srcPath,
        subfolder,
        needUnexpectedHelper.get(subClient.name + "Client")
      );
      buildRootIndex(subClient, project, rootIndexFile, srcPath, subfolder);

      emitPackage(project, srcPath, modularCodeModel);
      emitTsConfig(project, srcPath, modularCodeModel);
    }

    for (const file of project.getSourceFiles()) {
      await emitContentByBuilder(
        program,
        () => ({ content: file.getFullText(), path: file.getFilePath() }),
        modularCodeModel as any
      );
      // emitFile(program, { content: hrlcClient.content, path: hrlcClient.path });
    }
  }
}

function clearSrcFolder(
  srcPath: string,
  count: number,
  isMultiClient: boolean = false
) {
  fsextra.emptyDirSync(srcPath);
  if (isMultiClient && count === 0) {
    const folderPath = path.join(
      srcPath.substring(0, srcPath.indexOf(path.sep + "src") + 4)
    );
    fsextra.emptyDirSync(folderPath);
  }
}
