// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  LROsPut200SucceededParameters,
  LROsPatch200SucceededIgnoreHeadersParameters,
  LROsPatch201RetryWithAsyncHeaderParameters,
  LROsPatch202RetryWithAsyncAndLocationHeaderParameters,
  LROsPut201SucceededParameters,
  LROsPost202ListParameters,
  LROsPut200SucceededNoStateParameters,
  LROsPut202Retry200Parameters,
  LROsPut201CreatingSucceeded200Parameters,
  LROsPut200UpdatingSucceeded204Parameters,
  LROsPut201CreatingFailed200Parameters,
  LROsPut200Acceptedcanceled200Parameters,
  LROsPutNoHeaderInRetryParameters,
  LROsPutAsyncRetrySucceededParameters,
  LROsPutAsyncNoRetrySucceededParameters,
  LROsPutAsyncRetryFailedParameters,
  LROsPutAsyncNoRetrycanceledParameters,
  LROsPutAsyncNoHeaderInRetryParameters,
  LROsPutNonResourceParameters,
  LROsPutAsyncNonResourceParameters,
  LROsPutSubResourceParameters,
  LROsPutAsyncSubResourceParameters,
  LROsDeleteProvisioning202Accepted200SucceededParameters,
  LROsDeleteProvisioning202DeletingFailed200Parameters,
  LROsDeleteProvisioning202Deletingcanceled200Parameters,
  LROsDelete204SucceededParameters,
  LROsDelete202Retry200Parameters,
  LROsDelete202NoRetry204Parameters,
  LROsDeleteNoHeaderInRetryParameters,
  LROsDeleteAsyncNoHeaderInRetryParameters,
  LROsDeleteAsyncRetrySucceededParameters,
  LROsDeleteAsyncNoRetrySucceededParameters,
  LROsDeleteAsyncRetryFailedParameters,
  LROsDeleteAsyncRetrycanceledParameters,
  LROsPost200WithPayloadParameters,
  LROsPost202Retry200Parameters,
  LROsPost202NoRetry204Parameters,
  LROsPostDoubleHeadersFinalLocationGetParameters,
  LROsPostDoubleHeadersFinalAzureHeaderGetParameters,
  LROsPostDoubleHeadersFinalAzureHeaderGetDefaultParameters,
  LROsPostAsyncRetrySucceededParameters,
  LROsPostAsyncNoRetrySucceededParameters,
  LROsPostAsyncRetryFailedParameters,
  LROsPostAsyncRetrycanceledParameters,
  LRORetrysPut201CreatingSucceeded200Parameters,
  LRORetrysPutAsyncRelativeRetrySucceededParameters,
  LRORetrysDeleteProvisioning202Accepted200SucceededParameters,
  LRORetrysDelete202Retry200Parameters,
  LRORetrysDeleteAsyncRelativeRetrySucceededParameters,
  LRORetrysPost202Retry200Parameters,
  LRORetrysPostAsyncRelativeRetrySucceededParameters,
  LrosaDsPutNonRetry400Parameters,
  LrosaDsPutNonRetry201Creating400Parameters,
  LrosaDsPutNonRetry201Creating400InvalidJsonParameters,
  LrosaDsPutAsyncRelativeRetry400Parameters,
  LrosaDsDeleteNonRetry400Parameters,
  LrosaDsDelete202NonRetry400Parameters,
  LrosaDsDeleteAsyncRelativeRetry400Parameters,
  LrosaDsPostNonRetry400Parameters,
  LrosaDsPost202NonRetry400Parameters,
  LrosaDsPostAsyncRelativeRetry400Parameters,
  LrosaDsPutError201NoProvisioningStatePayloadParameters,
  LrosaDsPutAsyncRelativeRetryNoStatusParameters,
  LrosaDsPutAsyncRelativeRetryNoStatusPayloadParameters,
  LrosaDsDelete204SucceededParameters,
  LrosaDsDeleteAsyncRelativeRetryNoStatusParameters,
  LrosaDsPost202NoLocationParameters,
  LrosaDsPostAsyncRelativeRetryNoPayloadParameters,
  LrosaDsPut200InvalidJsonParameters,
  LrosaDsPutAsyncRelativeRetryInvalidHeaderParameters,
  LrosaDsPutAsyncRelativeRetryInvalidJsonPollingParameters,
  LrosaDsDelete202RetryInvalidHeaderParameters,
  LrosaDsDeleteAsyncRelativeRetryInvalidHeaderParameters,
  LrosaDsDeleteAsyncRelativeRetryInvalidJsonPollingParameters,
  LrosaDsPost202RetryInvalidHeaderParameters,
  LrosaDsPostAsyncRelativeRetryInvalidHeaderParameters,
  LrosaDsPostAsyncRelativeRetryInvalidJsonPollingParameters,
  LROsCustomHeaderPutAsyncRetrySucceededParameters,
  LROsCustomHeaderPut201CreatingSucceeded200Parameters,
  LROsCustomHeaderPost202Retry200Parameters,
  LROsCustomHeaderPostAsyncRetrySucceededParameters
} from "./parameters";
import {
  LROsPut200Succeeded200Response,
  LROsPut200Succeeded204Response,
  LROsPut200SucceededdefaultResponse,
  LROsPatch200SucceededIgnoreHeaders200Response,
  LROsPatch200SucceededIgnoreHeadersdefaultResponse,
  LROsPatch201RetryWithAsyncHeader200Response,
  LROsPatch201RetryWithAsyncHeader201Response,
  LROsPatch201RetryWithAsyncHeaderdefaultResponse,
  LROsPatch202RetryWithAsyncAndLocationHeader200Response,
  LROsPatch202RetryWithAsyncAndLocationHeader202Response,
  LROsPatch202RetryWithAsyncAndLocationHeaderdefaultResponse,
  LROsPut201Succeeded201Response,
  LROsPut201SucceededdefaultResponse,
  LROsPost202List200Response,
  LROsPost202List202Response,
  LROsPost202ListdefaultResponse,
  LROsPut200SucceededNoState200Response,
  LROsPut200SucceededNoStatedefaultResponse,
  LROsPut202Retry200202Response,
  LROsPut202Retry200defaultResponse,
  LROsPut201CreatingSucceeded200200Response,
  LROsPut201CreatingSucceeded200201Response,
  LROsPut201CreatingSucceeded200defaultResponse,
  LROsPut200UpdatingSucceeded204200Response,
  LROsPut200UpdatingSucceeded204defaultResponse,
  LROsPut201CreatingFailed200200Response,
  LROsPut201CreatingFailed200201Response,
  LROsPut201CreatingFailed200defaultResponse,
  LROsPut200Acceptedcanceled200200Response,
  LROsPut200Acceptedcanceled200defaultResponse,
  LROsPutNoHeaderInRetry202Response,
  LROsPutNoHeaderInRetrydefaultResponse,
  LROsPutAsyncRetrySucceeded200Response,
  LROsPutAsyncRetrySucceededdefaultResponse,
  LROsPutAsyncNoRetrySucceeded200Response,
  LROsPutAsyncNoRetrySucceededdefaultResponse,
  LROsPutAsyncRetryFailed200Response,
  LROsPutAsyncRetryFaileddefaultResponse,
  LROsPutAsyncNoRetrycanceled200Response,
  LROsPutAsyncNoRetrycanceleddefaultResponse,
  LROsPutAsyncNoHeaderInRetry201Response,
  LROsPutAsyncNoHeaderInRetrydefaultResponse,
  LROsPutNonResource202Response,
  LROsPutNonResourcedefaultResponse,
  LROsPutAsyncNonResource202Response,
  LROsPutAsyncNonResourcedefaultResponse,
  LROsPutSubResource202Response,
  LROsPutSubResourcedefaultResponse,
  LROsPutAsyncSubResource202Response,
  LROsPutAsyncSubResourcedefaultResponse,
  LROsDeleteProvisioning202Accepted200Succeeded200Response,
  LROsDeleteProvisioning202Accepted200Succeeded202Response,
  LROsDeleteProvisioning202Accepted200SucceededdefaultResponse,
  LROsDeleteProvisioning202DeletingFailed200200Response,
  LROsDeleteProvisioning202DeletingFailed200202Response,
  LROsDeleteProvisioning202DeletingFailed200defaultResponse,
  LROsDeleteProvisioning202Deletingcanceled200200Response,
  LROsDeleteProvisioning202Deletingcanceled200202Response,
  LROsDeleteProvisioning202Deletingcanceled200defaultResponse,
  LROsDelete204Succeeded204Response,
  LROsDelete204SucceededdefaultResponse,
  LROsDelete202Retry200200Response,
  LROsDelete202Retry200202Response,
  LROsDelete202Retry200defaultResponse,
  LROsDelete202NoRetry204200Response,
  LROsDelete202NoRetry204202Response,
  LROsDelete202NoRetry204defaultResponse,
  LROsDeleteNoHeaderInRetry202Response,
  LROsDeleteNoHeaderInRetry204Response,
  LROsDeleteNoHeaderInRetrydefaultResponse,
  LROsDeleteAsyncNoHeaderInRetry202Response,
  LROsDeleteAsyncNoHeaderInRetry204Response,
  LROsDeleteAsyncNoHeaderInRetrydefaultResponse,
  LROsDeleteAsyncRetrySucceeded202Response,
  LROsDeleteAsyncRetrySucceededdefaultResponse,
  LROsDeleteAsyncNoRetrySucceeded202Response,
  LROsDeleteAsyncNoRetrySucceededdefaultResponse,
  LROsDeleteAsyncRetryFailed202Response,
  LROsDeleteAsyncRetryFaileddefaultResponse,
  LROsDeleteAsyncRetrycanceled202Response,
  LROsDeleteAsyncRetrycanceleddefaultResponse,
  LROsPost200WithPayload200Response,
  LROsPost200WithPayload202Response,
  LROsPost200WithPayloaddefaultResponse,
  LROsPost202Retry200202Response,
  LROsPost202Retry200defaultResponse,
  LROsPost202NoRetry204202Response,
  LROsPost202NoRetry204defaultResponse,
  LROsPostDoubleHeadersFinalLocationGet202Response,
  LROsPostDoubleHeadersFinalLocationGetdefaultResponse,
  LROsPostDoubleHeadersFinalAzureHeaderGet202Response,
  LROsPostDoubleHeadersFinalAzureHeaderGetdefaultResponse,
  LROsPostDoubleHeadersFinalAzureHeaderGetDefault202Response,
  LROsPostDoubleHeadersFinalAzureHeaderGetDefaultdefaultResponse,
  LROsPostAsyncRetrySucceeded200Response,
  LROsPostAsyncRetrySucceeded202Response,
  LROsPostAsyncRetrySucceededdefaultResponse,
  LROsPostAsyncNoRetrySucceeded200Response,
  LROsPostAsyncNoRetrySucceeded202Response,
  LROsPostAsyncNoRetrySucceededdefaultResponse,
  LROsPostAsyncRetryFailed202Response,
  LROsPostAsyncRetryFaileddefaultResponse,
  LROsPostAsyncRetrycanceled202Response,
  LROsPostAsyncRetrycanceleddefaultResponse,
  LRORetrysPut201CreatingSucceeded200200Response,
  LRORetrysPut201CreatingSucceeded200201Response,
  LRORetrysPut201CreatingSucceeded200defaultResponse,
  LRORetrysPutAsyncRelativeRetrySucceeded200Response,
  LRORetrysPutAsyncRelativeRetrySucceededdefaultResponse,
  LRORetrysDeleteProvisioning202Accepted200Succeeded200Response,
  LRORetrysDeleteProvisioning202Accepted200Succeeded202Response,
  LRORetrysDeleteProvisioning202Accepted200SucceededdefaultResponse,
  LRORetrysDelete202Retry200202Response,
  LRORetrysDelete202Retry200defaultResponse,
  LRORetrysDeleteAsyncRelativeRetrySucceeded202Response,
  LRORetrysDeleteAsyncRelativeRetrySucceededdefaultResponse,
  LRORetrysPost202Retry200202Response,
  LRORetrysPost202Retry200defaultResponse,
  LRORetrysPostAsyncRelativeRetrySucceeded202Response,
  LRORetrysPostAsyncRelativeRetrySucceededdefaultResponse,
  LrosaDsPutNonRetry400200Response,
  LrosaDsPutNonRetry400201Response,
  LrosaDsPutNonRetry400defaultResponse,
  LrosaDsPutNonRetry201Creating400200Response,
  LrosaDsPutNonRetry201Creating400201Response,
  LrosaDsPutNonRetry201Creating400defaultResponse,
  LrosaDsPutNonRetry201Creating400InvalidJson200Response,
  LrosaDsPutNonRetry201Creating400InvalidJson201Response,
  LrosaDsPutNonRetry201Creating400InvalidJsondefaultResponse,
  LrosaDsPutAsyncRelativeRetry400200Response,
  LrosaDsPutAsyncRelativeRetry400defaultResponse,
  LrosaDsDeleteNonRetry400202Response,
  LrosaDsDeleteNonRetry400defaultResponse,
  LrosaDsDelete202NonRetry400202Response,
  LrosaDsDelete202NonRetry400defaultResponse,
  LrosaDsDeleteAsyncRelativeRetry400202Response,
  LrosaDsDeleteAsyncRelativeRetry400defaultResponse,
  LrosaDsPostNonRetry400202Response,
  LrosaDsPostNonRetry400defaultResponse,
  LrosaDsPost202NonRetry400202Response,
  LrosaDsPost202NonRetry400defaultResponse,
  LrosaDsPostAsyncRelativeRetry400202Response,
  LrosaDsPostAsyncRelativeRetry400defaultResponse,
  LrosaDsPutError201NoProvisioningStatePayload200Response,
  LrosaDsPutError201NoProvisioningStatePayload201Response,
  LrosaDsPutError201NoProvisioningStatePayloaddefaultResponse,
  LrosaDsPutAsyncRelativeRetryNoStatus200Response,
  LrosaDsPutAsyncRelativeRetryNoStatusdefaultResponse,
  LrosaDsPutAsyncRelativeRetryNoStatusPayload200Response,
  LrosaDsPutAsyncRelativeRetryNoStatusPayloaddefaultResponse,
  LrosaDsDelete204Succeeded204Response,
  LrosaDsDelete204SucceededdefaultResponse,
  LrosaDsDeleteAsyncRelativeRetryNoStatus202Response,
  LrosaDsDeleteAsyncRelativeRetryNoStatusdefaultResponse,
  LrosaDsPost202NoLocation202Response,
  LrosaDsPost202NoLocationdefaultResponse,
  LrosaDsPostAsyncRelativeRetryNoPayload202Response,
  LrosaDsPostAsyncRelativeRetryNoPayloaddefaultResponse,
  LrosaDsPut200InvalidJson200Response,
  LrosaDsPut200InvalidJson204Response,
  LrosaDsPut200InvalidJsondefaultResponse,
  LrosaDsPutAsyncRelativeRetryInvalidHeader200Response,
  LrosaDsPutAsyncRelativeRetryInvalidHeaderdefaultResponse,
  LrosaDsPutAsyncRelativeRetryInvalidJsonPolling200Response,
  LrosaDsPutAsyncRelativeRetryInvalidJsonPollingdefaultResponse,
  LrosaDsDelete202RetryInvalidHeader202Response,
  LrosaDsDelete202RetryInvalidHeaderdefaultResponse,
  LrosaDsDeleteAsyncRelativeRetryInvalidHeader202Response,
  LrosaDsDeleteAsyncRelativeRetryInvalidHeaderdefaultResponse,
  LrosaDsDeleteAsyncRelativeRetryInvalidJsonPolling202Response,
  LrosaDsDeleteAsyncRelativeRetryInvalidJsonPollingdefaultResponse,
  LrosaDsPost202RetryInvalidHeader202Response,
  LrosaDsPost202RetryInvalidHeaderdefaultResponse,
  LrosaDsPostAsyncRelativeRetryInvalidHeader202Response,
  LrosaDsPostAsyncRelativeRetryInvalidHeaderdefaultResponse,
  LrosaDsPostAsyncRelativeRetryInvalidJsonPolling202Response,
  LrosaDsPostAsyncRelativeRetryInvalidJsonPollingdefaultResponse,
  LROsCustomHeaderPutAsyncRetrySucceeded200Response,
  LROsCustomHeaderPutAsyncRetrySucceededdefaultResponse,
  LROsCustomHeaderPut201CreatingSucceeded200200Response,
  LROsCustomHeaderPut201CreatingSucceeded200201Response,
  LROsCustomHeaderPut201CreatingSucceeded200defaultResponse,
  LROsCustomHeaderPost202Retry200202Response,
  LROsCustomHeaderPost202Retry200defaultResponse,
  LROsCustomHeaderPostAsyncRetrySucceeded202Response,
  LROsCustomHeaderPostAsyncRetrySucceededdefaultResponse
} from "./responses";
import { Client } from "@azure-rest/core-client";

