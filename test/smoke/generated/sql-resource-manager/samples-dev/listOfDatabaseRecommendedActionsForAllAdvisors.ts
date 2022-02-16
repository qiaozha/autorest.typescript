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
 * This sample demonstrates how to Gets a list of database advisors.
 *
 * @summary Gets a list of database advisors.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/DatabaseRecommendedActionListExpand.json
 */
import {
  DatabaseAdvisorsListByDatabaseOptionalParams,
  SqlManagementClient
} from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

async function listOfDatabaseRecommendedActionsForAllAdvisors() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "workloadinsight-demos";
  const serverName = "misosisvr";
  const databaseName = "IndexAdvisor_test_3";
  const expand = "recommendedActions";
  const options: DatabaseAdvisorsListByDatabaseOptionalParams = {
    expand: expand
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.databaseAdvisors.listByDatabase(
    resourceGroupName,
    serverName,
    databaseName,
    options
  );
  console.log(result);
}

listOfDatabaseRecommendedActionsForAllAdvisors().catch(console.error);
