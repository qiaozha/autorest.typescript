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
 * This sample demonstrates how to Gets a list of managed instances in a resource group.
 *
 * @summary Gets a list of managed instances in a resource group.
 */
import { SqlManagementClient } from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: SqlManagementClient;
//managedInstances.listByResourceGroup
async function listManagedInstancesByResourceGroupWithExpandAdministrators() {
  const resourceGroupName = "Test1";
  const resArray = new Array();
  for await (let item of client.managedInstances.listByResourceGroup(
    resourceGroupName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "20D7082A-0FC7-4468-82BD-542694D5042B";
  client = new SqlManagementClient(credential, subscriptionId);
  await listManagedInstancesByResourceGroupWithExpandAdministrators();
}
main();