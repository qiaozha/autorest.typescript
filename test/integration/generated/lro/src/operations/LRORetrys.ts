/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { LRORetrys } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { LROClient } from "../LROClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  LRORetrysPut201CreatingSucceeded200OptionalParams,
  LRORetrysPut201CreatingSucceeded200Response,
  LRORetrysPutAsyncRelativeRetrySucceededOptionalParams,
  LRORetrysPutAsyncRelativeRetrySucceededResponse,
  LRORetrysDeleteProvisioning202Accepted200SucceededOptionalParams,
  LRORetrysDeleteProvisioning202Accepted200SucceededResponse,
  LRORetrysDelete202Retry200OptionalParams,
  LRORetrysDelete202Retry200Response,
  LRORetrysDeleteAsyncRelativeRetrySucceededOptionalParams,
  LRORetrysDeleteAsyncRelativeRetrySucceededResponse,
  LRORetrysPost202Retry200OptionalParams,
  LRORetrysPost202Retry200Response,
  LRORetrysPostAsyncRelativeRetrySucceededOptionalParams,
  LRORetrysPostAsyncRelativeRetrySucceededResponse
} from "../models";

/** Class containing LRORetrys operations. */
export class LRORetrysImpl implements LRORetrys {
  private readonly client: LROClient;

  /**
   * Initialize a new instance of the class LRORetrys class.
   * @param client Reference to the service client
   */
  constructor(client: LROClient) {
    this.client = client;
  }

