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
export interface NumberGetNullOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getNull operation. */
export type NumberGetNullResponse = {
  /** The parsed response body. */
  body: number;
};

/** Optional parameters. */
export interface NumberGetInvalidFloatOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getInvalidFloat operation. */
export type NumberGetInvalidFloatResponse = {
  /** The parsed response body. */
  body: number;
};

/** Optional parameters. */
export interface NumberGetInvalidDoubleOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getInvalidDouble operation. */
export type NumberGetInvalidDoubleResponse = {
  /** The parsed response body. */
  body: number;
};

/** Optional parameters. */
export interface NumberGetInvalidDecimalOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getInvalidDecimal operation. */
export type NumberGetInvalidDecimalResponse = {
  /** The parsed response body. */
  body: number;
};

/** Optional parameters. */
export interface NumberPutBigFloatOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface NumberGetBigFloatOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getBigFloat operation. */
export type NumberGetBigFloatResponse = {
  /** The parsed response body. */
  body: number;
};

/** Optional parameters. */
export interface NumberPutBigDoubleOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface NumberGetBigDoubleOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getBigDouble operation. */
export type NumberGetBigDoubleResponse = {
  /** The parsed response body. */
  body: number;
};

/** Optional parameters. */
export interface NumberPutBigDoublePositiveDecimalOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface NumberGetBigDoublePositiveDecimalOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getBigDoublePositiveDecimal operation. */
export type NumberGetBigDoublePositiveDecimalResponse = {
  /** The parsed response body. */
  body: number;
};

/** Optional parameters. */
export interface NumberPutBigDoubleNegativeDecimalOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface NumberGetBigDoubleNegativeDecimalOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getBigDoubleNegativeDecimal operation. */
export type NumberGetBigDoubleNegativeDecimalResponse = {
  /** The parsed response body. */
  body: number;
};

/** Optional parameters. */
export interface NumberPutBigDecimalOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface NumberGetBigDecimalOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getBigDecimal operation. */
export type NumberGetBigDecimalResponse = {
  /** The parsed response body. */
  body: number;
};

/** Optional parameters. */
export interface NumberPutBigDecimalPositiveDecimalOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface NumberGetBigDecimalPositiveDecimalOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getBigDecimalPositiveDecimal operation. */
export type NumberGetBigDecimalPositiveDecimalResponse = {
  /** The parsed response body. */
  body: number;
};

/** Optional parameters. */
export interface NumberPutBigDecimalNegativeDecimalOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface NumberGetBigDecimalNegativeDecimalOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getBigDecimalNegativeDecimal operation. */
export type NumberGetBigDecimalNegativeDecimalResponse = {
  /** The parsed response body. */
  body: number;
};

/** Optional parameters. */
export interface NumberPutSmallFloatOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface NumberGetSmallFloatOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getSmallFloat operation. */
export type NumberGetSmallFloatResponse = {
  /** The parsed response body. */
  body: number;
};

/** Optional parameters. */
export interface NumberPutSmallDoubleOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface NumberGetSmallDoubleOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getSmallDouble operation. */
export type NumberGetSmallDoubleResponse = {
  /** The parsed response body. */
  body: number;
};

/** Optional parameters. */
export interface NumberPutSmallDecimalOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface NumberGetSmallDecimalOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getSmallDecimal operation. */
export type NumberGetSmallDecimalResponse = {
  /** The parsed response body. */
  body: number;
};

/** Optional parameters. */
export interface BodyNumberClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  Host?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
