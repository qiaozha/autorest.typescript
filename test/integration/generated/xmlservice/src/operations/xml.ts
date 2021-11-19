/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Xml } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { XmlServiceClient } from "../xmlServiceClient";
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
  XmlGetXMsTextOptionalParams,
  XmlGetXMsTextResponse,
  XmlGetBytesOptionalParams,
  XmlGetBytesResponse,
  ModelWithByteProperty,
  XmlPutBinaryOptionalParams,
  XmlGetUriOptionalParams,
  XmlGetUriResponse,
  ModelWithUrlProperty,
  XmlPutUriOptionalParams
} from "../models";

/** Class containing Xml operations. */
export class XmlImpl implements Xml {
  private readonly client: XmlServiceClient;

  /**
   * Initialize a new instance of the class Xml class.
   * @param client Reference to the service client
   */
  constructor(client: XmlServiceClient) {
    this.client = client;
  }

  /**
   * Get a complex type that has a ref to a complex type with no XML node
   * @param options The options parameters.
   */
  getComplexTypeRefNoMeta(
    options?: XmlGetComplexTypeRefNoMetaOptionalParams
  ): Promise<XmlGetComplexTypeRefNoMetaResponse> {
    return this.client.sendOperationRequest(
      { options },
      getComplexTypeRefNoMetaOperationSpec
    );
  }

