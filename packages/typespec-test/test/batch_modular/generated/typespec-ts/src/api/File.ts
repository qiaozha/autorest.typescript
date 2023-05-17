// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { BatchServiceContext as Client, isUnexpected } from "../rest/index.js";
import {
  OperationRawReturnType,
  RequestOptions,
} from "../common/interfaces.js";
import { NodeFileListResult } from "./models.js";

export interface FileDeleteFromTaskOptions extends RequestOptions {
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
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  ocpDate?: string;
  /**
   * Whether to delete children of a directory. If the filePath parameter represents
   * a directory instead of a file, you can set recursive to true to delete the
   * directory and all of the files and subdirectories in it. If recursive is false
   * then the directory must be empty or deletion will fail.
   */
  recursive?: boolean;
}

async function _deleteFromTaskSend(
  context: Client,
  jobId: string,
  taskId: string,
  filePath: string,
  options: FileDeleteFromTaskOptions = { requestOptions: {} }
) {
  return context
    .path(
      "/jobs/{jobId}/tasks/{taskId}/files/{filePath}",
      jobId,
      taskId,
      filePath
    )
    .delete({
      allowInsecureConnection: options.requestOptions?.allowInsecureConnection,
      skipUrlEncoding: options.requestOptions?.skipUrlEncoding,
      headers: {
        ...(options.clientRequestId && {
          "client-request-id": options.clientRequestId,
        }),
        ...(options.returnClientRequestId && {
          "return-client-request-id": options.returnClientRequestId,
        }),
        ...(options.ocpDate && { "ocp-date": options.ocpDate }),
        ...options.requestOptions?.headers,
      },
      queryParameters: {
        ...(options.timeOut && { timeOut: options.timeOut }),
        ...(options.recursive && { recursive: options.recursive }),
      },
    });
}

async function _deleteFromTaskDeserialize(
  result: OperationRawReturnType<typeof _deleteFromTaskSend>
): Promise<void> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return;
}

/** Deletes the specified Task file from the Compute Node where the Task ran. */
export async function deleteFromTask(
  context: Client,
  jobId: string,
  taskId: string,
  filePath: string,
  options: FileDeleteFromTaskOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _deleteFromTaskSend(
    context,
    jobId,
    taskId,
    filePath,
    options
  );
  return _deleteFromTaskDeserialize(result);
}

export interface FileGetFromTaskOptions extends RequestOptions {
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
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  ocpDate?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  ifModifiedSince?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  ifUnmodifiedSince?: string;
  /**
   * The byte range to be retrieved. The default is to retrieve the entire file. The
   * format is bytes=startRange-endRange.
   */
  ocpRange?: string;
}

async function _getFromTaskSend(
  context: Client,
  jobId: string,
  taskId: string,
  filePath: string,
  options: FileGetFromTaskOptions = { requestOptions: {} }
) {
  return context
    .path(
      "/jobs/{jobId}/tasks/{taskId}/files/{filePath}",
      jobId,
      taskId,
      filePath
    )
    .get({
      allowInsecureConnection: options.requestOptions?.allowInsecureConnection,
      skipUrlEncoding: options.requestOptions?.skipUrlEncoding,
      headers: {
        ...(options.clientRequestId && {
          "client-request-id": options.clientRequestId,
        }),
        ...(options.returnClientRequestId && {
          "return-client-request-id": options.returnClientRequestId,
        }),
        ...(options.ocpDate && { "ocp-date": options.ocpDate }),
        ...(options.ifModifiedSince && {
          "if-modified-since": options.ifModifiedSince,
        }),
        ...(options.ifUnmodifiedSince && {
          "if-unmodified-since": options.ifUnmodifiedSince,
        }),
        ...(options.ocpRange && { "ocp-range": options.ocpRange }),
        ...options.requestOptions?.headers,
      },
      queryParameters: { ...(options.timeOut && { timeOut: options.timeOut }) },
    });
}

async function _getFromTaskDeserialize(
  result: OperationRawReturnType<typeof _getFromTaskSend>
): Promise<any> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return result.body;
}

