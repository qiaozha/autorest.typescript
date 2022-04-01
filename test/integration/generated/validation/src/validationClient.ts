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
  ValidationClientOptionalParams,
  ValidationOfMethodParametersOptionalParams,
  ValidationOfMethodParametersResponse,
  ValidationOfBodyOptionalParams,
  ValidationOfBodyResponse,
  GetWithConstantInPathOptionalParams,
  PostWithConstantInBodyOptionalParams,
  PostWithConstantInBodyResponse
} from "./models";

export class ValidationClient extends coreClient.ServiceClient {
  $host: string;
  subscriptionId: string;
  apiVersion: string;

  /**
   * Initializes a new instance of the ValidationClient class.
   * @param subscriptionId Subscription ID.
   * @param options The parameter options
   */
  constructor(
    subscriptionId: string,
    options?: ValidationClientOptionalParams
  ) {
    if (subscriptionId === undefined) {
      throw new Error("'subscriptionId' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: ValidationClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const packageDetails = `azsdk-js-validation/1.0.0-preview1`;
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
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "http://localhost:3000";
    this.apiVersion = options.apiVersion || "1.0.0";
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
   * Validates input parameters on the method. See swagger for details.
   * @param resourceGroupName Required string between 3 and 10 chars with pattern [a-zA-Z0-9]+.
   * @param id Required int multiple of 10 from 100 to 1000.
   * @param options The options parameters.
   */
  validationOfMethodParameters(
    resourceGroupName: string,
    id: number,
    options?: ValidationOfMethodParametersOptionalParams
  ): Promise<ValidationOfMethodParametersResponse> {
    return this.sendOperationRequest(
      { resourceGroupName, id, options },
      validationOfMethodParametersOperationSpec
    );
  }

  /**
   * Validates body parameters on the method. See swagger for details.
   * @param resourceGroupName Required string between 3 and 10 chars with pattern [a-zA-Z0-9]+.
   * @param id Required int multiple of 10 from 100 to 1000.
   * @param options The options parameters.
   */
  validationOfBody(
    resourceGroupName: string,
    id: number,
    options?: ValidationOfBodyOptionalParams
  ): Promise<ValidationOfBodyResponse> {
    return this.sendOperationRequest(
      { resourceGroupName, id, options },
      validationOfBodyOperationSpec
    );
  }

  /** @param options The options parameters. */
  getWithConstantInPath(
    options?: GetWithConstantInPathOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { options },
      getWithConstantInPathOperationSpec
    );
  }

  /** @param options The options parameters. */
  postWithConstantInBody(
    options?: PostWithConstantInBodyOptionalParams
  ): Promise<PostWithConstantInBodyResponse> {
    return this.sendOperationRequest(
      { options },
      postWithConstantInBodyOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const validationOfMethodParametersOperationSpec: coreClient.OperationSpec = {
  path: "/fakepath/{subscriptionId}/{resourceGroupName}/{id}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Product
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.id
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const validationOfBodyOperationSpec: coreClient.OperationSpec = {
  path: "/fakepath/{subscriptionId}/{resourceGroupName}/{id}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Product
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.body,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.id,
    Parameters.resourceGroupName1
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getWithConstantInPathOperationSpec: coreClient.OperationSpec = {
  path: "/validation/constantsInPath/{constantParam}/value",
  httpMethod: "GET",
  responses: { 200: {} },
  urlParameters: [Parameters.$host, Parameters.constantParam],
  serializer
};
const postWithConstantInBodyOperationSpec: coreClient.OperationSpec = {
  path: "/validation/constantsInPath/{constantParam}/value",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.Product
    }
  },
  requestBody: Parameters.body,
  urlParameters: [Parameters.$host, Parameters.constantParam],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
