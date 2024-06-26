// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import FaceClient from "./faceClient.js";

export * from "./faceClient.js";
export * from "./parameters.js";
export * from "./responses.js";
export * from "./clientDefinitions.js";
export * from "./isUnexpected.js";
export * from "./models.js";
export * from "./outputModels.js";
export {
  createFile,
  createFileFromStream,
  type CreateFileOptions,
  type CreateFileFromStreamOptions,
} from "@azure/core-rest-pipeline";

export default FaceClient;
