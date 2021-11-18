import * as coreClient from "@azure/core-client";
import * as Parameters from "./models/parameters";
import {
  Enum0,
  NoLicenseHeaderClientOptionalParams,
  ApiV1ValueGetOptionalParams,
  ApiV1ValueGetResponse
} from "./models";

export class NoLicenseHeaderClient extends coreClient.ServiceClient {
  Host: string;
  apiVersion: Enum0;

  /**
   * Initializes a new instance of the NoLicenseHeaderClient class.
   * @param Host server parameter
   * @param apiVersion
   * @param options The parameter options
   */
  constructor(
    Host: string,
    apiVersion: Enum0,
    options?: NoLicenseHeaderClientOptionalParams
  ) {
    if (Host === undefined) {
      throw new Error("'Host' cannot be null");
    }
    if (apiVersion === undefined) {
      throw new Error("'apiVersion' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: NoLicenseHeaderClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const packageDetails = `azsdk-js-nolicense-header/1.0.0-preview1`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      baseUri: options.endpoint || "{$host}"
    };
    super(optionsWithDefaults);
    // Parameter assignments
    this.Host = Host;
    this.apiVersion = apiVersion;
  }

  /** @param options The options parameters. */
  apiV1ValueGet(
    options?: ApiV1ValueGetOptionalParams
  ): Promise<ApiV1ValueGetResponse> {
    return this.sendOperationRequest({ options }, apiV1ValueGetOperationSpec);
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer({}, /* isXml */ false);

const apiV1ValueGetOperationSpec: coreClient.OperationSpec = {
  path: "/api/v1/value",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "String" } }
    }
  },
  urlParameters: [Parameters.Host],
  headerParameters: [Parameters.accept, Parameters.apiVersion],
  serializer
};
