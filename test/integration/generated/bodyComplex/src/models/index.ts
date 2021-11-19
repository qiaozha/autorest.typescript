/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export type FishUnion = Fish | SalmonUnion | SharkUnion;
export type DotFishUnion = DotFish | DotSalmon;
export type MyBaseTypeUnion = MyBaseType | MyDerivedType;
export type SalmonUnion = Salmon | SmartSalmon;
export type SharkUnion = Shark | Sawshark | Goblinshark | Cookiecuttershark;

export interface BasicDef {
  /** Basic Id */
  id?: number;
  /** Name property with a very long description that does not fit on a single line and a line break. */
  name?: string;
  color?: CMYKColors;
}

export interface ErrorModel {
  status?: number;
  message?: string;
}

export interface IntWrapper {
  field1?: number;
  field2?: number;
}

export interface LongWrapper {
  field1?: number;
  field2?: number;
}

export interface FloatWrapper {
  field1?: number;
  field2?: number;
}

export interface DoubleWrapper {
  field1?: number;
  field56ZerosAfterTheDotAndNegativeZeroBeforeDotAndThisIsALongFieldNameOnPurpose?: number;
}

export interface BooleanWrapper {
  fieldTrue?: boolean;
  fieldFalse?: boolean;
}

export interface StringWrapper {
  field?: string;
  empty?: string;
  null?: string;
}

export interface DateWrapper {
  field?: Date;
  leap?: Date;
}

export interface DatetimeWrapper {
  field?: Date;
  now?: Date;
}

export interface Datetimerfc1123Wrapper {
  field?: Date;
  now?: Date;
}

export interface DurationWrapper {
  field?: string;
}

export interface ByteWrapper {
  field?: Uint8Array;
}

export interface ArrayWrapper {
  array?: string[];
}

export interface DictionaryWrapper {
  /** Dictionary of <string> */
  defaultProgram?: { [propertyName: string]: string };
}

export interface Pet {
  id?: number;
  name?: string;
}

export interface Fish {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  fishtype:
    | "salmon"
    | "smart_salmon"
    | "shark"
    | "sawshark"
    | "goblin"
    | "cookiecuttershark";
  species?: string;
  length: number;
  siblings?: FishUnion[];
}

export interface DotFish {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  fishType: "DotSalmon";
  species?: string;
}

export interface DotFishMarket {
  sampleSalmon?: DotSalmon;
  salmons?: DotSalmon[];
  sampleFish?: DotFishUnion;
  fishes?: DotFishUnion[];
}

export interface ReadonlyObj {
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly id?: string;
  size?: number;
}

export interface MyBaseType {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  kind: "Kind1";
  propB1?: string;
  propBH1?: string;
}

export type Dog = Pet & {
  food?: string;
};

export type Cat = Pet & {
  color?: string;
  hates?: Dog[];
};

export type Salmon = Fish & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  fishtype: "salmon" | "smart_salmon";
  location?: string;
  iswild?: boolean;
};

export type Shark = Fish & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  fishtype: "shark" | "sawshark" | "goblin" | "cookiecuttershark";
  age?: number;
  birthday: Date;
};

export type DotSalmon = DotFish & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  fishType: "DotSalmon";
  location?: string;
  iswild?: boolean;
};

export type MyDerivedType = MyBaseType & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  kind: "Kind1";
  propD1?: string;
};

export type Siamese = Cat & {
  breed?: string;
};

export type SmartSalmon = Salmon & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  fishtype: "smart_salmon";
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  collegeDegree?: string;
};

export type Sawshark = Shark & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  fishtype: "sawshark";
  picture?: Uint8Array;
};

export type Goblinshark = Shark & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  fishtype: "goblin";
  jawsize?: number;
  /** Colors possible */
  color?: GoblinSharkColor;
};

export type Cookiecuttershark = Shark & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  fishtype: "cookiecuttershark";
};

/** Known values of {@link CmykColors} that the service accepts. */
export enum KnownCmykColors {
  Cyan = "cyan",
  Magenta = "Magenta",
  Yellow = "YELLOW",
  BlacK = "blacK"
}

/**
 * Defines values for CmykColors. \
 * {@link KnownCmykColors} can be used interchangeably with CmykColors,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **cyan** \
 * **Magenta** \
 * **YELLOW** \
 * **blacK**
 */
export type CmykColors = string;

/** Known values of {@link MyKind} that the service accepts. */
export enum KnownMyKind {
  Kind1 = "Kind1"
}

/**
 * Defines values for MyKind. \
 * {@link KnownMyKind} can be used interchangeably with MyKind,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Kind1**
 */
export type MyKind = string;

/** Known values of {@link GoblinSharkColor} that the service accepts. */
export enum KnownGoblinSharkColor {
  Pink = "pink",
  Gray = "gray",
  Brown = "brown",
  /** Uppercase RED */
  UpperRed = "RED",
  /** Lowercase RED */
  LowerRed = "red"
}

/**
 * Defines values for GoblinSharkColor. \
 * {@link KnownGoblinSharkColor} can be used interchangeably with GoblinSharkColor,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **pink** \
 * **gray** \
 * **brown** \
 * **RED**: Uppercase RED \
 * **red**: Lowercase RED
 */
export type GoblinSharkColor = string;

/** Optional parameters. */
export interface BasicGetValidOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getValid operation. */
export type BasicGetValidResponse = BasicDef;

/** Optional parameters. */
export interface BasicPutValidOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface BasicGetInvalidOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getInvalid operation. */
export type BasicGetInvalidResponse = BasicDef;

/** Optional parameters. */
export interface BasicGetEmptyOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getEmpty operation. */
export type BasicGetEmptyResponse = BasicDef;