export interface LROsPut200Succeeded {
  /** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Succeeded’. */
  put(
    options?: LROsPut200SucceededParameters
  ): Promise<
    | LROsPut200Succeeded200Response
    | LROsPut200Succeeded204Response
    | LROsPut200SucceededdefaultResponse
  >;
}

export interface LROsPatch200SucceededIgnoreHeaders {
  /** Long running put request, service returns a 200 to the initial request with location header. We should not have any subsequent calls after receiving this first response. */
  patch(
    options?: LROsPatch200SucceededIgnoreHeadersParameters
  ): Promise<
    | LROsPatch200SucceededIgnoreHeaders200Response
    | LROsPatch200SucceededIgnoreHeadersdefaultResponse
  >;
}

export interface LROsPatch201RetryWithAsyncHeader {
  /** Long running patch request, service returns a 201 to the initial request with async header. */
  patch(
    options?: LROsPatch201RetryWithAsyncHeaderParameters
  ): Promise<
    | LROsPatch201RetryWithAsyncHeader200Response
    | LROsPatch201RetryWithAsyncHeader201Response
    | LROsPatch201RetryWithAsyncHeaderdefaultResponse
  >;
}

export interface LROsPatch202RetryWithAsyncAndLocationHeader {
  /** Long running patch request, service returns a 202 to the initial request with async and location header. */
  patch(
    options?: LROsPatch202RetryWithAsyncAndLocationHeaderParameters
  ): Promise<
    | LROsPatch202RetryWithAsyncAndLocationHeader200Response
    | LROsPatch202RetryWithAsyncAndLocationHeader202Response
    | LROsPatch202RetryWithAsyncAndLocationHeaderdefaultResponse
  >;
}

