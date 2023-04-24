// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { InternalPipelineOptions } from "@azure/core-rest-pipeline";
import { logger } from "./logger";
import { TokenCredential, KeyCredential } from "@azure/core-auth";
import { AuthUnionClient } from "./clientDefinitions";

/**
 * Initialize a new instance of `AuthUnionClient`
 * @param credentials type: TokenCredential|KeyCredential, uniquely identify client credential
 * @param options type: ClientOptions&InternalPipelineOptions, the parameter for all optional parameters
 */
export default function createClient(
  credentials: TokenCredential | KeyCredential,
  options: ClientOptions & InternalPipelineOptions = {}
): AuthUnionClient {
  const baseUrl = options.baseUrl ?? `http://localhost:3000`;
  options.apiVersion = options.apiVersion ?? "1.0.0";
  options = {
    ...options,
    credentials: {
      scopes: ["https://security.microsoft.com/.default"],
      apiKeyHeaderName: "x-ms-api-key",
    },
  };

  const userAgentInfo = `azsdk-js-auth-union-rest/1.0.0`;
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
      logger: logger.info,
    },
  };

  const client = getClient(baseUrl, credentials, options) as AuthUnionClient;

  return client;
}
