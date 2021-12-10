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
 * This sample demonstrates how to Lists all shares.
 *
 * @summary Lists all shares.
 */
import { StorageManagementClient } from "@msinternal/storage-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: StorageManagementClient;
//fileShares.list
async function listShareSnapshots() {
  const resourceGroupName = "res9290";
  const accountName = "sto1590";
  const expand = "snapshots";
  const options = { expand: expand };
  const resArray = new Array();
  for await (let item of client.fileShares.list(
    resourceGroupName,
    accountName,
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "{subscription-id}";
  client = new StorageManagementClient(credential, subscriptionId);
  await listShareSnapshots();
}
main();
