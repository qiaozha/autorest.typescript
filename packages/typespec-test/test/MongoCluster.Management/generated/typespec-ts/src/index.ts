// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export {
  DocumentDBClient,
  DocumentDBClientOptions,
} from "./documentDBClient.js";
export { restorePoller, RestorePollerOptions } from "./restorePollerHelpers.js";
export {
  PrivateLinkResourceListResult,
  Resource,
  SystemData,
  CreatedByType,
  KnownCreatedByType,
  ProxyResource,
  PrivateLinkResource,
  PrivateLinkResourceProperties,
  ErrorResponse,
  ErrorDetail,
  ErrorAdditionalInfo,
  PrivateEndpointConnectionResourceListResult,
  PrivateEndpointConnectionResource,
  PrivateEndpointConnectionProperties,
  PrivateEndpoint,
  PrivateLinkServiceConnectionState,
  PrivateEndpointServiceConnectionStatus,
  KnownPrivateEndpointServiceConnectionStatus,
  PrivateEndpointConnectionProvisioningState,
  KnownPrivateEndpointConnectionProvisioningState,
  FirewallRule,
  FirewallRuleProperties,
  ResourceProvisioningState,
  KnownResourceProvisioningState,
  FirewallRuleListResult,
  TrackedResource,
  MongoCluster,
  MongoClusterProperties,
  CreateMode,
  KnownCreateMode,
  MongoClusterRestoreParameters,
  MongoClusterStatus,
  KnownMongoClusterStatus,
  PublicNetworkAccess,
  KnownPublicNetworkAccess,
  NodeGroupSpec,
  NodeKind,
  KnownNodeKind,
  PrivateEndpointConnection,
  MongoClusterUpdate,
  MongoClusterUpdateProperties,
  MongoClusterListResult,
  ListConnectionStringsResult,
  ConnectionString,
  CheckNameAvailabilityRequest,
  CheckNameAvailabilityResponse,
  CheckNameAvailabilityReason,
  KnownCheckNameAvailabilityReason,
  OperationListResult,
  Operation,
  OperationDisplay,
  Origin,
  KnownOrigin,
  ActionType,
  KnownActionType,
  Versions,
  ProvisioningState,
  OperationsListOptionalParams,
  MongoClustersGetOptionalParams,
  MongoClustersCreateOrUpdateOptionalParams,
  MongoClustersUpdateOptionalParams,
  MongoClustersDeleteOptionalParams,
  MongoClustersListByResourceGroupOptionalParams,
  MongoClustersListOptionalParams,
  MongoClustersListConnectionStringsOptionalParams,
  MongoClustersCheckNameAvailabilityOptionalParams,
  FirewallRulesGetOptionalParams,
  FirewallRulesCreateOrUpdateOptionalParams,
  FirewallRulesDeleteOptionalParams,
  FirewallRulesListByMongoClusterOptionalParams,
  PrivateEndpointConnectionsListByMongoClusterOptionalParams,
  PrivateEndpointConnectionsGetOptionalParams,
  PrivateEndpointConnectionsCreateOptionalParams,
  PrivateEndpointConnectionsDeleteOptionalParams,
  PrivateLinksListByMongoClusterOptionalParams,
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./models/index.js";
export {
  FirewallRulesOperations,
  MongoClustersOperations,
  OperationsOperations,
  PrivateEndpointConnectionsOperations,
  PrivateLinksOperations,
} from "./classic/index.js";
