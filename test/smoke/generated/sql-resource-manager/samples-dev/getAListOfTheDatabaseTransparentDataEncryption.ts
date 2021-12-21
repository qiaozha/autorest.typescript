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
 * This sample demonstrates how to Gets a list of the logical database's transparent data encryption.
 *
 * @summary Gets a list of the logical database's transparent data encryption.
 * x-ms-original-file:
 */
import { SqlManagementClient } from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: SqlManagementClient;
async function getAListOfTheDatabaseTransparentDataEncryption() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "security-tde-resourcegroup";
  const serverName = "securitytde";
  const databaseName = "testdb";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.transparentDataEncryptions.listByDatabase(
    resourceGroupName,
    serverName,
    databaseName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

getAListOfTheDatabaseTransparentDataEncryption().catch(console.error);
