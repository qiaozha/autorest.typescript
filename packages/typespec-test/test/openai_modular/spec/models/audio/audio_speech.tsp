import "@typespec/versioning";
import "@typespec/http";

using TypeSpec.Versioning;
using TypeSpec.Http;

namespace Azure.OpenAI;

@doc("The available voices for text-to-speech.")
@added(ServiceApiVersions.v2024_02_15_Preview)
enum AudioSpeechVoice {
  @doc("The Alloy voice.")
  alloy: "alloy",

  @doc("The Echo voice.")
  echo: "echo",

  @doc("The Fable voice.")
  fable: "fable",

  @doc("The Onyx voice.")
  onyx: "onyx",

  @doc("The Nova voice.")
  nova: "nova",

  @doc("The Shimmer voice.")
  shimmer: "shimmer",
}

@doc("The supported audio output formats for text-to-speech.")
@added(ServiceApiVersions.v2024_02_15_Preview)
enum AudioSpeechOutputFormat {
  @doc("Use MP3 as the audio output format. MP3 is the default, general-purpose format.")
  mp3: "mp3",

  @doc("Use Opus as the audio output format. Opus is optimized for internet streaming and low latency.")
  opus: "opus",

  @doc("Use AAC as the audio output format. AAC is optimized for digital audio compression and is preferred by YouTube, Android, and iOS.")
  aac: "aac",

  @doc("Use FLAC as the audio output format. FLAC is a fully lossless format optimized for maximum quality at the expense of size.")
  flac: "flac",
}

@doc("A representation of the request options that control the behavior of a text-to-speech operation.")
@added(ServiceApiVersions.v2024_02_15_Preview)
model AudioSpeechOptions {
  @doc("The text to generate audio for. The maximum length is 4096 characters.")
  @maxLength(4096)
  input: string;

  @doc("The voice to use for text-to-speech.")
  voice: AudioSpeechVoice;

  @doc("The audio output format for the spoken text. By default, the MP3 format will be used.")
  @projectedName("json", "response_format")
  responseFormat?: AudioSpeechOutputFormat = AudioSpeechOutputFormat.mp3;

  @doc("The speed of speech for generated audio. Values are valid in the range from 0.25 to 4.0, with 1.0 the default and higher values corresponding to faster speech.")
  @minValue(0.25)
  @maxValue(4.0)
  speed?: float32 = 1.0;
}

@doc("A representation of a response for a text-to-speech operation.")
@added(ServiceApiVersions.v2024_02_15_Preview)
model AudioSpeechResponse {
  @doc("The content type of the response. Always application/octet-stream for audio/speech responses.")
  @header
  contentType: "application/octet-stream";

  @doc("The generated audio, generated in the requested audio output format.")
  @body
  audio: bytes;
}
