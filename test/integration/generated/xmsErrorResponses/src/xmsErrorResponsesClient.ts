/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PetImpl } from "./operations";
import { Pet } from "./operationsInterfaces";
import { XmsErrorResponsesClientOptionalParams } from "./models";

export class XmsErrorResponsesClient extends coreClient.ServiceClient {
  Host: string;

  /**
   * Initializes a new instance of the XmsErrorResponsesClient class.
   * @param options The parameter options
   */
  constructor(options?: XmsErrorResponsesClientOptionalParams) {
    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: XmsErrorResponsesClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const packageDetails = `azsdk-js-xms-error-responses/1.0.0-preview1`;
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
      baseUri: options.endpoint || "http://localhost"
    };
    super(optionsWithDefaults);

    // Assigning values to Constant parameters
    this.Host = options.Host || "http://localhost";
    this.pet = new PetImpl(this);
  }

  pet: Pet;
}
