// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";
import { ListItemInputExtensibleEnum } from "./models.js";

export interface CreateOrUpdateOptionalParams extends OperationOptions {
  /** This request has a JSON Merge Patch body. */
  contentType?: string;
}

export interface CreateOrReplaceOptionalParams extends OperationOptions {}

export interface GetOptionalParams extends OperationOptions {}

export interface ListOptionalParams extends OperationOptions {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
  /** Expressions that specify the order of returned results. */
  orderby?: string[];
  /** Filter the result list using the given expression. */
  filter?: string;
  /** Select the specified fields to be included in the response. */
  select?: string[];
  /** Expand the indicated resources into the response. */
  expand?: string[];
}

export interface ListWithPageOptionalParams extends OperationOptions {}

export interface ListWithParametersOptionalParams extends OperationOptions {
  /** Another query parameter. */
  another?: ListItemInputExtensibleEnum;
}

export interface ListWithCustomPageModelOptionalParams
  extends OperationOptions {}

export interface DeleteOptionalParams extends OperationOptions {}

export interface ExportOptionalParams extends OperationOptions {}

export interface ListFirstItemOptionalParams extends OperationOptions {}

export interface ListSecondItemOptionalParams extends OperationOptions {}
