// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ServiceContext } from "../../api/AContext.js";

export interface ClientOperations {
  structure: ClientStructureOperations;
}

export function getClientOperations(context: ServiceContext): ClientOperations {
  return {
    structure: getClientStructureOperations(context),
  };
}
