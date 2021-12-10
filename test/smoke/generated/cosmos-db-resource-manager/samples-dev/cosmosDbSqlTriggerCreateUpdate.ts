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
 * This sample demonstrates how to Create or update an Azure Cosmos DB SQL trigger
 *
 * @summary Create or update an Azure Cosmos DB SQL trigger
 */
import {
  SqlTriggerCreateUpdateParameters,
  CosmosDBManagementClient
} from "@msinternal/cosmos-db-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: CosmosDBManagementClient;
//sqlResources.beginCreateUpdateSqlTriggerAndWait
async function cosmosDbSqlTriggerCreateUpdate() {
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  const containerName = "containerName";
  const triggerName = "triggerName";
  const createUpdateSqlTriggerParameters: SqlTriggerCreateUpdateParameters = {
    options: {},
    resource: {
      body: "body",
      id: "triggerName",
      triggerOperation: "triggerOperation",
      triggerType: "triggerType"
    }
  };
  await client.sqlResources
    .beginCreateUpdateSqlTriggerAndWait(
      resourceGroupName,
      accountName,
      databaseName,
      containerName,
      triggerName,
      createUpdateSqlTriggerParameters
    )
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new CosmosDBManagementClient(credential, subscriptionId);
  await cosmosDbSqlTriggerCreateUpdate();
}
main();