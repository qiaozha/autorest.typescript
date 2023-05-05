// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "./logger";
import { TokenCredential, KeyCredential } from "@azure/core-auth";
import { AzureOpenAIApiClient } from "./clientDefinitions";

/**
 * Initialize a new instance of `AzureOpenAIApiClient`
 * @param endpoint type: string, Supported Cognitive Services endpoints (protocol and hostname, for example:
 * https://westus.api.cognitive.microsoft.com).
 * @param credentials type: TokenCredential|KeyCredential, uniquely identify client credential
 * @param options type: ClientOptions, the parameter for all optional parameters
 */
export default function createClient(
  endpoint: string,
  credentials: TokenCredential | KeyCredential,
  options: ClientOptions = {}
): AzureOpenAIApiClient {
  const baseUrl = options.baseUrl ?? `${endpoint}/openai`;
  options.apiVersion = options.apiVersion ?? "2022-12-01";
  options = {
    ...options,
    credentials: {
      scopes: ["https://cognitiveservices.azure.com/.default"],
      apiKeyHeaderName: "api-key",
    },
  };

  const userAgentInfo = `azsdk-js-openai-rest/1.0.0-beta.1`;
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

  const client = getClient(
    baseUrl,
    credentials,
    options
  ) as AzureOpenAIApiClient;

  return client;
}
