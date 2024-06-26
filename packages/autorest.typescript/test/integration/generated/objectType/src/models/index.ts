/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** Optional parameters. */
export interface GetOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type GetResponse = Record<string, unknown>;

/** Optional parameters. */
export interface PutOptionalParams extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ObjectTypeClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
