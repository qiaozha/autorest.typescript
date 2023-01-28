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
  AdminRuleCollection,
  NetworkManagementClient
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates an admin rule collection.
 *
 * @summary Creates or updates an admin rule collection.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/NetworkManagerAdminRuleCollectionPut.json
 */
async function createOrUpdateAnAdminRuleCollection() {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "rg1";
  const networkManagerName = "testNetworkManager";
  const configurationName = "myTestSecurityConfig";
  const ruleCollectionName = "testRuleCollection";
  const ruleCollection: AdminRuleCollection = {
    description: "A sample policy",
    appliesToGroups: [
      {
        networkGroupId:
          "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Network/networkManagers/testNetworkManager/networkGroups/testGroup"
      }
    ]
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.adminRuleCollections.createOrUpdate(
    resourceGroupName,
    networkManagerName,
    configurationName,
    ruleCollectionName,
    ruleCollection
  );
  console.log(result);
}

async function main() {
  createOrUpdateAnAdminRuleCollection();
}

main().catch(console.error);
