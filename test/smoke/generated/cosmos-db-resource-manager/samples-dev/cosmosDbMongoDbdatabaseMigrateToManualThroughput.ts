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
 * This sample demonstrates how to Migrate an Azure Cosmos DB MongoDB database from autoscale to manual throughput
 *
 * @summary Migrate an Azure Cosmos DB MongoDB database from autoscale to manual throughput
 */
import { CosmosDBManagementClient } from "@msinternal/cosmos-db-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: CosmosDBManagementClient;
//mongoDBResources.beginMigrateMongoDBDatabaseToManualThroughputAndWait
async function cosmosDbMongoDbdatabaseMigrateToManualThroughput() {
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  await client.mongoDBResources
    .beginMigrateMongoDBDatabaseToManualThroughputAndWait(
      resourceGroupName,
      accountName,
      databaseName
    )
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new CosmosDBManagementClient(credential, subscriptionId);
  await cosmosDbMongoDbdatabaseMigrateToManualThroughput();
}
main();