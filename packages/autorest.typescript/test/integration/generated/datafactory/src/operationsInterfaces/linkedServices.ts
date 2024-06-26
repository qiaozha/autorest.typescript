import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  LinkedServiceResource,
  LinkedServicesListByFactoryOptionalParams,
  LinkedServicesCreateOrUpdateOptionalParams,
  LinkedServicesCreateOrUpdateResponse,
  LinkedServicesGetOptionalParams,
  LinkedServicesGetResponse,
  LinkedServicesDeleteOptionalParams,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a LinkedServices. */
export interface LinkedServices {
  /**
   * Lists linked services.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param options The options parameters.
   */
  listByFactory(
    resourceGroupName: string,
    factoryName: string,
    options?: LinkedServicesListByFactoryOptionalParams,
  ): PagedAsyncIterableIterator<LinkedServiceResource>;
  /**
   * Creates or updates a linked service.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param linkedServiceName The linked service name.
   * @param linkedService Linked service resource definition.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    factoryName: string,
    linkedServiceName: string,
    linkedService: LinkedServiceResource,
    options?: LinkedServicesCreateOrUpdateOptionalParams,
  ): Promise<LinkedServicesCreateOrUpdateResponse>;
  /**
   * Gets a linked service.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param linkedServiceName The linked service name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    factoryName: string,
    linkedServiceName: string,
    options?: LinkedServicesGetOptionalParams,
  ): Promise<LinkedServicesGetResponse>;
  /**
   * Deletes a linked service.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param linkedServiceName The linked service name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    factoryName: string,
    linkedServiceName: string,
    options?: LinkedServicesDeleteOptionalParams,
  ): Promise<void>;
}
