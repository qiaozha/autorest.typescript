// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AzureLoadTestingContext } from "../../api/LoadTestAdministrationContext.js";
import {
  CustomizedAdministrationOperationsOperations,
  getCustomizedAdministrationOperationsOperations,
} from "./administrationOperations/index.js";

export interface CustomizedOperations {
  administrationOperations: CustomizedAdministrationOperationsOperations;
}

export function getCustomizedOperations(
  context: AzureLoadTestingContext
): CustomizedOperations {
  return {
    administrationOperations:
      getCustomizedAdministrationOperationsOperations(context),
  };
}
