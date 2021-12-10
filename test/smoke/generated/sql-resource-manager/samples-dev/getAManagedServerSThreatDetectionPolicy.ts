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
 * This sample demonstrates how to Get a managed server's threat detection policy.
 *
 * @summary Get a managed server's threat detection policy.
 */
import { SqlManagementClient } from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: SqlManagementClient;
//managedServerSecurityAlertPolicies.get
async function getAManagedServerSThreatDetectionPolicy() {
  const resourceGroupName = "securityalert-4799";
  const managedInstanceName = "securityalert-6440";
  const securityAlertPolicyName = "Default";
  await client.managedServerSecurityAlertPolicies
    .get(resourceGroupName, managedInstanceName, securityAlertPolicyName)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  client = new SqlManagementClient(credential, subscriptionId);
  await getAManagedServerSThreatDetectionPolicy();
}
main();