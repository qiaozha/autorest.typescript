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
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "./lroImpl";
import * as Parameters from "./models/parameters";
import {
  MediaTypesV3LROClientOptionalParams,
  SendOnDefault$binaryOptionalParams,
  SendOnDefault$textOptionalParams,
  Send$binaryOptionalParams,
  Send$textOptionalParams,
  SendResponse
} from "./models";

export class MediaTypesV3LROClient extends coreClient.ServiceClient {
  $host: string;

  /**
   * Initializes a new instance of the MediaTypesV3LROClient class.
   * @param $host server parameter
   * @param options The parameter options
   */
  constructor($host: string, options?: MediaTypesV3LROClientOptionalParams) {
    if ($host === undefined) {
      throw new Error("'$host' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: MediaTypesV3LROClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const packageDetails = `azsdk-js-media-types-v3-lro-client/1.0.0-preview1`;
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
      baseUri: options.endpoint ?? options.baseUri ?? "{$host}"
    };
    super(optionsWithDefaults);
    // Parameter assignments
    this.$host = $host;
    if (options.apiVersion) {
      this.customApiVersion(options.apiVersion);
    }
  }

  /**  A policy that sets the api-version (or equivalent) to reflect the library version. */
  private customApiVersion(apiVersion: string) {
    const apiVersionPolicy = {
      name: "replace api version",
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

  private getOperationOptions<TOptions extends coreClient.OperationOptions>(
    options: TOptions | undefined
  ): coreClient.OperationOptions {
    const operationOptions: coreClient.OperationOptions = options || {};
    return operationOptions;
  }

  /**
   * Send payload to Foo service.
   * @param contentType Upload file type
   * @param data
   * @param options The options parameters.
   */
  beginSendOnDefault(
    contentType: "application/octet-stream",
    data: coreRestPipeline.RequestBodyType,
    options?: SendOnDefault$binaryOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Send payload to Foo service.
   * @param contentType Upload file type
   * @param data simple string
   * @param options The options parameters.
   */
  beginSendOnDefault(
    contentType: "text/plain",
    data: string,
    options?: SendOnDefault$textOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Send payload to Foo service.
   * @param args Includes all the parameters for this operation.
   */
  async beginSendOnDefault(
    ...args:
      | [
          "application/octet-stream",
          coreRestPipeline.RequestBodyType,
          SendOnDefault$binaryOptionalParams?
        ]
      | ["text/plain", string, SendOnDefault$textOptionalParams?]
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    let operationSpec: coreClient.OperationSpec;
    let operationArguments: coreClient.OperationArguments;
    let options;
    if (args[0] === "application/octet-stream") {
      operationSpec = sendOnDefault$binaryOperationSpec;
      operationArguments = {
        contentType: args[0],
        data: args[1],
        options: args[2]
      };
      options = args[2];
    } else if (args[0] === "text/plain") {
      operationSpec = sendOnDefault$textOperationSpec;
      operationArguments = {
        contentType: args[0],
        data: args[1],
        options: args[2]
      };
      options = args[2];
    } else {
      throw new TypeError(
        `"contentType" must be a valid value but instead was "${args[0]}".`
      );
    }
    operationArguments.options = this.getOperationOptions(options);
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(sendOperation, operationArguments, operationSpec);
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Send payload to Foo service.
   * @param args Includes all the parameters for this operation.
   */
  async beginSendOnDefaultAndWait(
    ...args:
      | [
          "application/octet-stream",
          coreRestPipeline.RequestBodyType,
          SendOnDefault$binaryOptionalParams?
        ]
      | ["text/plain", string, SendOnDefault$textOptionalParams?]
  ): Promise<void> {
    if (args[0] === "application/octet-stream") {
      const poller = await this.beginSendOnDefault(...args);
      return poller.pollUntilDone();
    } else if (args[0] === "text/plain") {
      const poller = await this.beginSendOnDefault(...args);
      return poller.pollUntilDone();
    }
    throw new Error("Impossible case");
  }

  /**
   * Send payload to targetted thing in Foo service.
   * @param thing Target thing name
   * @param contentType Upload file type
   * @param data
   * @param options The options parameters.
   */
  send(
    thing: string,
    contentType: "application/octet-stream",
    data: coreRestPipeline.RequestBodyType,
    options?: Send$binaryOptionalParams
  ): Promise<SendResponse>;
  /**
   * Send payload to targetted thing in Foo service.
   * @param thing Target thing name
   * @param contentType Upload file type
   * @param data simple string
   * @param options The options parameters.
   */
  send(
    thing: string,
    contentType: "text/plain",
    data: string,
    options?: Send$textOptionalParams
  ): Promise<SendResponse>;
  /**
   * Send payload to targetted thing in Foo service.
   * @param args Includes all the parameters for this operation.
   */
  send(
    ...args:
      | [
          string,
          "application/octet-stream",
          coreRestPipeline.RequestBodyType,
          Send$binaryOptionalParams?
        ]
      | [string, "text/plain", string, Send$textOptionalParams?]
  ): Promise<SendResponse> {
    let operationSpec: coreClient.OperationSpec;
    let operationArguments: coreClient.OperationArguments;
    let options;
    if (args[1] === "application/octet-stream") {
      operationSpec = send$binaryOperationSpec;
      operationArguments = {
        thing: args[0],
        contentType: args[1],
        data: args[2],
        options: args[3]
      };
      options = args[3];
    } else if (args[1] === "text/plain") {
      operationSpec = send$textOperationSpec;
      operationArguments = {
        thing: args[0],
        contentType: args[1],
        data: args[2],
        options: args[3]
      };
      options = args[3];
    } else {
      throw new TypeError(
        `"contentType" must be a valid value but instead was "${args[1]}".`
      );
    }
    operationArguments.options = options || {};
    return this.sendOperationRequest(operationArguments, operationSpec);
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer({}, /* isXml */ false);

const sendOnDefault$binaryOperationSpec: coreClient.OperationSpec = {
  path: "/foo/api/v1",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  requestBody: Parameters.data,
  queryParameters: [Parameters.excluded],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "binary",
  serializer
};
const sendOnDefault$textOperationSpec: coreClient.OperationSpec = {
  path: "/foo/api/v1",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  requestBody: Parameters.data1,
  queryParameters: [Parameters.excluded],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType1, Parameters.accept1],
  mediaType: "text",
  serializer
};
const send$binaryOperationSpec: coreClient.OperationSpec = {
  path: "/foo/api/v1/things/{thing}",
  httpMethod: "POST",
  responses: {
    204: {},
    400: {
      bodyMapper: { type: { name: "String" } }
    }
  },
  requestBody: Parameters.data,
  queryParameters: [Parameters.excluded],
  urlParameters: [Parameters.$host, Parameters.thing],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "binary",
  serializer
};
const send$textOperationSpec: coreClient.OperationSpec = {
  path: "/foo/api/v1/things/{thing}",
  httpMethod: "POST",
  responses: {
    204: {},
    400: {
      bodyMapper: { type: { name: "String" } }
    }
  },
  requestBody: Parameters.data1,
  queryParameters: [Parameters.excluded],
  urlParameters: [Parameters.$host, Parameters.thing],
  headerParameters: [Parameters.contentType1, Parameters.accept1],
  mediaType: "text",
  serializer
};
