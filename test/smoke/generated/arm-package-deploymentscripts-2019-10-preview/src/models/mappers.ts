/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const ManagedServiceIdentity: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ManagedServiceIdentity",
    modelProperties: {
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      userAssignedIdentities: {
        serializedName: "userAssignedIdentities",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "UserAssignedIdentity" }
          }
        }
      }
    }
  }
};

export const UserAssignedIdentity: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UserAssignedIdentity",
    modelProperties: {
      principalId: {
        serializedName: "principalId",
        type: {
          name: "String"
        }
      },
      clientId: {
        serializedName: "clientId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SystemData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SystemData",
    modelProperties: {
      createdBy: {
        serializedName: "createdBy",
        type: {
          name: "String"
        }
      },
      createdByType: {
        serializedName: "createdByType",
        type: {
          name: "String"
        }
      },
      createdAt: {
        serializedName: "createdAt",
        type: {
          name: "DateTime"
        }
      },
      lastModifiedBy: {
        serializedName: "lastModifiedBy",
        type: {
          name: "String"
        }
      },
      lastModifiedByType: {
        serializedName: "lastModifiedByType",
        type: {
          name: "String"
        }
      },
      lastModifiedAt: {
        serializedName: "lastModifiedAt",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const AzureResourceBase: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AzureResourceBase",
    modelProperties: {
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

export const DeploymentScriptsError: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DeploymentScriptsError",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorResponse"
        }
      }
    }
  }
};

export const ErrorResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      code: {
        serializedName: "code",
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
      target: {
        serializedName: "target",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorResponse"
            }
          }
        }
      },
      additionalInfo: {
        serializedName: "additionalInfo",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorAdditionalInfo"
            }
          }
        }
      }
    }
  }
};

export const ErrorAdditionalInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorAdditionalInfo",
    modelProperties: {
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      info: {
        serializedName: "info",
        readOnly: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const DeploymentScriptListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DeploymentScriptListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DeploymentScript"
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

export const ScriptLogsList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ScriptLogsList",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ScriptLog"
            }
          }
        }
      }
    }
  }
};

export const DeploymentScriptPropertiesBase: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DeploymentScriptPropertiesBase",
    modelProperties: {
      containerSettings: {
        serializedName: "containerSettings",
        type: {
          name: "Composite",
          className: "ContainerConfiguration"
        }
      },
      storageAccountSettings: {
        serializedName: "storageAccountSettings",
        type: {
          name: "Composite",
          className: "StorageAccountConfiguration"
        }
      },
      cleanupPreference: {
        serializedName: "cleanupPreference",
        type: {
          name: "String"
        }
      },
      provisioningState: {
        serializedName: "provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        type: {
          name: "Composite",
          className: "ScriptStatus"
        }
      },
      outputs: {
        serializedName: "outputs",
        readOnly: true,
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Dictionary", value: { type: { name: "any" } } }
          }
        }
      }
    }
  }
};

export const ContainerConfiguration: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ContainerConfiguration",
    modelProperties: {
      containerGroupName: {
        constraints: {
          MaxLength: 63,
          MinLength: 1
        },
        serializedName: "containerGroupName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const StorageAccountConfiguration: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "StorageAccountConfiguration",
    modelProperties: {
      storageAccountName: {
        serializedName: "storageAccountName",
        type: {
          name: "String"
        }
      },
      storageAccountKey: {
        serializedName: "storageAccountKey",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ScriptStatus: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ScriptStatus",
    modelProperties: {
      containerInstanceId: {
        serializedName: "containerInstanceId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      storageAccountId: {
        serializedName: "storageAccountId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      startTime: {
        serializedName: "startTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      endTime: {
        serializedName: "endTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      expirationTime: {
        serializedName: "expirationTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorResponse"
        }
      }
    }
  }
};

export const ScriptConfigurationBase: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ScriptConfigurationBase",
    modelProperties: {
      primaryScriptUri: {
        serializedName: "primaryScriptUri",
        type: {
          name: "String"
        }
      },
      supportingScriptUris: {
        serializedName: "supportingScriptUris",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      scriptContent: {
        constraints: {
          MaxLength: 32000
        },
        serializedName: "scriptContent",
        type: {
          name: "String"
        }
      },
      arguments: {
        serializedName: "arguments",
        type: {
          name: "String"
        }
      },
      environmentVariables: {
        serializedName: "environmentVariables",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "EnvironmentVariable"
            }
          }
        }
      },
      forceUpdateTag: {
        serializedName: "forceUpdateTag",
        type: {
          name: "String"
        }
      },
      retentionInterval: {
        serializedName: "retentionInterval",
        required: true,
        type: {
          name: "TimeSpan"
        }
      },
      timeout: {
        serializedName: "timeout",
        type: {
          name: "TimeSpan"
        }
      }
    }
  }
};

export const EnvironmentVariable: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EnvironmentVariable",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      },
      secureValue: {
        serializedName: "secureValue",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DeploymentScript: coreClient.CompositeMapper = {
  serializedName: "DeploymentScript",
  type: {
    name: "Composite",
    className: "DeploymentScript",
    uberParent: "AzureResourceBase",
    polymorphicDiscriminator: {
      serializedName: "kind",
      clientName: "kind"
    },
    modelProperties: {
      ...AzureResourceBase.type.modelProperties,
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "ManagedServiceIdentity"
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
      },
      kind: {
        serializedName: "kind",
        required: true,
        type: {
          name: "String"
        }
      },
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      }
    }
  }
};

