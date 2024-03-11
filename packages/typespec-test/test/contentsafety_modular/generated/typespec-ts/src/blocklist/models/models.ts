// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Text analyze category. */
/** "Hate", "SelfHarm", "Sexual", "Violence" */
export type TextCategory = string;
/** The type of text analysis output. */
/** "FourSeverityLevels", "EightSeverityLevels" */
export type AnalyzeTextOutputType = string;

/** The result of blocklist match. */
export interface TextBlocklistMatch {
  /** The name of the matched blocklist. */
  blocklistName: string;
  /** The ID of the matched item. */
  blocklistItemId: string;
  /** The content of the matched item. */
  blocklistItemText: string;
}

/** Text analysis result. */
export interface TextCategoriesAnalysis {
  /** The text analysis category. */
  category: TextCategory;
  /** The value increases with the severity of the input content. The value of this field is determined by the output type specified in the request. The output type could be ‘FourSeverityLevels’ or ‘EightSeverity Levels’, and the output value can be 0, 2, 4, 6 or 0, 1, 2, 3, 4, 5, 6, or 7. */
  severity?: number;
}

/** The image can be either base64 encoded bytes or a blob URL. You can choose only one of these options. If both are provided, the request will be refused. The maximum image size is 2048 x 2048 pixels and should not exceed 4 MB, while the minimum image size is 50 x 50 pixels. */
export interface ImageData {
  /** The Base64 encoding of the image. */
  content?: Uint8Array;
  /** The blob url of the image. */
  blobUrl?: string;
}

/** Image analyze category. */
/** "Hate", "SelfHarm", "Sexual", "Violence" */
export type ImageCategory = string;
/** The type of image analysis output. */
/** "FourSeverityLevels" */
export type AnalyzeImageOutputType = string;

/** Image analysis result. */
export interface ImageCategoriesAnalysis {
  /** The image analysis category. */
  category: ImageCategory;
  /** The value increases with the severity of the input content. The value of this field is determined by the output type specified in the request. The output type could be ‘FourSeverityLevels’, and the output value can be 0, 2, 4, 6. */
  severity?: number;
}

/** The text jailbreak analysis response. */
export interface JailbreakAnalysisResult {
  /** Analysis result for jailbreak. */
  detected: boolean;
}

/** The text protected material analysis response. */
export interface ProtectedMaterialAnalysisResult {
  /** Analysis result for protected material.. */
  detected: boolean;
}

/** The request to add blocklistItems to a text blocklist. */
export interface AddOrUpdateTextBlocklistItemsOptions {
  /** Array of blocklistItems to add. */
  blocklistItems: TextBlocklistItem[];
}

/** Item in a TextBlocklist. */
export interface TextBlocklistItem {
  /** The service will generate a BlocklistItemId, which will be a UUID. */
  readonly blocklistItemId: string;
  /** BlocklistItem description. */
  description?: string;
  /** BlocklistItem content. */
  text: string;
}

/** The response of adding blocklistItems to the text blocklist. */
export interface AddOrUpdateTextBlocklistItemsResult {
  /** Array of blocklistItems have been added. */
  blocklistItems: TextBlocklistItem[];
}

/** Text Blocklist. */
export interface TextBlocklist {
  /** Text blocklist name. */
  blocklistName: string;
  /** Text blocklist description. */
  description?: string;
}

/** The request to remove blocklistItems from a text blocklist. */
export interface RemoveTextBlocklistItemsOptions {
  /** Array of blocklistItemIds to remove. */
  blocklistItemIds: string[];
}

/** Paged collection of TextBlocklistItem items */
export interface PagedTextBlocklistItem {
  /** The TextBlocklistItem items on this page */
  value: TextBlocklistItem[];
  /** The link to the next page of items */
  readonly nextLink?: string;
}

/** Paged collection of TextBlocklist items */
export interface PagedTextBlocklist {
  /** The TextBlocklist items on this page */
  value: TextBlocklist[];
  /** The link to the next page of items */
  readonly nextLink?: string;
}
