import {
  CodeModel,
  ParameterLocation,
  ImplementationLocation
} from "@autorest/codemodel";

import {
  Project,
  StatementStructures,
  StructureKind,
  VariableDeclarationKind,
  VariableStatementStructure,
  WriterFunction
} from "ts-morph";
import * as path from "path";

import { getAutorestOptions, getSession } from "../autorestSession";
import { transformBaseUrl } from "../transforms/urlTransforms";
import { isConstantSchema } from "./schemaHelpers"; // don't keep it 
import { getLanguageMetadata } from "../utils/languageHelpers"; // 
import { generateMethodShortcutImplementation } from "./generateMethodShortcuts";
import { RLCModel } from "./interfaces";
import { getSecurityInfoFromModel } from "../utils/schemaHelpers";


export function generateClient(model: RLCModel, project: Project) {
  const name = model.libraryName
  const { srcPath } = model;
  const clientFile = project.createSourceFile(
    path.join(srcPath, `${name}.ts`),
    undefined,
    {
      overwrite: true
    }
  );

  // Get all paths
  const clientName = model.clientName;
  const uriParameter = getClientUriParameter(model);

  const { multiClient, batch } = model
  const {
    addCredentials,
    credentialScopes,
    credentialKeyHeaderName
  } = getSecurityInfoFromModel(model.security);
  const credentialTypes =
    credentialScopes && credentialScopes.length > 0 ? ["TokenCredential"] : [];

  if (credentialKeyHeaderName) {
    credentialTypes.push("KeyCredential");
  }

  const commonClientParams = [
    ...(uriParameter
      ? [
          {
            name: uriParameter,
            type: "string"
          }
        ]
      : []),
    ...(addCredentials === false ||
    !isSecurityInfoDefined(credentialScopes, credentialKeyHeaderName)
      ? []
      : [{ name: "credentials", type: credentialTypes.join(" | ") }])
  ];
  const clientInterfaceName = clientName.endsWith("Client")
    ? `${clientName}`
    : `${clientName}Client`;

  const functionStatement = {
    isExported: true,
    name: `createClient`,
    parameters: [
      ...commonClientParams,
      { name: "options", type: "ClientOptions = {}" }
    ],
    returnType: clientInterfaceName,
    isDefaultExport: false,
    statements: getClientFactoryBody(clientInterfaceName, model)
  };

  if (!multiClient || !batch || batch.length === 1) {
    functionStatement.isDefaultExport = true;
  }
  clientFile.addFunction(functionStatement);

  clientFile.addImportDeclarations([
    {
      namedImports: ["getClient", "ClientOptions"],
      moduleSpecifier: "@azure-rest/core-client"
    }
  ]);

  if (
    addCredentials &&
    isSecurityInfoDefined(credentialScopes, credentialKeyHeaderName)
  ) {
    clientFile.addImportDeclarations([
      {
        namedImports: credentialTypes,
        moduleSpecifier: "@azure/core-auth"
      }
    ]);
  }
  clientFile.addImportDeclarations([
    {
      namedImports: [`${clientInterfaceName}`],
      moduleSpecifier: "./clientDefinitions"
    }
  ]);
}

function isSecurityInfoDefined(
  credentialScopes: string[],
  credentialKeyHeaderName: string
) {
  return (
    (credentialScopes && credentialScopes.length > 0) || credentialKeyHeaderName
  );
}

