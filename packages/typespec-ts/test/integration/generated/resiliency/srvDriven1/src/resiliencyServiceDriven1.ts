// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { ResiliencyServiceDriven1Client } from "./clientDefinitions";

/**
 * Initialize a new instance of `ResiliencyServiceDriven1Client`
 * @param options type: ClientOptions, the parameter for all optional parameters
 */
export default function createClient(
  options: ClientOptions = {}
): ResiliencyServiceDriven1Client {
  const baseUrl = options.baseUrl ?? `http://localhost:3000`;
  options.apiVersion = options.apiVersion ?? "1.0.0";
  const userAgentInfo = `azsdk-js-srv-driven-1-rest/1.0.0`;
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

  const client = getClient(baseUrl, options) as ResiliencyServiceDriven1Client;

  return client;
}