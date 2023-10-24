// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  CreateTranscriptionRequest,
  CreateTranscriptionResponse,
} from "../../../models/models.js";
import {
  CreateTranscription200Response,
  CreateTranscriptionDefaultResponse,
  isUnexpected,
  OpenAIContext as Client,
} from "../../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { uint8ArrayToString } from "@azure/core-util";
import { CreateTranscriptionOptions } from "../../../models/options.js";

export function _createTranscriptionSend(
  context: Client,
  audio: CreateTranscriptionRequest,
  options: CreateTranscriptionOptions = { requestOptions: {} }
): StreamableMethod<
  CreateTranscription200Response | CreateTranscriptionDefaultResponse
> {
  return context
    .path("/audio/transcriptions")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "multipart/form-data",
      body: {
        file: uint8ArrayToString(audio["file"], "base64"),
        model: audio["model"],
        prompt: audio["prompt"],
        response_format: audio["responseFormat"],
        temperature: audio["temperature"],
        language: audio["language"],
      },
    });
}

export async function _createTranscriptionDeserialize(
  result: CreateTranscription200Response | CreateTranscriptionDefaultResponse
): Promise<CreateTranscriptionResponse> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    text: result.body["text"],
  };
}

export async function createTranscription(
  context: Client,
  audio: CreateTranscriptionRequest,
  options: CreateTranscriptionOptions = { requestOptions: {} }
): Promise<CreateTranscriptionResponse> {
  const result = await _createTranscriptionSend(context, audio, options);
  return _createTranscriptionDeserialize(result);
}
