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
import { PathsImpl, QueriesImpl, PathItemsImpl } from "./operations";
import { Paths, Queries, PathItems } from "./operationsInterfaces";
import { UrlClientOptionalParams } from "./models";

export class UrlClient extends coreClient.ServiceClient {
  $host: string;
  globalStringPath: string;
  globalStringQuery?: string;

  /**
   * Initializes a new instance of the UrlClient class.
   * @param globalStringPath A string value 'globalItemStringPath' that appears in the path
   * @param options The parameter options
   */
  constructor(globalStringPath: string, options?: UrlClientOptionalParams) {
    if (globalStringPath === undefined) {
      throw new Error("'globalStringPath' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: UrlClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const packageDetails = `azsdk-js-url/1.0.0-preview1`;
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
    this.globalStringPath = globalStringPath;

    // Assigning values to Constant parameters
    this.$host = options.$host || "http://localhost:3000";
    this.paths = new PathsImpl(this);
    this.queries = new QueriesImpl(this);
    this.pathItems = new PathItemsImpl(this);
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

  paths: Paths;
  queries: Queries;
  pathItems: PathItems;
}
