// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createAzureAgriFoodPlatformDataPlaneServiceClient from "@msinternal/agrifood-data-plane";
import { AzureKeyCredential } from "@azure/core-auth";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets a specified boundary resource under a particular farmer.
 *
 * @summary Gets a specified boundary resource under a particular farmer.
 * x-ms-original-file: specification/agrifood/data-plane/Microsoft.AgFoodPlatform/preview/2021-03-31-preview/examples/Boundaries_Get.json
 */
async function boundariesGet(): Promise<void> {
  const endpoint = "{Endpoint}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAzureAgriFoodPlatformDataPlaneServiceClient(
    endpoint,
    credential,
  );
  const farmerId = "FARMER123";
  const boundaryId = "BOUNDARY123";
  const result = await client
    .path("/farmers/{farmerId}/boundaries/{boundaryId}", farmerId, boundaryId)
    .get();
  console.log(result);
}

async function main(): Promise<void> {
  await boundariesGet();
}

main().catch(console.error);
