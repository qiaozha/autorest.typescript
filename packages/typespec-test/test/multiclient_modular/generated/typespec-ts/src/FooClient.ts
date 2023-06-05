// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  createFoo,
  FooClientOptions,
  Client,
  Resource,
  CustomPage,
  createOrUpdate,
  get,
  deleteOperation,
  list,
  CreateOrUpdateOptions,
  GetOptions,
  DeleteOptions,
  ListOptions,
} from "./api/foo/index.js";

export class FooClient {
  private _client: Client.FooContext;

  /** Cadl Foo */
  constructor(endpoint: string, options: FooClientOptions = {}) {
    this._client = createFoo(endpoint, options);
  }

  /** Creates a new resource or updates an existing one. */
  createOrUpdate(
    type: string,
    name: string,
    options: CreateOrUpdateOptions = { requestOptions: {} }
  ): Promise<Resource> {
    return createOrUpdate(this._client, type, name, options);
  }

  /** Gets the details of a resource. */
  get(
    name: string,
    options: GetOptions = { requestOptions: {} }
  ): Promise<Resource> {
    return get(this._client, name, options);
  }

  /** Deletes a resource. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name. Please add @projectedName(
   *       "javascript", "<JS-Specific-Name>") to the operation to override the generated name.
   */
  deleteOperation(
    name: string,
    options: DeleteOptions = { requestOptions: {} }
  ): Promise<void> {
    return deleteOperation(this._client, name, options);
  }

  /** Lists the existing resources. */
  list(options: ListOptions = { requestOptions: {} }): Promise<CustomPage> {
    return list(this._client, options);
  }
}
