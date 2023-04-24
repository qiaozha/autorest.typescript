// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { InternalPipelineOptions } from "@azure/core-rest-pipeline";
import { logger } from "./logger";
import { MultipleParamInServerPathClient } from "./clientDefinitions";

export interface MultipleParamInServerPathClientOptions
  extends ClientOptions,
    InternalPipelineOptions {
  apiVersion?: string;
}

/**
 * Initialize a new instance of `MultipleParamInServerPathClient`
 * @param endpoint type: string, Pass in http://localhost:3000 for endpoint.
 * @param options type: MultipleParamInServerPathClientOptions, the parameter for all optional parameters
 */
export default function createClient(
  endpoint: string,
  options: MultipleParamInServerPathClientOptions = {}
): MultipleParamInServerPathClient {
  const apiVersion = options.apiVersion ?? "v1.0";
  const baseUrl =
    options.baseUrl ?? `${endpoint}/server/path/multiple/${apiVersion}`;

  const userAgentInfo = `azsdk-js-multipleparam-rest/1.0.0-beta.1`;
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

  const client = getClient(baseUrl, options) as MultipleParamInServerPathClient;

  return client;
}
