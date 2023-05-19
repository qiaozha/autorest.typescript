// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";

/** The request has succeeded. */
export interface GetString200Response extends HttpResponse {
  status: "200";
  body: string;
}

/** The request has succeeded. */
export interface GetNumber200Response extends HttpResponse {
  status: "200";
  body: number;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface UploadString204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface UploadBytes204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ProcessString204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ProcessBytes204Response extends HttpResponse {
  status: "204";
}
