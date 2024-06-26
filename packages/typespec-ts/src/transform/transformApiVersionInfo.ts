import {
  SdkClient,
  isApiVersion,
  listOperationGroups,
  listOperationsInOperationGroup
} from "@azure-tools/typespec-client-generator-core";
import { ignoreDiagnostics } from "@typespec/compiler";
import {
  ApiVersionInfo,
  UrlInfo,
  extractPathApiVersion,
  extractDefinedPosition,
  SchemaContext,
  ApiVersionPosition
} from "@azure-tools/rlc-common";
import { getHttpOperation } from "@typespec/http";
import {
  getDefaultApiVersionString,
  getSchemaForType,
  trimUsage
} from "../utils/modelUtils.js";
import { SdkContext } from "../utils/interfaces.js";

export function transformApiVersionInfo(
  client: SdkClient,
  dpgContext: SdkContext,
  urlInfo?: UrlInfo
): ApiVersionInfo | undefined {
  const program = dpgContext.program;
  const queryVersionDetail = getOperationApiVersion(client, dpgContext);
  const pathVersionDetail = extractPathApiVersion(urlInfo);
  const isCrossedVersion =
    pathVersionDetail?.isCrossedVersion || queryVersionDetail?.isCrossedVersion;
  const defaultValue =
    (pathVersionDetail || queryVersionDetail) && !isCrossedVersion
      ? getDefaultApiVersionString(program, dpgContext) ??
        pathVersionDetail?.defaultValue ??
        queryVersionDetail?.defaultValue
      : undefined;

  if (pathVersionDetail && queryVersionDetail) {
    return pathVersionDetail;
  }
  if (pathVersionDetail && !queryVersionDetail) {
    dpgContext.hasApiVersionInClient = true;
  }
  return {
    definedPosition: extractDefinedPosition(
      queryVersionDetail,
      pathVersionDetail
    ),
    isCrossedVersion,
    defaultValue
  };
}

export function getOperationApiVersion(
  client: SdkClient,
  dpgContext: SdkContext
): ApiVersionInfo | undefined {
  const apiVersionTypes = new Set<string>();
  const locations = new Set<ApiVersionPosition>();
  const clientOperations = listOperationsInOperationGroup(dpgContext, client);
  dpgContext.hasApiVersionInClient = true;
  let hasApiVersionInOperation = true;
  for (const clientOp of clientOperations) {
    hasApiVersionInOperation = false;
    const route = ignoreDiagnostics(
      getHttpOperation(dpgContext.program, clientOp)
    );
    // ignore overload base operation
    if (route.overloads && route.overloads?.length > 0) {
      continue;
    }
    const params = route.parameters.parameters.filter(
      (p) =>
        (p.type === "query" || p.type === "path") && isApiVersion(dpgContext, p)
    );
    params.map((p) => {
      const type = getSchemaForType(dpgContext, p.param.type, {
        usage: [SchemaContext.Exception, SchemaContext.Input],
        needRef: false,
        relevantProperty: p.param
      });
      if (p.type !== "header") {
        locations.add(p.type);
      }
      const typeString = JSON.stringify(trimUsage(type));
      apiVersionTypes.add(typeString);
    });
    if (apiVersionTypes.size > 1 || !dpgContext.hasApiVersionInClient) {
      break;
    }
    if (params.length === 1) {
      hasApiVersionInOperation = true;
    }
    if (!hasApiVersionInOperation) {
      dpgContext.hasApiVersionInClient = false;
    }
  }
  const operationGroups = listOperationGroups(dpgContext, client, true);
  for (const operationGroup of operationGroups) {
    const operations = listOperationsInOperationGroup(
      dpgContext,
      operationGroup
    );
    for (const op of operations) {
      hasApiVersionInOperation = false;
      const route = ignoreDiagnostics(getHttpOperation(dpgContext.program, op));
      // ignore overload base operation
      if (route.overloads && route.overloads?.length > 0) {
        continue;
      }
      const params = route.parameters.parameters.filter(
        (p) =>
          (p.type === "query" || p.type === "path") &&
          isApiVersion(dpgContext, p)
      );
      params.map((p) => {
        const type = getSchemaForType(dpgContext, p.param.type, {
          usage: [SchemaContext.Exception, SchemaContext.Input],
          needRef: false,
          relevantProperty: p.param
        });
        if (p.type !== "header") {
          locations.add(p.type);
        }

        const typeString = JSON.stringify(trimUsage(type));
        apiVersionTypes.add(typeString);
      });
      if (apiVersionTypes.size > 1 || !dpgContext.hasApiVersionInClient) {
        break;
      }
      if (params.length === 1) {
        hasApiVersionInOperation = true;
      }
      if (!hasApiVersionInOperation) {
        dpgContext.hasApiVersionInClient = false;
      }
    }
  }
  // If no api-version parameter defined return directly
  if (apiVersionTypes.size === 0 || !dpgContext.hasApiVersionInClient) {
    return;
  }
  const detail: ApiVersionInfo = {
    definedPosition:
      locations.size > 1 ? "duplicate" : locations.values().next().value,
    isCrossedVersion: apiVersionTypes.size > 1,
    defaultValue: undefined // We won't prompt the query versions into client one
  };
  return detail;
}
