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
  RoleInstance,
  CloudServiceRoleInstancesListOptionalParams,
  CloudServiceRoleInstancesDeleteOptionalParams,
  CloudServiceRoleInstancesGetOptionalParams,
  CloudServiceRoleInstancesGetResponse,
  CloudServiceRoleInstancesGetInstanceViewOptionalParams,
  CloudServiceRoleInstancesGetInstanceViewResponse,
  CloudServiceRoleInstancesRestartOptionalParams,
  CloudServiceRoleInstancesReimageOptionalParams,
  CloudServiceRoleInstancesRebuildOptionalParams,
  CloudServiceRoleInstancesGetRemoteDesktopFileOptionalParams,
  CloudServiceRoleInstancesGetRemoteDesktopFileResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a CloudServiceRoleInstances. */
export interface CloudServiceRoleInstances {
  /**
   * Gets the list of all role instances in a cloud service. Use nextLink property in the response to get
   * the next page of role instances. Do this till nextLink is null to fetch all the role instances.
   * @param resourceGroupName
   * @param cloudServiceName
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServiceRoleInstancesListOptionalParams,
  ): PagedAsyncIterableIterator<RoleInstance>;
  /**
   * Deletes a role instance from a cloud service.
   * @param roleInstanceName Name of the role instance.
   * @param resourceGroupName
   * @param cloudServiceName
   * @param options The options parameters.
   */
  beginDelete(
    roleInstanceName: string,
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServiceRoleInstancesDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes a role instance from a cloud service.
   * @param roleInstanceName Name of the role instance.
   * @param resourceGroupName
   * @param cloudServiceName
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    roleInstanceName: string,
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServiceRoleInstancesDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Gets a role instance from a cloud service.
   * @param roleInstanceName Name of the role instance.
   * @param resourceGroupName
   * @param cloudServiceName
   * @param options The options parameters.
   */
  get(
    roleInstanceName: string,
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServiceRoleInstancesGetOptionalParams,
  ): Promise<CloudServiceRoleInstancesGetResponse>;
  /**
   * Retrieves information about the run-time state of a role instance in a cloud service.
   * @param roleInstanceName Name of the role instance.
   * @param resourceGroupName
   * @param cloudServiceName
   * @param options The options parameters.
   */
  getInstanceView(
    roleInstanceName: string,
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServiceRoleInstancesGetInstanceViewOptionalParams,
  ): Promise<CloudServiceRoleInstancesGetInstanceViewResponse>;
  /**
   * The Reboot Role Instance asynchronous operation requests a reboot of a role instance in the cloud
   * service.
   * @param roleInstanceName Name of the role instance.
   * @param resourceGroupName
   * @param cloudServiceName
   * @param options The options parameters.
   */
  beginRestart(
    roleInstanceName: string,
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServiceRoleInstancesRestartOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * The Reboot Role Instance asynchronous operation requests a reboot of a role instance in the cloud
   * service.
   * @param roleInstanceName Name of the role instance.
   * @param resourceGroupName
   * @param cloudServiceName
   * @param options The options parameters.
   */
  beginRestartAndWait(
    roleInstanceName: string,
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServiceRoleInstancesRestartOptionalParams,
  ): Promise<void>;
  /**
   * The Reimage Role Instance asynchronous operation reinstalls the operating system on instances of web
   * roles or worker roles.
   * @param roleInstanceName Name of the role instance.
   * @param resourceGroupName
   * @param cloudServiceName
   * @param options The options parameters.
   */
  beginReimage(
    roleInstanceName: string,
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServiceRoleInstancesReimageOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * The Reimage Role Instance asynchronous operation reinstalls the operating system on instances of web
   * roles or worker roles.
   * @param roleInstanceName Name of the role instance.
   * @param resourceGroupName
   * @param cloudServiceName
   * @param options The options parameters.
   */
  beginReimageAndWait(
    roleInstanceName: string,
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServiceRoleInstancesReimageOptionalParams,
  ): Promise<void>;
  /**
   * The Rebuild Role Instance asynchronous operation reinstalls the operating system on instances of web
   * roles or worker roles and initializes the storage resources that are used by them. If you do not
   * want to initialize storage resources, you can use Reimage Role Instance.
   * @param roleInstanceName Name of the role instance.
   * @param resourceGroupName
   * @param cloudServiceName
   * @param options The options parameters.
   */
  beginRebuild(
    roleInstanceName: string,
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServiceRoleInstancesRebuildOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * The Rebuild Role Instance asynchronous operation reinstalls the operating system on instances of web
   * roles or worker roles and initializes the storage resources that are used by them. If you do not
   * want to initialize storage resources, you can use Reimage Role Instance.
   * @param roleInstanceName Name of the role instance.
   * @param resourceGroupName
   * @param cloudServiceName
   * @param options The options parameters.
   */
  beginRebuildAndWait(
    roleInstanceName: string,
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServiceRoleInstancesRebuildOptionalParams,
  ): Promise<void>;
  /**
   * Gets a remote desktop file for a role instance in a cloud service.
   * @param roleInstanceName Name of the role instance.
   * @param resourceGroupName
   * @param cloudServiceName
   * @param options The options parameters.
   */
  getRemoteDesktopFile(
    roleInstanceName: string,
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServiceRoleInstancesGetRemoteDesktopFileOptionalParams,
  ): Promise<CloudServiceRoleInstancesGetRemoteDesktopFileResponse>;
}
