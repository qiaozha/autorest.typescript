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
 * This sample demonstrates how to When you apply a lock at a parent scope, all child resources inherit the same lock. To create management locks, you must have access to Microsoft.Authorization/* or Microsoft.Authorization/locks/* actions. Of the built-in roles, only Owner and User Access Administrator are granted those actions.
 *
 * @summary When you apply a lock at a parent scope, all child resources inherit the same lock. To create management locks, you must have access to Microsoft.Authorization/* or Microsoft.Authorization/locks/* actions. Of the built-in roles, only Owner and User Access Administrator are granted those actions.
 */
import {
  ManagementLockObject,
  ManagementLockClient
} from "@msinternal/arm-package-locks-2016-09";
import { DefaultAzureCredential } from "@azure/identity";

let client: ManagementLockClient;
//managementLocks.createOrUpdateAtResourceLevel
async function createManagementLockAtResourceLevel() {
  const resourceGroupName = "resourcegroupname";
  const resourceProviderNamespace = "Microsoft.Storage";
  const parentResourcePath = "parentResourcePath";
  const resourceType = "storageAccounts";
  const resourceName = "teststorageaccount";
  const lockName = "testlock";
  const parameters: ManagementLockObject = { level: "ReadOnly" };
  await client.managementLocks
    .createOrUpdateAtResourceLevel(
      resourceGroupName,
      resourceProviderNamespace,
      parentResourcePath,
      resourceType,
      resourceName,
      lockName,
      parameters
    )
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subscriptionId";
  client = new ManagementLockClient(credential, subscriptionId);
  await createManagementLockAtResourceLevel();
}
main();
