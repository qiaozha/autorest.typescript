/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Float } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Parameters from "../models/parameters";
import { NonStringEnumClient } from "../nonStringEnumClient";
import {
  FloatPutOptionalParams,
  FloatPutResponse,
  FloatGetOptionalParams,
  FloatGetResponse
} from "../models";

/** Class containing Float operations. */
export class FloatImpl implements Float {
  private readonly client: NonStringEnumClient;

  /**
   * Initialize a new instance of the class Float class.
   * @param client Reference to the service client
   */
  constructor(client: NonStringEnumClient) {
    this.client = client;
  }

  /**
   * Put a float enum
   * @param options The options parameters.
   */
  put(options?: FloatPutOptionalParams): Promise<FloatPutResponse> {
    return this.client.sendOperationRequest({ options }, putOperationSpec);
  }

  /**
   * Get a float enum
   * @param options The options parameters.
   */
  get(options?: FloatGetOptionalParams): Promise<FloatGetResponse> {
    return this.client.sendOperationRequest({ options }, getOperationSpec);
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer({}, /* isXml */ false);

const putOperationSpec: coreClient.OperationSpec = {
  path: "/nonStringEnums/float/put",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: { type: { name: "String" } }
    }
  },
  requestBody: Parameters.input1,
  urlParameters: [Parameters.Host],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/nonStringEnums/float/get",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Number" } }
    }
  },
  urlParameters: [Parameters.Host],
  headerParameters: [Parameters.accept],
  serializer
};
