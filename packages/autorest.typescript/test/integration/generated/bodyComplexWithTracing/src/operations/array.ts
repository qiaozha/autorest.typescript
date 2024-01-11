/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { tracingClient } from "../tracing";
import { Array } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { BodyComplexWithTracing } from "../bodyComplexWithTracing";
import {
  ArrayGetValidOptionalParams,
  ArrayGetValidResponse,
  ArrayWrapper,
  ArrayPutValidOptionalParams,
  ArrayGetEmptyOptionalParams,
  ArrayGetEmptyResponse,
  ArrayPutEmptyOptionalParams,
  ArrayGetNotProvidedOptionalParams,
  ArrayGetNotProvidedResponse,
} from "../models";

/** Class containing Array operations. */
export class ArrayImpl implements Array {
  private readonly client: BodyComplexWithTracing;

  /**
   * Initialize a new instance of the class Array class.
   * @param client Reference to the service client
   */
  constructor(client: BodyComplexWithTracing) {
    this.client = client;
  }

  /**
   * Get complex types with array property
   * @param options The options parameters.
   */
  async getValid(
    options?: ArrayGetValidOptionalParams,
  ): Promise<ArrayGetValidResponse> {
    return tracingClient.withSpan(
      "BodyComplexWithTracing.getValid",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { options },
          getValidOperationSpec,
        ) as Promise<ArrayGetValidResponse>;
      },
    );
  }

  /**
   * Put complex types with array property
   * @param complexBody Please put an array with 4 items: "1, 2, 3, 4", "", null, "&S#$(*Y", "The quick
   *                    brown fox jumps over the lazy dog"
   * @param options The options parameters.
   */
  async putValid(
    complexBody: ArrayWrapper,
    options?: ArrayPutValidOptionalParams,
  ): Promise<void> {
    return tracingClient.withSpan(
      "BodyComplexWithTracing.putValid",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { complexBody, options },
          putValidOperationSpec,
        ) as Promise<void>;
      },
    );
  }

  /**
   * Get complex types with array property which is empty
   * @param options The options parameters.
   */
  async getEmpty(
    options?: ArrayGetEmptyOptionalParams,
  ): Promise<ArrayGetEmptyResponse> {
    return tracingClient.withSpan(
      "BodyComplexWithTracing.getEmpty",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { options },
          getEmptyOperationSpec,
        ) as Promise<ArrayGetEmptyResponse>;
      },
    );
  }

  /**
   * Put complex types with array property which is empty
   * @param complexBody Please put an empty array
   * @param options The options parameters.
   */
  async putEmpty(
    complexBody: ArrayWrapper,
    options?: ArrayPutEmptyOptionalParams,
  ): Promise<void> {
    return tracingClient.withSpan(
      "BodyComplexWithTracing.putEmpty",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { complexBody, options },
          putEmptyOperationSpec,
        ) as Promise<void>;
      },
    );
  }

  /**
   * Get complex types with array property while server doesn't provide a response payload
   * @param options The options parameters.
   */
  async getNotProvided(
    options?: ArrayGetNotProvidedOptionalParams,
  ): Promise<ArrayGetNotProvidedResponse> {
    return tracingClient.withSpan(
      "BodyComplexWithTracing.getNotProvided",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { options },
          getNotProvidedOperationSpec,
        ) as Promise<ArrayGetNotProvidedResponse>;
      },
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getValidOperationSpec: coreClient.OperationSpec = {
  path: "/complex/array/valid",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ArrayWrapper,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer,
};
const putValidOperationSpec: coreClient.OperationSpec = {
  path: "/complex/array/valid",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  requestBody: Parameters.complexBody12,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getEmptyOperationSpec: coreClient.OperationSpec = {
  path: "/complex/array/empty",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ArrayWrapper,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer,
};
const putEmptyOperationSpec: coreClient.OperationSpec = {
  path: "/complex/array/empty",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  requestBody: Parameters.complexBody12,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getNotProvidedOperationSpec: coreClient.OperationSpec = {
  path: "/complex/array/notprovided",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ArrayWrapper,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer,
};
