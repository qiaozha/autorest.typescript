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
 * This sample demonstrates how to Gets details about a specified subscription.
 *
 * @summary Gets details about a specified subscription.
 */
import { SubscriptionClient } from "@msinternal/arm-package-subscriptions-2019-06";
import { DefaultAzureCredential } from "@azure/identity";

let client: SubscriptionClient;
//subscriptions.get
async function getASingleSubscription() {
  const subscriptionId = "291bba3f-e0a5-47bc-a099-3bdcb2a50a05";
  await client.subscriptions.get(subscriptionId).then((res) => {
    console.log(res);
  });
}
async function main() {
  const credential = new DefaultAzureCredential();
  client = new SubscriptionClient(credential);
  await getASingleSubscription();
}
main();