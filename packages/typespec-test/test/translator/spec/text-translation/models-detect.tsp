import "@typespec/rest";
import "@azure-tools/typespec-azure-core";
import "./models-shared.tsp";

using TypeSpec.Http;
using TypeSpec.Rest;
using Azure.Core;

namespace Translator.TextTranslation;

@doc("Request parameters for the detect API.")
model DetectParameters {
    ...CommonParameters;

    @body
    @doc("Array of the text for which values the language detection will be applied.")
    content: InputTextElement[];
}

@doc("Response for the detect API.")
model DetectedLanguagesResult {
    ...CommonResultHeaders;

    @body
    @doc("Array of the detected languages elements.")
    result: DetectedLanguageWithAlternatives[];
}

@doc("Detected language")
model DetectedLanguageElement {
    @doc("Code of the detected language.")
    language: string;

    @doc("""
    A float value indicating the confidence in the result. The score is between zero and one 
    and a low score indicates a low confidence.
    """)
    score: float32;

    @doc("""
    A boolean value which is true if the detected language is one of the languages supported for text translation.
    """)
    isTranslationSupported: boolean;

    @doc("""
    A boolean value which is true if the detected language is one of the languages supported for transliteration.
    """)
    isTransliterationSupported: boolean;
}

@doc("Detected Language with alternatives")
model DetectedLanguageWithAlternatives extends DetectedLanguageElement {

    @doc("""
    An array of other possible languages.
    """)
    alternatives: DetectedLanguage[];
}
