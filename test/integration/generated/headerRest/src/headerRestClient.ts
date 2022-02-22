// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import "@azure/core-auth";
import { HeaderRestClient } from "./clientDefinitions";

export default function createHeaderRestClient(
  options: ClientOptions = {}
): HeaderRestClient {
  const baseUrl = options.baseUrl ?? "http://localhost:3000";

  const client = getClient(baseUrl, options) as HeaderRestClient;

  return client;
}
