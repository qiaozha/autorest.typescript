/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { OperationParameter, OperationURLParameter } from "@azure/core-client";

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const input: OperationParameter = {
  parameterPath: ["options", "input"],
  mapper: {
    serializedName: "input",
    type: {
      name: "Number"
    }
  }
};

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const Host: OperationURLParameter = {
  parameterPath: "Host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const input1: OperationParameter = {
  parameterPath: ["options", "input"],
  mapper: {
    serializedName: "input",
    type: {
      name: "Number"
    }
  }
};
