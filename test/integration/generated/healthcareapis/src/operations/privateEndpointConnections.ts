import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PrivateEndpointConnections } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { HealthCareApisClient } from "../healthCareApisClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  PrivateEndpointConnectionDescription,
  PrivateEndpointConnectionsListByServiceOptionalParams,
  PrivateEndpointConnectionsListByServiceResponse,
  PrivateEndpointConnectionsGetOptionalParams,
  PrivateEndpointConnectionsGetResponse,
  PrivateEndpointConnection,
  PrivateEndpointConnectionsCreateOrUpdateOptionalParams,
  PrivateEndpointConnectionsCreateOrUpdateResponse,
  PrivateEndpointConnectionsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing PrivateEndpointConnections operations. */
export class PrivateEndpointConnectionsImpl
  implements PrivateEndpointConnections {
  private readonly client: HealthCareApisClient;

  /**
   * Initialize a new instance of the class PrivateEndpointConnections class.
   * @param client Reference to the service client
   */
  constructor(client: HealthCareApisClient) {
    this.client = client;
  }

  /**
   * Lists all private endpoint connections for a service.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param resourceName The name of the service instance.
   * @param options The options parameters.
   */
  public listByService(
    resourceGroupName: string,
    resourceName: string,
    options?: PrivateEndpointConnectionsListByServiceOptionalParams
  ): PagedAsyncIterableIterator<PrivateEndpointConnectionDescription> {
    const iter = this.listByServicePagingAll(
      resourceGroupName,
      resourceName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByServicePagingPage(
          resourceGroupName,
          resourceName,
          options
        );
      }
    };
  }

  private async *listByServicePagingPage(
    resourceGroupName: string,
    resourceName: string,
    options?: PrivateEndpointConnectionsListByServiceOptionalParams
  ): AsyncIterableIterator<PrivateEndpointConnectionDescription[]> {
    let result = await this._listByService(
      resourceGroupName,
      resourceName,
      options
    );
    yield result.value || [];
  }

  private async *listByServicePagingAll(
    resourceGroupName: string,
    resourceName: string,
    options?: PrivateEndpointConnectionsListByServiceOptionalParams
  ): AsyncIterableIterator<PrivateEndpointConnectionDescription> {
    for await (const page of this.listByServicePagingPage(
      resourceGroupName,
      resourceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists all private endpoint connections for a service.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param resourceName The name of the service instance.
   * @param options The options parameters.
   */
  private _listByService(
    resourceGroupName: string,
    resourceName: string,
    options?: PrivateEndpointConnectionsListByServiceOptionalParams
  ): Promise<PrivateEndpointConnectionsListByServiceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, options },
      listByServiceOperationSpec
    );
  }

  /**
   * Gets the specified private endpoint connection associated with the service.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param resourceName The name of the service instance.
   * @param privateEndpointConnectionName The name of the private endpoint connection associated with the
   *                                      Azure resource
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionsGetOptionalParams
  ): Promise<PrivateEndpointConnectionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        privateEndpointConnectionName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Update the state of the specified private endpoint connection associated with the service.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param resourceName The name of the service instance.
   * @param privateEndpointConnectionName The name of the private endpoint connection associated with the
   *                                      Azure resource
   * @param properties The private endpoint connection properties.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    resourceName: string,
    privateEndpointConnectionName: string,
    properties: PrivateEndpointConnection,
    options?: PrivateEndpointConnectionsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<PrivateEndpointConnectionsCreateOrUpdateResponse>,
      PrivateEndpointConnectionsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<PrivateEndpointConnectionsCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      {
        resourceGroupName,
        resourceName,
        privateEndpointConnectionName,
        properties,
        options
      },
      createOrUpdateOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Update the state of the specified private endpoint connection associated with the service.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param resourceName The name of the service instance.
   * @param privateEndpointConnectionName The name of the private endpoint connection associated with the
   *                                      Azure resource
   * @param properties The private endpoint connection properties.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    resourceName: string,
    privateEndpointConnectionName: string,
    properties: PrivateEndpointConnection,
    options?: PrivateEndpointConnectionsCreateOrUpdateOptionalParams
  ): Promise<PrivateEndpointConnectionsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      resourceName,
      privateEndpointConnectionName,
      properties,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes a private endpoint connection.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param resourceName The name of the service instance.
   * @param privateEndpointConnectionName The name of the private endpoint connection associated with the
   *                                      Azure resource
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    resourceName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      {
        resourceGroupName,
        resourceName,
        privateEndpointConnectionName,
        options
      },
      deleteOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Deletes a private endpoint connection.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param resourceName The name of the service instance.
   * @param privateEndpointConnectionName The name of the private endpoint connection associated with the
   *                                      Azure resource
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    resourceName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      resourceName,
      privateEndpointConnectionName,
      options
    );
    return poller.pollUntilDone();
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByServiceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/services/{resourceName}/privateEndpointConnections",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointConnectionListResultDescription
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.Host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/services/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointConnectionDescription
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.Host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.privateEndpointConnectionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/services/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointConnectionDescription
    },
    201: {
      bodyMapper: Mappers.PrivateEndpointConnectionDescription
    },
    202: {
      bodyMapper: Mappers.PrivateEndpointConnectionDescription
    },
    204: {
      bodyMapper: Mappers.PrivateEndpointConnectionDescription
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  requestBody: Parameters.properties,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.Host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.privateEndpointConnectionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/services/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.Host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.privateEndpointConnectionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
