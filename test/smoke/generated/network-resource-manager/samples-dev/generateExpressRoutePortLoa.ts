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
 * This sample demonstrates how to Generate a letter of authorization for the requested ExpressRoutePort resource.
 *
 * @summary Generate a letter of authorization for the requested ExpressRoutePort resource.
 */
import {
  GenerateExpressRoutePortsLOARequest,
  NetworkManagementClient
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//expressRoutePorts.generateLOA
async function generateExpressRoutePortLoa() {
  const resourceGroupName = "rg1";
  const expressRoutePortName = "portName";
  const request: GenerateExpressRoutePortsLOARequest = {
    customerName: "customerName"
  };
  await client.expressRoutePorts
    .generateLOA(resourceGroupName, expressRoutePortName, request)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await generateExpressRoutePortLoa();
}
main();
