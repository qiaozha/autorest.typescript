## API Report File for "@msinternal/arm-package-deploymentscripts-2019-10-preview"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import * as coreAuth from '@azure/core-auth';
import * as coreClient from '@azure/core-client';
import { PagedAsyncIterableIterator } from '@azure/core-paging';
import { PollerLike } from '@azure/core-lro';
import { PollOperationState } from '@azure/core-lro';

// @public
export interface AzureCliScript extends DeploymentScript {
    arguments?: string;
    azCliVersion: string;
    cleanupPreference?: CleanupOptions;
    containerSettings?: ContainerConfiguration;
    environmentVariables?: EnvironmentVariable[];
    forceUpdateTag?: string;
    kind: "AzureCLI";
    readonly outputs?: {
        [propertyName: string]: Record<string, unknown>;
    };
    primaryScriptUri?: string;
    readonly provisioningState?: ScriptProvisioningState;
    retentionInterval: string;
    scriptContent?: string;
    readonly status?: ScriptStatus;
    storageAccountSettings?: StorageAccountConfiguration;
    supportingScriptUris?: string[];
    timeout?: string;
}

// @public
export interface AzureCliScriptProperties extends DeploymentScriptPropertiesBase, ScriptConfigurationBase {
    azCliVersion: string;
}

// @public
export interface AzurePowerShellScript extends DeploymentScript {
    arguments?: string;
    azPowerShellVersion: string;
    cleanupPreference?: CleanupOptions;
    containerSettings?: ContainerConfiguration;
    environmentVariables?: EnvironmentVariable[];
    forceUpdateTag?: string;
    kind: "AzurePowerShell";
    readonly outputs?: {
        [propertyName: string]: Record<string, unknown>;
    };
    primaryScriptUri?: string;
    readonly provisioningState?: ScriptProvisioningState;
    retentionInterval: string;
    scriptContent?: string;
    readonly status?: ScriptStatus;
    storageAccountSettings?: StorageAccountConfiguration;
    supportingScriptUris?: string[];
    timeout?: string;
}

// @public
export interface AzurePowerShellScriptProperties extends DeploymentScriptPropertiesBase, ScriptConfigurationBase {
    azPowerShellVersion: string;
}

// @public
export interface AzureResourceBase {
    readonly id?: string;
    readonly name?: string;
    readonly type?: string;
}

// @public
export type CleanupOptions = string;

// @public
export interface ContainerConfiguration {
    containerGroupName?: string;
}

// @public
export type CreatedByType = string;

// @public
export interface DeploymentScript extends AzureResourceBase {
    identity: ManagedServiceIdentity;
    kind: ScriptType;
    location: string;
    readonly systemData?: SystemData;
    tags?: {
        [propertyName: string]: string;
    };
}

// @public
export interface DeploymentScriptListResult {
    readonly nextLink?: string;
    value?: DeploymentScriptUnion[];
}

// @public
export interface DeploymentScriptPropertiesBase {
    cleanupPreference?: CleanupOptions;
    containerSettings?: ContainerConfiguration;
    readonly outputs?: {
        [propertyName: string]: Record<string, unknown>;
    };
    readonly provisioningState?: ScriptProvisioningState;
    readonly status?: ScriptStatus;
    storageAccountSettings?: StorageAccountConfiguration;
}

// @public
export interface DeploymentScripts {
    beginCreate(resourceGroupName: string, scriptName: string, deploymentScript: DeploymentScriptUnion, options?: DeploymentScriptsCreateOptionalParams): Promise<PollerLike<PollOperationState<DeploymentScriptsCreateResponse>, DeploymentScriptsCreateResponse>>;
    beginCreateAndWait(resourceGroupName: string, scriptName: string, deploymentScript: DeploymentScriptUnion, options?: DeploymentScriptsCreateOptionalParams): Promise<DeploymentScriptsCreateResponse>;
    delete(resourceGroupName: string, scriptName: string, options?: DeploymentScriptsDeleteOptionalParams): Promise<void>;
    get(resourceGroupName: string, scriptName: string, options?: DeploymentScriptsGetOptionalParams): Promise<DeploymentScriptsGetResponse>;
    getLogs(resourceGroupName: string, scriptName: string, options?: DeploymentScriptsGetLogsOptionalParams): Promise<DeploymentScriptsGetLogsResponse>;
    getLogsDefault(resourceGroupName: string, scriptName: string, options?: DeploymentScriptsGetLogsDefaultOptionalParams): Promise<DeploymentScriptsGetLogsDefaultResponse>;
    listByResourceGroup(resourceGroupName: string, options?: DeploymentScriptsListByResourceGroupOptionalParams): PagedAsyncIterableIterator<DeploymentScriptUnion>;
    listBySubscription(options?: DeploymentScriptsListBySubscriptionOptionalParams): PagedAsyncIterableIterator<DeploymentScriptUnion>;
    update(resourceGroupName: string, scriptName: string, options?: DeploymentScriptsUpdateOptionalParams): Promise<DeploymentScriptsUpdateResponse>;
}

// @public (undocumented)
export class DeploymentScriptsClient extends coreClient.ServiceClient {
    // (undocumented)
    $host: string;
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: DeploymentScriptsClientOptionalParams);
    // (undocumented)
    apiVersion: string;
    // (undocumented)
    deploymentScripts: DeploymentScripts;
    // (undocumented)
    subscriptionId: string;
}

