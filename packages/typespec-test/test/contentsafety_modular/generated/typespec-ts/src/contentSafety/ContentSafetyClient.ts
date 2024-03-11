// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential, KeyCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import {
  AnalyzeTextOptions,
  AnalyzeTextResult,
  AnalyzeImageOptions,
  AnalyzeImageResult,
  AnalyzeTextJailbreakOptions,
  AnalyzeTextJailbreakResult,
  AnalyzeTextProtectedMaterialOptions,
  AnalyzeTextProtectedMaterialResult,
} from "./models/models.js";
import {
  AnalyzeTextRequestOptions,
  AnalyzeImageRequestOptions,
  DetectTextJailbreakOptions,
  DetectTextProtectedMaterialOptions,
} from "./models/options.js";
import {
  createContentSafety,
  ContentSafetyClientOptions,
  ContentSafetyContext,
  analyzeText,
  analyzeImage,
  detectTextJailbreak,
  detectTextProtectedMaterial,
} from "./api/index.js";

export { ContentSafetyClientOptions } from "./api/ContentSafetyContext.js";

export class ContentSafetyClient {
  private _client: ContentSafetyContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpoint: string,
    credential: KeyCredential | TokenCredential,
    options: ContentSafetyClientOptions = {},
  ) {
    this._client = createContentSafety(endpoint, credential, options);
    this.pipeline = this._client.pipeline;
  }

  /** A synchronous API for the analysis of potentially harmful text content. Currently, it supports four categories: Hate, SelfHarm, Sexual, and Violence. */
  analyzeText(
    body: AnalyzeTextOptions,
    options: AnalyzeTextRequestOptions = { requestOptions: {} },
  ): Promise<AnalyzeTextResult> {
    return analyzeText(this._client, body, options);
  }

  /** A synchronous API for the analysis of potentially harmful image content. Currently, it supports four categories: Hate, SelfHarm, Sexual, and Violence. */
  analyzeImage(
    body: AnalyzeImageOptions,
    options: AnalyzeImageRequestOptions = { requestOptions: {} },
  ): Promise<AnalyzeImageResult> {
    return analyzeImage(this._client, body, options);
  }

  /** A synchronous API for the analysis of text jailbreak. */
  detectTextJailbreak(
    body: AnalyzeTextJailbreakOptions,
    options: DetectTextJailbreakOptions = { requestOptions: {} },
  ): Promise<AnalyzeTextJailbreakResult> {
    return detectTextJailbreak(this._client, body, options);
  }

  /** A synchronous API for the analysis of protected material. */
  detectTextProtectedMaterial(
    body: AnalyzeTextProtectedMaterialOptions,
    options: DetectTextProtectedMaterialOptions = { requestOptions: {} },
  ): Promise<AnalyzeTextProtectedMaterialResult> {
    return detectTextProtectedMaterial(this._client, body, options);
  }
}
