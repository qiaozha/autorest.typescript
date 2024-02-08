// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import { SchemaContentTypeValues } from "./models/models.js";
import {
  ListSchemaGroupsOptions,
  ListSchemaVersionsOptions,
  GetSchemaByIdOptions,
  GetSchemaByVersionOptions,
  GetSchemaPropertiesByContentOptions,
  RegisterSchemaOptions,
} from "./models/options.js";
import { PagedAsyncIterableIterator } from "./models/pagingTypes.js";
import {
  listSchemaGroups,
  listSchemaVersions,
  getSchemaById,
  getSchemaByVersion,
  getSchemaPropertiesByContent,
  registerSchema,
  createSchemaRegistry,
  SchemaRegistryClientOptions,
  SchemaRegistryContext,
} from "./api/index.js";

export { SchemaRegistryClientOptions } from "./api/SchemaRegistryContext.js";

export class SchemaRegistryClient {
  private _client: SchemaRegistryContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    fullyQualifiedNamespace: string,
    credential: TokenCredential,
    options: SchemaRegistryClientOptions = {},
  ) {
    this._client = createSchemaRegistry(
      fullyQualifiedNamespace,
      credential,
      options,
    );
    this.pipeline = this._client.pipeline;
  }

  /** Gets the list of schema groups user is authorized to access. */
  listSchemaGroups(
    options: ListSchemaGroupsOptions = { requestOptions: {} },
  ): PagedAsyncIterableIterator<string> {
    return listSchemaGroups(this._client, options);
  }

  /** Gets the list of all versions of one schema. */
  listSchemaVersions(
    groupName: string,
    name: string,
    options: ListSchemaVersionsOptions = { requestOptions: {} },
  ): PagedAsyncIterableIterator<number> {
    return listSchemaVersions(this._client, groupName, name, options);
  }

  /** Gets a registered schema by its unique ID.  Azure Schema Registry guarantees that ID is unique within a namespace. Operation response type is based on serialization of schema requested. */
  getSchemaById(
    id: string,
    options: GetSchemaByIdOptions = { requestOptions: {} },
  ): Promise<Uint8Array> {
    return getSchemaById(this._client, id, options);
  }

  /** Gets one specific version of one schema. */
  getSchemaByVersion(
    groupName: string,
    name: string,
    version: number,
    options: GetSchemaByVersionOptions = { requestOptions: {} },
  ): Promise<Uint8Array> {
    return getSchemaByVersion(this._client, groupName, name, version, options);
  }

  /** Gets the properties referencing an existing schema within the specified schema group, as matched by schema content comparison. */
  getSchemaPropertiesByContent(
    groupName: string,
    name: string,
    contentType: SchemaContentTypeValues,
    schemaContent: Uint8Array,
    options: GetSchemaPropertiesByContentOptions = { requestOptions: {} },
  ): Promise<void> {
    return getSchemaPropertiesByContent(
      this._client,
      groupName,
      name,
      contentType,
      schemaContent,
      options,
    );
  }

  /** Register new schema. If schema of specified name does not exist in specified group, schema is created at version 1. If schema of specified name exists already in specified group, schema is created at latest version + 1. */
  registerSchema(
    groupName: string,
    name: string,
    contentType: SchemaContentTypeValues,
    content: Uint8Array,
    options: RegisterSchemaOptions = { requestOptions: {} },
  ): Promise<void> {
    return registerSchema(
      this._client,
      groupName,
      name,
      contentType,
      content,
      options,
    );
  }
}
