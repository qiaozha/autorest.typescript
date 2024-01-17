// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { SourcePath } from "./models";

export interface GetByUnionOnlyBodyParam {
  /**
   * Input parameter.
   *
   * Value may contain any sequence of octets
   */
  body:
    | SourcePath
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream;
}

export interface GetByUnionOnlyMediaTypesParam {
  contentType:
    | "application/pdf"
    | "application/json"
    | "image/jpeg"
    | "image/png"
    | "image/tiff"
    | "text/plain";
}

export type GetByUnionOnlyParameters = GetByUnionOnlyMediaTypesParam &
  GetByUnionOnlyBodyParam &
  RequestParameters;

export interface GetBySharedRouteForStringBodyParam {
  /** Input parameter. */
  body: string;
}

export interface GetBySharedRouteForStringMediaTypesParam {
  contentType: "text/plain";
}

export type GetBySharedRouteForStringParameters =
  GetBySharedRouteForStringMediaTypesParam &
    GetBySharedRouteForStringBodyParam &
    RequestParameters;

export interface GetBySharedRouteForModelBodyParam {
  /** Input parameter. */
  body: SourcePath;
}

export interface GetBySharedRouteForModelMediaTypesParam {
  contentType: "application/json";
}

export type GetBySharedRouteForModelParameters =
  GetBySharedRouteForModelMediaTypesParam &
    GetBySharedRouteForModelBodyParam &
    RequestParameters;

export interface GetBySharedRouteForBytesBodyParam {
  /**
   * Input parameter.
   *
   * Value may contain any sequence of octets
   */
  body:
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream;
}

export interface GetBySharedRouteForBytesMediaTypesParam {
  contentType: "application/pdf" | "image/jpeg" | "image/png" | "image/tiff";
}

export type GetBySharedRouteForBytesParameters =
  GetBySharedRouteForBytesMediaTypesParam &
    GetBySharedRouteForBytesBodyParam &
    RequestParameters;

export interface GetByOverloadParentBodyParam {
  /**
   * Input parameter.
   *
   * Value may contain any sequence of octets
   */
  body:
    | SourcePath
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream;
}

export interface GetByOverloadParentMediaTypesParam {
  contentType:
    | "application/pdf"
    | "application/json"
    | "image/jpeg"
    | "image/png"
    | "image/tiff"
    | "text/plain";
}

export type GetByOverloadParentParameters = GetByOverloadParentMediaTypesParam &
  GetByOverloadParentBodyParam &
  RequestParameters;

export interface GetByUnionBodyParam {
  /**
   * Input parameter.
   *
   * Value may contain any sequence of octets
   */
  body:
    | SourcePath
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream;
}

export interface GetByUnionMediaTypesParam {
  contentType:
    | "application/pdf"
    | "application/json"
    | "image/jpeg"
    | "image/png"
    | "image/tiff"
    | "text/plain";
}

export type GetByUnionParameters = GetByUnionMediaTypesParam &
  GetByUnionBodyParam &
  RequestParameters;

export interface GetBySharedRouteForStringBodyParam {
  /** Input parameter. */
  body: string;
}

export interface GetBySharedRouteForStringMediaTypesParam {
  contentType: "text/plain";
}

export type GetBySharedRouteForStringParameters =
  GetBySharedRouteForStringMediaTypesParam &
    GetBySharedRouteForStringBodyParam &
    RequestParameters;

export interface GetBySharedRouteForModelBodyParam {
  /** Input parameter. */
  body: SourcePath;
}

export interface GetBySharedRouteForModelMediaTypesParam {
  contentType: "application/json";
}

export type GetBySharedRouteForModelParameters =
  GetBySharedRouteForModelMediaTypesParam &
    GetBySharedRouteForModelBodyParam &
    RequestParameters;

export interface GetBySharedRouteForBytesBodyParam {
  /**
   * Input parameter.
   *
   * Value may contain any sequence of octets
   */
  body:
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream;
}

export interface GetBySharedRouteForBytesMediaTypesParam {
  contentType: "application/pdf" | "image/jpeg" | "image/png" | "image/tiff";
}

export type GetBySharedRouteForBytesParameters =
  GetBySharedRouteForBytesMediaTypesParam &
    GetBySharedRouteForBytesBodyParam &
    RequestParameters;

export interface GetByOverloadStringBodyParam {
  /** Input parameter. */
  body: string;
}

export interface GetByOverloadStringMediaTypesParam {
  contentType: "text/plain";
}

export type GetByOverloadStringParameters = GetByOverloadStringMediaTypesParam &
  GetByOverloadStringBodyParam &
  RequestParameters;

export interface GetByOverloadForModelBodyParam {
  /** Input parameter. */
  body: SourcePath;
}

export interface GetByOverloadForModelMediaTypesParam {
  contentType: "application/json";
}

export type GetByOverloadForModelParameters =
  GetByOverloadForModelMediaTypesParam &
    GetByOverloadForModelBodyParam &
    RequestParameters;

export interface GetByOverloadForBytesBodyParam {
  /**
   * Input parameter.
   *
   * Value may contain any sequence of octets
   */
  body:
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream;
}

export interface GetByOverloadForBytesMediaTypesParam {
  contentType: "application/pdf" | "image/jpeg" | "image/png" | "image/tiff";
}

export type GetByOverloadForBytesParameters =
  GetByOverloadForBytesMediaTypesParam &
    GetByOverloadForBytesBodyParam &
    RequestParameters;
