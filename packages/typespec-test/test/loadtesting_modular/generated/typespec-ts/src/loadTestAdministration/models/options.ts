// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";
import { FileType } from "./models.js";

export interface CustomizedAdministrationOperationsCreateOrUpdateTestOptions
  extends OperationOptions {
  contentType?: string;
}

export interface CustomizedAdministrationOperationsCreateOrUpdateAppComponentsOptions
  extends OperationOptions {
  contentType?: string;
}

export interface CustomizedAdministrationOperationsCreateOrUpdateServerMetricsConfigOptions
  extends OperationOptions {
  contentType?: string;
}

export interface CustomizedAdministrationOperationsGetAppComponentsOptions
  extends OperationOptions {}

export interface CustomizedAdministrationOperationsGetServerMetricsConfigOptions
  extends OperationOptions {}

export interface CustomizedAdministrationOperationsGetTestOptions
  extends OperationOptions {}

export interface CustomizedAdministrationOperationsGetTestFileOptions
  extends OperationOptions {}

export interface CustomizedAdministrationOperationsListTestFilesOptions
  extends OperationOptions {}

export interface CustomizedAdministrationOperationsListTestsOptions
  extends OperationOptions {
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

export interface CustomizedAdministrationOperationsUploadTestFileOptions
  extends OperationOptions {
  contentType?: string;
  /** File type */
  fileType?: FileType;
}

export interface CustomizedAdministrationOperationsDeleteTestFileOptions
  extends OperationOptions {}

export interface CustomizedAdministrationOperationsDeleteTestOptions
  extends OperationOptions {}
