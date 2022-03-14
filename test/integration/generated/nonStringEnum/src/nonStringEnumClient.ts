/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import { IntImpl, FloatImpl } from "./operations";
import { Int, Float } from "./operationsInterfaces";
import { NonStringEnumClientOptionalParams } from "./models";

export class NonStringEnumClient extends coreClient.ServiceClient {
  $host: string;

  /**
   * Initializes a new instance of the NonStringEnumClient class.
   * @param options The parameter options
   */
  constructor(options?: NonStringEnumClientOptionalParams) {
    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: NonStringEnumClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const packageDetails = `azsdk-js-non-string-num/1.0.0-preview1`;
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
    this.int = new IntImpl(this);
    this.float = new FloatImpl(this);
  }

  int: Int;
  float: Float;
}
