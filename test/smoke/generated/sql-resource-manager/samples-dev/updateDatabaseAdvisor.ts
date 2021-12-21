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
 * This sample demonstrates how to Updates a database advisor.
 *
 * @summary Updates a database advisor.
 * x-ms-original-file:
 */
import { Advisor, SqlManagementClient } from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: SqlManagementClient;
async function updateDatabaseAdvisor() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "workloadinsight-demos";
  const serverName = "misosisvr";
  const databaseName = "IndexAdvisor_test_3";
  const advisorName = "CreateIndex";
  const parameters: Advisor = { autoExecuteStatus: "Disabled" };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.databaseAdvisors.update(
    resourceGroupName,
    serverName,
    databaseName,
    advisorName,
    parameters
  );
  console.log(result);
}

updateDatabaseAdvisor().catch(console.error);
