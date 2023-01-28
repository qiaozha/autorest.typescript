/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { Snapshots } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClient } from "../computeManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  Snapshot,
  SnapshotsListByResourceGroupNextOptionalParams,
  SnapshotsListByResourceGroupOptionalParams,
  SnapshotsListByResourceGroupResponse,
  SnapshotsListNextOptionalParams,
  SnapshotsListOptionalParams,
  SnapshotsListResponse,
  SnapshotsCreateOrUpdateOptionalParams,
  SnapshotsCreateOrUpdateResponse,
  SnapshotUpdate,
  SnapshotsUpdateOptionalParams,
  SnapshotsUpdateResponse,
  SnapshotsGetOptionalParams,
  SnapshotsGetResponse,
  SnapshotsDeleteOptionalParams,
  GrantAccessData,
  SnapshotsGrantAccessOptionalParams,
  SnapshotsGrantAccessResponse,
  SnapshotsRevokeAccessOptionalParams,
  SnapshotsListByResourceGroupNextResponse,
  SnapshotsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Snapshots operations. */
export class SnapshotsImpl implements Snapshots {
  private readonly client: ComputeManagementClient;

  /**
   * Initialize a new instance of the class Snapshots class.
   * @param client Reference to the service client
   */
  constructor(client: ComputeManagementClient) {
    this.client = client;
  }

