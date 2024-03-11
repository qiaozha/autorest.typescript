// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  AddOrUpdateTextBlocklistItemsOptions,
  TextBlocklistItem,
  AddOrUpdateTextBlocklistItemsResult,
  TextBlocklist,
  RemoveTextBlocklistItemsOptions,
  PagedTextBlocklistItem,
  PagedTextBlocklist,
} from "../models/models.js";
import { PagedAsyncIterableIterator } from "../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "./pagingHelpers.js";
import {
  isUnexpected,
  ContentSafetyContext as Client,
  AddOrUpdateBlocklistItems200Response,
  AddOrUpdateBlocklistItemsDefaultResponse,
  CreateOrUpdateTextBlocklist200Response,
  CreateOrUpdateTextBlocklist201Response,
  CreateOrUpdateTextBlocklistDefaultResponse,
  DeleteTextBlocklist204Response,
  DeleteTextBlocklistDefaultResponse,
  GetTextBlocklist200Response,
  GetTextBlocklistDefaultResponse,
  GetTextBlocklistItem200Response,
  GetTextBlocklistItemDefaultResponse,
  ListTextBlocklistItems200Response,
  ListTextBlocklistItemsDefaultResponse,
  ListTextBlocklists200Response,
  ListTextBlocklistsDefaultResponse,
  RemoveBlocklistItems204Response,
  RemoveBlocklistItemsDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  AddOrUpdateBlocklistItemsOptions,
  CreateOrUpdateTextBlocklistOptions,
  DeleteTextBlocklistOptions,
  GetTextBlocklistOptions,
  GetTextBlocklistItemOptions,
  ListTextBlocklistItemsOptions,
  ListTextBlocklistsOptions,
  RemoveBlocklistItemsOptions,
} from "../models/options.js";

export function _addOrUpdateBlocklistItemsSend(
  context: Client,
  blocklistName: string,
  body: AddOrUpdateTextBlocklistItemsOptions,
  options: AddOrUpdateBlocklistItemsOptions = { requestOptions: {} },
): StreamableMethod<
  | AddOrUpdateBlocklistItems200Response
  | AddOrUpdateBlocklistItemsDefaultResponse
> {
  return context
    .path(
      "/text/blocklists/{blocklistName}:addOrUpdateBlocklistItems",
      blocklistName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        blocklistItems: body["blocklistItems"].map((p) => ({
          description: p["description"],
          text: p["text"],
        })),
      },
    });
}

export async function _addOrUpdateBlocklistItemsDeserialize(
  result:
    | AddOrUpdateBlocklistItems200Response
    | AddOrUpdateBlocklistItemsDefaultResponse,
): Promise<AddOrUpdateTextBlocklistItemsResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    blocklistItems: result.body["blocklistItems"].map((p) => ({
      blocklistItemId: p["blocklistItemId"],
      description: p["description"],
      text: p["text"],
    })),
  };
}

/** Add or update blocklistItems to a text blocklist. You can add or update at most 100 blocklistItems in one request. */
export async function addOrUpdateBlocklistItems(
  context: Client,
  blocklistName: string,
  body: AddOrUpdateTextBlocklistItemsOptions,
  options: AddOrUpdateBlocklistItemsOptions = { requestOptions: {} },
): Promise<AddOrUpdateTextBlocklistItemsResult> {
  const result = await _addOrUpdateBlocklistItemsSend(
    context,
    blocklistName,
    body,
    options,
  );
  return _addOrUpdateBlocklistItemsDeserialize(result);
}

export function _createOrUpdateTextBlocklistSend(
  context: Client,
  blocklistName: string,
  options: TextBlocklist,
  requestOptions: CreateOrUpdateTextBlocklistOptions = { requestOptions: {} },
): StreamableMethod<
  | CreateOrUpdateTextBlocklist200Response
  | CreateOrUpdateTextBlocklist201Response
  | CreateOrUpdateTextBlocklistDefaultResponse
> {
  return context
    .path("/text/blocklists/{blocklistName}", blocklistName)
    .patch({
      ...operationOptionsToRequestParameters(requestOptions),
      contentType:
        (requestOptions.contentType as any) ?? "application/merge-patch+json",
      body: {
        blocklistName: options["blocklistName"],
        description: options["description"],
      },
    });
}

export async function _createOrUpdateTextBlocklistDeserialize(
  result:
    | CreateOrUpdateTextBlocklist200Response
    | CreateOrUpdateTextBlocklist201Response
    | CreateOrUpdateTextBlocklistDefaultResponse,
): Promise<TextBlocklist> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    blocklistName: result.body["blocklistName"],
    description: result.body["description"],
  };
}

/** Updates a text blocklist. If the blocklistName does not exist, a new blocklist will be created. */
export async function createOrUpdateTextBlocklist(
  context: Client,
  blocklistName: string,
  options: TextBlocklist,
  requestOptions: CreateOrUpdateTextBlocklistOptions = { requestOptions: {} },
): Promise<TextBlocklist> {
  const result = await _createOrUpdateTextBlocklistSend(
    context,
    blocklistName,
    options,
    requestOptions,
  );
  return _createOrUpdateTextBlocklistDeserialize(result);
}

export function _deleteTextBlocklistSend(
  context: Client,
  blocklistName: string,
  options: DeleteTextBlocklistOptions = { requestOptions: {} },
): StreamableMethod<
  DeleteTextBlocklist204Response | DeleteTextBlocklistDefaultResponse