export interface LROsPut201Succeeded {
  /** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Succeeded’. */
  put(
    options?: LROsPut201SucceededParameters
  ): Promise<
    LROsPut201Succeeded201Response | LROsPut201SucceededdefaultResponse
  >;
}

export interface LROsPost202List {
  /** Long running put request, service returns a 202 with empty body to first request, returns a 200 with body [{ 'id': '100', 'name': 'foo' }]. */
  post(
    options?: LROsPost202ListParameters
  ): Promise<
    | LROsPost202List200Response
    | LROsPost202List202Response
    | LROsPost202ListdefaultResponse
  >;
}

export interface LROsPut200SucceededNoState {
  /** Long running put request, service returns a 200 to the initial request, with an entity that does not contain ProvisioningState=’Succeeded’. */
  put(
    options?: LROsPut200SucceededNoStateParameters
  ): Promise<
    | LROsPut200SucceededNoState200Response
    | LROsPut200SucceededNoStatedefaultResponse
  >;
}

export interface LROsPut202Retry200 {
  /** Long running put request, service returns a 202 to the initial request, with a location header that points to a polling URL that returns a 200 and an entity that doesn't contains ProvisioningState */
  put(
    options?: LROsPut202Retry200Parameters
  ): Promise<LROsPut202Retry200202Response | LROsPut202Retry200defaultResponse>;
}

export interface LROsPut201CreatingSucceeded200 {
  /** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
  put(
    options?: LROsPut201CreatingSucceeded200Parameters
  ): Promise<
    | LROsPut201CreatingSucceeded200200Response
    | LROsPut201CreatingSucceeded200201Response
    | LROsPut201CreatingSucceeded200defaultResponse
  >;
}

export interface LROsPut200UpdatingSucceeded204 {
  /** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Updating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
  put(
    options?: LROsPut200UpdatingSucceeded204Parameters
  ): Promise<
    | LROsPut200UpdatingSucceeded204200Response
    | LROsPut200UpdatingSucceeded204defaultResponse
  >;
}

export interface LROsPut201CreatingFailed200 {
  /** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Created’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Failed’ */
  put(
    options?: LROsPut201CreatingFailed200Parameters
  ): Promise<
    | LROsPut201CreatingFailed200200Response
    | LROsPut201CreatingFailed200201Response
    | LROsPut201CreatingFailed200defaultResponse
  >;
}

export interface LROsPut200Acceptedcanceled200 {
  /** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Canceled’ */
  put(
    options?: LROsPut200Acceptedcanceled200Parameters
  ): Promise<
    | LROsPut200Acceptedcanceled200200Response
    | LROsPut200Acceptedcanceled200defaultResponse
  >;
}

export interface LROsPutNoHeaderInRetry {
  /** Long running put request, service returns a 202 to the initial request with location header. Subsequent calls to operation status do not contain location header. */
  put(
    options?: LROsPutNoHeaderInRetryParameters
  ): Promise<
    LROsPutNoHeaderInRetry202Response | LROsPutNoHeaderInRetrydefaultResponse
  >;
}

export interface LROsPutAsyncRetrySucceeded {
  /** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  put(
    options?: LROsPutAsyncRetrySucceededParameters
  ): Promise<
    | LROsPutAsyncRetrySucceeded200Response
    | LROsPutAsyncRetrySucceededdefaultResponse
  >;
}

export interface LROsPutAsyncNoRetrySucceeded {
  /** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  put(
    options?: LROsPutAsyncNoRetrySucceededParameters
  ): Promise<
    | LROsPutAsyncNoRetrySucceeded200Response
    | LROsPutAsyncNoRetrySucceededdefaultResponse
  >;
}

export interface LROsPutAsyncRetryFailed {
  /** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  put(
    options?: LROsPutAsyncRetryFailedParameters
  ): Promise<
    LROsPutAsyncRetryFailed200Response | LROsPutAsyncRetryFaileddefaultResponse
  >;
}

export interface LROsPutAsyncNoRetrycanceled {
  /** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  put(
    options?: LROsPutAsyncNoRetrycanceledParameters
  ): Promise<
    | LROsPutAsyncNoRetrycanceled200Response
    | LROsPutAsyncNoRetrycanceleddefaultResponse
  >;
}

export interface LROsPutAsyncNoHeaderInRetry {
  /** Long running put request, service returns a 202 to the initial request with Azure-AsyncOperation header. Subsequent calls to operation status do not contain Azure-AsyncOperation header. */
  put(
    options?: LROsPutAsyncNoHeaderInRetryParameters
  ): Promise<
    | LROsPutAsyncNoHeaderInRetry201Response
    | LROsPutAsyncNoHeaderInRetrydefaultResponse
  >;
}

export interface LROsPutNonResource {
  /** Long running put request with non resource. */
  put(
    options?: LROsPutNonResourceParameters
  ): Promise<LROsPutNonResource202Response | LROsPutNonResourcedefaultResponse>;
}

export interface LROsPutAsyncNonResource {
  /** Long running put request with non resource. */
  put(
    options?: LROsPutAsyncNonResourceParameters
  ): Promise<
    LROsPutAsyncNonResource202Response | LROsPutAsyncNonResourcedefaultResponse
  >;
}

export interface LROsPutSubResource {
  /** Long running put request with sub resource. */
  put(
    options?: LROsPutSubResourceParameters
  ): Promise<LROsPutSubResource202Response | LROsPutSubResourcedefaultResponse>;
}

export interface LROsPutAsyncSubResource {
  /** Long running put request with sub resource. */
  put(
    options?: LROsPutAsyncSubResourceParameters
  ): Promise<
    LROsPutAsyncSubResource202Response | LROsPutAsyncSubResourcedefaultResponse
  >;
}

