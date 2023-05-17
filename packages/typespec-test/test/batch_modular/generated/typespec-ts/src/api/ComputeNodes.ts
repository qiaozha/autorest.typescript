// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { BatchServiceContext as Client, isUnexpected } from "../rest/index.js";
import {
  OperationRawReturnType,
  RequestOptions,
} from "../common/interfaces.js";
import {
  ComputeNodeIdentityReference,
  ComputeNode,
  ComputeNodeRebootOption,
  ComputeNodeReimageOption,
  DisableComputeNodeSchedulingOption,
  ComputeNodeGetRemoteLoginSettingsResult,
  UploadBatchServiceLogsResult,
  ComputeNodeListResult,
} from "./models.js";

export interface ComputeNodesAddUserOptions extends RequestOptions {
  /** The default value is false. */
  isAdmin?: boolean;
  /**
   * If omitted, the default is 1 day from the current time. For Linux Compute
   * Nodes, the expiryTime has a precision up to a day.
   */
  expiryTime?: Date;
  /**
   * The password is required for Windows Compute Nodes (those created with
   * 'cloudServiceConfiguration', or created with 'virtualMachineConfiguration'
   * using a Windows Image reference). For Linux Compute Nodes, the password can
   * optionally be specified along with the sshPublicKey property.
   */
  password?: string;
  /**
   * The public key should be compatible with OpenSSH encoding and should be base 64
   * encoded. This property can be specified only for Linux Compute Nodes. If this
   * is specified for a Windows Compute Node, then the Batch service rejects the
   * request; if you are calling the REST API directly, the HTTP status code is 400
   * (Bad Request).
   */
  sshPublicKey?: string;
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
}

async function _addUserSend(
  context: Client,
  name: string,
  poolId: string,
  nodeId: string,
  options: ComputeNodesAddUserOptions = { requestOptions: {} }
) {
  return context
    .path("/pools/{poolId}/nodes/{nodeId}/users", poolId, nodeId)
    .post({
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
      queryParameters: { ...(options.timeOut && { timeOut: options.timeOut }) },
      body: {
        name: name,
        ...(options.isAdmin && { isAdmin: options.isAdmin }),
        ...(options.expiryTime && { expiryTime: options.expiryTime }),
        ...(options.password && { password: options.password }),
        ...(options.sshPublicKey && { sshPublicKey: options.sshPublicKey }),
      },
    });
}

async function _addUserDeserialize(
  result: OperationRawReturnType<typeof _addUserSend>
): Promise<void> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return;
}

/**
 * You can add a user Account to a Compute Node only when it is in the idle or
 * running state.
 */
export async function addUser(
  context: Client,
  name: string,
  poolId: string,
  nodeId: string,
  options: ComputeNodesAddUserOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _addUserSend(context, name, poolId, nodeId, options);
  return _addUserDeserialize(result);
}

export interface ComputeNodesDeleteUserOptions extends RequestOptions {
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
}

async function _deleteUserSend(
  context: Client,
  poolId: string,
  nodeId: string,
  userName: string,
  options: ComputeNodesDeleteUserOptions = { requestOptions: {} }
) {
  return context
    .path(
      "/pools/{poolId}/nodes/{nodeId}/users/{userName}",
      poolId,
      nodeId,
      userName
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
      queryParameters: { ...(options.timeOut && { timeOut: options.timeOut }) },
    });
}

async function _deleteUserDeserialize(
  result: OperationRawReturnType<typeof _deleteUserSend>
): Promise<void> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return;
}

/**
 * You can delete a user Account to a Compute Node only when it is in the idle or
 * running state.
 */
export async function deleteUser(
  context: Client,
  poolId: string,
  nodeId: string,
  userName: string,
  options: ComputeNodesDeleteUserOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _deleteUserSend(
    context,
    poolId,
    nodeId,
    userName,
    options
  );
  return _deleteUserDeserialize(result);
}

export interface ComputeNodesUpdateUserOptions extends RequestOptions {
  /**
   * The password is required for Windows Compute Nodes (those created with
   * 'cloudServiceConfiguration', or created with 'virtualMachineConfiguration'
   * using a Windows Image reference). For Linux Compute Nodes, the password can
   * optionally be specified along with the sshPublicKey property. If omitted, any
   * existing password is removed.
   */
  password?: string;
  /**
   * If omitted, the default is 1 day from the current time. For Linux Compute
   * Nodes, the expiryTime has a precision up to a day.
   */
  expiryTime?: Date;
  /**
   * The public key should be compatible with OpenSSH encoding and should be base 64
   * encoded. This property can be specified only for Linux Compute Nodes. If this
   * is specified for a Windows Compute Node, then the Batch service rejects the
   * request; if you are calling the REST API directly, the HTTP status code is 400
   * (Bad Request). If omitted, any existing SSH public key is removed.
   */
  sshPublicKey?: string;
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
}

