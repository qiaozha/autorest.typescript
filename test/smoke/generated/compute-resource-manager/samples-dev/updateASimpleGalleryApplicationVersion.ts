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
 * This sample demonstrates how to Update a gallery Application Version.
 *
 * @summary Update a gallery Application Version.
 */
import {
  GalleryApplicationVersionUpdate,
  ComputeManagementClient
} from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: ComputeManagementClient;
//galleryApplicationVersions.beginUpdateAndWait
async function updateASimpleGalleryApplicationVersion() {
  const resourceGroupName = "myResourceGroup";
  const galleryName = "myGalleryName";
  const galleryApplicationName = "myGalleryApplicationName";
  const galleryApplicationVersionName = "1.0.0";
  const galleryApplicationVersion: GalleryApplicationVersionUpdate = {
    publishingProfile: {
      endOfLifeDate: new Date("2019-07-01T07:00:00Z"),
      manageActions: {
        install:
          'powershell -command "Expand-Archive -Path package.zip -DestinationPath C:package"',
        remove: "del C:package "
      },
      replicaCount: 1,
      source: {
        mediaLink:
          "https://mystorageaccount.blob.core.windows.net/mycontainer/package.zip?{sasKey}"
      },
      storageAccountType: "Standard_LRS",
      targetRegions: [
        {
          name: "West US",
          regionalReplicaCount: 1,
          storageAccountType: "Standard_LRS"
        }
      ]
    }
  };
  await client.galleryApplicationVersions
    .beginUpdateAndWait(
      resourceGroupName,
      galleryName,
      galleryApplicationName,
      galleryApplicationVersionName,
      galleryApplicationVersion
    )
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "{subscription-id}";
  client = new ComputeManagementClient(credential, subscriptionId);
  await updateASimpleGalleryApplicationVersion();
}
main();
