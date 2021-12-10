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
 * This sample demonstrates how to Gets the specified managed HSM Pool.
 *
 * @summary Gets the specified managed HSM Pool.
 */
import { KeyVaultManagementClient } from "@msinternal/keyvault-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: KeyVaultManagementClient;
//managedHsms.get
async function retrieveAManagedHsmPool() {
  const resourceGroupName = "hsm-group";
  const name = "hsm1";
  await client.managedHsms.get(resourceGroupName, name).then((res) => {
    console.log(res);
  });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  client = new KeyVaultManagementClient(credential, subscriptionId);
  await retrieveAManagedHsmPool();
}
main();