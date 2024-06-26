// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";
import { FileType } from "./models.js";

export interface CreateOrUpdateTestOptionalParams extends OperationOptions {
  contentType?: string;
}

export interface CreateOrUpdateAppComponentsOptionalParams
  extends OperationOptions {
  contentType?: string;
}

export interface CreateOrUpdateServerMetricsConfigOptionalParams
  extends OperationOptions {
  contentType?: string;
}

export interface GetAppComponentsOptionalParams extends OperationOptions {}

export interface GetServerMetricsConfigOptionalParams
  extends OperationOptions {}

export interface GetTestOptionalParams extends OperationOptions {}

export interface GetTestFileOptionalParams extends OperationOptions {}

export interface ListTestFilesOptionalParams extends OperationOptions {}

export interface ListTestsOptionalParams extends OperationOptions {
  /**
   * Sort on the supported fields in (field asc/desc) format. eg:
   * lastModifiedDateTime asc. Supported fields - lastModifiedDateTime
   */
  orderby?: string;
  /**
   * Prefix based, case sensitive search on searchable fields - displayName,
   * createdBy. For example, to search for a test, with display name is Login Test,
   * the search parameter can be Login.
   */
  search?: string;
  /**
   * Start DateTime(ISO 8601 literal format) of the last updated time range to
   * filter tests.
   */
  lastModifiedStartTime?: string;
  /**
   * End DateTime(ISO 8601 literal format) of the last updated time range to filter
   * tests.
   */
  lastModifiedEndTime?: string;
  /** Number of results in response. */
  maxpagesize?: number;
}

export interface UploadTestFileOptionalParams extends OperationOptions {
  contentType?: string;
  /** File type */
  fileType?: FileType;
}

export interface DeleteTestFileOptionalParams extends OperationOptions {}

export interface DeleteTestOptionalParams extends OperationOptions {}
