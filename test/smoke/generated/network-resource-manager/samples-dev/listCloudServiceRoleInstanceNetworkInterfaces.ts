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
 * This sample demonstrates how to Gets information about all network interfaces in a role instance in a cloud service.
 *
 * @summary Gets information about all network interfaces in a role instance in a cloud service.
 */
import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//networkInterfaces.listCloudServiceRoleInstanceNetworkInterfaces
async function listCloudServiceRoleInstanceNetworkInterfaces() {
  const resourceGroupName = "rg1";
  const cloudServiceName = "cs1";
  const roleInstanceName = "TestVMRole_IN_0";
  const resArray = new Array();
  for await (let item of client.networkInterfaces.listCloudServiceRoleInstanceNetworkInterfaces(
    resourceGroupName,
    cloudServiceName,
    roleInstanceName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await listCloudServiceRoleInstanceNetworkInterfaces();
}
main();
