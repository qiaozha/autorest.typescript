/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  BastionHost,
  NetworkManagementClient,
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates the specified Bastion Host.
 *
 * @summary Creates or updates the specified Bastion Host.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/BastionHostPut.json
 */
async function createBastionHost() {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "rg1";
  const bastionHostName = "bastionhosttenant";
  const parameters: BastionHost = {
    ipConfigurations: [
      {
        name: "bastionHostIpConfiguration",
        publicIPAddress: {
          id: "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/publicIPAddresses/pipName",
        },
        subnet: {
          id: "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/vnet2/subnets/BastionHostSubnet",
        },
      },
    ],
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.bastionHosts.beginCreateOrUpdateAndWait(
    resourceGroupName,
    bastionHostName,
    parameters,
  );
  console.log(result);
}

async function main() {
  createBastionHost();
}

main().catch(console.error);
