/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Recommendations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { WebSiteManagementClient } from "../webSiteManagementClient";
import {
  Recommendation,
  RecommendationsListNextOptionalParams,
  RecommendationsListOptionalParams,
  RecommendationsListHistoryForHostingEnvironmentNextOptionalParams,
  RecommendationsListHistoryForHostingEnvironmentOptionalParams,
  RecommendationsListRecommendedRulesForHostingEnvironmentNextOptionalParams,
  RecommendationsListRecommendedRulesForHostingEnvironmentOptionalParams,
  RecommendationsListHistoryForWebAppNextOptionalParams,
  RecommendationsListHistoryForWebAppOptionalParams,
  RecommendationsListRecommendedRulesForWebAppNextOptionalParams,
  RecommendationsListRecommendedRulesForWebAppOptionalParams,
  RecommendationsListResponse,
  RecommendationsResetAllFiltersOptionalParams,
  RecommendationsDisableRecommendationForSubscriptionOptionalParams,
  RecommendationsListHistoryForHostingEnvironmentResponse,
  RecommendationsListRecommendedRulesForHostingEnvironmentResponse,
  RecommendationsDisableAllForHostingEnvironmentOptionalParams,
  RecommendationsResetAllFiltersForHostingEnvironmentOptionalParams,
  RecommendationsGetRuleDetailsByHostingEnvironmentOptionalParams,
  RecommendationsGetRuleDetailsByHostingEnvironmentResponse,
  RecommendationsDisableRecommendationForHostingEnvironmentOptionalParams,
  RecommendationsListHistoryForWebAppResponse,
  RecommendationsListRecommendedRulesForWebAppResponse,
  RecommendationsDisableAllForWebAppOptionalParams,
  RecommendationsResetAllFiltersForWebAppOptionalParams,
  RecommendationsGetRuleDetailsByWebAppOptionalParams,
  RecommendationsGetRuleDetailsByWebAppResponse,
  RecommendationsDisableRecommendationForSiteOptionalParams,
  RecommendationsListNextResponse,
  RecommendationsListHistoryForHostingEnvironmentNextResponse,
  RecommendationsListRecommendedRulesForHostingEnvironmentNextResponse,
  RecommendationsListHistoryForWebAppNextResponse,
  RecommendationsListRecommendedRulesForWebAppNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Recommendations operations. */
export class RecommendationsImpl implements Recommendations {
  private readonly client: WebSiteManagementClient;

  /**
   * Initialize a new instance of the class Recommendations class.
   * @param client Reference to the service client
   */
  constructor(client: WebSiteManagementClient) {
    this.client = client;
  }

  /**
   * Description for List all recommendations for a subscription.
   * @param options The options parameters.
   */
  public list(
    options?: RecommendationsListOptionalParams
  ): PagedAsyncIterableIterator<Recommendation> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(options);
      }
    };
  }

  private async *listPagingPage(
    options?: RecommendationsListOptionalParams
  ): AsyncIterableIterator<Recommendation[]> {
    let result = await this._list(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    options?: RecommendationsListOptionalParams
  ): AsyncIterableIterator<Recommendation> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Description for Get past recommendations for an app, optionally specified by the time range.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param hostingEnvironmentName Name of the hosting environment.
   * @param options The options parameters.
   */
  public listHistoryForHostingEnvironment(
    resourceGroupName: string,
    hostingEnvironmentName: string,
    options?: RecommendationsListHistoryForHostingEnvironmentOptionalParams
  ): PagedAsyncIterableIterator<Recommendation> {
    const iter = this.listHistoryForHostingEnvironmentPagingAll(
      resourceGroupName,
      hostingEnvironmentName,
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
        return this.listHistoryForHostingEnvironmentPagingPage(
          resourceGroupName,
          hostingEnvironmentName,
          options
        );
      }
    };
  }

  private async *listHistoryForHostingEnvironmentPagingPage(
    resourceGroupName: string,
    hostingEnvironmentName: string,
    options?: RecommendationsListHistoryForHostingEnvironmentOptionalParams
  ): AsyncIterableIterator<Recommendation[]> {
    let result = await this._listHistoryForHostingEnvironment(
      resourceGroupName,
      hostingEnvironmentName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listHistoryForHostingEnvironmentNext(
        resourceGroupName,
        hostingEnvironmentName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listHistoryForHostingEnvironmentPagingAll(
    resourceGroupName: string,
    hostingEnvironmentName: string,
    options?: RecommendationsListHistoryForHostingEnvironmentOptionalParams
  ): AsyncIterableIterator<Recommendation> {
    for await (const page of this.listHistoryForHostingEnvironmentPagingPage(
      resourceGroupName,
      hostingEnvironmentName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Description for Get all recommendations for an app.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param hostingEnvironmentName Name of the app.
   * @param options The options parameters.
   */
  public listRecommendedRulesForHostingEnvironment(
    resourceGroupName: string,
    hostingEnvironmentName: string,
    options?: RecommendationsListRecommendedRulesForHostingEnvironmentOptionalParams
  ): PagedAsyncIterableIterator<Recommendation> {
    const iter = this.listRecommendedRulesForHostingEnvironmentPagingAll(
      resourceGroupName,
      hostingEnvironmentName,
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
        return this.listRecommendedRulesForHostingEnvironmentPagingPage(
          resourceGroupName,
          hostingEnvironmentName,
          options
        );
      }
    };
  }

  private async *listRecommendedRulesForHostingEnvironmentPagingPage(
    resourceGroupName: string,
    hostingEnvironmentName: string,
    options?: RecommendationsListRecommendedRulesForHostingEnvironmentOptionalParams
  ): AsyncIterableIterator<Recommendation[]> {
    let result = await this._listRecommendedRulesForHostingEnvironment(
      resourceGroupName,
      hostingEnvironmentName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listRecommendedRulesForHostingEnvironmentNext(
        resourceGroupName,
        hostingEnvironmentName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listRecommendedRulesForHostingEnvironmentPagingAll(
    resourceGroupName: string,
    hostingEnvironmentName: string,
    options?: RecommendationsListRecommendedRulesForHostingEnvironmentOptionalParams
  ): AsyncIterableIterator<Recommendation> {
    for await (const page of this.listRecommendedRulesForHostingEnvironmentPagingPage(
      resourceGroupName,
      hostingEnvironmentName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Description for Get past recommendations for an app, optionally specified by the time range.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param siteName Name of the app.
   * @param options The options parameters.
   */
  public listHistoryForWebApp(
    resourceGroupName: string,
    siteName: string,
    options?: RecommendationsListHistoryForWebAppOptionalParams
  ): PagedAsyncIterableIterator<Recommendation> {
    const iter = this.listHistoryForWebAppPagingAll(
      resourceGroupName,
      siteName,
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
        return this.listHistoryForWebAppPagingPage(
          resourceGroupName,
          siteName,
          options
        );
      }
    };
  }

  private async *listHistoryForWebAppPagingPage(
    resourceGroupName: string,
    siteName: string,
    options?: RecommendationsListHistoryForWebAppOptionalParams
  ): AsyncIterableIterator<Recommendation[]> {
    let result = await this._listHistoryForWebApp(
      resourceGroupName,
      siteName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listHistoryForWebAppNext(
        resourceGroupName,
        siteName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listHistoryForWebAppPagingAll(
    resourceGroupName: string,
    siteName: string,
    options?: RecommendationsListHistoryForWebAppOptionalParams
  ): AsyncIterableIterator<Recommendation> {
    for await (const page of this.listHistoryForWebAppPagingPage(
      resourceGroupName,
      siteName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Description for Get all recommendations for an app.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param siteName Name of the app.
   * @param options The options parameters.
   */
  public listRecommendedRulesForWebApp(
    resourceGroupName: string,
    siteName: string,
    options?: RecommendationsListRecommendedRulesForWebAppOptionalParams
  ): PagedAsyncIterableIterator<Recommendation> {
    const iter = this.listRecommendedRulesForWebAppPagingAll(
      resourceGroupName,
      siteName,
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
        return this.listRecommendedRulesForWebAppPagingPage(
          resourceGroupName,
          siteName,
          options
        );
      }
    };
  }

  private async *listRecommendedRulesForWebAppPagingPage(
    resourceGroupName: string,
    siteName: string,
    options?: RecommendationsListRecommendedRulesForWebAppOptionalParams
  ): AsyncIterableIterator<Recommendation[]> {
    let result = await this._listRecommendedRulesForWebApp(
      resourceGroupName,
      siteName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listRecommendedRulesForWebAppNext(
        resourceGroupName,
        siteName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listRecommendedRulesForWebAppPagingAll(
    resourceGroupName: string,
    siteName: string,
    options?: RecommendationsListRecommendedRulesForWebAppOptionalParams
  ): AsyncIterableIterator<Recommendation> {
    for await (const page of this.listRecommendedRulesForWebAppPagingPage(
      resourceGroupName,
      siteName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Description for List all recommendations for a subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: RecommendationsListOptionalParams
  ): Promise<RecommendationsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Description for Reset all recommendation opt-out settings for a subscription.
   * @param options The options parameters.
   */
  resetAllFilters(
    options?: RecommendationsResetAllFiltersOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      resetAllFiltersOperationSpec
    );
  }

  /**
   * Description for Disables the specified rule so it will not apply to a subscription in the future.
   * @param name Rule name
   * @param options The options parameters.
   */
  disableRecommendationForSubscription(
    name: string,
    options?: RecommendationsDisableRecommendationForSubscriptionOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { name, options },
      disableRecommendationForSubscriptionOperationSpec
    );
  }

  /**
   * Description for Get past recommendations for an app, optionally specified by the time range.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param hostingEnvironmentName Name of the hosting environment.
   * @param options The options parameters.
   */
  private _listHistoryForHostingEnvironment(
    resourceGroupName: string,
    hostingEnvironmentName: string,
    options?: RecommendationsListHistoryForHostingEnvironmentOptionalParams
  ): Promise<RecommendationsListHistoryForHostingEnvironmentResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, hostingEnvironmentName, options },
      listHistoryForHostingEnvironmentOperationSpec
    );
  }

  /**
   * Description for Get all recommendations for an app.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param hostingEnvironmentName Name of the app.
   * @param options The options parameters.
   */
  private _listRecommendedRulesForHostingEnvironment(
    resourceGroupName: string,
    hostingEnvironmentName: string,
    options?: RecommendationsListRecommendedRulesForHostingEnvironmentOptionalParams
  ): Promise<RecommendationsListRecommendedRulesForHostingEnvironmentResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, hostingEnvironmentName, options },
      listRecommendedRulesForHostingEnvironmentOperationSpec
    );
  }

  /**
   * Description for Disable all recommendations for an app.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param environmentName Name of the app.
   * @param hostingEnvironmentName
   * @param options The options parameters.
   */
  disableAllForHostingEnvironment(
    resourceGroupName: string,
    environmentName: string,
    hostingEnvironmentName: string,
    options?: RecommendationsDisableAllForHostingEnvironmentOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, environmentName, hostingEnvironmentName, options },
      disableAllForHostingEnvironmentOperationSpec
    );
  }

  /**
   * Description for Reset all recommendation opt-out settings for an app.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param environmentName Name of the app.
   * @param hostingEnvironmentName
   * @param options The options parameters.
   */
  resetAllFiltersForHostingEnvironment(
    resourceGroupName: string,
    environmentName: string,
    hostingEnvironmentName: string,
    options?: RecommendationsResetAllFiltersForHostingEnvironmentOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, environmentName, hostingEnvironmentName, options },
      resetAllFiltersForHostingEnvironmentOperationSpec
    );
  }

  /**
   * Description for Get a recommendation rule for an app.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param hostingEnvironmentName Name of the hosting environment.
   * @param name Name of the recommendation.
   * @param options The options parameters.
   */
  getRuleDetailsByHostingEnvironment(
    resourceGroupName: string,
    hostingEnvironmentName: string,
    name: string,
    options?: RecommendationsGetRuleDetailsByHostingEnvironmentOptionalParams
  ): Promise<RecommendationsGetRuleDetailsByHostingEnvironmentResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, hostingEnvironmentName, name, options },
      getRuleDetailsByHostingEnvironmentOperationSpec
    );
  }

  /**
   * Description for Disables the specific rule for a web site permanently.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param environmentName Site name
   * @param name Rule name
   * @param hostingEnvironmentName
   * @param options The options parameters.
   */
  disableRecommendationForHostingEnvironment(
    resourceGroupName: string,
    environmentName: string,
    name: string,
    hostingEnvironmentName: string,
    options?: RecommendationsDisableRecommendationForHostingEnvironmentOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        environmentName,
        name,
        hostingEnvironmentName,
        options
      },
      disableRecommendationForHostingEnvironmentOperationSpec
    );
  }

  /**
   * Description for Get past recommendations for an app, optionally specified by the time range.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param siteName Name of the app.
   * @param options The options parameters.
   */
  private _listHistoryForWebApp(
    resourceGroupName: string,
    siteName: string,
    options?: RecommendationsListHistoryForWebAppOptionalParams
  ): Promise<RecommendationsListHistoryForWebAppResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, siteName, options },
      listHistoryForWebAppOperationSpec
    );
  }

  /**
   * Description for Get all recommendations for an app.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param siteName Name of the app.
   * @param options The options parameters.
   */
  private _listRecommendedRulesForWebApp(
    resourceGroupName: string,
    siteName: string,
    options?: RecommendationsListRecommendedRulesForWebAppOptionalParams
  ): Promise<RecommendationsListRecommendedRulesForWebAppResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, siteName, options },
      listRecommendedRulesForWebAppOperationSpec
    );
  }

  /**
   * Description for Disable all recommendations for an app.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param siteName Name of the app.
   * @param options The options parameters.
   */
  disableAllForWebApp(
    resourceGroupName: string,
    siteName: string,
    options?: RecommendationsDisableAllForWebAppOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, siteName, options },
      disableAllForWebAppOperationSpec
    );
  }

  /**
   * Description for Reset all recommendation opt-out settings for an app.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param siteName Name of the app.
   * @param options The options parameters.
   */
  resetAllFiltersForWebApp(
    resourceGroupName: string,
    siteName: string,
    options?: RecommendationsResetAllFiltersForWebAppOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, siteName, options },
      resetAllFiltersForWebAppOperationSpec
    );
  }

  /**
   * Description for Get a recommendation rule for an app.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param siteName Name of the app.
   * @param name Name of the recommendation.
   * @param options The options parameters.
   */
  getRuleDetailsByWebApp(
    resourceGroupName: string,
    siteName: string,
    name: string,
    options?: RecommendationsGetRuleDetailsByWebAppOptionalParams
  ): Promise<RecommendationsGetRuleDetailsByWebAppResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, siteName, name, options },
      getRuleDetailsByWebAppOperationSpec
    );
  }

  /**
   * Description for Disables the specific rule for a web site permanently.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param siteName Site name
   * @param name Rule name
   * @param options The options parameters.
   */
  disableRecommendationForSite(
    resourceGroupName: string,
    siteName: string,
    name: string,
    options?: RecommendationsDisableRecommendationForSiteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, siteName, name, options },
      disableRecommendationForSiteOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: RecommendationsListNextOptionalParams
  ): Promise<RecommendationsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }

  /**
   * ListHistoryForHostingEnvironmentNext
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param hostingEnvironmentName Name of the hosting environment.
   * @param nextLink The nextLink from the previous successful call to the
   *                 ListHistoryForHostingEnvironment method.
   * @param options The options parameters.
   */
  private _listHistoryForHostingEnvironmentNext(
    resourceGroupName: string,
    hostingEnvironmentName: string,
    nextLink: string,
    options?: RecommendationsListHistoryForHostingEnvironmentNextOptionalParams
  ): Promise<RecommendationsListHistoryForHostingEnvironmentNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, hostingEnvironmentName, nextLink, options },
      listHistoryForHostingEnvironmentNextOperationSpec
    );
  }

  /**
   * ListRecommendedRulesForHostingEnvironmentNext
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param hostingEnvironmentName Name of the app.
   * @param nextLink The nextLink from the previous successful call to the
   *                 ListRecommendedRulesForHostingEnvironment method.
   * @param options The options parameters.
   */
  private _listRecommendedRulesForHostingEnvironmentNext(
    resourceGroupName: string,
    hostingEnvironmentName: string,
    nextLink: string,
    options?: RecommendationsListRecommendedRulesForHostingEnvironmentNextOptionalParams
  ): Promise<
    RecommendationsListRecommendedRulesForHostingEnvironmentNextResponse
  > {
    return this.client.sendOperationRequest(
      { resourceGroupName, hostingEnvironmentName, nextLink, options },
      listRecommendedRulesForHostingEnvironmentNextOperationSpec
    );
  }

  /**
   * ListHistoryForWebAppNext
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param siteName Name of the app.
   * @param nextLink The nextLink from the previous successful call to the ListHistoryForWebApp method.
   * @param options The options parameters.
   */
  private _listHistoryForWebAppNext(
    resourceGroupName: string,
    siteName: string,
    nextLink: string,
    options?: RecommendationsListHistoryForWebAppNextOptionalParams
  ): Promise<RecommendationsListHistoryForWebAppNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, siteName, nextLink, options },
      listHistoryForWebAppNextOperationSpec
    );
  }

  /**
   * ListRecommendedRulesForWebAppNext
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param siteName Name of the app.
   * @param nextLink The nextLink from the previous successful call to the ListRecommendedRulesForWebApp
   *                 method.
   * @param options The options parameters.
   */
  private _listRecommendedRulesForWebAppNext(
    resourceGroupName: string,
    siteName: string,
    nextLink: string,
    options?: RecommendationsListRecommendedRulesForWebAppNextOptionalParams
  ): Promise<RecommendationsListRecommendedRulesForWebAppNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, siteName, nextLink, options },
      listRecommendedRulesForWebAppNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Web/recommendations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RecommendationCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.featured,
    Parameters.filter
  ],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const resetAllFiltersOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Web/recommendations/reset",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const disableRecommendationForSubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Web/recommendations/{name}/disable",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId, Parameters.name],
  headerParameters: [Parameters.accept],
  serializer
};
const listHistoryForHostingEnvironmentOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{hostingEnvironmentName}/recommendationHistory",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RecommendationCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.expiredOnly
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.hostingEnvironmentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listRecommendedRulesForHostingEnvironmentOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{hostingEnvironmentName}/recommendations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RecommendationCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.featured,
    Parameters.filter
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.hostingEnvironmentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const disableAllForHostingEnvironmentOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{hostingEnvironmentName}/recommendations/disable",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.environmentName],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.hostingEnvironmentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const resetAllFiltersForHostingEnvironmentOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{hostingEnvironmentName}/recommendations/reset",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.environmentName],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.hostingEnvironmentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getRuleDetailsByHostingEnvironmentOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{hostingEnvironmentName}/recommendations/{name}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RecommendationRule
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.updateSeen,
    Parameters.recommendationId
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.hostingEnvironmentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const disableRecommendationForHostingEnvironmentOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{hostingEnvironmentName}/recommendations/{name}/disable",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.environmentName],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.hostingEnvironmentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listHistoryForWebAppOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/recommendationHistory",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RecommendationCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.expiredOnly
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.siteName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listRecommendedRulesForWebAppOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/recommendations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RecommendationCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.featured,
    Parameters.filter
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.siteName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const disableAllForWebAppOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/recommendations/disable",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.siteName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const resetAllFiltersForWebAppOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/recommendations/reset",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.siteName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getRuleDetailsByWebAppOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/recommendations/{name}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RecommendationRule
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.updateSeen,
    Parameters.recommendationId
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.siteName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const disableRecommendationForSiteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/recommendations/{name}/disable",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.siteName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RecommendationCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.featured,
    Parameters.filter
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listHistoryForHostingEnvironmentNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RecommendationCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.expiredOnly
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.hostingEnvironmentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listRecommendedRulesForHostingEnvironmentNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RecommendationCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.featured,
    Parameters.filter
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.hostingEnvironmentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listHistoryForWebAppNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RecommendationCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.expiredOnly
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.siteName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listRecommendedRulesForWebAppNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RecommendationCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.featured,
    Parameters.filter
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.siteName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
