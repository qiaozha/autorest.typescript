/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { DatabaseExtensionsOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClient } from "../sqlManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  ImportExportExtensionsOperationResult,
  DatabaseExtensionsListByDatabaseNextOptionalParams,
  DatabaseExtensionsListByDatabaseOptionalParams,
  DatabaseExtensionsGetOptionalParams,
  DatabaseExtensions,
  DatabaseExtensionsCreateOrUpdateOptionalParams,
  DatabaseExtensionsCreateOrUpdateResponse,
  DatabaseExtensionsListByDatabaseResponse,
  DatabaseExtensionsListByDatabaseNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing DatabaseExtensionsOperations operations. */
export class DatabaseExtensionsOperationsImpl
  implements DatabaseExtensionsOperations {
  private readonly client: SqlManagementClient;

  /**
   * Initialize a new instance of the class DatabaseExtensionsOperations class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClient) {
    this.client = client;
  }

  /**
   * List database extension. This will return an empty list as it is not supported.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param options The options parameters.
   */
  public listByDatabase(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: DatabaseExtensionsListByDatabaseOptionalParams
  ): PagedAsyncIterableIterator<ImportExportExtensionsOperationResult> {
    const iter = this.listByDatabasePagingAll(
      resourceGroupName,
      serverName,
      databaseName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByDatabasePagingPage(
          resourceGroupName,
          serverName,
          databaseName,
          options
        );
      }
    };
  }

  private async *listByDatabasePagingPage(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: DatabaseExtensionsListByDatabaseOptionalParams
  ): AsyncIterableIterator<ImportExportExtensionsOperationResult[]> {
    let result = await this._listByDatabase(
      resourceGroupName,
      serverName,
      databaseName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByDatabaseNext(
        resourceGroupName,
        serverName,
        databaseName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByDatabasePagingAll(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: DatabaseExtensionsListByDatabaseOptionalParams
  ): AsyncIterableIterator<ImportExportExtensionsOperationResult> {
    for await (const page of this.listByDatabasePagingPage(
      resourceGroupName,
      serverName,
      databaseName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a database extension. This will return resource not found as it is not supported.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param extensionName
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    extensionName: string,
    options?: DatabaseExtensionsGetOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, databaseName, extensionName, options },
      getOperationSpec
    );
  }

  /**
   * Perform a database extension operation, like polybase import
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param extensionName
   * @param parameters The database import request parameters.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    extensionName: string,
    parameters: DatabaseExtensions,
    options?: DatabaseExtensionsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DatabaseExtensionsCreateOrUpdateResponse>,
      DatabaseExtensionsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DatabaseExtensionsCreateOrUpdateResponse> => {
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
      {
        resourceGroupName,
        serverName,
        databaseName,
        extensionName,
        parameters,
        options
      },
      createOrUpdateOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Perform a database extension operation, like polybase import
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param extensionName
   * @param parameters The database import request parameters.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    extensionName: string,
    parameters: DatabaseExtensions,
    options?: DatabaseExtensionsCreateOrUpdateOptionalParams
  ): Promise<DatabaseExtensionsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      serverName,
      databaseName,
      extensionName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * List database extension. This will return an empty list as it is not supported.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param options The options parameters.
   */
  private _listByDatabase(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: DatabaseExtensionsListByDatabaseOptionalParams
  ): Promise<DatabaseExtensionsListByDatabaseResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, databaseName, options },
      listByDatabaseOperationSpec
    );
  }

  /**
   * ListByDatabaseNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param nextLink The nextLink from the previous successful call to the ListByDatabase method.
   * @param options The options parameters.
   */
  private _listByDatabaseNext(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    nextLink: string,
    options?: DatabaseExtensionsListByDatabaseNextOptionalParams
  ): Promise<DatabaseExtensionsListByDatabaseNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, databaseName, nextLink, options },
      listByDatabaseNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/extensions/{extensionName}",
  httpMethod: "GET",
  responses: { 200: {}, default: {} },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.extensionName
  ],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/extensions/{extensionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ImportExportExtensionsOperationResult
    },
    201: {
      bodyMapper: Mappers.ImportExportExtensionsOperationResult
    },
    202: {
      bodyMapper: Mappers.ImportExportExtensionsOperationResult
    },
    204: {
      bodyMapper: Mappers.ImportExportExtensionsOperationResult
    },
    default: {}
  },
  requestBody: Parameters.parameters82,
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.extensionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByDatabaseOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/extensions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ImportExportExtensionsOperationListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByDatabaseNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ImportExportExtensionsOperationListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};