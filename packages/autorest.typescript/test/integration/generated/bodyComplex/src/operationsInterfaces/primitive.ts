/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  PrimitiveGetIntOptionalParams,
  PrimitiveGetIntResponse,
  IntWrapper,
  PrimitivePutIntOptionalParams,
  PrimitiveGetLongOptionalParams,
  PrimitiveGetLongResponse,
  LongWrapper,
  PrimitivePutLongOptionalParams,
  PrimitiveGetFloatOptionalParams,
  PrimitiveGetFloatResponse,
  FloatWrapper,
  PrimitivePutFloatOptionalParams,
  PrimitiveGetDoubleOptionalParams,
  PrimitiveGetDoubleResponse,
  DoubleWrapper,
  PrimitivePutDoubleOptionalParams,
  PrimitiveGetBoolOptionalParams,
  PrimitiveGetBoolResponse,
  BooleanWrapper,
  PrimitivePutBoolOptionalParams,
  PrimitiveGetStringOptionalParams,
  PrimitiveGetStringResponse,
  StringWrapper,
  PrimitivePutStringOptionalParams,
  PrimitiveGetDateOptionalParams,
  PrimitiveGetDateResponse,
  DateWrapper,
  PrimitivePutDateOptionalParams,
  PrimitiveGetDateTimeOptionalParams,
  PrimitiveGetDateTimeResponse,
  DatetimeWrapper,
  PrimitivePutDateTimeOptionalParams,
  PrimitiveGetDateTimeRfc1123OptionalParams,
  PrimitiveGetDateTimeRfc1123Response,
  Datetimerfc1123Wrapper,
  PrimitivePutDateTimeRfc1123OptionalParams,
  PrimitiveGetDurationOptionalParams,
  PrimitiveGetDurationResponse,
  DurationWrapper,
  PrimitivePutDurationOptionalParams,
  PrimitiveGetByteOptionalParams,
  PrimitiveGetByteResponse,
  ByteWrapper,
  PrimitivePutByteOptionalParams,
} from "../models";