async function _updateUserSend(
  context: Client,
  poolId: string,
  nodeId: string,
  userName: string,
  options: ComputeNodesUpdateUserOptions = { requestOptions: {} }
) {
  return context
    .path(
      "/pools/{poolId}/nodes/{nodeId}/users/{userName}",
      poolId,
      nodeId,
      userName
    )
    .put({
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
      queryParameters: { ...(options.timeOut && { timeOut: options.timeOut }) },
      body: {
        ...(options.password && { password: options.password }),
        ...(options.expiryTime && { expiryTime: options.expiryTime }),
        ...(options.sshPublicKey && { sshPublicKey: options.sshPublicKey }),
      },
    });
}

async function _updateUserDeserialize(
  result: OperationRawReturnType<typeof _updateUserSend>
): Promise<void> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return;
}

/**
 * This operation replaces of all the updatable properties of the Account. For
 * example, if the expiryTime element is not specified, the current value is
 * replaced with the default value, not left unmodified. You can update a user
 * Account on a Compute Node only when it is in the idle or running state.
 */
export async function updateUser(
  context: Client,
  poolId: string,
  nodeId: string,
  userName: string,
  options: ComputeNodesUpdateUserOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _updateUserSend(
    context,
    poolId,
    nodeId,
    userName,
    options
  );
  return _updateUserDeserialize(result);
}

export interface ComputeNodesGetComputeNodeOptions extends RequestOptions {
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
  /** An OData $select clause. */
  $select?: string;
}

async function _getComputeNodeSend(
  context: Client,
  poolId: string,
  nodeId: string,
  options: ComputeNodesGetComputeNodeOptions = { requestOptions: {} }
) {
  return context
    .path("/pools/{poolId}/nodes/{nodeId}", poolId, nodeId)
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
        ...options.requestOptions?.headers,
      },
      queryParameters: {
        ...(options.timeOut && { timeOut: options.timeOut }),
        ...(options.$select && { $select: options.$select }),
      },
    });
}

