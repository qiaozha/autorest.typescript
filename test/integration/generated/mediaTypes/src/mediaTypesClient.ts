/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import {
  MediaTypesClientOptionalParams,
  ContentType,
  AnalyzeBody$binaryOptionalParams,
  AnalyzeBody$jsonOptionalParams,
  AnalyzeBodyResponse,
  AnalyzeBodyNoAcceptHeader$binaryOptionalParams,
  AnalyzeBodyNoAcceptHeader$jsonOptionalParams,
  ContentTypeWithEncodingOptionalParams,
  ContentTypeWithEncodingResponse,
  BinaryBodyWithTwoContentTypesOptionalParams,
  BinaryBodyWithTwoContentTypesResponse,
  ContentType1,
  BinaryBodyWithThreeContentTypes$binaryOptionalParams,
  BinaryBodyWithThreeContentTypes$textOptionalParams,
  BinaryBodyWithThreeContentTypesResponse,
  PutTextAndJsonBody$textOptionalParams,
  PutTextAndJsonBody$jsonOptionalParams,
  PutTextAndJsonBodyResponse
} from "./models";

export class MediaTypesClient extends coreClient.ServiceClient {
  $host: string;

  /**
   * Initializes a new instance of the MediaTypesClient class.
   * @param options The parameter options
   */
  constructor(options?: MediaTypesClientOptionalParams) {
    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: MediaTypesClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const packageDetails = `azsdk-js-media-types-service/1.0.0-preview1`;
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
      baseUri: options.endpoint ?? options.baseUri ?? "http://localhost:3000"
    };
    super(optionsWithDefaults);