export interface LROsDeleteProvisioning202Accepted200Succeeded {
  /** Long running delete request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Accepted’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
  delete(
    options?: LROsDeleteProvisioning202Accepted200SucceededParameters
  ): Promise<
    | LROsDeleteProvisioning202Accepted200Succeeded200Response
    | LROsDeleteProvisioning202Accepted200Succeeded202Response
    | LROsDeleteProvisioning202Accepted200SucceededdefaultResponse
  >;
}

export interface LROsDeleteProvisioning202DeletingFailed200 {
  /** Long running delete request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Failed’ */
  delete(
    options?: LROsDeleteProvisioning202DeletingFailed200Parameters
  ): Promise<
    | LROsDeleteProvisioning202DeletingFailed200200Response
    | LROsDeleteProvisioning202DeletingFailed200202Response
    | LROsDeleteProvisioning202DeletingFailed200defaultResponse
  >;
}

export interface LROsDeleteProvisioning202Deletingcanceled200 {
  /** Long running delete request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Canceled’ */
  delete(
    options?: LROsDeleteProvisioning202Deletingcanceled200Parameters
  ): Promise<
    | LROsDeleteProvisioning202Deletingcanceled200200Response
    | LROsDeleteProvisioning202Deletingcanceled200202Response
    | LROsDeleteProvisioning202Deletingcanceled200defaultResponse
  >;
}

export interface LROsDelete204Succeeded {
  /** Long running delete succeeds and returns right away */
  delete(
    options?: LROsDelete204SucceededParameters
  ): Promise<
    LROsDelete204Succeeded204Response | LROsDelete204SucceededdefaultResponse
  >;
}

export interface LROsDelete202Retry200 {
  /** Long running delete request, service returns a 202 to the initial request. Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
  delete(
    options?: LROsDelete202Retry200Parameters
  ): Promise<
    | LROsDelete202Retry200200Response
    | LROsDelete202Retry200202Response
    | LROsDelete202Retry200defaultResponse
  >;
}

export interface LROsDelete202NoRetry204 {
  /** Long running delete request, service returns a 202 to the initial request. Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
  delete(
    options?: LROsDelete202NoRetry204Parameters
  ): Promise<
    | LROsDelete202NoRetry204200Response
    | LROsDelete202NoRetry204202Response
    | LROsDelete202NoRetry204defaultResponse
  >;
}

export interface LROsDeleteNoHeaderInRetry {
  /** Long running delete request, service returns a location header in the initial request. Subsequent calls to operation status do not contain location header. */
  delete(
    options?: LROsDeleteNoHeaderInRetryParameters
  ): Promise<
    | LROsDeleteNoHeaderInRetry202Response
    | LROsDeleteNoHeaderInRetry204Response
    | LROsDeleteNoHeaderInRetrydefaultResponse
  >;
}

export interface LROsDeleteAsyncNoHeaderInRetry {
  /** Long running delete request, service returns an Azure-AsyncOperation header in the initial request. Subsequent calls to operation status do not contain Azure-AsyncOperation header. */
  delete(
    options?: LROsDeleteAsyncNoHeaderInRetryParameters
  ): Promise<
    | LROsDeleteAsyncNoHeaderInRetry202Response
    | LROsDeleteAsyncNoHeaderInRetry204Response
    | LROsDeleteAsyncNoHeaderInRetrydefaultResponse
  >;
}

export interface LROsDeleteAsyncRetrySucceeded {
  /** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  delete(
    options?: LROsDeleteAsyncRetrySucceededParameters
  ): Promise<
    | LROsDeleteAsyncRetrySucceeded202Response
    | LROsDeleteAsyncRetrySucceededdefaultResponse
  >;
}

export interface LROsDeleteAsyncNoRetrySucceeded {
  /** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  delete(
    options?: LROsDeleteAsyncNoRetrySucceededParameters
  ): Promise<
    | LROsDeleteAsyncNoRetrySucceeded202Response
    | LROsDeleteAsyncNoRetrySucceededdefaultResponse
  >;
}

export interface LROsDeleteAsyncRetryFailed {
  /** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  delete(
    options?: LROsDeleteAsyncRetryFailedParameters
  ): Promise<
    | LROsDeleteAsyncRetryFailed202Response
    | LROsDeleteAsyncRetryFaileddefaultResponse
  >;
}

export interface LROsDeleteAsyncRetrycanceled {
  /** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  delete(
    options?: LROsDeleteAsyncRetrycanceledParameters
  ): Promise<
    | LROsDeleteAsyncRetrycanceled202Response
    | LROsDeleteAsyncRetrycanceleddefaultResponse
  >;
}

export interface LROsPost200WithPayload {
  /** Long running post request, service returns a 202 to the initial request, with 'Location' header. Poll returns a 200 with a response body after success. */
  post(
    options?: LROsPost200WithPayloadParameters
  ): Promise<
    | LROsPost200WithPayload200Response
    | LROsPost200WithPayload202Response
    | LROsPost200WithPayloaddefaultResponse
  >;
}

export interface LROsPost202Retry200 {
  /** Long running post request, service returns a 202 to the initial request, with 'Location' and 'Retry-After' headers, Polls return a 200 with a response body after success */
  post(
    options?: LROsPost202Retry200Parameters
  ): Promise<
    LROsPost202Retry200202Response | LROsPost202Retry200defaultResponse
  >;
}

export interface LROsPost202NoRetry204 {
  /** Long running post request, service returns a 202 to the initial request, with 'Location' header, 204 with noresponse body after success */
  post(
    options?: LROsPost202NoRetry204Parameters
  ): Promise<
    LROsPost202NoRetry204202Response | LROsPost202NoRetry204defaultResponse
  >;
}

export interface LROsPostDoubleHeadersFinalLocationGet {
  /** Long running post request, service returns a 202 to the initial request with both Location and Azure-Async header. Poll Azure-Async and it's success. Should poll Location to get the final object */
  post(
    options?: LROsPostDoubleHeadersFinalLocationGetParameters
  ): Promise<
    | LROsPostDoubleHeadersFinalLocationGet202Response
    | LROsPostDoubleHeadersFinalLocationGetdefaultResponse
  >;
}

export interface LROsPostDoubleHeadersFinalAzureHeaderGet {
  /** Long running post request, service returns a 202 to the initial request with both Location and Azure-Async header. Poll Azure-Async and it's success. Should NOT poll Location to get the final object */
  post(
    options?: LROsPostDoubleHeadersFinalAzureHeaderGetParameters
  ): Promise<
    | LROsPostDoubleHeadersFinalAzureHeaderGet202Response
    | LROsPostDoubleHeadersFinalAzureHeaderGetdefaultResponse
  >;
}

export interface LROsPostDoubleHeadersFinalAzureHeaderGetDefault {
  /** Long running post request, service returns a 202 to the initial request with both Location and Azure-Async header. Poll Azure-Async and it's success. Should NOT poll Location to get the final object if you support initial Autorest behavior. */
  post(
    options?: LROsPostDoubleHeadersFinalAzureHeaderGetDefaultParameters
  ): Promise<
    | LROsPostDoubleHeadersFinalAzureHeaderGetDefault202Response
    | LROsPostDoubleHeadersFinalAzureHeaderGetDefaultdefaultResponse
  >;
}

