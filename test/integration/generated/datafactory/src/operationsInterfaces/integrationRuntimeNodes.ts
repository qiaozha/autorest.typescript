import {
  IntegrationRuntimeNodesGetOptionalParams,
  IntegrationRuntimeNodesGetResponse,
  IntegrationRuntimeNodesDeleteOptionalParams,
  UpdateIntegrationRuntimeNodeRequest,
  IntegrationRuntimeNodesUpdateOptionalParams,
  IntegrationRuntimeNodesUpdateResponse,
  IntegrationRuntimeNodesGetIPAddressOptionalParams,
  IntegrationRuntimeNodesGetIPAddressResponse
} from "../models";

/** Interface representing a IntegrationRuntimeNodes. */
export interface IntegrationRuntimeNodes {
  /**
   * Gets a self-hosted integration runtime node.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param integrationRuntimeName The integration runtime name.
   * @param nodeName The integration runtime node name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    factoryName: string,
    integrationRuntimeName: string,
    nodeName: string,
    options?: IntegrationRuntimeNodesGetOptionalParams
  ): Promise<IntegrationRuntimeNodesGetResponse>;
  /**
   * Deletes a self-hosted integration runtime node.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param integrationRuntimeName The integration runtime name.
   * @param nodeName The integration runtime node name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    factoryName: string,
    integrationRuntimeName: string,
    nodeName: string,
    options?: IntegrationRuntimeNodesDeleteOptionalParams
  ): Promise<void>;
  /**
   * Updates a self-hosted integration runtime node.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param integrationRuntimeName The integration runtime name.
   * @param nodeName The integration runtime node name.
   * @param updateIntegrationRuntimeNodeRequest The parameters for updating an integration runtime node.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    factoryName: string,
    integrationRuntimeName: string,
    nodeName: string,
    updateIntegrationRuntimeNodeRequest: UpdateIntegrationRuntimeNodeRequest,
    options?: IntegrationRuntimeNodesUpdateOptionalParams
  ): Promise<IntegrationRuntimeNodesUpdateResponse>;
  /**
   * Get the IP address of self-hosted integration runtime node.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param integrationRuntimeName The integration runtime name.
   * @param nodeName The integration runtime node name.
   * @param options The options parameters.
   */
  getIPAddress(
    resourceGroupName: string,
    factoryName: string,
    integrationRuntimeName: string,
    nodeName: string,
    options?: IntegrationRuntimeNodesGetIPAddressOptionalParams
  ): Promise<IntegrationRuntimeNodesGetIPAddressResponse>;
}
