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
 * This sample demonstrates how to The List operation gets information about the vaults associated with the subscription.
 *
 * @summary The List operation gets information about the vaults associated with the subscription.
 * x-ms-original-file: specification/keyvault/resource-manager/Microsoft.KeyVault/preview/2021-06-01-preview/examples/listVault.json
 */
import {
  VaultsListOptionalParams,
  KeyVaultManagementClient
} from "@msinternal/keyvault-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

async function listVaultsInTheSpecifiedSubscription() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const top = 1;
  const options: VaultsListOptionalParams = { top };
  const credential = new DefaultAzureCredential();
  const client = new KeyVaultManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.vaults.list(options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

listVaultsInTheSpecifiedSubscription().catch(console.error);
