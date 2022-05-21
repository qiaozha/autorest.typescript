/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SqlManagementClient } from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Retrieves server automatic tuning options.
 *
 * @summary Retrieves server automatic tuning options.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/ServerAutomaticTuningGet.json
 */
async function getAServerAutomaticTuningSettings() {
  const subscriptionId = "c3aa9078-0000-0000-0000-e36f151182d7";
  const resourceGroupName = "default-sql-onebox";
  const serverName = "testsvr11";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.serverAutomaticTuningOperations.get(
    resourceGroupName,
    serverName
  );
  console.log(result);
}

getAServerAutomaticTuningSettings().catch(console.error);
