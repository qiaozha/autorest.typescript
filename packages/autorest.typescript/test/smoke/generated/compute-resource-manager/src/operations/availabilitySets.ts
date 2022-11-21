/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { AvailabilitySets } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClient } from "../computeManagementClient";
import {
  AvailabilitySet,
  AvailabilitySetsListBySubscriptionNextOptionalParams,
  AvailabilitySetsListBySubscriptionOptionalParams,
  AvailabilitySetsListBySubscriptionResponse,
  AvailabilitySetsListNextOptionalParams,
  AvailabilitySetsListOptionalParams,
  AvailabilitySetsListResponse,
  VirtualMachineSize,
  AvailabilitySetsListAvailableSizesOptionalParams,
  AvailabilitySetsListAvailableSizesResponse,
  AvailabilitySetsCreateOrUpdateOptionalParams,
  AvailabilitySetsCreateOrUpdateResponse,
  AvailabilitySetUpdate,
  AvailabilitySetsUpdateOptionalParams,
  AvailabilitySetsUpdateResponse,
  AvailabilitySetsDeleteOptionalParams,
  AvailabilitySetsGetOptionalParams,
  AvailabilitySetsGetResponse,
  AvailabilitySetsListBySubscriptionNextResponse,
  AvailabilitySetsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing AvailabilitySets operations. */
export class AvailabilitySetsImpl implements AvailabilitySets {
  private readonly client: ComputeManagementClient;

  /**
   * Initialize a new instance of the class AvailabilitySets class.
   * @param client Reference to the service client
   */
  constructor(client: ComputeManagementClient) {
    this.client = client;
  }

  /**
   * Lists all availability sets in a subscription.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: AvailabilitySetsListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<AvailabilitySet> {
    const iter = this.listBySubscriptionPagingAll(options);
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
        return this.listBySubscriptionPagingPage(options, settings);
      }
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: AvailabilitySetsListBySubscriptionOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<AvailabilitySet[]> {
    let result: AvailabilitySetsListBySubscriptionResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listBySubscription(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: AvailabilitySetsListBySubscriptionOptionalParams
  ): AsyncIterableIterator<AvailabilitySet> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Lists all availability sets in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    options?: AvailabilitySetsListOptionalParams
  ): PagedAsyncIterableIterator<AvailabilitySet> {
    const iter = this.listPagingAll(resourceGroupName, options);
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
        return this.listPagingPage(resourceGroupName, options, settings);
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    options?: AvailabilitySetsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<AvailabilitySet[]> {
    let result: AvailabilitySetsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
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
    options?: AvailabilitySetsListOptionalParams
  ): AsyncIterableIterator<AvailabilitySet> {
    for await (const page of this.listPagingPage(resourceGroupName, options)) {
      yield* page;
    }
  }

  /**
   * Lists all available virtual machine sizes that can be used to create a new virtual machine in an
   * existing availability set.
   * @param resourceGroupName The name of the resource group.
   * @param availabilitySetName The name of the availability set.
   * @param options The options parameters.
   */
  public listAvailableSizes(
    resourceGroupName: string,
    availabilitySetName: string,
    options?: AvailabilitySetsListAvailableSizesOptionalParams
  ): PagedAsyncIterableIterator<VirtualMachineSize> {
    const iter = this.listAvailableSizesPagingAll(
      resourceGroupName,
      availabilitySetName,
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
        return this.listAvailableSizesPagingPage(
          resourceGroupName,
          availabilitySetName,
          options,
          settings
        );
      }
    };
  }

  private async *listAvailableSizesPagingPage(
    resourceGroupName: string,
    availabilitySetName: string,
    options?: AvailabilitySetsListAvailableSizesOptionalParams,
    _settings?: PageSettings
  ): AsyncIterableIterator<VirtualMachineSize[]> {
    let result: AvailabilitySetsListAvailableSizesResponse;
    result = await this._listAvailableSizes(
      resourceGroupName,
      availabilitySetName,
      options
    );
    yield result.value || [];
  }

  private async *listAvailableSizesPagingAll(
    resourceGroupName: string,
    availabilitySetName: string,
    options?: AvailabilitySetsListAvailableSizesOptionalParams
  ): AsyncIterableIterator<VirtualMachineSize> {
    for await (const page of this.listAvailableSizesPagingPage(
      resourceGroupName,
      availabilitySetName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Create or update an availability set.
   * @param resourceGroupName The name of the resource group.
   * @param availabilitySetName The name of the availability set.
   * @param parameters Parameters supplied to the Create Availability Set operation.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    availabilitySetName: string,
    parameters: AvailabilitySet,
    options?: AvailabilitySetsCreateOrUpdateOptionalParams
  ): Promise<AvailabilitySetsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, availabilitySetName, parameters, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Update an availability set.
   * @param resourceGroupName The name of the resource group.
   * @param availabilitySetName The name of the availability set.
   * @param parameters Parameters supplied to the Update Availability Set operation.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    availabilitySetName: string,
    parameters: AvailabilitySetUpdate,
    options?: AvailabilitySetsUpdateOptionalParams
  ): Promise<AvailabilitySetsUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, availabilitySetName, parameters, options },
      updateOperationSpec
    );
  }

  /**
   * Delete an availability set.
   * @param resourceGroupName The name of the resource group.
   * @param availabilitySetName The name of the availability set.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    availabilitySetName: string,
    options?: AvailabilitySetsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, availabilitySetName, options },
      deleteOperationSpec
    );
  }

  /**
   * Retrieves information about an availability set.
   * @param resourceGroupName The name of the resource group.
   * @param availabilitySetName The name of the availability set.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    availabilitySetName: string,
    options?: AvailabilitySetsGetOptionalParams
  ): Promise<AvailabilitySetsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, availabilitySetName, options },
      getOperationSpec
    );
  }

  /**
   * Lists all availability sets in a subscription.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: AvailabilitySetsListBySubscriptionOptionalParams
  ): Promise<AvailabilitySetsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }

  /**
   * Lists all availability sets in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    options?: AvailabilitySetsListOptionalParams
  ): Promise<AvailabilitySetsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listOperationSpec
    );
  }

  /**
   * Lists all available virtual machine sizes that can be used to create a new virtual machine in an
   * existing availability set.
   * @param resourceGroupName The name of the resource group.
   * @param availabilitySetName The name of the availability set.
   * @param options The options parameters.
   */
  private _listAvailableSizes(
    resourceGroupName: string,
    availabilitySetName: string,
    options?: AvailabilitySetsListAvailableSizesOptionalParams
  ): Promise<AvailabilitySetsListAvailableSizesResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, availabilitySetName, options },
      listAvailableSizesOperationSpec
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: AvailabilitySetsListBySubscriptionNextOptionalParams
  ): Promise<AvailabilitySetsListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    nextLink: string,
    options?: AvailabilitySetsListNextOptionalParams
  ): Promise<AvailabilitySetsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets/{availabilitySetName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.AvailabilitySet
    }
  },
  requestBody: Parameters.parameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.availabilitySetName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets/{availabilitySetName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.AvailabilitySet
    }
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.availabilitySetName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets/{availabilitySetName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.availabilitySetName,
    Parameters.subscriptionId
  ],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets/{availabilitySetName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AvailabilitySet
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.availabilitySetName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/availabilitySets",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AvailabilitySetListResult
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AvailabilitySetListResult
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
const listAvailableSizesOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets/{availabilitySetName}/vmSizes",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineSizeListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.availabilitySetName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AvailabilitySetListResult
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand],
  urlParameters: [
    Parameters.$host,
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
      bodyMapper: Mappers.AvailabilitySetListResult
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
