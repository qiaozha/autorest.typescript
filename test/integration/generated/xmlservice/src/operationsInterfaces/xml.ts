/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  XmlGetComplexTypeRefNoMetaOptionalParams,
  XmlGetComplexTypeRefNoMetaResponse,
  RootWithRefAndNoMeta,
  XmlPutComplexTypeRefNoMetaOptionalParams,
  XmlGetComplexTypeRefWithMetaOptionalParams,
  XmlGetComplexTypeRefWithMetaResponse,
  RootWithRefAndMeta,
  XmlPutComplexTypeRefWithMetaOptionalParams,
  XmlGetSimpleOptionalParams,
  XmlGetSimpleResponse,
  Slideshow,
  XmlPutSimpleOptionalParams,
  XmlGetWrappedListsOptionalParams,
  XmlGetWrappedListsResponse,
  AppleBarrel,
  XmlPutWrappedListsOptionalParams,
  XmlGetHeadersOptionalParams,
  XmlGetHeadersResponse,
  XmlGetEmptyListOptionalParams,
  XmlGetEmptyListResponse,
  XmlPutEmptyListOptionalParams,
  XmlGetEmptyWrappedListsOptionalParams,
  XmlGetEmptyWrappedListsResponse,
  XmlPutEmptyWrappedListsOptionalParams,
  XmlGetRootListOptionalParams,
  XmlGetRootListResponse,
  Banana,
  XmlPutRootListOptionalParams,
  XmlGetRootListSingleItemOptionalParams,
  XmlGetRootListSingleItemResponse,
  XmlPutRootListSingleItemOptionalParams,
  XmlGetEmptyRootListOptionalParams,
  XmlGetEmptyRootListResponse,
  XmlPutEmptyRootListOptionalParams,
  XmlGetEmptyChildElementOptionalParams,
  XmlGetEmptyChildElementResponse,
  XmlPutEmptyChildElementOptionalParams,
  XmlListContainersOptionalParams,
  XmlListContainersResponse,
  XmlGetServicePropertiesOptionalParams,
  XmlGetServicePropertiesResponse,
  StorageServiceProperties,
  XmlPutServicePropertiesOptionalParams,
  XmlGetAclsOptionalParams,
  XmlGetAclsResponse,
  SignedIdentifier,
  XmlPutAclsOptionalParams,
  XmlListBlobsOptionalParams,
  XmlListBlobsResponse,
  JsonInput,
  XmlJsonInputOptionalParams,
  XmlJsonOutputOptionalParams,
  XmlJsonOutputResponse,
  XmlGetXMSTextOptionalParams,
  XmlGetXmsTextResponse,
  XmlGetBytesOptionalParams,
  XmlGetBytesResponse,
  ModelWithByteProperty,
  XmlPutBinaryOptionalParams,
  XmlGetUriOptionalParams,
  XmlGetUriResponse,
  ModelWithUrlProperty,
  XmlPutUriOptionalParams
} from "../models";

