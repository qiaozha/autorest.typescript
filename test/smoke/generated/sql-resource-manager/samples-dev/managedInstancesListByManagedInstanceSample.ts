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
  ManagedInstancesListByManagedInstanceOptionalParams,
  SqlManagementClient
} from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Get top resource consuming queries of a managed instance.
 *
 * @summary Get top resource consuming queries of a managed instance.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2021-05-01-preview/examples/ManagedInstanceTopQueriesList.json
 */
async function obtainListOfInstanceTopResourceConsumingQueries() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "sqlcrudtest-7398";
  const managedInstanceName = "sqlcrudtest-4645";
  const interval = "PT1H";
  const observationMetric = "duration";
  const options: ManagedInstancesListByManagedInstanceOptionalParams = {
    interval,
    observationMetric
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.managedInstances.listByManagedInstance(
    resourceGroupName,
    managedInstanceName,
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

obtainListOfInstanceTopResourceConsumingQueries().catch(console.error);

/**
 * This sample demonstrates how to Get top resource consuming queries of a managed instance.
 *
 * @summary Get top resource consuming queries of a managed instance.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2021-05-01-preview/examples/ManagedInstanceTopQueriesListMax.json
 */
async function obtainListOfInstanceTopResourceConsumingQueriesFullBlownRequestAndResponse() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "sqlcrudtest-7398";
  const managedInstanceName = "sqlcrudtest-4645";
  const databases = "db1,db2";
  const startTime = "2020-03-10T12:00:00Z";
  const endTime = "2020-03-12T12:00:00Z";
  const interval = "P1D";
  const observationMetric = "cpu";
  const options: ManagedInstancesListByManagedInstanceOptionalParams = {
    databases,
    startTime,
    endTime,
    interval,
    observationMetric
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.managedInstances.listByManagedInstance(
    resourceGroupName,
    managedInstanceName,
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

obtainListOfInstanceTopResourceConsumingQueriesFullBlownRequestAndResponse().catch(
  console.error
);

/**
 * This sample demonstrates how to Get top resource consuming queries of a managed instance.
 *
 * @summary Get top resource consuming queries of a managed instance.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2021-05-01-preview/examples/ManagedInstanceTopQueriesListMin.json
 */
async function obtainListOfInstanceTopResourceConsumingQueriesMinimalRequestAndResponse() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "sqlcrudtest-7398";
  const managedInstanceName = "sqlcrudtest-4645";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.managedInstances.listByManagedInstance(
    resourceGroupName,
    managedInstanceName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

obtainListOfInstanceTopResourceConsumingQueriesMinimalRequestAndResponse().catch(
  console.error
);
