/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import { GeneratedClientContext } from "./generatedClientContext";
import {
  GeneratedClientOptionalParams,
  LanguageBatchInput,
  GeneratedClientLanguagesOptionalParams,
  GeneratedClientLanguagesResponse
} from "./models";

/** @internal */
export class GeneratedClient extends GeneratedClientContext {
  /**
   * Initializes a new instance of the GeneratedClient class.
   * @param endpoint Supported Cognitive Services endpoints (protocol and hostname, for example:
   *                 https://westus.api.cognitive.microsoft.com).
   * @param options The parameter options
   */
  constructor(endpoint: string, options?: GeneratedClientOptionalParams) {
    super(endpoint, options);
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
    options?: GeneratedClientLanguagesOptionalParams
  ): Promise<GeneratedClientLanguagesResponse> {
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