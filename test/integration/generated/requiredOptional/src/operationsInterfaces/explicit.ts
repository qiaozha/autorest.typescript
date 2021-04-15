/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import {
  ExplicitPutOptionalBinaryBodyOptionalParams,
  ExplicitPostOptionalIntegerParameterOptionalParams,
  IntWrapper,
  ExplicitPostOptionalIntegerPropertyOptionalParams,
  ExplicitPostOptionalIntegerHeaderOptionalParams,
  ExplicitPostOptionalStringParameterOptionalParams,
  StringWrapper,
  ExplicitPostOptionalStringPropertyOptionalParams,
  ExplicitPostOptionalStringHeaderOptionalParams,
  Product,
  ExplicitPostOptionalClassParameterOptionalParams,
  ClassWrapper,
  ExplicitPostOptionalClassPropertyOptionalParams,
  ExplicitPostOptionalArrayParameterOptionalParams,
  ArrayWrapper,
  ExplicitPostOptionalArrayPropertyOptionalParams,
  ExplicitPostOptionalArrayHeaderOptionalParams
} from "../models";

/** Interface representing a Explicit. */
export interface Explicit {
  /**
   * Test explicitly optional body parameter
   * @param options The options parameters.
   */
  putOptionalBinaryBody(
    options?: ExplicitPutOptionalBinaryBodyOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Test explicitly required body parameter
   * @param bodyParameter
   * @param options The options parameters.
   */
  putRequiredBinaryBody(
    bodyParameter: coreHttp.HttpRequestBody,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse>;
  /**
   * Test explicitly required integer. Please put null and the client library should throw before the
   * request is sent.
   * @param bodyParameter
   * @param options The options parameters.
   */
  postRequiredIntegerParameter(
    bodyParameter: number,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse>;
  /**
   * Test explicitly optional integer. Please put null.
   * @param options The options parameters.
   */
  postOptionalIntegerParameter(
    options?: ExplicitPostOptionalIntegerParameterOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Test explicitly required integer. Please put a valid int-wrapper with 'value' = null and the client
   * library should throw before the request is sent.
   * @param bodyParameter
   * @param options The options parameters.
   */
  postRequiredIntegerProperty(
    bodyParameter: IntWrapper,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse>;
  /**
   * Test explicitly optional integer. Please put a valid int-wrapper with 'value' = null.
   * @param options The options parameters.
   */
  postOptionalIntegerProperty(
    options?: ExplicitPostOptionalIntegerPropertyOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Test explicitly required integer. Please put a header 'headerParameter' => null and the client
   * library should throw before the request is sent.
   * @param headerParameter
   * @param options The options parameters.
   */
  postRequiredIntegerHeader(
    headerParameter: number,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse>;
  /**
   * Test explicitly optional integer. Please put a header 'headerParameter' => null.
   * @param options The options parameters.
   */
  postOptionalIntegerHeader(
    options?: ExplicitPostOptionalIntegerHeaderOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Test explicitly required string. Please put null and the client library should throw before the
   * request is sent.
   * @param bodyParameter
   * @param options The options parameters.
   */
  postRequiredStringParameter(
    bodyParameter: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse>;
  /**
   * Test explicitly optional string. Please put null.
   * @param options The options parameters.
   */
  postOptionalStringParameter(
    options?: ExplicitPostOptionalStringParameterOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Test explicitly required string. Please put a valid string-wrapper with 'value' = null and the
   * client library should throw before the request is sent.
   * @param bodyParameter
   * @param options The options parameters.
   */
  postRequiredStringProperty(
    bodyParameter: StringWrapper,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse>;
  /**
   * Test explicitly optional integer. Please put a valid string-wrapper with 'value' = null.
   * @param options The options parameters.
   */
  postOptionalStringProperty(
    options?: ExplicitPostOptionalStringPropertyOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Test explicitly required string. Please put a header 'headerParameter' => null and the client
   * library should throw before the request is sent.
   * @param headerParameter
   * @param options The options parameters.
   */
  postRequiredStringHeader(
    headerParameter: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse>;
  /**
   * Test explicitly optional string. Please put a header 'headerParameter' => null.
   * @param options The options parameters.
   */
  postOptionalStringHeader(
    options?: ExplicitPostOptionalStringHeaderOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Test explicitly required complex object. Please put null and the client library should throw before
   * the request is sent.
   * @param bodyParameter
   * @param options The options parameters.
   */
  postRequiredClassParameter(
    bodyParameter: Product,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse>;
  /**
   * Test explicitly optional complex object. Please put null.
   * @param options The options parameters.
   */
  postOptionalClassParameter(
    options?: ExplicitPostOptionalClassParameterOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Test explicitly required complex object. Please put a valid class-wrapper with 'value' = null and
   * the client library should throw before the request is sent.
   * @param bodyParameter
   * @param options The options parameters.
   */
  postRequiredClassProperty(
    bodyParameter: ClassWrapper,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse>;
  /**
   * Test explicitly optional complex object. Please put a valid class-wrapper with 'value' = null.
   * @param options The options parameters.
   */
  postOptionalClassProperty(
    options?: ExplicitPostOptionalClassPropertyOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Test explicitly required array. Please put null and the client library should throw before the
   * request is sent.
   * @param bodyParameter Array of PostContentSchemaItem
   * @param options The options parameters.
   */
  postRequiredArrayParameter(
    bodyParameter: string[],
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse>;
  /**
   * Test explicitly optional array. Please put null.
   * @param options The options parameters.
   */
  postOptionalArrayParameter(
    options?: ExplicitPostOptionalArrayParameterOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Test explicitly required array. Please put a valid array-wrapper with 'value' = null and the client
   * library should throw before the request is sent.
   * @param bodyParameter
   * @param options The options parameters.
   */
  postRequiredArrayProperty(
    bodyParameter: ArrayWrapper,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse>;
  /**
   * Test explicitly optional array. Please put a valid array-wrapper with 'value' = null.
   * @param options The options parameters.
   */
  postOptionalArrayProperty(
    options?: ExplicitPostOptionalArrayPropertyOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Test explicitly required array. Please put a header 'headerParameter' => null and the client library
   * should throw before the request is sent.
   * @param headerParameter Array of Post0ItemsItem
   * @param options The options parameters.
   */
  postRequiredArrayHeader(
    headerParameter: string[],
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse>;
  /**
   * Test explicitly optional integer. Please put a header 'headerParameter' => null.
   * @param options The options parameters.
   */
  postOptionalArrayHeader(
    options?: ExplicitPostOptionalArrayHeaderOptionalParams
  ): Promise<coreHttp.RestResponse>;
}
