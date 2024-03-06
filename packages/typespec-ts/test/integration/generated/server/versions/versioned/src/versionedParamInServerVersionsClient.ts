// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "./logger";
import { VersionedParamInServerVersionsClient } from "./clientDefinitions";

/**
 * Initialize a new instance of `VersionedParamInServerVersionsClient`
 * @param endpoint - Need to be set as 'http://localhost:3000' in client.
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  endpoint: string,
  options: ClientOptions = {},
): VersionedParamInServerVersionsClient {
  const baseUrl = options.baseUrl ?? `${endpoint}`;

  const userAgentInfo = `azsdk-js-versioned-rest/1.0.0-beta.1`;
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
    baseUrl,
    options,
  ) as VersionedParamInServerVersionsClient;

  client.pipeline.removePolicy({ name: "ApiVersionPolicy" });

  return client;
}