/** Interface representing a Xml. */
export interface Xml {
  /**
   * Get a complex type that has a ref to a complex type with no XML node
   * @param options The options parameters.
   */
  getComplexTypeRefNoMeta(
    options?: XmlGetComplexTypeRefNoMetaOptionalParams
  ): Promise<XmlGetComplexTypeRefNoMetaResponse>;
  /**
   * Puts a complex type that has a ref to a complex type with no XML node
   * @param model I am root, and I ref a model with no meta
   * @param options The options parameters.
   */
  putComplexTypeRefNoMeta(
    model: RootWithRefAndNoMeta,
    options?: XmlPutComplexTypeRefNoMetaOptionalParams
  ): Promise<void>;
  /**
   * Get a complex type that has a ref to a complex type with XML node
   * @param options The options parameters.
   */
  getComplexTypeRefWithMeta(
    options?: XmlGetComplexTypeRefWithMetaOptionalParams
  ): Promise<XmlGetComplexTypeRefWithMetaResponse>;
  /**
   * Puts a complex type that has a ref to a complex type with XML node
   * @param model I am root, and I ref a model WITH meta
   * @param options The options parameters.
   */
  putComplexTypeRefWithMeta(
    model: RootWithRefAndMeta,
    options?: XmlPutComplexTypeRefWithMetaOptionalParams
  ): Promise<void>;
  /**
   * Get a simple XML document
   * @param options The options parameters.
   */
  getSimple(
    options?: XmlGetSimpleOptionalParams
  ): Promise<XmlGetSimpleResponse>;
  /**
   * Put a simple XML document
   * @param slideshow Data about a slideshow
   * @param options The options parameters.
   */
  putSimple(
    slideshow: Slideshow,
    options?: XmlPutSimpleOptionalParams
  ): Promise<void>;
  /**
   * Get an XML document with multiple wrapped lists
   * @param options The options parameters.
   */
  getWrappedLists(
    options?: XmlGetWrappedListsOptionalParams
  ): Promise<XmlGetWrappedListsResponse>;
  /**
   * Put an XML document with multiple wrapped lists
   * @param wrappedLists A barrel of apples.
   * @param options The options parameters.
   */
  putWrappedLists(
    wrappedLists: AppleBarrel,
    options?: XmlPutWrappedListsOptionalParams
  ): Promise<void>;
  /**
   * Get strongly-typed response headers.
   * @param options The options parameters.
   */
  getHeaders(
    options?: XmlGetHeadersOptionalParams
  ): Promise<XmlGetHeadersResponse>;
  /**
   * Get an empty list.
   * @param options The options parameters.
   */
  getEmptyList(
    options?: XmlGetEmptyListOptionalParams
  ): Promise<XmlGetEmptyListResponse>;
  /**
   * Puts an empty list.
   * @param slideshow Data about a slideshow
   * @param options The options parameters.
   */
  putEmptyList(
    slideshow: Slideshow,
    options?: XmlPutEmptyListOptionalParams
  ): Promise<void>;
  /**
   * Gets some empty wrapped lists.
   * @param options The options parameters.
   */
  getEmptyWrappedLists(
    options?: XmlGetEmptyWrappedListsOptionalParams
  ): Promise<XmlGetEmptyWrappedListsResponse>;
  /**
   * Puts some empty wrapped lists.
   * @param appleBarrel A barrel of apples.
   * @param options The options parameters.
   */
  putEmptyWrappedLists(
    appleBarrel: AppleBarrel,
    options?: XmlPutEmptyWrappedListsOptionalParams
  ): Promise<void>;
  /**
   * Gets a list as the root element.
   * @param options The options parameters.
   */
  getRootList(
    options?: XmlGetRootListOptionalParams
  ): Promise<XmlGetRootListResponse>;
  /**
   * Puts a list as the root element.
   * @param bananas Array of Banana
   * @param options The options parameters.
   */
  putRootList(
    bananas: Banana,
    options?: XmlPutRootListOptionalParams
  ): Promise<void>;
  /**
   * Gets a list with a single item.
   * @param options The options parameters.
   */
  getRootListSingleItem(
    options?: XmlGetRootListSingleItemOptionalParams
  ): Promise<XmlGetRootListSingleItemResponse>;
  /**
   * Puts a list with a single item.
   * @param bananas Array of Banana
   * @param options The options parameters.
   */
  putRootListSingleItem(
    bananas: Banana,
    options?: XmlPutRootListSingleItemOptionalParams
  ): Promise<void>;
  /**
   * Gets an empty list as the root element.
   * @param options The options parameters.
   */
  getEmptyRootList(
    options?: XmlGetEmptyRootListOptionalParams
  ): Promise<XmlGetEmptyRootListResponse>;
  /**
   * Puts an empty list as the root element.
   * @param bananas Array of Banana
   * @param options The options parameters.
   */
  putEmptyRootList(
    bananas: Banana,
    options?: XmlPutEmptyRootListOptionalParams
  ): Promise<void>;
  /**
   * Gets an XML document with an empty child element.
   * @param options The options parameters.
   */
  getEmptyChildElement(
    options?: XmlGetEmptyChildElementOptionalParams
  ): Promise<XmlGetEmptyChildElementResponse>;
  /**
   * Puts a value with an empty child element.
   * @param banana A banana.
   * @param options The options parameters.
   */
  putEmptyChildElement(
    banana: Banana,
    options?: XmlPutEmptyChildElementOptionalParams
  ): Promise<void>;
  /**
   * Lists containers in a storage account.
   * @param options The options parameters.
   */
  listContainers(
    options?: XmlListContainersOptionalParams
  ): Promise<XmlListContainersResponse>;
  /**
   * Gets storage service properties.
   * @param options The options parameters.
   */
  getServiceProperties(
    options?: XmlGetServicePropertiesOptionalParams
  ): Promise<XmlGetServicePropertiesResponse>;
  /**
   * Puts storage service properties.
   * @param properties Storage Service Properties.
   * @param options The options parameters.
   */
  putServiceProperties(
    properties: StorageServiceProperties,
    options?: XmlPutServicePropertiesOptionalParams
  ): Promise<void>;
  /**
   * Gets storage ACLs for a container.
   * @param options The options parameters.
   */
  getAcls(options?: XmlGetAclsOptionalParams): Promise<XmlGetAclsResponse>;
  /**
   * Puts storage ACLs for a container.
   * @param properties a collection of signed identifiers
   * @param options The options parameters.
   */
  putAcls(
    properties: SignedIdentifier,
    options?: XmlPutAclsOptionalParams
  ): Promise<void>;
  /**
   * Lists blobs in a storage container.
   * @param options The options parameters.
   */
  listBlobs(
    options?: XmlListBlobsOptionalParams
  ): Promise<XmlListBlobsResponse>;
  /**
   * A Swagger with XML that has one operation that takes JSON as input. You need to send the ID number
   * 42
   * @param properties
   * @param options The options parameters.
   */
  jsonInput(
    properties: JsonInput,
    options?: XmlJsonInputOptionalParams
  ): Promise<void>;
  /**
   * A Swagger with XML that has one operation that returns JSON. ID number 42
   * @param options The options parameters.
   */
  jsonOutput(
    options?: XmlJsonOutputOptionalParams
  ): Promise<XmlJsonOutputResponse>;
  /**
   * Get back an XML object with an x-ms-text property, which should translate to the returned object's
   * 'language' property being 'english' and its 'content' property being 'I am text'
   * @param options The options parameters.
   */
  getXmsText(
    options?: XmlGetXMSTextOptionalParams
  ): Promise<XmlGetXmsTextResponse>;
  /**
   * Get an XML document with binary property
   * @param options The options parameters.
   */
  getBytes(options?: XmlGetBytesOptionalParams): Promise<XmlGetBytesResponse>;
  /**
   * Put an XML document with binary property
   * @param slideshow
   * @param options The options parameters.
   */
  putBinary(
    slideshow: ModelWithByteProperty,
    options?: XmlPutBinaryOptionalParams
  ): Promise<void>;
  /**
   * Get an XML document with uri property
   * @param options The options parameters.
   */
  getUri(options?: XmlGetUriOptionalParams): Promise<XmlGetUriResponse>;
  /**
   * Put an XML document with uri property
   * @param model
   * @param options The options parameters.
   */
  putUri(
    model: ModelWithUrlProperty,
    options?: XmlPutUriOptionalParams
  ): Promise<void>;
}
