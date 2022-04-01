/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import {
  PipelineRequest,
  PipelineResponse,
  SendRequest
} from "@azure/core-rest-pipeline";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import {
  GeneratedClientOptionalParams,
  LanguageBatchInput,
  LanguagesOptionalParams,
  LanguagesResponse
} from "./models";

/** @internal */
export class GeneratedClient extends coreClient.ServiceClient {
  endpoint: string;
  apiVersion: string;

  /**
   * Initializes a new instance of the GeneratedClient class.
   * @param endpoint Supported Cognitive Services endpoints (protocol and hostname, for example:
   *                 https://westus.api.cognitive.microsoft.com).
   * @param options The parameter options
   */
  constructor(endpoint: string, options?: GeneratedClientOptionalParams) {
    if (endpoint === undefined) {
      throw new Error("'endpoint' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: GeneratedClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const packageDetails = `azsdk-js-constantParam/1.0.0-preview1`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      baseUri:
        options.endpoint ??
        options.baseUri ??
        "{Endpoint}/text/analytics/{ApiVersion}"
    };
    super(optionsWithDefaults);
    // Parameter assignments
    this.endpoint = endpoint;

    // Assigning values to Constant parameters
    this.apiVersion = options.apiVersion || "v3.1";
    this.addCustomApiVersionPolicy(options.apiVersion);
  }

  /** A function that adds a policy that sets the api-version (or equivalent) to reflect the library version. */
  private addCustomApiVersionPolicy(apiVersion?: string) {
    if (!apiVersion) {
      return;
    }
    const apiVersionPolicy = {
      name: "CustomApiVersionPolicy",
      async sendRequest(
        request: PipelineRequest,
        next: SendRequest
      ): Promise<PipelineResponse> {
        const param = request.url.split("?");
        if (param.length > 1) {
          const newParams = param[1].split("&").map((item) => {
            if (item.indexOf("api-version") > -1) {
              return item.replace(/(?<==).*$/, apiVersion);
            }
          });
          request.url = param[0] + "?" + newParams.join("&");
        }
        return next(request);
      }
    };
    this.pipeline.addPolicy(apiVersionPolicy);
  }

  /**
   * The API returns the detected language and a numeric score between 0 and 1. Scores close to 1
   * indicate 100% certainty that the identified language is true. See the <a
   * href="https://aka.ms/talangs">Supported languages in Text Analytics API</a> for the list of enabled
   * languages.
   * @param input Collection of documents to analyze for language endpoint.
   * @param options The options parameters.
   */
  languages(
    input: LanguageBatchInput,
    options?: LanguagesOptionalParams
  ): Promise<LanguagesResponse> {
    return this.sendOperationRequest(
      { input, options },
      languagesOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const languagesOperationSpec: coreClient.OperationSpec = {
  path: "/languages",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.LanguageResult
    },
    400: {
      bodyMapper: Mappers.ErrorResponse,
      isError: true
    },
    500: {
      bodyMapper: Mappers.ErrorResponse,
      isError: true
    }
  },
  requestBody: Parameters.input,
  queryParameters: [
    Parameters.modelVersion,
    Parameters.showStats,
    Parameters.loggingOptOut
  ],
  urlParameters: [Parameters.endpoint, Parameters.apiVersion],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
