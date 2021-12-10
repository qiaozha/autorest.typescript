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
 * This sample demonstrates how to Deletes the queue with the specified queue name, under the specified account if it exists.
 *
 * @summary Deletes the queue with the specified queue name, under the specified account if it exists.
 */
import { StorageManagementClient } from "@msinternal/storage-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: StorageManagementClient;
//queue.delete
async function queueOperationDelete() {
  const resourceGroupName = "res3376";
  const accountName = "sto328";
  const queueName = "queue6185";
  await client.queue
    .delete(resourceGroupName, accountName, queueName)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "{subscription-id}";
  client = new StorageManagementClient(credential, subscriptionId);
  await queueOperationDelete();
}
main();
