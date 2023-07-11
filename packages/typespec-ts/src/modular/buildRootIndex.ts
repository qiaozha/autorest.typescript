import { Project, SourceFile, SyntaxKind } from "ts-morph";
import { getClientName } from "./helpers/namingHelpers.js";
import { Client } from "./modularCodeModel.js";

export function buildRootIndex(
  client: Client,
  project: Project,
  rootIndexFile: SourceFile,
  srcPath: string,
  isLast: boolean
) {
  const clientName = `${getClientName(client)}Client`;
  const clientFile = project.getSourceFile(`${srcPath}/src/${clientName}.ts`);

  if (!clientFile) {
    throw new Error(
      `Couldn't find client file: ${srcPath}/src/${clientName}.ts`
    );
  }

  exportClassicalClient(client, rootIndexFile);

  if (isLast) {
    exportApiIndex(rootIndexFile, srcPath);
  }
}

function exportClassicalClient(client: Client, indexFile: SourceFile) {
  const clientName = `${getClientName(client)}Client`;
  indexFile.addExportDeclaration({
    namedExports: [clientName],
    moduleSpecifier: `./${clientName}.js`
  });
}

function exportApiIndex(indexFile: SourceFile, srcPath: string) {
  const project = indexFile.getProject();
  const modelFilePath = `${srcPath}/src/api/index.ts`;
  const moduleSpecifier = "./api/index.js";
  const modelsFile = project.getSourceFile(modelFilePath);
  if (!modelsFile) {
    return;
  }

  const namedExports: string[] = [];
  modelsFile.getExportedDeclarations().forEach((value, key) => {
    const validExports = value.filter((e) => {
      return e.getKind() !== SyntaxKind.FunctionDeclaration;
    });
    if (validExports.length > 0 && !key.endsWith("Context")) {
      namedExports.push(key);
    }
  });
  indexFile.addExportDeclaration({ moduleSpecifier, namedExports });
}
