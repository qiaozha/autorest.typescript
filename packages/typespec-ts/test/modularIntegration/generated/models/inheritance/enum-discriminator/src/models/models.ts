// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Test extensible enum type for discriminator */
export interface Dog {
  /** the discriminator possible values golden */
  kind: string;
  /** Weight of the dog */
  weight: number;
}

/** Golden dog model */
export interface Golden extends Dog {
  /** discriminator property */
  kind: any;
}

/** extensible enum type for discriminator */
/** "golden" */
export type DogKind = string;

/** Test fixed enum type for discriminator */
export interface Snake {
  /** the discriminator possible values cobra */
  kind: string;
  /** Length of the snake */
  length: number;
}

/** Cobra model */
export interface Cobra extends Snake {
  /** discriminator property */
  kind: any;
}

/** fixed enum type for discriminator */
/** */
export type SnakeKind = "cobra";
