// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import { ErrorModelOutput } from "./outputModels";

/** Get file */
export interface FilesGetFile200Response extends HttpResponse {
  status: "200";
}

/** Get file */
export interface FilesGetFileDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get a large file */
export interface FilesGetFileLarge200Response extends HttpResponse {
  status: "200";
}

/** Get a large file */
export interface FilesGetFileLargeDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get empty file */
export interface FilesGetEmptyFile200Response extends HttpResponse {
  status: "200";
}

/** Get empty file */
export interface FilesGetEmptyFileDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}
