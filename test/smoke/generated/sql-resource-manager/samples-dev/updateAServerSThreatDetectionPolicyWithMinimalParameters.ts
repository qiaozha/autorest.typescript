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
 * This sample demonstrates how to Creates or updates a threat detection policy.
 *
 * @summary Creates or updates a threat detection policy.
 */
import {
  ServerSecurityAlertPolicy,
  SqlManagementClient
} from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: SqlManagementClient;
//serverSecurityAlertPolicies.beginCreateOrUpdateAndWait
async function updateAServerSThreatDetectionPolicyWithMinimalParameters() {
  const resourceGroupName = "securityalert-4799";
  const serverName = "securityalert-6440";
  const securityAlertPolicyName = "Default";
  const parameters: ServerSecurityAlertPolicy = { state: "Enabled" };
  await client.serverSecurityAlertPolicies
    .beginCreateOrUpdateAndWait(
      resourceGroupName,
      serverName,
      securityAlertPolicyName,
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
  await updateAServerSThreatDetectionPolicyWithMinimalParameters();
}
main();