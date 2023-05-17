// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ErrorModel } from "@azure-rest/core-client";

/** A response containing error details. */
export interface ErrorResponseOutput {
  /** The error object. */
  error: ErrorModel;
}

/** Sample Model */
export interface UserOutput {
  /** The user's id. */
  readonly id: number;
  /** The user's name. */
  name?: string;
}