export interface LROsPostAsyncRetrySucceeded {
  /** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  post(
    options?: LROsPostAsyncRetrySucceededParameters
  ): Promise<
    | LROsPostAsyncRetrySucceeded200Response
    | LROsPostAsyncRetrySucceeded202Response
    | LROsPostAsyncRetrySucceededdefaultResponse
  >;
}

export interface LROsPostAsyncNoRetrySucceeded {
  /** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  post(
    options?: LROsPostAsyncNoRetrySucceededParameters
  ): Promise<
    | LROsPostAsyncNoRetrySucceeded200Response
    | LROsPostAsyncNoRetrySucceeded202Response
    | LROsPostAsyncNoRetrySucceededdefaultResponse
  >;
}

export interface LROsPostAsyncRetryFailed {
  /** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  post(
    options?: LROsPostAsyncRetryFailedParameters
  ): Promise<
    | LROsPostAsyncRetryFailed202Response
    | LROsPostAsyncRetryFaileddefaultResponse
  >;
}

export interface LROsPostAsyncRetrycanceled {
  /** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  post(
    options?: LROsPostAsyncRetrycanceledParameters
  ): Promise<
    | LROsPostAsyncRetrycanceled202Response
    | LROsPostAsyncRetrycanceleddefaultResponse
  >;
}

export interface LRORetrysPut201CreatingSucceeded200 {
  /** Long running put request, service returns a 500, then a 201 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
  put(
    options?: LRORetrysPut201CreatingSucceeded200Parameters
  ): Promise<
    | LRORetrysPut201CreatingSucceeded200200Response
    | LRORetrysPut201CreatingSucceeded200201Response
    | LRORetrysPut201CreatingSucceeded200defaultResponse
  >;
}

export interface LRORetrysPutAsyncRelativeRetrySucceeded {
  /** Long running put request, service returns a 500, then a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  put(
    options?: LRORetrysPutAsyncRelativeRetrySucceededParameters
  ): Promise<
    | LRORetrysPutAsyncRelativeRetrySucceeded200Response
    | LRORetrysPutAsyncRelativeRetrySucceededdefaultResponse
  >;
}

export interface LRORetrysDeleteProvisioning202Accepted200Succeeded {
  /** Long running delete request, service returns a 500, then a  202 to the initial request, with an entity that contains ProvisioningState=’Accepted’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
  delete(
    options?: LRORetrysDeleteProvisioning202Accepted200SucceededParameters
  ): Promise<
    | LRORetrysDeleteProvisioning202Accepted200Succeeded200Response
    | LRORetrysDeleteProvisioning202Accepted200Succeeded202Response
    | LRORetrysDeleteProvisioning202Accepted200SucceededdefaultResponse
  >;
}

export interface LRORetrysDelete202Retry200 {
  /** Long running delete request, service returns a 500, then a 202 to the initial request. Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
  delete(
    options?: LRORetrysDelete202Retry200Parameters
  ): Promise<
    | LRORetrysDelete202Retry200202Response
    | LRORetrysDelete202Retry200defaultResponse
  >;
}

export interface LRORetrysDeleteAsyncRelativeRetrySucceeded {
  /** Long running delete request, service returns a 500, then a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  delete(
    options?: LRORetrysDeleteAsyncRelativeRetrySucceededParameters
  ): Promise<
    | LRORetrysDeleteAsyncRelativeRetrySucceeded202Response
    | LRORetrysDeleteAsyncRelativeRetrySucceededdefaultResponse
  >;
}

export interface LRORetrysPost202Retry200 {
  /** Long running post request, service returns a 500, then a 202 to the initial request, with 'Location' and 'Retry-After' headers, Polls return a 200 with a response body after success */
  post(
    options?: LRORetrysPost202Retry200Parameters
  ): Promise<
    | LRORetrysPost202Retry200202Response
    | LRORetrysPost202Retry200defaultResponse
  >;
}

export interface LRORetrysPostAsyncRelativeRetrySucceeded {
  /** Long running post request, service returns a 500, then a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  post(
    options?: LRORetrysPostAsyncRelativeRetrySucceededParameters
  ): Promise<
    | LRORetrysPostAsyncRelativeRetrySucceeded202Response
    | LRORetrysPostAsyncRelativeRetrySucceededdefaultResponse
  >;
}

export interface LrosaDsPutNonRetry400 {
  /** Long running put request, service returns a 400 to the initial request */
  put(
    options?: LrosaDsPutNonRetry400Parameters
  ): Promise<
    | LrosaDsPutNonRetry400200Response
    | LrosaDsPutNonRetry400201Response
    | LrosaDsPutNonRetry400defaultResponse
  >;
}

export interface LrosaDsPutNonRetry201Creating400 {
  /** Long running put request, service returns a Product with 'ProvisioningState' = 'Creating' and 201 response code */
  put(
    options?: LrosaDsPutNonRetry201Creating400Parameters
  ): Promise<
    | LrosaDsPutNonRetry201Creating400200Response
    | LrosaDsPutNonRetry201Creating400201Response
    | LrosaDsPutNonRetry201Creating400defaultResponse
  >;
}

export interface LrosaDsPutNonRetry201Creating400InvalidJson {
  /** Long running put request, service returns a Product with 'ProvisioningState' = 'Creating' and 201 response code */
  put(
    options?: LrosaDsPutNonRetry201Creating400InvalidJsonParameters
  ): Promise<
    | LrosaDsPutNonRetry201Creating400InvalidJson200Response
    | LrosaDsPutNonRetry201Creating400InvalidJson201Response
    | LrosaDsPutNonRetry201Creating400InvalidJsondefaultResponse
  >;
}

export interface LrosaDsPutAsyncRelativeRetry400 {
  /** Long running put request, service returns a 200 with ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  put(
    options?: LrosaDsPutAsyncRelativeRetry400Parameters
  ): Promise<
    | LrosaDsPutAsyncRelativeRetry400200Response
    | LrosaDsPutAsyncRelativeRetry400defaultResponse
  >;
}

export interface LrosaDsDeleteNonRetry400 {
  /** Long running delete request, service returns a 400 with an error body */
  delete(
    options?: LrosaDsDeleteNonRetry400Parameters
  ): Promise<
    | LrosaDsDeleteNonRetry400202Response
    | LrosaDsDeleteNonRetry400defaultResponse
  >;
}

export interface LrosaDsDelete202NonRetry400 {
  /** Long running delete request, service returns a 202 with a location header */
  delete(
    options?: LrosaDsDelete202NonRetry400Parameters
  ): Promise<
    | LrosaDsDelete202NonRetry400202Response
    | LrosaDsDelete202NonRetry400defaultResponse
  >;
}

export interface LrosaDsDeleteAsyncRelativeRetry400 {
  /** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  delete(
    options?: LrosaDsDeleteAsyncRelativeRetry400Parameters
  ): Promise<
    | LrosaDsDeleteAsyncRelativeRetry400202Response
    | LrosaDsDeleteAsyncRelativeRetry400defaultResponse
  >;
}

export interface LrosaDsPostNonRetry400 {
  /** Long running post request, service returns a 400 with no error body */
  post(
    options?: LrosaDsPostNonRetry400Parameters
  ): Promise<
    LrosaDsPostNonRetry400202Response | LrosaDsPostNonRetry400defaultResponse
  >;
}

export interface LrosaDsPost202NonRetry400 {
  /** Long running post request, service returns a 202 with a location header */
  post(
    options?: LrosaDsPost202NonRetry400Parameters
  ): Promise<
    | LrosaDsPost202NonRetry400202Response
    | LrosaDsPost202NonRetry400defaultResponse
  >;
}

export interface LrosaDsPostAsyncRelativeRetry400 {
  /** Long running post request, service returns a 202 to the initial request Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  post(
    options?: LrosaDsPostAsyncRelativeRetry400Parameters
  ): Promise<
    | LrosaDsPostAsyncRelativeRetry400202Response
    | LrosaDsPostAsyncRelativeRetry400defaultResponse
  >;
}

export interface LrosaDsPutError201NoProvisioningStatePayload {
  /** Long running put request, service returns a 201 to the initial request with no payload */
  put(
    options?: LrosaDsPutError201NoProvisioningStatePayloadParameters
  ): Promise<
    | LrosaDsPutError201NoProvisioningStatePayload200Response
    | LrosaDsPutError201NoProvisioningStatePayload201Response
    | LrosaDsPutError201NoProvisioningStatePayloaddefaultResponse
  >;
}

export interface LrosaDsPutAsyncRelativeRetryNoStatus {
  /** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  put(
    options?: LrosaDsPutAsyncRelativeRetryNoStatusParameters
  ): Promise<
    | LrosaDsPutAsyncRelativeRetryNoStatus200Response
    | LrosaDsPutAsyncRelativeRetryNoStatusdefaultResponse
  >;
}

export interface LrosaDsPutAsyncRelativeRetryNoStatusPayload {
  /** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  put(
    options?: LrosaDsPutAsyncRelativeRetryNoStatusPayloadParameters
  ): Promise<
    | LrosaDsPutAsyncRelativeRetryNoStatusPayload200Response
    | LrosaDsPutAsyncRelativeRetryNoStatusPayloaddefaultResponse
  >;
}

export interface LrosaDsDelete204Succeeded {
  /** Long running delete request, service returns a 204 to the initial request, indicating success. */
  delete(
    options?: LrosaDsDelete204SucceededParameters
  ): Promise<
    | LrosaDsDelete204Succeeded204Response
    | LrosaDsDelete204SucceededdefaultResponse
  >;
}

