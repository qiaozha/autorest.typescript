// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { getClient } from "@azure-rest/core-client";
import { logger } from "../logger.js";
/**
 * Initialize a new instance of `AzureHealthInsightsContext`
 * @param endpointParam - Supported Cognitive Services endpoints (protocol and hostname, for example: https://westus2.api.cognitive.microsoft.com).
 * @param credentials - uniquely identify client credential
 * @param options - the parameter for all optional parameters
 */
export default function createClient(endpointParam, credentials, options = {}) {
    const endpointUrl = options.endpoint ?? options.baseUrl ?? `${endpointParam}/health-insights`;
    options.apiVersion = options.apiVersion ?? "2023-09-01-preview";
    const userAgentInfo = `azsdk-js-health-insights-radiologyinsights-rest/1.0.0-beta.1`;
    const userAgentPrefix = options.userAgentOptions && options.userAgentOptions.userAgentPrefix
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
            apiKeyHeaderName: options.credentials?.apiKeyHeaderName ?? "Ocp-Apim-Subscription-Key",
        },
    };
    const client = getClient(endpointUrl, credentials, options);
    return client;
}
//# sourceMappingURL=azureHealthInsightsClient.js.map