export const DeploymentScriptUpdateParameter: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DeploymentScriptUpdateParameter",
    modelProperties: {
      ...AzureResourceBase.type.modelProperties,
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

export const ScriptLog: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ScriptLog",
    modelProperties: {
      ...AzureResourceBase.type.modelProperties,
      log: {
        serializedName: "properties.log",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AzurePowerShellScriptProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AzurePowerShellScriptProperties",
    modelProperties: {
      ...DeploymentScriptPropertiesBase.type.modelProperties,
      ...ScriptConfigurationBase.type.modelProperties,
      azPowerShellVersion: {
        serializedName: "azPowerShellVersion",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AzureCliScriptProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AzureCliScriptProperties",
    modelProperties: {
      ...DeploymentScriptPropertiesBase.type.modelProperties,
      ...ScriptConfigurationBase.type.modelProperties,
      azCliVersion: {
        serializedName: "azCliVersion",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AzurePowerShellScript: coreClient.CompositeMapper = {
  serializedName: "AzurePowerShell",
  type: {
    name: "Composite",
    className: "AzurePowerShellScript",
    uberParent: "DeploymentScript",
    polymorphicDiscriminator: DeploymentScript.type.polymorphicDiscriminator,
    modelProperties: {
      ...DeploymentScript.type.modelProperties,
      containerSettings: {
        serializedName: "properties.containerSettings",
        type: {
          name: "Composite",
          className: "ContainerConfiguration"
        }
      },
      storageAccountSettings: {
        serializedName: "properties.storageAccountSettings",
        type: {
          name: "Composite",
          className: "StorageAccountConfiguration"
        }
      },
      cleanupPreference: {
        serializedName: "properties.cleanupPreference",
        type: {
          name: "String"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "properties.status",
        type: {
          name: "Composite",
          className: "ScriptStatus"
        }
      },
      outputs: {
        serializedName: "properties.outputs",
        readOnly: true,
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Dictionary", value: { type: { name: "any" } } }
          }
        }
      },
      primaryScriptUri: {
        serializedName: "properties.primaryScriptUri",
        type: {
          name: "String"
        }
      },
      supportingScriptUris: {
        serializedName: "properties.supportingScriptUris",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      scriptContent: {
        constraints: {
          MaxLength: 32000
        },
        serializedName: "properties.scriptContent",
        type: {
          name: "String"
        }
      },
      arguments: {
        serializedName: "properties.arguments",
        type: {
          name: "String"
        }
      },
      environmentVariables: {
        serializedName: "properties.environmentVariables",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "EnvironmentVariable"
            }
          }
        }
      },
      forceUpdateTag: {
        serializedName: "properties.forceUpdateTag",
        type: {
          name: "String"
        }
      },
      retentionInterval: {
        serializedName: "properties.retentionInterval",
        required: true,
        type: {
          name: "TimeSpan"
        }
      },
      timeout: {
        serializedName: "properties.timeout",
        type: {
          name: "TimeSpan"
        }
      },
      azPowerShellVersion: {
        serializedName: "properties.azPowerShellVersion",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AzureCliScript: coreClient.CompositeMapper = {
  serializedName: "AzureCLI",
  type: {
    name: "Composite",
    className: "AzureCliScript",
    uberParent: "DeploymentScript",
    polymorphicDiscriminator: DeploymentScript.type.polymorphicDiscriminator,
    modelProperties: {
      ...DeploymentScript.type.modelProperties,
      containerSettings: {
        serializedName: "properties.containerSettings",
        type: {
          name: "Composite",
          className: "ContainerConfiguration"
        }
      },
      storageAccountSettings: {
        serializedName: "properties.storageAccountSettings",
        type: {
          name: "Composite",
          className: "StorageAccountConfiguration"
        }
      },
      cleanupPreference: {
        serializedName: "properties.cleanupPreference",
        type: {
          name: "String"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "properties.status",
        type: {
          name: "Composite",
          className: "ScriptStatus"
        }
      },
      outputs: {
        serializedName: "properties.outputs",
        readOnly: true,
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Dictionary", value: { type: { name: "any" } } }
          }
        }
      },
      primaryScriptUri: {
        serializedName: "properties.primaryScriptUri",
        type: {
          name: "String"
        }
      },
      supportingScriptUris: {
        serializedName: "properties.supportingScriptUris",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      scriptContent: {
        constraints: {
          MaxLength: 32000
        },
        serializedName: "properties.scriptContent",
        type: {
          name: "String"
        }
      },
      arguments: {
        serializedName: "properties.arguments",
        type: {
          name: "String"
        }
      },
      environmentVariables: {
        serializedName: "properties.environmentVariables",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "EnvironmentVariable"
            }
          }
        }
      },
      forceUpdateTag: {
        serializedName: "properties.forceUpdateTag",
        type: {
          name: "String"
        }
      },
      retentionInterval: {
        serializedName: "properties.retentionInterval",
        required: true,
        type: {
          name: "TimeSpan"
        }
      },
      timeout: {
        serializedName: "properties.timeout",
        type: {
          name: "TimeSpan"
        }
      },
      azCliVersion: {
        serializedName: "properties.azCliVersion",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export let discriminators = {
  "AzureResourceBase.DeploymentScript": DeploymentScript,
  "DeploymentScript.AzurePowerShell": AzurePowerShellScript,
  "DeploymentScript.AzureCLI": AzureCliScript
};
