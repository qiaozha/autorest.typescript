/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  HttpRetryHead408OptionalParams,
  HttpRetryPut500OptionalParams,
  HttpRetryPatch500OptionalParams,
  HttpRetryGet502OptionalParams,
  HttpRetryOptions502OptionalParams,
  HttpRetryOptions502Response,
  HttpRetryPost503OptionalParams,
  HttpRetryDelete503OptionalParams,
  HttpRetryPut504OptionalParams,
  HttpRetryPatch504OptionalParams,
} from "../models";

/** Interface representing a HttpRetry. */
export interface HttpRetry {
  /**
   * Return 408 status code, then 200 after retry
   * @param options The options parameters.
   */
  head408(options?: HttpRetryHead408OptionalParams): Promise<void>;
  /**
   * Return 500 status code, then 200 after retry
   * @param options The options parameters.
   */
  put500(options?: HttpRetryPut500OptionalParams): Promise<void>;
  /**
   * Return 500 status code, then 200 after retry
   * @param options The options parameters.
   */
  patch500(options?: HttpRetryPatch500OptionalParams): Promise<void>;
  /**
   * Return 502 status code, then 200 after retry
   * @param options The options parameters.
   */
  get502(options?: HttpRetryGet502OptionalParams): Promise<void>;
  /**
   * Return 502 status code, then 200 after retry
   * @param options The options parameters.
   */
  options502(
    options?: HttpRetryOptions502OptionalParams,
  ): Promise<HttpRetryOptions502Response>;
  /**
   * Return 503 status code, then 200 after retry
   * @param options The options parameters.
   */
  post503(options?: HttpRetryPost503OptionalParams): Promise<void>;
  /**
   * Return 503 status code, then 200 after retry
   * @param options The options parameters.
   */
  delete503(options?: HttpRetryDelete503OptionalParams): Promise<void>;
  /**
   * Return 504 status code, then 200 after retry
   * @param options The options parameters.
   */
  put504(options?: HttpRetryPut504OptionalParams): Promise<void>;
  /**
   * Return 504 status code, then 200 after retry
   * @param options The options parameters.
   */
  patch504(options?: HttpRetryPatch504OptionalParams): Promise<void>;
}
