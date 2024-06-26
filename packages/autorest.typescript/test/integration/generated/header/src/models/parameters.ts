/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { OperationParameter, OperationURLParameter } from "@azure/core-client";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String",
    },
  },
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String",
    },
  },
  skipEncoding: true,
};

export const userAgent: OperationParameter = {
  parameterPath: "userAgent",
  mapper: {
    serializedName: "User-Agent",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const contentType: OperationParameter = {
  parameterPath: "contentType",
  mapper: {
    serializedName: "Content-Type",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const scenario: OperationParameter = {
  parameterPath: "scenario",
  mapper: {
    serializedName: "scenario",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const value: OperationParameter = {
  parameterPath: "value",
  mapper: {
    serializedName: "value",
    required: true,
    type: {
      name: "Number",
    },
  },
};

export const value1: OperationParameter = {
  parameterPath: "value",
  mapper: {
    serializedName: "value",
    required: true,
    type: {
      name: "Number",
    },
  },
};

export const value2: OperationParameter = {
  parameterPath: "value",
  mapper: {
    serializedName: "value",
    required: true,
    type: {
      name: "Boolean",
    },
  },
};

export const value3: OperationParameter = {
  parameterPath: ["options", "value"],
  mapper: {
    serializedName: "value",
    type: {
      name: "String",
    },
  },
};

export const value4: OperationParameter = {
  parameterPath: "value",
  mapper: {
    serializedName: "value",
    required: true,
    type: {
      name: "Date",
    },
  },
};

export const value5: OperationParameter = {
  parameterPath: "value",
  mapper: {
    serializedName: "value",
    required: true,
    type: {
      name: "DateTime",
    },
  },
};

export const value6: OperationParameter = {
  parameterPath: ["options", "value"],
  mapper: {
    serializedName: "value",
    type: {
      name: "DateTimeRfc1123",
    },
  },
};

export const value7: OperationParameter = {
  parameterPath: "value",
  mapper: {
    serializedName: "value",
    required: true,
    type: {
      name: "TimeSpan",
    },
  },
};

export const value8: OperationParameter = {
  parameterPath: "value",
  mapper: {
    serializedName: "value",
    required: true,
    type: {
      name: "ByteArray",
    },
  },
};

export const value9: OperationParameter = {
  parameterPath: ["options", "value"],
  mapper: {
    serializedName: "value",
    type: {
      name: "Enum",
      allowedValues: ["White", "black", "GREY"],
    },
  },
};
