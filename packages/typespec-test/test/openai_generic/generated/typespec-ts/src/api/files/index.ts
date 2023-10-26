// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ListFilesResponse,
  OpenAIFile,
  CreateFileRequest,
  DeleteFileResponse,
} from "../../models/models.js";
import {
  FilesCreate200Response,
  FilesCreateDefaultResponse,
  FilesDeleteOperation200Response,
  FilesDeleteOperationDefaultResponse,
  FilesDownload200Response,
  FilesDownloadDefaultResponse,
  FilesList200Response,
  FilesListDefaultResponse,
  FilesRetrieve200Response,
  FilesRetrieveDefaultResponse,
  isUnexpected,
  OpenAIContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  OperationOptions,
} from "@azure-rest/core-client";

export function _listSend(
  context: Client,
  options: ListOptions = { requestOptions: {} }
): StreamableMethod<FilesList200Response | FilesListDefaultResponse> {
  return context
    .path("/files")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listDeserialize(
  result: FilesList200Response | FilesListDefaultResponse
): Promise<ListFilesResponse> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    object: result.body["object"],
    data: (result.body["data"] ?? []).map((p) => ({
      id: p["id"],
      object: p["object"],
      bytes: p["bytes"],
      createdAt: new Date(p["createdAt"]),
      filename: p["filename"],
      purpose: p["purpose"],
      status: p["status"] as any,
      statusDetails: p["status_details"],
    })),
  };
}

export async function list(
  context: Client,
  options: ListOptions = { requestOptions: {} }
): Promise<ListFilesResponse> {
  const result = await _listSend(context, options);
  return _listDeserialize(result);
}

export interface ListOptions extends OperationOptions {}

export function _createSend(
  context: Client,
  file: CreateFileRequest,
  options: CreateOptions = { requestOptions: {} }
): StreamableMethod<FilesCreate200Response | FilesCreateDefaultResponse> {
  return context
    .path("/files")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "multipart/form-data",
      body: { file: file["file"], purpose: file["purpose"] },
    });
}

export async function _createDeserialize(
  result: FilesCreate200Response | FilesCreateDefaultResponse
): Promise<OpenAIFile> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    bytes: result.body["bytes"],
    createdAt: new Date(result.body["createdAt"]),
    filename: result.body["filename"],
    purpose: result.body["purpose"],
    status: result.body["status"] as any,
    statusDetails: result.body["status_details"],
  };
}

export async function create(
  context: Client,
  file: CreateFileRequest,
  options: CreateOptions = { requestOptions: {} }
): Promise<OpenAIFile> {
  const result = await _createSend(context, file, options);
  return _createDeserialize(result);
}

export interface CreateOptions extends OperationOptions {
  contentType?: string;
}

export function _retrieveSend(
  context: Client,
  fileId: string,
  options: RetrieveOptions = { requestOptions: {} }
): StreamableMethod<FilesRetrieve200Response | FilesRetrieveDefaultResponse> {
  return context
    .path("/files/files/{file_id}", fileId)
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _retrieveDeserialize(
  result: FilesRetrieve200Response | FilesRetrieveDefaultResponse
): Promise<OpenAIFile> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    bytes: result.body["bytes"],
    createdAt: new Date(result.body["createdAt"]),
    filename: result.body["filename"],
    purpose: result.body["purpose"],
    status: result.body["status"] as any,
    statusDetails: result.body["status_details"],
  };
}

export async function retrieve(
  context: Client,
  fileId: string,
  options: RetrieveOptions = { requestOptions: {} }
): Promise<OpenAIFile> {
  const result = await _retrieveSend(context, fileId, options);
  return _retrieveDeserialize(result);
}

export interface RetrieveOptions extends OperationOptions {}

export function _deleteOperationSend(
  context: Client,
  fileId: string,
  options: DeleteOptions = { requestOptions: {} }
): StreamableMethod<
  FilesDeleteOperation200Response | FilesDeleteOperationDefaultResponse
> {
  return context
    .path("/files/files/{file_id}", fileId)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteOperationDeserialize(
  result: FilesDeleteOperation200Response | FilesDeleteOperationDefaultResponse
): Promise<DeleteFileResponse> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    deleted: result.body["deleted"],
  };
}

/**
 *  @fixme delete is a reserved word that cannot be used as an operation name. Please add @projectedName(
 *       "javascript", "<JS-Specific-Name>") to the operation to override the generated name.
 */
export async function deleteOperation(
  context: Client,
  fileId: string,
  options: DeleteOptions = { requestOptions: {} }
): Promise<DeleteFileResponse> {
  const result = await _deleteOperationSend(context, fileId, options);
  return _deleteOperationDeserialize(result);
}

export interface DeleteOptions extends OperationOptions {}

export function _downloadSend(
  context: Client,
  fileId: string,
  options: DownloadOptions = { requestOptions: {} }
): StreamableMethod<FilesDownload200Response | FilesDownloadDefaultResponse> {
  return context
    .path("/files/files/{file_id}/content", fileId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _downloadDeserialize(
  result: FilesDownload200Response | FilesDownloadDefaultResponse
): Promise<string> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return result.body;
}

export async function download(
  context: Client,
  fileId: string,
  options: DownloadOptions = { requestOptions: {} }
): Promise<string> {
  const result = await _downloadSend(context, fileId, options);
  return _downloadDeserialize(result);
}

export interface DownloadOptions extends OperationOptions {}
