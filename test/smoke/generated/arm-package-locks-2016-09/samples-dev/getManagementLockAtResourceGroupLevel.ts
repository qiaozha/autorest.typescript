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
 * This sample demonstrates how to Gets a management lock at the resource group level.
 *
 * @summary Gets a management lock at the resource group level.
 */
import { ManagementLockClient } from "@msinternal/arm-package-locks-2016-09";
import { DefaultAzureCredential } from "@azure/identity";

let client: ManagementLockClient;
//managementLocks.getAtResourceGroupLevel
async function getManagementLockAtResourceGroupLevel() {
  const resourceGroupName = "resourcegroupname";
  const lockName = "testlock";
  await client.managementLocks
    .getAtResourceGroupLevel(resourceGroupName, lockName)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subscriptionId";
  client = new ManagementLockClient(credential, subscriptionId);
  await getManagementLockAtResourceGroupLevel();
}
main();
