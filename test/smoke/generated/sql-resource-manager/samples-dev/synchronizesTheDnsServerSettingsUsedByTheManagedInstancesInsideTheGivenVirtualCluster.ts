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
 * This sample demonstrates how to Synchronizes the DNS server settings used by the managed instances inside the given virtual cluster.
 *
 * @summary Synchronizes the DNS server settings used by the managed instances inside the given virtual cluster.
 */
import { SqlManagementClient } from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: SqlManagementClient;
//virtualClusters.updateDnsServers
async function synchronizesTheDnsServerSettingsUsedByTheManagedInstancesInsideTheGivenVirtualCluster() {
  const resourceGroupName = "sqlcrudtest-7398";
  const virtualClusterName = "sqlcrudtest-4645";
  await client.virtualClusters
    .updateDnsServers(resourceGroupName, virtualClusterName)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  client = new SqlManagementClient(credential, subscriptionId);
  await synchronizesTheDnsServerSettingsUsedByTheManagedInstancesInsideTheGivenVirtualCluster();
}
main();