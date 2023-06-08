// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { Client } from "../../foo/rest/index.js";
import { createClient as getClient } from "../../foo/rest/index.js";

export interface FooClientOptions extends ClientOptions {}

export { Client } from "../../foo/rest/index.js";

/** Cadl Foo */
export function createFoo(
  endpoint: string,
  options: FooClientOptions = {}
): Client.FooContext {
  const baseUrl = endpoint;
  const clientContext = getClient(baseUrl, options);
  return clientContext;
}
