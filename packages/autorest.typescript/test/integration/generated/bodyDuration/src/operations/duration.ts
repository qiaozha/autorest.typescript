/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Duration } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { BodyDurationClient } from "../bodyDurationClient";
import {
  DurationGetNullOptionalParams,
  DurationGetNullResponse,
  DurationPutPositiveDurationOptionalParams,
  DurationGetPositiveDurationOptionalParams,
  DurationGetPositiveDurationResponse,
  DurationGetInvalidOptionalParams,
  DurationGetInvalidResponse
} from "../models";

/** Class containing Duration operations. */
export class DurationImpl implements Duration {
  private readonly client: BodyDurationClient;

  /**
   * Initialize a new instance of the class Duration class.
   * @param client Reference to the service client
   */
  constructor(client: BodyDurationClient) {
    this.client = client;
  }

  /**
   * Get null duration value
   * @param options The options parameters.
   */
  getNull(
    options?: DurationGetNullOptionalParams
  ): Promise<DurationGetNullResponse> {
    return this.client.sendOperationRequest({ options }, getNullOperationSpec);
  }

  /**
   * Put a positive duration value
   * @param durationBody duration body
   * @param options The options parameters.
   */
  putPositiveDuration(
    durationBody: string,
    options?: DurationPutPositiveDurationOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { durationBody, options },
      putPositiveDurationOperationSpec
    );
  }

  /**
   * Get a positive duration value
   * @param options The options parameters.
   */
  getPositiveDuration(
    options?: DurationGetPositiveDurationOptionalParams
  ): Promise<DurationGetPositiveDurationResponse> {
    return this.client.sendOperationRequest(
      { options },
      getPositiveDurationOperationSpec
    );
  }

  /**
   * Get an invalid duration value
   * @param options The options parameters.
   */
  getInvalid(
    options?: DurationGetInvalidOptionalParams
  ): Promise<DurationGetInvalidResponse> {
    return this.client.sendOperationRequest(
      { options },
      getInvalidOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getNullOperationSpec: coreClient.OperationSpec = {
  path: "/duration/null",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "TimeSpan" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putPositiveDurationOperationSpec: coreClient.OperationSpec = {
  path: "/duration/positiveduration",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.durationBody,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getPositiveDurationOperationSpec: coreClient.OperationSpec = {
  path: "/duration/positiveduration",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "TimeSpan" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getInvalidOperationSpec: coreClient.OperationSpec = {
  path: "/duration/invalid",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "TimeSpan" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};