  /**
   * Lists snapshots under a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: SnapshotsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<Snapshot> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByResourceGroupPagingPage(
          resourceGroupName,
          options,
          settings
        );
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: SnapshotsListByResourceGroupOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Snapshot[]> {
    let result: SnapshotsListByResourceGroupResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByResourceGroup(resourceGroupName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: SnapshotsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<Snapshot> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists snapshots under a subscription.
   * @param options The options parameters.
   */
  public list(
    options?: SnapshotsListOptionalParams
  ): PagedAsyncIterableIterator<Snapshot> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPagingPage(options, settings);
      }
    };
  }

  private async *listPagingPage(
    options?: SnapshotsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Snapshot[]> {
    let result: SnapshotsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    options?: SnapshotsListOptionalParams
  ): AsyncIterableIterator<Snapshot> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Creates or updates a snapshot.
   * @param resourceGroupName The name of the resource group.
   * @param snapshotName The name of the snapshot that is being created. The name can't be changed after
   *                     the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The max name
   *                     length is 80 characters.
   * @param snapshot Snapshot object supplied in the body of the Put disk operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    snapshotName: string,
    snapshot: Snapshot,
    options?: SnapshotsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<SnapshotsCreateOrUpdateResponse>,
      SnapshotsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<SnapshotsCreateOrUpdateResponse> => {
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
      { resourceGroupName, snapshotName, snapshot, options },
      createOrUpdateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates a snapshot.
   * @param resourceGroupName The name of the resource group.
   * @param snapshotName The name of the snapshot that is being created. The name can't be changed after
   *                     the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The max name
   *                     length is 80 characters.
   * @param snapshot Snapshot object supplied in the body of the Put disk operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    snapshotName: string,
    snapshot: Snapshot,
    options?: SnapshotsCreateOrUpdateOptionalParams
  ): Promise<SnapshotsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      snapshotName,
      snapshot,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates (patches) a snapshot.
   * @param resourceGroupName The name of the resource group.
   * @param snapshotName The name of the snapshot that is being created. The name can't be changed after
   *                     the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The max name
   *                     length is 80 characters.
   * @param snapshot Snapshot object supplied in the body of the Patch snapshot operation.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    snapshotName: string,
    snapshot: SnapshotUpdate,
    options?: SnapshotsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<SnapshotsUpdateResponse>,
      SnapshotsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<SnapshotsUpdateResponse> => {
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
      { resourceGroupName, snapshotName, snapshot, options },
      updateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Updates (patches) a snapshot.
   * @param resourceGroupName The name of the resource group.
   * @param snapshotName The name of the snapshot that is being created. The name can't be changed after
   *                     the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The max name
   *                     length is 80 characters.
   * @param snapshot Snapshot object supplied in the body of the Patch snapshot operation.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    snapshotName: string,
    snapshot: SnapshotUpdate,
    options?: SnapshotsUpdateOptionalParams
  ): Promise<SnapshotsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      snapshotName,
      snapshot,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets information about a snapshot.
   * @param resourceGroupName The name of the resource group.
   * @param snapshotName The name of the snapshot that is being created. The name can't be changed after
   *                     the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The max name
   *                     length is 80 characters.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    snapshotName: string,
    options?: SnapshotsGetOptionalParams
  ): Promise<SnapshotsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, snapshotName, options },
      getOperationSpec
    );
  }

  /**
   * Deletes a snapshot.
   * @param resourceGroupName The name of the resource group.
   * @param snapshotName The name of the snapshot that is being created. The name can't be changed after
   *                     the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The max name
   *                     length is 80 characters.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    snapshotName: string,
    options?: SnapshotsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
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
      { resourceGroupName, snapshotName, options },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes a snapshot.
   * @param resourceGroupName The name of the resource group.
   * @param snapshotName The name of the snapshot that is being created. The name can't be changed after
   *                     the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The max name
   *                     length is 80 characters.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    snapshotName: string,
    options?: SnapshotsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      snapshotName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Lists snapshots under a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: SnapshotsListByResourceGroupOptionalParams
  ): Promise<SnapshotsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Lists snapshots under a subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: SnapshotsListOptionalParams
  ): Promise<SnapshotsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Grants access to a snapshot.
   * @param resourceGroupName The name of the resource group.
   * @param snapshotName The name of the snapshot that is being created. The name can't be changed after
   *                     the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The max name
   *                     length is 80 characters.
   * @param grantAccessData Access data object supplied in the body of the get snapshot access operation.
   * @param options The options parameters.
   */
  async beginGrantAccess(
    resourceGroupName: string,
    snapshotName: string,
    grantAccessData: GrantAccessData,
    options?: SnapshotsGrantAccessOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<SnapshotsGrantAccessResponse>,
      SnapshotsGrantAccessResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<SnapshotsGrantAccessResponse> => {
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
      { resourceGroupName, snapshotName, grantAccessData, options },
      grantAccessOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Grants access to a snapshot.
   * @param resourceGroupName The name of the resource group.
   * @param snapshotName The name of the snapshot that is being created. The name can't be changed after
   *                     the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The max name
   *                     length is 80 characters.
   * @param grantAccessData Access data object supplied in the body of the get snapshot access operation.
   * @param options The options parameters.
   */
  async beginGrantAccessAndWait(
    resourceGroupName: string,
    snapshotName: string,
    grantAccessData: GrantAccessData,
    options?: SnapshotsGrantAccessOptionalParams
  ): Promise<SnapshotsGrantAccessResponse> {
    const poller = await this.beginGrantAccess(
      resourceGroupName,
      snapshotName,
      grantAccessData,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Revokes access to a snapshot.
   * @param resourceGroupName The name of the resource group.
   * @param snapshotName The name of the snapshot that is being created. The name can't be changed after
   *                     the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The max name
   *                     length is 80 characters.
   * @param options The options parameters.
   */
  async beginRevokeAccess(
    resourceGroupName: string,
    snapshotName: string,
    options?: SnapshotsRevokeAccessOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
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
      { resourceGroupName, snapshotName, options },
      revokeAccessOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Revokes access to a snapshot.
   * @param resourceGroupName The name of the resource group.
   * @param snapshotName The name of the snapshot that is being created. The name can't be changed after
   *                     the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The max name
   *                     length is 80 characters.
   * @param options The options parameters.
   */
  async beginRevokeAccessAndWait(
    resourceGroupName: string,
    snapshotName: string,
    options?: SnapshotsRevokeAccessOptionalParams
  ): Promise<void> {
    const poller = await this.beginRevokeAccess(
      resourceGroupName,
      snapshotName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: SnapshotsListByResourceGroupNextOptionalParams
  ): Promise<SnapshotsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: SnapshotsListNextOptionalParams
  ): Promise<SnapshotsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/snapshots/{snapshotName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Snapshot
    },
    201: {
      bodyMapper: Mappers.Snapshot
    },
    202: {
      bodyMapper: Mappers.Snapshot
    },
    204: {
      bodyMapper: Mappers.Snapshot
    }
  },
  requestBody: Parameters.snapshot,
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.snapshotName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/snapshots/{snapshotName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Snapshot
    },
    201: {
      bodyMapper: Mappers.Snapshot
    },
    202: {
      bodyMapper: Mappers.Snapshot
    },
    204: {
      bodyMapper: Mappers.Snapshot
    }
  },
  requestBody: Parameters.snapshot1,
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.snapshotName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/snapshots/{snapshotName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Snapshot
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.snapshotName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/snapshots/{snapshotName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.snapshotName
  ],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/snapshots",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SnapshotList
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/snapshots",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SnapshotList
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const grantAccessOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/snapshots/{snapshotName}/beginGetAccess",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.AccessUri
    },
    201: {
      bodyMapper: Mappers.AccessUri
    },
    202: {
      bodyMapper: Mappers.AccessUri
    },
    204: {
      bodyMapper: Mappers.AccessUri
    }
  },
  requestBody: Parameters.grantAccessData,
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.snapshotName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const revokeAccessOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/snapshots/{snapshotName}/endGetAccess",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.snapshotName
  ],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SnapshotList
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SnapshotList
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
