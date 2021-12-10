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
 * This sample demonstrates how to Deletes the specified private endpoint connection on application gateway.
 *
 * @summary Deletes the specified private endpoint connection on application gateway.
 */
import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//applicationGatewayPrivateEndpointConnections.beginDeleteAndWait
async function deleteApplicationGatewayPrivateEndpointConnection() {
  const resourceGroupName = "rg1";
  const applicationGatewayName = "appgw";
  const connectionName = "connection1";
  await client.applicationGatewayPrivateEndpointConnections
    .beginDeleteAndWait(
      resourceGroupName,
      applicationGatewayName,
      connectionName
    )
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await deleteApplicationGatewayPrivateEndpointConnection();
}
main();
