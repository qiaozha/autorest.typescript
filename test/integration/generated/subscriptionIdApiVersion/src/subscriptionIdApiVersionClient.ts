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
import { GroupImpl } from "./operations";
import { Group } from "./operationsInterfaces";
import { SubscriptionIdApiVersionClientOptionalParams } from "./models";

export class SubscriptionIdApiVersionClient extends coreClient.ServiceClient {
  $host: string;
  subscriptionId: string;
  apiVersion: string;

  /**
   * Initializes a new instance of the SubscriptionIdApiVersionClient class.
   * @param subscriptionId Subscription Id.
   * @param options The parameter options
   */
  constructor(
    subscriptionId: string,
    options?: SubscriptionIdApiVersionClientOptionalParams
  ) {
    if (subscriptionId === undefined) {
      throw new Error("'subscriptionId' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: SubscriptionIdApiVersionClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const packageDetails = `azsdk-js-subscriptionid-apiversion/1.0.0-preview1`;
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
    this.apiVersion = options.apiVersion || "2014-04-01-preview";
    this.group = new GroupImpl(this);
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

  group: Group;
}
