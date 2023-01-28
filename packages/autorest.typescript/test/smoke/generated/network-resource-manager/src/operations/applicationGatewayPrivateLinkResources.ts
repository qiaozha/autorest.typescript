/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ApplicationGatewayPrivateLinkResources } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClient } from "../networkManagementClient";
import {
  ApplicationGatewayPrivateLinkResource,
  ApplicationGatewayPrivateLinkResourcesListNextOptionalParams,
  ApplicationGatewayPrivateLinkResourcesListOptionalParams,
  ApplicationGatewayPrivateLinkResourcesListResponse,
  ApplicationGatewayPrivateLinkResourcesListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ApplicationGatewayPrivateLinkResources operations. */
export class ApplicationGatewayPrivateLinkResourcesImpl
  implements ApplicationGatewayPrivateLinkResources {
  private readonly client: NetworkManagementClient;

  /**
   * Initialize a new instance of the class ApplicationGatewayPrivateLinkResources class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClient) {
    this.client = client;
  }

  /**
   * Lists all private link resources on an application gateway.
   * @param resourceGroupName The name of the resource group.
   * @param applicationGatewayName The name of the application gateway.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    applicationGatewayName: string,
    options?: ApplicationGatewayPrivateLinkResourcesListOptionalParams
  ): PagedAsyncIterableIterator<ApplicationGatewayPrivateLinkResource> {
    const iter = this.listPagingAll(
      resourceGroupName,
      applicationGatewayName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPagingPage(
          resourceGroupName,
          applicationGatewayName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    applicationGatewayName: string,
    options?: ApplicationGatewayPrivateLinkResourcesListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ApplicationGatewayPrivateLinkResource[]> {
    let result: ApplicationGatewayPrivateLinkResourcesListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(
        resourceGroupName,
        applicationGatewayName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        applicationGatewayName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    applicationGatewayName: string,
    options?: ApplicationGatewayPrivateLinkResourcesListOptionalParams
  ): AsyncIterableIterator<ApplicationGatewayPrivateLinkResource> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      applicationGatewayName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists all private link resources on an application gateway.
   * @param resourceGroupName The name of the resource group.
   * @param applicationGatewayName The name of the application gateway.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    applicationGatewayName: string,
    options?: ApplicationGatewayPrivateLinkResourcesListOptionalParams
  ): Promise<ApplicationGatewayPrivateLinkResourcesListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, applicationGatewayName, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group.
   * @param applicationGatewayName The name of the application gateway.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    applicationGatewayName: string,
    nextLink: string,
    options?: ApplicationGatewayPrivateLinkResourcesListNextOptionalParams
  ): Promise<ApplicationGatewayPrivateLinkResourcesListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, applicationGatewayName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/applicationGateways/{applicationGatewayName}/privateLinkResources",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationGatewayPrivateLinkResourceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.applicationGatewayName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationGatewayPrivateLinkResourceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.applicationGatewayName,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
