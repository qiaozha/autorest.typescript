/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Lists all the rule collections in a security admin configuration, in a paginated format.
 *
 * @summary Lists all the rule collections in a security admin configuration, in a paginated format.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/NetworkManagerAdminRuleCollectionList.json
 */
async function listSecurityAdminRuleCollections() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "rg1";
  const networkManagerName = "testNetworkManager";
  const configurationName = "myTestSecurityConfig";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.adminRuleCollections.list(
    resourceGroupName,
    networkManagerName,
    configurationName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listSecurityAdminRuleCollections().catch(console.error);
