/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import * as coreHttp from "@azure/core-http";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  ExpressRouteCircuitPeering,
  ExpressRouteCircuitPeeringsGetResponse,
  ExpressRouteCircuitPeeringsCreateOrUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ExpressRouteCircuitPeerings. */
export interface ExpressRouteCircuitPeerings {
  /**
   * Gets all peerings in a specified express route circuit.
   * @param resourceGroupName The name of the resource group.
   * @param circuitName The name of the express route circuit.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    circuitName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<ExpressRouteCircuitPeering>;
  /**
   * Deletes the specified peering from the specified express route circuit.
   * @param resourceGroupName The name of the resource group.
   * @param circuitName The name of the express route circuit.
   * @param peeringName The name of the peering.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    circuitName: string,
    peeringName: string,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
  /**
   * Gets the specified peering for the express route circuit.
   * @param resourceGroupName The name of the resource group.
   * @param circuitName The name of the express route circuit.
   * @param peeringName The name of the peering.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    circuitName: string,
    peeringName: string,
    options?: coreHttp.OperationOptions
  ): Promise<ExpressRouteCircuitPeeringsGetResponse>;
  /**
   * Creates or updates a peering in the specified express route circuits.
   * @param resourceGroupName The name of the resource group.
   * @param circuitName The name of the express route circuit.
   * @param peeringName The name of the peering.
   * @param peeringParameters Parameters supplied to the create or update express route circuit peering
   *                          operation.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    circuitName: string,
    peeringName: string,
    peeringParameters: ExpressRouteCircuitPeering,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<
      PollOperationState<ExpressRouteCircuitPeeringsCreateOrUpdateResponse>,
      ExpressRouteCircuitPeeringsCreateOrUpdateResponse
    >
  >;
}