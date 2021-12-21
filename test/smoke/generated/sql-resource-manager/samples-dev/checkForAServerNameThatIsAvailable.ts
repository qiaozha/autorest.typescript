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
 * This sample demonstrates how to Determines whether a resource can be created with the specified name.
 *
 * @summary Determines whether a resource can be created with the specified name.
 * x-ms-original-file:
 */
import {
  CheckNameAvailabilityRequest,
  SqlManagementClient
} from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: SqlManagementClient;
async function checkForAServerNameThatIsAvailable() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const parameters: CheckNameAvailabilityRequest = {
    name: "server1",
    type: "Microsoft.Sql/servers"
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.servers.checkNameAvailability(parameters);
  console.log(result);
}

checkForAServerNameThatIsAvailable().catch(console.error);
