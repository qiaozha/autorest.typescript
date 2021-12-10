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
 * This sample demonstrates how to Will update the status of policy's signature overrides for IDPS
 *
 * @summary Will update the status of policy's signature overrides for IDPS
 */
import {
  SignaturesOverrides,
  NetworkManagementClient
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//firewallPolicyIdpsSignaturesOverrides.patch
async function patchSignatureOverrides() {
  const resourceGroupName = "rg1";
  const firewallPolicyName = "firewallPolicy";
  const parameters: SignaturesOverrides = {
    name: "default",
    type: "Microsoft.Network/firewallPolicies/signatureOverrides",
    id:
      "/subscriptions/e747cc13-97d4-4a79-b463-42d7f4e558f2/resourceGroups/rg1/providers/Microsoft.Network/firewallPolicies/firewallPolicy/signatureOverrides/default",
    properties: { signatures: { "2000105": "Off", "2000106": "Deny" } }
  };
  await client.firewallPolicyIdpsSignaturesOverrides
    .patch(resourceGroupName, firewallPolicyName, parameters)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "e747cc13-97d4-4a79-b463-42d7f4e558f2";
  client = new NetworkManagementClient(credential, subscriptionId);
  await patchSignatureOverrides();
}
main();
