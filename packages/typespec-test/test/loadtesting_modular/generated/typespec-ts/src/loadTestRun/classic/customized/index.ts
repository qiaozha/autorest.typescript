// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AzureLoadTestingContext } from "../../api/LoadTestRunContext.js";
import {
  CustomizedTestRunOperationsOperations,
  getCustomizedTestRunOperationsOperations,
} from "./testRunOperations/index.js";

export interface CustomizedOperations {
  testRunOperations: CustomizedTestRunOperationsOperations;
}

export function getCustomizedOperations(
  context: AzureLoadTestingContext
): CustomizedOperations {
  return {
    testRunOperations: getCustomizedTestRunOperationsOperations(context),
  };
}
