// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  download,
  DownloadOptionalParams,
  createStorage,
  StorageContext,
  StorageClientOptionalParams,
} from "./api/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";

export { StorageClientOptionalParams } from "./api/storageContext.js";

export class StorageClient {
  private _client: StorageContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;
  private accountName: string;

  constructor(
    endpointParam: string,
    accountName: string,
    options: StorageClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createStorage(endpointParam, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.accountName = accountName;
  }

  download(
    options: DownloadOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return download(this._client, this.accountName, options);
  }
}
