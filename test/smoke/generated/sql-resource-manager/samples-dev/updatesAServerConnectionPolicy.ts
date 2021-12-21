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
 * This sample demonstrates how to Updates a server connection policy
 *
 * @summary Updates a server connection policy
 * x-ms-original-file:
 */
import {
  ServerConnectionPolicy,
  SqlManagementClient
} from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: SqlManagementClient;
async function updatesAServerConnectionPolicy() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "testrg";
  const serverName = "testserver";
  const connectionPolicyName = "default";
  const parameters: ServerConnectionPolicy = { connectionType: "Redirect" };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.serverConnectionPolicies.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serverName,
    connectionPolicyName,
    parameters
  );
  console.log(result);
}

updatesAServerConnectionPolicy().catch(console.error);
