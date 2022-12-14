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
  RunCommandInput,
  ComputeManagementClient
} from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Run command on the VM.
 *
 * @summary Run command on the VM.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-07-01/examples/runCommands/VirtualMachineRunCommand.json
 */
async function virtualMachineRunCommand() {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "24fb23e3-6ba3-41f0-9b6e-e41131d5d61e";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "crptestar98131";
  const vmName = "vm3036";
  const parameters: RunCommandInput = { commandId: "RunPowerShellScript" };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachines.beginRunCommandAndWait(
    resourceGroupName,
    vmName,
    parameters
  );
  console.log(result);
}

async function main() {
  virtualMachineRunCommand();
}

main().catch(console.error);
