// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { BatchServiceContext as Client, isUnexpected } from "../rest/index.js";
import {
  OperationRawReturnType,
  RequestOptions,
} from "../common/interfaces.js";
import { ApplicationListResult, Application } from "./models.js";

export interface ApplicationsListApplicationsOptions extends RequestOptions {
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  maxresults?: number;
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  ocpDate?: string;
  /**
   * The maximum number of items to return in the response. A maximum of 1000
   * applications can be returned.
   */
  timeOut?: number;
  /**
   * The caller-generated request identity, in the form of a GUID with no decoration
   * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  clientRequestId?: string;
  /** Whether the server should return the client-request-id in the response. */
  returnClientRequestId?: boolean;
}

async function _listApplicationsSend(
  context: Client,
  options: ApplicationsListApplicationsOptions = { requestOptions: {} }
) {
  return context
    .path("/applications")
    .get({
      allowInsecureConnection: options.requestOptions?.allowInsecureConnection,
      skipUrlEncoding: options.requestOptions?.skipUrlEncoding,
      headers: {
        ...(options.ocpDate && { "ocp-date": options.ocpDate }),
        ...(options.clientRequestId && {
          "client-request-id": options.clientRequestId,
        }),
        ...(options.returnClientRequestId && {
          "return-client-request-id": options.returnClientRequestId,
        }),
        ...options.requestOptions?.headers,
      },
      queryParameters: {
        ...(options.maxresults && { maxresults: options.maxresults }),
        ...(options.timeOut && { timeOut: options.timeOut }),
      },
    });
}

async function _listApplicationsDeserialize(
  result: OperationRawReturnType<typeof _listApplicationsSend>
): Promise<ApplicationListResult> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    value: (result.body["value"] ?? []).map((p) => ({
      id: p["id"],
      displayName: p["displayName"],
      versions: p["versions"],
    })),
    "odata.nextLink": result.body["odata.nextLink"],
  };
}

/**
 * This operation returns only Applications and versions that are available for
 * use on Compute Nodes; that is, that can be used in an Package reference. For
 * administrator information about applications and versions that are not yet
 * available to Compute Nodes, use the Azure portal or the Azure Resource Manager
 * API.
 */
export async function listApplications(
  context: Client,
  options: ApplicationsListApplicationsOptions = { requestOptions: {} }
): Promise<ApplicationListResult> {
  const result = await _listApplicationsSend(context, options);
  return _listApplicationsDeserialize(result);
}

export interface ApplicationsGetOptions extends RequestOptions {}

async function _getSend(
  context: Client,
  applicationId: string,
  options: ApplicationsGetOptions = { requestOptions: {} }
) {
  return context
    .path("/applications/{applicationId}", applicationId)
    .get({
      allowInsecureConnection: options.requestOptions?.allowInsecureConnection,
      skipUrlEncoding: options.requestOptions?.skipUrlEncoding,
      headers: { ...options.requestOptions?.headers },
    });
}

async function _getDeserialize(
  result: OperationRawReturnType<typeof _getSend>
): Promise<Application> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    displayName: result.body["displayName"],
    versions: result.body["versions"],
  };
}

/**
 * This operation returns only Applications and versions that are available for
 * use on Compute Nodes; that is, that can be used in an Package reference. For
 * administrator information about Applications and versions that are not yet
 * available to Compute Nodes, use the Azure portal or the Azure Resource Manager
 * API.
 */
export async function get(
  context: Client,
  applicationId: string,
  options: ApplicationsGetOptions = { requestOptions: {} }
): Promise<Application> {
  const result = await _getSend(context, applicationId, options);
  return _getDeserialize(result);
}
