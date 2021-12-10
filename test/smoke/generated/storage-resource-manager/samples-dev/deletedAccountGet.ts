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
 * This sample demonstrates how to Get properties of specified deleted account resource.
 *
 * @summary Get properties of specified deleted account resource.
 */
import { StorageManagementClient } from "@msinternal/storage-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: StorageManagementClient;
//deletedAccounts.get
async function deletedAccountGet() {
  const deletedAccountName = "sto1125";
  const location = "eastus";
  await client.deletedAccounts.get(deletedAccountName, location).then((res) => {
    console.log(res);
  });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "{subscription-id}";
  client = new StorageManagementClient(credential, subscriptionId);
  await deletedAccountGet();
}
main();