// @public
export interface DeploymentScriptsClientOptionalParams extends coreClient.ServiceClientOptions {
    $host?: string;
    apiVersion?: string;
    endpoint?: string;
}

// @public
export interface DeploymentScriptsCreateOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type DeploymentScriptsCreateResponse = DeploymentScriptUnion;

// @public
export interface DeploymentScriptsDeleteOptionalParams extends coreClient.OperationOptions {
}

// @public
export interface DeploymentScriptsError {
    error?: ErrorResponse;
}

// @public
export interface DeploymentScriptsGetLogsDefaultOptionalParams extends coreClient.OperationOptions {
    tail?: number;
}

// @public
export type DeploymentScriptsGetLogsDefaultResponse = ScriptLog;

// @public
export interface DeploymentScriptsGetLogsOptionalParams extends coreClient.OperationOptions {
}

// @public
export type DeploymentScriptsGetLogsResponse = ScriptLogsList;

// @public
export interface DeploymentScriptsGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type DeploymentScriptsGetResponse = DeploymentScriptUnion;

// @public
export interface DeploymentScriptsListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type DeploymentScriptsListByResourceGroupNextResponse = DeploymentScriptListResult;

// @public
export interface DeploymentScriptsListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

// @public
export type DeploymentScriptsListByResourceGroupResponse = DeploymentScriptListResult;

// @public
export interface DeploymentScriptsListBySubscriptionNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type DeploymentScriptsListBySubscriptionNextResponse = DeploymentScriptListResult;

// @public
export interface DeploymentScriptsListBySubscriptionOptionalParams extends coreClient.OperationOptions {
}

// @public
export type DeploymentScriptsListBySubscriptionResponse = DeploymentScriptListResult;

// @public
export interface DeploymentScriptsUpdateOptionalParams extends coreClient.OperationOptions {
    deploymentScript?: DeploymentScriptUpdateParameter;
}

// @public
export type DeploymentScriptsUpdateResponse = DeploymentScriptUnion;

// @public (undocumented)
export type DeploymentScriptUnion = DeploymentScript | AzurePowerShellScript | AzureCliScript;

// @public
export interface DeploymentScriptUpdateParameter extends AzureResourceBase {
    tags?: {
        [propertyName: string]: string;
    };
}

// @public
export interface EnvironmentVariable {
    name: string;
    secureValue?: string;
    value?: string;
}

// @public
export interface ErrorAdditionalInfo {
    readonly info?: Record<string, unknown>;
    readonly type?: string;
}

// @public
export interface ErrorResponse {
    readonly additionalInfo?: ErrorAdditionalInfo[];
    readonly code?: string;
    readonly details?: ErrorResponse[];
    readonly message?: string;
    readonly target?: string;
}

// @public
export enum KnownCleanupOptions {
    Always = "Always",
    OnExpiration = "OnExpiration",
    OnSuccess = "OnSuccess"
}

// @public
export enum KnownCreatedByType {
    Application = "Application",
    Key = "Key",
    ManagedIdentity = "ManagedIdentity",
    User = "User"
}

// @public
export enum KnownManagedServiceIdentityType {
    UserAssigned = "UserAssigned"
}

// @public
export enum KnownScriptProvisioningState {
    Canceled = "Canceled",
    Creating = "Creating",
    Failed = "Failed",
    ProvisioningResources = "ProvisioningResources",
    Running = "Running",
    Succeeded = "Succeeded"
}

// @public
export enum KnownScriptType {
    AzureCLI = "AzureCLI",
    AzurePowerShell = "AzurePowerShell"
}

// @public
export interface ManagedServiceIdentity {
    type?: ManagedServiceIdentityType;
    userAssignedIdentities?: {
        [propertyName: string]: UserAssignedIdentity;
    };
}

// @public
export type ManagedServiceIdentityType = string;

// @public
export interface ScriptConfigurationBase {
    arguments?: string;
    environmentVariables?: EnvironmentVariable[];
    forceUpdateTag?: string;
    primaryScriptUri?: string;
    retentionInterval: string;
    scriptContent?: string;
    supportingScriptUris?: string[];
    timeout?: string;
}

// @public
export interface ScriptLog extends AzureResourceBase {
    readonly log?: string;
}

// @public
export interface ScriptLogsList {
    value?: ScriptLog[];
}

// @public
export type ScriptProvisioningState = string;

// @public
export interface ScriptStatus {
    readonly containerInstanceId?: string;
    readonly endTime?: Date;
    error?: ErrorResponse;
    readonly expirationTime?: Date;
    readonly startTime?: Date;
    readonly storageAccountId?: string;
}

// @public
export type ScriptType = string;

// @public
export interface StorageAccountConfiguration {
    storageAccountKey?: string;
    storageAccountName?: string;
}

// @public
export interface SystemData {
    createdAt?: Date;
    createdBy?: string;
    createdByType?: CreatedByType;
    lastModifiedAt?: Date;
    lastModifiedBy?: string;
    lastModifiedByType?: CreatedByType;
}

// @public
export interface UserAssignedIdentity {
    clientId?: string;
    principalId?: string;
}

// (No @packageDocumentation comment for this package)

```