/** Returns the content of the specified Task file. */
export async function getFromTask(
  context: Client,
  jobId: string,
  taskId: string,
  filePath: string,
  options: FileGetFromTaskOptions = { requestOptions: {} }
): Promise<any> {
  const result = await _getFromTaskSend(
    context,
    jobId,
    taskId,
    filePath,
    options
  );
  return _getFromTaskDeserialize(result);
}

export interface FileGetPropertiesFromTaskOptions extends RequestOptions {
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
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  ocpDate?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  ifModifiedSince?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  ifUnmodifiedSince?: string;
}

async function _getPropertiesFromTaskSend(
  context: Client,
  jobId: string,
  taskId: string,
  filePath: string,
  options: FileGetPropertiesFromTaskOptions = { requestOptions: {} }
) {
  return context
    .path(
      "/jobs/{jobId}/tasks/{taskId}/files/{filePath}",
      jobId,
      taskId,
      filePath
    )
    .head({
      allowInsecureConnection: options.requestOptions?.allowInsecureConnection,
      skipUrlEncoding: options.requestOptions?.skipUrlEncoding,
      headers: {
        ...(options.clientRequestId && {
          "client-request-id": options.clientRequestId,
        }),
        ...(options.returnClientRequestId && {
          "return-client-request-id": options.returnClientRequestId,
        }),
        ...(options.ocpDate && { "ocp-date": options.ocpDate }),
        ...(options.ifModifiedSince && {
          "if-modified-since": options.ifModifiedSince,
        }),
        ...(options.ifUnmodifiedSince && {
          "if-unmodified-since": options.ifUnmodifiedSince,
        }),
        ...options.requestOptions?.headers,
      },
      queryParameters: { ...(options.timeOut && { timeOut: options.timeOut }) },
    });
}

async function _getPropertiesFromTaskDeserialize(
  result: OperationRawReturnType<typeof _getPropertiesFromTaskSend>
): Promise<void> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return;
}

/** Gets the properties of the specified Task file. */
export async function getPropertiesFromTask(
  context: Client,
  jobId: string,
  taskId: string,
  filePath: string,
  options: FileGetPropertiesFromTaskOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _getPropertiesFromTaskSend(
    context,
    jobId,
    taskId,
    filePath,
    options
  );
  return _getPropertiesFromTaskDeserialize(result);
}

export interface FileDeleteFromComputeNodeOptions extends RequestOptions {
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
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  ocpDate?: string;
  /**
   * Whether to delete children of a directory. If the filePath parameter represents
   * a directory instead of a file, you can set recursive to true to delete the
   * directory and all of the files and subdirectories in it. If recursive is false
   * then the directory must be empty or deletion will fail.
   */
  recursive?: boolean;
}

async function _deleteFromComputeNodeSend(
  context: Client,
  poolId: string,
  nodeId: string,
  filePath: string,
  options: FileDeleteFromComputeNodeOptions = { requestOptions: {} }
) {
  return context
    .path(
      "/pools/{poolId}/nodes/{nodeId}/files/{filePath}",
      poolId,
      nodeId,
      filePath
    )
    .delete({
      allowInsecureConnection: options.requestOptions?.allowInsecureConnection,
      skipUrlEncoding: options.requestOptions?.skipUrlEncoding,
      headers: {
        ...(options.clientRequestId && {
          "client-request-id": options.clientRequestId,
        }),
        ...(options.returnClientRequestId && {
          "return-client-request-id": options.returnClientRequestId,
        }),
        ...(options.ocpDate && { "ocp-date": options.ocpDate }),
        ...options.requestOptions?.headers,
      },
      queryParameters: {
        ...(options.timeOut && { timeOut: options.timeOut }),
        ...(options.recursive && { recursive: options.recursive }),
      },
    });
}

async function _deleteFromComputeNodeDeserialize(
  result: OperationRawReturnType<typeof _deleteFromComputeNodeSend>
): Promise<void> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return;
}

/** Deletes the specified file from the Compute Node. */
export async function deleteFromComputeNode(
  context: Client,
  poolId: string,
  nodeId: string,
  filePath: string,
  options: FileDeleteFromComputeNodeOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _deleteFromComputeNodeSend(
    context,
    poolId,
    nodeId,
    filePath,
    options
  );
  return _deleteFromComputeNodeDeserialize(result);
}

