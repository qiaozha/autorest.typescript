/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Groups } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { GraphRbacManagementClient } from "../graphRbacManagementClient";
import {
  ADGroup,
  GroupsListNextOptionalParams,
  GroupsListOptionalParams,
  DirectoryObjectUnion,
  GroupsGetGroupMembersNextOptionalParams,
  GroupsGetGroupMembersOptionalParams,
  GroupGetMemberGroupsParameters,
  GroupsGetMemberGroupsOptionalParams,
  GroupsListOwnersNextOptionalParams,
  GroupsListOwnersOptionalParams,
  CheckGroupMembershipParameters,
  GroupsIsMemberOfOptionalParams,
  GroupsIsMemberOfResponse,
  GroupsRemoveMemberOptionalParams,
  GroupAddMemberParameters,
  GroupsAddMemberOptionalParams,
  GroupCreateParameters,
  GroupsCreateOptionalParams,
  GroupsCreateResponse,
  GroupsListResponse,
  GroupsGetGroupMembersResponse,
  GroupsGetOptionalParams,
  GroupsGetResponse,
  GroupsDeleteOptionalParams,
  GroupsGetMemberGroupsResponse,
  GroupsListOwnersResponse,
  AddOwnerParameters,
  GroupsAddOwnerOptionalParams,
  GroupsRemoveOwnerOptionalParams,
  GroupsListNextResponse,
  GroupsGetGroupMembersNextResponse,
  GroupsListOwnersNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Groups operations. */
export class GroupsImpl implements Groups {
  private readonly client: GraphRbacManagementClient;

  /**
   * Initialize a new instance of the class Groups class.
   * @param client Reference to the service client
   */
  constructor(client: GraphRbacManagementClient) {
    this.client = client;
  }

  /**
   * Gets list of groups for the current tenant.
   * @param options The options parameters.
   */
  public list(
    options?: GroupsListOptionalParams
  ): PagedAsyncIterableIterator<ADGroup> {
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
    options?: GroupsListOptionalParams
  ): AsyncIterableIterator<ADGroup[]> {
    let result = await this._list(options);
    yield result.value || [];
    let continuationToken = result.odataNextLink;
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.odataNextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    options?: GroupsListOptionalParams
  ): AsyncIterableIterator<ADGroup> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets the members of a group.
   * @param objectId The object ID of the group whose members should be retrieved.
   * @param options The options parameters.
   */
  public listGroupMembers(
    objectId: string,
    options?: GroupsGetGroupMembersOptionalParams
  ): PagedAsyncIterableIterator<DirectoryObjectUnion> {
    const iter = this.getGroupMembersPagingAll(objectId, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.getGroupMembersPagingPage(objectId, options);
      }
    };
  }

  private async *getGroupMembersPagingPage(
    objectId: string,
    options?: GroupsGetGroupMembersOptionalParams
  ): AsyncIterableIterator<DirectoryObjectUnion[]> {
    let result = await this._getGroupMembers(objectId, options);
    yield result.value || [];
    let continuationToken = result.odataNextLink;
    while (continuationToken) {
      result = await this._getGroupMembersNext(continuationToken, options);
      continuationToken = result.odataNextLink;
      yield result.value || [];
    }
  }

  private async *getGroupMembersPagingAll(
    objectId: string,
    options?: GroupsGetGroupMembersOptionalParams
  ): AsyncIterableIterator<DirectoryObjectUnion> {
    for await (const page of this.getGroupMembersPagingPage(
      objectId,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a collection of object IDs of groups of which the specified group is a member.
   * @param objectId The object ID of the group for which to get group membership.
   * @param parameters Group filtering parameters.
   * @param options The options parameters.
   */
  public listMemberGroups(
    objectId: string,
    parameters: GroupGetMemberGroupsParameters,
    options?: GroupsGetMemberGroupsOptionalParams
  ): PagedAsyncIterableIterator<string> {
    const iter = this.getMemberGroupsPagingAll(objectId, parameters, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.getMemberGroupsPagingPage(objectId, parameters, options);
      }
    };
  }

  private async *getMemberGroupsPagingPage(
    objectId: string,
    parameters: GroupGetMemberGroupsParameters,
    options?: GroupsGetMemberGroupsOptionalParams
  ): AsyncIterableIterator<string[]> {
    let result = await this._getMemberGroups(objectId, parameters, options);
    yield result.value || [];
  }

  private async *getMemberGroupsPagingAll(
    objectId: string,
    parameters: GroupGetMemberGroupsParameters,
    options?: GroupsGetMemberGroupsOptionalParams
  ): AsyncIterableIterator<string> {
    for await (const page of this.getMemberGroupsPagingPage(
      objectId,
      parameters,
      options
    )) {
      yield* page;
    }
  }

  /**
   * The owners are a set of non-admin users who are allowed to modify this object.
   * @param objectId The object ID of the group for which to get owners.
   * @param options The options parameters.
   */
  public listOwners(
    objectId: string,
    options?: GroupsListOwnersOptionalParams
  ): PagedAsyncIterableIterator<DirectoryObjectUnion> {
    const iter = this.listOwnersPagingAll(objectId, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listOwnersPagingPage(objectId, options);
      }
    };
  }

  private async *listOwnersPagingPage(
    objectId: string,
    options?: GroupsListOwnersOptionalParams
  ): AsyncIterableIterator<DirectoryObjectUnion[]> {
    let result = await this._listOwners(objectId, options);
    yield result.value || [];
    let continuationToken = result.odataNextLink;
    while (continuationToken) {
      result = await this._listOwnersNext(objectId, continuationToken, options);
      continuationToken = result.odataNextLink;
      yield result.value || [];
    }
  }

  private async *listOwnersPagingAll(
    objectId: string,
    options?: GroupsListOwnersOptionalParams
  ): AsyncIterableIterator<DirectoryObjectUnion> {
    for await (const page of this.listOwnersPagingPage(objectId, options)) {
      yield* page;
    }
  }

  /**
   * Gets a list of groups for the current tenant.
   * @param nextLink Next link for the list operation.
   * @param options The options parameters.
   */
  public listNext(
    nextLink: string,
    options?: GroupsListNextOptionalParams
  ): PagedAsyncIterableIterator<ADGroup> {
    const iter = this.listNextPagingAll(nextLink, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listNextPagingPage(nextLink, options);
      }
    };
  }

  private async *listNextPagingPage(
    nextLink: string,
    options?: GroupsListNextOptionalParams
  ): AsyncIterableIterator<ADGroup[]> {
    let result = await this._listNext(nextLink, options);
    yield result.value || [];
    let continuationToken = result.odataNextLink;
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.odataNextLink;
      yield result.value || [];
    }
  }

  private async *listNextPagingAll(
    nextLink: string,
    options?: GroupsListNextOptionalParams
  ): AsyncIterableIterator<ADGroup> {
    for await (const page of this.listNextPagingPage(nextLink, options)) {
      yield* page;
    }
  }

  /**
   * Gets the members of a group.
   * @param nextLink Next link for the list operation.
   * @param options The options parameters.
   */
  public listGroupMembersNext(
    nextLink: string,
    options?: GroupsGetGroupMembersNextOptionalParams
  ): PagedAsyncIterableIterator<DirectoryObjectUnion> {
    const iter = this.getGroupMembersNextPagingAll(nextLink, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.getGroupMembersNextPagingPage(nextLink, options);
      }
    };
  }

  private async *getGroupMembersNextPagingPage(
    nextLink: string,
    options?: GroupsGetGroupMembersNextOptionalParams
  ): AsyncIterableIterator<DirectoryObjectUnion[]> {
    let result = await this._getGroupMembersNext(nextLink, options);
    yield result.value || [];
    let continuationToken = result.odataNextLink;
    while (continuationToken) {
      result = await this._getGroupMembersNext(continuationToken, options);
      continuationToken = result.odataNextLink;
      yield result.value || [];
    }
  }

  private async *getGroupMembersNextPagingAll(
    nextLink: string,
    options?: GroupsGetGroupMembersNextOptionalParams
  ): AsyncIterableIterator<DirectoryObjectUnion> {
    for await (const page of this.getGroupMembersNextPagingPage(
      nextLink,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Checks whether the specified user, group, contact, or service principal is a direct or transitive
   * member of the specified group.
   * @param parameters The check group membership parameters.
   * @param options The options parameters.
   */
  IsMemberOf(
    parameters: CheckGroupMembershipParameters,
    options?: GroupsIsMemberOfOptionalParams
  ): Promise<GroupsIsMemberOfResponse> {
    return this.client.sendOperationRequest(
      { parameters, options },
      IsMemberOfOperationSpec
    );
  }

  /**
   * Remove a member from a group.
   * @param groupObjectId The object ID of the group from which to remove the member.
   * @param memberObjectId Member object id
   * @param options The options parameters.
   */
  removeMember(
    groupObjectId: string,
    memberObjectId: string,
    options?: GroupsRemoveMemberOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { groupObjectId, memberObjectId, options },
      removeMemberOperationSpec
    );
  }

  /**
   * Add a member to a group.
   * @param groupObjectId The object ID of the group to which to add the member.
   * @param parameters The URL of the member object, such as
   *                   https://graph.windows.net/0b1f9851-1bf0-433f-aec3-cb9272f093dc/directoryObjects/f260bbc4-c254-447b-94cf-293b5ec434dd.
   * @param options The options parameters.
   */
  addMember(
    groupObjectId: string,
    parameters: GroupAddMemberParameters,
    options?: GroupsAddMemberOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { groupObjectId, parameters, options },
      addMemberOperationSpec
    );
  }

  /**
   * Create a group in the directory.
   * @param parameters The parameters for the group to create.
   * @param options The options parameters.
   */
  create(
    parameters: GroupCreateParameters,
    options?: GroupsCreateOptionalParams
  ): Promise<GroupsCreateResponse> {
    return this.client.sendOperationRequest(
      { parameters, options },
      createOperationSpec
    );
  }

  /**
   * Gets list of groups for the current tenant.
   * @param options The options parameters.
   */
  private _list(
    options?: GroupsListOptionalParams
  ): Promise<GroupsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Gets the members of a group.
   * @param objectId The object ID of the group whose members should be retrieved.
   * @param options The options parameters.
   */
  private _getGroupMembers(
    objectId: string,
    options?: GroupsGetGroupMembersOptionalParams
  ): Promise<GroupsGetGroupMembersResponse> {
    return this.client.sendOperationRequest(
      { objectId, options },
      getGroupMembersOperationSpec
    );
  }

  /**
   * Gets group information from the directory.
   * @param objectId The object ID of the user for which to get group information.
   * @param options The options parameters.
   */
  get(
    objectId: string,
    options?: GroupsGetOptionalParams
  ): Promise<GroupsGetResponse> {
    return this.client.sendOperationRequest(
      { objectId, options },
      getOperationSpec
    );
  }

  /**
   * Delete a group from the directory.
   * @param objectId The object ID of the group to delete.
   * @param options The options parameters.
   */
  delete(
    objectId: string,
    options?: GroupsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { objectId, options },
      deleteOperationSpec
    );
  }

  /**
   * Gets a collection of object IDs of groups of which the specified group is a member.
   * @param objectId The object ID of the group for which to get group membership.
   * @param parameters Group filtering parameters.
   * @param options The options parameters.
   */
  private _getMemberGroups(
    objectId: string,
    parameters: GroupGetMemberGroupsParameters,
    options?: GroupsGetMemberGroupsOptionalParams
  ): Promise<GroupsGetMemberGroupsResponse> {
    return this.client.sendOperationRequest(
      { objectId, parameters, options },
      getMemberGroupsOperationSpec
    );
  }

  /**
   * The owners are a set of non-admin users who are allowed to modify this object.
   * @param objectId The object ID of the group for which to get owners.
   * @param options The options parameters.
   */
  private _listOwners(
    objectId: string,
    options?: GroupsListOwnersOptionalParams
  ): Promise<GroupsListOwnersResponse> {
    return this.client.sendOperationRequest(
      { objectId, options },
      listOwnersOperationSpec
    );
  }

  /**
   * Add an owner to a group.
   * @param objectId The object ID of the application to which to add the owner.
   * @param parameters The URL of the owner object, such as
   *                   https://graph.windows.net/0b1f9851-1bf0-433f-aec3-cb9272f093dc/directoryObjects/f260bbc4-c254-447b-94cf-293b5ec434dd.
   * @param options The options parameters.
   */
  addOwner(
    objectId: string,
    parameters: AddOwnerParameters,
    options?: GroupsAddOwnerOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { objectId, parameters, options },
      addOwnerOperationSpec
    );
  }

  /**
   * Remove a member from owners.
   * @param objectId The object ID of the group from which to remove the owner.
   * @param ownerObjectId Owner object id
   * @param options The options parameters.
   */
  removeOwner(
    objectId: string,
    ownerObjectId: string,
    options?: GroupsRemoveOwnerOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { objectId, ownerObjectId, options },
      removeOwnerOperationSpec
    );
  }

  /**
   * Gets a list of groups for the current tenant.
   * @param nextLink Next link for the list operation.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: GroupsListNextOptionalParams
  ): Promise<GroupsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }

  /**
   * Gets the members of a group.
   * @param nextLink Next link for the list operation.
   * @param options The options parameters.
   */
  private _getGroupMembersNext(
    nextLink: string,
    options?: GroupsGetGroupMembersNextOptionalParams
  ): Promise<GroupsGetGroupMembersNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      getGroupMembersNextOperationSpec
    );
  }

  /**
   * ListOwnersNext
   * @param objectId The object ID of the group for which to get owners.
   * @param nextLink The nextLink from the previous successful call to the ListOwners method.
   * @param options The options parameters.
   */
  private _listOwnersNext(
    objectId: string,
    nextLink: string,
    options?: GroupsListOwnersNextOptionalParams
  ): Promise<GroupsListOwnersNextResponse> {
    return this.client.sendOperationRequest(
      { objectId, nextLink, options },
      listOwnersNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const IsMemberOfOperationSpec: coreClient.OperationSpec = {
  path: "/{tenantID}/isMemberOf",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CheckGroupMembershipResult
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  requestBody: Parameters.parameters5,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenantID],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const removeMemberOperationSpec: coreClient.OperationSpec = {
  path: "/{tenantID}/groups/{groupObjectId}/$links/members/{memberObjectId}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.tenantID,
    Parameters.groupObjectId,
    Parameters.memberObjectId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const addMemberOperationSpec: coreClient.OperationSpec = {
  path: "/{tenantID}/groups/{groupObjectId}/$links/members",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  requestBody: Parameters.parameters6,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.tenantID,
    Parameters.groupObjectId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path: "/{tenantID}/groups",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.ADGroup
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  requestBody: Parameters.parameters7,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenantID],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/{tenantID}/groups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GroupListResult
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [Parameters.$host, Parameters.tenantID],
  headerParameters: [Parameters.accept],
  serializer
};
const getGroupMembersOperationSpec: coreClient.OperationSpec = {
  path: "/{tenantID}/groups/{objectId}/members",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DirectoryObjectListResult
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenantID, Parameters.objectId],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/{tenantID}/groups/{objectId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ADGroup
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenantID, Parameters.objectId],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/{tenantID}/groups/{objectId}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenantID, Parameters.objectId],
  headerParameters: [Parameters.accept],
  serializer
};
const getMemberGroupsOperationSpec: coreClient.OperationSpec = {
  path: "/{tenantID}/groups/{objectId}/getMemberGroups",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.GroupGetMemberGroupsResult
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  requestBody: Parameters.parameters8,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenantID, Parameters.objectId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listOwnersOperationSpec: coreClient.OperationSpec = {
  path: "/{tenantID}/groups/{objectId}/owners",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DirectoryObjectListResult
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenantID, Parameters.objectId],
  headerParameters: [Parameters.accept],
  serializer
};
const addOwnerOperationSpec: coreClient.OperationSpec = {
  path: "/{tenantID}/groups/{objectId}/$links/owners",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  requestBody: Parameters.parameters2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenantID, Parameters.objectId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const removeOwnerOperationSpec: coreClient.OperationSpec = {
  path: "/{tenantID}/groups/{objectId}/$links/owners/{ownerObjectId}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.tenantID,
    Parameters.ownerObjectId,
    Parameters.objectId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "/{tenantID}/{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GroupListResult
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenantID, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
const getGroupMembersNextOperationSpec: coreClient.OperationSpec = {
  path: "/{tenantID}/{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DirectoryObjectListResult
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenantID, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
const listOwnersNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DirectoryObjectListResult
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.tenantID,
    Parameters.nextLink,
    Parameters.objectId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
