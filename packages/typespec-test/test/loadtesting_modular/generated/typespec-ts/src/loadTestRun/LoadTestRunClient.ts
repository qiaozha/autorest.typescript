// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import {
  getCustomizedOperations,
  CustomizedOperations,
} from "./classic/customized/index.js";
import {
  createLoadTestRun,
  LoadTestRunClientOptions,
  AzureLoadTestingContext,
} from "./api/index.js";

export { LoadTestRunClientOptions } from "./api/LoadTestRunContext.js";

export class LoadTestRunClient {
  private _client: AzureLoadTestingContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpoint: string,
    credential: TokenCredential,
    options: LoadTestRunClientOptions = {}
  ) {
    this._client = createLoadTestRun(endpoint, credential, options);
    this.pipeline = this._client.pipeline;
    this.customized = getCustomizedOperations(this._client);
  }

  /** The operation groups for CustomizedTestRunOperations */
  public readonly customized: CustomizedOperations;
}
