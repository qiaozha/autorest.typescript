// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { KeyCredential } from "@azure/core-auth";
import { ClientOptions } from "@azure-rest/core-client";
import { EventGridContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface EventGridClientOptions extends ClientOptions {
  /** The API version to use for this operation. */
  apiVersion?: string;
}

export { EventGridContext } from "../rest/index.js";

/** Azure Messaging EventGrid Client */
export function createEventGrid(
  endpointParam: string,
  credential: KeyCredential,
  options: EventGridClientOptions = {},
): EventGridContext {
  const clientContext = getClient(endpointParam, credential, options);
  return clientContext;
}
