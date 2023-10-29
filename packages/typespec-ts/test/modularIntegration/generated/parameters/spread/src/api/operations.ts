// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  BodyParameter,
  SpreadAsRequestBody204Response,
  SpreadAsRequestParameter204Response,
  SpreadContext as Client,
  SpreadWithMultipleParameters204Response,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import {
  SpreadAsRequestBodyOptions,
  SpreadAsRequestParameterOptions,
  SpreadWithMultipleParametersOptions,
} from "../models/options.js";

export function _spreadAsRequestBodySend(
  context: Client,
  body: BodyParameter,
  options: SpreadAsRequestBodyOptions = { requestOptions: {} }
): StreamableMethod<SpreadAsRequestBody204Response> {
  return context
    .path("/parameters/spread/model/request-body")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _spreadAsRequestBodyDeserialize(
  result: SpreadAsRequestBody204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function spreadAsRequestBody(
  context: Client,
  body: BodyParameter,
  options: SpreadAsRequestBodyOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _spreadAsRequestBodySend(context, body, options);
  return _spreadAsRequestBodyDeserialize(result);
}

export function _spreadAsRequestBodySend(
  context: Client,
  name: string,
  options: SpreadAsRequestBodyOptions = { requestOptions: {} }
): StreamableMethod<SpreadAsRequestBody204Response> {
  return context
    .path("/parameters/spread/alias/request-body")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { name: name },
    });
}

export async function _spreadAsRequestBodyDeserialize(
  result: SpreadAsRequestBody204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function spreadAsRequestBody(
  context: Client,
  name: string,
  options: SpreadAsRequestBodyOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _spreadAsRequestBodySend(context, name, options);
  return _spreadAsRequestBodyDeserialize(result);
}

export function _spreadAsRequestParameterSend(
  context: Client,
  id: string,
  xMsTestHeader: string,
  name: string,
  options: SpreadAsRequestParameterOptions = { requestOptions: {} }
): StreamableMethod<SpreadAsRequestParameter204Response> {
  return context
    .path("/parameters/spread/alias/request-parameter/{id}", id)
    .put({
      ...operationOptionsToRequestParameters(options),
      headers: { "x-ms-test-header": xMsTestHeader },
      body: { name: name },
    });
}

export async function _spreadAsRequestParameterDeserialize(
  result: SpreadAsRequestParameter204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function spreadAsRequestParameter(
  context: Client,
  id: string,
  xMsTestHeader: string,
  name: string,
  options: SpreadAsRequestParameterOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _spreadAsRequestParameterSend(
    context,
    id,
    xMsTestHeader,
    name,
    options
  );
  return _spreadAsRequestParameterDeserialize(result);
}

export function _spreadWithMultipleParametersSend(
  context: Client,
  id: string,
  xMsTestHeader: string,
  prop1: string,
  prop2: string,
  prop3: string,
  prop4: string,
  prop5: string,
  prop6: string,
  options: SpreadWithMultipleParametersOptions = { requestOptions: {} }
): StreamableMethod<SpreadWithMultipleParameters204Response> {
  return context
    .path("/parameters/spread/alias/multiple-parameters/{id}", id)
    .put({
      ...operationOptionsToRequestParameters(options),
      headers: { "x-ms-test-header": xMsTestHeader },
      body: {
        prop1: prop1,
        prop2: prop2,
        prop3: prop3,
        prop4: prop4,
        prop5: prop5,
        prop6: prop6,
      },
    });
}

export async function _spreadWithMultipleParametersDeserialize(
  result: SpreadWithMultipleParameters204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function spreadWithMultipleParameters(
  context: Client,
  id: string,
  xMsTestHeader: string,
  prop1: string,
  prop2: string,
  prop3: string,
  prop4: string,
  prop5: string,
  prop6: string,
  options: SpreadWithMultipleParametersOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _spreadWithMultipleParametersSend(
    context,
    id,
    xMsTestHeader,
    prop1,
    prop2,
    prop3,
    prop4,
    prop5,
    prop6,
    options
  );
  return _spreadWithMultipleParametersDeserialize(result);
}