export interface FileGetFromComputeNodeOptions extends RequestOptions {
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
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  ocpDate?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  ifModifiedSince?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  ifUnmodifiedSince?: string;
  /**
   * The byte range to be retrieved. The default is to retrieve the entire file. The
   * format is bytes=startRange-endRange.
   */
  ocpRange?: string;
}

async function _getFromComputeNodeSend(
  context: Client,
  poolId: string,
  nodeId: string,
  filePath: string,
  options: FileGetFromComputeNodeOptions = { requestOptions: {} }
) {
  return context
    .path(
      "/pools/{poolId}/nodes/{nodeId}/files/{filePath}",
      poolId,
      nodeId,
      filePath
    )
    .get({
      allowInsecureConnection: options.requestOptions?.allowInsecureConnection,
      skipUrlEncoding: options.requestOptions?.skipUrlEncoding,
      headers: {
        ...(options.clientRequestId && {
          "client-request-id": options.clientRequestId,
        }),
        ...(options.returnClientRequestId && {
          "return-client-request-id": options.returnClientRequestId,
        }),
        ...(options.ocpDate && { "ocp-date": options.ocpDate }),
        ...(options.ifModifiedSince && {
          "if-modified-since": options.ifModifiedSince,
        }),
        ...(options.ifUnmodifiedSince && {
          "if-unmodified-since": options.ifUnmodifiedSince,
        }),
        ...(options.ocpRange && { "ocp-range": options.ocpRange }),
        ...options.requestOptions?.headers,
      },
      queryParameters: { ...(options.timeOut && { timeOut: options.timeOut }) },
    });
}

async function _getFromComputeNodeDeserialize(
  result: OperationRawReturnType<typeof _getFromComputeNodeSend>
): Promise<any> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return result.body;
}

/** Returns the content of the specified Compute Node file. */
export async function getFromComputeNode(
  context: Client,
  poolId: string,
  nodeId: string,
  filePath: string,
  options: FileGetFromComputeNodeOptions = { requestOptions: {} }
): Promise<any> {
  const result = await _getFromComputeNodeSend(
    context,
    poolId,
    nodeId,
    filePath,
    options
  );
  return _getFromComputeNodeDeserialize(result);
}

export interface FileGetPropertiesFromComputeNodeOptions
  extends RequestOptions {
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
  /**
   * The time the request was issued. Client libraries typically set this to the
   * current system clock time; set it explicitly if you are calling the REST API
   * directly.
   */
  ocpDate?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * been modified since the specified time.
   */
  ifModifiedSince?: string;
  /**
   * A timestamp indicating the last modified time of the resource known to the
   * client. The operation will be performed only if the resource on the service has
   * not been modified since the specified time.
   */
  ifUnmodifiedSince?: string;
}

async function _getPropertiesFromComputeNodeSend(
  context: Client,
  poolId: string,
  nodeId: string,
  filePath: string,
  options: FileGetPropertiesFromComputeNodeOptions = { requestOptions: {} }
) {
  return context
    .path(
      "/pools/{poolId}/nodes/{nodeId}/files/{filePath}",
      poolId,
      nodeId,
      filePath
    )
    .head({
      allowInsecureConnection: options.requestOptions?.allowInsecureConnection,
      skipUrlEncoding: options.requestOptions?.skipUrlEncoding,
      headers: {
        ...(options.clientRequestId && {
          "client-request-id": options.clientRequestId,
        }),
        ...(options.returnClientRequestId && {
          "return-client-request-id": options.returnClientRequestId,
        }),
        ...(options.ocpDate && { "ocp-date": options.ocpDate }),
        ...(options.ifModifiedSince && {
          "if-modified-since": options.ifModifiedSince,
        }),
        ...(options.ifUnmodifiedSince && {
          "if-unmodified-since": options.ifUnmodifiedSince,
        }),
        ...options.requestOptions?.headers,
      },
      queryParameters: { ...(options.timeOut && { timeOut: options.timeOut }) },
    });
}

async function _getPropertiesFromComputeNodeDeserialize(
  result: OperationRawReturnType<typeof _getPropertiesFromComputeNodeSend>
): Promise<void> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return;
}

