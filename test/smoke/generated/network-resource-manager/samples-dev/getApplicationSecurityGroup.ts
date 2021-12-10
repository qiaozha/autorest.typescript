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
 * This sample demonstrates how to Gets information about the specified application security group.
 *
 * @summary Gets information about the specified application security group.
 */
import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//applicationSecurityGroups.get
async function getApplicationSecurityGroup() {
  const resourceGroupName = "rg1";
  const applicationSecurityGroupName = "test-asg";
  await client.applicationSecurityGroups
    .get(resourceGroupName, applicationSecurityGroupName)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await getApplicationSecurityGroup();
}
main();