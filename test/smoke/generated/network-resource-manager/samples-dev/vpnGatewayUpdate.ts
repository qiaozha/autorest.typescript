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
 * This sample demonstrates how to Updates virtual wan vpn gateway tags.
 *
 * @summary Updates virtual wan vpn gateway tags.
 */
import {
  TagsObject,
  NetworkManagementClient
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//vpnGateways.beginUpdateTagsAndWait
async function vpnGatewayUpdate() {
  const resourceGroupName = "rg1";
  const gatewayName = "gateway1";
  const vpnGatewayParameters: TagsObject = {
    tags: { tag1: "value1", tag2: "value2" }
  };
  await client.vpnGateways
    .beginUpdateTagsAndWait(
      resourceGroupName,
      gatewayName,
      vpnGatewayParameters
    )
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await vpnGatewayUpdate();
}
main();