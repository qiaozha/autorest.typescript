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
 * This sample demonstrates how to Update an image.
 *
 * @summary Update an image.
 */
import {
  ImageUpdate,
  ComputeManagementClient
} from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: ComputeManagementClient;
//images.beginUpdateAndWait
async function updatesTagsOfAnImage() {
  const resourceGroupName = "myResourceGroup";
  const imageName = "myImage";
  const parameters: ImageUpdate = {
    hyperVGeneration: "V1",
    sourceVirtualMachine: {
      id:
        "/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/virtualMachines/myVM"
    },
    tags: { department: "HR" }
  };
  await client.images
    .beginUpdateAndWait(resourceGroupName, imageName, parameters)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "{subscription-id}";
  client = new ComputeManagementClient(credential, subscriptionId);
  await updatesTagsOfAnImage();
}
main();