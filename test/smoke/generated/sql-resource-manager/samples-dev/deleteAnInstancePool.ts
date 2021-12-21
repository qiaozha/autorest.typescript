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
 * This sample demonstrates how to Deletes an instance pool
 *
 * @summary Deletes an instance pool
 * x-ms-original-file:
 */
import { SqlManagementClient } from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: SqlManagementClient;
async function deleteAnInstancePool() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "group1";
  const instancePoolName = "testIP";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.instancePools.beginDeleteAndWait(
    resourceGroupName,
    instancePoolName
  );
  console.log(result);
}

deleteAnInstancePool().catch(console.error);
