/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ExpressRoutePorts } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl, shouldDeserializeLro } from "../lroImpl";
import {
  ExpressRoutePort,
  ExpressRoutePortsListByResourceGroupNextOptionalParams,
  ExpressRoutePortsListByResourceGroupOptionalParams,
  ExpressRoutePortsListNextOptionalParams,
  ExpressRoutePortsListOptionalParams,
  ExpressRoutePortsDeleteOptionalParams,
  ExpressRoutePortsGetOptionalParams,
  ExpressRoutePortsGetResponse,
  ExpressRoutePortsCreateOrUpdateOptionalParams,
  ExpressRoutePortsCreateOrUpdateResponse,
  TagsObject,
  ExpressRoutePortsUpdateTagsOptionalParams,
  ExpressRoutePortsUpdateTagsResponse,
  ExpressRoutePortsListByResourceGroupResponse,
  ExpressRoutePortsListResponse,
  ExpressRoutePortsListByResourceGroupNextResponse,
  ExpressRoutePortsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a ExpressRoutePorts. */
export class ExpressRoutePortsImpl implements ExpressRoutePorts {
  private readonly client: NetworkManagementClientContext;

  /**
   * Initialize a new instance of the class ExpressRoutePorts class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * List all the ExpressRoutePort resources in the specified resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: ExpressRoutePortsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<ExpressRoutePort> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByResourceGroupPagingPage(resourceGroupName, options);
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: ExpressRoutePortsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<ExpressRoutePort[]> {
    let result = await this._listByResourceGroup(resourceGroupName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: ExpressRoutePortsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<ExpressRoutePort> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List all the ExpressRoutePort resources in the specified subscription.
   * @param options The options parameters.
   */
  public list(
    options?: ExpressRoutePortsListOptionalParams
  ): PagedAsyncIterableIterator<ExpressRoutePort> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(options);
      }
    };
  }

  private async *listPagingPage(
    options?: ExpressRoutePortsListOptionalParams
  ): AsyncIterableIterator<ExpressRoutePort[]> {
    let result = await this._list(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    options?: ExpressRoutePortsListOptionalParams
  ): AsyncIterableIterator<ExpressRoutePort> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Deletes the specified ExpressRoutePort resource.
   * @param resourceGroupName The name of the resource group.
   * @param expressRoutePortName The name of the ExpressRoutePort resource.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    expressRoutePortName: string,
    options?: ExpressRoutePortsDeleteOptionalParams
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
      { resourceGroupName, expressRoutePortName, options },
      deleteOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "location"
    });
  }

  /**
   * Deletes the specified ExpressRoutePort resource.
   * @param resourceGroupName The name of the resource group.
   * @param expressRoutePortName The name of the ExpressRoutePort resource.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    expressRoutePortName: string,
    options?: ExpressRoutePortsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      expressRoutePortName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Retrieves the requested ExpressRoutePort resource.
   * @param resourceGroupName The name of the resource group.
   * @param expressRoutePortName The name of ExpressRoutePort.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    expressRoutePortName: string,
    options?: ExpressRoutePortsGetOptionalParams
  ): Promise<ExpressRoutePortsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, expressRoutePortName, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates the specified ExpressRoutePort resource.
   * @param resourceGroupName The name of the resource group.
   * @param expressRoutePortName The name of the ExpressRoutePort resource.
   * @param parameters Parameters supplied to the create ExpressRoutePort operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    expressRoutePortName: string,
    parameters: ExpressRoutePort,
    options?: ExpressRoutePortsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ExpressRoutePortsCreateOrUpdateResponse>,
      ExpressRoutePortsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ExpressRoutePortsCreateOrUpdateResponse> => {
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
      { resourceGroupName, expressRoutePortName, parameters, options },
      createOrUpdateOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
  }

  /**
   * Creates or updates the specified ExpressRoutePort resource.
   * @param resourceGroupName The name of the resource group.
   * @param expressRoutePortName The name of the ExpressRoutePort resource.
   * @param parameters Parameters supplied to the create ExpressRoutePort operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    expressRoutePortName: string,
    parameters: ExpressRoutePort,
    options?: ExpressRoutePortsCreateOrUpdateOptionalParams
  ): Promise<ExpressRoutePortsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      expressRoutePortName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Update ExpressRoutePort tags.
   * @param resourceGroupName The name of the resource group.
   * @param expressRoutePortName The name of the ExpressRoutePort resource.
   * @param parameters Parameters supplied to update ExpressRoutePort resource tags.
   * @param options The options parameters.
   */
  updateTags(
    resourceGroupName: string,
    expressRoutePortName: string,
    parameters: TagsObject,
    options?: ExpressRoutePortsUpdateTagsOptionalParams
  ): Promise<ExpressRoutePortsUpdateTagsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, expressRoutePortName, parameters, options },
      updateTagsOperationSpec
    );
  }

  /**
   * List all the ExpressRoutePort resources in the specified resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: ExpressRoutePortsListByResourceGroupOptionalParams
  ): Promise<ExpressRoutePortsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * List all the ExpressRoutePort resources in the specified subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: ExpressRoutePortsListOptionalParams
  ): Promise<ExpressRoutePortsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: ExpressRoutePortsListByResourceGroupNextOptionalParams
  ): Promise<ExpressRoutePortsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: ExpressRoutePortsListNextOptionalParams
  ): Promise<ExpressRoutePortsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ExpressRoutePorts/{expressRoutePortName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.expressRoutePortName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ExpressRoutePorts/{expressRoutePortName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ExpressRoutePort
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.expressRoutePortName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ExpressRoutePorts/{expressRoutePortName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ExpressRoutePort
    },
    201: {
      bodyMapper: Mappers.ExpressRoutePort
    },
    202: {
      bodyMapper: Mappers.ExpressRoutePort
    },
    204: {
      bodyMapper: Mappers.ExpressRoutePort
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters9,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.expressRoutePortName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateTagsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ExpressRoutePorts/{expressRoutePortName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ExpressRoutePort
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.expressRoutePortName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ExpressRoutePorts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ExpressRoutePortListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Network/ExpressRoutePorts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ExpressRoutePortListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ExpressRoutePortListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ExpressRoutePortListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
