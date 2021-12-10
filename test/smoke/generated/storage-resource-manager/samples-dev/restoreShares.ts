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
 * This sample demonstrates how to Restore a file share within a valid retention days if share soft delete is enabled
 *
 * @summary Restore a file share within a valid retention days if share soft delete is enabled
 */
import {
  DeletedShare,
  StorageManagementClient
} from "@msinternal/storage-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: StorageManagementClient;
//fileShares.restore
async function restoreShares() {
  const resourceGroupName = "res3376";
  const accountName = "sto328";
  const shareName = "share1249";
  const deletedShare: DeletedShare = {
    deletedShareName: "share1249",
    deletedShareVersion: "1234567890"
  };
  await client.fileShares
    .restore(resourceGroupName, accountName, shareName, deletedShare)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "{subscription-id}";
  client = new StorageManagementClient(credential, subscriptionId);
  await restoreShares();
}
main();