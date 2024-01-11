import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter,
} from "@azure/core-client";
import {
  ServicesDescription as ServicesDescriptionMapper,
  ServicesPatchDescription as ServicesPatchDescriptionMapper,
  CheckNameAvailabilityParameters as CheckNameAvailabilityParametersMapper,
  PrivateEndpointConnection as PrivateEndpointConnectionMapper,
  Workspace as WorkspaceMapper,
  WorkspacePatchResource as WorkspacePatchResourceMapper,
  DicomService as DicomServiceMapper,
  DicomServicePatchResource as DicomServicePatchResourceMapper,
  IotConnector as IotConnectorMapper,
  IotConnectorPatchResource as IotConnectorPatchResourceMapper,
  IotFhirDestination as IotFhirDestinationMapper,
  FhirService as FhirServiceMapper,
  FhirServicePatchResource as FhirServicePatchResourceMapper,
} from "../models/mappers";

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

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2021-06-01-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String",
    },
  },
};

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[-\\w\\._\\(\\)]+$"),
      MaxLength: 90,
      MinLength: 1,
    },
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const resourceName: OperationURLParameter = {
  parameterPath: "resourceName",
  mapper: {
    constraints: {
      MaxLength: 24,
      MinLength: 3,
    },
    serializedName: "resourceName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String",
    },
  },
};

export const serviceDescription: OperationParameter = {
  parameterPath: "serviceDescription",
  mapper: ServicesDescriptionMapper,
};

export const servicePatchDescription: OperationParameter = {
  parameterPath: "servicePatchDescription",
  mapper: ServicesPatchDescriptionMapper,
};

export const checkNameAvailabilityInputs: OperationParameter = {
  parameterPath: "checkNameAvailabilityInputs",
  mapper: CheckNameAvailabilityParametersMapper,
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String",
    },
  },
  skipEncoding: true,
};

export const privateEndpointConnectionName: OperationURLParameter = {
  parameterPath: "privateEndpointConnectionName",
  mapper: {
    serializedName: "privateEndpointConnectionName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const properties: OperationParameter = {
  parameterPath: "properties",
  mapper: PrivateEndpointConnectionMapper,
};

export const groupName: OperationURLParameter = {
  parameterPath: "groupName",
  mapper: {
    serializedName: "groupName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const workspaceName: OperationURLParameter = {
  parameterPath: "workspaceName",
  mapper: {
    constraints: {
      MaxLength: 24,
      MinLength: 3,
    },
    serializedName: "workspaceName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const workspace: OperationParameter = {
  parameterPath: "workspace",
  mapper: WorkspaceMapper,
};

export const workspacePatchResource: OperationParameter = {
  parameterPath: "workspacePatchResource",
  mapper: WorkspacePatchResourceMapper,
};

export const dicomServiceName: OperationURLParameter = {
  parameterPath: "dicomServiceName",
  mapper: {
    constraints: {
      MaxLength: 24,
      MinLength: 3,
    },
    serializedName: "dicomServiceName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const dicomservice: OperationParameter = {
  parameterPath: "dicomservice",
  mapper: DicomServiceMapper,
};

export const dicomservicePatchResource: OperationParameter = {
  parameterPath: "dicomservicePatchResource",
  mapper: DicomServicePatchResourceMapper,
};

export const iotConnectorName: OperationURLParameter = {
  parameterPath: "iotConnectorName",
  mapper: {
    constraints: {
      MaxLength: 24,
      MinLength: 3,
    },
    serializedName: "iotConnectorName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const iotConnector: OperationParameter = {
  parameterPath: "iotConnector",
  mapper: IotConnectorMapper,
};

export const iotConnectorPatchResource: OperationParameter = {
  parameterPath: "iotConnectorPatchResource",
  mapper: IotConnectorPatchResourceMapper,
};

export const fhirDestinationName: OperationURLParameter = {
  parameterPath: "fhirDestinationName",
  mapper: {
    constraints: {
      MaxLength: 24,
      MinLength: 3,
    },
    serializedName: "fhirDestinationName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const iotFhirDestination: OperationParameter = {
  parameterPath: "iotFhirDestination",
  mapper: IotFhirDestinationMapper,
};

export const fhirServiceName: OperationURLParameter = {
  parameterPath: "fhirServiceName",
  mapper: {
    constraints: {
      MaxLength: 24,
      MinLength: 3,
    },
    serializedName: "fhirServiceName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const fhirservice: OperationParameter = {
  parameterPath: "fhirservice",
  mapper: FhirServiceMapper,
};

export const fhirservicePatchResource: OperationParameter = {
  parameterPath: "fhirservicePatchResource",
  mapper: FhirServicePatchResourceMapper,
};

export const locationName: OperationURLParameter = {
  parameterPath: "locationName",
  mapper: {
    serializedName: "locationName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const operationResultId: OperationURLParameter = {
  parameterPath: "operationResultId",
  mapper: {
    serializedName: "operationResultId",
    required: true,
    type: {
      name: "String",
    },
  },
};
