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
 * This sample demonstrates how to Cancels the asynchronous operation on the database.
 *
 * @summary Cancels the asynchronous operation on the database.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2021-02-01-preview/examples/CancelDatabaseOperation.json
 */
async function cancelTheDatabaseManagementOperation() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "sqlcrudtest-7398";
  const serverName = "sqlcrudtest-6661";
  const databaseName = "testdb";
  const operationId = "f779414b-e748-4925-8cfe-c8598f7660ae";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.databaseOperations.cancel(
    resourceGroupName,
    serverName,
    databaseName,
    operationId
  );
  console.log(result);
}

cancelTheDatabaseManagementOperation().catch(console.error);
