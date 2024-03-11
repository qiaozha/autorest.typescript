// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential, KeyCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import {
  AddOrUpdateTextBlocklistItemsOptions,
  TextBlocklistItem,
  AddOrUpdateTextBlocklistItemsResult,
  TextBlocklist,
  RemoveTextBlocklistItemsOptions,
} from "./models/models.js";
import {
  AddOrUpdateBlocklistItemsOptions,
  CreateOrUpdateTextBlocklistOptions,
  DeleteTextBlocklistOptions,
  GetTextBlocklistOptions,
  GetTextBlocklistItemOptions,
  ListTextBlocklistItemsOptions,
  ListTextBlocklistsOptions,
  RemoveBlocklistItemsOptions,
} from "./models/options.js";
import { PagedAsyncIterableIterator } from "./models/pagingTypes.js";
import {
  createBlocklist,
  BlocklistClientOptions,
  ContentSafetyContext,
  addOrUpdateBlocklistItems,
  createOrUpdateTextBlocklist,
  deleteTextBlocklist,
  getTextBlocklist,
  getTextBlocklistItem,
  listTextBlocklistItems,
  listTextBlocklists,
  removeBlocklistItems,
} from "./api/index.js";

export { BlocklistClientOptions } from "./api/BlocklistContext.js";

export class BlocklistClient {
  private _client: ContentSafetyContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpoint: string,
    credential: KeyCredential | TokenCredential,
    options: BlocklistClientOptions = {},
  ) {
    this._client = createBlocklist(endpoint, credential, options);
    this.pipeline = this._client.pipeline;
  }

  /** Add or update blocklistItems to a text blocklist. You can add or update at most 100 blocklistItems in one request. */
  addOrUpdateBlocklistItems(
    blocklistName: string,
    body: AddOrUpdateTextBlocklistItemsOptions,
    options: AddOrUpdateBlocklistItemsOptions = { requestOptions: {} },
  ): Promise<AddOrUpdateTextBlocklistItemsResult> {
    return addOrUpdateBlocklistItems(
      this._client,
      blocklistName,
      body,
      options,
    );
  }

  /** Updates a text blocklist. If the blocklistName does not exist, a new blocklist will be created. */
  createOrUpdateTextBlocklist(
    blocklistName: string,
    options: TextBlocklist,
    requestOptions: CreateOrUpdateTextBlocklistOptions = { requestOptions: {} },
  ): Promise<TextBlocklist> {
    return createOrUpdateTextBlocklist(
      this._client,
      blocklistName,
      options,
      requestOptions,
    );
  }

  /** Deletes a text blocklist. */
  deleteTextBlocklist(
    blocklistName: string,
    options: DeleteTextBlocklistOptions = { requestOptions: {} },
  ): Promise<void> {
    return deleteTextBlocklist(this._client, blocklistName, options);
  }

  /** Returns text blocklist details. */
  getTextBlocklist(
    blocklistName: string,
    options: GetTextBlocklistOptions = { requestOptions: {} },
  ): Promise<TextBlocklist> {
    return getTextBlocklist(this._client, blocklistName, options);
  }

  /** Get blocklistItem by blocklistName and blocklistItemId from a text blocklist. */
  getTextBlocklistItem(
    blocklistName: string,
    blocklistItemId: string,
    options: GetTextBlocklistItemOptions = { requestOptions: {} },
  ): Promise<TextBlocklistItem> {
    return getTextBlocklistItem(
      this._client,
      blocklistName,
      blocklistItemId,
      options,
    );
  }

  /** Get all blocklistItems in a text blocklist. */
  listTextBlocklistItems(
    blocklistName: string,
    options: ListTextBlocklistItemsOptions = { requestOptions: {} },
  ): PagedAsyncIterableIterator<TextBlocklistItem> {
    return listTextBlocklistItems(this._client, blocklistName, options);
  }

  /** Get all text blocklists details. */
  listTextBlocklists(
    options: ListTextBlocklistsOptions = { requestOptions: {} },
  ): PagedAsyncIterableIterator<TextBlocklist> {
    return listTextBlocklists(this._client, options);
  }

  /** Remove blocklistItems from a text blocklist. You can remove at most 100 BlocklistItems in one request. */
  removeBlocklistItems(
    blocklistName: string,
    body: RemoveTextBlocklistItemsOptions,
    options: RemoveBlocklistItemsOptions = { requestOptions: {} },
  ): Promise<void> {
    return removeBlocklistItems(this._client, blocklistName, body, options);
  }
}