async function _getComputeNodeDeserialize(
  result: OperationRawReturnType<typeof _getComputeNodeSend>
): Promise<ComputeNode> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    url: result.body["url"],
    state: result.body["state"],
    schedulingState: result.body["schedulingState"],
    stateTransitionTime: new Date(result.body["stateTransitionTime"] ?? ""),
    lastBootTime: new Date(result.body["lastBootTime"] ?? ""),
    allocationTime: new Date(result.body["allocationTime"] ?? ""),
    ipAddress: result.body["ipAddress"],
    affinityId: result.body["affinityId"],
    vmSize: result.body["vmSize"],
    totalTasksRun: result.body["totalTasksRun"],
    runningTasksCount: result.body["runningTasksCount"],
    runningTaskSlotsCount: result.body["runningTaskSlotsCount"],
    totalTasksSucceeded: result.body["totalTasksSucceeded"],
    recentTasks: (result.body["recentTasks"] ?? []).map((p) => ({
      taskUrl: p["taskUrl"],
      jobId: p["jobId"],
      taskId: p["taskId"],
      subtaskId: p["subtaskId"],
      taskState: p["taskState"],
      executionInfo: !p.executionInfo
        ? undefined
        : {
            startTime: new Date(p.executionInfo?.["startTime"] ?? ""),
            endTime: new Date(p.executionInfo?.["endTime"] ?? ""),
            exitCode: p.executionInfo?.["exitCode"],
            containerInfo: !p.executionInfo?.containerInfo
              ? undefined
              : {
                  containerId: p.executionInfo?.containerInfo?.["containerId"],
                  state: p.executionInfo?.containerInfo?.["state"],
                  error: p.executionInfo?.containerInfo?.["error"],
                },
            failureInfo: !p.executionInfo?.failureInfo
              ? undefined
              : {
                  category: p.executionInfo?.failureInfo?.["category"],
                  code: p.executionInfo?.failureInfo?.["code"],
                  message: p.executionInfo?.failureInfo?.["message"],
                  details: (
                    p.executionInfo?.failureInfo?.["details"] ?? []
                  ).map((p) => ({ name: p["name"], value: p["value"] })),
                },
            retryCount: p.executionInfo?.["retryCount"],
            lastRetryTime: new Date(p.executionInfo?.["lastRetryTime"] ?? ""),
            requeueCount: p.executionInfo?.["requeueCount"],
            lastRequeueTime: new Date(
              p.executionInfo?.["lastRequeueTime"] ?? ""
            ),
            result: p.executionInfo?.["result"],
          },
    })),
    startTask: !result.body.startTask
      ? undefined
      : {
          commandLine: result.body.startTask?.["commandLine"],
          containerSettings: !result.body.startTask?.containerSettings
            ? undefined
            : {
                containerRunOptions:
                  result.body.startTask?.containerSettings?.[
                    "containerRunOptions"
                  ],
                imageName:
                  result.body.startTask?.containerSettings?.["imageName"],
                registry: !result.body.startTask?.containerSettings?.registry
                  ? undefined
                  : {
                      username:
                        result.body.startTask?.containerSettings?.registry?.[
                          "username"
                        ],
                      password:
                        result.body.startTask?.containerSettings?.registry?.[
                          "password"
                        ],
                      registryServer:
                        result.body.startTask?.containerSettings?.registry?.[
                          "registryServer"
                        ],
                      identityReference: !result.body.startTask
                        ?.containerSettings?.registry?.identityReference
                        ? undefined
                        : {
                            resourceId:
                              result.body.startTask?.containerSettings?.registry
                                ?.identityReference?.["resourceId"],
                          },
                    },
                workingDirectory:
                  result.body.startTask?.containerSettings?.[
                    "workingDirectory"
                  ],
              },
          resourceFiles: (result.body.startTask?.["resourceFiles"] ?? []).map(
            (p) => ({
              autoStorageContainerName: p["autoStorageContainerName"],
              storageContainerUrl: p["storageContainerUrl"],
              httpUrl: p["httpUrl"],
              blobPrefix: p["blobPrefix"],
              filePath: p["filePath"],
              fileMode: p["fileMode"],
              identityReference: !p.identityReference
                ? undefined
                : { resourceId: p.identityReference?.["resourceId"] },
            })
          ),
          environmentSettings: (
            result.body.startTask?.["environmentSettings"] ?? []
          ).map((p) => ({ name: p["name"], value: p["value"] })),
          userIdentity: !result.body.startTask?.userIdentity
            ? undefined
            : {
                username: result.body.startTask?.userIdentity?.["username"],
                autoUser: !result.body.startTask?.userIdentity?.autoUser
                  ? undefined
                  : {
                      scope:
                        result.body.startTask?.userIdentity?.autoUser?.[
                          "scope"
                        ],
                      elevationLevel:
                        result.body.startTask?.userIdentity?.autoUser?.[
                          "elevationLevel"
                        ],
                    },
              },
          maxTaskRetryCount: result.body.startTask?.["maxTaskRetryCount"],
          waitForSuccess: result.body.startTask?.["waitForSuccess"],
        },
    startTaskInfo: !result.body.startTaskInfo
      ? undefined
      : {
          state: result.body.startTaskInfo?.["state"],
          startTime: new Date(result.body.startTaskInfo?.["startTime"] ?? ""),
          endTime: new Date(result.body.startTaskInfo?.["endTime"] ?? ""),
          exitCode: result.body.startTaskInfo?.["exitCode"],
          containerInfo: !result.body.startTaskInfo?.containerInfo
            ? undefined
            : {
                containerId:
                  result.body.startTaskInfo?.containerInfo?.["containerId"],
                state: result.body.startTaskInfo?.containerInfo?.["state"],
                error: result.body.startTaskInfo?.containerInfo?.["error"],
              },
          failureInfo: !result.body.startTaskInfo?.failureInfo
            ? undefined
            : {
                category: result.body.startTaskInfo?.failureInfo?.["category"],
                code: result.body.startTaskInfo?.failureInfo?.["code"],
                message: result.body.startTaskInfo?.failureInfo?.["message"],
                details: (
                  result.body.startTaskInfo?.failureInfo?.["details"] ?? []
                ).map((p) => ({ name: p["name"], value: p["value"] })),
              },
          retryCount: result.body.startTaskInfo?.["retryCount"],
          lastRetryTime: new Date(
            result.body.startTaskInfo?.["lastRetryTime"] ?? ""
          ),
          result: result.body.startTaskInfo?.["result"],
        },
    certificateReferences: (result.body["certificateReferences"] ?? []).map(
      (p) => ({
        thumbprint: p["thumbprint"],
        thumbprintAlgorithm: p["thumbprintAlgorithm"],
        storeLocation: p["storeLocation"],
        storeName: p["storeName"],
        visibility: p["visibility"],
      })
    ),
    errors: (result.body["errors"] ?? []).map((p) => ({
      code: p["code"],
      message: p["message"],
      errorDetails: (p["errorDetails"] ?? []).map((p) => ({
        name: p["name"],
        value: p["value"],
      })),
    })),
    isDedicated: result.body["isDedicated"],
    endpointConfiguration: !result.body.endpointConfiguration
      ? undefined
      : {
          inboundEndpoints: (
            result.body.endpointConfiguration?.["inboundEndpoints"] ?? []
          ).map((p) => ({
            name: p["name"],
            protocol: p["protocol"],
            publicIPAddress: p["publicIPAddress"],
            publicFQDN: p["publicFQDN"],
            frontendPort: p["frontendPort"],
            backendPort: p["backendPort"],
          })),
        },
    nodeAgentInfo: !result.body.nodeAgentInfo
      ? undefined
      : {
          version: result.body.nodeAgentInfo?.["version"],
          lastUpdateTime: new Date(
            result.body.nodeAgentInfo?.["lastUpdateTime"] ?? ""
          ),
        },
    virtualMachineInfo: !result.body.virtualMachineInfo
      ? undefined
      : {
          imageReference: !result.body.virtualMachineInfo?.imageReference
            ? undefined
            : {
                publisher:
                  result.body.virtualMachineInfo?.imageReference?.["publisher"],
                offer:
                  result.body.virtualMachineInfo?.imageReference?.["offer"],
                sku: result.body.virtualMachineInfo?.imageReference?.["sku"],
                version:
                  result.body.virtualMachineInfo?.imageReference?.["version"],
                virtualMachineImageId:
                  result.body.virtualMachineInfo?.imageReference?.[
                    "virtualMachineImageId"
                  ],
                exactVersion:
                  result.body.virtualMachineInfo?.imageReference?.[
                    "exactVersion"
                  ],
              },
        },
  };
}

