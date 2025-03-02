// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createAzureAgriFoodPlatformDataPlaneServiceClient from "@msinternal/agrifood-data-plane";
import { AzureKeyCredential } from "@azure/core-auth";
import "dotenv/config";

/**
 * This sample demonstrates how to Get cascade delete job details for OAuth tokens for specified job ID.
 *
 * @summary Get cascade delete job details for OAuth tokens for specified job ID.
 * x-ms-original-file: specification/agrifood/data-plane/Microsoft.AgFoodPlatform/preview/2021-03-31-preview/examples/OAuthTokens_GetCascadeDeleteJobDetails.json
 */
async function oAuthTokensGetCascadeDeleteJobDetails(): Promise<void> {
  const endpoint = "{Endpoint}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAzureAgriFoodPlatformDataPlaneServiceClient(
    endpoint,
    credential,
  );
  const jobId = "JOBID123";
  const result = await client.path("/oauth/tokens/remove/{jobId}", jobId).get();
  console.log(result);
}

async function main(): Promise<void> {
  await oAuthTokensGetCascadeDeleteJobDetails();
}

main().catch(console.error);