export interface LrosaDsDeleteAsyncRelativeRetryNoStatus {
  /** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  delete(
    options?: LrosaDsDeleteAsyncRelativeRetryNoStatusParameters
  ): Promise<
    | LrosaDsDeleteAsyncRelativeRetryNoStatus202Response
    | LrosaDsDeleteAsyncRelativeRetryNoStatusdefaultResponse
  >;
}

export interface LrosaDsPost202NoLocation {
  /** Long running post request, service returns a 202 to the initial request, without a location header. */
  post(
    options?: LrosaDsPost202NoLocationParameters
  ): Promise<
    | LrosaDsPost202NoLocation202Response
    | LrosaDsPost202NoLocationdefaultResponse
  >;
}

export interface LrosaDsPostAsyncRelativeRetryNoPayload {
  /** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  post(
    options?: LrosaDsPostAsyncRelativeRetryNoPayloadParameters
  ): Promise<
    | LrosaDsPostAsyncRelativeRetryNoPayload202Response
    | LrosaDsPostAsyncRelativeRetryNoPayloaddefaultResponse
  >;
}

export interface LrosaDsPut200InvalidJson {
  /** Long running put request, service returns a 200 to the initial request, with an entity that is not a valid json */
  put(
    options?: LrosaDsPut200InvalidJsonParameters
  ): Promise<
    | LrosaDsPut200InvalidJson200Response
    | LrosaDsPut200InvalidJson204Response
    | LrosaDsPut200InvalidJsondefaultResponse
  >;
}

export interface LrosaDsPutAsyncRelativeRetryInvalidHeader {
  /** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. The endpoint indicated in the Azure-AsyncOperation header is invalid. */
  put(
    options?: LrosaDsPutAsyncRelativeRetryInvalidHeaderParameters
  ): Promise<
    | LrosaDsPutAsyncRelativeRetryInvalidHeader200Response
    | LrosaDsPutAsyncRelativeRetryInvalidHeaderdefaultResponse
  >;
}

export interface LrosaDsPutAsyncRelativeRetryInvalidJsonPolling {
  /** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  put(
    options?: LrosaDsPutAsyncRelativeRetryInvalidJsonPollingParameters
  ): Promise<
    | LrosaDsPutAsyncRelativeRetryInvalidJsonPolling200Response
    | LrosaDsPutAsyncRelativeRetryInvalidJsonPollingdefaultResponse
  >;
}

export interface LrosaDsDelete202RetryInvalidHeader {
  /** Long running delete request, service returns a 202 to the initial request receing a reponse with an invalid 'Location' and 'Retry-After' headers */
  delete(
    options?: LrosaDsDelete202RetryInvalidHeaderParameters
  ): Promise<
    | LrosaDsDelete202RetryInvalidHeader202Response
    | LrosaDsDelete202RetryInvalidHeaderdefaultResponse
  >;
}

export interface LrosaDsDeleteAsyncRelativeRetryInvalidHeader {
  /** Long running delete request, service returns a 202 to the initial request. The endpoint indicated in the Azure-AsyncOperation header is invalid */
  delete(
    options?: LrosaDsDeleteAsyncRelativeRetryInvalidHeaderParameters
  ): Promise<
    | LrosaDsDeleteAsyncRelativeRetryInvalidHeader202Response
    | LrosaDsDeleteAsyncRelativeRetryInvalidHeaderdefaultResponse
  >;
}

export interface LrosaDsDeleteAsyncRelativeRetryInvalidJsonPolling {
  /** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  delete(
    options?: LrosaDsDeleteAsyncRelativeRetryInvalidJsonPollingParameters
  ): Promise<
    | LrosaDsDeleteAsyncRelativeRetryInvalidJsonPolling202Response
    | LrosaDsDeleteAsyncRelativeRetryInvalidJsonPollingdefaultResponse
  >;
}

export interface LrosaDsPost202RetryInvalidHeader {
  /** Long running post request, service returns a 202 to the initial request, with invalid 'Location' and 'Retry-After' headers. */
  post(
    options?: LrosaDsPost202RetryInvalidHeaderParameters
  ): Promise<
    | LrosaDsPost202RetryInvalidHeader202Response
    | LrosaDsPost202RetryInvalidHeaderdefaultResponse
  >;
}

export interface LrosaDsPostAsyncRelativeRetryInvalidHeader {
  /** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. The endpoint indicated in the Azure-AsyncOperation header is invalid. */
  post(
    options?: LrosaDsPostAsyncRelativeRetryInvalidHeaderParameters
  ): Promise<
    | LrosaDsPostAsyncRelativeRetryInvalidHeader202Response
    | LrosaDsPostAsyncRelativeRetryInvalidHeaderdefaultResponse
  >;
}

export interface LrosaDsPostAsyncRelativeRetryInvalidJsonPolling {
  /** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  post(
    options?: LrosaDsPostAsyncRelativeRetryInvalidJsonPollingParameters
  ): Promise<
    | LrosaDsPostAsyncRelativeRetryInvalidJsonPolling202Response
    | LrosaDsPostAsyncRelativeRetryInvalidJsonPollingdefaultResponse
  >;
}

export interface LROsCustomHeaderPutAsyncRetrySucceeded {
  /** x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all requests. Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  put(
    options?: LROsCustomHeaderPutAsyncRetrySucceededParameters
  ): Promise<
    | LROsCustomHeaderPutAsyncRetrySucceeded200Response
    | LROsCustomHeaderPutAsyncRetrySucceededdefaultResponse
  >;
}

export interface LROsCustomHeaderPut201CreatingSucceeded200 {
  /** x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all requests. Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
  put(
    options?: LROsCustomHeaderPut201CreatingSucceeded200Parameters
  ): Promise<
    | LROsCustomHeaderPut201CreatingSucceeded200200Response
    | LROsCustomHeaderPut201CreatingSucceeded200201Response
    | LROsCustomHeaderPut201CreatingSucceeded200defaultResponse
  >;
}

export interface LROsCustomHeaderPost202Retry200 {
  /** x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all requests. Long running post request, service returns a 202 to the initial request, with 'Location' and 'Retry-After' headers, Polls return a 200 with a response body after success */
  post(
    options?: LROsCustomHeaderPost202Retry200Parameters
  ): Promise<
    | LROsCustomHeaderPost202Retry200202Response
    | LROsCustomHeaderPost202Retry200defaultResponse
  >;
}

