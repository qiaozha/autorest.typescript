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
 * This sample demonstrates how to Starts packet capture on vpn gateway in the specified resource group.
 *
 * @summary Starts packet capture on vpn gateway in the specified resource group.
 */
import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//vpnGateways.beginStartPacketCaptureAndWait
async function startPacketCaptureOnVpnGatewayWithoutFilter() {
  const resourceGroupName = "rg1";
  const gatewayName = "vpngw";
  await client.vpnGateways
    .beginStartPacketCaptureAndWait(resourceGroupName, gatewayName)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await startPacketCaptureOnVpnGatewayWithoutFilter();
}
main();