/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { GETUrlOptionalParams, GETUrlResponse } from "../models";

/** Interface representing a GET. */
export interface GET {
  /**
   * @param testUrl
   * @param options The options parameters.
   */
  url(testUrl: string, options?: GETUrlOptionalParams): Promise<GETUrlResponse>;
}