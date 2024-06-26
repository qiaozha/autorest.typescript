// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { User, UserActionParam, UserActionResponse } from "./models/models.js";
import {
  SmokeTestOptionalParams,
  RepeatableActionOptionalParams,
} from "./models/options.js";
import {
  smokeTest,
  repeatableAction,
  createTraits,
  TraitsClientOptions,
  TraitsContext,
} from "./api/index.js";

export { TraitsClientOptions } from "./api/traitsContext.js";

export class TraitsClient {
  private _client: TraitsContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Illustrates Azure Core operation customizations by traits */
  constructor(options: TraitsClientOptions = {}) {
    this._client = createTraits(options);
    this.pipeline = this._client.pipeline;
  }

  /** Get a resource, sending and receiving headers. */
  smokeTest(
    id: number,
    foo: string,
    options: SmokeTestOptionalParams = { requestOptions: {} },
  ): Promise<User> {
    return smokeTest(this._client, id, foo, options);
  }

  /** Test for repeatable requests */
  repeatableAction(
    id: number,
    body: UserActionParam,
    options: RepeatableActionOptionalParams = { requestOptions: {} },
  ): Promise<UserActionResponse> {
    return repeatableAction(this._client, id, body, options);
  }
}
