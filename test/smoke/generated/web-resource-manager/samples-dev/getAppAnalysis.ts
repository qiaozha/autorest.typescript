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
 * This sample demonstrates how to Description for Get Site Analysis
 *
 * @summary Description for Get Site Analysis
 */
import { WebSiteManagementClient } from "@msinternal/web-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: WebSiteManagementClient;
//diagnostics.getSiteAnalysisSlot
async function getAppAnalysis() {
  const resourceGroupName = "Sample-WestUSResourceGroup";
  const siteName = "SampleApp";
  const diagnosticCategory = "availability";
  const analysisName = "appanalysis";
  const slot = "Production";
  await client.diagnostics
    .getSiteAnalysisSlot(
      resourceGroupName,
      siteName,
      diagnosticCategory,
      analysisName,
      slot
    )
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  client = new WebSiteManagementClient(credential, subscriptionId);
  await getAppAnalysis();
}
main();