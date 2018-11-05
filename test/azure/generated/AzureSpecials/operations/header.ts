/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/headerMappers";
import * as Parameters from "../models/parameters";
import { AutoRestAzureSpecialParametersTestClientContext } from "../autoRestAzureSpecialParametersTestClientContext";

/** Class representing a Header. */
export class Header {
  private readonly client: AutoRestAzureSpecialParametersTestClientContext;

  /**
   * Create a Header.
   * @param {AutoRestAzureSpecialParametersTestClientContext} client Reference to the service client.
   */
  constructor(client: AutoRestAzureSpecialParametersTestClientContext) {
    this.client = client;
  }

  /**
   * Send foo-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 in the header of the request
   * @param fooClientRequestId The fooRequestId
   * @param [options] The optional parameters
   * @returns Promise<Models.HeaderCustomNamedRequestIdResponse>
   */
  customNamedRequestId(fooClientRequestId: string, options?: msRest.RequestOptionsBase): Promise<Models.HeaderCustomNamedRequestIdResponse>;
  /**
   * @param fooClientRequestId The fooRequestId
   * @param callback The callback
   */
  customNamedRequestId(fooClientRequestId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param fooClientRequestId The fooRequestId
   * @param options The optional parameters
   * @param callback The callback
   */
  customNamedRequestId(fooClientRequestId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  customNamedRequestId(fooClientRequestId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.HeaderCustomNamedRequestIdResponse> {
    return this.client.sendOperationRequest(
      {
        fooClientRequestId,
        options
      },
      customNamedRequestIdOperationSpec,
      callback) as Promise<Models.HeaderCustomNamedRequestIdResponse>;
  }

  /**
   * Send foo-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 in the header of the request,
   * via a parameter group
   * @param headerCustomNamedRequestIdParamGroupingParameters Additional parameters for the operation
   * @param [options] The optional parameters
   * @returns Promise<Models.HeaderCustomNamedRequestIdParamGroupingResponse>
   */
  customNamedRequestIdParamGrouping(headerCustomNamedRequestIdParamGroupingParameters: Models.HeaderCustomNamedRequestIdParamGroupingParameters, options?: msRest.RequestOptionsBase): Promise<Models.HeaderCustomNamedRequestIdParamGroupingResponse>;
  /**
   * @param headerCustomNamedRequestIdParamGroupingParameters Additional parameters for the operation
   * @param callback The callback
   */
  customNamedRequestIdParamGrouping(headerCustomNamedRequestIdParamGroupingParameters: Models.HeaderCustomNamedRequestIdParamGroupingParameters, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param headerCustomNamedRequestIdParamGroupingParameters Additional parameters for the operation
   * @param options The optional parameters
   * @param callback The callback
   */
  customNamedRequestIdParamGrouping(headerCustomNamedRequestIdParamGroupingParameters: Models.HeaderCustomNamedRequestIdParamGroupingParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  customNamedRequestIdParamGrouping(headerCustomNamedRequestIdParamGroupingParameters: Models.HeaderCustomNamedRequestIdParamGroupingParameters, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.HeaderCustomNamedRequestIdParamGroupingResponse> {
    return this.client.sendOperationRequest(
      {
        headerCustomNamedRequestIdParamGroupingParameters,
        options
      },
      customNamedRequestIdParamGroupingOperationSpec,
      callback) as Promise<Models.HeaderCustomNamedRequestIdParamGroupingResponse>;
  }

  /**
   * Send foo-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 in the header of the request
   * @param fooClientRequestId The fooRequestId
   * @param [options] The optional parameters
   * @returns Promise<Models.HeaderCustomNamedRequestIdHeadResponse>
   */
  customNamedRequestIdHead(fooClientRequestId: string, options?: msRest.RequestOptionsBase): Promise<Models.HeaderCustomNamedRequestIdHeadResponse>;
  /**
   * @param fooClientRequestId The fooRequestId
   * @param callback The callback
   */
  customNamedRequestIdHead(fooClientRequestId: string, callback: msRest.ServiceCallback<boolean>): void;
  /**
   * @param fooClientRequestId The fooRequestId
   * @param options The optional parameters
   * @param callback The callback
   */
  customNamedRequestIdHead(fooClientRequestId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<boolean>): void;
  customNamedRequestIdHead(fooClientRequestId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<boolean>, callback?: msRest.ServiceCallback<boolean>): Promise<Models.HeaderCustomNamedRequestIdHeadResponse> {
    return this.client.sendOperationRequest(
      {
        fooClientRequestId,
        options
      },
      customNamedRequestIdHeadOperationSpec,
      callback) as Promise<Models.HeaderCustomNamedRequestIdHeadResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const customNamedRequestIdOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "azurespecials/customNamedRequestId",
  headerParameters: [
    Parameters.fooClientRequestId0,
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      headersMapper: Mappers.HeaderCustomNamedRequestIdHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const customNamedRequestIdParamGroupingOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "azurespecials/customNamedRequestIdParamGrouping",
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.fooClientRequestId1
  ],
  responses: {
    200: {
      headersMapper: Mappers.HeaderCustomNamedRequestIdParamGroupingHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const customNamedRequestIdHeadOperationSpec: msRest.OperationSpec = {
  httpMethod: "HEAD",
  path: "azurespecials/customNamedRequestIdHead",
  headerParameters: [
    Parameters.fooClientRequestId0,
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      headersMapper: Mappers.HeaderCustomNamedRequestIdHeadHeaders
    },
    404: {
      headersMapper: Mappers.HeaderCustomNamedRequestIdHeadHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
