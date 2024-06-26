// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface NewModel {
  newProp: string;
  enumProp: NewEnum;
  unionProp: NewUnion;
}

<<<<<<< HEAD
=======
/** Type of NewEnum */
>>>>>>> main
export type NewEnum = "newEnumMember";
/** The version of the API. */
export type Versions = "v1" | "v2";
/** Alias for NewUnion */
export type NewUnion = string | number;
