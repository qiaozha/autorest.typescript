// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Sample Model */
export interface User {
  /** The user's id. */
  readonly id: number;
  /** The user's name. */
  name?: string;
}

/** User action param */
export interface UserActionParam {
  /** User action value. */
  userActionValue: string;
}

/** User action response */
export interface UserActionResponse {
  /** User action result. */
  userActionResult: string;
}

/** Service versions */
/** */
export type Versions = "2022-12-01-preview";
/** Repeatability Result header options */
/** */
export type RepeatabilityResult = "accepted" | "rejected";
