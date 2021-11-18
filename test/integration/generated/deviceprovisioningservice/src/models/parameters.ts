import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-client";
import {
  CertificateBodyDescription as CertificateBodyDescriptionMapper,
  VerificationCodeRequest as VerificationCodeRequestMapper,
  ProvisioningServiceDescription as ProvisioningServiceDescriptionMapper,
  TagsResource as TagsResourceMapper,
  OperationInputs as OperationInputsMapper,
  PrivateEndpointConnection as PrivateEndpointConnectionMapper
} from "../models/mappers";

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

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2020-03-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const certificateName: OperationURLParameter = {
  parameterPath: "certificateName",
  mapper: {
    serializedName: "certificateName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const provisioningServiceName: OperationURLParameter = {
  parameterPath: "provisioningServiceName",
  mapper: {
    serializedName: "provisioningServiceName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const ifMatch: OperationParameter = {
  parameterPath: ["options", "ifMatch"],
  mapper: {
    serializedName: "If-Match",
    type: {
      name: "String"
    }
  }
};

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

export const certificateDescription: OperationParameter = {
  parameterPath: "certificateDescription",
  mapper: CertificateBodyDescriptionMapper
};

export const certificateName1: OperationURLParameter = {
  parameterPath: "certificateName",
  mapper: {
    constraints: {
      MaxLength: 256
    },
    serializedName: "certificateName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const ifMatch1: OperationParameter = {
  parameterPath: "ifMatch",
  mapper: {
    serializedName: "If-Match",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const certificateName11: OperationQueryParameter = {
  parameterPath: ["options", "certificateName1"],
  mapper: {
    serializedName: "certificate.name",
    type: {
      name: "String"
    }
  }
};

export const certificateRawBytes: OperationQueryParameter = {
  parameterPath: ["options", "certificateRawBytes"],
  mapper: {
    serializedName: "certificate.rawBytes",
    type: {
      name: "ByteArray"
    }
  }
};

export const certificateIsVerified: OperationQueryParameter = {
  parameterPath: ["options", "certificateIsVerified"],
  mapper: {
    serializedName: "certificate.isVerified",
    type: {
      name: "Boolean"
    }
  }
};

export const certificatePurpose: OperationQueryParameter = {
  parameterPath: ["options", "certificatePurpose"],
  mapper: {
    serializedName: "certificate.purpose",
    type: {
      name: "String"
    }
  }
};

export const certificateCreated: OperationQueryParameter = {
  parameterPath: ["options", "certificateCreated"],
  mapper: {
    serializedName: "certificate.created",
    type: {
      name: "DateTime"
    }
  }
};

export const certificateLastUpdated: OperationQueryParameter = {
  parameterPath: ["options", "certificateLastUpdated"],
  mapper: {
    serializedName: "certificate.lastUpdated",
    type: {
      name: "DateTime"
    }
  }
};

export const certificateHasPrivateKey: OperationQueryParameter = {
  parameterPath: ["options", "certificateHasPrivateKey"],
  mapper: {
    serializedName: "certificate.hasPrivateKey",
    type: {
      name: "Boolean"
    }
  }
};

export const certificateNonce: OperationQueryParameter = {
  parameterPath: ["options", "certificateNonce"],
  mapper: {
    serializedName: "certificate.nonce",
    type: {
      name: "String"
    }
  }
};

export const request: OperationParameter = {
  parameterPath: "request",
  mapper: VerificationCodeRequestMapper
};

export const iotDpsDescription: OperationParameter = {
  parameterPath: "iotDpsDescription",
  mapper: ProvisioningServiceDescriptionMapper
};

export const provisioningServiceTags: OperationParameter = {
  parameterPath: "provisioningServiceTags",
  mapper: TagsResourceMapper
};

export const operationId: OperationURLParameter = {
  parameterPath: "operationId",
  mapper: {
    serializedName: "operationId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const asyncinfo: OperationQueryParameter = {
  parameterPath: "asyncinfo",
  mapper: {
    defaultValue: "true",
    serializedName: "asyncinfo",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const argumentsParam: OperationParameter = {
  parameterPath: "argumentsParam",
  mapper: OperationInputsMapper
};

export const keyName: OperationURLParameter = {
  parameterPath: "keyName",
  mapper: {
    serializedName: "keyName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const resourceName: OperationURLParameter = {
  parameterPath: "resourceName",
  mapper: {
    serializedName: "resourceName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const groupId: OperationURLParameter = {
  parameterPath: "groupId",
  mapper: {
    serializedName: "groupId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const privateEndpointConnectionName: OperationURLParameter = {
  parameterPath: "privateEndpointConnectionName",
  mapper: {
    serializedName: "privateEndpointConnectionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const privateEndpointConnection: OperationParameter = {
  parameterPath: "privateEndpointConnection",
  mapper: PrivateEndpointConnectionMapper
};
