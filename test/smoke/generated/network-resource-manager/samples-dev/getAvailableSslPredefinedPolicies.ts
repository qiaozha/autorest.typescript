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
 * This sample demonstrates how to Lists all SSL predefined policies for configuring Ssl policy.
 *
 * @summary Lists all SSL predefined policies for configuring Ssl policy.
 */
import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//applicationGateways.listAvailableSslPredefinedPolicies
async function getAvailableSslPredefinedPolicies() {
  const resArray = new Array();
  for await (let item of client.applicationGateways.listAvailableSslPredefinedPolicies()) {
    resArray.push(item);
  }
  console.log(resArray);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await getAvailableSslPredefinedPolicies();
}
main();