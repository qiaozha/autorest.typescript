// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import "./models";

export type PathsGetBooleanTrueParameters = RequestParameters;
export type PathsGetBooleanFalseParameters = RequestParameters;
export type PathsGetIntOneMillionParameters = RequestParameters;
export type PathsGetIntNegativeOneMillionParameters = RequestParameters;
export type PathsGetTenBillionParameters = RequestParameters;
export type PathsGetNegativeTenBillionParameters = RequestParameters;
export type PathsFloatScientificPositiveParameters = RequestParameters;
export type PathsFloatScientificNegativeParameters = RequestParameters;
export type PathsDoubleDecimalPositiveParameters = RequestParameters;
export type PathsDoubleDecimalNegativeParameters = RequestParameters;
export type PathsStringUnicodeParameters = RequestParameters;
export type PathsStringUrlEncodedParameters = RequestParameters;
export type PathsStringUrlNonEncodedParameters = RequestParameters;
export type PathsStringEmptyParameters = RequestParameters;
export type PathsStringNullParameters = RequestParameters;
export type PathsEnumValidParameters = RequestParameters;
export type PathsEnumNullParameters = RequestParameters;
export type PathsByteMultiByteParameters = RequestParameters;
export type PathsByteEmptyParameters = RequestParameters;
export type PathsByteNullParameters = RequestParameters;
export type PathsDateValidParameters = RequestParameters;
export type PathsDateNullParameters = RequestParameters;
export type PathsDateTimeValidParameters = RequestParameters;
export type PathsDateTimeNullParameters = RequestParameters;
export type PathsBase64UrlParameters = RequestParameters;
export type PathsArrayCsvInPathParameters = RequestParameters;
export type PathsUnixTimeUrlParameters = RequestParameters;
export type QueriesGetBooleanTrueParameters = RequestParameters;
export type QueriesGetBooleanFalseParameters = RequestParameters;

export interface QueriesGetBooleanNullQueryParamProperties {
  /** null boolean value */
  boolQuery?: boolean;
}

export interface QueriesGetBooleanNullQueryParam {
  queryParameters?: QueriesGetBooleanNullQueryParamProperties;
}

export type QueriesGetBooleanNullParameters = QueriesGetBooleanNullQueryParam &
  RequestParameters;
export type QueriesGetIntOneMillionParameters = RequestParameters;
export type QueriesGetIntNegativeOneMillionParameters = RequestParameters;

export interface QueriesGetIntNullQueryParamProperties {
  /** null integer value */
  intQuery?: number;
}

export interface QueriesGetIntNullQueryParam {
  queryParameters?: QueriesGetIntNullQueryParamProperties;
}

export type QueriesGetIntNullParameters = QueriesGetIntNullQueryParam &
  RequestParameters;
export type QueriesGetTenBillionParameters = RequestParameters;
export type QueriesGetNegativeTenBillionParameters = RequestParameters;

export interface QueriesGetLongNullQueryParamProperties {
  /** null 64 bit integer value */
  longQuery?: number;
}

export interface QueriesGetLongNullQueryParam {
  queryParameters?: QueriesGetLongNullQueryParamProperties;
}

export type QueriesGetLongNullParameters = QueriesGetLongNullQueryParam &
  RequestParameters;
export type QueriesFloatScientificPositiveParameters = RequestParameters;
export type QueriesFloatScientificNegativeParameters = RequestParameters;

export interface QueriesFloatNullQueryParamProperties {
  /** null numeric value */
  floatQuery?: number;
}

export interface QueriesFloatNullQueryParam {
  queryParameters?: QueriesFloatNullQueryParamProperties;
}

export type QueriesFloatNullParameters = QueriesFloatNullQueryParam &
  RequestParameters;
export type QueriesDoubleDecimalPositiveParameters = RequestParameters;
export type QueriesDoubleDecimalNegativeParameters = RequestParameters;

export interface QueriesDoubleNullQueryParamProperties {
  /** null numeric value */
  doubleQuery?: number;
}

export interface QueriesDoubleNullQueryParam {
  queryParameters?: QueriesDoubleNullQueryParamProperties;
}

export type QueriesDoubleNullParameters = QueriesDoubleNullQueryParam &
  RequestParameters;