/** Gets the properties of the specified Compute Node file. */
export async function getPropertiesFromComputeNode(
  context: Client,
  poolId: string,
  nodeId: string,
  filePath: string,
  options: FileGetPropertiesFromComputeNodeOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _getPropertiesFromComputeNodeSend(
    context,
    poolId,
    nodeId,
    filePath,
    options
  );
  return _getPropertiesFromComputeNodeDeserialize(result);
}

export interface FileListFromTaskOptions extends RequestOptions {
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
  /**
   * An OData $filter clause. For more information on constructing this filter, see
   * https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-task-files.
   */
  $filter?: string;
  /**
   * Whether to list children of the Task directory. This parameter can be used in
   * combination with the filter parameter to list specific type of files.
   */
  recursive?: boolean;
}

async function _listFromTaskSend(
  context: Client,
  jobId: string,
  taskId: string,
  options: FileListFromTaskOptions = { requestOptions: {} }
) {
  return context
    .path("/jobs/{jobId}/tasks/{taskId}/files", jobId, taskId)
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
        ...(options.$filter && { $filter: options.$filter }),
        ...(options.recursive && { recursive: options.recursive }),
      },
    });
}

async function _listFromTaskDeserialize(
  result: OperationRawReturnType<typeof _listFromTaskSend>
): Promise<NodeFileListResult> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    value: (result.body["value"] ?? []).map((p) => ({
      name: p["name"],
      url: p["url"],
      isDirectory: p["isDirectory"],
      properties: !p.properties
        ? undefined
        : {
            creationTime: new Date(p.properties?.["creationTime"] ?? ""),
            lastModified: new Date(p.properties?.["lastModified"] ?? ""),
            contentLength: p.properties?.["contentLength"],
            contentType: p.properties?.["contentType"],
            fileMode: p.properties?.["fileMode"],
          },
    })),
    "odata.nextLink": result.body["odata.nextLink"],
  };
}

/** Lists the files in a Task's directory on its Compute Node. */
export async function listFromTask(
  context: Client,
  jobId: string,
  taskId: string,
  options: FileListFromTaskOptions = { requestOptions: {} }
): Promise<NodeFileListResult> {
  const result = await _listFromTaskSend(context, jobId, taskId, options);
  return _listFromTaskDeserialize(result);
}

export interface FileListFromComputeNodeOptions extends RequestOptions {
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
  /**
   * An OData $filter clause. For more information on constructing this filter, see
   * https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-compute-node-files.
   */
  $filter?: string;
  /** Whether to list children of a directory. */
  recursive?: boolean;
}

async function _listFromComputeNodeSend(
  context: Client,
  poolId: string,
  nodeId: string,
  options: FileListFromComputeNodeOptions = { requestOptions: {} }
) {
  return context
    .path("/pools/{poolId}/nodes/{nodeId}/files", poolId, nodeId)
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
        ...(options.$filter && { $filter: options.$filter }),
        ...(options.recursive && { recursive: options.recursive }),
      },
    });
}

async function _listFromComputeNodeDeserialize(
  result: OperationRawReturnType<typeof _listFromComputeNodeSend>
): Promise<NodeFileListResult> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    value: (result.body["value"] ?? []).map((p) => ({
      name: p["name"],
      url: p["url"],
      isDirectory: p["isDirectory"],
      properties: !p.properties
        ? undefined
        : {
            creationTime: new Date(p.properties?.["creationTime"] ?? ""),
            lastModified: new Date(p.properties?.["lastModified"] ?? ""),
            contentLength: p.properties?.["contentLength"],
            contentType: p.properties?.["contentType"],
            fileMode: p.properties?.["fileMode"],
          },
    })),
    "odata.nextLink": result.body["odata.nextLink"],
  };
}

/** Lists all of the files in Task directories on the specified Compute Node. */
export async function listFromComputeNode(
  context: Client,
  poolId: string,
  nodeId: string,
  options: FileListFromComputeNodeOptions = { requestOptions: {} }
): Promise<NodeFileListResult> {
  const result = await _listFromComputeNodeSend(
    context,
    poolId,
    nodeId,
    options
  );
  return _listFromComputeNodeDeserialize(result);
}
