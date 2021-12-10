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
 * This sample demonstrates how to Gets the specified load balancer load balancing rule.
 *
 * @summary Gets the specified load balancer load balancing rule.
 */
import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//loadBalancerLoadBalancingRules.get
async function loadBalancerLoadBalancingRuleGet() {
  const resourceGroupName = "testrg";
  const loadBalancerName = "lb1";
  const loadBalancingRuleName = "rule1";
  await client.loadBalancerLoadBalancingRules
    .get(resourceGroupName, loadBalancerName, loadBalancingRuleName)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await loadBalancerLoadBalancingRuleGet();
}
main();