/** Gets information about the specified Compute Node. */
export async function getComputeNode(
  context: Client,
  poolId: string,
  nodeId: string,
  options: ComputeNodesGetComputeNodeOptions = { requestOptions: {} }
): Promise<ComputeNode> {
  const result = await _getComputeNodeSend(context, poolId, nodeId, options);
  return _getComputeNodeDeserialize(result);
}

export interface ComputeNodesRebootComputeNodeOptions extends RequestOptions {
  /** The default value is requeue. */
  nodeRebootOption?: ComputeNodeRebootOption;
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
}

async function _rebootComputeNodeSend(
  context: Client,
  poolId: string,
  nodeId: string,
  options: ComputeNodesRebootComputeNodeOptions = { requestOptions: {} }
) {
  return context
    .path("/pools/{poolId}/nodes/{nodeId}/reboot", poolId, nodeId)
    .post({
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
      queryParameters: { ...(options.timeOut && { timeOut: options.timeOut }) },
      body: {
        ...(options.nodeRebootOption && {
          nodeRebootOption: options.nodeRebootOption,
        }),
      },
    });
}

async function _rebootComputeNodeDeserialize(
  result: OperationRawReturnType<typeof _rebootComputeNodeSend>
): Promise<void> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return;
}

/** You can restart a Compute Node only if it is in an idle or running state. */
export async function rebootComputeNode(
  context: Client,
  poolId: string,
  nodeId: string,
  options: ComputeNodesRebootComputeNodeOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _rebootComputeNodeSend(context, poolId, nodeId, options);
  return _rebootComputeNodeDeserialize(result);
}

export interface ComputeNodesReimageComputeNodeOptions extends RequestOptions {
  /** The default value is requeue. */
  nodeReimageOption?: ComputeNodeReimageOption;
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
}

async function _reimageComputeNodeSend(
  context: Client,
  poolId: string,
  nodeId: string,
  options: ComputeNodesReimageComputeNodeOptions = { requestOptions: {} }
) {
  return context
    .path("/pools/{poolId}/nodes/{nodeId}/reimage", poolId, nodeId)
    .post({
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
      queryParameters: { ...(options.timeOut && { timeOut: options.timeOut }) },
      body: {
        ...(options.nodeReimageOption && {
          nodeReimageOption: options.nodeReimageOption,
        }),
      },
    });
}

