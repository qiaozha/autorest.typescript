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
 * This sample demonstrates how to Create or update an Azure Cosmos DB SQL userDefinedFunction
 *
 * @summary Create or update an Azure Cosmos DB SQL userDefinedFunction
 */
import {
  SqlUserDefinedFunctionCreateUpdateParameters,
  CosmosDBManagementClient
} from "@msinternal/cosmos-db-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: CosmosDBManagementClient;
//sqlResources.beginCreateUpdateSqlUserDefinedFunctionAndWait
async function cosmosDbSqlUserDefinedFunctionCreateUpdate() {
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  const containerName = "containerName";
  const userDefinedFunctionName = "userDefinedFunctionName";
  const createUpdateSqlUserDefinedFunctionParameters: SqlUserDefinedFunctionCreateUpdateParameters = {
    options: {},
    resource: { body: "body", id: "userDefinedFunctionName" }
  };
  await client.sqlResources
    .beginCreateUpdateSqlUserDefinedFunctionAndWait(
      resourceGroupName,
      accountName,
      databaseName,
      containerName,
      userDefinedFunctionName,
      createUpdateSqlUserDefinedFunctionParameters
    )
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new CosmosDBManagementClient(credential, subscriptionId);
  await cosmosDbSqlUserDefinedFunctionCreateUpdate();
}
main();