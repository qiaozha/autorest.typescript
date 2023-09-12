// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export {
  deserializeEmbeddingsOptions,
  deserializeEmbeddings,
  deserializeEmbeddingItem,
  deserializeEmbeddingsUsage,
  deserializeCompletionsOptions,
  deserializeCompletions,
  deserializePromptFilterResult,
  deserializeContentFilterResults,
  deserializeContentFilterResult,
  deserializeChoice,
  deserializeCompletionsLogProbabilityModel,
  deserializeCompletionsUsage,
  deserializeChatCompletionsOptions,
  deserializeChatMessage,
  deserializeFunctionCall,
  deserializeAzureChatExtensionsMessageContext,
  deserializeFunctionDefinition,
  deserializeFunctionName,
  deserializeAzureChatExtensionConfiguration,
  deserializeChatCompletions,
  deserializeChatChoice,
  deserializeBatchImageGenerationOperationResponse,
  deserializeImageGenerations,
  deserializeImageLocation,
  deserializeImagePayload,
  deserializeImageGenerationOptions,
} from "./deserializers.js";
export {
  createOpenAI,
  OpenAIClientOptions,
  OpenAIContext,
} from "./OpenAIContext.js";
export {
  getEmbeddings,
  getCompletions,
  getChatCompletions,
  getChatCompletionsWithAzureExtensions,
  getAzureBatchImageGenerationOperationStatus,
  beginAzureBatchImageGeneration,
} from "./operations.js";
export { serialize } from "./serializers.js";