async function _reimageComputeNodeDeserialize(
  result: OperationRawReturnType<typeof _reimageComputeNodeSend>
): Promise<void> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return;
}

/**
 * You can reinstall the operating system on a Compute Node only if it is in an
 * idle or running state. This API can be invoked only on Pools created with the
 * cloud service configuration property.
 */
export async function reimageComputeNode(
  context: Client,
  poolId: string,
  nodeId: string,
  options: ComputeNodesReimageComputeNodeOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _reimageComputeNodeSend(
    context,
    poolId,
    nodeId,
    options
  );
  return _reimageComputeNodeDeserialize(result);
}

export interface ComputeNodesDisableSchedulingOptions extends RequestOptions {
  /** The default value is requeue. */
  nodeDisableSchedulingOption?: DisableComputeNodeSchedulingOption;
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
}

async function _disableSchedulingSend(
  context: Client,
  poolId: string,
  nodeId: string,
  options: ComputeNodesDisableSchedulingOptions = { requestOptions: {} }
) {
  return context
    .path("/pools/{poolId}/nodes/{nodeId}/disablescheduling", poolId, nodeId)
    .post({
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
      queryParameters: { ...(options.timeOut && { timeOut: options.timeOut }) },
      body: {
        ...(options.nodeDisableSchedulingOption && {
          nodeDisableSchedulingOption: options.nodeDisableSchedulingOption,
        }),
      },
    });
}

async function _disableSchedulingDeserialize(
  result: OperationRawReturnType<typeof _disableSchedulingSend>
): Promise<void> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return;
}

/**
 * You can disable Task scheduling on a Compute Node only if its current
 * scheduling state is enabled.
 */
export async function disableScheduling(
  context: Client,
  poolId: string,
  nodeId: string,
  options: ComputeNodesDisableSchedulingOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _disableSchedulingSend(context, poolId, nodeId, options);
  return _disableSchedulingDeserialize(result);
}

export interface ComputeNodesEnableSchedulingOptions extends RequestOptions {
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
}

async function _enableSchedulingSend(
  context: Client,
  poolId: string,
  nodeId: string,
  options: ComputeNodesEnableSchedulingOptions = { requestOptions: {} }
) {
  return context
    .path("/pools/{poolId}/nodes/{nodeId}/enablescheduling", poolId, nodeId)
    .post({
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
      queryParameters: { ...(options.timeOut && { timeOut: options.timeOut }) },
    });
}

async function _enableSchedulingDeserialize(
  result: OperationRawReturnType<typeof _enableSchedulingSend>
): Promise<void> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return;
}

/**
 * You can enable Task scheduling on a Compute Node only if its current scheduling
 * state is disabled
 */
export async function enableScheduling(
  context: Client,
  poolId: string,
  nodeId: string,
  options: ComputeNodesEnableSchedulingOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _enableSchedulingSend(context, poolId, nodeId, options);
  return _enableSchedulingDeserialize(result);
}

export interface ComputeNodesGetRemoteLoginSettingsOptions
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
}

async function _getRemoteLoginSettingsSend(
  context: Client,
  poolId: string,
  nodeId: string,
  options: ComputeNodesGetRemoteLoginSettingsOptions = { requestOptions: {} }
) {
  return context
    .path("/pools/{poolId}/nodes/{nodeId}/remoteloginsettings", poolId, nodeId)
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
        ...options.requestOptions?.headers,
      },
      queryParameters: { ...(options.timeOut && { timeOut: options.timeOut }) },
    });
}

async function _getRemoteLoginSettingsDeserialize(
  result: OperationRawReturnType<typeof _getRemoteLoginSettingsSend>
): Promise<ComputeNodeGetRemoteLoginSettingsResult> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    remoteLoginIPAddress: result.body["remoteLoginIPAddress"],
    remoteLoginPort: result.body["remoteLoginPort"],
  };
}

/**
 * Before you can remotely login to a Compute Node using the remote login
 * settings, you must create a user Account on the Compute Node. This API can be
 * invoked only on Pools created with the virtual machine configuration property.
 * For Pools created with a cloud service configuration, see the GetRemoteDesktop
 * API.
 */
