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
import * as Mappers from "../models/byteModelMappers";
import { AutoRestSwaggerBATByteServiceContext } from "../autoRestSwaggerBATByteServiceContext";

/** Class representing a ByteModel. */
export class ByteModel {
  private readonly client: AutoRestSwaggerBATByteServiceContext;

  /**
   * Create a ByteModel.
   * @param {AutoRestSwaggerBATByteServiceContext} client Reference to the service client.
   */
  constructor(client: AutoRestSwaggerBATByteServiceContext) {
    this.client = client;
  }

  /**
   * Get null byte value
   * @param [options] The optional parameters
   * @returns Promise<Models.ByteModelGetNullResponse>
   */
  getNull(options?: msRest.RequestOptionsBase): Promise<Models.ByteModelGetNullResponse>;
  /**
   * @param callback The callback
   */
  getNull(callback: msRest.ServiceCallback<Uint8Array>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getNull(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Uint8Array>): void;
  getNull(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Uint8Array>, callback?: msRest.ServiceCallback<Uint8Array>): Promise<Models.ByteModelGetNullResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getNullOperationSpec,
      callback) as Promise<Models.ByteModelGetNullResponse>;
  }

  /**
   * Get empty byte value ''
   * @param [options] The optional parameters
   * @returns Promise<Models.ByteModelGetEmptyResponse>
   */
  getEmpty(options?: msRest.RequestOptionsBase): Promise<Models.ByteModelGetEmptyResponse>;
  /**
   * @param callback The callback
   */
  getEmpty(callback: msRest.ServiceCallback<Uint8Array>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getEmpty(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Uint8Array>): void;
  getEmpty(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Uint8Array>, callback?: msRest.ServiceCallback<Uint8Array>): Promise<Models.ByteModelGetEmptyResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getEmptyOperationSpec,
      callback) as Promise<Models.ByteModelGetEmptyResponse>;
  }

  /**
   * Get non-ascii byte string hex(FF FE FD FC FB FA F9 F8 F7 F6)
   * @param [options] The optional parameters
   * @returns Promise<Models.ByteModelGetNonAsciiResponse>
   */
  getNonAscii(options?: msRest.RequestOptionsBase): Promise<Models.ByteModelGetNonAsciiResponse>;
  /**
   * @param callback The callback
   */
  getNonAscii(callback: msRest.ServiceCallback<Uint8Array>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getNonAscii(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Uint8Array>): void;
  getNonAscii(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Uint8Array>, callback?: msRest.ServiceCallback<Uint8Array>): Promise<Models.ByteModelGetNonAsciiResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getNonAsciiOperationSpec,
      callback) as Promise<Models.ByteModelGetNonAsciiResponse>;
  }

  /**
   * Put non-ascii byte string hex(FF FE FD FC FB FA F9 F8 F7 F6)
   * @param byteBody Base64-encoded non-ascii byte string hex(FF FE FD FC FB FA F9 F8 F7 F6)
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  putNonAscii(byteBody: Uint8Array, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param byteBody Base64-encoded non-ascii byte string hex(FF FE FD FC FB FA F9 F8 F7 F6)
   * @param callback The callback
   */
  putNonAscii(byteBody: Uint8Array, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param byteBody Base64-encoded non-ascii byte string hex(FF FE FD FC FB FA F9 F8 F7 F6)
   * @param options The optional parameters
   * @param callback The callback
   */
  putNonAscii(byteBody: Uint8Array, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  putNonAscii(byteBody: Uint8Array, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        byteBody,
        options
      },
      putNonAsciiOperationSpec,
      callback);
  }

  /**
   * Get invalid byte value ':::SWAGGER::::'
   * @param [options] The optional parameters
   * @returns Promise<Models.ByteModelGetInvalidResponse>
   */
  getInvalid(options?: msRest.RequestOptionsBase): Promise<Models.ByteModelGetInvalidResponse>;
  /**
   * @param callback The callback
   */
  getInvalid(callback: msRest.ServiceCallback<Uint8Array>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getInvalid(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Uint8Array>): void;
  getInvalid(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Uint8Array>, callback?: msRest.ServiceCallback<Uint8Array>): Promise<Models.ByteModelGetInvalidResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getInvalidOperationSpec,
      callback) as Promise<Models.ByteModelGetInvalidResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getNullOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "byte/null",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "ByteArray"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getEmptyOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "byte/empty",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "ByteArray"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getNonAsciiOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "byte/nonAscii",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "ByteArray"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putNonAsciiOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "byte/nonAscii",
  requestBody: {
    parameterPath: "byteBody",
    mapper: {
      required: true,
      serializedName: "byteBody",
      type: {
        name: "ByteArray"
      }
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getInvalidOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "byte/invalid",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "ByteArray"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
