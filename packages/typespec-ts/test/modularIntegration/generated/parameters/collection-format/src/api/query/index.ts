// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  buildMultiCollection,
  buildPipeCollection,
  buildSsvCollection,
  buildTsvCollection,
  CollectionFormatContext as Client,
  Csv204Response,
  Multi204Response,
  Pipes204Response,
  Ssv204Response,
  Tsv204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import {
  QueryQueryMultiOptions,
  QueryQuerySsvOptions,
  QueryQueryTsvOptions,
  QueryQueryPipesOptions,
  QueryQueryCsvOptions,
} from "../../models/options.js";

export function _queryMultiSend(
  context: Client,
  colors: string[],
  options: QueryQueryMultiOptions = { requestOptions: {} }
): StreamableMethod<Multi204Response> {
  return context
    .path("/parameters/collection-format/query/multi")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { colors: buildMultiCollection(colors, "colors") },
    });
}

export async function _queryMultiDeserialize(
  result: Multi204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function queryMulti(
  context: Client,
  colors: string[],
  options: QueryQueryMultiOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _queryMultiSend(context, colors, options);
  return _queryMultiDeserialize(result);
}

export function _querySsvSend(
  context: Client,
  colors: string[],
  options: QueryQuerySsvOptions = { requestOptions: {} }
): StreamableMethod<Ssv204Response> {
  return context
    .path("/parameters/collection-format/query/ssv")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { colors: buildSsvCollection(colors) },
    });
}

export async function _querySsvDeserialize(
  result: Ssv204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function querySsv(
  context: Client,
  colors: string[],
  options: QueryQuerySsvOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _querySsvSend(context, colors, options);
  return _querySsvDeserialize(result);
}

export function _queryTsvSend(
  context: Client,
  colors: string[],
  options: QueryQueryTsvOptions = { requestOptions: {} }
): StreamableMethod<Tsv204Response> {
  return context
    .path("/parameters/collection-format/query/tsv")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { colors: buildTsvCollection(colors) },
    });
}

export async function _queryTsvDeserialize(
  result: Tsv204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function queryTsv(
  context: Client,
  colors: string[],
  options: QueryQueryTsvOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _queryTsvSend(context, colors, options);
  return _queryTsvDeserialize(result);
}

export function _queryPipesSend(
  context: Client,
  colors: string[],
  options: QueryQueryPipesOptions = { requestOptions: {} }
): StreamableMethod<Pipes204Response> {
  return context
    .path("/parameters/collection-format/query/pipes")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { colors: buildPipeCollection(colors) },
    });
}

export async function _queryPipesDeserialize(
  result: Pipes204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function queryPipes(
  context: Client,
  colors: string[],
  options: QueryQueryPipesOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _queryPipesSend(context, colors, options);
  return _queryPipesDeserialize(result);
}

export function _queryCsvSend(
  context: Client,
  colors: string[],
  options: QueryQueryCsvOptions = { requestOptions: {} }
): StreamableMethod<Csv204Response> {
  return context
    .path("/parameters/collection-format/query/csv")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { colors: colors },
    });
}

export async function _queryCsvDeserialize(
  result: Csv204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function queryCsv(
  context: Client,
  colors: string[],
  options: QueryQueryCsvOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _queryCsvSend(context, colors, options);
  return _queryCsvDeserialize(result);
}
