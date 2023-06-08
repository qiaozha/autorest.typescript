// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { Client } from "../../bar/rest/index.js";
import { createClient as getClient } from "../../bar/rest/index.js";

export interface BarClientOptions extends ClientOptions {}

export { Client } from "../../bar/rest/index.js";

/** Bar */
export function createBar(
  endpoint: string,
  options: BarClientOptions = {}
): Client.BarContext {
  const baseUrl = endpoint;
  const clientContext = getClient(baseUrl, options);
  return clientContext;
}
