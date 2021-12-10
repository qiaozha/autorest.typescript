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
 * This sample demonstrates how to Approve or reject a private endpoint connection with a given name.
 *
 * @summary Approve or reject a private endpoint connection with a given name.
 */
import {
  PrivateEndpointConnection,
  CosmosDBManagementClient
} from "@msinternal/cosmos-db-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: CosmosDBManagementClient;
//privateEndpointConnections.beginCreateOrUpdateAndWait
async function approveOrRejectAPrivateEndpointConnectionWithAGivenName() {
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const privateEndpointConnectionName = "privateEndpointConnectionName";
  const parameters: PrivateEndpointConnection = {
    privateLinkServiceConnectionState: {
      description: "Approved by johndoe@contoso.com",
      status: "Approved"
    }
  };
  await client.privateEndpointConnections
    .beginCreateOrUpdateAndWait(
      resourceGroupName,
      accountName,
      privateEndpointConnectionName,
      parameters
    )
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  client = new CosmosDBManagementClient(credential, subscriptionId);
  await approveOrRejectAPrivateEndpointConnectionWithAGivenName();
}
main();