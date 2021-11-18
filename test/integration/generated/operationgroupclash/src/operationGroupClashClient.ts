import { ProductOperationsImpl, PipelineOperationsImpl } from "./operations";
import { ProductOperations, PipelineOperations } from "./operationsInterfaces";
import { Enum0, OperationGroupClashClientOptionalParams } from "./models";

export class OperationGroupClashClient extends coreClient.ServiceClient {
  Host: string;
  apiVersion: Enum0;

  /**
   * Initializes a new instance of the OperationGroupClashClient class.
   * @param Host server parameter
   * @param apiVersion
   * @param options The parameter options
   */
  constructor(
    Host: string,
    apiVersion: Enum0,
    options?: OperationGroupClashClientOptionalParams
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
    const defaults: OperationGroupClashClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const packageDetails = `azsdk-js-operationgroupclash/1.0.0-preview1`;
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
    this.productOperations = new ProductOperationsImpl(this);
    this.pipelineOperations = new PipelineOperationsImpl(this);
  }

  productOperations: ProductOperations;
  pipelineOperations: PipelineOperations;
}
