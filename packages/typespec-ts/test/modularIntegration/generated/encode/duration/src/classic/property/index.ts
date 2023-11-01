// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DurationContext } from "../../api/DurationContext.js";
import {
  DefaultDurationProperty,
  ISO8601DurationProperty,
  Int32SecondsDurationProperty,
  FloatSecondsDurationProperty,
  FloatSecondsDurationArrayProperty,
} from "../../models/models.js";
import {
  propertyDefault,
  propertyIso8601,
  propertyInt32Seconds,
  propertyFloatSeconds,
  propertyFloatSecondsArray,
} from "../../api/property/index.js";
import {
  PropertyPropertyDefaultOptions,
  PropertyPropertyIso8601Options,
  PropertyPropertyInt32SecondsOptions,
  PropertyPropertyFloatSecondsOptions,
  PropertyPropertyFloatSecondsArrayOptions,
} from "../../models/options.js";

export interface PropertyOperations {
  propertyDefault: (
    body: DefaultDurationProperty,
    options?: PropertyPropertyDefaultOptions
  ) => Promise<DefaultDurationProperty>;
  propertyIso8601: (
    body: ISO8601DurationProperty,
    options?: PropertyPropertyIso8601Options
  ) => Promise<ISO8601DurationProperty>;
  propertyInt32Seconds: (
    body: Int32SecondsDurationProperty,
    options?: PropertyPropertyInt32SecondsOptions
  ) => Promise<Int32SecondsDurationProperty>;
  propertyFloatSeconds: (
    body: FloatSecondsDurationProperty,
    options?: PropertyPropertyFloatSecondsOptions
  ) => Promise<FloatSecondsDurationProperty>;
  propertyFloatSecondsArray: (
    body: FloatSecondsDurationArrayProperty,
    options?: PropertyPropertyFloatSecondsArrayOptions
  ) => Promise<FloatSecondsDurationArrayProperty>;
}

export function getProperty(context: DurationContext) {
  return {
    propertyDefault: (
      body: DefaultDurationProperty,
      options?: PropertyPropertyDefaultOptions
    ) => propertyDefault(context, body, options),
    propertyIso8601: (
      body: ISO8601DurationProperty,
      options?: PropertyPropertyIso8601Options
    ) => propertyIso8601(context, body, options),
    propertyInt32Seconds: (
      body: Int32SecondsDurationProperty,
      options?: PropertyPropertyInt32SecondsOptions
    ) => propertyInt32Seconds(context, body, options),
    propertyFloatSeconds: (
      body: FloatSecondsDurationProperty,
      options?: PropertyPropertyFloatSecondsOptions
    ) => propertyFloatSeconds(context, body, options),
    propertyFloatSecondsArray: (
      body: FloatSecondsDurationArrayProperty,
      options?: PropertyPropertyFloatSecondsArrayOptions
    ) => propertyFloatSecondsArray(context, body, options),
  };
}

export function getPropertyOperations(
  context: DurationContext
): PropertyOperations {
  return {
    ...getProperty(context),
  };
}
