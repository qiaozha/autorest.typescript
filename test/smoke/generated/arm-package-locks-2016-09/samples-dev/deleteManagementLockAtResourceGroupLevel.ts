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
 * This sample demonstrates how to To delete management locks, you must have access to Microsoft.Authorization/* or Microsoft.Authorization/locks/* actions. Of the built-in roles, only Owner and User Access Administrator are granted those actions.
 *
 * @summary To delete management locks, you must have access to Microsoft.Authorization/* or Microsoft.Authorization/locks/* actions. Of the built-in roles, only Owner and User Access Administrator are granted those actions.
 */
import { ManagementLockClient } from "@msinternal/arm-package-locks-2016-09";
import { DefaultAzureCredential } from "@azure/identity";

let client: ManagementLockClient;
//managementLocks.deleteAtResourceGroupLevel
async function deleteManagementLockAtResourceGroupLevel() {
  const resourceGroupName = "resourcegroupname";
  const lockName = "testlock";
  await client.managementLocks
    .deleteAtResourceGroupLevel(resourceGroupName, lockName)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subscriptionId";
  client = new ManagementLockClient(credential, subscriptionId);
  await deleteManagementLockAtResourceGroupLevel();
}
main();
