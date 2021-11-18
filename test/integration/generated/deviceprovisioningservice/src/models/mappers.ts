import * as coreClient from "@azure/core-client";

export const OperationListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Operation"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Operation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Operation",
    modelProperties: {
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplay"
        }
      }
    }
  }
};

export const OperationDisplay: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationDisplay",
    modelProperties: {
      provider: {
        serializedName: "provider",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "resource",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "operation",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ErrorDetails: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorDetails",
    modelProperties: {
      code: {
        serializedName: "code",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      httpStatusCode: {
        serializedName: "httpStatusCode",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CertificateResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CertificateResponse",
    modelProperties: {
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "CertificateProperties"
        }
      },
      id: {
        serializedName: "id",
        readOnly: true,
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
      },
      etag: {
        serializedName: "etag",
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
      }
    }
  }
};

export const CertificateProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CertificateProperties",
    modelProperties: {
      subject: {
        serializedName: "subject",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      expiry: {
        serializedName: "expiry",
        readOnly: true,
        type: {
          name: "DateTimeRfc1123"
        }
      },
      thumbprint: {
        serializedName: "thumbprint",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      isVerified: {
        serializedName: "isVerified",
        readOnly: true,
        type: {
          name: "Boolean"
        }
      },
      certificate: {
        serializedName: "certificate",
        readOnly: true,
        type: {
          name: "ByteArray"
        }
      },
      created: {
        serializedName: "created",
        readOnly: true,
        type: {
          name: "DateTimeRfc1123"
        }
      },
      updated: {
        serializedName: "updated",
        readOnly: true,
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const CertificateBodyDescription: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CertificateBodyDescription",
    modelProperties: {
      certificate: {
        serializedName: "certificate",
        type: {
          name: "String"
        }
      },
      isVerified: {
        serializedName: "isVerified",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const IotDpsPropertiesDescription: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IotDpsPropertiesDescription",
    modelProperties: {
      state: {
        serializedName: "state",
        type: {
          name: "String"
        }
      },
      publicNetworkAccess: {
        serializedName: "publicNetworkAccess",
        type: {
          name: "String"
        }
      },
      ipFilterRules: {
        serializedName: "ipFilterRules",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "IPFilterRule"
            }
          }
        }
      },
      privateEndpointConnections: {
        serializedName: "privateEndpointConnections",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PrivateEndpointConnection"
            }
          }
        }
      },
      provisioningState: {
        serializedName: "provisioningState",
        type: {
          name: "String"
        }
      },
      iotHubs: {
        serializedName: "iotHubs",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "IotHubDefinitionDescription"
            }
          }
        }
      },
      allocationPolicy: {
        serializedName: "allocationPolicy",
        type: {
          name: "String"
        }
      },
      serviceOperationsHostName: {
        serializedName: "serviceOperationsHostName",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      deviceProvisioningHostName: {
        serializedName: "deviceProvisioningHostName",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      idScope: {
        serializedName: "idScope",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      authorizationPolicies: {
        serializedName: "authorizationPolicies",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className:
                "SharedAccessSignatureAuthorizationRuleAccessRightsDescription"
            }
          }
        }
      }
    }
  }
};

export const IPFilterRule: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IPFilterRule",
    modelProperties: {
      filterName: {
        serializedName: "filterName",
        required: true,
        type: {
          name: "String"
        }
      },
      action: {
        serializedName: "action",
        required: true,
        type: {
          name: "Enum",
          allowedValues: ["Accept", "Reject"]
        }
      },
      ipMask: {
        serializedName: "ipMask",
        required: true,
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "target",
        type: {
          name: "Enum",
          allowedValues: ["all", "serviceApi", "deviceApi"]
        }
      }
    }
  }
};

export const PrivateEndpointConnection: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateEndpointConnection",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        constraints: {
          Pattern: new RegExp("^(?![0-9]+$)(?!-)[a-zA-Z0-9-]{2,49}[a-zA-Z0-9]$")
        },
        serializedName: "name",
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
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "PrivateEndpointConnectionProperties"
        }
      }
    }
  }
};

export const PrivateEndpointConnectionProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateEndpointConnectionProperties",
    modelProperties: {
      privateEndpoint: {
        serializedName: "privateEndpoint",
        type: {
          name: "Composite",
          className: "PrivateEndpoint"
        }
      },
      privateLinkServiceConnectionState: {
        serializedName: "privateLinkServiceConnectionState",
        type: {
          name: "Composite",
          className: "PrivateLinkServiceConnectionState"
        }
      }
    }
  }
};

export const PrivateEndpoint: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateEndpoint",
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

