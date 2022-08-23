import { getClient, ClientOptions } from "@azure-rest/core-client";
import { TokenCredential } from "@azure/core-auth";
import { OutputBasicClient } from "./clientDefinitions";

export default function createClient(
  credentials: TokenCredential,
  options: ClientOptions = {}
): OutputBasicClient {
  const baseUrl = options.baseUrl ?? "http://localhost:3000";
  options.apiVersion = options.apiVersion ?? "1.0.0";
  options = {
    ...options,
    credentials: {
      scopes: ["https://example.net/.default"],
    },
  };

  const userAgentInfo = `azsdk-js-example-rest/1.0.0-beta.1`;
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

  const client = getClient(baseUrl, credentials, options) as OutputBasicClient;

  return {
    ...client,
    outputBasic: {
      getModel: (options) => {
        return client.path("/output-basic/models").get(options);
      },
    },
  };
}
