/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const Resource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CloudError: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CloudError",
    modelProperties: {
      code: {
        serializedName: "code",
        type: {
          name: "Number"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Sku: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Sku",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SubResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SubResource",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationResult",
    modelProperties: {
      status: {
        serializedName: "status",
        type: {
          name: "String"
        }
      },
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "OperationResultError"
        }
      }
    }
  }
};

export const OperationResultError: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationResultError",
    modelProperties: {
      code: {
        serializedName: "code",
        type: {
          name: "Number"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Product: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Product",
    modelProperties: {
      ...Resource.type.modelProperties,
      provisioningState: {
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      },
      provisioningStateValues: {
        serializedName: "properties.provisioningStateValues",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SubProduct: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SubProduct",
    modelProperties: {
      ...SubResource.type.modelProperties,
      provisioningState: {
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      },
      provisioningStateValues: {
        serializedName: "properties.provisioningStateValues",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LrOSPatch200SucceededIgnoreHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LrOSPatch200SucceededIgnoreHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LrOSPost202ListHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LrOSPost202ListHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LrOSPutNoHeaderInRetryHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LrOSPutNoHeaderInRetryHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LrOSPutAsyncRetrySucceededHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LrOSPutAsyncRetrySucceededHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LrOSPutAsyncNoRetrySucceededHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LrOSPutAsyncNoRetrySucceededHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LrOSPutAsyncRetryFailedHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LrOSPutAsyncRetryFailedHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LrOSPutAsyncNoRetrycanceledHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LrOSPutAsyncNoRetrycanceledHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LrOSPutAsyncNoHeaderInRetryHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LrOSPutAsyncNoHeaderInRetryHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LrOSDeleteProvisioning202Accepted200SucceededHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LrOSDeleteProvisioning202Accepted200SucceededHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LrOSDeleteProvisioning202DeletingFailed200Headers: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LrOSDeleteProvisioning202DeletingFailed200Headers",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LrOSDeleteProvisioning202Deletingcanceled200Headers: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LrOSDeleteProvisioning202Deletingcanceled200Headers",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LrOSDelete202Retry200Headers: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LrOSDelete202Retry200Headers",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LrOSDelete202NoRetry204Headers: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LrOSDelete202NoRetry204Headers",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LrOSDeleteNoHeaderInRetryHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LrOSDeleteNoHeaderInRetryHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LrOSDeleteAsyncNoHeaderInRetryHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LrOSDeleteAsyncNoHeaderInRetryHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LrOSDeleteAsyncRetrySucceededHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LrOSDeleteAsyncRetrySucceededHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LrOSDeleteAsyncNoRetrySucceededHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LrOSDeleteAsyncNoRetrySucceededHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LrOSDeleteAsyncRetryFailedHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LrOSDeleteAsyncRetryFailedHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LrOSDeleteAsyncRetrycanceledHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LrOSDeleteAsyncRetrycanceledHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LrOSPost202Retry200Headers: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LrOSPost202Retry200Headers",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LrOSPost202NoRetry204Headers: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LrOSPost202NoRetry204Headers",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LrOSPostAsyncRetrySucceededHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LrOSPostAsyncRetrySucceededHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LrOSPostAsyncNoRetrySucceededHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LrOSPostAsyncNoRetrySucceededHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LrOSPostAsyncRetryFailedHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LrOSPostAsyncRetryFailedHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LrOSPostAsyncRetrycanceledHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LrOSPostAsyncRetrycanceledHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LroRetrysPutAsyncRelativeRetrySucceededHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LroRetrysPutAsyncRelativeRetrySucceededHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LroRetrysDeleteProvisioning202Accepted200SucceededHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LroRetrysDeleteProvisioning202Accepted200SucceededHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LroRetrysDelete202Retry200Headers: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LroRetrysDelete202Retry200Headers",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LroRetrysDeleteAsyncRelativeRetrySucceededHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LroRetrysDeleteAsyncRelativeRetrySucceededHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LroRetrysPost202Retry200Headers: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LroRetrysPost202Retry200Headers",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LroRetrysPostAsyncRelativeRetrySucceededHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LroRetrysPostAsyncRelativeRetrySucceededHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LrosaDsPutAsyncRelativeRetry400Headers: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LrosaDsPutAsyncRelativeRetry400Headers",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LrosaDsDeleteNonRetry400Headers: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LrosaDsDeleteNonRetry400Headers",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LrosaDsDelete202NonRetry400Headers: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LrosaDsDelete202NonRetry400Headers",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LrosaDsDeleteAsyncRelativeRetry400Headers: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LrosaDsDeleteAsyncRelativeRetry400Headers",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LrosaDsPostNonRetry400Headers: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LrosaDsPostNonRetry400Headers",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LrosaDsPost202NonRetry400Headers: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LrosaDsPost202NonRetry400Headers",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LrosaDsPostAsyncRelativeRetry400Headers: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LrosaDsPostAsyncRelativeRetry400Headers",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LrosaDsPutAsyncRelativeRetryNoStatusHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LrosaDsPutAsyncRelativeRetryNoStatusHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LrosaDsPutAsyncRelativeRetryNoStatusPayloadHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LrosaDsPutAsyncRelativeRetryNoStatusPayloadHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LrosaDsDeleteAsyncRelativeRetryNoStatusHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LrosaDsDeleteAsyncRelativeRetryNoStatusHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LrosaDsPost202NoLocationHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LrosaDsPost202NoLocationHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LrosaDsPostAsyncRelativeRetryNoPayloadHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LrosaDsPostAsyncRelativeRetryNoPayloadHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LrosaDsPutAsyncRelativeRetryInvalidHeaderHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LrosaDsPutAsyncRelativeRetryInvalidHeaderHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LrosaDsPutAsyncRelativeRetryInvalidJsonPollingHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LrosaDsPutAsyncRelativeRetryInvalidJsonPollingHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LrosaDsDelete202RetryInvalidHeaderHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LrosaDsDelete202RetryInvalidHeaderHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LrosaDsDeleteAsyncRelativeRetryInvalidHeaderHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LrosaDsDeleteAsyncRelativeRetryInvalidHeaderHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LrosaDsDeleteAsyncRelativeRetryInvalidJsonPollingHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LrosaDsDeleteAsyncRelativeRetryInvalidJsonPollingHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LrosaDsPost202RetryInvalidHeaderHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LrosaDsPost202RetryInvalidHeaderHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LrosaDsPostAsyncRelativeRetryInvalidHeaderHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LrosaDsPostAsyncRelativeRetryInvalidHeaderHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LrosaDsPostAsyncRelativeRetryInvalidJsonPollingHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LrosaDsPostAsyncRelativeRetryInvalidJsonPollingHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LrOSCustomHeaderPutAsyncRetrySucceededHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LrOSCustomHeaderPutAsyncRetrySucceededHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LrOSCustomHeaderPost202Retry200Headers: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LrOSCustomHeaderPost202Retry200Headers",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LrOSCustomHeaderPostAsyncRetrySucceededHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LrOSCustomHeaderPostAsyncRetrySucceededHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};
