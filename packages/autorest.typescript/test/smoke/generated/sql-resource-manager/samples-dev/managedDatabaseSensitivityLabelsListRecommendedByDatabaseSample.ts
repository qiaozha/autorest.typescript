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
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets the sensitivity labels of a given database
 *
 * @summary Gets the sensitivity labels of a given database
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/ManagedDatabaseSensitivityLabelsListByDatabaseRecommended.json
 */
async function getsTheRecommendedSensitivityLabelsOfAGivenDatabaseInAManagedDatabase() {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "myRG";
  const managedInstanceName = "myManagedInstanceName";
  const databaseName = "myDatabase";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.managedDatabaseSensitivityLabels.listRecommendedByDatabase(
    resourceGroupName,
    managedInstanceName,
    databaseName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  getsTheRecommendedSensitivityLabelsOfAGivenDatabaseInAManagedDatabase();
}

main().catch(console.error);
