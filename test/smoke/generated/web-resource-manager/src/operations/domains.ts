/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Domains } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { WebSiteManagementClient } from "../webSiteManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  Domain,
  DomainsListNextOptionalParams,
  DomainsListOptionalParams,
  NameIdentifier,
  DomainRecommendationSearchParameters,
  DomainsListRecommendationsNextOptionalParams,
  DomainsListRecommendationsOptionalParams,
  DomainsListByResourceGroupNextOptionalParams,
  DomainsListByResourceGroupOptionalParams,
  DomainOwnershipIdentifier,
  DomainsListOwnershipIdentifiersNextOptionalParams,
  DomainsListOwnershipIdentifiersOptionalParams,
  DomainsCheckAvailabilityOptionalParams,
  DomainsCheckAvailabilityResponse,
  DomainsListResponse,
  DomainsGetControlCenterSsoRequestOptionalParams,
  DomainsGetControlCenterSsoRequestResponse,
  DomainsListRecommendationsResponse,
  DomainsListByResourceGroupResponse,
  DomainsGetOptionalParams,
  DomainsGetResponse,
  DomainsCreateOrUpdateOptionalParams,
  DomainsCreateOrUpdateResponse,
  DomainsDeleteOptionalParams,
  DomainPatchResource,
  DomainsUpdateOptionalParams,
  DomainsUpdateResponse,
  DomainsListOwnershipIdentifiersResponse,
  DomainsGetOwnershipIdentifierOptionalParams,
  DomainsGetOwnershipIdentifierResponse,
  DomainsCreateOrUpdateOwnershipIdentifierOptionalParams,
  DomainsCreateOrUpdateOwnershipIdentifierResponse,
  DomainsDeleteOwnershipIdentifierOptionalParams,
  DomainsUpdateOwnershipIdentifierOptionalParams,
  DomainsUpdateOwnershipIdentifierResponse,
  DomainsRenewOptionalParams,
  DomainsListNextResponse,
  DomainsListRecommendationsNextResponse,
  DomainsListByResourceGroupNextResponse,
  DomainsListOwnershipIdentifiersNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Domains operations. */
export class DomainsImpl implements Domains {
  private readonly client: WebSiteManagementClient;

  /**
   * Initialize a new instance of the class Domains class.
   * @param client Reference to the service client
   */
  constructor(client: WebSiteManagementClient) {
    this.client = client;
  }

