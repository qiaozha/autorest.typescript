/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { CollectionPartition } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { CosmosDBManagementClientContext } from "../cosmosDBManagementClientContext";
import {
  PartitionMetric,
  CollectionPartitionListMetricsOptionalParams,
  PartitionUsage,
  CollectionPartitionListUsagesOptionalParams,
  CollectionPartitionListMetricsResponse,
  CollectionPartitionListUsagesResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a CollectionPartition. */
export class CollectionPartitionImpl implements CollectionPartition {
  private readonly client: CosmosDBManagementClientContext;

  /**
   * Initialize a new instance of the class CollectionPartition class.
   * @param client Reference to the service client
   */
  constructor(client: CosmosDBManagementClientContext) {
    this.client = client;
  }

  /**
   * Retrieves the metrics determined by the given filter for the given collection, split by partition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseRid Cosmos DB database rid.
   * @param collectionRid Cosmos DB collection rid.
   * @param filter An OData filter expression that describes a subset of metrics to return. The
   *               parameters that can be filtered are name.value (name of the metric, can have an or of multiple
   *               names), startTime, endTime, and timeGrain. The supported operator is eq.
   * @param options The options parameters.
   */
  public listMetrics(
    resourceGroupName: string,
    accountName: string,
    databaseRid: string,
    collectionRid: string,
    filter: string,
    options?: CollectionPartitionListMetricsOptionalParams
  ): PagedAsyncIterableIterator<PartitionMetric> {
    const iter = this.listMetricsPagingAll(
      resourceGroupName,
      accountName,
      databaseRid,
      collectionRid,
      filter,
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
        return this.listMetricsPagingPage(
          resourceGroupName,
          accountName,
          databaseRid,
          collectionRid,
          filter,
          options
        );
      }
    };
  }

  private async *listMetricsPagingPage(
    resourceGroupName: string,
    accountName: string,
    databaseRid: string,
    collectionRid: string,
    filter: string,
    options?: CollectionPartitionListMetricsOptionalParams
  ): AsyncIterableIterator<PartitionMetric[]> {
    let result = await this._listMetrics(
      resourceGroupName,
      accountName,
      databaseRid,
      collectionRid,
      filter,
      options
    );
    yield result.value || [];
  }

  private async *listMetricsPagingAll(
    resourceGroupName: string,
    accountName: string,
    databaseRid: string,
    collectionRid: string,
    filter: string,
    options?: CollectionPartitionListMetricsOptionalParams
  ): AsyncIterableIterator<PartitionMetric> {
    for await (const page of this.listMetricsPagingPage(
      resourceGroupName,
      accountName,
      databaseRid,
      collectionRid,
      filter,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Retrieves the usages (most recent storage data) for the given collection, split by partition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseRid Cosmos DB database rid.
   * @param collectionRid Cosmos DB collection rid.
   * @param options The options parameters.
   */
  public listUsages(
    resourceGroupName: string,
    accountName: string,
    databaseRid: string,
    collectionRid: string,
    options?: CollectionPartitionListUsagesOptionalParams
  ): PagedAsyncIterableIterator<PartitionUsage> {
    const iter = this.listUsagesPagingAll(
      resourceGroupName,
      accountName,
      databaseRid,
      collectionRid,
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
        return this.listUsagesPagingPage(
          resourceGroupName,
          accountName,
          databaseRid,
          collectionRid,
          options
        );
      }
    };
  }

  private async *listUsagesPagingPage(
    resourceGroupName: string,
    accountName: string,
    databaseRid: string,
    collectionRid: string,
    options?: CollectionPartitionListUsagesOptionalParams
  ): AsyncIterableIterator<PartitionUsage[]> {
    let result = await this._listUsages(
      resourceGroupName,
      accountName,
      databaseRid,
      collectionRid,
      options
    );
    yield result.value || [];
  }

  private async *listUsagesPagingAll(
    resourceGroupName: string,
    accountName: string,
    databaseRid: string,
    collectionRid: string,
    options?: CollectionPartitionListUsagesOptionalParams
  ): AsyncIterableIterator<PartitionUsage> {
    for await (const page of this.listUsagesPagingPage(
      resourceGroupName,
      accountName,
      databaseRid,
      collectionRid,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Retrieves the metrics determined by the given filter for the given collection, split by partition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseRid Cosmos DB database rid.
   * @param collectionRid Cosmos DB collection rid.
   * @param filter An OData filter expression that describes a subset of metrics to return. The
   *               parameters that can be filtered are name.value (name of the metric, can have an or of multiple
   *               names), startTime, endTime, and timeGrain. The supported operator is eq.
   * @param options The options parameters.
   */
  private _listMetrics(
    resourceGroupName: string,
    accountName: string,
    databaseRid: string,
    collectionRid: string,
    filter: string,
    options?: CollectionPartitionListMetricsOptionalParams
  ): Promise<CollectionPartitionListMetricsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        databaseRid,
        collectionRid,
        filter,
        options
      },
      listMetricsOperationSpec
    );
  }

  /**
   * Retrieves the usages (most recent storage data) for the given collection, split by partition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseRid Cosmos DB database rid.
   * @param collectionRid Cosmos DB collection rid.
   * @param options The options parameters.
   */
  private _listUsages(
    resourceGroupName: string,
    accountName: string,
    databaseRid: string,
    collectionRid: string,
    options?: CollectionPartitionListUsagesOptionalParams
  ): Promise<CollectionPartitionListUsagesResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, databaseRid, collectionRid, options },
      listUsagesOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listMetricsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/databases/{databaseRid}/collections/{collectionRid}/partitions/metrics",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PartitionMetricListResult
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.databaseRid,
    Parameters.collectionRid
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listUsagesOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/databases/{databaseRid}/collections/{collectionRid}/partitions/usages",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PartitionUsagesResult
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.databaseRid,
    Parameters.collectionRid
  ],
  headerParameters: [Parameters.accept],
  serializer
};
