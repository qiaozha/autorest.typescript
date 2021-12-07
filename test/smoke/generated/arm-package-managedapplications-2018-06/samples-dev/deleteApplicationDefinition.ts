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
 * This sample demonstrates how to Deletes the managed application definition.
 *
 * @summary Deletes the managed application definition.
 */
import { ApplicationClient } from "@msinternal/arm-package-managedapplications-2018-06";
import { DefaultAzureCredential } from "@azure/identity";

let client: ApplicationClient;
//applicationDefinitions.beginDeleteByIdAndWait
async function deleteApplicationDefinition() {
  const resourceGroupName = "rg";
  const applicationDefinitionName = "myManagedApplicationDef";
  await client.applicationDefinitions
    .beginDeleteByIdAndWait(resourceGroupName, applicationDefinitionName)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new ApplicationClient(credential, subscriptionId);
  await deleteApplicationDefinition();
}
main();
