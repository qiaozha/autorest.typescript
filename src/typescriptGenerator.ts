// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import * as prettier from "prettier";
import { CodeModel } from "@azure-tools/codemodel";
import { Project, IndentationText } from "ts-morph";
import { Host } from "@azure-tools/autorest-extension-base";
import { PackageDetails } from "./models/packageDetails";
import { transformCodeModel } from "./transforms";

import { generateClient } from "./generators/clientFileGenerator";
import { generateClientContext } from "./generators/clientContextFileGenerator";
import { generateModels } from "./generators/modelsGenerator";
import { generateMappers } from "./generators/mappersGenerator";
import { generatePackageJson } from "./generators/static/packageFileGenerator";
import { generateLicenseFile } from "./generators/static/licenseFileGenerator";
import { generateReadmeFile } from "./generators/static/readmeFileGenerator";
import { generateTsConfig } from "./generators/static/tsConfigFileGenerator";
import { generateRollupConfig } from "./generators/static/rollupConfigFileGenerator";
import { generateOperations } from "./generators/operationGenerator";

const prettierTypeScriptOptions: prettier.Options = {
  parser: "typescript",
  arrowParens: "always",
  bracketSpacing: true,
  endOfLine: "lf",
  printWidth: 100,
  semi: true,
  singleQuote: false,
  tabWidth: 2
};

const prettierJSONOptions: prettier.Options = {
  parser: "json",
  tabWidth: 2,
  semi: false,
  singleQuote: false
};

export class TypescriptGenerator {
  private codeModel: CodeModel;
  private host: Host;

  constructor(codeModel: CodeModel, host: Host) {
    this.codeModel = codeModel;
    this.host = host;
  }

  public async process(): Promise<void> {
    const project = new Project({
      useVirtualFileSystem: true,
      manipulationSettings: {
        indentationText: IndentationText.TwoSpaces
      }
    });

    const clientDetails = transformCodeModel(this.codeModel);
    const packageName = await this.host.GetValue("package-name");
    const packageNameParts = packageName.match(/(^@(.*)\/)?(.*)/);
    const packageDetails: PackageDetails = {
      name: packageName,
      scopeName: packageNameParts[2],
      nameWithoutScope: packageNameParts[3],
      description: clientDetails.description,
      version: await this.host.GetValue("package-version")
    };

    // Skip metadata generation if `generate-metadata` is explicitly false
    if ((await this.host.GetValue("generate-metadata")) !== false) {
      generatePackageJson(clientDetails, packageDetails, project);
      generateLicenseFile(project);
      generateReadmeFile(clientDetails, packageDetails, project);
      generateTsConfig(project);
      generateRollupConfig(clientDetails, packageDetails, project);
    }

    generateClient(this.codeModel, clientDetails, project);
    generateClientContext(clientDetails, packageDetails, project);
    generateModels(this.codeModel, project);
    generateMappers(this.codeModel, project);
    generateOperations(this.codeModel, clientDetails, project);

    // TODO: Get this from the "license-header" setting:
    //   await this.host.GetValue("license-header");
    const licenseHeader = `
/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
`;

    // Save the source files to the virtual filesystem
    project.saveSync();
    const fs = project.getFileSystem();

    // Loop over the files
    for (const file of project.getSourceFiles()) {
      const filePath = file.getFilePath();
      const isJson = /\.json$/gi.test(filePath);
      const isSourceCode = /\.(ts|js)$/gi.test(filePath);
      let fileContents = fs.readFileSync(filePath);

      // Add the license header to source code files
      if (licenseHeader && isSourceCode) {
        fileContents = `${licenseHeader.trimLeft()}\n${fileContents}`;
      }

      // Format the contents if necessary
      if (isJson || isSourceCode) {
        fileContents = prettier.format(
          fileContents,
          isJson ? prettierJSONOptions : prettierTypeScriptOptions
        );
      }

      // Write the file to the AutoRest host
      this.host.WriteFile(
        filePath.substr(1), // Get rid of the leading slash '/'
        fileContents
      );
    }
  }
}
