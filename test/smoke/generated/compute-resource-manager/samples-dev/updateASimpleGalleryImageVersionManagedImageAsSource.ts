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
 * This sample demonstrates how to Update a gallery image version.
 *
 * @summary Update a gallery image version.
 */
import {
  GalleryImageVersionUpdate,
  ComputeManagementClient
} from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: ComputeManagementClient;
//galleryImageVersions.beginUpdateAndWait
async function updateASimpleGalleryImageVersionManagedImageAsSource() {
  const resourceGroupName = "myResourceGroup";
  const galleryName = "myGalleryName";
  const galleryImageName = "myGalleryImageName";
  const galleryImageVersionName = "1.0.0";
  const galleryImageVersion: GalleryImageVersionUpdate = {
    publishingProfile: {
      targetRegions: [
        { name: "West US", regionalReplicaCount: 1 },
        {
          name: "East US",
          regionalReplicaCount: 2,
          storageAccountType: "Standard_ZRS"
        }
      ]
    },
    storageProfile: {
      source: {
        id:
          "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Compute/images/{imageName}"
      }
    }
  };
  await client.galleryImageVersions
    .beginUpdateAndWait(
      resourceGroupName,
      galleryName,
      galleryImageName,
      galleryImageVersionName,
      galleryImageVersion
    )
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "{subscription-id}";
  client = new ComputeManagementClient(credential, subscriptionId);
  await updateASimpleGalleryImageVersionManagedImageAsSource();
}
main();
