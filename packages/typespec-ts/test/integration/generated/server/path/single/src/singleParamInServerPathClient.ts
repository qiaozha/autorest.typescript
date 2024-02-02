// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "./logger";
import { SingleParamInServerPathClient } from "./clientDefinitions";

/**
 * Initialize a new instance of `SingleParamInServerPathClient`
 * @param endpoint - Need to be set as 'http://localhost:3000' in client.
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  endpoint: string,
  options: ClientOptions = {},
): SingleParamInServerPathClient {
  const endpointUrl = options.endpoint ?? options.baseUrl ?? `${endpoint}`;

  const userAgentInfo = `azsdk-js-singleparam-rest/1.0.0-beta.1`;
  const userAgentPrefix =
    options.userAgentOptions && options.userAgentOptions.userAgentPrefix
      ? `${options.userAgentOptions.userAgentPrefix} ${userAgentInfo}`
      : `${userAgentInfo}`;
  options = {
    ...options,
    userAgentOptions: {
      userAgentPrefix,
    },
    loggingOptions: {
      logger: options.loggingOptions?.logger ?? logger.info,
    },
  };

  const client = getClient(
    endpointUrl,
    options,
  ) as SingleParamInServerPathClient;

  client.pipeline.removePolicy({ name: "ApiVersionPolicy" });

  return client;
}
