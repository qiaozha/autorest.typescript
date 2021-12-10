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
 * This sample demonstrates how to This operation retrieves the policy definition in the given subscription with the given name.
 *
 * @summary This operation retrieves the policy definition in the given subscription with the given name.
 */
import { PolicyClient } from "@msinternal/arm-package-policy-2019-09";
import { DefaultAzureCredential } from "@azure/identity";

let client: PolicyClient;
//policyDefinitions.get
async function retrieveAPolicyDefinition() {
  const policyDefinitionName = "ResourceNaming";
  await client.policyDefinitions.get(policyDefinitionName).then((res) => {
    console.log(res);
  });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "ae640e6b-ba3e-4256-9d62-2993eecfa6f2";
  client = new PolicyClient(credential, subscriptionId);
  await retrieveAPolicyDefinition();
}
main();