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
 * This sample demonstrates how to Gets a list of inaccessible managed databases in a managed instance
 *
 * @summary Gets a list of inaccessible managed databases in a managed instance
 */
import { SqlManagementClient } from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: SqlManagementClient;
//managedDatabases.listInaccessibleByInstance
async function listInaccessibleManagedDatabasesByManagedInstances() {
  const resourceGroupName = "testrg";
  const managedInstanceName = "testcl";
  const resArray = new Array();
  for await (let item of client.managedDatabases.listInaccessibleByInstance(
    resourceGroupName,
    managedInstanceName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  client = new SqlManagementClient(credential, subscriptionId);
  await listInaccessibleManagedDatabasesByManagedInstances();
}
main();