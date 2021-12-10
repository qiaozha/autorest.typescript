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
 * This sample demonstrates how to Updates a database geo backup policy.
 *
 * @summary Updates a database geo backup policy.
 */
import {
  GeoBackupPolicy,
  SqlManagementClient
} from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: SqlManagementClient;
//geoBackupPolicies.createOrUpdate
async function updateGeoBackupPolicy() {
  const resourceGroupName = "sqlcrudtest-4799";
  const serverName = "sqlcrudtest-5961";
  const databaseName = "testdw";
  const geoBackupPolicyName = "Default";
  const parameters: GeoBackupPolicy = { state: "Enabled" };
  await client.geoBackupPolicies
    .createOrUpdate(
      resourceGroupName,
      serverName,
      databaseName,
      geoBackupPolicyName,
      parameters
    )
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  client = new SqlManagementClient(credential, subscriptionId);
  await updateGeoBackupPolicy();
}
main();