import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  ProvisioningServiceDescription,
  IotDpsResourceListBySubscriptionOptionalParams,
  IotDpsResourceListByResourceGroupOptionalParams,
  IotDpsSkuDefinition,
  IotDpsResourceListValidSkusOptionalParams,
  SharedAccessSignatureAuthorizationRuleAccessRightsDescription,
  IotDpsResourceListKeysOptionalParams,
  IotDpsResourceGetOptionalParams,
  IotDpsResourceGetResponse,
  IotDpsResourceCreateOrUpdateOptionalParams,
  IotDpsResourceCreateOrUpdateResponse,
  TagsResource,
  IotDpsResourceUpdateOptionalParams,
  IotDpsResourceUpdateResponse,
  IotDpsResourceDeleteOptionalParams,
  IotDpsResourceGetOperationResultOptionalParams,
  IotDpsResourceGetOperationResultResponse,
  OperationInputs,
  IotDpsResourceCheckProvisioningServiceNameAvailabilityOptionalParams,
  IotDpsResourceCheckProvisioningServiceNameAvailabilityResponse,
  IotDpsResourceListKeysForKeyNameOptionalParams,
  IotDpsResourceListKeysForKeyNameResponse,
  IotDpsResourceListPrivateLinkResourcesOptionalParams,
  IotDpsResourceListPrivateLinkResourcesResponse,
  IotDpsResourceGetPrivateLinkResourcesOptionalParams,
  IotDpsResourceGetPrivateLinkResourcesResponse,
  IotDpsResourceListPrivateEndpointConnectionsOptionalParams,
  IotDpsResourceListPrivateEndpointConnectionsResponse,
  IotDpsResourceGetPrivateEndpointConnectionOptionalParams,
  IotDpsResourceGetPrivateEndpointConnectionResponse,
  PrivateEndpointConnection,
  IotDpsResourceCreateOrUpdatePrivateEndpointConnectionOptionalParams,
  IotDpsResourceCreateOrUpdatePrivateEndpointConnectionResponse,
  IotDpsResourceDeletePrivateEndpointConnectionOptionalParams,
  IotDpsResourceDeletePrivateEndpointConnectionResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a IotDpsResource. */
