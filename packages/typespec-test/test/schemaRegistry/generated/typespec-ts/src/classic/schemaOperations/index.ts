// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { SchemaRegistryContext } from "../../api/SchemaRegistryContext.js";
import { SchemaContentTypeValues } from "../../models/models.js";
import {
  listSchemaGroups,
  getSchemaById,
  listSchemaVersions,
  getSchemaByVersion,
  getSchemaIdByContent,
  registerSchema,
} from "../../api/schemaOperations/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import {
  SchemaOperationsListSchemaGroupsOptions,
  SchemaOperationsGetSchemaByIdOptions,
  SchemaOperationsListSchemaVersionsOptions,
  SchemaOperationsGetSchemaByVersionOptions,
  SchemaOperationsGetSchemaIdByContentOptions,
  SchemaOperationsRegisterSchemaOptions,
} from "../../models/options.js";

export interface SchemaOperationsOperations {
  listSchemaGroups: (
    options?: SchemaOperationsListSchemaGroupsOptions,
  ) => PagedAsyncIterableIterator<string>;
  getSchemaById: (
    id: string,
    options?: SchemaOperationsGetSchemaByIdOptions,
  ) => Promise<Uint8Array>;
  listSchemaVersions: (
    groupName: string,
    name: string,
    options?: SchemaOperationsListSchemaVersionsOptions,
  ) => PagedAsyncIterableIterator<number>;
  getSchemaByVersion: (
    groupName: string,
    name: string,
    version: number,
    options?: SchemaOperationsGetSchemaByVersionOptions,
  ) => Promise<Uint8Array>;
  getSchemaIdByContent: (
    groupName: string,
    name: string,
    contentType: SchemaContentTypeValues,
    schemaContent: Uint8Array,
    options?: SchemaOperationsGetSchemaIdByContentOptions,
  ) => Promise<void>;
  registerSchema: (
    groupName: string,
    name: string,
    contentType: SchemaContentTypeValues,
    content: Uint8Array,
    options?: SchemaOperationsRegisterSchemaOptions,
  ) => Promise<void>;
}

export function getSchemaOperations(context: SchemaRegistryContext) {
  return {
    listSchemaGroups: (options?: SchemaOperationsListSchemaGroupsOptions) =>
      listSchemaGroups(context, options),
    getSchemaById: (
      id: string,
      options?: SchemaOperationsGetSchemaByIdOptions,
    ) => getSchemaById(context, id, options),
    listSchemaVersions: (
      groupName: string,
      name: string,
      options?: SchemaOperationsListSchemaVersionsOptions,
    ) => listSchemaVersions(context, groupName, name, options),
    getSchemaByVersion: (
      groupName: string,
      name: string,
      version: number,
      options?: SchemaOperationsGetSchemaByVersionOptions,
    ) => getSchemaByVersion(context, groupName, name, version, options),
    getSchemaIdByContent: (
      groupName: string,
      name: string,
      contentType: SchemaContentTypeValues,
      schemaContent: Uint8Array,
      options?: SchemaOperationsGetSchemaIdByContentOptions,
    ) =>
      getSchemaIdByContent(
        context,
        groupName,
        name,
        contentType,
        schemaContent,
        options,
      ),
    registerSchema: (
      groupName: string,
      name: string,
      contentType: SchemaContentTypeValues,
      content: Uint8Array,
      options?: SchemaOperationsRegisterSchemaOptions,
    ) =>
      registerSchema(context, groupName, name, contentType, content, options),
  };
}

export function getSchemaOperationsOperations(
  context: SchemaRegistryContext,
): SchemaOperationsOperations {
  return {
    ...getSchemaOperations(context),
  };
}