  /**
   * Puts a complex type that has a ref to a complex type with no XML node
   * @param model I am root, and I ref a model with no meta
   * @param options The options parameters.
   */
  putComplexTypeRefNoMeta(
    model: RootWithRefAndNoMeta,
    options?: XmlPutComplexTypeRefNoMetaOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { model, options },
      putComplexTypeRefNoMetaOperationSpec
    );
  }

  /**
   * Get a complex type that has a ref to a complex type with XML node
   * @param options The options parameters.
   */
  getComplexTypeRefWithMeta(
    options?: XmlGetComplexTypeRefWithMetaOptionalParams
  ): Promise<XmlGetComplexTypeRefWithMetaResponse> {
    return this.client.sendOperationRequest(
      { options },
      getComplexTypeRefWithMetaOperationSpec
    );
  }

  /**
   * Puts a complex type that has a ref to a complex type with XML node
   * @param model I am root, and I ref a model WITH meta
   * @param options The options parameters.
   */
  putComplexTypeRefWithMeta(
    model: RootWithRefAndMeta,
    options?: XmlPutComplexTypeRefWithMetaOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { model, options },
      putComplexTypeRefWithMetaOperationSpec
    );
  }

  /**
   * Get a simple XML document
   * @param options The options parameters.
   */
  getSimple(
    options?: XmlGetSimpleOptionalParams
  ): Promise<XmlGetSimpleResponse> {
    return this.client.sendOperationRequest(
      { options },
      getSimpleOperationSpec
    );
  }

  /**
   * Put a simple XML document
   * @param slideshow Data about a slideshow
   * @param options The options parameters.
   */
  putSimple(
    slideshow: Slideshow,
    options?: XmlPutSimpleOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { slideshow, options },
      putSimpleOperationSpec
    );
  }

  /**
   * Get an XML document with multiple wrapped lists
   * @param options The options parameters.
   */
  getWrappedLists(
    options?: XmlGetWrappedListsOptionalParams
  ): Promise<XmlGetWrappedListsResponse> {
    return this.client.sendOperationRequest(
      { options },
      getWrappedListsOperationSpec
    );
  }

  /**
   * Put an XML document with multiple wrapped lists
   * @param wrappedLists A barrel of apples.
   * @param options The options parameters.
   */
  putWrappedLists(
    wrappedLists: AppleBarrel,
    options?: XmlPutWrappedListsOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { wrappedLists, options },
      putWrappedListsOperationSpec
    );
  }

  /**
   * Get strongly-typed response headers.
   * @param options The options parameters.
   */
  getHeaders(
    options?: XmlGetHeadersOptionalParams
  ): Promise<XmlGetHeadersResponse> {
    return this.client.sendOperationRequest(
      { options },
      getHeadersOperationSpec
    );
  }

  /**
   * Get an empty list.
   * @param options The options parameters.
   */
  getEmptyList(
    options?: XmlGetEmptyListOptionalParams
  ): Promise<XmlGetEmptyListResponse> {
    return this.client.sendOperationRequest(
      { options },
      getEmptyListOperationSpec
    );
  }

  /**
   * Puts an empty list.
   * @param slideshow Data about a slideshow
   * @param options The options parameters.
   */
  putEmptyList(
    slideshow: Slideshow,
    options?: XmlPutEmptyListOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { slideshow, options },
      putEmptyListOperationSpec
    );
  }

  /**
   * Gets some empty wrapped lists.
   * @param options The options parameters.
   */
  getEmptyWrappedLists(
    options?: XmlGetEmptyWrappedListsOptionalParams
  ): Promise<XmlGetEmptyWrappedListsResponse> {
    return this.client.sendOperationRequest(
      { options },
      getEmptyWrappedListsOperationSpec
    );
  }

  /**
   * Puts some empty wrapped lists.
   * @param appleBarrel A barrel of apples.
   * @param options The options parameters.
   */
  putEmptyWrappedLists(
    appleBarrel: AppleBarrel,
    options?: XmlPutEmptyWrappedListsOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { appleBarrel, options },
      putEmptyWrappedListsOperationSpec
    );
  }

  /**
   * Gets a list as the root element.
   * @param options The options parameters.
   */
  getRootList(
    options?: XmlGetRootListOptionalParams
  ): Promise<XmlGetRootListResponse> {
    return this.client.sendOperationRequest(
      { options },
      getRootListOperationSpec
    );
  }

  /**
   * Puts a list as the root element.
   * @param bananas Array of Banana
   * @param options The options parameters.
   */
  putRootList(
    bananas: Banana,
    options?: XmlPutRootListOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { bananas, options },
      putRootListOperationSpec
    );
  }

  /**
   * Gets a list with a single item.
   * @param options The options parameters.
   */
  getRootListSingleItem(
    options?: XmlGetRootListSingleItemOptionalParams
  ): Promise<XmlGetRootListSingleItemResponse> {
    return this.client.sendOperationRequest(
      { options },
      getRootListSingleItemOperationSpec
    );
  }

  /**
   * Puts a list with a single item.
   * @param bananas Array of Banana
   * @param options The options parameters.
   */
  putRootListSingleItem(
    bananas: Banana,
    options?: XmlPutRootListSingleItemOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { bananas, options },
      putRootListSingleItemOperationSpec
    );
  }

  /**
   * Gets an empty list as the root element.
   * @param options The options parameters.
   */
  getEmptyRootList(
    options?: XmlGetEmptyRootListOptionalParams
  ): Promise<XmlGetEmptyRootListResponse> {
    return this.client.sendOperationRequest(
      { options },
      getEmptyRootListOperationSpec
    );
  }

  /**
   * Puts an empty list as the root element.
   * @param bananas Array of Banana
   * @param options The options parameters.
   */
  putEmptyRootList(
    bananas: Banana,
    options?: XmlPutEmptyRootListOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { bananas, options },
      putEmptyRootListOperationSpec
    );
  }

  /**
   * Gets an XML document with an empty child element.
   * @param options The options parameters.
   */
  getEmptyChildElement(
    options?: XmlGetEmptyChildElementOptionalParams
  ): Promise<XmlGetEmptyChildElementResponse> {
    return this.client.sendOperationRequest(
      { options },
      getEmptyChildElementOperationSpec
    );
  }

  /**
   * Puts a value with an empty child element.
   * @param banana A banana.
   * @param options The options parameters.
   */
  putEmptyChildElement(
    banana: Banana,
    options?: XmlPutEmptyChildElementOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { banana, options },
      putEmptyChildElementOperationSpec
    );
  }

  /**
   * Lists containers in a storage account.
   * @param options The options parameters.
   */
  listContainers(
    options?: XmlListContainersOptionalParams
  ): Promise<XmlListContainersResponse> {
    return this.client.sendOperationRequest(
      { options },
      listContainersOperationSpec
    );
  }

  /**
   * Gets storage service properties.
   * @param options The options parameters.
   */
  getServiceProperties(
    options?: XmlGetServicePropertiesOptionalParams
  ): Promise<XmlGetServicePropertiesResponse> {
    return this.client.sendOperationRequest(
      { options },
      getServicePropertiesOperationSpec
    );
  }

  /**
   * Puts storage service properties.
   * @param properties Storage Service Properties.
   * @param options The options parameters.
   */
  putServiceProperties(
    properties: StorageServiceProperties,
    options?: XmlPutServicePropertiesOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { properties, options },
      putServicePropertiesOperationSpec
    );
  }

  /**
   * Gets storage ACLs for a container.
   * @param options The options parameters.
   */
  getAcls(options?: XmlGetAclsOptionalParams): Promise<XmlGetAclsResponse> {
    return this.client.sendOperationRequest({ options }, getAclsOperationSpec);
  }

  /**
   * Puts storage ACLs for a container.
   * @param properties a collection of signed identifiers
   * @param options The options parameters.
   */
  putAcls(
    properties: SignedIdentifier,
    options?: XmlPutAclsOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { properties, options },
      putAclsOperationSpec
    );
  }

  /**
   * Lists blobs in a storage container.
   * @param options The options parameters.
   */
  listBlobs(
    options?: XmlListBlobsOptionalParams
  ): Promise<XmlListBlobsResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBlobsOperationSpec
    );
  }

  /**
   * A Swagger with XML that has one operation that takes JSON as input. You need to send the ID number
   * 42
   * @param properties
   * @param options The options parameters.
   */
  jsonInput(
    properties: JsonInput,
    options?: XmlJsonInputOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { properties, options },
      jsonInputOperationSpec
    );
  }

  /**
   * A Swagger with XML that has one operation that returns JSON. ID number 42
   * @param options The options parameters.
   */
  jsonOutput(
    options?: XmlJsonOutputOptionalParams
  ): Promise<XmlJsonOutputResponse> {
    return this.client.sendOperationRequest(
      { options },
      jsonOutputOperationSpec
    );
  }

  /**
   * Get back an XML object with an x-ms-text property, which should translate to the returned object's
   * 'language' property being 'english' and its 'content' property being 'I am text'
   * @param options The options parameters.
   */
  getXMsText(
    options?: XmlGetXMsTextOptionalParams
  ): Promise<XmlGetXMsTextResponse> {
    return this.client.sendOperationRequest(
      { options },
      getXMsTextOperationSpec
    );
  }

  /**
   * Get an XML document with binary property
   * @param options The options parameters.
   */
  getBytes(options?: XmlGetBytesOptionalParams): Promise<XmlGetBytesResponse> {
    return this.client.sendOperationRequest({ options }, getBytesOperationSpec);
  }

  /**
   * Put an XML document with binary property
   * @param slideshow
   * @param options The options parameters.
   */
  putBinary(
    slideshow: ModelWithByteProperty,
    options?: XmlPutBinaryOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { slideshow, options },
      putBinaryOperationSpec
    );
  }

  /**
   * Get an XML document with uri property
   * @param options The options parameters.
   */
  getUri(options?: XmlGetUriOptionalParams): Promise<XmlGetUriResponse> {
    return this.client.sendOperationRequest({ options }, getUriOperationSpec);
  }

  /**
   * Put an XML document with uri property
   * @param model
   * @param options The options parameters.
   */
  putUri(
    model: ModelWithUrlProperty,
    options?: XmlPutUriOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { model, options },
      putUriOperationSpec
    );
  }
}
// Operation Specifications
const xmlSerializer = coreClient.createSerializer(Mappers, /* isXml */ true);