export async function getRemoteLoginSettings(
  context: Client,
  poolId: string,
  nodeId: string,
  options: ComputeNodesGetRemoteLoginSettingsOptions = { requestOptions: {} }
): Promise<ComputeNodeGetRemoteLoginSettingsResult> {
  const result = await _getRemoteLoginSettingsSend(
    context,
    poolId,
    nodeId,
    options
  );
  return _getRemoteLoginSettingsDeserialize(result);
}

export interface ComputeNodesGetRemoteDesktopOptions extends RequestOptions {
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
}

async function _getRemoteDesktopSend(
  context: Client,
  poolId: string,
  nodeId: string,
  options: ComputeNodesGetRemoteDesktopOptions = { requestOptions: {} }
) {
  return context
    .path("/pools/{poolId}/nodes/{nodeId}/rdp", poolId, nodeId)
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
        ...options.requestOptions?.headers,
      },
      queryParameters: { ...(options.timeOut && { timeOut: options.timeOut }) },
    });
}

async function _getRemoteDesktopDeserialize(
  result: OperationRawReturnType<typeof _getRemoteDesktopSend>
): Promise<any> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return result.body;
}

/**
 * Before you can access a Compute Node by using the RDP file, you must create a
 * user Account on the Compute Node. This API can only be invoked on Pools created
 * with a cloud service configuration. For Pools created with a virtual machine
 * configuration, see the GetRemoteLoginSettings API.
 */
export async function getRemoteDesktop(
  context: Client,
  poolId: string,
  nodeId: string,
  options: ComputeNodesGetRemoteDesktopOptions = { requestOptions: {} }
): Promise<any> {
  const result = await _getRemoteDesktopSend(context, poolId, nodeId, options);
  return _getRemoteDesktopDeserialize(result);
}

export interface ComputeNodesUploadBatchServiceLogsOptions
  extends RequestOptions {
  /**
   * Any log file containing a log message in the time range will be uploaded. This
   * means that the operation might retrieve more logs than have been requested
   * since the entire log file is always uploaded, but the operation should not
   * retrieve fewer logs than have been requested. If omitted, the default is to
   * upload all logs available after the startTime.
   */
  endTime?: Date;
  /** The identity must have write access to the Azure Blob Storage container. */
  identityReference?: ComputeNodeIdentityReference;
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
}

async function _uploadBatchServiceLogsSend(
  context: Client,
  containerUrl: string,
  startTime: Date,
  poolId: string,
  nodeId: string,
  options: ComputeNodesUploadBatchServiceLogsOptions = { requestOptions: {} }
) {
  return context
    .path(
      "/pools/{poolId}/nodes/{nodeId}/uploadbatchservicelogs",
      poolId,
      nodeId
    )
    .post({
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
      queryParameters: { ...(options.timeOut && { timeOut: options.timeOut }) },
      body: {
        containerUrl: containerUrl,
        startTime: startTime,
        ...(options.endTime && { endTime: options.endTime }),
        ...(options.identityReference && {
          identityReference: options.identityReference,
        }),
      },
    });
}

async function _uploadBatchServiceLogsDeserialize(
  result: OperationRawReturnType<typeof _uploadBatchServiceLogsSend>
): Promise<UploadBatchServiceLogsResult> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    virtualDirectoryName: result.body["virtualDirectoryName"],
    numberOfFilesUploaded: result.body["numberOfFilesUploaded"],
  };
}

/**
 * This is for gathering Azure Batch service log files in an automated fashion
 * from Compute Nodes if you are experiencing an error and wish to escalate to
 * Azure support. The Azure Batch service log files should be shared with Azure
 * support to aid in debugging issues with the Batch service.
 */
export async function uploadBatchServiceLogs(
  context: Client,
  containerUrl: string,
  startTime: Date,
  poolId: string,
  nodeId: string,
  options: ComputeNodesUploadBatchServiceLogsOptions = { requestOptions: {} }
): Promise<UploadBatchServiceLogsResult> {
  const result = await _uploadBatchServiceLogsSend(
    context,
    containerUrl,
    startTime,
    poolId,
    nodeId,
    options
  );
  return _uploadBatchServiceLogsDeserialize(result);
}

export interface ComputeNodesListOptions extends RequestOptions {
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
   * https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-nodes-in-a-pool.
   */
  $filter?: string;
  /** An OData $select clause. */
  $select?: string;
}

async function _listSend(
  context: Client,
  poolId: string,
  options: ComputeNodesListOptions = { requestOptions: {} }
) {
  return context
    .path("/pools/{poolId}/nodes", poolId)
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
        ...(options.$select && { $select: options.$select }),
      },
    });
}

