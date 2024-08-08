// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAuthoringClient from "@msinternal/authoring";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Get
 *
 * @summary call operation Get
 */
async function getSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAuthoringClient(endpointParam, credential);
  const projectName = "{Your projectName}";
  const result = await client
    .path("/projects/{projectName}", projectName)
    .get();
  console.log(result);
}

async function main() {
  getSample();
}

main().catch(console.error);
