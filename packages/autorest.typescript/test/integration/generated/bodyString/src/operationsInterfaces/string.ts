/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  StringGetNullOptionalParams,
  StringGetNullResponse,
  StringPutNullOptionalParams,
  StringGetEmptyOptionalParams,
  StringGetEmptyResponse,
  StringPutEmptyOptionalParams,
  StringGetMbcsOptionalParams,
  StringGetMbcsResponse,
  StringPutMbcsOptionalParams,
  StringGetWhitespaceOptionalParams,
  StringGetWhitespaceResponse,
  StringPutWhitespaceOptionalParams,
  StringGetNotProvidedOptionalParams,
  StringGetNotProvidedResponse,
  StringGetBase64EncodedOptionalParams,
  StringGetBase64EncodedResponse,
  StringGetBase64UrlEncodedOptionalParams,
  StringGetBase64UrlEncodedResponse,
  StringPutBase64UrlEncodedOptionalParams,
  StringGetNullBase64UrlEncodedOptionalParams,
  StringGetNullBase64UrlEncodedResponse,
} from "../models";

/** Interface representing a StringOperations. */
export interface StringOperations {
  /**
   * Get null string value value
   * @param options The options parameters.
   */
  getNull(
    options?: StringGetNullOptionalParams,
  ): Promise<StringGetNullResponse>;
  /**
   * Set string value null
   * @param options The options parameters.
   */
  putNull(options?: StringPutNullOptionalParams): Promise<void>;
  /**
   * Get empty string value value ''
   * @param options The options parameters.
   */
  getEmpty(
    options?: StringGetEmptyOptionalParams,
  ): Promise<StringGetEmptyResponse>;
  /**
   * Set string value empty ''
   * @param options The options parameters.
   */
  putEmpty(options?: StringPutEmptyOptionalParams): Promise<void>;
  /**
   * Get mbcs string value '啊齄丂狛狜隣郎隣兀﨩ˊ〞〡￤℡㈱‐ー﹡﹢﹫、〓ⅰⅹ⒈€㈠㈩ⅠⅫ！￣ぁんァヶΑ︴АЯаяāɡㄅㄩ─╋︵﹄︻︱︳︴ⅰⅹɑɡ〇〾⿻⺁䜣€'
   * @param options The options parameters.
   */
  getMbcs(
    options?: StringGetMbcsOptionalParams,
  ): Promise<StringGetMbcsResponse>;
  /**
   * Set string value mbcs '啊齄丂狛狜隣郎隣兀﨩ˊ〞〡￤℡㈱‐ー﹡﹢﹫、〓ⅰⅹ⒈€㈠㈩ⅠⅫ！￣ぁんァヶΑ︴АЯаяāɡㄅㄩ─╋︵﹄︻︱︳︴ⅰⅹɑɡ〇〾⿻⺁䜣€'
   * @param options The options parameters.
   */
  putMbcs(options?: StringPutMbcsOptionalParams): Promise<void>;
  /**
   * Get string value with leading and trailing whitespace '<tab><space><space>Now is the time for all
   * good men to come to the aid of their country<tab><space><space>'
   * @param options The options parameters.
   */
  getWhitespace(
    options?: StringGetWhitespaceOptionalParams,
  ): Promise<StringGetWhitespaceResponse>;
  /**
   * Set String value with leading and trailing whitespace '<tab><space><space>Now is the time for all
   * good men to come to the aid of their country<tab><space><space>'
   * @param options The options parameters.
   */
  putWhitespace(options?: StringPutWhitespaceOptionalParams): Promise<void>;
  /**
   * Get String value when no string value is sent in response payload
   * @param options The options parameters.
   */
  getNotProvided(
    options?: StringGetNotProvidedOptionalParams,
  ): Promise<StringGetNotProvidedResponse>;
  /**
   * Get value that is base64 encoded
   * @param options The options parameters.
   */
  getBase64Encoded(
    options?: StringGetBase64EncodedOptionalParams,
  ): Promise<StringGetBase64EncodedResponse>;
  /**
   * Get value that is base64url encoded
   * @param options The options parameters.
   */
  getBase64UrlEncoded(
    options?: StringGetBase64UrlEncodedOptionalParams,
  ): Promise<StringGetBase64UrlEncodedResponse>;
  /**
   * Put value that is base64url encoded
   * @param stringBody string body
   * @param options The options parameters.
   */
  putBase64UrlEncoded(
    stringBody: Uint8Array,
    options?: StringPutBase64UrlEncodedOptionalParams,
  ): Promise<void>;
  /**
   * Get null value that is expected to be base64url encoded
   * @param options The options parameters.
   */
  getNullBase64UrlEncoded(
    options?: StringGetNullBase64UrlEncodedOptionalParams,
  ): Promise<StringGetNullBase64UrlEncodedResponse>;
}