function getClientFactoryBody(
  clientTypeName: string,
  model: RLCModel
): string | WriterFunction | (string | WriterFunction | StatementStructures)[] {
  const { rlcShortcut, packageDetails } = getAutorestOptions();
  let clientPackageName = packageDetails.nameWithoutScope;
  const packageVersion = packageDetails.version;
  const { endpoint, parameterName } = transformBaseUrl(model);
  let baseUrl: string;
  if (parameterName) {
    const parsedEndpoint = endpoint?.replace(
      `{${parameterName}}`,
      `\${${parameterName}}`
    );
    baseUrl = `options.baseUrl ?? \`${parsedEndpoint}\``;
  } else {
    baseUrl = `options.baseUrl ?? "${endpoint}"`;
  }

  const apiVersion = getApiVersion(model);
  let apiVersionStatement: string = "";
  if (apiVersion) {
    apiVersionStatement = `options.apiVersion = options.apiVersion ?? "${apiVersion}"`;
  }

  if (!clientPackageName.endsWith("-rest")) {
    clientPackageName = clientPackageName + "-rest";
  }
  const userAgentInfoStatement =
    "const userAgentInfo = `azsdk-js-" +
    clientPackageName +
    "/" +
    packageVersion +
    "`;";
  const userAgentPrefix =
    "options.userAgentOptions && options.userAgentOptions.userAgentPrefix ? `${options.userAgentOptions.userAgentPrefix} ${userAgentInfo}`: `${userAgentInfo}`;";
  const userAgentStatement: VariableStatementStructure = {
    kind: StructureKind.VariableStatement,
    declarationKind: VariableDeclarationKind.Const,
    declarations: [{ name: "userAgentPrefix", initializer: userAgentPrefix }]
  };

  const userAgentOptionsStatement = `options = {
    ...options,
    userAgentOptions: {
      userAgentPrefix
    }
  }`;

  const baseUrlStatement: VariableStatementStructure = {
    kind: StructureKind.VariableStatement,
    declarationKind: VariableDeclarationKind.Const,
    declarations: [{ name: "baseUrl", initializer: baseUrl }]
  };

  const {
    credentialScopes,
    credentialKeyHeaderName
  } = getSecurityInfoFromModel(model.security);

  const scopesString =
    credentialScopes && credentialScopes.length
      ? credentialScopes.map(cs => `"${cs}"`).join(", ")
      : "";
  const scopes = scopesString ? `scopes: [${scopesString}],` : "";

  const apiKeyHeaderName = credentialKeyHeaderName
    ? `apiKeyHeaderName: "${credentialKeyHeaderName}",`
    : "";

  const credentials =
    scopes || apiKeyHeaderName
      ? `options = {
      ...options,
      credentials: {
        ${scopes}
        ${apiKeyHeaderName}
      },
    }`
      : "";

  const getClient = `const client = getClient(
      baseUrl, ${credentials ? "credentials," : ""} options
    ) as ${clientTypeName};
    `;

  let returnStatement = `return client;`;

  if (rlcShortcut) {
    const shortcutImplementations = generateMethodShortcutImplementation(
      model
    );
    const shortcutBody = Object.keys(shortcutImplementations).map(key => {
      // If the operation group has an empty name, it means its operations are client
      // level operations so we need to spread the definitions. Otherwise they are
      // within an operation group so we add them as key: value
      return `${key ? `"${key}":` : "..."} {${shortcutImplementations[
        key
      ].join()}}`;
    });
    returnStatement = `return { ...client, ${shortcutBody.join()} };`;
  }

  return [
    baseUrlStatement,
    apiVersionStatement,
    credentials,
    userAgentInfoStatement,
    userAgentStatement,
    userAgentOptionsStatement,
    getClient,
    returnStatement
  ];
}

function getApiVersion(model: RLCModel): string | undefined {
  if (!model.globalParameters || !model.globalParameters.length) {
    return undefined;
  }

  const apiVersionParam = model.globalParameters
    .filter(
      gp =>
        gp.implementation === ImplementationLocation.Client &&
        gp.protocol.http?.in === ParameterLocation.Query
    )
    .find(
      param =>
        getLanguageMetadata(param.language).serializedName === "api-version"
    );

  if (apiVersionParam && isConstantSchema(apiVersionParam.schema)) {
    return apiVersionParam.schema.value.value.toString();
  }

  return undefined;
}

function getClientUriParameter(model: RLCModel) {
  const { parameterName } = transformBaseUrl(model);
  return parameterName;
}
