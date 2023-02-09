/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  ManagedInstancePrivateEndpointConnection,
  ManagedInstancePrivateEndpointConnectionsListByManagedInstanceOptionalParams,
  ManagedInstancePrivateEndpointConnectionsGetOptionalParams,
  ManagedInstancePrivateEndpointConnectionsGetResponse,
  ManagedInstancePrivateEndpointConnectionsCreateOrUpdateOptionalParams,
  ManagedInstancePrivateEndpointConnectionsCreateOrUpdateResponse,
  ManagedInstancePrivateEndpointConnectionsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ManagedInstancePrivateEndpointConnections. */
export interface ManagedInstancePrivateEndpointConnections {
  /**
   * Gets all private endpoint connections on a server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param options The options parameters.
   */
  listByManagedInstance(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: ManagedInstancePrivateEndpointConnectionsListByManagedInstanceOptionalParams
  ): PagedAsyncIterableIterator<ManagedInstancePrivateEndpointConnection>;
  /**
   * Gets a private endpoint connection.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param privateEndpointConnectionName The name of the private endpoint connection.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    managedInstanceName: string,
    privateEndpointConnectionName: string,
    options?: ManagedInstancePrivateEndpointConnectionsGetOptionalParams
  ): Promise<ManagedInstancePrivateEndpointConnectionsGetResponse>;
  /**
   * Approve or reject a private endpoint connection with a given name.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param privateEndpointConnectionName
   * @param parameters A private endpoint connection
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    managedInstanceName: string,
    privateEndpointConnectionName: string,
    parameters: ManagedInstancePrivateEndpointConnection,
    options?: ManagedInstancePrivateEndpointConnectionsCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<
        ManagedInstancePrivateEndpointConnectionsCreateOrUpdateResponse
      >,
      ManagedInstancePrivateEndpointConnectionsCreateOrUpdateResponse
    >
  >;
  /**
   * Approve or reject a private endpoint connection with a given name.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param privateEndpointConnectionName
   * @param parameters A private endpoint connection
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    managedInstanceName: string,
    privateEndpointConnectionName: string,
    parameters: ManagedInstancePrivateEndpointConnection,
    options?: ManagedInstancePrivateEndpointConnectionsCreateOrUpdateOptionalParams
  ): Promise<ManagedInstancePrivateEndpointConnectionsCreateOrUpdateResponse>;
  /**
   * Deletes a private endpoint connection with a given name.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param privateEndpointConnectionName
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    managedInstanceName: string,
    privateEndpointConnectionName: string,
    options?: ManagedInstancePrivateEndpointConnectionsDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes a private endpoint connection with a given name.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param privateEndpointConnectionName
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    managedInstanceName: string,
    privateEndpointConnectionName: string,
    options?: ManagedInstancePrivateEndpointConnectionsDeleteOptionalParams
  ): Promise<void>;
}
