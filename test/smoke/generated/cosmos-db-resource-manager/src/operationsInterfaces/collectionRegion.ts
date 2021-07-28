/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Metric, CollectionRegionListMetricsOptionalParams } from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a CollectionRegion. */
export interface CollectionRegion {
  /**
   * Retrieves the metrics determined by the given filter for the given database account, collection and
   * region.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param region Cosmos DB region, with spaces between words and each word capitalized.
   * @param databaseRid Cosmos DB database rid.
   * @param collectionRid Cosmos DB collection rid.
   * @param filter An OData filter expression that describes a subset of metrics to return. The
   *               parameters that can be filtered are name.value (name of the metric, can have an or of multiple
   *               names), startTime, endTime, and timeGrain. The supported operator is eq.
   * @param options The options parameters.
   */
  listMetrics(
    resourceGroupName: string,
    accountName: string,
    region: string,
    databaseRid: string,
    collectionRid: string,
    filter: string,
    options?: CollectionRegionListMetricsOptionalParams
  ): PagedAsyncIterableIterator<Metric>;
}