export const PrivateLinkServiceConnectionState: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateLinkServiceConnectionState",
    modelProperties: {
      status: {
        serializedName: "status",
        required: true,
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        required: true,
        type: {
          name: "String"
        }
      },
      actionsRequired: {
        serializedName: "actionsRequired",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const IotHubDefinitionDescription: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IotHubDefinitionDescription",
    modelProperties: {
      applyAllocationPolicy: {
        serializedName: "applyAllocationPolicy",
        type: {
          name: "Boolean"
        }
      },
      allocationWeight: {
        serializedName: "allocationWeight",
        type: {
          name: "Number"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      connectionString: {
        serializedName: "connectionString",
        required: true,
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SharedAccessSignatureAuthorizationRuleAccessRightsDescription: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SharedAccessSignatureAuthorizationRuleAccessRightsDescription",
    modelProperties: {
      keyName: {
        serializedName: "keyName",
        required: true,
        type: {
          name: "String"
        }
      },
      primaryKey: {
        serializedName: "primaryKey",
        type: {
          name: "String"
        }
      },
      secondaryKey: {
        serializedName: "secondaryKey",
        type: {
          name: "String"
        }
      },
      rights: {
        serializedName: "rights",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const IotDpsSkuInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IotDpsSkuInfo",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      tier: {
        serializedName: "tier",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      capacity: {
        serializedName: "capacity",
        type: {
          name: "Number"
        }
      }
    }
  }
};

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
      name: {
        constraints: {
          Pattern: new RegExp("^(?![0-9]+$)(?!-)[a-zA-Z0-9-]{2,49}[a-zA-Z0-9]$")
        },
        serializedName: "name",
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
      location: {
        serializedName: "location",
        required: true,
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
      }
    }
  }
};

export const TagsResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TagsResource",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      }
    }
  }
};

export const CertificateListDescription: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CertificateListDescription",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CertificateResponse"
            }
          }
        }
      }
    }
  }
};

export const ProvisioningServiceDescriptionListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ProvisioningServiceDescriptionListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ProvisioningServiceDescription"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AsyncOperationResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AsyncOperationResult",
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
          className: "ErrorMesssage"
        }
      }
    }
  }
};

export const ErrorMesssage: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorMesssage",
    modelProperties: {
      code: {
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const IotDpsSkuDefinitionListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IotDpsSkuDefinitionListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "IotDpsSkuDefinition"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const IotDpsSkuDefinition: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IotDpsSkuDefinition",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VerificationCodeResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VerificationCodeResponse",
    modelProperties: {
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      etag: {
        serializedName: "etag",
        readOnly: true,
        type: {
          name: "String"
        }
      },
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
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "VerificationCodeResponseProperties"
        }
      }
    }
  }
};

export const VerificationCodeResponseProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VerificationCodeResponseProperties",
    modelProperties: {
      verificationCode: {
        serializedName: "verificationCode",
        type: {
          name: "String"
        }
      },
      subject: {
        serializedName: "subject",
        type: {
          name: "String"
        }
      },
      expiry: {
        serializedName: "expiry",
        type: {
          name: "String"
        }
      },
      thumbprint: {
        serializedName: "thumbprint",
        type: {
          name: "String"
        }
      },
      isVerified: {
        serializedName: "isVerified",
        type: {
          name: "Boolean"
        }
      },
      certificate: {
        serializedName: "certificate",
        type: {
          name: "ByteArray"
        }
      },
      created: {
        serializedName: "created",
        type: {
          name: "String"
        }
      },
      updated: {
        serializedName: "updated",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VerificationCodeRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VerificationCodeRequest",
    modelProperties: {
      certificate: {
        serializedName: "certificate",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationInputs: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationInputs",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const NameAvailabilityInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NameAvailabilityInfo",
    modelProperties: {
      nameAvailable: {
        serializedName: "nameAvailable",
        type: {
          name: "Boolean"
        }
      },
      reason: {
        serializedName: "reason",
        type: {
          name: "String"
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

export const SharedAccessSignatureAuthorizationRuleListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SharedAccessSignatureAuthorizationRuleListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className:
                "SharedAccessSignatureAuthorizationRuleAccessRightsDescription"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateLinkResources: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateLinkResources",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "GroupIdInformation"
            }
          }
        }
      }
    }
  }
};

export const GroupIdInformation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GroupIdInformation",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        constraints: {
          Pattern: new RegExp("^(?![0-9]+$)(?!-)[a-zA-Z0-9-]{2,49}[a-zA-Z0-9]$")
        },
        serializedName: "name",
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
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "GroupIdInformationProperties"
        }
      }
    }
  }
};

export const GroupIdInformationProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GroupIdInformationProperties",
    modelProperties: {
      groupId: {
        serializedName: "groupId",
        type: {
          name: "String"
        }
      },
      requiredMembers: {
        serializedName: "requiredMembers",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      requiredZoneNames: {
        serializedName: "requiredZoneNames",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const ProvisioningServiceDescription: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ProvisioningServiceDescription",
    modelProperties: {
      ...Resource.type.modelProperties,
      etag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "IotDpsPropertiesDescription"
        }
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "IotDpsSkuInfo"
        }
      }
    }
  }
};
