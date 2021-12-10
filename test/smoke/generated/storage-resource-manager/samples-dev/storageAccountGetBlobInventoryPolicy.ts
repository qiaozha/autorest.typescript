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
 * This sample demonstrates how to Gets the blob inventory policy associated with the specified storage account.
 *
 * @summary Gets the blob inventory policy associated with the specified storage account.
 */
import { StorageManagementClient } from "@msinternal/storage-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: StorageManagementClient;
//blobInventoryPolicies.list
async function storageAccountGetBlobInventoryPolicy() {
  const resourceGroupName = "res7687";
  const accountName = "sto9699";
  const resArray = new Array();
  for await (let item of client.blobInventoryPolicies.list(
    resourceGroupName,
    accountName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "{subscription-id}";
  client = new StorageManagementClient(credential, subscriptionId);
  await storageAccountGetBlobInventoryPolicy();
}
main();
