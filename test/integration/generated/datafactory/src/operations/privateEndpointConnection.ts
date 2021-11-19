import { PrivateEndpointConnection } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DataFactoryClient } from "../dataFactoryClient";
import {
  PrivateLinkConnectionApprovalRequestResource,
  PrivateEndpointConnectionCreateOrUpdateOptionalParams,
  PrivateEndpointConnectionCreateOrUpdateResponse,
  PrivateEndpointConnectionGetOptionalParams,
  PrivateEndpointConnectionGetResponse,
  PrivateEndpointConnectionDeleteOptionalParams
} from "../models";

/** Class containing PrivateEndpointConnection operations. */
export class PrivateEndpointConnectionImpl
  implements PrivateEndpointConnection {
  private readonly client: DataFactoryClient;

  /**
   * Initialize a new instance of the class PrivateEndpointConnection class.
   * @param client Reference to the service client
   */
  constructor(client: DataFactoryClient) {
    this.client = client;
  }

  /**
   * Approves or rejects a private endpoint connection
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param privateEndpointConnectionName The private endpoint connection name.
   * @param privateEndpointWrapper Private Endpoint Connection Approval ARM resource.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    factoryName: string,
    privateEndpointConnectionName: string,
    privateEndpointWrapper: PrivateLinkConnectionApprovalRequestResource,
    options?: PrivateEndpointConnectionCreateOrUpdateOptionalParams
  ): Promise<PrivateEndpointConnectionCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        factoryName,
        privateEndpointConnectionName,
        privateEndpointWrapper,
        options
      },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Gets a private endpoint connection
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param privateEndpointConnectionName The private endpoint connection name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    factoryName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionGetOptionalParams
  ): Promise<PrivateEndpointConnectionGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        factoryName,
        privateEndpointConnectionName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Deletes a private endpoint connection
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param privateEndpointConnectionName The private endpoint connection name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    factoryName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        factoryName,
        privateEndpointConnectionName,
        options
      },
      deleteOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/privateEndpointConnections/{privateEndpointConnectionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointConnectionResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.privateEndpointWrapper,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
    Parameters.privateEndpointConnectionName
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.ifMatch
  ],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/privateEndpointConnections/{privateEndpointConnectionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointConnectionResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
    Parameters.privateEndpointConnectionName
  ],
  headerParameters: [Parameters.accept, Parameters.ifNoneMatch],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/privateEndpointConnections/{privateEndpointConnectionName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
    Parameters.privateEndpointConnectionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};