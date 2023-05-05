// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "./logger";
import { KeyCredential } from "@azure/core-auth";
import { MicrosoftCognitiveLanguageServiceAnalyzeTextAuthoringClient } from "./clientDefinitions";

/**
 * Initialize a new instance of `MicrosoftCognitiveLanguageServiceAnalyzeTextAuthoringClient`
 * @param endpoint type: string, The endpoint to use.
 * @param credentials type: KeyCredential, uniquely identify client credential
 * @param options type: ClientOptions, the parameter for all optional parameters
 */
export default function createClient(
  endpoint: string,
  credentials: KeyCredential,
  options: ClientOptions = {}
): MicrosoftCognitiveLanguageServiceAnalyzeTextAuthoringClient {
  const baseUrl = options.baseUrl ?? `${endpoint}/language`;
  options.apiVersion = options.apiVersion ?? "202ß2-05-15-preview";
  options = {
    ...options,
    credentials: {
      apiKeyHeaderName: "Ocp-Apim-Subscription-Key",
    },
  };

  const userAgentInfo = `azsdk-js-authoring-rest/1.0.0-beta.1`;
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
  ) as MicrosoftCognitiveLanguageServiceAnalyzeTextAuthoringClient;

  return client;
}
