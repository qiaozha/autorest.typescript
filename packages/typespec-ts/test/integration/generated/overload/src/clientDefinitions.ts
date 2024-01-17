// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  GetThingParameters,
  UploadParameters,
  ProcessParameters,
  GetStringParameters,
  GetNumberParameters,
  UploadStringParameters,
  UploadBytesParameters,
  ProcessStringParameters,
  ProcessBytesParameters,
} from "./parameters";
import {
  GetThing200Response,
  Upload204Response,
  Process204Response,
  GetString200Response,
  GetNumber200Response,
  UploadString204Response,
  UploadBytes204Response,
  ProcessString204Response,
  ProcessBytes204Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface GetThing {
  /** Overload with same routes */
  post(options: GetThingParameters): StreamableMethod<GetThing200Response>;
}

export interface Upload {
  /** Overload with different routes */
  put(options: UploadParameters): StreamableMethod<Upload204Response>;
}

export interface Process {
  /** Overloads with different actions */
  put(options: ProcessParameters): StreamableMethod<Process204Response>;
}

export interface GetString {
  post(options: GetStringParameters): StreamableMethod<GetString200Response>;
  post(options: GetNumberParameters): StreamableMethod<GetNumber200Response>;
}

export interface UploadString {
  put(
    options: UploadStringParameters,
  ): StreamableMethod<UploadString204Response>;
}

export interface UploadBytes {
  put(options: UploadBytesParameters): StreamableMethod<UploadBytes204Response>;
}

export interface ProcessString {
  post(
    options: ProcessStringParameters,
  ): StreamableMethod<ProcessString204Response>;
  put(
    options: ProcessBytesParameters,
  ): StreamableMethod<ProcessBytes204Response>;
}

export interface Routes {
  /** Resource for '/get' has methods for the following verbs: post */
  (path: "/get"): GetThing;
  /** Resource for '/changed-routes' has methods for the following verbs: put */
  (path: "/changed-routes"): Upload;
  /** Resource for '/changed-actions' has methods for the following verbs: put */
  (path: "/changed-actions"): Process;
  /** Resource for '/overload/get' has methods for the following verbs: post */
  (path: "/overload/get"): GetString;
  /** Resource for '/overload/toString' has methods for the following verbs: put */
  (path: "/overload/toString"): UploadString;
  /** Resource for '/overload/changed-routes' has methods for the following verbs: put */
  (path: "/overload/changed-routes"): UploadBytes;
  /** Resource for '/overload/changed-actions' has methods for the following verbs: post, put */
  (path: "/overload/changed-actions"): ProcessString;
}

export type OveralodClient = Client & {
  path: Routes;
};
