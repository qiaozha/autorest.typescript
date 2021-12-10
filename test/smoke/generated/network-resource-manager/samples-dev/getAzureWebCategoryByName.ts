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
 * This sample demonstrates how to Gets the specified Azure Web Category.
 *
 * @summary Gets the specified Azure Web Category.
 */
import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//webCategories.get
async function getAzureWebCategoryByName() {
  const name = "Arts";
  await client.webCategories.get(name).then((res) => {
    console.log(res);
  });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "4de8428a-4a92-4cea-90ff-b47128b8cab8";
  client = new NetworkManagementClient(credential, subscriptionId);
  await getAzureWebCategoryByName();
}
main();
