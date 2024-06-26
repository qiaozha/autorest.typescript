/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** Optional parameters. */
export interface SendOnDefault$binaryOptionalParams
  extends coreClient.OperationOptions {
  /** Excluded Ids */
  excluded?: string[];
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface SendOnDefault$textOptionalParams
  extends coreClient.OperationOptions {
  /** Excluded Ids */
  excluded?: string[];
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface Send$binaryOptionalParams extends coreClient.OperationOptions {
  /** Excluded Ids */
  excluded?: string[];
}

/** Optional parameters. */
export interface Send$textOptionalParams extends coreClient.OperationOptions {
  /** Excluded Ids */
  excluded?: string[];
}

/** Contains response data for the send operation. */
export type SendResponse = {
  /** The parsed response body. */
  body: string;
};

/** Optional parameters. */
export interface MediaTypesV3LROClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** Overrides client endpoint. */
  endpoint?: string;
}
