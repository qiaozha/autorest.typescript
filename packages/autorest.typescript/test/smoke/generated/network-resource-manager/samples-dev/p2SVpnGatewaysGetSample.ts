/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Retrieves the details of a virtual wan p2s vpn gateway.
 *
 * @summary Retrieves the details of a virtual wan p2s vpn gateway.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/P2SVpnGatewayGet.json
 */
async function p2SVpnGatewayGet() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const gatewayName = "p2sVpnGateway1";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.p2SVpnGateways.get(
    resourceGroupName,
    gatewayName
  );
  console.log(result);
}

p2SVpnGatewayGet().catch(console.error);
