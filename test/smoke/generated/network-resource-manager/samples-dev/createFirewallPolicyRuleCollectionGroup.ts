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
 * This sample demonstrates how to Creates or updates the specified FirewallPolicyRuleCollectionGroup.
 *
 * @summary Creates or updates the specified FirewallPolicyRuleCollectionGroup.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-05-01/examples/FirewallPolicyRuleCollectionGroupPut.json
 */
import {
  FirewallPolicyRuleCollectionGroup,
  NetworkManagementClient
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

async function createFirewallPolicyRuleCollectionGroup() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const firewallPolicyName = "firewallPolicy";
  const ruleCollectionGroupName = "ruleCollectionGroup1";
  const parameters: FirewallPolicyRuleCollectionGroup = {
    priority: 100,
    ruleCollections: [
      {
        name: "Example-Filter-Rule-Collection",
        action: { type: "Deny" },
        priority: 100,
        ruleCollectionType: "FirewallPolicyFilterRuleCollection",
        rules: [
          {
            name: "network-rule1",
            destinationAddresses: ["*"],
            destinationPorts: ["*"],
            ipProtocols: ["TCP"],
            ruleType: "NetworkRule",
            sourceAddresses: ["10.1.25.0/24"]
          }
        ]
      }
    ]
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.firewallPolicyRuleCollectionGroups.beginCreateOrUpdateAndWait(
    resourceGroupName,
    firewallPolicyName,
    ruleCollectionGroupName,
    parameters
  );
  console.log(result);
}

createFirewallPolicyRuleCollectionGroup().catch(console.error);