    // Assigning values to Constant parameters
    this.$host = options.$host || "http://localhost:3000";
  }

  /**
   * Analyze body, that could be different media types.
   * @param contentType Upload file type
   * @param options The options parameters.
   */
  analyzeBody(
    contentType: ContentType,
    options?: AnalyzeBody$binaryOptionalParams
  ): Promise<AnalyzeBodyResponse>;
  /**
   * Analyze body, that could be different media types.
   * @param contentType Body Parameter content-type
   * @param options The options parameters.
   */
  analyzeBody(
    contentType: "application/json",
    options?: AnalyzeBody$jsonOptionalParams
  ): Promise<AnalyzeBodyResponse>;
  /**
   * Analyze body, that could be different media types.
   * @param args Includes all the parameters for this operation.
   */
  analyzeBody(
    ...args:
      | [ContentType, AnalyzeBody$binaryOptionalParams?]
      | ["application/json", AnalyzeBody$jsonOptionalParams?]
  ): Promise<AnalyzeBodyResponse> {
    let operationSpec: coreClient.OperationSpec;
    let operationArguments: coreClient.OperationArguments;
    let options;
    if (
      args[0] === "application/pdf" ||
      args[0] === "image/jpeg" ||
      args[0] === "image/png" ||
      args[0] === "image/tiff"
    ) {
      operationSpec = analyzeBody$binaryOperationSpec;
      operationArguments = { contentType: args[0], options: args[1] };
      options = args[1];
    } else if (args[0] === "application/json") {
      operationSpec = analyzeBody$jsonOperationSpec;
      operationArguments = { contentType: args[0], options: args[1] };
      options = args[1];
    } else {
      throw new TypeError(
        `"contentType" must be a valid value but instead was "${args[0]}".`
      );
    }
    operationArguments.options = options || {};
    return this.sendOperationRequest(operationArguments, operationSpec);
  }

  /**
   * Analyze body, that could be different media types. Adds to AnalyzeBody by not having an accept type.
   * @param contentType Upload file type
   * @param options The options parameters.
   */
  analyzeBodyNoAcceptHeader(
    contentType: ContentType,
    options?: AnalyzeBodyNoAcceptHeader$binaryOptionalParams
  ): Promise<void>;
  /**
   * Analyze body, that could be different media types. Adds to AnalyzeBody by not having an accept type.
   * @param contentType Body Parameter content-type
   * @param options The options parameters.
   */
  analyzeBodyNoAcceptHeader(
    contentType: "application/json",
    options?: AnalyzeBodyNoAcceptHeader$jsonOptionalParams
  ): Promise<void>;
  /**
   * Analyze body, that could be different media types. Adds to AnalyzeBody by not having an accept type.
   * @param args Includes all the parameters for this operation.
   */
  analyzeBodyNoAcceptHeader(
    ...args:
      | [ContentType, AnalyzeBodyNoAcceptHeader$binaryOptionalParams?]
      | ["application/json", AnalyzeBodyNoAcceptHeader$jsonOptionalParams?]
  ): Promise<void> {
    let operationSpec: coreClient.OperationSpec;
    let operationArguments: coreClient.OperationArguments;
    let options;
    if (
      args[0] === "application/pdf" ||
      args[0] === "image/jpeg" ||
      args[0] === "image/png" ||
      args[0] === "image/tiff"
    ) {
      operationSpec = analyzeBodyNoAcceptHeader$binaryOperationSpec;
      operationArguments = { contentType: args[0], options: args[1] };
      options = args[1];
    } else if (args[0] === "application/json") {
      operationSpec = analyzeBodyNoAcceptHeader$jsonOperationSpec;
      operationArguments = { contentType: args[0], options: args[1] };
      options = args[1];
    } else {
      throw new TypeError(
        `"contentType" must be a valid value but instead was "${args[0]}".`
      );
    }
    operationArguments.options = options || {};
    return this.sendOperationRequest(operationArguments, operationSpec);
  }

  /**
   * Pass in contentType 'text/plain; encoding=UTF-8' to pass test. Value for input does not matter
   * @param options The options parameters.
   */
  contentTypeWithEncoding(
    options?: ContentTypeWithEncodingOptionalParams
  ): Promise<ContentTypeWithEncodingResponse> {
    return this.sendOperationRequest(
      { options },
      contentTypeWithEncodingOperationSpec
    );
  }

  /**
   * Binary body with two content types. Pass in of {'hello': 'world'} for the application/json content
   * type, and a byte stream of 'hello, world!' for application/octet-stream.
   * @param message The payload body.
   * @param options The options parameters.
   */
  binaryBodyWithTwoContentTypes(
    message: coreRestPipeline.RequestBodyType,
    options?: BinaryBodyWithTwoContentTypesOptionalParams
  ): Promise<BinaryBodyWithTwoContentTypesResponse> {
    return this.sendOperationRequest(
      { message, options },
      binaryBodyWithTwoContentTypesOperationSpec
    );
  }

  /**
   * Binary body with three content types. Pass in string 'hello, world' with content type 'text/plain',
   * {'hello': world'} with content type 'application/json' and a byte string for
   * 'application/octet-stream'.
   * @param contentType Upload file type
   * @param message The payload body.
   * @param options The options parameters.
   */
  binaryBodyWithThreeContentTypes(
    contentType: ContentType1,
    message: coreRestPipeline.RequestBodyType,
    options?: BinaryBodyWithThreeContentTypes$binaryOptionalParams
  ): Promise<BinaryBodyWithThreeContentTypesResponse>;
  /**
   * Binary body with three content types. Pass in string 'hello, world' with content type 'text/plain',
   * {'hello': world'} with content type 'application/json' and a byte string for
   * 'application/octet-stream'.
   * @param contentType Upload file type
   * @param message The payload body.
   * @param options The options parameters.
   */
  binaryBodyWithThreeContentTypes(
    contentType: "text/plain",
    message: string,
    options?: BinaryBodyWithThreeContentTypes$textOptionalParams
  ): Promise<BinaryBodyWithThreeContentTypesResponse>;
  /**
   * Binary body with three content types. Pass in string 'hello, world' with content type 'text/plain',
   * {'hello': world'} with content type 'application/json' and a byte string for
   * 'application/octet-stream'.
   * @param args Includes all the parameters for this operation.
   */
  binaryBodyWithThreeContentTypes(
    ...args:
      | [
          ContentType1,
          coreRestPipeline.RequestBodyType,
          BinaryBodyWithThreeContentTypes$binaryOptionalParams?
        ]
      | [
          "text/plain",
          string,
          BinaryBodyWithThreeContentTypes$textOptionalParams?
        ]
  ): Promise<BinaryBodyWithThreeContentTypesResponse> {
    let operationSpec: coreClient.OperationSpec;
    let operationArguments: coreClient.OperationArguments;
    let options;
    if (
      args[0] === "application/json" ||
      args[0] === "application/octet-stream"
    ) {
      operationSpec = binaryBodyWithThreeContentTypes$binaryOperationSpec;
      operationArguments = {
        contentType: args[0],
        message: args[1],
        options: args[2]
      };
      options = args[2];
    } else if (args[0] === "text/plain") {
      operationSpec = binaryBodyWithThreeContentTypes$textOperationSpec;
      operationArguments = {
        contentType: args[0],
        message: args[1],
        options: args[2]
      };
      options = args[2];
    } else {
      throw new TypeError(
        `"contentType" must be a valid value but instead was "${args[0]}".`
      );
    }
    operationArguments.options = options || {};
    return this.sendOperationRequest(operationArguments, operationSpec);
  }

  /**
   * Body that's either text/plain or application/json
   * @param contentType Upload file type
   * @param message The payload body.
   * @param options The options parameters.
   */
  putTextAndJsonBody(
    contentType: "text/plain",
    message: string,
    options?: PutTextAndJsonBody$textOptionalParams
  ): Promise<PutTextAndJsonBodyResponse>;
  /**
   * Body that's either text/plain or application/json
   * @param contentType Body Parameter content-type
   * @param message The payload body.
   * @param options The options parameters.
   */
  putTextAndJsonBody(
    contentType: "application/json",
    message: string,
    options?: PutTextAndJsonBody$jsonOptionalParams
  ): Promise<PutTextAndJsonBodyResponse>;
  /**
   * Body that's either text/plain or application/json
   * @param args Includes all the parameters for this operation.
   */
  putTextAndJsonBody(
    ...args:
      | ["text/plain", string, PutTextAndJsonBody$textOptionalParams?]
      | ["application/json", string, PutTextAndJsonBody$jsonOptionalParams?]
  ): Promise<PutTextAndJsonBodyResponse> {
    let operationSpec: coreClient.OperationSpec;
    let operationArguments: coreClient.OperationArguments;
    let options;
    if (args[0] === "text/plain") {
      operationSpec = putTextAndJsonBody$textOperationSpec;
      operationArguments = {
        contentType: args[0],
        message: args[1],
        options: args[2]
      };
      options = args[2];
    } else if (args[0] === "application/json") {
      operationSpec = putTextAndJsonBody$jsonOperationSpec;
      operationArguments = {
        contentType: args[0],
        message: args[1],
        options: args[2]
      };
      options = args[2];
    } else {
      throw new TypeError(
        `"contentType" must be a valid value but instead was "${args[0]}".`
      );
    }
    operationArguments.options = options || {};
    return this.sendOperationRequest(operationArguments, operationSpec);
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const analyzeBody$binaryOperationSpec: coreClient.OperationSpec = {
  path: "/mediatypes/analyze",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: { type: { name: "String" } }
    }
  },
  requestBody: Parameters.input,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "binary",
  serializer
};
const analyzeBody$jsonOperationSpec: coreClient.OperationSpec = {
  path: "/mediatypes/analyze",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: { type: { name: "String" } }
    }
  },
  requestBody: Parameters.input1,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType1, Parameters.accept1],
  mediaType: "json",
  serializer
};
const analyzeBodyNoAcceptHeader$binaryOperationSpec: coreClient.OperationSpec = {
  path: "/mediatypes/analyzeNoAccept",
  httpMethod: "POST",
  responses: { 202: {}, default: {} },
  requestBody: Parameters.input,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  mediaType: "binary",
  serializer
};
const analyzeBodyNoAcceptHeader$jsonOperationSpec: coreClient.OperationSpec = {
  path: "/mediatypes/analyzeNoAccept",
  httpMethod: "POST",
  responses: { 202: {}, default: {} },
  requestBody: Parameters.input1,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType1],
  mediaType: "json",
  serializer
};
const contentTypeWithEncodingOperationSpec: coreClient.OperationSpec = {
  path: "/mediatypes/contentTypeWithEncoding",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: { type: { name: "String" } }
    }
  },
  requestBody: Parameters.input2,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType2, Parameters.accept2],
  mediaType: "text",
  serializer
};
const binaryBodyWithTwoContentTypesOperationSpec: coreClient.OperationSpec = {
  path: "/mediatypes/binaryBodyTwoContentTypes",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: { type: { name: "String" } }
    }
  },
  requestBody: Parameters.message,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType3, Parameters.accept3],
  mediaType: "binary",
  serializer
};
const binaryBodyWithThreeContentTypes$binaryOperationSpec: coreClient.OperationSpec = {
  path: "/mediatypes/binaryBodyThreeContentTypes",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: { type: { name: "String" } }
    }
  },
  requestBody: Parameters.message,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept3, Parameters.contentType4],
  mediaType: "binary",
  serializer
};
const binaryBodyWithThreeContentTypes$textOperationSpec: coreClient.OperationSpec = {
  path: "/mediatypes/binaryBodyThreeContentTypes",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: { type: { name: "String" } }
    }
  },
  requestBody: Parameters.message1,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType5, Parameters.accept4],
  mediaType: "text",
  serializer
};
const putTextAndJsonBody$textOperationSpec: coreClient.OperationSpec = {
  path: "/mediatypes/textAndJson",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: { type: { name: "String" } }
    }
  },
  requestBody: Parameters.message1,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType5, Parameters.accept4],
  mediaType: "text",
  serializer
};
const putTextAndJsonBody$jsonOperationSpec: coreClient.OperationSpec = {
  path: "/mediatypes/textAndJson",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: { type: { name: "String" } }
    }
  },
  requestBody: Parameters.message2,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType1, Parameters.accept5],
  mediaType: "json",
  serializer
};
