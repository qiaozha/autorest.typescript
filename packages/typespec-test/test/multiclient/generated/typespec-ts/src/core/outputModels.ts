// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Paged } from "@azure/core-paging";
import { ErrorModel } from "@azure-rest/core-client";

export interface ResourceOutput {
  readonly id: string;
  name: string;
  description?: string;
  type: string;
}

/** A response containing error details. */
export interface ErrorResponseOutput {
  /** The error object. */
  error: ErrorModel;
}

/** Paged collection of Resource items */
export type ResourceListOutput = Paged<ResourceOutput>;
