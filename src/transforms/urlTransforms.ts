import {
  CodeModel,
  ImplementationLocation,
  ParameterLocation
} from "@autorest/codemodel";
import { TypeDetails } from "../models/modelDetails";
import { getLanguageMetadata } from "../utils/languageHelpers";
import { getTypeForSchema } from "../utils/schemaHelpers";

export interface EndpointDetails {
  isCustom: boolean;
  endpoint?: string;
  parameterNames?: string[];
  parameterTypes?: TypeDetails[];
}

export function transformBaseUrl(codeModel: CodeModel): EndpointDetails {
  let endpoint: string | undefined = "";
  let isCustom = false;

  const $host = (codeModel.globalParameters || []).find(p => {
    const { name } = getLanguageMetadata(p.language);
    return name === "$host" && Boolean(p.clientDefaultValue);
  });

  let parameterNames: string[] | undefined;
  let parameterTypes: TypeDetails[] | undefined;

  if (!$host) {
    // There are some swaggers that contain no operations for those we'll keep an empty endpoint
    if (codeModel.operationGroups && codeModel.operationGroups.length) {
      // No support yet for multi-baseUrl yet Issue #553
      const { requests } = codeModel.operationGroups[0].operations[0];
      const params = getEndpointParameters(codeModel);
      parameterNames = params?.map(item => item.name);
      parameterTypes = params?.map(item => item.type);
      isCustom = true;
      endpoint = requests![0].protocol.http!.uri;
    }
  } else {
    endpoint = $host.clientDefaultValue;
  }

  return {
    parameterNames,
    endpoint: endpoint,
    isCustom,
    parameterTypes
  };
}

export function getEndpointParameters(codeModel: CodeModel) {
  if (!codeModel.globalParameters || !codeModel.globalParameters.length) {
    return;
  }

  const uriParameters = codeModel.globalParameters.filter(
    gp =>
      gp.implementation === ImplementationLocation.Client &&
      gp.protocol.http?.in === ParameterLocation.Uri
  );

  // Currently only support one parametrized host
  if (
    !uriParameters.length ||
    uriParameters.some(param => {
      !getLanguageMetadata(param.language)?.serializedName;
    })
  ) {
    return;
  }

  return uriParameters.map(param => {
    return {
      name: getLanguageMetadata(param.language).serializedName,
      type: getTypeForSchema(param.schema)
    };
  });
}
