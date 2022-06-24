/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export interface PetDef {
  /** name */
  name?: string;
  /** Type of Pet */
  daysOfWeek?: DaysOfWeekExtensibleEnum;
  intEnum: IntEnum;
}

/** Known values of {@link DaysOfWeekExtensibleEnum} that the service accepts. */
export enum KnownDaysOfWeekExtensibleEnum {
  /** Monday */
  Monday = "Monday",
  /** Tuesday */
  Tuesday = "Tuesday",
  /** Wednesday */
  Wednesday = "Wednesday",
  /** Thursday */
  Thursday = "Thursday",
  /** Friday */
  Friday = "Friday",
  /** Saturday */
  Saturday = "Saturday",
  /** Sunday */
  Sunday = "Sunday"
}

/**
 * Defines values for DaysOfWeekExtensibleEnum. \
 * {@link KnownDaysOfWeekExtensibleEnum} can be used interchangeably with DaysOfWeekExtensibleEnum,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Monday** \
 * **Tuesday** \
 * **Wednesday** \
 * **Thursday** \
 * **Friday** \
 * **Saturday** \
 * **Sunday**
 */
export type DaysOfWeekExtensibleEnum = string;

/** Known values of {@link IntEnum} that the service accepts. */
export enum KnownIntEnum {
  /** This is a really long comment to see what wrapping looks like. This comment is really long and it should wrap for readability. Please wrap. This should wrap. */
  One = "1",
  /** two */
  Two = "2",
  /** three */
  Three = "3"
}

/**
 * Defines values for IntEnum. \
 * {@link KnownIntEnum} can be used interchangeably with IntEnum,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **1**: This is a really long comment to see what wrapping looks like. This comment is really long and it should wrap for readability. Please wrap. This should wrap. \
 * **2**: two \
 * **3**: three
 */
export type IntEnum = string;

/** Optional parameters. */
export interface PetGetByPetIdOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getByPetId operation. */
export type PetGetByPetIdResponse = PetDef;

/** Optional parameters. */
export interface PetAddPetOptionalParams extends coreClient.OperationOptions {
  /** pet param */
  petParam?: PetDef;
}

/** Contains response data for the addPet operation. */
export type PetAddPetResponse = PetDef;

/** Optional parameters. */
export interface ExtensibleEnumsClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
