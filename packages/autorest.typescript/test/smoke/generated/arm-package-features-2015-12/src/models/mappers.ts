/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const OperationListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Operation",
            },
          },
        },
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const Operation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Operation",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String",
        },
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplay",
        },
      },
    },
  },
};

export const OperationDisplay: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationDisplay",
    modelProperties: {
      provider: {
        serializedName: "provider",
        type: {
          name: "String",
        },
      },
      resource: {
        serializedName: "resource",
        type: {
          name: "String",
        },
      },
      operation: {
        serializedName: "operation",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const FeatureOperationsListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FeatureOperationsListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "FeatureResult",
            },
          },
        },
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const FeatureResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FeatureResult",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String",
        },
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "FeatureProperties",
        },
      },
      id: {
        serializedName: "id",
        type: {
          name: "String",
        },
      },
      type: {
        serializedName: "type",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const FeatureProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FeatureProperties",
    modelProperties: {
      state: {
        serializedName: "state",
        type: {
          name: "String",
        },
      },
    },
  },
};
