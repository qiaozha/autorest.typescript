// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createAzureLoadTestingClient from "@azure-rest/load-testing";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to call operation GetTestRunFile
 *
 * @summary call operation GetTestRunFile
 */
async function loadTestRunGetTestRunFileSample(): Promise<void> {
  const endpointParam = "{Your endpointParam}";
  const credential = new DefaultAzureCredential();
  const client = createAzureLoadTestingClient(endpointParam, credential);
  const testRunId = "{Your testRunId}";
  const fileName = "{Your fileName}";
  const result = await client
    .path("/test-runs/{testRunId}/files/{fileName}", testRunId, fileName)
    .get();
  console.log(result);
}

async function main(): Promise<void> {
  await loadTestRunGetTestRunFileSample();
}

main().catch(console.error);
