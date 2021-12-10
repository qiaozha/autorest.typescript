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
 * This sample demonstrates how to Creates or updates a DSCP Configuration.
 *
 * @summary Creates or updates a DSCP Configuration.
 */
import {
  DscpConfiguration,
  NetworkManagementClient
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//dscpConfigurationOperations.beginCreateOrUpdateAndWait
async function createDscpConfiguration() {
  const resourceGroupName = "rg1";
  const dscpConfigurationName = "mydscpconfig";
  const parameters: DscpConfiguration = {
    location: "eastus",
    qosDefinitionCollection: [
      {
        destinationIpRanges: [{ endIP: "127.0.10.2", startIP: "127.0.10.1" }],
        destinationPortRanges: [{ end: 15, start: 15 }],
        markings: [1],
        sourceIpRanges: [{ endIP: "127.0.0.2", startIP: "127.0.0.1" }],
        sourcePortRanges: [
          { end: 11, start: 10 },
          { end: 21, start: 20 }
        ],
        protocol: "Tcp"
      },
      {
        destinationIpRanges: [{ endIP: "12.0.10.2", startIP: "12.0.10.1" }],
        destinationPortRanges: [{ end: 52, start: 51 }],
        markings: [2],
        sourceIpRanges: [{ endIP: "12.0.0.2", startIP: "12.0.0.1" }],
        sourcePortRanges: [{ end: 12, start: 11 }],
        protocol: "Udp"
      }
    ]
  };
  await client.dscpConfigurationOperations
    .beginCreateOrUpdateAndWait(
      resourceGroupName,
      dscpConfigurationName,
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
  await createDscpConfiguration();
}
main();
