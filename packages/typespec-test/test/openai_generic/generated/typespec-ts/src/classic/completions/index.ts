// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { completionsCreate } from "../../api/completions/index.js";
import { OpenAIContext } from "../../api/OpenAIContext.js";
import {
  CreateCompletionRequest,
  CreateCompletionResponse,
} from "../../models/models.js";
import { CompletionsCreateOptions } from "../../models/options.js";

export interface CompletionsOperations {
  completions: {
    create: (
      body: CreateCompletionRequest,
      options?: CompletionsCreateOptions
    ) => Promise<CreateCompletionResponse>;
  };
}

export function getCompletions(context: OpenAIContext) {
  return {
    create: (
      body: CreateCompletionRequest,
      options?: CompletionsCreateOptions
    ) => completionsCreate(context, body, options),
  };
}

export function getCompletionsOperations(
  context: OpenAIContext
): CompletionsOperations {
  return {
    completions: getCompletions(context),
  };
}