/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  GalleryApplicationVersionUpdate,
  ComputeManagementClient
} from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Update a gallery Application Version.
 *
 * @summary Update a gallery Application Version.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-07-01/examples/gallery/UpdateASimpleGalleryApplicationVersion.json
 */
async function updateASimpleGalleryApplicationVersion() {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "myResourceGroup";
  const galleryName = "myGalleryName";
  const galleryApplicationName = "myGalleryApplicationName";
  const galleryApplicationVersionName = "1.0.0";
  const galleryApplicationVersion: GalleryApplicationVersionUpdate = {
    publishingProfile: {
      endOfLifeDate: new Date("2019-07-01T07:00:00Z"),
      manageActions: {
        install:
          'powershell -command "Expand-Archive -Path package.zip -DestinationPath C:\\package"',
        remove: "del C:\\package "
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
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.galleryApplicationVersions.beginUpdateAndWait(
    resourceGroupName,
    galleryName,
    galleryApplicationName,
    galleryApplicationVersionName,
    galleryApplicationVersion
  );
  console.log(result);
}

async function main() {
  updateASimpleGalleryApplicationVersion();
}

main().catch(console.error);
