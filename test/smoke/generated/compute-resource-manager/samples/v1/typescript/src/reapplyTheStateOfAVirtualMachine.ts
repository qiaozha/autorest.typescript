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
 * This sample demonstrates how to The operation to reapply a virtual machine's state.
 *
 * @summary The operation to reapply a virtual machine's state.
 */
import { ComputeManagementClient } from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: ComputeManagementClient;
//virtualMachines.beginReapplyAndWait
async function reapplyTheStateOfAVirtualMachine() {
  const resourceGroupName = "ResourceGroup";
  const vmName = "VMName";
  await client.virtualMachines
    .beginReapplyAndWait(resourceGroupName, vmName)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "{subscription-id}";
  client = new ComputeManagementClient(credential, subscriptionId);
  await reapplyTheStateOfAVirtualMachine();
}
main();