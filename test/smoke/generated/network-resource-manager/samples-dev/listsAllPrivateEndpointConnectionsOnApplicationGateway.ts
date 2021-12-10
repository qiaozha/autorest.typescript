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
 * This sample demonstrates how to Lists all private endpoint connections on an application gateway.
 *
 * @summary Lists all private endpoint connections on an application gateway.
 */
import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//applicationGatewayPrivateEndpointConnections.list
async function listsAllPrivateEndpointConnectionsOnApplicationGateway() {
  const resourceGroupName = "rg1";
  const applicationGatewayName = "appgw";
  const resArray = new Array();
  for await (let item of client.applicationGatewayPrivateEndpointConnections.list(
    resourceGroupName,
    applicationGatewayName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await listsAllPrivateEndpointConnectionsOnApplicationGateway();
}
main();
