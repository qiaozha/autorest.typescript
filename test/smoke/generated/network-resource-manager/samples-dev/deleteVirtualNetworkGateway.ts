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
 * This sample demonstrates how to Deletes the specified virtual network gateway.
 *
 * @summary Deletes the specified virtual network gateway.
 */
import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//virtualNetworkGateways.beginDeleteAndWait
async function deleteVirtualNetworkGateway() {
  const resourceGroupName = "rg1";
  const virtualNetworkGatewayName = "vpngw";
  await client.virtualNetworkGateways
    .beginDeleteAndWait(resourceGroupName, virtualNetworkGatewayName)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await deleteVirtualNetworkGateway();
}
main();