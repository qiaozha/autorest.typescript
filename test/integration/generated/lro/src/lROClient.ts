/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import {
  LROsImpl,
  LRORetrysImpl,
  LrosaDsImpl,
  LROsCustomHeaderImpl
} from "./operations";
import {
  LROs,
  LRORetrys,
  LrosaDs,
  LROsCustomHeader
} from "./operationsInterfaces";
import { LROClientOptionalParams } from "./models";

export class LROClient extends coreClient.ServiceClient {
  $host: string;

  /**
   * Initializes a new instance of the LROClient class.
   * @param options The parameter options
   */
  constructor(options?: LROClientOptionalParams) {
    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: LROClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const packageDetails = `azsdk-js-lro/1.0.0-preview1`;
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
    this.lROs = new LROsImpl(this);
    this.lRORetrys = new LRORetrysImpl(this);
    this.lrosaDs = new LrosaDsImpl(this);
    this.lROsCustomHeader = new LROsCustomHeaderImpl(this);
  }

  lROs: LROs;
  lRORetrys: LRORetrys;
  lrosaDs: LrosaDs;
  lROsCustomHeader: LROsCustomHeader;
}
