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
 * This sample demonstrates how to Retrieves the details of all VirtualHubIpConfigurations.
 *
 * @summary Retrieves the details of all VirtualHubIpConfigurations.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-05-01/examples/VirtualHubIpConfigurationList.json
 */
async function virtualHubRouteTableV2List() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const virtualHubName = "hub1";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.virtualHubIpConfiguration.list(
    resourceGroupName,
    virtualHubName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

virtualHubRouteTableV2List().catch(console.error);