async function _listDeserialize(
  result: OperationRawReturnType<typeof _listSend>
): Promise<ComputeNodeListResult> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    value: (result.body["value"] ?? []).map((p) => ({
      id: p["id"],
      url: p["url"],
      state: p["state"],
      schedulingState: p["schedulingState"],
      stateTransitionTime: new Date(p["stateTransitionTime"] ?? ""),
      lastBootTime: new Date(p["lastBootTime"] ?? ""),
      allocationTime: new Date(p["allocationTime"] ?? ""),
      ipAddress: p["ipAddress"],
      affinityId: p["affinityId"],
      vmSize: p["vmSize"],
      totalTasksRun: p["totalTasksRun"],
      runningTasksCount: p["runningTasksCount"],
      runningTaskSlotsCount: p["runningTaskSlotsCount"],
      totalTasksSucceeded: p["totalTasksSucceeded"],
      recentTasks: (p["recentTasks"] ?? []).map((p) => ({
        taskUrl: p["taskUrl"],
        jobId: p["jobId"],
        taskId: p["taskId"],
        subtaskId: p["subtaskId"],
        taskState: p["taskState"],
        executionInfo: !p.executionInfo
          ? undefined
          : {
              startTime: new Date(p.executionInfo?.["startTime"] ?? ""),
              endTime: new Date(p.executionInfo?.["endTime"] ?? ""),
              exitCode: p.executionInfo?.["exitCode"],
              containerInfo: !p.executionInfo?.containerInfo
                ? undefined
                : {
                    containerId:
                      p.executionInfo?.containerInfo?.["containerId"],
                    state: p.executionInfo?.containerInfo?.["state"],
                    error: p.executionInfo?.containerInfo?.["error"],
                  },
              failureInfo: !p.executionInfo?.failureInfo
                ? undefined
                : {
                    category: p.executionInfo?.failureInfo?.["category"],
                    code: p.executionInfo?.failureInfo?.["code"],
                    message: p.executionInfo?.failureInfo?.["message"],
                    details: (
                      p.executionInfo?.failureInfo?.["details"] ?? []
                    ).map((p) => ({ name: p["name"], value: p["value"] })),
                  },
              retryCount: p.executionInfo?.["retryCount"],
              lastRetryTime: new Date(p.executionInfo?.["lastRetryTime"] ?? ""),
              requeueCount: p.executionInfo?.["requeueCount"],
              lastRequeueTime: new Date(
                p.executionInfo?.["lastRequeueTime"] ?? ""
              ),
              result: p.executionInfo?.["result"],
            },
      })),
      startTask: !p.startTask
        ? undefined
        : {
            commandLine: p.startTask?.["commandLine"],
            containerSettings: !p.startTask?.containerSettings
              ? undefined
              : {
                  containerRunOptions:
                    p.startTask?.containerSettings?.["containerRunOptions"],
                  imageName: p.startTask?.containerSettings?.["imageName"],
                  registry: !p.startTask?.containerSettings?.registry
                    ? undefined
                    : {
                        username:
                          p.startTask?.containerSettings?.registry?.[
                            "username"
                          ],
                        password:
                          p.startTask?.containerSettings?.registry?.[
                            "password"
                          ],
                        registryServer:
                          p.startTask?.containerSettings?.registry?.[
                            "registryServer"
                          ],
                        identityReference: !p.startTask?.containerSettings
                          ?.registry?.identityReference
                          ? undefined
                          : {
                              resourceId:
                                p.startTask?.containerSettings?.registry
                                  ?.identityReference?.["resourceId"],
                            },
                      },
                  workingDirectory:
                    p.startTask?.containerSettings?.["workingDirectory"],
                },
            resourceFiles: (p.startTask?.["resourceFiles"] ?? []).map((p) => ({
              autoStorageContainerName: p["autoStorageContainerName"],
              storageContainerUrl: p["storageContainerUrl"],
              httpUrl: p["httpUrl"],
              blobPrefix: p["blobPrefix"],
              filePath: p["filePath"],
              fileMode: p["fileMode"],
              identityReference: !p.identityReference
                ? undefined
                : { resourceId: p.identityReference?.["resourceId"] },
            })),
            environmentSettings: (
              p.startTask?.["environmentSettings"] ?? []
            ).map((p) => ({ name: p["name"], value: p["value"] })),
            userIdentity: !p.startTask?.userIdentity
              ? undefined
              : {
                  username: p.startTask?.userIdentity?.["username"],
                  autoUser: !p.startTask?.userIdentity?.autoUser
                    ? undefined
                    : {
                        scope: p.startTask?.userIdentity?.autoUser?.["scope"],
                        elevationLevel:
                          p.startTask?.userIdentity?.autoUser?.[
                            "elevationLevel"
                          ],
                      },
                },
            maxTaskRetryCount: p.startTask?.["maxTaskRetryCount"],
            waitForSuccess: p.startTask?.["waitForSuccess"],
          },
      startTaskInfo: !p.startTaskInfo
        ? undefined
        : {
            state: p.startTaskInfo?.["state"],
            startTime: new Date(p.startTaskInfo?.["startTime"] ?? ""),
            endTime: new Date(p.startTaskInfo?.["endTime"] ?? ""),
            exitCode: p.startTaskInfo?.["exitCode"],
            containerInfo: !p.startTaskInfo?.containerInfo
              ? undefined
              : {
                  containerId: p.startTaskInfo?.containerInfo?.["containerId"],
                  state: p.startTaskInfo?.containerInfo?.["state"],
                  error: p.startTaskInfo?.containerInfo?.["error"],
                },
            failureInfo: !p.startTaskInfo?.failureInfo
              ? undefined
              : {
                  category: p.startTaskInfo?.failureInfo?.["category"],
                  code: p.startTaskInfo?.failureInfo?.["code"],
                  message: p.startTaskInfo?.failureInfo?.["message"],
                  details: (
                    p.startTaskInfo?.failureInfo?.["details"] ?? []
                  ).map((p) => ({ name: p["name"], value: p["value"] })),
                },
            retryCount: p.startTaskInfo?.["retryCount"],
            lastRetryTime: new Date(p.startTaskInfo?.["lastRetryTime"] ?? ""),
            result: p.startTaskInfo?.["result"],
          },
      certificateReferences: (p["certificateReferences"] ?? []).map((p) => ({
        thumbprint: p["thumbprint"],
        thumbprintAlgorithm: p["thumbprintAlgorithm"],
        storeLocation: p["storeLocation"],
        storeName: p["storeName"],
        visibility: p["visibility"],
      })),
      errors: (p["errors"] ?? []).map((p) => ({
        code: p["code"],
        message: p["message"],
        errorDetails: (p["errorDetails"] ?? []).map((p) => ({
          name: p["name"],
          value: p["value"],
        })),
      })),
      isDedicated: p["isDedicated"],
      endpointConfiguration: !p.endpointConfiguration
        ? undefined
        : {
            inboundEndpoints: (
              p.endpointConfiguration?.["inboundEndpoints"] ?? []
            ).map((p) => ({
              name: p["name"],
              protocol: p["protocol"],
              publicIPAddress: p["publicIPAddress"],
              publicFQDN: p["publicFQDN"],
              frontendPort: p["frontendPort"],
              backendPort: p["backendPort"],
            })),
          },
      nodeAgentInfo: !p.nodeAgentInfo
        ? undefined
        : {
            version: p.nodeAgentInfo?.["version"],
            lastUpdateTime: new Date(p.nodeAgentInfo?.["lastUpdateTime"] ?? ""),
          },
      virtualMachineInfo: !p.virtualMachineInfo
        ? undefined
        : {
            imageReference: !p.virtualMachineInfo?.imageReference
              ? undefined
              : {
                  publisher:
                    p.virtualMachineInfo?.imageReference?.["publisher"],
                  offer: p.virtualMachineInfo?.imageReference?.["offer"],
                  sku: p.virtualMachineInfo?.imageReference?.["sku"],
                  version: p.virtualMachineInfo?.imageReference?.["version"],
                  virtualMachineImageId:
                    p.virtualMachineInfo?.imageReference?.[
                      "virtualMachineImageId"
                    ],
                  exactVersion:
                    p.virtualMachineInfo?.imageReference?.["exactVersion"],
                },
          },
    })),
    "odata.nextLink": result.body["odata.nextLink"],
  };
}

/** Lists the Compute Nodes in the specified Pool. */
export async function list(
  context: Client,
  poolId: string,
  options: ComputeNodesListOptions = { requestOptions: {} }
): Promise<ComputeNodeListResult> {
  const result = await _listSend(context, poolId, options);
  return _listDeserialize(result);
}