  /**
   * Description for Get all domains in a subscription.
   * @param options The options parameters.
   */
  public list(
    options?: DomainsListOptionalParams
  ): PagedAsyncIterableIterator<Domain> {
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
    options?: DomainsListOptionalParams
  ): AsyncIterableIterator<Domain[]> {
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
    options?: DomainsListOptionalParams
  ): AsyncIterableIterator<Domain> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Description for Get domain name recommendations based on keywords.
   * @param parameters Search parameters for domain name recommendations.
   * @param options The options parameters.
   */
  public listRecommendations(
    parameters: DomainRecommendationSearchParameters,
    options?: DomainsListRecommendationsOptionalParams
  ): PagedAsyncIterableIterator<NameIdentifier> {
    const iter = this.listRecommendationsPagingAll(parameters, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listRecommendationsPagingPage(parameters, options);
      }
    };
  }

  private async *listRecommendationsPagingPage(
    parameters: DomainRecommendationSearchParameters,
    options?: DomainsListRecommendationsOptionalParams
  ): AsyncIterableIterator<NameIdentifier[]> {
    let result = await this._listRecommendations(parameters, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listRecommendationsNext(
        parameters,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listRecommendationsPagingAll(
    parameters: DomainRecommendationSearchParameters,
    options?: DomainsListRecommendationsOptionalParams
  ): AsyncIterableIterator<NameIdentifier> {
    for await (const page of this.listRecommendationsPagingPage(
      parameters,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Description for Get all domains in a resource group.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: DomainsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<Domain> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByResourceGroupPagingPage(resourceGroupName, options);
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: DomainsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<Domain[]> {
    let result = await this._listByResourceGroup(resourceGroupName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: DomainsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<Domain> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Description for Lists domain ownership identifiers.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param domainName Name of domain.
   * @param options The options parameters.
   */
  public listOwnershipIdentifiers(
    resourceGroupName: string,
    domainName: string,
    options?: DomainsListOwnershipIdentifiersOptionalParams
  ): PagedAsyncIterableIterator<DomainOwnershipIdentifier> {
    const iter = this.listOwnershipIdentifiersPagingAll(
      resourceGroupName,
      domainName,
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
        return this.listOwnershipIdentifiersPagingPage(
          resourceGroupName,
          domainName,
          options
        );
      }
    };
  }

  private async *listOwnershipIdentifiersPagingPage(
    resourceGroupName: string,
    domainName: string,
    options?: DomainsListOwnershipIdentifiersOptionalParams
  ): AsyncIterableIterator<DomainOwnershipIdentifier[]> {
    let result = await this._listOwnershipIdentifiers(
      resourceGroupName,
      domainName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listOwnershipIdentifiersNext(
        resourceGroupName,
        domainName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listOwnershipIdentifiersPagingAll(
    resourceGroupName: string,
    domainName: string,
    options?: DomainsListOwnershipIdentifiersOptionalParams
  ): AsyncIterableIterator<DomainOwnershipIdentifier> {
    for await (const page of this.listOwnershipIdentifiersPagingPage(
      resourceGroupName,
      domainName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Description for Check if a domain is available for registration.
   * @param identifier Name of the domain.
   * @param options The options parameters.
   */
  checkAvailability(
    identifier: NameIdentifier,
    options?: DomainsCheckAvailabilityOptionalParams
  ): Promise<DomainsCheckAvailabilityResponse> {
    return this.client.sendOperationRequest(
      { identifier, options },
      checkAvailabilityOperationSpec
    );
  }

  /**
   * Description for Get all domains in a subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: DomainsListOptionalParams
  ): Promise<DomainsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Description for Generate a single sign-on request for the domain management portal.
   * @param options The options parameters.
   */
  getControlCenterSsoRequest(
    options?: DomainsGetControlCenterSsoRequestOptionalParams
  ): Promise<DomainsGetControlCenterSsoRequestResponse> {
    return this.client.sendOperationRequest(
      { options },
      getControlCenterSsoRequestOperationSpec
    );
  }

  /**
   * Description for Get domain name recommendations based on keywords.
   * @param parameters Search parameters for domain name recommendations.
   * @param options The options parameters.
   */
  private _listRecommendations(
    parameters: DomainRecommendationSearchParameters,
    options?: DomainsListRecommendationsOptionalParams
  ): Promise<DomainsListRecommendationsResponse> {
    return this.client.sendOperationRequest(
      { parameters, options },
      listRecommendationsOperationSpec
    );
  }

  /**
   * Description for Get all domains in a resource group.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: DomainsListByResourceGroupOptionalParams
  ): Promise<DomainsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Description for Get a domain.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param domainName Name of the domain.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    domainName: string,
    options?: DomainsGetOptionalParams
  ): Promise<DomainsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, domainName, options },
      getOperationSpec
    );
  }

  /**
   * Description for Creates or updates a domain.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param domainName Name of the domain.
   * @param domain Domain registration information.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    domainName: string,
    domain: Domain,
    options?: DomainsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DomainsCreateOrUpdateResponse>,
      DomainsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DomainsCreateOrUpdateResponse> => {
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
      { resourceGroupName, domainName, domain, options },
      createOrUpdateOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Description for Creates or updates a domain.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param domainName Name of the domain.
   * @param domain Domain registration information.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    domainName: string,
    domain: Domain,
    options?: DomainsCreateOrUpdateOptionalParams
  ): Promise<DomainsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      domainName,
      domain,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Description for Delete a domain.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param domainName Name of the domain.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    domainName: string,
    options?: DomainsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, domainName, options },
      deleteOperationSpec
    );
  }

  /**
   * Description for Creates or updates a domain.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param domainName Name of the domain.
   * @param domain Domain registration information.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    domainName: string,
    domain: DomainPatchResource,
    options?: DomainsUpdateOptionalParams
  ): Promise<DomainsUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, domainName, domain, options },
      updateOperationSpec
    );
  }

  /**
   * Description for Lists domain ownership identifiers.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param domainName Name of domain.
   * @param options The options parameters.
   */
  private _listOwnershipIdentifiers(
    resourceGroupName: string,
    domainName: string,
    options?: DomainsListOwnershipIdentifiersOptionalParams
  ): Promise<DomainsListOwnershipIdentifiersResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, domainName, options },
      listOwnershipIdentifiersOperationSpec
    );
  }

  /**
   * Description for Get ownership identifier for domain
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param domainName Name of domain.
   * @param name Name of identifier.
   * @param options The options parameters.
   */
  getOwnershipIdentifier(
    resourceGroupName: string,
    domainName: string,
    name: string,
    options?: DomainsGetOwnershipIdentifierOptionalParams
  ): Promise<DomainsGetOwnershipIdentifierResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, domainName, name, options },
      getOwnershipIdentifierOperationSpec
    );
  }

  /**
   * Description for Creates an ownership identifier for a domain or updates identifier details for an
   * existing identifer
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param domainName Name of domain.
   * @param name Name of identifier.
   * @param domainOwnershipIdentifier A JSON representation of the domain ownership properties.
   * @param options The options parameters.
   */
  createOrUpdateOwnershipIdentifier(
    resourceGroupName: string,
    domainName: string,
    name: string,
    domainOwnershipIdentifier: DomainOwnershipIdentifier,
    options?: DomainsCreateOrUpdateOwnershipIdentifierOptionalParams
  ): Promise<DomainsCreateOrUpdateOwnershipIdentifierResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        domainName,
        name,
        domainOwnershipIdentifier,
        options
      },
      createOrUpdateOwnershipIdentifierOperationSpec
    );
  }

  /**
   * Description for Delete ownership identifier for domain
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param domainName Name of domain.
   * @param name Name of identifier.
   * @param options The options parameters.
   */
  deleteOwnershipIdentifier(
    resourceGroupName: string,
    domainName: string,
    name: string,
    options?: DomainsDeleteOwnershipIdentifierOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, domainName, name, options },
      deleteOwnershipIdentifierOperationSpec
    );
  }

  /**
   * Description for Creates an ownership identifier for a domain or updates identifier details for an
   * existing identifer
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param domainName Name of domain.
   * @param name Name of identifier.
   * @param domainOwnershipIdentifier A JSON representation of the domain ownership properties.
   * @param options The options parameters.
   */
  updateOwnershipIdentifier(
    resourceGroupName: string,
    domainName: string,
    name: string,
    domainOwnershipIdentifier: DomainOwnershipIdentifier,
    options?: DomainsUpdateOwnershipIdentifierOptionalParams
  ): Promise<DomainsUpdateOwnershipIdentifierResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        domainName,
        name,
        domainOwnershipIdentifier,
        options
      },
      updateOwnershipIdentifierOperationSpec
    );
  }

  /**
   * Description for Renew a domain.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param domainName Name of the domain.
   * @param options The options parameters.
   */
  renew(
    resourceGroupName: string,
    domainName: string,
    options?: DomainsRenewOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, domainName, options },
      renewOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: DomainsListNextOptionalParams
  ): Promise<DomainsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }

  /**
   * ListRecommendationsNext
   * @param parameters Search parameters for domain name recommendations.
   * @param nextLink The nextLink from the previous successful call to the ListRecommendations method.
   * @param options The options parameters.
   */
  private _listRecommendationsNext(
    parameters: DomainRecommendationSearchParameters,
    nextLink: string,
    options?: DomainsListRecommendationsNextOptionalParams
  ): Promise<DomainsListRecommendationsNextResponse> {
    return this.client.sendOperationRequest(
      { parameters, nextLink, options },
      listRecommendationsNextOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: DomainsListByResourceGroupNextOptionalParams
  ): Promise<DomainsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }

  /**
   * ListOwnershipIdentifiersNext
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param domainName Name of domain.
   * @param nextLink The nextLink from the previous successful call to the ListOwnershipIdentifiers
   *                 method.
   * @param options The options parameters.
   */
  private _listOwnershipIdentifiersNext(
    resourceGroupName: string,
    domainName: string,
    nextLink: string,
    options?: DomainsListOwnershipIdentifiersNextOptionalParams
  ): Promise<DomainsListOwnershipIdentifiersNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, domainName, nextLink, options },
      listOwnershipIdentifiersNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const checkAvailabilityOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.DomainRegistration/checkDomainAvailability",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.DomainAvailabilityCheckResult
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  requestBody: Parameters.identifier,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.DomainRegistration/domains",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DomainCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const getControlCenterSsoRequestOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.DomainRegistration/generateSsoRequest",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.DomainControlCenterSsoRequest
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listRecommendationsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.DomainRegistration/listDomainRecommendations",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.NameIdentifierCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  requestBody: Parameters.parameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DomainCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Domain
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.domainName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Domain
    },
    201: {
      bodyMapper: Mappers.Domain
    },
    202: {
      bodyMapper: Mappers.Domain
    },
    204: {
      bodyMapper: Mappers.Domain
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  requestBody: Parameters.domain,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.domainName1
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.forceHardDeleteDomain],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.domainName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Domain
    },
    202: {
      bodyMapper: Mappers.Domain
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  requestBody: Parameters.domain1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.domainName1
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listOwnershipIdentifiersOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName}/domainOwnershipIdentifiers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DomainOwnershipIdentifierCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.domainName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOwnershipIdentifierOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName}/domainOwnershipIdentifiers/{name}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DomainOwnershipIdentifier
    },
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
    Parameters.domainName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOwnershipIdentifierOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName}/domainOwnershipIdentifiers/{name}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DomainOwnershipIdentifier
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  requestBody: Parameters.domainOwnershipIdentifier,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.domainName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOwnershipIdentifierOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName}/domainOwnershipIdentifiers/{name}",
  httpMethod: "DELETE",
  responses: {
    200: {},
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
    Parameters.name,
    Parameters.domainName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOwnershipIdentifierOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName}/domainOwnershipIdentifiers/{name}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.DomainOwnershipIdentifier
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  requestBody: Parameters.domainOwnershipIdentifier,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.domainName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const renewOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName}/renew",
  httpMethod: "POST",
  responses: {
    200: {},
    202: {},
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
    Parameters.domainName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DomainCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listRecommendationsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NameIdentifierCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DomainCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOwnershipIdentifiersNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DomainOwnershipIdentifierCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.domainName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