/** Optional parameters. */
export interface BasicGetNullOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getNull operation. */
export type BasicGetNullResponse = BasicDef;

/** Optional parameters. */
export interface BasicGetNotProvidedOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getNotProvided operation. */
export type BasicGetNotProvidedResponse = BasicDef;

/** Optional parameters. */
export interface PrimitiveGetIntOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getInt operation. */
export type PrimitiveGetIntResponse = IntWrapper;

/** Optional parameters. */
export interface PrimitivePutIntOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface PrimitiveGetLongOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getLong operation. */
export type PrimitiveGetLongResponse = LongWrapper;

/** Optional parameters. */
export interface PrimitivePutLongOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface PrimitiveGetFloatOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getFloat operation. */
export type PrimitiveGetFloatResponse = FloatWrapper;

/** Optional parameters. */
export interface PrimitivePutFloatOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface PrimitiveGetDoubleOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getDouble operation. */
export type PrimitiveGetDoubleResponse = DoubleWrapper;

/** Optional parameters. */
export interface PrimitivePutDoubleOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface PrimitiveGetBoolOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getBool operation. */
export type PrimitiveGetBoolResponse = BooleanWrapper;

/** Optional parameters. */
export interface PrimitivePutBoolOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface PrimitiveGetStringOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getString operation. */
export type PrimitiveGetStringResponse = StringWrapper;

/** Optional parameters. */
export interface PrimitivePutStringOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface PrimitiveGetDateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getDate operation. */
export type PrimitiveGetDateResponse = DateWrapper;

/** Optional parameters. */
export interface PrimitivePutDateOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface PrimitiveGetDateTimeOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getDateTime operation. */
export type PrimitiveGetDateTimeResponse = DatetimeWrapper;

/** Optional parameters. */
export interface PrimitivePutDateTimeOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface PrimitiveGetDateTimeRfc1123OptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getDateTimeRfc1123 operation. */
export type PrimitiveGetDateTimeRfc1123Response = Datetimerfc1123Wrapper;

/** Optional parameters. */
export interface PrimitivePutDateTimeRfc1123OptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface PrimitiveGetDurationOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getDuration operation. */
export type PrimitiveGetDurationResponse = DurationWrapper;

/** Optional parameters. */
export interface PrimitivePutDurationOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface PrimitiveGetByteOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getByte operation. */
export type PrimitiveGetByteResponse = ByteWrapper;

/** Optional parameters. */
export interface PrimitivePutByteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ArrayGetValidOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getValid operation. */
export type ArrayGetValidResponse = ArrayWrapper;

/** Optional parameters. */
export interface ArrayPutValidOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ArrayGetEmptyOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getEmpty operation. */
export type ArrayGetEmptyResponse = ArrayWrapper;

/** Optional parameters. */
export interface ArrayPutEmptyOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ArrayGetNotProvidedOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getNotProvided operation. */
export type ArrayGetNotProvidedResponse = ArrayWrapper;

/** Optional parameters. */
export interface DictionaryGetValidOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getValid operation. */
export type DictionaryGetValidResponse = DictionaryWrapper;

/** Optional parameters. */
export interface DictionaryPutValidOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface DictionaryGetEmptyOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getEmpty operation. */
export type DictionaryGetEmptyResponse = DictionaryWrapper;

/** Optional parameters. */
export interface DictionaryPutEmptyOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface DictionaryGetNullOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getNull operation. */
export type DictionaryGetNullResponse = DictionaryWrapper;

/** Optional parameters. */
export interface DictionaryGetNotProvidedOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getNotProvided operation. */
export type DictionaryGetNotProvidedResponse = DictionaryWrapper;

/** Optional parameters. */
export interface InheritanceGetValidOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getValid operation. */
export type InheritanceGetValidResponse = Siamese;

/** Optional parameters. */
export interface InheritancePutValidOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface PolymorphismGetValidOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getValid operation. */
export type PolymorphismGetValidResponse = FishUnion;

/** Optional parameters. */
export interface PolymorphismPutValidOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface PolymorphismGetDotSyntaxOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getDotSyntax operation. */
export type PolymorphismGetDotSyntaxResponse = DotFishUnion;

/** Optional parameters. */
export interface PolymorphismGetComposedWithDiscriminatorOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getComposedWithDiscriminator operation. */
export type PolymorphismGetComposedWithDiscriminatorResponse = DotFishMarket;

/** Optional parameters. */
export interface PolymorphismGetComposedWithoutDiscriminatorOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getComposedWithoutDiscriminator operation. */
export type PolymorphismGetComposedWithoutDiscriminatorResponse = DotFishMarket;

/** Optional parameters. */
export interface PolymorphismGetComplicatedOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getComplicated operation. */
export type PolymorphismGetComplicatedResponse = SalmonUnion;

/** Optional parameters. */
export interface PolymorphismPutComplicatedOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface PolymorphismPutMissingDiscriminatorOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the putMissingDiscriminator operation. */
export type PolymorphismPutMissingDiscriminatorResponse = SalmonUnion;

/** Optional parameters. */
export interface PolymorphismPutValidMissingRequiredOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface PolymorphicrecursiveGetValidOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getValid operation. */
export type PolymorphicrecursiveGetValidResponse = FishUnion;

/** Optional parameters. */
export interface PolymorphicrecursivePutValidOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ReadonlypropertyGetValidOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getValid operation. */
export type ReadonlypropertyGetValidResponse = ReadonlyObj;

/** Optional parameters. */
export interface ReadonlypropertyPutValidOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface FlattencomplexGetValidOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getValid operation. */
export type FlattencomplexGetValidResponse = MyBaseTypeUnion;

/** Optional parameters. */
export interface BodyComplexClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
