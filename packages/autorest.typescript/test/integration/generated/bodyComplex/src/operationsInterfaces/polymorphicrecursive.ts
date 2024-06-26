/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  PolymorphicrecursiveGetValidOptionalParams,
  PolymorphicrecursiveGetValidResponse,
  FishUnion,
  PolymorphicrecursivePutValidOptionalParams,
} from "../models";

/** Interface representing a Polymorphicrecursive. */
export interface Polymorphicrecursive {
  /**
   * Get complex types that are polymorphic and have recursive references
   * @param options The options parameters.
   */
  getValid(
    options?: PolymorphicrecursiveGetValidOptionalParams,
  ): Promise<PolymorphicrecursiveGetValidResponse>;
  /**
   * Put complex types that are polymorphic and have recursive references
   * @param complexBody Please put a salmon that looks like this:
   *                    {
   *                        "fishtype": "salmon",
   *                        "species": "king",
   *                        "length": 1,
   *                        "age": 1,
   *                        "location": "alaska",
   *                        "iswild": true,
   *                        "siblings": [
   *                            {
   *                                "fishtype": "shark",
   *                                "species": "predator",
   *                                "length": 20,
   *                                "age": 6,
   *                                "siblings": [
   *                                    {
   *                                        "fishtype": "salmon",
   *                                        "species": "coho",
   *                                        "length": 2,
   *                                        "age": 2,
   *                                        "location": "atlantic",
   *                                        "iswild": true,
   *                                        "siblings": [
   *                                            {
   *                                                "fishtype": "shark",
   *                                                "species": "predator",
   *                                                "length": 20,
   *                                                "age": 6
   *                                            },
   *                                            {
   *                                                "fishtype": "sawshark",
   *                                                "species": "dangerous",
   *                                                "length": 10,
   *                                                "age": 105
   *                                            }
   *                                        ]
   *                                    },
   *                                    {
   *                                        "fishtype": "sawshark",
   *                                        "species": "dangerous",
   *                                        "length": 10,
   *                                        "age": 105
   *                                    }
   *                                ]
   *                            },
   *                            {
   *                                "fishtype": "sawshark",
   *                                "species": "dangerous",
   *                                "length": 10,
   *                                "age": 105
   *                            }
   *                        ]
   *                    }
   * @param options The options parameters.
   */
  putValid(
    complexBody: FishUnion,
    options?: PolymorphicrecursivePutValidOptionalParams,
  ): Promise<void>;
}
