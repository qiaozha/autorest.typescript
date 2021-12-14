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
 * This sample demonstrates how to Updates (patches) a disk encryption set.
 *
 * @summary Updates (patches) a disk encryption set.
 */
import {
  DiskEncryptionSetUpdate,
  ComputeManagementClient
} from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: ComputeManagementClient;
//diskEncryptionSets.beginUpdateAndWait
async function updateADiskEncryptionSetWithRotationToLatestKeyVersionEnabledSetToTrueSucceeded() {
  const resourceGroupName = "myResourceGroup";
  const diskEncryptionSetName = "myDiskEncryptionSet";
  const diskEncryptionSet: DiskEncryptionSetUpdate = {
    activeKey: {
      keyUrl:
        "https://myvaultdifferentsub.vault-int.azure-int.net/keys/keyName/keyVersion1"
    },
    encryptionType: "EncryptionAtRestWithCustomerKey",
    identity: { type: "SystemAssigned" },
    rotationToLatestKeyVersionEnabled: true
  };
  await client.diskEncryptionSets
    .beginUpdateAndWait(
      resourceGroupName,
      diskEncryptionSetName,
      diskEncryptionSet
    )
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "{subscription-id}";
  client = new ComputeManagementClient(credential, subscriptionId);
  await updateADiskEncryptionSetWithRotationToLatestKeyVersionEnabledSetToTrueSucceeded();
}
main();
