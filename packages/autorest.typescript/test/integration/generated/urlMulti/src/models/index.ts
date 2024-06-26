/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export interface ErrorModel {
  status?: number;
  message?: string;
}

/** Optional parameters. */
export interface QueriesArrayStringMultiNullOptionalParams
  extends coreClient.OperationOptions {
  /** a null array of string using the multi-array format */
  arrayQuery?: string[];
}

/** Optional parameters. */
export interface QueriesArrayStringMultiEmptyOptionalParams
  extends coreClient.OperationOptions {
  /** an empty array [] of string using the multi-array format */
  arrayQuery?: string[];
}

/** Optional parameters. */
export interface QueriesArrayStringMultiValidOptionalParams
  extends coreClient.OperationOptions {
  /** an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the mult-array format */
  arrayQuery?: (string | null)[];
}

/** Optional parameters. */
export interface UrlMultiClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
