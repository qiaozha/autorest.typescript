// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export {
  listSchemaGroups,
  listSchemaVersions,
  getSchemaById,
  getSchemaByVersion,
  getSchemaPropertiesByContent,
  registerSchema,
} from "./operations.js";
export {
  createSchemaRegistry,
  SchemaRegistryClientOptions,
  SchemaRegistryContext,
} from "./SchemaRegistryContext.js";
