/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SqlManagementClient } from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets a private link resource for SQL server.
 *
 * @summary Gets a private link resource for SQL server.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/PrivateLinkResourcesGet.json
 */
async function getsAPrivateLinkResourceForSql() {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "Default";
  const serverName = "test-svr";
  const groupName = "plr";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.privateLinkResources.get(
    resourceGroupName,
    serverName,
    groupName
  );
  console.log(result);
}

async function main() {
  getsAPrivateLinkResourceForSql();
}

main().catch(console.error);
