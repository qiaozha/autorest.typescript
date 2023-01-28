/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  RecommendedSensitivityLabelUpdateList,
  SqlManagementClient
} from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Update recommended sensitivity labels states of a given database using an operations batch.
 *
 * @summary Update recommended sensitivity labels states of a given database using an operations batch.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/ManagedDatabaseSensitivityLabelsRecommendedUpdate.json
 */
async function updateRecommendedSensitivityLabelsOfAGivenDatabaseUsingAnOperationsBatch() {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "myRG";
  const managedInstanceName = "myManagedInstanceName";
  const databaseName = "myDatabase";
  const parameters: RecommendedSensitivityLabelUpdateList = {
    operations: [
      { schema: "dbo", column: "column1", op: "enable", table: "table1" },
      { schema: "dbo", column: "column2", op: "disable", table: "table2" },
      { schema: "dbo", column: "Column3", op: "disable", table: "Table1" }
    ]
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.managedDatabaseRecommendedSensitivityLabels.update(
    resourceGroupName,
    managedInstanceName,
    databaseName,
    parameters
  );
  console.log(result);
}

async function main() {
  updateRecommendedSensitivityLabelsOfAGivenDatabaseUsingAnOperationsBatch();
}

main().catch(console.error);
