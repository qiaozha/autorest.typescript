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
 * This sample demonstrates how to Creates a VirtualHubIpConfiguration resource if it doesn't exist else updates the existing VirtualHubIpConfiguration.
 *
 * @summary Creates a VirtualHubIpConfiguration resource if it doesn't exist else updates the existing VirtualHubIpConfiguration.
 */
import {
  HubIpConfiguration,
  NetworkManagementClient
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//virtualHubIpConfiguration.beginCreateOrUpdateAndWait
async function virtualHubIPConfigurationPut() {
  const resourceGroupName = "rg1";
  const virtualHubName = "hub1";
  const ipConfigName = "ipconfig1";
  const parameters: HubIpConfiguration = {
    subnet: {
      id:
        "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/vnet1/subnets/subnet1"
    }
  };
  await client.virtualHubIpConfiguration
    .beginCreateOrUpdateAndWait(
      resourceGroupName,
      virtualHubName,
      ipConfigName,
      parameters
    )
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await virtualHubIPConfigurationPut();
}
main();
