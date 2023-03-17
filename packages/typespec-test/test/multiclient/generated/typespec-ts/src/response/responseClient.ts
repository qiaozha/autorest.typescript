// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { ResponseClient } from "./clientDefinitions";

/**
 * Initialize a new instance of `ResponseClient`
 * @param endpoint type: string, The parameter endpoint
 * @param options type: ClientOptions, the parameter for all optional parameters
 */
export function createClient(
  endpoint: string,
  options: ClientOptions = {}
): ResponseClient {
  const baseUrl = options.baseUrl ?? `${endpoint}`;
  options.apiVersion = options.apiVersion ?? "1.0.0";

  const userAgentInfo = `azsdk-js-multiclient-rest/1.0.0-beta.1`;
  const userAgentPrefix =
    options.userAgentOptions && options.userAgentOptions.userAgentPrefix
      ? `${options.userAgentOptions.userAgentPrefix} ${userAgentInfo}`
      : `${userAgentInfo}`;
  options = {
    ...options,
    userAgentOptions: {
      userAgentPrefix,
    },
  };

  const client = getClient(baseUrl, options) as ResponseClient;

  return client;
}