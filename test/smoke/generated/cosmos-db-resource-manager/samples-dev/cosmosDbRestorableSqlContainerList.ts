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
 * This sample demonstrates how to Show the event feed of all mutations done on all the Azure Cosmos DB SQL containers under a specific database.  This helps in scenario where container was accidentally deleted.  This API requires 'Microsoft.DocumentDB/locations/restorableDatabaseAccounts/.../read' permission
 *
 * @summary Show the event feed of all mutations done on all the Azure Cosmos DB SQL containers under a specific database.  This helps in scenario where container was accidentally deleted.  This API requires 'Microsoft.DocumentDB/locations/restorableDatabaseAccounts/.../read' permission
 */
import { CosmosDBManagementClient } from "@msinternal/cosmos-db-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: CosmosDBManagementClient;
//restorableSqlContainers.list
async function cosmosDbRestorableSqlContainerList() {
  const location = "WestUS";
  const instanceId = "98a570f2-63db-4117-91f0-366327b7b353";
  const restorableSqlDatabaseRid = "3fu-hg==";
  const options = { restorableSqlDatabaseRid: restorableSqlDatabaseRid };
  const resArray = new Array();
  for await (let item of client.restorableSqlContainers.list(
    location,
    instanceId,
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new CosmosDBManagementClient(credential, subscriptionId);
  await cosmosDbRestorableSqlContainerList();
}
main();