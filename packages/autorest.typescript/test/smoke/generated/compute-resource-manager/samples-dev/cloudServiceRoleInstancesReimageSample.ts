/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ComputeManagementClient } from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to The Reimage Role Instance asynchronous operation reinstalls the operating system on instances of web roles or worker roles.
 *
 * @summary The Reimage Role Instance asynchronous operation reinstalls the operating system on instances of web roles or worker roles.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-03-01/examples/ReimageCloudServiceRoleInstance.json
 */
async function reimageCloudServiceRoleInstance() {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "{subscription-id}";
  const roleInstanceName = "{roleInstance-name}";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "ConstosoRG";
  const cloudServiceName = "{cs-name}";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.cloudServiceRoleInstances.beginReimageAndWait(
    roleInstanceName,
    resourceGroupName,
    cloudServiceName
  );
  console.log(result);
}

async function main() {
  reimageCloudServiceRoleInstance();
}

main().catch(console.error);
