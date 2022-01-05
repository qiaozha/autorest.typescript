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
 * This sample demonstrates how to Description for Get Diagnostics Category
 *
 * @summary Description for Get Diagnostics Category
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2021-02-01/examples/Diagnostics_GetSiteDiagnosticCategory.json
 */
import { WebSiteManagementClient } from "@msinternal/web-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

async function getAppDiagnosticCategory() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "Sample-WestUSResourceGroup";
  const siteName = "SampleApp";
  const diagnosticCategory = "availability";
  const slot = "Production";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.diagnostics.getSiteDiagnosticCategorySlot(
    resourceGroupName,
    siteName,
    diagnosticCategory,
    slot
  );
  console.log(result);
}

getAppDiagnosticCategory().catch(console.error);
