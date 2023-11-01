// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  Base64204Response,
  Base64url204Response,
  BytesContext as Client,
  CustomContentType204Response,
  Default204Response,
  OctetStream204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { uint8ArrayToString } from "@azure/core-util";
import {
  RequestBodyRequestBodyDefaultOptions,
  RequestBodyRequestBodyOctetStreamOptions,
  RequestBodyRequestBodyCustomContentTypeOptions,
  RequestBodyRequestBodyBase64Options,
  RequestBodyRequestBodyBase64urlOptions,
} from "../../models/options.js";

export function _requestBodyDefaultSend(
  context: Client,
  value: Uint8Array,
  options: RequestBodyRequestBodyDefaultOptions = { requestOptions: {} }
): StreamableMethod<Default204Response> {
  return context
    .path("/encode/bytes/body/request/default")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: uint8ArrayToString(value, "base64"),
    });
}

export async function _requestBodyDefaultDeserialize(
  result: Default204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function requestBodyDefault(
  context: Client,
  value: Uint8Array,
  options: RequestBodyRequestBodyDefaultOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _requestBodyDefaultSend(context, value, options);
  return _requestBodyDefaultDeserialize(result);
}

export function _requestBodyOctetStreamSend(
  context: Client,
  value: Uint8Array,
  options: RequestBodyRequestBodyOctetStreamOptions = { requestOptions: {} }
): StreamableMethod<OctetStream204Response> {
  return context
    .path("/encode/bytes/body/request/octet-stream")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "application/octet-stream",
      body: value,
    });
}

export async function _requestBodyOctetStreamDeserialize(
  result: OctetStream204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function requestBodyOctetStream(
  context: Client,
  value: Uint8Array,
  options: RequestBodyRequestBodyOctetStreamOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _requestBodyOctetStreamSend(context, value, options);
  return _requestBodyOctetStreamDeserialize(result);
}

export function _requestBodyCustomContentTypeSend(
  context: Client,
  value: Uint8Array,
  options: RequestBodyRequestBodyCustomContentTypeOptions = {
    requestOptions: {},
  }
): StreamableMethod<CustomContentType204Response> {
  return context
    .path("/encode/bytes/body/request/custom-content-type")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "image/png",
      body: value,
    });
}

export async function _requestBodyCustomContentTypeDeserialize(
  result: CustomContentType204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function requestBodyCustomContentType(
  context: Client,
  value: Uint8Array,
  options: RequestBodyRequestBodyCustomContentTypeOptions = {
    requestOptions: {},
  }
): Promise<void> {
  const result = await _requestBodyCustomContentTypeSend(
    context,
    value,
    options
  );
  return _requestBodyCustomContentTypeDeserialize(result);
}

export function _requestBodyBase64Send(
  context: Client,
  value: Uint8Array,
  options: RequestBodyRequestBodyBase64Options = { requestOptions: {} }
): StreamableMethod<Base64204Response> {
  return context
    .path("/encode/bytes/body/request/base64")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: uint8ArrayToString(value, "base64"),
    });
}

export async function _requestBodyBase64Deserialize(
  result: Base64204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function requestBodyBase64(
  context: Client,
  value: Uint8Array,
  options: RequestBodyRequestBodyBase64Options = { requestOptions: {} }
): Promise<void> {
  const result = await _requestBodyBase64Send(context, value, options);
  return _requestBodyBase64Deserialize(result);
}

export function _requestBodyBase64urlSend(
  context: Client,
  value: Uint8Array,
  options: RequestBodyRequestBodyBase64urlOptions = { requestOptions: {} }
): StreamableMethod<Base64url204Response> {
  return context
    .path("/encode/bytes/body/request/base64url")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: uint8ArrayToString(value, "base64"),
    });
}

export async function _requestBodyBase64urlDeserialize(
  result: Base64url204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function requestBodyBase64url(
  context: Client,
  value: Uint8Array,
  options: RequestBodyRequestBodyBase64urlOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _requestBodyBase64urlSend(context, value, options);
  return _requestBodyBase64urlDeserialize(result);
}
