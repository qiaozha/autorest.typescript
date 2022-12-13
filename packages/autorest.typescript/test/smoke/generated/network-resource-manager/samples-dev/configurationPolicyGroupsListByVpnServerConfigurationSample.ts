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
 * This sample demonstrates how to Lists all the configurationPolicyGroups in a resource group for a vpnServerConfiguration.
 *
 * @summary Lists all the configurationPolicyGroups in a resource group for a vpnServerConfiguration.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/ConfigurationPolicyGroupListByVpnServerConfiguration.json
 */
async function configurationPolicyGroupListByVpnServerConfiguration() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const vpnServerConfigurationName = "vpnServerConfiguration1";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.configurationPolicyGroups.listByVpnServerConfiguration(
    resourceGroupName,
    vpnServerConfigurationName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

configurationPolicyGroupListByVpnServerConfiguration().catch(console.error);