export interface IotDpsResource {
  /**
   * List all the provisioning services for a given subscription id.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: IotDpsResourceListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<ProvisioningServiceDescription>;
  /**
   * Get a list of all provisioning services in the given resource group.
   * @param resourceGroupName Resource group identifier.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: IotDpsResourceListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<ProvisioningServiceDescription>;
  /**
   * Gets the list of valid SKUs and tiers for a provisioning service.
   * @param provisioningServiceName Name of provisioning service.
   * @param resourceGroupName Name of resource group.
   * @param options The options parameters.
   */
  listValidSkus(
    provisioningServiceName: string,
    resourceGroupName: string,
    options?: IotDpsResourceListValidSkusOptionalParams
  ): PagedAsyncIterableIterator<IotDpsSkuDefinition>;
  /**
   * List the primary and secondary keys for a provisioning service.
   * @param provisioningServiceName The provisioning service name to get the shared access keys for.
   * @param resourceGroupName resource group name
   * @param options The options parameters.
   */
  listKeys(
    provisioningServiceName: string,
    resourceGroupName: string,
    options?: IotDpsResourceListKeysOptionalParams
  ): PagedAsyncIterableIterator<
    SharedAccessSignatureAuthorizationRuleAccessRightsDescription
  >;
  /**
   * Get the metadata of the provisioning service without SAS keys.
   * @param provisioningServiceName Name of the provisioning service to retrieve.
   * @param resourceGroupName Resource group name.
   * @param options The options parameters.
   */
  get(
    provisioningServiceName: string,
    resourceGroupName: string,
    options?: IotDpsResourceGetOptionalParams
  ): Promise<IotDpsResourceGetResponse>;
  /**
   * Create or update the metadata of the provisioning service. The usual pattern to modify a property is
   * to retrieve the provisioning service metadata and security metadata, and then combine them with the
   * modified values in a new body to update the provisioning service.
   * @param resourceGroupName Resource group identifier.
   * @param provisioningServiceName Name of provisioning service to create or update.
   * @param iotDpsDescription Description of the provisioning service to create or update.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    provisioningServiceName: string,
    iotDpsDescription: ProvisioningServiceDescription,
    options?: IotDpsResourceCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<IotDpsResourceCreateOrUpdateResponse>,
      IotDpsResourceCreateOrUpdateResponse
    >
  >;
  /**
   * Create or update the metadata of the provisioning service. The usual pattern to modify a property is
   * to retrieve the provisioning service metadata and security metadata, and then combine them with the
   * modified values in a new body to update the provisioning service.
   * @param resourceGroupName Resource group identifier.
   * @param provisioningServiceName Name of provisioning service to create or update.
   * @param iotDpsDescription Description of the provisioning service to create or update.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    provisioningServiceName: string,
    iotDpsDescription: ProvisioningServiceDescription,
    options?: IotDpsResourceCreateOrUpdateOptionalParams
  ): Promise<IotDpsResourceCreateOrUpdateResponse>;
  /**
   * Update an existing provisioning service's tags. to update other fields use the CreateOrUpdate method
   * @param resourceGroupName Resource group identifier.
   * @param provisioningServiceName Name of provisioning service to create or update.
   * @param provisioningServiceTags Updated tag information to set into the provisioning service
   *                                instance.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    provisioningServiceName: string,
    provisioningServiceTags: TagsResource,
    options?: IotDpsResourceUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<IotDpsResourceUpdateResponse>,
      IotDpsResourceUpdateResponse
    >
  >;
  /**
   * Update an existing provisioning service's tags. to update other fields use the CreateOrUpdate method
   * @param resourceGroupName Resource group identifier.
   * @param provisioningServiceName Name of provisioning service to create or update.
   * @param provisioningServiceTags Updated tag information to set into the provisioning service
   *                                instance.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    provisioningServiceName: string,
    provisioningServiceTags: TagsResource,
    options?: IotDpsResourceUpdateOptionalParams
  ): Promise<IotDpsResourceUpdateResponse>;
  /**
   * Deletes the Provisioning Service.
   * @param provisioningServiceName Name of provisioning service to delete.
   * @param resourceGroupName Resource group identifier.
   * @param options The options parameters.
   */
  beginDelete(
    provisioningServiceName: string,
    resourceGroupName: string,
    options?: IotDpsResourceDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes the Provisioning Service.
   * @param provisioningServiceName Name of provisioning service to delete.
   * @param resourceGroupName Resource group identifier.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    provisioningServiceName: string,
    resourceGroupName: string,
    options?: IotDpsResourceDeleteOptionalParams
  ): Promise<void>;
  /**
   * Gets the status of a long running operation, such as create, update or delete a provisioning
   * service.
   * @param operationId Operation id corresponding to long running operation. Use this to poll for the
   *                    status.
   * @param resourceGroupName Resource group identifier.
   * @param provisioningServiceName Name of provisioning service that the operation is running on.
   * @param asyncinfo Async header used to poll on the status of the operation, obtained while creating
   *                  the long running operation.
   * @param options The options parameters.
   */
  getOperationResult(
    operationId: string,
    resourceGroupName: string,
    provisioningServiceName: string,
    asyncinfo: string,
    options?: IotDpsResourceGetOperationResultOptionalParams
  ): Promise<IotDpsResourceGetOperationResultResponse>;
  /**
   * Check if a provisioning service name is available. This will validate if the name is syntactically
   * valid and if the name is usable
   * @param argumentsParam Set the name parameter in the OperationInputs structure to the name of the
   *                       provisioning service to check.
   * @param options The options parameters.
   */
  checkProvisioningServiceNameAvailability(
    argumentsParam: OperationInputs,
    options?: IotDpsResourceCheckProvisioningServiceNameAvailabilityOptionalParams
  ): Promise<IotDpsResourceCheckProvisioningServiceNameAvailabilityResponse>;
  /**
   * List primary and secondary keys for a specific key name
   * @param provisioningServiceName Name of the provisioning service.
   * @param keyName Logical key name to get key-values for.
   * @param resourceGroupName The name of the resource group that contains the provisioning service.
   * @param options The options parameters.
   */
  listKeysForKeyName(
    provisioningServiceName: string,
    keyName: string,
    resourceGroupName: string,
    options?: IotDpsResourceListKeysForKeyNameOptionalParams
  ): Promise<IotDpsResourceListKeysForKeyNameResponse>;
  /**
   * List private link resources for the given provisioning service
   * @param resourceGroupName The name of the resource group that contains the provisioning service.
   * @param resourceName The name of the provisioning service.
   * @param options The options parameters.
   */
  listPrivateLinkResources(
    resourceGroupName: string,
    resourceName: string,
    options?: IotDpsResourceListPrivateLinkResourcesOptionalParams
  ): Promise<IotDpsResourceListPrivateLinkResourcesResponse>;
  /**
   * Get the specified private link resource for the given provisioning service
   * @param resourceGroupName The name of the resource group that contains the provisioning service.
   * @param resourceName The name of the provisioning service.
   * @param groupId The name of the private link resource
   * @param options The options parameters.
   */
  getPrivateLinkResources(
    resourceGroupName: string,
    resourceName: string,
    groupId: string,
    options?: IotDpsResourceGetPrivateLinkResourcesOptionalParams
  ): Promise<IotDpsResourceGetPrivateLinkResourcesResponse>;
  /**
   * List private endpoint connection properties
   * @param resourceGroupName The name of the resource group that contains the provisioning service.
   * @param resourceName The name of the provisioning service.
   * @param options The options parameters.
   */
  listPrivateEndpointConnections(
    resourceGroupName: string,
    resourceName: string,
    options?: IotDpsResourceListPrivateEndpointConnectionsOptionalParams
  ): Promise<IotDpsResourceListPrivateEndpointConnectionsResponse>;
  /**
   * Get private endpoint connection properties
   * @param resourceGroupName The name of the resource group that contains the provisioning service.
   * @param resourceName The name of the provisioning service.
   * @param privateEndpointConnectionName The name of the private endpoint connection
   * @param options The options parameters.
   */
  getPrivateEndpointConnection(
    resourceGroupName: string,
    resourceName: string,
    privateEndpointConnectionName: string,
    options?: IotDpsResourceGetPrivateEndpointConnectionOptionalParams
  ): Promise<IotDpsResourceGetPrivateEndpointConnectionResponse>;
  /**
   * Create or update the status of a private endpoint connection with the specified name
   * @param resourceGroupName The name of the resource group that contains the provisioning service.
   * @param resourceName The name of the provisioning service.
   * @param privateEndpointConnectionName The name of the private endpoint connection
   * @param privateEndpointConnection The private endpoint connection with updated properties
   * @param options The options parameters.
   */
  beginCreateOrUpdatePrivateEndpointConnection(
    resourceGroupName: string,
    resourceName: string,
    privateEndpointConnectionName: string,
    privateEndpointConnection: PrivateEndpointConnection,
    options?: IotDpsResourceCreateOrUpdatePrivateEndpointConnectionOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<
        IotDpsResourceCreateOrUpdatePrivateEndpointConnectionResponse
      >,
      IotDpsResourceCreateOrUpdatePrivateEndpointConnectionResponse
    >
  >;
  /**
   * Create or update the status of a private endpoint connection with the specified name
   * @param resourceGroupName The name of the resource group that contains the provisioning service.
   * @param resourceName The name of the provisioning service.
   * @param privateEndpointConnectionName The name of the private endpoint connection
   * @param privateEndpointConnection The private endpoint connection with updated properties
   * @param options The options parameters.
   */
  beginCreateOrUpdatePrivateEndpointConnectionAndWait(
    resourceGroupName: string,
    resourceName: string,
    privateEndpointConnectionName: string,
    privateEndpointConnection: PrivateEndpointConnection,
    options?: IotDpsResourceCreateOrUpdatePrivateEndpointConnectionOptionalParams
  ): Promise<IotDpsResourceCreateOrUpdatePrivateEndpointConnectionResponse>;
  /**
   * Delete private endpoint connection with the specified name
   * @param resourceGroupName The name of the resource group that contains the provisioning service.
   * @param resourceName The name of the provisioning service.
   * @param privateEndpointConnectionName The name of the private endpoint connection
   * @param options The options parameters.
   */
  beginDeletePrivateEndpointConnection(
    resourceGroupName: string,
    resourceName: string,
    privateEndpointConnectionName: string,
    options?: IotDpsResourceDeletePrivateEndpointConnectionOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<IotDpsResourceDeletePrivateEndpointConnectionResponse>,
      IotDpsResourceDeletePrivateEndpointConnectionResponse
    >
  >;
  /**
   * Delete private endpoint connection with the specified name
   * @param resourceGroupName The name of the resource group that contains the provisioning service.
   * @param resourceName The name of the provisioning service.
   * @param privateEndpointConnectionName The name of the private endpoint connection
   * @param options The options parameters.
   */
  beginDeletePrivateEndpointConnectionAndWait(
    resourceGroupName: string,
    resourceName: string,
    privateEndpointConnectionName: string,
    options?: IotDpsResourceDeletePrivateEndpointConnectionOptionalParams
  ): Promise<IotDpsResourceDeletePrivateEndpointConnectionResponse>;
}
