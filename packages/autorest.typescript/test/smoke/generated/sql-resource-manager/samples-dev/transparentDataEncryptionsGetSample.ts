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
 * This sample demonstrates how to Gets a logical database's transparent data encryption.
 *
 * @summary Gets a logical database's transparent data encryption.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2021-02-01-preview/examples/TransparentDataEncryptionGet.json
 */
async function getADatabaseTransparentDataEncryption() {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["RESOURCE_GROUP"] || "security-tde-resourcegroup";
  const serverName = "securitytde";
  const databaseName = "testdb";
  const tdeName = "current";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.transparentDataEncryptions.get(
    resourceGroupName,
    serverName,
    databaseName,
    tdeName,
  );
  console.log(result);
}

async function main() {
  getADatabaseTransparentDataEncryption();
}

main().catch(console.error);
