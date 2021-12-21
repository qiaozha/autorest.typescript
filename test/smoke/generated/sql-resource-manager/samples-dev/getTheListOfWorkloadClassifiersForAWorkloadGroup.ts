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
 * This sample demonstrates how to Gets the list of workload classifiers for a workload group
 *
 * @summary Gets the list of workload classifiers for a workload group
 * x-ms-original-file:
 */
import { SqlManagementClient } from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: SqlManagementClient;
async function getTheListOfWorkloadClassifiersForAWorkloadGroup() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "Default-SQL-SouthEastAsia";
  const serverName = "testsvr";
  const databaseName = "testdb";
  const workloadGroupName = "wlm_workloadgroup";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.workloadClassifiers.listByWorkloadGroup(
    resourceGroupName,
    serverName,
    databaseName,
    workloadGroupName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

getTheListOfWorkloadClassifiersForAWorkloadGroup().catch(console.error);
