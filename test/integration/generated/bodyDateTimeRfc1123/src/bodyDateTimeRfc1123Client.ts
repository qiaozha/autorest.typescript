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
import { Datetimerfc1123Impl } from "./operations";
import { Datetimerfc1123 } from "./operationsInterfaces";
import { BodyDateTimeRfc1123ClientOptionalParams } from "./models";

export class BodyDateTimeRfc1123Client extends coreClient.ServiceClient {
  $host: string;

  /**
   * Initializes a new instance of the BodyDateTimeRfc1123Client class.
   * @param options The parameter options
   */
  constructor(options?: BodyDateTimeRfc1123ClientOptionalParams) {
    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: BodyDateTimeRfc1123ClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const packageDetails = `azsdk-js-body-datetime-rfc1123/1.0.0-preview1`;
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
    this.datetimerfc1123 = new Datetimerfc1123Impl(this);
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

  datetimerfc1123: Datetimerfc1123;
}
