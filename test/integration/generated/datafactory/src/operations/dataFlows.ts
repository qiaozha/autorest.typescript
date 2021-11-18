import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { DataFlows } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DataFactoryClient } from "../dataFactoryClient";
import {
  DataFlowResource,
  DataFlowsListByFactoryNextOptionalParams,
  DataFlowsListByFactoryOptionalParams,
  DataFlowsCreateOrUpdateOptionalParams,
  DataFlowsCreateOrUpdateResponse,
  DataFlowsGetOptionalParams,
  DataFlowsGetResponse,
  DataFlowsDeleteOptionalParams,
  DataFlowsListByFactoryResponse,
  DataFlowsListByFactoryNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing DataFlows operations. */
export class DataFlowsImpl implements DataFlows {
  private readonly client: DataFactoryClient;

  /**
   * Initialize a new instance of the class DataFlows class.
   * @param client Reference to the service client
   */
  constructor(client: DataFactoryClient) {
    this.client = client;
  }

  /**
   * Lists data flows.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param options The options parameters.
   */
  public listByFactory(
    resourceGroupName: string,
    factoryName: string,
    options?: DataFlowsListByFactoryOptionalParams
  ): PagedAsyncIterableIterator<DataFlowResource> {
    const iter = this.listByFactoryPagingAll(
      resourceGroupName,
      factoryName,
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
        return this.listByFactoryPagingPage(
          resourceGroupName,
          factoryName,
          options
        );
      }
    };
  }

  private async *listByFactoryPagingPage(
    resourceGroupName: string,
    factoryName: string,
    options?: DataFlowsListByFactoryOptionalParams
  ): AsyncIterableIterator<DataFlowResource[]> {
    let result = await this._listByFactory(
      resourceGroupName,
      factoryName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByFactoryNext(
        resourceGroupName,
        factoryName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByFactoryPagingAll(
    resourceGroupName: string,
    factoryName: string,
    options?: DataFlowsListByFactoryOptionalParams
  ): AsyncIterableIterator<DataFlowResource> {
    for await (const page of this.listByFactoryPagingPage(
      resourceGroupName,
      factoryName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Creates or updates a data flow.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param dataFlowName The data flow name.
   * @param dataFlow Data flow resource definition.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    factoryName: string,
    dataFlowName: string,
    dataFlow: DataFlowResource,
    options?: DataFlowsCreateOrUpdateOptionalParams
  ): Promise<DataFlowsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, factoryName, dataFlowName, dataFlow, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Gets a data flow.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param dataFlowName The data flow name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    factoryName: string,
    dataFlowName: string,
    options?: DataFlowsGetOptionalParams
  ): Promise<DataFlowsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, factoryName, dataFlowName, options },
      getOperationSpec
    );
  }

  /**
   * Deletes a data flow.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param dataFlowName The data flow name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    factoryName: string,
    dataFlowName: string,
    options?: DataFlowsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, factoryName, dataFlowName, options },
      deleteOperationSpec
    );
  }

  /**
   * Lists data flows.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param options The options parameters.
   */
  private _listByFactory(
    resourceGroupName: string,
    factoryName: string,
    options?: DataFlowsListByFactoryOptionalParams
  ): Promise<DataFlowsListByFactoryResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, factoryName, options },
      listByFactoryOperationSpec
    );
  }

  /**
   * ListByFactoryNext
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param nextLink The nextLink from the previous successful call to the ListByFactory method.
   * @param options The options parameters.
   */
  private _listByFactoryNext(
    resourceGroupName: string,
    factoryName: string,
    nextLink: string,
    options?: DataFlowsListByFactoryNextOptionalParams
  ): Promise<DataFlowsListByFactoryNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, factoryName, nextLink, options },
      listByFactoryNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/dataflows/{dataFlowName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DataFlowResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.dataFlow,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.Host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
    Parameters.dataFlowName
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
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/dataflows/{dataFlowName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DataFlowResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.Host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
    Parameters.dataFlowName
  ],
  headerParameters: [Parameters.accept, Parameters.ifNoneMatch],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/dataflows/{dataFlowName}",
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
    Parameters.Host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
    Parameters.dataFlowName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByFactoryOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/dataflows",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DataFlowListResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.Host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByFactoryNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DataFlowListResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.Host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
