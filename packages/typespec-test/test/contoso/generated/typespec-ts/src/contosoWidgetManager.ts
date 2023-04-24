// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { InternalPipelineOptions } from "@azure/core-rest-pipeline";
import { logger } from "./logger";
import { ContosoWidgetManagerClient } from "./clientDefinitions";

/**
 * Initialize a new instance of `ContosoWidgetManagerClient`
 * @param endpoint type: string, The parameter endpoint
 * @param options type: ClientOptions&InternalPipelineOptions, the parameter for all optional parameters
 */
export default function createClient(
  endpoint: string,
  options: ClientOptions & InternalPipelineOptions = {}
): ContosoWidgetManagerClient {
  const baseUrl = options.baseUrl ?? `${endpoint}`;
  options.apiVersion = options.apiVersion ?? "2022-11-01-preview";

  const userAgentInfo = `azsdk-js-contosowidgetmanager-rest/1.0.0-beta.1`;
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

  const client = getClient(baseUrl, options) as ContosoWidgetManagerClient;

  return client;
}
