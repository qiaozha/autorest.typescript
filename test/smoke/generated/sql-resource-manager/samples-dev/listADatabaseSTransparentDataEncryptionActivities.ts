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
 * This sample demonstrates how to Returns a database's transparent data encryption operation result.
 *
 * @summary Returns a database's transparent data encryption operation result.
 */
import { SqlManagementClient } from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: SqlManagementClient;
//transparentDataEncryptionActivities.listByConfiguration
async function listADatabaseSTransparentDataEncryptionActivities() {
  const resourceGroupName = "sqlcrudtest-6852";
  const serverName = "sqlcrudtest-2080";
  const databaseName = "sqlcrudtest-9187";
  const transparentDataEncryptionName = "current";
  const resArray = new Array();
  for await (let item of client.transparentDataEncryptionActivities.listByConfiguration(
    resourceGroupName,
    serverName,
    databaseName,
    transparentDataEncryptionName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  client = new SqlManagementClient(credential, subscriptionId);
  await listADatabaseSTransparentDataEncryptionActivities();
}
main();