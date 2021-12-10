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
 * This sample demonstrates how to Retrieves the details of all RouteTables.
 *
 * @summary Retrieves the details of all RouteTables.
 */
import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//hubRouteTables.list
async function routeTableList() {
  const resourceGroupName = "rg1";
  const virtualHubName = "virtualHub1";
  const resArray = new Array();
  for await (let item of client.hubRouteTables.list(
    resourceGroupName,
    virtualHubName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await routeTableList();
}
main();