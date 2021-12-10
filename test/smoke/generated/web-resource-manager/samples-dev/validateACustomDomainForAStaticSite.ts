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
 * This sample demonstrates how to Description for Validates a particular custom domain can be added to a static site.
 *
 * @summary Description for Validates a particular custom domain can be added to a static site.
 */
import { WebSiteManagementClient } from "@msinternal/web-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: WebSiteManagementClient;
//staticSites.validateCustomDomainCanBeAddedToStaticSite
async function validateACustomDomainForAStaticSite() {
  const resourceGroupName = "rg";
  const name = "testStaticSite0";
  const domainName = "custom.domain.net";
  await client.staticSites
    .validateCustomDomainCanBeAddedToStaticSite(
      resourceGroupName,
      name,
      domainName
    )
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  client = new WebSiteManagementClient(credential, subscriptionId);
  await validateACustomDomainForAStaticSite();
}
main();