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
  ManagedInstanceAdministrator,
  SqlManagementClient
} from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates or updates a managed instance administrator.
 *
 * @summary Creates or updates a managed instance administrator.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/ManagedInstanceAdministratorCreate.json
 */
async function createAdministratorOfManagedInstance() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "Default-SQL-SouthEastAsia";
  const managedInstanceName = "managedInstance";
  const administratorName = "ActiveDirectory";
  const parameters: ManagedInstanceAdministrator = {
    administratorType: "ActiveDirectory",
    login: "bob@contoso.com",
    sid: "44444444-3333-2222-1111-000000000000",
    tenantId: "55555555-4444-3333-2222-111111111111"
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.managedInstanceAdministrators.beginCreateOrUpdateAndWait(
    resourceGroupName,
    managedInstanceName,
    administratorName,
    parameters
  );
  console.log(result);
}

createAdministratorOfManagedInstance().catch(console.error);

/**
 * This sample demonstrates how to Creates or updates a managed instance administrator.
 *
 * @summary Creates or updates a managed instance administrator.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/ManagedInstanceAdministratorUpdate.json
 */
async function updateAdministratorOfManagedInstance() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "Default-SQL-SouthEastAsia";
  const managedInstanceName = "managedInstance";
  const administratorName = "ActiveDirectory";
  const parameters: ManagedInstanceAdministrator = {
    administratorType: "ActiveDirectory",
    login: "bob@contoso.com",
    sid: "44444444-3333-2222-1111-000000000000",
    tenantId: "55555555-4444-3333-2222-111111111111"
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.managedInstanceAdministrators.beginCreateOrUpdateAndWait(
    resourceGroupName,
    managedInstanceName,
    administratorName,
    parameters
  );
  console.log(result);
}

updateAdministratorOfManagedInstance().catch(console.error);
