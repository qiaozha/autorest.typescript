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
 * This sample demonstrates how to Gets the current ledger digest upload configuration for a database.
 *
 * @summary Gets the current ledger digest upload configuration for a database.
 */
import { SqlManagementClient } from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: SqlManagementClient;
//ledgerDigestUploadsOperations.get
async function getsTheCurrentLedgerDigestUploadConfigurationForADatabase() {
  const resourceGroupName = "ledgertestrg";
  const serverName = "ledgertestserver";
  const databaseName = "testdb";
  const ledgerDigestUploads = "current";
  await client.ledgerDigestUploadsOperations
    .get(resourceGroupName, serverName, databaseName, ledgerDigestUploads)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  client = new SqlManagementClient(credential, subscriptionId);
  await getsTheCurrentLedgerDigestUploadConfigurationForADatabase();
}
main();