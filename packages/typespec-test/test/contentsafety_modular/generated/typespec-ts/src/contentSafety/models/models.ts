// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** The text analysis request. */
export interface AnalyzeTextOptions {
  /** The text needs to be analyzed. We support a maximum of 10k Unicode characters (Unicode code points) in the text of one request. */
  text: string;
  /** The categories will be analyzed. If they are not assigned, a default set of analysis results for the categories will be returned. */
  categories?: TextCategory[];
  /** The names of blocklists. */
  blocklistNames?: string[];
  /** When set to true, further analyses of harmful content will not be performed in cases where blocklists are hit. When set to false, all analyses of harmful content will be performed, whether or not blocklists are hit. */
  haltOnBlocklistHit?: boolean;
  /** This refers to the type of text analysis output. If no value is assigned, the default value will be "FourSeverityLevels". */
  outputType?: AnalyzeTextOutputType;
}

/** Text analyze category. */
/** "Hate", "SelfHarm", "Sexual", "Violence" */
export type TextCategory = string;
/** The type of text analysis output. */
/** "FourSeverityLevels", "EightSeverityLevels" */
export type AnalyzeTextOutputType = string;

/** The text analysis response. */
export interface AnalyzeTextResult {
  /** The blocklist match details. */
  blocklistsMatch?: TextBlocklistMatch[];
  /** Analysis result for categories. */
  categoriesAnalysis: TextCategoriesAnalysis[];
}

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

/** The image analysis request. */
export interface AnalyzeImageOptions {
  /** The image needs to be analyzed. */
  image: ImageData;
  /** The categories will be analyzed. If they are not assigned, a default set of analysis results for the categories will be returned. */
  categories?: ImageCategory[];
  /** This refers to the type of image analysis output. If no value is assigned, the default value will be "FourSeverityLevels". */
  outputType?: AnalyzeImageOutputType;
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

/** The image analysis response. */
export interface AnalyzeImageResult {
  /** Analysis result for categories. */
  categoriesAnalysis: ImageCategoriesAnalysis[];
}

/** Image analysis result. */
export interface ImageCategoriesAnalysis {
  /** The image analysis category. */
  category: ImageCategory;
  /** The value increases with the severity of the input content. The value of this field is determined by the output type specified in the request. The output type could be ‘FourSeverityLevels’, and the output value can be 0, 2, 4, 6. */
  severity?: number;
}

/** The text jailbreak analysis request. */
export interface AnalyzeTextJailbreakOptions {
  /** The text needs to be analyzed if it attempt to jailbreak. We support a maximum of 1k Unicode characters (Unicode code points) in the text of one request. */
  text: string;
}

/** The text jailbreak analysis request. */
export interface AnalyzeTextJailbreakResult {
  /** Analysis result for jailbreak. */
  jailbreakAnalysis: JailbreakAnalysisResult;
}

/** The text jailbreak analysis response. */
export interface JailbreakAnalysisResult {
  /** Analysis result for jailbreak. */
  detected: boolean;
}

/** The protected material analysis request. */
export interface AnalyzeTextProtectedMaterialOptions {
  /** The text needs to be analyzed. We support a maximum of 1k Unicode characters (Unicode code points) in the text of one request. */
  text: string;
}

/** The protected material analysis response. */
export interface AnalyzeTextProtectedMaterialResult {
  /** Analysis result for protected material. */
  protectedMaterialAnalysis: ProtectedMaterialAnalysisResult;
}

/** The text protected material analysis response. */
export interface ProtectedMaterialAnalysisResult {
  /** Analysis result for protected material.. */
  detected: boolean;
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

/** Text Blocklist. */
export interface TextBlocklist {
  /** Text blocklist name. */
  blocklistName: string;
  /** Text blocklist description. */
  description?: string;
}