const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getComplexTypeRefNoMetaOperationSpec: coreClient.OperationSpec = {
  path: "/xml/complex-type-ref-no-meta",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RootWithRefAndNoMeta
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  isXML: true,
  serializer: xmlSerializer
};
const putComplexTypeRefNoMetaOperationSpec: coreClient.OperationSpec = {
  path: "/xml/complex-type-ref-no-meta",
  httpMethod: "PUT",
  responses: { 201: {} },
  requestBody: Parameters.model,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  isXML: true,
  contentType: "application/xml; charset=utf-8",
  mediaType: "xml",
  serializer: xmlSerializer
};
const getComplexTypeRefWithMetaOperationSpec: coreClient.OperationSpec = {
  path: "/xml/complex-type-ref-with-meta",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RootWithRefAndMeta
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  isXML: true,
  serializer: xmlSerializer
};
const putComplexTypeRefWithMetaOperationSpec: coreClient.OperationSpec = {
  path: "/xml/complex-type-ref-with-meta",
  httpMethod: "PUT",
  responses: { 201: {} },
  requestBody: Parameters.model1,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  isXML: true,
  contentType: "application/xml; charset=utf-8",
  mediaType: "xml",
  serializer: xmlSerializer
};
const getSimpleOperationSpec: coreClient.OperationSpec = {
  path: "/xml/simple",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Slideshow
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  isXML: true,
  serializer: xmlSerializer
};
const putSimpleOperationSpec: coreClient.OperationSpec = {
  path: "/xml/simple",
  httpMethod: "PUT",
  responses: {
    201: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.slideshow,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept1],
  isXML: true,
  contentType: "application/xml; charset=utf-8",
  mediaType: "xml",
  serializer: xmlSerializer
};
const getWrappedListsOperationSpec: coreClient.OperationSpec = {
  path: "/xml/wrapped-lists",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AppleBarrel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  isXML: true,
  serializer: xmlSerializer
};
const putWrappedListsOperationSpec: coreClient.OperationSpec = {
  path: "/xml/wrapped-lists",
  httpMethod: "PUT",
  responses: {
    201: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.wrappedLists,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept1],
  isXML: true,
  contentType: "application/xml; charset=utf-8",
  mediaType: "xml",
  serializer: xmlSerializer
};
const getHeadersOperationSpec: coreClient.OperationSpec = {
  path: "/xml/headers",
  httpMethod: "GET",
  responses: {
    200: {
      headersMapper: Mappers.XmlGetHeaders
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
const getEmptyListOperationSpec: coreClient.OperationSpec = {
  path: "/xml/empty-list",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Slideshow
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  isXML: true,
  serializer: xmlSerializer
};
const putEmptyListOperationSpec: coreClient.OperationSpec = {
  path: "/xml/empty-list",
  httpMethod: "PUT",
  responses: { 201: {} },
  requestBody: Parameters.slideshow,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  isXML: true,
  contentType: "application/xml; charset=utf-8",
  mediaType: "xml",
  serializer: xmlSerializer
};
const getEmptyWrappedListsOperationSpec: coreClient.OperationSpec = {
  path: "/xml/empty-wrapped-lists",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AppleBarrel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  isXML: true,
  serializer: xmlSerializer
};
const putEmptyWrappedListsOperationSpec: coreClient.OperationSpec = {
  path: "/xml/empty-wrapped-lists",
  httpMethod: "PUT",
  responses: { 201: {} },
  requestBody: Parameters.appleBarrel,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  isXML: true,
  contentType: "application/xml; charset=utf-8",
  mediaType: "xml",
  serializer: xmlSerializer
};
const getRootListOperationSpec: coreClient.OperationSpec = {
  path: "/xml/root-list",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "Banana" } }
        },
        serializedName: "ArrayOfBanana",
        xmlName: "bananas",
        xmlElementName: "banana"
      }
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  isXML: true,
  serializer: xmlSerializer
};
const putRootListOperationSpec: coreClient.OperationSpec = {
  path: "/xml/root-list",
  httpMethod: "PUT",
  responses: { 201: {} },
  requestBody: Parameters.bananas,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  isXML: true,
  contentType: "application/xml; charset=utf-8",
  mediaType: "xml",
  serializer: xmlSerializer
};
const getRootListSingleItemOperationSpec: coreClient.OperationSpec = {
  path: "/xml/root-list-single-item",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "Banana" } }
        },
        serializedName: "ArrayOfBanana",
        xmlName: "bananas",
        xmlElementName: "banana"
      }
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  isXML: true,
  serializer: xmlSerializer
};
const putRootListSingleItemOperationSpec: coreClient.OperationSpec = {
  path: "/xml/root-list-single-item",
  httpMethod: "PUT",
  responses: { 201: {} },
  requestBody: Parameters.bananas,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  isXML: true,
  contentType: "application/xml; charset=utf-8",
  mediaType: "xml",
  serializer: xmlSerializer
};
const getEmptyRootListOperationSpec: coreClient.OperationSpec = {
  path: "/xml/empty-root-list",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "Banana" } }
        },
        serializedName: "ArrayOfBanana",
        xmlName: "bananas",
        xmlElementName: "banana"
      }
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  isXML: true,
  serializer: xmlSerializer
};
const putEmptyRootListOperationSpec: coreClient.OperationSpec = {
  path: "/xml/empty-root-list",
  httpMethod: "PUT",
  responses: { 201: {} },
  requestBody: Parameters.bananas,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  isXML: true,
  contentType: "application/xml; charset=utf-8",
  mediaType: "xml",
  serializer: xmlSerializer
};
const getEmptyChildElementOperationSpec: coreClient.OperationSpec = {
  path: "/xml/empty-child-element",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Banana
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  isXML: true,
  serializer: xmlSerializer
};
const putEmptyChildElementOperationSpec: coreClient.OperationSpec = {
  path: "/xml/empty-child-element",
  httpMethod: "PUT",
  responses: { 201: {} },
  requestBody: Parameters.banana,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  isXML: true,
  contentType: "application/xml; charset=utf-8",
  mediaType: "xml",
  serializer: xmlSerializer
};
const listContainersOperationSpec: coreClient.OperationSpec = {
  path: "/xml/",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListContainersResponse
    }
  },
  queryParameters: [Parameters.comp],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  isXML: true,
  serializer: xmlSerializer
};
const getServicePropertiesOperationSpec: coreClient.OperationSpec = {
  path: "/xml/",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.StorageServiceProperties
    }
  },
  queryParameters: [Parameters.comp1, Parameters.restype],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  isXML: true,
  serializer: xmlSerializer
};
const putServicePropertiesOperationSpec: coreClient.OperationSpec = {
  path: "/xml/",
  httpMethod: "PUT",
  responses: { 201: {} },
  requestBody: Parameters.properties,
  queryParameters: [Parameters.comp1, Parameters.restype],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  isXML: true,
  contentType: "application/xml; charset=utf-8",
  mediaType: "xml",
  serializer: xmlSerializer
};
const getAclsOperationSpec: coreClient.OperationSpec = {
  path: "/xml/mycontainer",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: {
            type: { name: "Composite", className: "SignedIdentifier" }
          }
        },
        serializedName: "SignedIdentifiers",
        xmlName: "SignedIdentifiers",
        xmlIsWrapped: true,
        xmlElementName: "SignedIdentifier"
      }
    }
  },
  queryParameters: [Parameters.comp2, Parameters.restype1],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  isXML: true,
  serializer: xmlSerializer
};
const putAclsOperationSpec: coreClient.OperationSpec = {
  path: "/xml/mycontainer",
  httpMethod: "PUT",
  responses: { 201: {} },
  requestBody: Parameters.properties1,
  queryParameters: [Parameters.comp2, Parameters.restype1],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  isXML: true,
  contentType: "application/xml; charset=utf-8",
  mediaType: "xml",
  serializer: xmlSerializer
};
const listBlobsOperationSpec: coreClient.OperationSpec = {
  path: "/xml/mycontainer",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListBlobsResponse
    }
  },
  queryParameters: [Parameters.comp, Parameters.restype1],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  isXML: true,
  serializer: xmlSerializer
};
const jsonInputOperationSpec: coreClient.OperationSpec = {
  path: "/xml/jsoninput",
  httpMethod: "PUT",
  responses: { 200: {} },
  requestBody: Parameters.properties2,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType1],
  mediaType: "json",
  serializer
};
const jsonOutputOperationSpec: coreClient.OperationSpec = {
  path: "/xml/jsonoutput",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JsonOutput
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept2],
  serializer
};
const getXMsTextOperationSpec: coreClient.OperationSpec = {
  path: "/xml/x-ms-text",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ObjectWithXMsTextProperty
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  isXML: true,
  serializer: xmlSerializer
};
const getBytesOperationSpec: coreClient.OperationSpec = {
  path: "/xml/bytes",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ModelWithByteProperty
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  isXML: true,
  serializer: xmlSerializer
};
const putBinaryOperationSpec: coreClient.OperationSpec = {
  path: "/xml/bytes",
  httpMethod: "PUT",
  responses: {
    201: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.slideshow1,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept1],
  isXML: true,
  contentType: "application/xml; charset=utf-8",
  mediaType: "xml",
  serializer: xmlSerializer
};
const getUriOperationSpec: coreClient.OperationSpec = {
  path: "/xml/url",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ModelWithUrlProperty
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  isXML: true,
  serializer: xmlSerializer
};
const putUriOperationSpec: coreClient.OperationSpec = {
  path: "/xml/url",
  httpMethod: "PUT",
  responses: {
    201: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.model2,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept1],
  isXML: true,
  contentType: "application/xml; charset=utf-8",
  mediaType: "xml",
  serializer: xmlSerializer
};
