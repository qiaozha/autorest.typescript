// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "../logger";
import { TokenCredential } from "@azure/core-auth";
import { PurviewAccountClient } from "./clientDefinitions";

export interface PurviewAccountClientOptions extends ClientOptions {
  apiVersion?: string;
}

/**
 * Initialize a new instance of `PurviewAccountClient`
 * @param endpoint - The account endpoint of your Purview account. Example: https://{accountName}.purview.azure.com/account/
 * @param credentials - uniquely identify client credential
 * @param {
 *     apiVersion = "2019-11-01-preview", ...options} - the parameter for all optional parameters
 */
export function createClient(
  endpoint: string,
  credentials: TokenCredential,
  {
    apiVersion = "2019-11-01-preview",
    ...options
  }: PurviewAccountClientOptions = {},
): PurviewAccountClient {
  const endpointUrl = options.endpoint ?? options.baseUrl ?? `${endpoint}`;
  const userAgentInfo = `azsdk-js-purview-administration-rest/1.0.0-beta.2`;
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
    credentials: {
      scopes: options.credentials?.scopes ?? [
        "https://purview.azure.net/.default",
      ],
    },
  };
  const client = getClient(
    endpointUrl,
    credentials,
    options,
  ) as PurviewAccountClient;

  client.pipeline.removePolicy({ name: "ApiVersionPolicy" });
  client.pipeline.addPolicy({
    name: "ClientApiVersionPolicy",
    sendRequest: (req, next) => {
      // Use the apiVesion defined in request url directly
      // Append one if there is no apiVesion and we have one at client options
      const url = new URL(req.url);
      if (!url.searchParams.get("api-version") && apiVersion) {
        req.url = `${req.url}${
          Array.from(url.searchParams.keys()).length > 0 ? "&" : "?"
        }api-version=${apiVersion}`;
      }

      return next(req);
    },
  });

  return client;
}
