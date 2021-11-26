/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { GET } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Parameters from "../models/parameters";
import { UrlClient } from "../urlClient";
import { GETUrlOptionalParams, GETUrlResponse } from "../models";

/** Class containing GET operations. */
export class GETImpl implements GET {
  private readonly client: UrlClient;

  /**
   * Initialize a new instance of the class GET class.
   * @param client Reference to the service client
   */
  constructor(client: UrlClient) {
    this.client = client;
  }

  /**
   * @param testUrl
   * @param options The options parameters.
   */
  url(
    testUrl: string,
    options?: GETUrlOptionalParams
  ): Promise<GETUrlResponse> {
    return this.client.sendOperationRequest(
      { testUrl, options },
      urlOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer({}, /* isXml */ false);

const urlOperationSpec: coreClient.OperationSpec = {
  path: "/Url",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "String" } }
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.testUrl],
  serializer
};