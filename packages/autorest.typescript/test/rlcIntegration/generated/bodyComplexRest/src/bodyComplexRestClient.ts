// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { InternalPipelineOptions } from "@azure/core-rest-pipeline";
import { logger } from "./logger";
import { BodyComplexRestClient } from "./clientDefinitions";

/**
 * Initialize a new instance of `BodyComplexRestClient`
 * @param options type: ClientOptions&InternalPipelineOptions, the parameter for all optional parameters
 */
export default function createClient(
  options: ClientOptions & InternalPipelineOptions = {}
): BodyComplexRestClient {
  const baseUrl = options.baseUrl ?? `http://localhost:3000`;
  options.apiVersion = options.apiVersion ?? "2016-02-29";
  const userAgentInfo = `azsdk-js-body-complex-rest/1.0.0-preview1`;
  const userAgentPrefix =
    options.userAgentOptions && options.userAgentOptions.userAgentPrefix
      ? `${options.userAgentOptions.userAgentPrefix} ${userAgentInfo}`
      : `${userAgentInfo}`;
  options = {
    ...options,
    userAgentOptions: {
      userAgentPrefix
    },
    loggingOptions: {
      logger: logger.info
    }
  };

  const client = getClient(baseUrl, options) as BodyComplexRestClient;

  return client;
}