/** Interface representing a Primitive. */
export interface Primitive {
  /**
   * Get complex types with integer properties
   * @param options The options parameters.
   */
  getInt(
    options?: PrimitiveGetIntOptionalParams,
  ): Promise<PrimitiveGetIntResponse>;
  /**
   * Put complex types with integer properties
   * @param complexBody Please put -1 and 2
   * @param options The options parameters.
   */
  putInt(
    complexBody: IntWrapper,
    options?: PrimitivePutIntOptionalParams,
  ): Promise<void>;
  /**
   * Get complex types with long properties
   * @param options The options parameters.
   */
  getLong(
    options?: PrimitiveGetLongOptionalParams,
  ): Promise<PrimitiveGetLongResponse>;
  /**
   * Put complex types with long properties
   * @param complexBody Please put 1099511627775 and -999511627788
   * @param options The options parameters.
   */
  putLong(
    complexBody: LongWrapper,
    options?: PrimitivePutLongOptionalParams,
  ): Promise<void>;
  /**
   * Get complex types with float properties
   * @param options The options parameters.
   */
  getFloat(
    options?: PrimitiveGetFloatOptionalParams,
  ): Promise<PrimitiveGetFloatResponse>;
  /**
   * Put complex types with float properties
   * @param complexBody Please put 1.05 and -0.003
   * @param options The options parameters.
   */
  putFloat(
    complexBody: FloatWrapper,
    options?: PrimitivePutFloatOptionalParams,
  ): Promise<void>;
  /**
   * Get complex types with double properties
   * @param options The options parameters.
   */
  getDouble(
    options?: PrimitiveGetDoubleOptionalParams,
  ): Promise<PrimitiveGetDoubleResponse>;
  /**
   * Put complex types with double properties
   * @param complexBody Please put 3e-100 and
   *                    -0.000000000000000000000000000000000000000000000000000000005
   * @param options The options parameters.
   */
  putDouble(
    complexBody: DoubleWrapper,
    options?: PrimitivePutDoubleOptionalParams,
  ): Promise<void>;
  /**
   * Get complex types with bool properties
   * @param options The options parameters.
   */
  getBool(
    options?: PrimitiveGetBoolOptionalParams,
  ): Promise<PrimitiveGetBoolResponse>;
  /**
   * Put complex types with bool properties
   * @param complexBody Please put true and false
   * @param options The options parameters.
   */
  putBool(
    complexBody: BooleanWrapper,
    options?: PrimitivePutBoolOptionalParams,
  ): Promise<void>;
  /**
   * Get complex types with string properties
   * @param options The options parameters.
   */
  getString(
    options?: PrimitiveGetStringOptionalParams,
  ): Promise<PrimitiveGetStringResponse>;
  /**
   * Put complex types with string properties
   * @param complexBody Please put 'goodrequest', '', and null
   * @param options The options parameters.
   */
  putString(
    complexBody: StringWrapper,
    options?: PrimitivePutStringOptionalParams,
  ): Promise<void>;
  /**
   * Get complex types with date properties
   * @param options The options parameters.
   */
  getDate(
    options?: PrimitiveGetDateOptionalParams,
  ): Promise<PrimitiveGetDateResponse>;
  /**
   * Put complex types with date properties
   * @param complexBody Please put '0001-01-01' and '2016-02-29'
   * @param options The options parameters.
   */
  putDate(
    complexBody: DateWrapper,
    options?: PrimitivePutDateOptionalParams,
  ): Promise<void>;
  /**
   * Get complex types with datetime properties
   * @param options The options parameters.
   */
  getDateTime(
    options?: PrimitiveGetDateTimeOptionalParams,
  ): Promise<PrimitiveGetDateTimeResponse>;
  /**
   * Put complex types with datetime properties
   * @param complexBody Please put '0001-01-01T12:00:00-04:00' and '2015-05-18T11:38:00-08:00'
   * @param options The options parameters.
   */
  putDateTime(
    complexBody: DatetimeWrapper,
    options?: PrimitivePutDateTimeOptionalParams,
  ): Promise<void>;
  /**
   * Get complex types with datetimeRfc1123 properties
   * @param options The options parameters.
   */
  getDateTimeRfc1123(
    options?: PrimitiveGetDateTimeRfc1123OptionalParams,
  ): Promise<PrimitiveGetDateTimeRfc1123Response>;
  /**
   * Put complex types with datetimeRfc1123 properties
   * @param complexBody Please put 'Mon, 01 Jan 0001 12:00:00 GMT' and 'Mon, 18 May 2015 11:38:00 GMT'
   * @param options The options parameters.
   */
  putDateTimeRfc1123(
    complexBody: Datetimerfc1123Wrapper,
    options?: PrimitivePutDateTimeRfc1123OptionalParams,
  ): Promise<void>;
  /**
   * Get complex types with duration properties
   * @param options The options parameters.
   */
  getDuration(
    options?: PrimitiveGetDurationOptionalParams,
  ): Promise<PrimitiveGetDurationResponse>;
  /**
   * Put complex types with duration properties
   * @param complexBody Please put 'P123DT22H14M12.011S'
   * @param options The options parameters.
   */
  putDuration(
    complexBody: DurationWrapper,
    options?: PrimitivePutDurationOptionalParams,
  ): Promise<void>;
  /**
   * Get complex types with byte properties
   * @param options The options parameters.
   */
  getByte(
    options?: PrimitiveGetByteOptionalParams,
  ): Promise<PrimitiveGetByteResponse>;
  /**
   * Put complex types with byte properties
   * @param complexBody Please put non-ascii byte string hex(FF FE FD FC 00 FA F9 F8 F7 F6)
   * @param options The options parameters.
   */
  putByte(
    complexBody: ByteWrapper,
    options?: PrimitivePutByteOptionalParams,
  ): Promise<void>;
}
