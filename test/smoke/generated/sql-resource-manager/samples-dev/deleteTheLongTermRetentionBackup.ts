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
 * This sample demonstrates how to Deletes a long term retention backup.
 *
 * @summary Deletes a long term retention backup.
 */
import { SqlManagementClient } from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: SqlManagementClient;
//longTermRetentionManagedInstanceBackups.beginDeleteByResourceGroupAndWait
async function deleteTheLongTermRetentionBackup() {
  const resourceGroupName = "testResourceGroup";
  const locationName = "japaneast";
  const managedInstanceName = "testInstance";
  const databaseName = "testDatabase";
  const backupName = "55555555-6666-7777-8888-999999999999;131637960820000000";
  await client.longTermRetentionManagedInstanceBackups
    .beginDeleteByResourceGroupAndWait(
      resourceGroupName,
      locationName,
      managedInstanceName,
      databaseName,
      backupName
    )
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  client = new SqlManagementClient(credential, subscriptionId);
  await deleteTheLongTermRetentionBackup();
}
main();