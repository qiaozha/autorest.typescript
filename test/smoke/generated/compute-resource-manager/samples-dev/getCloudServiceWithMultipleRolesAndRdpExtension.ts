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
 * This sample demonstrates how to Display information about a cloud service.
 *
 * @summary Display information about a cloud service.
 */
import { ComputeManagementClient } from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: ComputeManagementClient;
//cloudServices.get
async function getCloudServiceWithMultipleRolesAndRdpExtension() {
  const resourceGroupName = "ConstosoRG";
  const cloudServiceName = "{cs-name}";
  await client.cloudServices
    .get(resourceGroupName, cloudServiceName)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "{subscription-id}";
  client = new ComputeManagementClient(credential, subscriptionId);
  await getCloudServiceWithMultipleRolesAndRdpExtension();
}
main();
