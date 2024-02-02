// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** The list of strings with server paging support. */
export interface StringsList {
  /** The collection of pageable items. */
  value: string[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** The list of int32s with server paging support. */
export interface Int32sList {
  /** The collection of pageable items. */
  value: number[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Alias for SchemaContentTypeValues */
export type SchemaContentTypeValues =
  | "application/octet-stream"
  | "text/plain; charset=utf-8"
  | "application/json; serialization=Avro"
  | "application/json; serialization=Json"
  | "text/vnd.ms.protobuf";
