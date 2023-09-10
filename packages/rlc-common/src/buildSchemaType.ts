// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Project } from "ts-morph";
import {
  buildObjectAliases,
  buildObjectInterfaces,
  buildPolymorphicAliases
} from "./buildObjectTypes.js";
import { RLCModel, SchemaContext } from "./interfaces.js";
import { joinPaths } from "./helpers/pathUtils.js";

/**
 * Generates types to represent schema definitions in the swagger
 */
export function buildSchemaTypes(model: RLCModel) {
  const { srcPath } = model;
  const project = new Project();
  let filePath = joinPaths(srcPath, `models.ts`);
  const inputModelFile = generateModelFiles(model, project, filePath, [
    SchemaContext.Input
  ]);
  filePath = joinPaths(srcPath, `outputModels.ts`);
  const outputModelFile = generateModelFiles(model, project, filePath, [
    SchemaContext.Output,
    SchemaContext.Exception
  ]);
  return { inputModelFile, outputModelFile };
}

export function generateModelFiles(
  model: RLCModel,
  project: Project,
  filePath: string,
  schemaContext: SchemaContext[]
) {
  // Track models that need to be imported
  const importedModels = new Set<string>();

  const objectsDefinitions = buildObjectInterfaces(
    model,
    importedModels,
    schemaContext
  );

  const objectTypeAliases = buildPolymorphicAliases(model, schemaContext);

  const objectAliases = buildObjectAliases(
    model,
    importedModels,
    schemaContext
  );
  if (
    objectTypeAliases.length ||
    objectsDefinitions.length ||
    objectAliases.length
  ) {
    const modelsFile = project.createSourceFile(filePath, undefined, {
      overwrite: true
    });

    modelsFile.addInterfaces(objectsDefinitions);
    modelsFile.addTypeAliases(objectTypeAliases);
    modelsFile.addTypeAliases(objectAliases);
    if (importedModels.has("Paged")) {
      modelsFile.addImportDeclarations([
        {
          namedImports: ["Paged"],
          moduleSpecifier: "@azure/core-paging"
        }
      ]);
      importedModels.delete("Paged");
    }
    if (importedModels.size > 0) {
      modelsFile.addImportDeclarations([
        {
          namedImports: [...Array.from(importedModels || [])],
          moduleSpecifier: "@azure-rest/core-client"
        }
      ]);
    }
    return { path: filePath, content: modelsFile.getFullText() };
  }
  return undefined;
}
