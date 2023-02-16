// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  Client,
  DpgContext,
  listOperationGroups,
  listOperationsInOperationGroup
} from "@azure-tools/cadl-dpg";
import { ignoreDiagnostics, Model, Program, Type } from "@cadl-lang/compiler";
import { getHttpOperation, getRequestVisibility, HttpOperation, Visibility } from "@cadl-lang/rest/http";
import {
  getSchemaForType,
  includeDerivedModel,
  getBodyType
} from "../modelUtils.js";

interface PendingSchema {
  type: Type,
  visibility: Visibility
}

export function transformSchemas(
  program: Program,
  client: Client,
  dpgContext: DpgContext
) {
  const schemaMap: Set<PendingSchema> = new Set<PendingSchema>();
  const operationGroups = listOperationGroups(dpgContext, client);
  const modelKey = Symbol("typescript-models-" + client.name);
  for (const operationGroup of operationGroups) {
    const operations = listOperationsInOperationGroup(
      dpgContext,
      operationGroup
    );
    for (const op of operations) {
      const route = ignoreDiagnostics(getHttpOperation(program, op));
      transformSchemaForRoute(route);
    }
  }
  const clientOperations = listOperationsInOperationGroup(dpgContext, client);
  for (const clientOp of clientOperations) {
    const route = ignoreDiagnostics(getHttpOperation(program, clientOp));
    transformSchemaForRoute(route);
  }
  function transformSchemaForRoute(route: HttpOperation) {
    const visibility = getRequestVisibility(route.verb);

    const bodyModel = getBodyType(program, route);
    if (bodyModel && bodyModel.kind === "Model") {
      getGeneratedModels(bodyModel, visibility);
    }
    for (const resp of route.responses) {
      if (
        resp.type.kind === "Model" &&
        resp.type.name === "ErrorResponse" &&
        resp.type.namespace?.name === "Foundations" &&
        resp.type.namespace.namespace?.name === "Core"
      ) {
        continue;
      }
      for (const resps of resp.responses) {
        const respModel = resps.body;
        if (!respModel) {
          continue;
        }
        getGeneratedModels(respModel.type, Visibility.Read);
      }
    }
  }
  return Array.from(schemaMap).map((item) => {
    const model = getSchemaForType(program, item.type, item.visibility);
    if (model.name === "") {
      return;
    }
    return model;
  });
  function setModelMap(type: Type, visibility: Visibility) {
    schemaMap.add({ type, visibility});
  }
  function getGeneratedModels(model: Type, visibility: Visibility) {
    if (model.kind === "Model") {
      if (model.templateArguments && model.templateArguments.length > 0) {
        for (const temp of model.templateArguments) {
          if (
            !program.stateMap(modelKey).get(temp) ||
            !program.stateMap(modelKey).get(temp)?.includes(context)
          ) {
            getGeneratedModels(temp, visibility);
            break;
          }
        }
      }

      setModelMap(model, visibility);
      const indexer = (model as Model).indexer;
      if (indexer?.value && !program.stateMap(modelKey).get(indexer?.value)) {
        setModelMap(indexer.value, visibility);
      }
      for (const prop of model.properties) {
        if (
          prop[1].type.kind === "Model" &&
          (!schemaMap.has({type: prop[1].type, visibility}))
        ) {
          if (prop[1].type.name === "Error") {
            continue;
          }
          getGeneratedModels(prop[1].type, visibility);
        }
      }
      const baseModel = model.baseModel;
      if (
        baseModel &&
        baseModel.kind === "Model" &&
        (!schemaMap.has({type: baseModel, visibility}))
      ) {
        getGeneratedModels(baseModel, visibility);
      }
      const derivedModels = model.derivedModels.filter(includeDerivedModel);

      // getSchemaOrRef on all children to push them into components.schemas
      for (const child of derivedModels) {
        if (
          child.kind === "Model" &&
          (!schemaMap.has({type: child, visibility}))
        ) {
          getGeneratedModels(child, visibility);
        }
      }
    }
  }
}