export type QueriesStringUnicodeParameters = RequestParameters;
export type QueriesStringUrlEncodedParameters = RequestParameters;
export type QueriesStringEmptyParameters = RequestParameters;

export interface QueriesStringNullQueryParamProperties {
  /** null string value */
  stringQuery?: string;
}

export interface QueriesStringNullQueryParam {
  queryParameters?: QueriesStringNullQueryParamProperties;
}

export type QueriesStringNullParameters = QueriesStringNullQueryParam &
  RequestParameters;

export interface QueriesEnumValidQueryParamProperties {
  /** 'green color' enum value */
  enumQuery?: "red color" | "green color" | "blue color";
}

export interface QueriesEnumValidQueryParam {
  queryParameters?: QueriesEnumValidQueryParamProperties;
}

export type QueriesEnumValidParameters = QueriesEnumValidQueryParam &
  RequestParameters;

export interface QueriesEnumNullQueryParamProperties {
  /** null string value */
  enumQuery?: "red color" | "green color" | "blue color";
}

export interface QueriesEnumNullQueryParam {
  queryParameters?: QueriesEnumNullQueryParamProperties;
}

export type QueriesEnumNullParameters = QueriesEnumNullQueryParam &
  RequestParameters;

export interface QueriesByteMultiByteQueryParamProperties {
  /**
   * '啊齄丂狛狜隣郎隣兀﨩' multibyte value as utf-8 encoded byte array
   *
   * Value may contain base64 encoded characters
   */
  byteQuery?: string;
}

export interface QueriesByteMultiByteQueryParam {
  queryParameters?: QueriesByteMultiByteQueryParamProperties;
}

export type QueriesByteMultiByteParameters = QueriesByteMultiByteQueryParam &
  RequestParameters;
export type QueriesByteEmptyParameters = RequestParameters;

export interface QueriesByteNullQueryParamProperties {
  /**
   * null as byte array (no query parameters in uri)
   *
   * Value may contain base64 encoded characters
   */
  byteQuery?: string;
}

export interface QueriesByteNullQueryParam {
  queryParameters?: QueriesByteNullQueryParamProperties;
}

export type QueriesByteNullParameters = QueriesByteNullQueryParam &
  RequestParameters;
export type QueriesDateValidParameters = RequestParameters;

export interface QueriesDateNullQueryParamProperties {
  /** null as date (no query parameters in uri) */
  dateQuery?: Date;
}

export interface QueriesDateNullQueryParam {
  queryParameters?: QueriesDateNullQueryParamProperties;
}

export type QueriesDateNullParameters = QueriesDateNullQueryParam &
  RequestParameters;
export type QueriesDateTimeValidParameters = RequestParameters;

export interface QueriesDateTimeNullQueryParamProperties {
  /** null as date-time (no query parameters) */
  dateTimeQuery?: Date;
}

export interface QueriesDateTimeNullQueryParam {
  queryParameters?: QueriesDateTimeNullQueryParamProperties;
}

export type QueriesDateTimeNullParameters = QueriesDateTimeNullQueryParam &
  RequestParameters;

export interface QueriesArrayStringCsvValidQueryParamProperties {
  /** an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the csv-array format */
  arrayQuery?: Array<string>;
}

export interface QueriesArrayStringCsvValidQueryParam {
  queryParameters?: QueriesArrayStringCsvValidQueryParamProperties;
}

export type QueriesArrayStringCsvValidParameters = QueriesArrayStringCsvValidQueryParam &
  RequestParameters;

export interface QueriesArrayStringCsvNullQueryParamProperties {
  /** a null array of string using the csv-array format */
  arrayQuery?: Array<string>;
}

export interface QueriesArrayStringCsvNullQueryParam {
  queryParameters?: QueriesArrayStringCsvNullQueryParamProperties;
}

export type QueriesArrayStringCsvNullParameters = QueriesArrayStringCsvNullQueryParam &
  RequestParameters;

export interface QueriesArrayStringCsvEmptyQueryParamProperties {
  /** an empty array [] of string using the csv-array format */
  arrayQuery?: Array<string>;
}

export interface QueriesArrayStringCsvEmptyQueryParam {
  queryParameters?: QueriesArrayStringCsvEmptyQueryParamProperties;
}

