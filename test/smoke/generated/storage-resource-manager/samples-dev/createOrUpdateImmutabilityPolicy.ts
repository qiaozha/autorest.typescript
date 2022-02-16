/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Creates or updates an unlocked immutability policy. ETag in If-Match is honored if given but not required for this operation.
 *
 * @summary Creates or updates an unlocked immutability policy. ETag in If-Match is honored if given but not required for this operation.
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2021-06-01/examples/BlobContainersPutImmutabilityPolicy.json
 */
import {
  ImmutabilityPolicy,
  BlobContainersCreateOrUpdateImmutabilityPolicyOptionalParams,
  StorageManagementClient
} from "@msinternal/storage-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

async function createOrUpdateImmutabilityPolicy() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "res1782";
  const accountName = "sto7069";
  const containerName = "container6397";
  const parameters: ImmutabilityPolicy = {
    allowProtectedAppendWrites: true,
    immutabilityPeriodSinceCreationInDays: 3
  };
  const options: BlobContainersCreateOrUpdateImmutabilityPolicyOptionalParams = {
    parameters: parameters
  };
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result = await client.blobContainers.createOrUpdateImmutabilityPolicy(
    resourceGroupName,
    accountName,
    containerName,
    options
  );
  console.log(result);
}

createOrUpdateImmutabilityPolicy().catch(console.error);
