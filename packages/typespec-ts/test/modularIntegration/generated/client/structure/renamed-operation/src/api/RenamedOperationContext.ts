// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { ServiceContext } from "../rest/index.js";
import getClient from "../rest/index.js";
import { ClientType } from "../models/models.js";

export interface RenamedOperationClientOptions extends ClientOptions {}

export { ServiceContext } from "../rest/index.js";

export function createRenamedOperation(
  endpoint: string,
  client: ClientType,
  options: RenamedOperationClientOptions = {}
): ServiceContext {
  const clientContext = getClient(endpoint, client, options);
  return clientContext;
}