export type QueriesArrayStringCsvEmptyParameters = QueriesArrayStringCsvEmptyQueryParam &
  RequestParameters;

export interface QueriesArrayStringNoCollectionFormatEmptyQueryParamProperties {
  /** Array-typed query parameter. Pass in ['hello', 'nihao', 'bonjour']. */
  arrayQuery?: Array<string>;
}

export interface QueriesArrayStringNoCollectionFormatEmptyQueryParam {
  queryParameters?: QueriesArrayStringNoCollectionFormatEmptyQueryParamProperties;
}

export type QueriesArrayStringNoCollectionFormatEmptyParameters = QueriesArrayStringNoCollectionFormatEmptyQueryParam &
  RequestParameters;

export interface QueriesArrayStringSsvValidQueryParamProperties {
  /** an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the ssv-array format */
  arrayQuery?: Array<string>;
}

export interface QueriesArrayStringSsvValidQueryParam {
  queryParameters?: QueriesArrayStringSsvValidQueryParamProperties;
}

export type QueriesArrayStringSsvValidParameters = QueriesArrayStringSsvValidQueryParam &
  RequestParameters;

export interface QueriesArrayStringTsvValidQueryParamProperties {
  /** an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the tsv-array format */
  arrayQuery?: Array<string>;
}

export interface QueriesArrayStringTsvValidQueryParam {
  queryParameters?: QueriesArrayStringTsvValidQueryParamProperties;
}

export type QueriesArrayStringTsvValidParameters = QueriesArrayStringTsvValidQueryParam &
  RequestParameters;

export interface QueriesArrayStringPipesValidQueryParamProperties {
  /** an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the pipes-array format */
  arrayQuery?: Array<string>;
}

export interface QueriesArrayStringPipesValidQueryParam {
  queryParameters?: QueriesArrayStringPipesValidQueryParamProperties;
}

export type QueriesArrayStringPipesValidParameters = QueriesArrayStringPipesValidQueryParam &
  RequestParameters;

export interface PathItemsGetAllWithValuesQueryParamProperties {
  /** A string value 'pathItemStringQuery' that appears as a query parameter */
  pathItemStringQuery?: string;
  /** should contain value 'localStringQuery' */
  localStringQuery?: string;
}

export interface PathItemsGetAllWithValuesQueryParam {
  queryParameters?: PathItemsGetAllWithValuesQueryParamProperties;
}

export type PathItemsGetAllWithValuesParameters = PathItemsGetAllWithValuesQueryParam &
  RequestParameters;

export interface PathItemsGetGlobalQueryNullQueryParamProperties {
  /** A string value 'pathItemStringQuery' that appears as a query parameter */
  pathItemStringQuery?: string;
  /** should contain value 'localStringQuery' */
  localStringQuery?: string;
}

export interface PathItemsGetGlobalQueryNullQueryParam {
  queryParameters?: PathItemsGetGlobalQueryNullQueryParamProperties;
}

export type PathItemsGetGlobalQueryNullParameters = PathItemsGetGlobalQueryNullQueryParam &
  RequestParameters;

export interface PathItemsGetGlobalAndLocalQueryNullQueryParamProperties {
  /** A string value 'pathItemStringQuery' that appears as a query parameter */
  pathItemStringQuery?: string;
  /** should contain null value */
  localStringQuery?: string;
}

export interface PathItemsGetGlobalAndLocalQueryNullQueryParam {
  queryParameters?: PathItemsGetGlobalAndLocalQueryNullQueryParamProperties;
}

export type PathItemsGetGlobalAndLocalQueryNullParameters = PathItemsGetGlobalAndLocalQueryNullQueryParam &
  RequestParameters;

export interface PathItemsGetLocalPathItemQueryNullQueryParamProperties {
  /** should contain value null */
  pathItemStringQuery?: string;
  /** should contain value null */
  localStringQuery?: string;
}

export interface PathItemsGetLocalPathItemQueryNullQueryParam {
  queryParameters?: PathItemsGetLocalPathItemQueryNullQueryParamProperties;
}

export type PathItemsGetLocalPathItemQueryNullParameters = PathItemsGetLocalPathItemQueryNullQueryParam &
  RequestParameters;
