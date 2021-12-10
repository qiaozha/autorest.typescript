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
 * This sample demonstrates how to Retrieves the properties of an existing Azure Cosmos DB SQL Role Definition with the given Id.
 *
 * @summary Retrieves the properties of an existing Azure Cosmos DB SQL Role Definition with the given Id.
 */
import { CosmosDBManagementClient } from "@msinternal/cosmos-db-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: CosmosDBManagementClient;
//sqlResources.getSqlRoleDefinition
async function cosmosDbSqlRoleDefinitionGet() {
  const roleDefinitionId = "myRoleDefinitionId";
  const resourceGroupName = "myResourceGroupName";
  const accountName = "myAccountName";
  await client.sqlResources
    .getSqlRoleDefinition(roleDefinitionId, resourceGroupName, accountName)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "mySubscriptionId";
  client = new CosmosDBManagementClient(credential, subscriptionId);
  await cosmosDbSqlRoleDefinitionGet();
}
main();