> {
  return context
    .path("/text/blocklists/{blocklistName}", blocklistName)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteTextBlocklistDeserialize(
  result: DeleteTextBlocklist204Response | DeleteTextBlocklistDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/** Deletes a text blocklist. */
export async function deleteTextBlocklist(
  context: Client,
  blocklistName: string,
  options: DeleteTextBlocklistOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _deleteTextBlocklistSend(
    context,
    blocklistName,
    options,
  );
  return _deleteTextBlocklistDeserialize(result);
}

export function _getTextBlocklistSend(
  context: Client,
  blocklistName: string,
  options: GetTextBlocklistOptions = { requestOptions: {} },
): StreamableMethod<
  GetTextBlocklist200Response | GetTextBlocklistDefaultResponse
> {
  return context
    .path("/text/blocklists/{blocklistName}", blocklistName)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getTextBlocklistDeserialize(
  result: GetTextBlocklist200Response | GetTextBlocklistDefaultResponse,
): Promise<TextBlocklist> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    blocklistName: result.body["blocklistName"],
    description: result.body["description"],
  };
}

/** Returns text blocklist details. */
export async function getTextBlocklist(
  context: Client,
  blocklistName: string,
  options: GetTextBlocklistOptions = { requestOptions: {} },
): Promise<TextBlocklist> {
  const result = await _getTextBlocklistSend(context, blocklistName, options);
  return _getTextBlocklistDeserialize(result);
}

export function _getTextBlocklistItemSend(
  context: Client,
  blocklistName: string,
  blocklistItemId: string,
  options: GetTextBlocklistItemOptions = { requestOptions: {} },
): StreamableMethod<
  GetTextBlocklistItem200Response | GetTextBlocklistItemDefaultResponse
> {
  return context
    .path(
      "/text/blocklists/{blocklistName}/blocklistItems/{blocklistItemId}",
      blocklistName,
      blocklistItemId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getTextBlocklistItemDeserialize(
  result: GetTextBlocklistItem200Response | GetTextBlocklistItemDefaultResponse,
): Promise<TextBlocklistItem> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    blocklistItemId: result.body["blocklistItemId"],
    description: result.body["description"],
    text: result.body["text"],
  };
}

/** Get blocklistItem by blocklistName and blocklistItemId from a text blocklist. */
export async function getTextBlocklistItem(
  context: Client,
  blocklistName: string,
  blocklistItemId: string,
  options: GetTextBlocklistItemOptions = { requestOptions: {} },
): Promise<TextBlocklistItem> {
  const result = await _getTextBlocklistItemSend(
    context,
    blocklistName,
    blocklistItemId,
    options,
  );
  return _getTextBlocklistItemDeserialize(result);
}

export function _listTextBlocklistItemsSend(
  context: Client,
  blocklistName: string,
  options: ListTextBlocklistItemsOptions = { requestOptions: {} },
): StreamableMethod<
  ListTextBlocklistItems200Response | ListTextBlocklistItemsDefaultResponse
> {
  return context
    .path("/text/blocklists/{blocklistName}/blocklistItems", blocklistName)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        top: options?.top,
        skip: options?.skip,
        maxpagesize: options?.maxpagesize,
      },
    });
}

export async function _listTextBlocklistItemsDeserialize(
  result:
    | ListTextBlocklistItems200Response
    | ListTextBlocklistItemsDefaultResponse,
): Promise<PagedTextBlocklistItem> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      blocklistItemId: p["blocklistItemId"],
      description: p["description"],
      text: p["text"],
    })),
    nextLink: result.body["nextLink"],
  };
}

/** Get all blocklistItems in a text blocklist. */
export function listTextBlocklistItems(
  context: Client,
  blocklistName: string,
  options: ListTextBlocklistItemsOptions = { requestOptions: {} },
): PagedAsyncIterableIterator<TextBlocklistItem> {
  return buildPagedAsyncIterator(
    context,
    () => _listTextBlocklistItemsSend(context, blocklistName, options),
    _listTextBlocklistItemsDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _listTextBlocklistsSend(
  context: Client,
  options: ListTextBlocklistsOptions = { requestOptions: {} },
): StreamableMethod<
  ListTextBlocklists200Response | ListTextBlocklistsDefaultResponse
> {
  return context
    .path("/text/blocklists")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listTextBlocklistsDeserialize(
  result: ListTextBlocklists200Response | ListTextBlocklistsDefaultResponse,
): Promise<PagedTextBlocklist> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      blocklistName: p["blocklistName"],
      description: p["description"],
    })),
    nextLink: result.body["nextLink"],
  };
}

/** Get all text blocklists details. */
export function listTextBlocklists(
  context: Client,
  options: ListTextBlocklistsOptions = { requestOptions: {} },
): PagedAsyncIterableIterator<TextBlocklist> {
  return buildPagedAsyncIterator(
    context,
    () => _listTextBlocklistsSend(context, options),
    _listTextBlocklistsDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _removeBlocklistItemsSend(
  context: Client,
  blocklistName: string,
  body: RemoveTextBlocklistItemsOptions,
  options: RemoveBlocklistItemsOptions = { requestOptions: {} },
): StreamableMethod<
  RemoveBlocklistItems204Response | RemoveBlocklistItemsDefaultResponse
> {
  return context
    .path(
      "/text/blocklists/{blocklistName}:removeBlocklistItems",
      blocklistName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { blocklistItemIds: body["blocklistItemIds"] },
    });
}

export async function _removeBlocklistItemsDeserialize(
  result: RemoveBlocklistItems204Response | RemoveBlocklistItemsDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/** Remove blocklistItems from a text blocklist. You can remove at most 100 BlocklistItems in one request. */
export async function removeBlocklistItems(
  context: Client,
  blocklistName: string,
  body: RemoveTextBlocklistItemsOptions,
  options: RemoveBlocklistItemsOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _removeBlocklistItemsSend(
    context,
    blocklistName,
    body,
    options,
  );
  return _removeBlocklistItemsDeserialize(result);
}
