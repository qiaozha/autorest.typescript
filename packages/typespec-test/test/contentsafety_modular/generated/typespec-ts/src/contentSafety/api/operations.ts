// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  AnalyzeTextOptions,
  AnalyzeTextResult,
  AnalyzeImageOptions,
  AnalyzeImageResult,
  AnalyzeTextJailbreakOptions,
  AnalyzeTextJailbreakResult,
  AnalyzeTextProtectedMaterialOptions,
  AnalyzeTextProtectedMaterialResult,
} from "../models/models.js";
import {
  isUnexpected,
  ContentSafetyContext as Client,
  AnalyzeImage200Response,
  AnalyzeImageDefaultResponse,
  AnalyzeText200Response,
  AnalyzeTextDefaultResponse,
  DetectTextJailbreak200Response,
  DetectTextJailbreakDefaultResponse,
  DetectTextProtectedMaterial200Response,
  DetectTextProtectedMaterialDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { uint8ArrayToString } from "@azure/core-util";
import {
  AnalyzeTextRequestOptions,
  AnalyzeImageRequestOptions,
  DetectTextJailbreakOptions,
  DetectTextProtectedMaterialOptions,
} from "../models/options.js";

export function _analyzeTextSend(
  context: Client,
  body: AnalyzeTextOptions,
  options: AnalyzeTextRequestOptions = { requestOptions: {} },
): StreamableMethod<AnalyzeText200Response | AnalyzeTextDefaultResponse> {
  return context
    .path("/text:analyze")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        text: body["text"],
        categories: body["categories"],
        blocklistNames: body["blocklistNames"],
        haltOnBlocklistHit: body["haltOnBlocklistHit"],
        outputType: body["outputType"],
      },
    });
}

export async function _analyzeTextDeserialize(
  result: AnalyzeText200Response | AnalyzeTextDefaultResponse,
): Promise<AnalyzeTextResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    blocklistsMatch:
      result.body["blocklistsMatch"] === undefined
        ? result.body["blocklistsMatch"]
        : result.body["blocklistsMatch"].map((p) => ({
            blocklistName: p["blocklistName"],
            blocklistItemId: p["blocklistItemId"],
            blocklistItemText: p["blocklistItemText"],
          })),
    categoriesAnalysis: result.body["categoriesAnalysis"].map((p) => ({
      category: p["category"],
      severity: p["severity"],
    })),
  };
}

/** A synchronous API for the analysis of potentially harmful text content. Currently, it supports four categories: Hate, SelfHarm, Sexual, and Violence. */
export async function analyzeText(
  context: Client,
  body: AnalyzeTextOptions,
  options: AnalyzeTextRequestOptions = { requestOptions: {} },
): Promise<AnalyzeTextResult> {
  const result = await _analyzeTextSend(context, body, options);
  return _analyzeTextDeserialize(result);
}

export function _analyzeImageSend(
  context: Client,
  body: AnalyzeImageOptions,
  options: AnalyzeImageRequestOptions = { requestOptions: {} },
): StreamableMethod<AnalyzeImage200Response | AnalyzeImageDefaultResponse> {
  return context
    .path("/image:analyze")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        image: {
          content:
            body.image["content"] !== undefined
              ? uint8ArrayToString(body.image["content"], "base64")
              : undefined,
          blobUrl: body.image["blobUrl"],
        },
        categories: body["categories"],
        outputType: body["outputType"],
      },
    });
}

export async function _analyzeImageDeserialize(
  result: AnalyzeImage200Response | AnalyzeImageDefaultResponse,
): Promise<AnalyzeImageResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    categoriesAnalysis: result.body["categoriesAnalysis"].map((p) => ({
      category: p["category"],
      severity: p["severity"],
    })),
  };
}

/** A synchronous API for the analysis of potentially harmful image content. Currently, it supports four categories: Hate, SelfHarm, Sexual, and Violence. */
export async function analyzeImage(
  context: Client,
  body: AnalyzeImageOptions,
  options: AnalyzeImageRequestOptions = { requestOptions: {} },
): Promise<AnalyzeImageResult> {
  const result = await _analyzeImageSend(context, body, options);
  return _analyzeImageDeserialize(result);
}

export function _detectTextJailbreakSend(
  context: Client,
  body: AnalyzeTextJailbreakOptions,
  options: DetectTextJailbreakOptions = { requestOptions: {} },
): StreamableMethod<
  DetectTextJailbreak200Response | DetectTextJailbreakDefaultResponse
> {
  return context
    .path("/text:detectJailbreak")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { text: body["text"] },
    });
}

export async function _detectTextJailbreakDeserialize(
  result: DetectTextJailbreak200Response | DetectTextJailbreakDefaultResponse,
): Promise<AnalyzeTextJailbreakResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    jailbreakAnalysis: { detected: result.body.jailbreakAnalysis["detected"] },
  };
}

/** A synchronous API for the analysis of text jailbreak. */
export async function detectTextJailbreak(
  context: Client,
  body: AnalyzeTextJailbreakOptions,
  options: DetectTextJailbreakOptions = { requestOptions: {} },
): Promise<AnalyzeTextJailbreakResult> {
  const result = await _detectTextJailbreakSend(context, body, options);
  return _detectTextJailbreakDeserialize(result);
}

export function _detectTextProtectedMaterialSend(
  context: Client,
  body: AnalyzeTextProtectedMaterialOptions,
  options: DetectTextProtectedMaterialOptions = { requestOptions: {} },
): StreamableMethod<
  | DetectTextProtectedMaterial200Response
  | DetectTextProtectedMaterialDefaultResponse
> {
  return context
    .path("/text:detectProtectedMaterial")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { text: body["text"] },
    });
}

export async function _detectTextProtectedMaterialDeserialize(
  result:
    | DetectTextProtectedMaterial200Response
    | DetectTextProtectedMaterialDefaultResponse,
): Promise<AnalyzeTextProtectedMaterialResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    protectedMaterialAnalysis: {
      detected: result.body.protectedMaterialAnalysis["detected"],
    },
  };
}

/** A synchronous API for the analysis of protected material. */
export async function detectTextProtectedMaterial(
  context: Client,
  body: AnalyzeTextProtectedMaterialOptions,
  options: DetectTextProtectedMaterialOptions = { requestOptions: {} },
): Promise<AnalyzeTextProtectedMaterialResult> {
  const result = await _detectTextProtectedMaterialSend(context, body, options);
  return _detectTextProtectedMaterialDeserialize(result);
}
