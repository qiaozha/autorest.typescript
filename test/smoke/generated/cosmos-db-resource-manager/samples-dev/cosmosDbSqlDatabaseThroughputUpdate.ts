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
 * This sample demonstrates how to Update RUs per second of an Azure Cosmos DB SQL database
 *
 * @summary Update RUs per second of an Azure Cosmos DB SQL database
 */
import {
  ThroughputSettingsUpdateParameters,
  CosmosDBManagementClient
} from "@msinternal/cosmos-db-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: CosmosDBManagementClient;
//sqlResources.beginUpdateSqlDatabaseThroughputAndWait
async function cosmosDbSqlDatabaseThroughputUpdate() {
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  const updateThroughputParameters: ThroughputSettingsUpdateParameters = {
    location: "West US",
    resource: { throughput: 400 },
    tags: {}
  };
  await client.sqlResources
    .beginUpdateSqlDatabaseThroughputAndWait(
      resourceGroupName,
      accountName,
      databaseName,
      updateThroughputParameters
    )
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new CosmosDBManagementClient(credential, subscriptionId);
  await cosmosDbSqlDatabaseThroughputUpdate();
}
main();