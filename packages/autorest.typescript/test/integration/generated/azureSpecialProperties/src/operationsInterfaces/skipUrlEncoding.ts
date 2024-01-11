/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  SkipUrlEncodingGetMethodPathValidOptionalParams,
  SkipUrlEncodingGetPathValidOptionalParams,
  SkipUrlEncodingGetSwaggerPathValidOptionalParams,
  SkipUrlEncodingGetMethodQueryValidOptionalParams,
  SkipUrlEncodingGetMethodQueryNullOptionalParams,
  SkipUrlEncodingGetPathQueryValidOptionalParams,
  SkipUrlEncodingGetSwaggerQueryValidOptionalParams,
} from "../models";

/** Interface representing a SkipUrlEncoding. */
export interface SkipUrlEncoding {
  /**
   * Get method with unencoded path parameter with value 'path1/path2/path3'
   * @param unencodedPathParam Unencoded path parameter with value 'path1/path2/path3'
   * @param options The options parameters.
   */
  getMethodPathValid(
    unencodedPathParam: string,
    options?: SkipUrlEncodingGetMethodPathValidOptionalParams,
  ): Promise<void>;
  /**
   * Get method with unencoded path parameter with value 'path1/path2/path3'
   * @param unencodedPathParam Unencoded path parameter with value 'path1/path2/path3'
   * @param options The options parameters.
   */
  getPathValid(
    unencodedPathParam: string,
    options?: SkipUrlEncodingGetPathValidOptionalParams,
  ): Promise<void>;
  /**
   * Get method with unencoded path parameter with value 'path1/path2/path3'
   * @param options The options parameters.
   */
  getSwaggerPathValid(
    options?: SkipUrlEncodingGetSwaggerPathValidOptionalParams,
  ): Promise<void>;
  /**
   * Get method with unencoded query parameter with value 'value1&q2=value2&q3=value3'
   * @param q1 Unencoded query parameter with value 'value1&q2=value2&q3=value3'
   * @param options The options parameters.
   */
  getMethodQueryValid(
    q1: string,
    options?: SkipUrlEncodingGetMethodQueryValidOptionalParams,
  ): Promise<void>;
  /**
   * Get method with unencoded query parameter with value null
   * @param options The options parameters.
   */
  getMethodQueryNull(
    options?: SkipUrlEncodingGetMethodQueryNullOptionalParams,
  ): Promise<void>;
  /**
   * Get method with unencoded query parameter with value 'value1&q2=value2&q3=value3'
   * @param q1 Unencoded query parameter with value 'value1&q2=value2&q3=value3'
   * @param options The options parameters.
   */
  getPathQueryValid(
    q1: string,
    options?: SkipUrlEncodingGetPathQueryValidOptionalParams,
  ): Promise<void>;
  /**
   * Get method with unencoded query parameter with value 'value1&q2=value2&q3=value3'
   * @param options The options parameters.
   */
  getSwaggerQueryValid(
    options?: SkipUrlEncodingGetSwaggerQueryValidOptionalParams,
  ): Promise<void>;
}
