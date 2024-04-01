// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ArrayContext } from "../../api/ArrayContext.js";
import { int64ValueGet, int64ValuePut } from "../../api/int64Value/index.js";
import { GetOptions, PutOptions } from "../../models/options.js";

export interface Int64ValueOperations {
  get: (options?: GetOptions) => Promise<number[]>;
  put: (body: number[], options?: PutOptions) => Promise<void>;
}

export function getInt64Value(context: ArrayContext) {
  return {
    get: (options?: GetOptions) => int64ValueGet(context, options),
    put: (body: number[], options?: PutOptions) =>
      int64ValuePut(context, body, options),
  };
}

export function getInt64ValueOperations(
  context: ArrayContext,
): Int64ValueOperations {
  return {
    ...getInt64Value(context),
  };
}
