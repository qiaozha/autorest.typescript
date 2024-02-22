// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientModel, TSModel } from "../../models/models.js";
import {
  ModelClient204Response,
  ModelLanguage204Response,
  NameAndEncodedNameClientContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  ModelClientOptions,
  ModelLanguageOptions,
} from "../../models/options.js";

export function _clientSend(
  context: Client,
  body: ClientModel,
  options: ModelClientOptions = { requestOptions: {} },
): StreamableMethod<ModelClient204Response> {
  return context
    .path("/projection/client-name-and-encoded-name/model/client")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { defaultName: body["defaultName"] },
    });
}

export async function _clientDeserialize(
  result: ModelClient204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function client(
  context: Client,
  body: ClientModel,
  options: ModelClientOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _clientSend(context, body, options);
  return _clientDeserialize(result);
}

export function _languageSend(
  context: Client,
  body: TSModel,
  options: ModelLanguageOptions = { requestOptions: {} },
): StreamableMethod<ModelLanguage204Response> {
  return context
    .path("/projection/client-name-and-encoded-name/model/language")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { defaultName: body["defaultName"] },
    });
}

export async function _languageDeserialize(
  result: ModelLanguage204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function language(
  context: Client,
  body: TSModel,
  options: ModelLanguageOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _languageSend(context, body, options);
  return _languageDeserialize(result);
}
