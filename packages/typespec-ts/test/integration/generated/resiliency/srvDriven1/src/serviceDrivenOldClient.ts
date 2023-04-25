// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { InternalPipelineOptions } from "@azure/core-rest-pipeline";
import { logger } from "./logger";
import { ServiceDrivenOldClient } from "./clientDefinitions";

export interface ServiceDrivenOldClientOptions
  extends ClientOptions,
    InternalPipelineOptions {
  apiVersion?: string;
}

/**
 * Initialize a new instance of `ServiceDrivenOldClient`
 * @param serviceDeploymentVersion type: string, Pass in either 'v1' or 'v2'. This represents a version of the service deployment in history. 'v1' is for the deployment when the service had only one api version. 'v2' is for the deployment when the service had api-versions 'v1' and 'v2'.
 * @param options type: ServiceDrivenOldClientOptions, the parameter for all optional parameters
 */
export default function createClient(
  serviceDeploymentVersion: string,
  options: ServiceDrivenOldClientOptions = {}
): ServiceDrivenOldClient {
  const apiVersion = options.apiVersion ?? "v1";
  const baseUrl =
    options.baseUrl ??
    `http://localhost:3000/resiliency/service-driven/client:v1/service:${serviceDeploymentVersion}/api-version:${apiVersion}`;
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
    loggingOptions: {
      logger: logger.info,
    },
  };

  const client = getClient(baseUrl, options) as ServiceDrivenOldClient;

  return client;
}