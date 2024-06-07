// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "../logger.js";
import { TokenCredential, KeyCredential } from "@azure/core-auth";
import { WidgetManagerContext } from "./clientDefinitions.js";

/**
 * Initialize a new instance of `WidgetManagerContext`
 * @param endpointParam - Supported Widget Services endpoints (protocol and hostname, for example:
 * https://westus.api.widget.contoso.com).
 * @param credentials - uniquely identify client credential
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  endpointParam: string,
  credentials: TokenCredential | KeyCredential,
  options: ClientOptions = {},
): WidgetManagerContext {
  const endpointUrl =
    options.endpoint ?? options.baseUrl ?? `${endpointParam}/widget`;

  const apiVersion = options.apiVersion ?? "2022-08-30";
  delete options.apiVersion;

  const userAgentInfo = `azsdk-js-overload_modular-rest/1.0.0-beta.1`;
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
        "https://widget.contoso.com/.default",
      ],
      apiKeyHeaderName: options.credentials?.apiKeyHeaderName ?? "api-key",
    },
  };

  const client = getClient(
    endpointUrl,
    credentials,
    options,
  ) as WidgetManagerContext;

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
