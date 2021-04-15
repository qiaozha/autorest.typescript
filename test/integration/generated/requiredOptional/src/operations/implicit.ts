/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Implicit } from "../operationsInterfaces";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { RequiredOptionalClientContext } from "../requiredOptionalClientContext";
import {
  ImplicitPutOptionalQueryOptionalParams,
  ImplicitPutOptionalHeaderOptionalParams,
  ImplicitPutOptionalBodyOptionalParams,
  ImplicitPutOptionalBinaryBodyOptionalParams
} from "../models";

/** Class representing a Implicit. */
export class ImplicitImpl implements Implicit {
  private readonly client: RequiredOptionalClientContext;

  /**
   * Initialize a new instance of the class Implicit class.
   * @param client Reference to the service client
   */
  constructor(client: RequiredOptionalClientContext) {
    this.client = client;
  }

  /**
   * Test implicitly required path parameter
   * @param pathParameter
   * @param options The options parameters.
   */
  getRequiredPath(
    pathParameter: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      pathParameter,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getRequiredPathOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Test implicitly optional query parameter
   * @param options The options parameters.
   */
  putOptionalQuery(
    options?: ImplicitPutOptionalQueryOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      putOptionalQueryOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Test implicitly optional header parameter
   * @param options The options parameters.
   */
  putOptionalHeader(
    options?: ImplicitPutOptionalHeaderOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      putOptionalHeaderOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Test implicitly optional body parameter
   * @param options The options parameters.
   */
  putOptionalBody(
    options?: ImplicitPutOptionalBodyOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      putOptionalBodyOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Test implicitly optional body parameter
   * @param options The options parameters.
   */
  putOptionalBinaryBody(
    options?: ImplicitPutOptionalBinaryBodyOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      putOptionalBinaryBodyOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Test implicitly required path parameter
   * @param options The options parameters.
   */
  getRequiredGlobalPath(
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getRequiredGlobalPathOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Test implicitly required query parameter
   * @param options The options parameters.
   */
  getRequiredGlobalQuery(
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getRequiredGlobalQueryOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Test implicitly optional query parameter
   * @param options The options parameters.
   */
  getOptionalGlobalQuery(
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getOptionalGlobalQueryOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const getRequiredPathOperationSpec: coreHttp.OperationSpec = {
  path: "/reqopt/implicit/required/path/{pathParameter}",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.pathParameter],
  headerParameters: [Parameters.accept],
  serializer
};
const putOptionalQueryOperationSpec: coreHttp.OperationSpec = {
  path: "/reqopt/implicit/optional/query",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.queryParameter],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putOptionalHeaderOperationSpec: coreHttp.OperationSpec = {
  path: "/reqopt/implicit/optional/header",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.queryParameter1],
  serializer
};
const putOptionalBodyOperationSpec: coreHttp.OperationSpec = {
  path: "/reqopt/implicit/optional/body",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.bodyParameter,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const putOptionalBinaryBodyOperationSpec: coreHttp.OperationSpec = {
  path: "/reqopt/implicit/optional/binary-body",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.bodyParameter1,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType1, Parameters.accept1],
  mediaType: "binary",
  serializer
};
const getRequiredGlobalPathOperationSpec: coreHttp.OperationSpec = {
  path: "/reqopt/global/required/path/{required-global-path}",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.requiredGlobalPath],
  headerParameters: [Parameters.accept],
  serializer
};
const getRequiredGlobalQueryOperationSpec: coreHttp.OperationSpec = {
  path: "/reqopt/global/required/query",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.requiredGlobalQuery],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getOptionalGlobalQueryOperationSpec: coreHttp.OperationSpec = {
  path: "/reqopt/global/optional/query",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.optionalGlobalQuery],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
