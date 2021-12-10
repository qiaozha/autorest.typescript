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
 * This sample demonstrates how to Updates an application security group's tags.
 *
 * @summary Updates an application security group's tags.
 */
import {
  TagsObject,
  NetworkManagementClient
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//applicationSecurityGroups.updateTags
async function updateApplicationSecurityGroupTags() {
  const resourceGroupName = "rg1";
  const applicationSecurityGroupName = "test-asg";
  const parameters: TagsObject = { tags: { tag1: "value1", tag2: "value2" } };
  await client.applicationSecurityGroups
    .updateTags(resourceGroupName, applicationSecurityGroupName, parameters)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await updateApplicationSecurityGroupTags();
}
main();