export interface LROsCustomHeaderPostAsyncRetrySucceeded {
  /** x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all requests. Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  post(
    options?: LROsCustomHeaderPostAsyncRetrySucceededParameters
  ): Promise<
    | LROsCustomHeaderPostAsyncRetrySucceeded202Response
    | LROsCustomHeaderPostAsyncRetrySucceededdefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/lro/put/200/succeeded' has methods for the following verbs: put */
  (path: "/lro/put/200/succeeded"): LROsPut200Succeeded;
  /** Resource for '/lro/patch/200/succeeded/ignoreheaders' has methods for the following verbs: patch */
  (
    path: "/lro/patch/200/succeeded/ignoreheaders"
  ): LROsPatch200SucceededIgnoreHeaders;
  /** Resource for '/lro/patch/201/retry/onlyAsyncHeader' has methods for the following verbs: patch */
  (
    path: "/lro/patch/201/retry/onlyAsyncHeader"
  ): LROsPatch201RetryWithAsyncHeader;
  /** Resource for '/lro/patch/202/retry/asyncAndLocationHeader' has methods for the following verbs: patch */
  (
    path: "/lro/patch/202/retry/asyncAndLocationHeader"
  ): LROsPatch202RetryWithAsyncAndLocationHeader;
  /** Resource for '/lro/put/201/succeeded' has methods for the following verbs: put */
  (path: "/lro/put/201/succeeded"): LROsPut201Succeeded;
  /** Resource for '/lro/list' has methods for the following verbs: post */
  (path: "/lro/list"): LROsPost202List;
  /** Resource for '/lro/put/200/succeeded/nostate' has methods for the following verbs: put */
  (path: "/lro/put/200/succeeded/nostate"): LROsPut200SucceededNoState;
  /** Resource for '/lro/put/202/retry/200' has methods for the following verbs: put */
  (path: "/lro/put/202/retry/200"): LROsPut202Retry200;
  /** Resource for '/lro/put/201/creating/succeeded/200' has methods for the following verbs: put */
  (path: "/lro/put/201/creating/succeeded/200"): LROsPut201CreatingSucceeded200;
  /** Resource for '/lro/put/200/updating/succeeded/200' has methods for the following verbs: put */
  (path: "/lro/put/200/updating/succeeded/200"): LROsPut200UpdatingSucceeded204;
  /** Resource for '/lro/put/201/created/failed/200' has methods for the following verbs: put */
  (path: "/lro/put/201/created/failed/200"): LROsPut201CreatingFailed200;
  /** Resource for '/lro/put/200/accepted/canceled/200' has methods for the following verbs: put */
  (path: "/lro/put/200/accepted/canceled/200"): LROsPut200Acceptedcanceled200;
  /** Resource for '/lro/put/noheader/202/200' has methods for the following verbs: put */
  (path: "/lro/put/noheader/202/200"): LROsPutNoHeaderInRetry;
  /** Resource for '/lro/putasync/retry/succeeded' has methods for the following verbs: put */
  (path: "/lro/putasync/retry/succeeded"): LROsPutAsyncRetrySucceeded;
  /** Resource for '/lro/putasync/noretry/succeeded' has methods for the following verbs: put */
  (path: "/lro/putasync/noretry/succeeded"): LROsPutAsyncNoRetrySucceeded;
  /** Resource for '/lro/putasync/retry/failed' has methods for the following verbs: put */
  (path: "/lro/putasync/retry/failed"): LROsPutAsyncRetryFailed;
  /** Resource for '/lro/putasync/noretry/canceled' has methods for the following verbs: put */
  (path: "/lro/putasync/noretry/canceled"): LROsPutAsyncNoRetrycanceled;
  /** Resource for '/lro/putasync/noheader/201/200' has methods for the following verbs: put */
  (path: "/lro/putasync/noheader/201/200"): LROsPutAsyncNoHeaderInRetry;
  /** Resource for '/lro/putnonresource/202/200' has methods for the following verbs: put */
  (path: "/lro/putnonresource/202/200"): LROsPutNonResource;
  /** Resource for '/lro/putnonresourceasync/202/200' has methods for the following verbs: put */
  (path: "/lro/putnonresourceasync/202/200"): LROsPutAsyncNonResource;
  /** Resource for '/lro/putsubresource/202/200' has methods for the following verbs: put */
  (path: "/lro/putsubresource/202/200"): LROsPutSubResource;
  /** Resource for '/lro/putsubresourceasync/202/200' has methods for the following verbs: put */
  (path: "/lro/putsubresourceasync/202/200"): LROsPutAsyncSubResource;
  /** Resource for '/lro/delete/provisioning/202/accepted/200/succeeded' has methods for the following verbs: delete */
  (
    path: "/lro/delete/provisioning/202/accepted/200/succeeded"
  ): LROsDeleteProvisioning202Accepted200Succeeded;
  /** Resource for '/lro/delete/provisioning/202/deleting/200/failed' has methods for the following verbs: delete */
  (
    path: "/lro/delete/provisioning/202/deleting/200/failed"
  ): LROsDeleteProvisioning202DeletingFailed200;
  /** Resource for '/lro/delete/provisioning/202/deleting/200/canceled' has methods for the following verbs: delete */
  (
    path: "/lro/delete/provisioning/202/deleting/200/canceled"
  ): LROsDeleteProvisioning202Deletingcanceled200;
  /** Resource for '/lro/delete/204/succeeded' has methods for the following verbs: delete */
  (path: "/lro/delete/204/succeeded"): LROsDelete204Succeeded;
  /** Resource for '/lro/delete/202/retry/200' has methods for the following verbs: delete */
  (path: "/lro/delete/202/retry/200"): LROsDelete202Retry200;
  /** Resource for '/lro/delete/202/noretry/204' has methods for the following verbs: delete */
  (path: "/lro/delete/202/noretry/204"): LROsDelete202NoRetry204;
  /** Resource for '/lro/delete/noheader' has methods for the following verbs: delete */
  (path: "/lro/delete/noheader"): LROsDeleteNoHeaderInRetry;
  /** Resource for '/lro/deleteasync/noheader/202/204' has methods for the following verbs: delete */
  (path: "/lro/deleteasync/noheader/202/204"): LROsDeleteAsyncNoHeaderInRetry;
  /** Resource for '/lro/deleteasync/retry/succeeded' has methods for the following verbs: delete */
  (path: "/lro/deleteasync/retry/succeeded"): LROsDeleteAsyncRetrySucceeded;
  /** Resource for '/lro/deleteasync/noretry/succeeded' has methods for the following verbs: delete */
  (path: "/lro/deleteasync/noretry/succeeded"): LROsDeleteAsyncNoRetrySucceeded;
  /** Resource for '/lro/deleteasync/retry/failed' has methods for the following verbs: delete */
  (path: "/lro/deleteasync/retry/failed"): LROsDeleteAsyncRetryFailed;
  /** Resource for '/lro/deleteasync/retry/canceled' has methods for the following verbs: delete */
  (path: "/lro/deleteasync/retry/canceled"): LROsDeleteAsyncRetrycanceled;
  /** Resource for '/lro/post/payload/200' has methods for the following verbs: post */
  (path: "/lro/post/payload/200"): LROsPost200WithPayload;
  /** Resource for '/lro/post/202/retry/200' has methods for the following verbs: post */
  (path: "/lro/post/202/retry/200"): LROsPost202Retry200;
  /** Resource for '/lro/post/202/noretry/204' has methods for the following verbs: post */
  (path: "/lro/post/202/noretry/204"): LROsPost202NoRetry204;
  /** Resource for '/lro/LROPostDoubleHeadersFinalLocationGet' has methods for the following verbs: post */
  (
    path: "/lro/LROPostDoubleHeadersFinalLocationGet"
  ): LROsPostDoubleHeadersFinalLocationGet;
  /** Resource for '/lro/LROPostDoubleHeadersFinalAzureHeaderGet' has methods for the following verbs: post */
  (
    path: "/lro/LROPostDoubleHeadersFinalAzureHeaderGet"
  ): LROsPostDoubleHeadersFinalAzureHeaderGet;
  /** Resource for '/lro/LROPostDoubleHeadersFinalAzureHeaderGetDefault' has methods for the following verbs: post */
  (
    path: "/lro/LROPostDoubleHeadersFinalAzureHeaderGetDefault"
  ): LROsPostDoubleHeadersFinalAzureHeaderGetDefault;
  /** Resource for '/lro/postasync/retry/succeeded' has methods for the following verbs: post */
  (path: "/lro/postasync/retry/succeeded"): LROsPostAsyncRetrySucceeded;
  /** Resource for '/lro/postasync/noretry/succeeded' has methods for the following verbs: post */
  (path: "/lro/postasync/noretry/succeeded"): LROsPostAsyncNoRetrySucceeded;
  /** Resource for '/lro/postasync/retry/failed' has methods for the following verbs: post */
  (path: "/lro/postasync/retry/failed"): LROsPostAsyncRetryFailed;
  /** Resource for '/lro/postasync/retry/canceled' has methods for the following verbs: post */
  (path: "/lro/postasync/retry/canceled"): LROsPostAsyncRetrycanceled;
  /** Resource for '/lro/retryerror/put/201/creating/succeeded/200' has methods for the following verbs: put */
  (
    path: "/lro/retryerror/put/201/creating/succeeded/200"
  ): LRORetrysPut201CreatingSucceeded200;
  /** Resource for '/lro/retryerror/putasync/retry/succeeded' has methods for the following verbs: put */
  (
    path: "/lro/retryerror/putasync/retry/succeeded"
  ): LRORetrysPutAsyncRelativeRetrySucceeded;
  /** Resource for '/lro/retryerror/delete/provisioning/202/accepted/200/succeeded' has methods for the following verbs: delete */
  (
    path: "/lro/retryerror/delete/provisioning/202/accepted/200/succeeded"
  ): LRORetrysDeleteProvisioning202Accepted200Succeeded;
  /** Resource for '/lro/retryerror/delete/202/retry/200' has methods for the following verbs: delete */
  (path: "/lro/retryerror/delete/202/retry/200"): LRORetrysDelete202Retry200;
  /** Resource for '/lro/retryerror/deleteasync/retry/succeeded' has methods for the following verbs: delete */
  (
    path: "/lro/retryerror/deleteasync/retry/succeeded"
  ): LRORetrysDeleteAsyncRelativeRetrySucceeded;
  /** Resource for '/lro/retryerror/post/202/retry/200' has methods for the following verbs: post */
  (path: "/lro/retryerror/post/202/retry/200"): LRORetrysPost202Retry200;
  /** Resource for '/lro/retryerror/postasync/retry/succeeded' has methods for the following verbs: post */
  (
    path: "/lro/retryerror/postasync/retry/succeeded"
  ): LRORetrysPostAsyncRelativeRetrySucceeded;
  /** Resource for '/lro/nonretryerror/put/400' has methods for the following verbs: put */
  (path: "/lro/nonretryerror/put/400"): LrosaDsPutNonRetry400;
  /** Resource for '/lro/nonretryerror/put/201/creating/400' has methods for the following verbs: put */
  (
    path: "/lro/nonretryerror/put/201/creating/400"
  ): LrosaDsPutNonRetry201Creating400;
  /** Resource for '/lro/nonretryerror/put/201/creating/400/invalidjson' has methods for the following verbs: put */
  (
    path: "/lro/nonretryerror/put/201/creating/400/invalidjson"
  ): LrosaDsPutNonRetry201Creating400InvalidJson;
  /** Resource for '/lro/nonretryerror/putasync/retry/400' has methods for the following verbs: put */
  (
    path: "/lro/nonretryerror/putasync/retry/400"
  ): LrosaDsPutAsyncRelativeRetry400;
  /** Resource for '/lro/nonretryerror/delete/400' has methods for the following verbs: delete */
  (path: "/lro/nonretryerror/delete/400"): LrosaDsDeleteNonRetry400;
  /** Resource for '/lro/nonretryerror/delete/202/retry/400' has methods for the following verbs: delete */
  (
    path: "/lro/nonretryerror/delete/202/retry/400"
  ): LrosaDsDelete202NonRetry400;
  /** Resource for '/lro/nonretryerror/deleteasync/retry/400' has methods for the following verbs: delete */
  (
    path: "/lro/nonretryerror/deleteasync/retry/400"
  ): LrosaDsDeleteAsyncRelativeRetry400;
  /** Resource for '/lro/nonretryerror/post/400' has methods for the following verbs: post */
  (path: "/lro/nonretryerror/post/400"): LrosaDsPostNonRetry400;
  /** Resource for '/lro/nonretryerror/post/202/retry/400' has methods for the following verbs: post */
  (path: "/lro/nonretryerror/post/202/retry/400"): LrosaDsPost202NonRetry400;
  /** Resource for '/lro/nonretryerror/postasync/retry/400' has methods for the following verbs: post */
  (
    path: "/lro/nonretryerror/postasync/retry/400"
  ): LrosaDsPostAsyncRelativeRetry400;
  /** Resource for '/lro/error/put/201/noprovisioningstatepayload' has methods for the following verbs: put */
  (
    path: "/lro/error/put/201/noprovisioningstatepayload"
  ): LrosaDsPutError201NoProvisioningStatePayload;
  /** Resource for '/lro/error/putasync/retry/nostatus' has methods for the following verbs: put */
  (
    path: "/lro/error/putasync/retry/nostatus"
  ): LrosaDsPutAsyncRelativeRetryNoStatus;
  /** Resource for '/lro/error/putasync/retry/nostatuspayload' has methods for the following verbs: put */
  (
    path: "/lro/error/putasync/retry/nostatuspayload"
  ): LrosaDsPutAsyncRelativeRetryNoStatusPayload;
  /** Resource for '/lro/error/delete/204/nolocation' has methods for the following verbs: delete */
  (path: "/lro/error/delete/204/nolocation"): LrosaDsDelete204Succeeded;
  /** Resource for '/lro/error/deleteasync/retry/nostatus' has methods for the following verbs: delete */
  (
    path: "/lro/error/deleteasync/retry/nostatus"
  ): LrosaDsDeleteAsyncRelativeRetryNoStatus;
  /** Resource for '/lro/error/post/202/nolocation' has methods for the following verbs: post */
  (path: "/lro/error/post/202/nolocation"): LrosaDsPost202NoLocation;
  /** Resource for '/lro/error/postasync/retry/nopayload' has methods for the following verbs: post */
  (
    path: "/lro/error/postasync/retry/nopayload"
  ): LrosaDsPostAsyncRelativeRetryNoPayload;
  /** Resource for '/lro/error/put/200/invalidjson' has methods for the following verbs: put */
  (path: "/lro/error/put/200/invalidjson"): LrosaDsPut200InvalidJson;
  /** Resource for '/lro/error/putasync/retry/invalidheader' has methods for the following verbs: put */
  (
    path: "/lro/error/putasync/retry/invalidheader"
  ): LrosaDsPutAsyncRelativeRetryInvalidHeader;
  /** Resource for '/lro/error/putasync/retry/invalidjsonpolling' has methods for the following verbs: put */
  (
    path: "/lro/error/putasync/retry/invalidjsonpolling"
  ): LrosaDsPutAsyncRelativeRetryInvalidJsonPolling;
  /** Resource for '/lro/error/delete/202/retry/invalidheader' has methods for the following verbs: delete */
  (
    path: "/lro/error/delete/202/retry/invalidheader"
  ): LrosaDsDelete202RetryInvalidHeader;
  /** Resource for '/lro/error/deleteasync/retry/invalidheader' has methods for the following verbs: delete */
  (
    path: "/lro/error/deleteasync/retry/invalidheader"
  ): LrosaDsDeleteAsyncRelativeRetryInvalidHeader;
  /** Resource for '/lro/error/deleteasync/retry/invalidjsonpolling' has methods for the following verbs: delete */
  (
    path: "/lro/error/deleteasync/retry/invalidjsonpolling"
  ): LrosaDsDeleteAsyncRelativeRetryInvalidJsonPolling;
  /** Resource for '/lro/error/post/202/retry/invalidheader' has methods for the following verbs: post */
  (
    path: "/lro/error/post/202/retry/invalidheader"
  ): LrosaDsPost202RetryInvalidHeader;
  /** Resource for '/lro/error/postasync/retry/invalidheader' has methods for the following verbs: post */
  (
    path: "/lro/error/postasync/retry/invalidheader"
  ): LrosaDsPostAsyncRelativeRetryInvalidHeader;
  /** Resource for '/lro/error/postasync/retry/invalidjsonpolling' has methods for the following verbs: post */
  (
    path: "/lro/error/postasync/retry/invalidjsonpolling"
  ): LrosaDsPostAsyncRelativeRetryInvalidJsonPolling;
  /** Resource for '/lro/customheader/putasync/retry/succeeded' has methods for the following verbs: put */
  (
    path: "/lro/customheader/putasync/retry/succeeded"
  ): LROsCustomHeaderPutAsyncRetrySucceeded;
  /** Resource for '/lro/customheader/put/201/creating/succeeded/200' has methods for the following verbs: put */
  (
    path: "/lro/customheader/put/201/creating/succeeded/200"
  ): LROsCustomHeaderPut201CreatingSucceeded200;
  /** Resource for '/lro/customheader/post/202/retry/200' has methods for the following verbs: post */
  (
    path: "/lro/customheader/post/202/retry/200"
  ): LROsCustomHeaderPost202Retry200;
  /** Resource for '/lro/customheader/postasync/retry/succeeded' has methods for the following verbs: post */
  (
    path: "/lro/customheader/postasync/retry/succeeded"
  ): LROsCustomHeaderPostAsyncRetrySucceeded;
}

export type LRORestClient = Client & {
  path: Routes;
};