  /**
   * Long running put request, service returns a 500, then a 201 to the initial request, with an entity
   * that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a
   * ‘200’ with ProvisioningState=’Succeeded’
   * @param options The options parameters.
   */
  async beginPut201CreatingSucceeded200(
    options?: LRORetrysPut201CreatingSucceeded200OptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<LRORetrysPut201CreatingSucceeded200Response>,
      LRORetrysPut201CreatingSucceeded200Response
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<LRORetrysPut201CreatingSucceeded200Response> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { options },
      put201CreatingSucceeded200OperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Long running put request, service returns a 500, then a 201 to the initial request, with an entity
   * that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a
   * ‘200’ with ProvisioningState=’Succeeded’
   * @param options The options parameters.
   */
  async beginPut201CreatingSucceeded200AndWait(
    options?: LRORetrysPut201CreatingSucceeded200OptionalParams
  ): Promise<LRORetrysPut201CreatingSucceeded200Response> {
    const poller = await this.beginPut201CreatingSucceeded200(options);
    return poller.pollUntilDone();
  }

  /**
   * Long running put request, service returns a 500, then a 200 to the initial request, with an entity
   * that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation
   * header for operation status
   * @param options The options parameters.
   */
  async beginPutAsyncRelativeRetrySucceeded(
    options?: LRORetrysPutAsyncRelativeRetrySucceededOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<LRORetrysPutAsyncRelativeRetrySucceededResponse>,
      LRORetrysPutAsyncRelativeRetrySucceededResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<LRORetrysPutAsyncRelativeRetrySucceededResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { options },
      putAsyncRelativeRetrySucceededOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Long running put request, service returns a 500, then a 200 to the initial request, with an entity
   * that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation
   * header for operation status
   * @param options The options parameters.
   */
  async beginPutAsyncRelativeRetrySucceededAndWait(
    options?: LRORetrysPutAsyncRelativeRetrySucceededOptionalParams
  ): Promise<LRORetrysPutAsyncRelativeRetrySucceededResponse> {
    const poller = await this.beginPutAsyncRelativeRetrySucceeded(options);
    return poller.pollUntilDone();
  }

  /**
   * Long running delete request, service returns a 500, then a  202 to the initial request, with an
   * entity that contains ProvisioningState=’Accepted’.  Polls return this value until the last poll
   * returns a ‘200’ with ProvisioningState=’Succeeded’
   * @param options The options parameters.
   */
  async beginDeleteProvisioning202Accepted200Succeeded(
    options?: LRORetrysDeleteProvisioning202Accepted200SucceededOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<
        LRORetrysDeleteProvisioning202Accepted200SucceededResponse
      >,
      LRORetrysDeleteProvisioning202Accepted200SucceededResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<LRORetrysDeleteProvisioning202Accepted200SucceededResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { options },
      deleteProvisioning202Accepted200SucceededOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Long running delete request, service returns a 500, then a  202 to the initial request, with an
   * entity that contains ProvisioningState=’Accepted’.  Polls return this value until the last poll
   * returns a ‘200’ with ProvisioningState=’Succeeded’
   * @param options The options parameters.
   */
  async beginDeleteProvisioning202Accepted200SucceededAndWait(
    options?: LRORetrysDeleteProvisioning202Accepted200SucceededOptionalParams
  ): Promise<LRORetrysDeleteProvisioning202Accepted200SucceededResponse> {
    const poller = await this.beginDeleteProvisioning202Accepted200Succeeded(
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Long running delete request, service returns a 500, then a 202 to the initial request. Polls return
   * this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’
   * @param options The options parameters.
   */
  async beginDelete202Retry200(
    options?: LRORetrysDelete202Retry200OptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<LRORetrysDelete202Retry200Response>,
      LRORetrysDelete202Retry200Response
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<LRORetrysDelete202Retry200Response> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { options },
      delete202Retry200OperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Long running delete request, service returns a 500, then a 202 to the initial request. Polls return
   * this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’
   * @param options The options parameters.
   */
  async beginDelete202Retry200AndWait(
    options?: LRORetrysDelete202Retry200OptionalParams
  ): Promise<LRORetrysDelete202Retry200Response> {
    const poller = await this.beginDelete202Retry200(options);
    return poller.pollUntilDone();
  }

  /**
   * Long running delete request, service returns a 500, then a 202 to the initial request. Poll the
   * endpoint indicated in the Azure-AsyncOperation header for operation status
   * @param options The options parameters.
   */
  async beginDeleteAsyncRelativeRetrySucceeded(
    options?: LRORetrysDeleteAsyncRelativeRetrySucceededOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<LRORetrysDeleteAsyncRelativeRetrySucceededResponse>,
      LRORetrysDeleteAsyncRelativeRetrySucceededResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<LRORetrysDeleteAsyncRelativeRetrySucceededResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { options },
      deleteAsyncRelativeRetrySucceededOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Long running delete request, service returns a 500, then a 202 to the initial request. Poll the
   * endpoint indicated in the Azure-AsyncOperation header for operation status
   * @param options The options parameters.
   */
  async beginDeleteAsyncRelativeRetrySucceededAndWait(
    options?: LRORetrysDeleteAsyncRelativeRetrySucceededOptionalParams
  ): Promise<LRORetrysDeleteAsyncRelativeRetrySucceededResponse> {
    const poller = await this.beginDeleteAsyncRelativeRetrySucceeded(options);
    return poller.pollUntilDone();
  }

  /**
   * Long running post request, service returns a 500, then a 202 to the initial request, with 'Location'
   * and 'Retry-After' headers, Polls return a 200 with a response body after success
   * @param options The options parameters.
   */
  async beginPost202Retry200(
    options?: LRORetrysPost202Retry200OptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<LRORetrysPost202Retry200Response>,
      LRORetrysPost202Retry200Response
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<LRORetrysPost202Retry200Response> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { options },
      post202Retry200OperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Long running post request, service returns a 500, then a 202 to the initial request, with 'Location'
   * and 'Retry-After' headers, Polls return a 200 with a response body after success
   * @param options The options parameters.
   */
  async beginPost202Retry200AndWait(
    options?: LRORetrysPost202Retry200OptionalParams
  ): Promise<LRORetrysPost202Retry200Response> {
    const poller = await this.beginPost202Retry200(options);
    return poller.pollUntilDone();
  }

  /**
   * Long running post request, service returns a 500, then a 202 to the initial request, with an entity
   * that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation
   * header for operation status
   * @param options The options parameters.
   */
  async beginPostAsyncRelativeRetrySucceeded(
    options?: LRORetrysPostAsyncRelativeRetrySucceededOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<LRORetrysPostAsyncRelativeRetrySucceededResponse>,
      LRORetrysPostAsyncRelativeRetrySucceededResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<LRORetrysPostAsyncRelativeRetrySucceededResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { options },
      postAsyncRelativeRetrySucceededOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Long running post request, service returns a 500, then a 202 to the initial request, with an entity
   * that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation
   * header for operation status
   * @param options The options parameters.
   */
  async beginPostAsyncRelativeRetrySucceededAndWait(
    options?: LRORetrysPostAsyncRelativeRetrySucceededOptionalParams
  ): Promise<LRORetrysPostAsyncRelativeRetrySucceededResponse> {
    const poller = await this.beginPostAsyncRelativeRetrySucceeded(options);
    return poller.pollUntilDone();
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const put201CreatingSucceeded200OperationSpec: coreClient.OperationSpec = {
  path: "/lro/retryerror/put/201/creating/succeeded/200",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Product
    },
    201: {
      bodyMapper: Mappers.Product
    },
    202: {
      bodyMapper: Mappers.Product
    },
    204: {
      bodyMapper: Mappers.Product
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.product,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const putAsyncRelativeRetrySucceededOperationSpec: coreClient.OperationSpec = {
  path: "/lro/retryerror/putasync/retry/succeeded",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Product,
      headersMapper: Mappers.LRORetrysPutAsyncRelativeRetrySucceededHeaders
    },
    201: {
      bodyMapper: Mappers.Product,
      headersMapper: Mappers.LRORetrysPutAsyncRelativeRetrySucceededHeaders
    },
    202: {
      bodyMapper: Mappers.Product,
      headersMapper: Mappers.LRORetrysPutAsyncRelativeRetrySucceededHeaders
    },
    204: {
      bodyMapper: Mappers.Product,
      headersMapper: Mappers.LRORetrysPutAsyncRelativeRetrySucceededHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.product,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteProvisioning202Accepted200SucceededOperationSpec: coreClient.OperationSpec = {
  path: "/lro/retryerror/delete/provisioning/202/accepted/200/succeeded",
  httpMethod: "DELETE",
  responses: {
    200: {
      bodyMapper: Mappers.Product
    },
    201: {
      bodyMapper: Mappers.Product
    },
    202: {
      bodyMapper: Mappers.Product
    },
    204: {
      bodyMapper: Mappers.Product
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const delete202Retry200OperationSpec: coreClient.OperationSpec = {
  path: "/lro/retryerror/delete/202/retry/200",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.LRORetrysDelete202Retry200Headers
    },
    201: {
      headersMapper: Mappers.LRORetrysDelete202Retry200Headers
    },
    202: {
      headersMapper: Mappers.LRORetrysDelete202Retry200Headers
    },
    204: {
      headersMapper: Mappers.LRORetrysDelete202Retry200Headers
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteAsyncRelativeRetrySucceededOperationSpec: coreClient.OperationSpec = {
  path: "/lro/retryerror/deleteasync/retry/succeeded",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.LRORetrysDeleteAsyncRelativeRetrySucceededHeaders
    },
    201: {
      headersMapper: Mappers.LRORetrysDeleteAsyncRelativeRetrySucceededHeaders
    },
    202: {
      headersMapper: Mappers.LRORetrysDeleteAsyncRelativeRetrySucceededHeaders
    },
    204: {
      headersMapper: Mappers.LRORetrysDeleteAsyncRelativeRetrySucceededHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const post202Retry200OperationSpec: coreClient.OperationSpec = {
  path: "/lro/retryerror/post/202/retry/200",
  httpMethod: "POST",
  responses: {
    200: {
      headersMapper: Mappers.LRORetrysPost202Retry200Headers
    },
    201: {
      headersMapper: Mappers.LRORetrysPost202Retry200Headers
    },
    202: {
      headersMapper: Mappers.LRORetrysPost202Retry200Headers
    },
    204: {
      headersMapper: Mappers.LRORetrysPost202Retry200Headers
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.product,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const postAsyncRelativeRetrySucceededOperationSpec: coreClient.OperationSpec = {
  path: "/lro/retryerror/postasync/retry/succeeded",
  httpMethod: "POST",
  responses: {
    200: {
      headersMapper: Mappers.LRORetrysPostAsyncRelativeRetrySucceededHeaders
    },
    201: {
      headersMapper: Mappers.LRORetrysPostAsyncRelativeRetrySucceededHeaders
    },
    202: {
      headersMapper: Mappers.LRORetrysPostAsyncRelativeRetrySucceededHeaders
    },
    204: {
      headersMapper: Mappers.LRORetrysPostAsyncRelativeRetrySucceededHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.product,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
