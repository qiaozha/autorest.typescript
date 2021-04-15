/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

export const RootWithRefAndNoMeta: coreHttp.CompositeMapper = {
  serializedName: "RootWithRefAndNoMeta",
  type: {
    name: "Composite",
    className: "RootWithRefAndNoMeta",
    modelProperties: {
      refToModel: {
        serializedName: "RefToModel",
        xmlName: "RefToModel",
        type: {
          name: "Composite",
          className: "ComplexTypeNoMeta"
        }
      },
      something: {
        serializedName: "Something",
        xmlName: "Something",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ComplexTypeNoMeta: coreHttp.CompositeMapper = {
  serializedName: "ComplexTypeNoMeta",
  type: {
    name: "Composite",
    className: "ComplexTypeNoMeta",
    modelProperties: {
      id: {
        serializedName: "ID",
        xmlName: "ID",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RootWithRefAndMeta: coreHttp.CompositeMapper = {
  serializedName: "RootWithRefAndMeta",
  type: {
    name: "Composite",
    className: "RootWithRefAndMeta",
    modelProperties: {
      refToModel: {
        serializedName: "RefToModel",
        xmlName: "XMLComplexTypeWithMeta",
        type: {
          name: "Composite",
          className: "ComplexTypeWithMeta"
        }
      },
      something: {
        serializedName: "Something",
        xmlName: "Something",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ComplexTypeWithMeta: coreHttp.CompositeMapper = {
  serializedName: "ComplexTypeWithMeta",
  xmlName: "XMLComplexTypeWithMeta",
  type: {
    name: "Composite",
    className: "ComplexTypeWithMeta",
    modelProperties: {
      id: {
        serializedName: "ID",
        xmlName: "ID",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Slideshow: coreHttp.CompositeMapper = {
  serializedName: "Slideshow",
  xmlName: "slideshow",
  type: {
    name: "Composite",
    className: "Slideshow",
    modelProperties: {
      title: {
        serializedName: "title",
        xmlName: "title",
        xmlIsAttribute: true,
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        xmlIsAttribute: true,
        type: {
          name: "String"
        }
      },
      author: {
        serializedName: "author",
        xmlName: "author",
        xmlIsAttribute: true,
        type: {
          name: "String"
        }
      },
      slides: {
        serializedName: "slides",
        xmlName: "slides",
        xmlElementName: "slide",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Slide"
            }
          }
        }
      }
    }
  }
};

export const Slide: coreHttp.CompositeMapper = {
  serializedName: "Slide",
  xmlName: "slide",
  type: {
    name: "Composite",
    className: "Slide",
    modelProperties: {
      type: {
        serializedName: "type",
        xmlName: "type",
        xmlIsAttribute: true,
        type: {
          name: "String"
        }
      },
      title: {
        serializedName: "title",
        xmlName: "title",
        type: {
          name: "String"
        }
      },
      items: {
        serializedName: "items",
        xmlName: "items",
        xmlElementName: "item",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const ErrorModel: coreHttp.CompositeMapper = {
  serializedName: "Error",
  type: {
    name: "Composite",
    className: "ErrorModel",
    modelProperties: {
      status: {
        serializedName: "status",
        xmlName: "status",
        type: {
          name: "Number"
        }
      },
      message: {
        serializedName: "message",
        xmlName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AppleBarrel: coreHttp.CompositeMapper = {
  serializedName: "AppleBarrel",
  type: {
    name: "Composite",
    className: "AppleBarrel",
    modelProperties: {
      goodApples: {
        serializedName: "GoodApples",
        xmlName: "GoodApples",
        xmlIsWrapped: true,
        xmlElementName: "Apple",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      badApples: {
        serializedName: "BadApples",
        xmlName: "BadApples",
        xmlIsWrapped: true,
        xmlElementName: "Apple",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const Banana: coreHttp.CompositeMapper = {
  serializedName: "Banana",
  xmlName: "banana",
  type: {
    name: "Composite",
    className: "Banana",
    modelProperties: {
      name: {
        serializedName: "name",
        xmlName: "name",
        type: {
          name: "String"
        }
      },
      flavor: {
        serializedName: "flavor",
        xmlName: "flavor",
        type: {
          name: "String"
        }
      },
      expiration: {
        serializedName: "expiration",
        xmlName: "expiration",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const ListContainersResponse: coreHttp.CompositeMapper = {
  serializedName: "ListContainersResponse",
  xmlName: "EnumerationResults",
  type: {
    name: "Composite",
    className: "ListContainersResponse",
    modelProperties: {
      serviceEndpoint: {
        serializedName: "ServiceEndpoint",
        required: true,
        xmlName: "ServiceEndpoint",
        xmlIsAttribute: true,
        type: {
          name: "String"
        }
      },
      prefix: {
        serializedName: "Prefix",
        required: true,
        xmlName: "Prefix",
        type: {
          name: "String"
        }
      },
      marker: {
        serializedName: "Marker",
        xmlName: "Marker",
        type: {
          name: "String"
        }
      },
      maxResults: {
        serializedName: "MaxResults",
        required: true,
        xmlName: "MaxResults",
        type: {
          name: "Number"
        }
      },
      containers: {
        serializedName: "Containers",
        xmlName: "Containers",
        xmlIsWrapped: true,
        xmlElementName: "Container",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Container"
            }
          }
        }
      },
      nextMarker: {
        serializedName: "NextMarker",
        required: true,
        xmlName: "NextMarker",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Container: coreHttp.CompositeMapper = {
  serializedName: "Container",
  type: {
    name: "Composite",
    className: "Container",
    modelProperties: {
      name: {
        serializedName: "Name",
        required: true,
        xmlName: "Name",
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "Properties",
        xmlName: "Properties",
        type: {
          name: "Composite",
          className: "ContainerProperties"
        }
      },
      metadata: {
        serializedName: "Metadata",
        xmlName: "Metadata",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      }
    }
  }
};

export const ContainerProperties: coreHttp.CompositeMapper = {
  serializedName: "ContainerProperties",
  type: {
    name: "Composite",
    className: "ContainerProperties",
    modelProperties: {
      lastModified: {
        serializedName: "Last-Modified",
        required: true,
        xmlName: "Last-Modified",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      etag: {
        serializedName: "Etag",
        required: true,
        xmlName: "Etag",
        type: {
          name: "String"
        }
      },
      leaseStatus: {
        serializedName: "LeaseStatus",
        xmlName: "LeaseStatus",
        type: {
          name: "Enum",
          allowedValues: ["locked", "unlocked"]
        }
      },
      leaseState: {
        serializedName: "LeaseState",
        xmlName: "LeaseState",
        type: {
          name: "Enum",
          allowedValues: [
            "available",
            "leased",
            "expired",
            "breaking",
            "broken"
          ]
        }
      },
      leaseDuration: {
        serializedName: "LeaseDuration",
        xmlName: "LeaseDuration",
        type: {
          name: "Enum",
          allowedValues: ["infinite", "fixed"]
        }
      },
      publicAccess: {
        serializedName: "PublicAccess",
        xmlName: "PublicAccess",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const StorageServiceProperties: coreHttp.CompositeMapper = {
  serializedName: "StorageServiceProperties",
  type: {
    name: "Composite",
    className: "StorageServiceProperties",
    modelProperties: {
      logging: {
        serializedName: "Logging",
        xmlName: "Logging",
        type: {
          name: "Composite",
          className: "Logging"
        }
      },
      hourMetrics: {
        serializedName: "HourMetrics",
        xmlName: "HourMetrics",
        type: {
          name: "Composite",
          className: "Metrics"
        }
      },
      minuteMetrics: {
        serializedName: "MinuteMetrics",
        xmlName: "MinuteMetrics",
        type: {
          name: "Composite",
          className: "Metrics"
        }
      },
      cors: {
        serializedName: "Cors",
        xmlName: "Cors",
        xmlIsWrapped: true,
        xmlElementName: "CorsRule",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CorsRule"
            }
          }
        }
      },
      defaultServiceVersion: {
        serializedName: "DefaultServiceVersion",
        xmlName: "DefaultServiceVersion",
        type: {
          name: "String"
        }
      },
      deleteRetentionPolicy: {
        serializedName: "DeleteRetentionPolicy",
        xmlName: "DeleteRetentionPolicy",
        type: {
          name: "Composite",
          className: "RetentionPolicy"
        }
      }
    }
  }
};

export const Logging: coreHttp.CompositeMapper = {
  serializedName: "Logging",
  type: {
    name: "Composite",
    className: "Logging",
    modelProperties: {
      version: {
        serializedName: "Version",
        required: true,
        xmlName: "Version",
        type: {
          name: "String"
        }
      },
      delete: {
        serializedName: "Delete",
        required: true,
        xmlName: "Delete",
        type: {
          name: "Boolean"
        }
      },
      read: {
        serializedName: "Read",
        required: true,
        xmlName: "Read",
        type: {
          name: "Boolean"
        }
      },
      write: {
        serializedName: "Write",
        required: true,
        xmlName: "Write",
        type: {
          name: "Boolean"
        }
      },
      retentionPolicy: {
        serializedName: "RetentionPolicy",
        xmlName: "RetentionPolicy",
        type: {
          name: "Composite",
          className: "RetentionPolicy"
        }
      }
    }
  }
};

export const RetentionPolicy: coreHttp.CompositeMapper = {
  serializedName: "RetentionPolicy",
  type: {
    name: "Composite",
    className: "RetentionPolicy",
    modelProperties: {
      enabled: {
        serializedName: "Enabled",
        required: true,
        xmlName: "Enabled",
        type: {
          name: "Boolean"
        }
      },
      days: {
        constraints: {
          InclusiveMinimum: 1
        },
        serializedName: "Days",
        xmlName: "Days",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const Metrics: coreHttp.CompositeMapper = {
  serializedName: "Metrics",
  type: {
    name: "Composite",
    className: "Metrics",
    modelProperties: {
      version: {
        serializedName: "Version",
        xmlName: "Version",
        type: {
          name: "String"
        }
      },
      enabled: {
        serializedName: "Enabled",
        required: true,
        xmlName: "Enabled",
        type: {
          name: "Boolean"
        }
      },
      includeAPIs: {
        serializedName: "IncludeAPIs",
        xmlName: "IncludeAPIs",
        type: {
          name: "Boolean"
        }
      },
      retentionPolicy: {
        serializedName: "RetentionPolicy",
        xmlName: "RetentionPolicy",
        type: {
          name: "Composite",
          className: "RetentionPolicy"
        }
      }
    }
  }
};

export const CorsRule: coreHttp.CompositeMapper = {
  serializedName: "CorsRule",
  xmlName: "CorsRule",
  type: {
    name: "Composite",
    className: "CorsRule",
    modelProperties: {
      allowedOrigins: {
        serializedName: "AllowedOrigins",
        required: true,
        xmlName: "AllowedOrigins",
        type: {
          name: "String"
        }
      },
      allowedMethods: {
        serializedName: "AllowedMethods",
        required: true,
        xmlName: "AllowedMethods",
        type: {
          name: "String"
        }
      },
      allowedHeaders: {
        serializedName: "AllowedHeaders",
        required: true,
        xmlName: "AllowedHeaders",
        type: {
          name: "String"
        }
      },
      exposedHeaders: {
        serializedName: "ExposedHeaders",
        required: true,
        xmlName: "ExposedHeaders",
        type: {
          name: "String"
        }
      },
      maxAgeInSeconds: {
        constraints: {
          InclusiveMinimum: 0
        },
        serializedName: "MaxAgeInSeconds",
        required: true,
        xmlName: "MaxAgeInSeconds",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const SignedIdentifier: coreHttp.CompositeMapper = {
  serializedName: "SignedIdentifier",
  xmlName: "SignedIdentifier",
  type: {
    name: "Composite",
    className: "SignedIdentifier",
    modelProperties: {
      id: {
        serializedName: "Id",
        required: true,
        xmlName: "Id",
        type: {
          name: "String"
        }
      },
      accessPolicy: {
        serializedName: "AccessPolicy",
        xmlName: "AccessPolicy",
        type: {
          name: "Composite",
          className: "AccessPolicy"
        }
      }
    }
  }
};

export const AccessPolicy: coreHttp.CompositeMapper = {
  serializedName: "AccessPolicy",
  type: {
    name: "Composite",
    className: "AccessPolicy",
    modelProperties: {
      start: {
        serializedName: "Start",
        required: true,
        xmlName: "Start",
        type: {
          name: "DateTime"
        }
      },
      expiry: {
        serializedName: "Expiry",
        required: true,
        xmlName: "Expiry",
        type: {
          name: "DateTime"
        }
      },
      permission: {
        serializedName: "Permission",
        required: true,
        xmlName: "Permission",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ListBlobsResponse: coreHttp.CompositeMapper = {
  serializedName: "ListBlobsResponse",
  xmlName: "EnumerationResults",
  type: {
    name: "Composite",
    className: "ListBlobsResponse",
    modelProperties: {
      serviceEndpoint: {
        serializedName: "ServiceEndpoint",
        xmlName: "ServiceEndpoint",
        xmlIsAttribute: true,
        type: {
          name: "String"
        }
      },
      containerName: {
        serializedName: "ContainerName",
        required: true,
        xmlName: "ContainerName",
        xmlIsAttribute: true,
        type: {
          name: "String"
        }
      },
      prefix: {
        serializedName: "Prefix",
        required: true,
        xmlName: "Prefix",
        type: {
          name: "String"
        }
      },
      marker: {
        serializedName: "Marker",
        required: true,
        xmlName: "Marker",
        type: {
          name: "String"
        }
      },
      maxResults: {
        serializedName: "MaxResults",
        required: true,
        xmlName: "MaxResults",
        type: {
          name: "Number"
        }
      },
      delimiter: {
        serializedName: "Delimiter",
        required: true,
        xmlName: "Delimiter",
        type: {
          name: "String"
        }
      },
      blobs: {
        serializedName: "Blobs",
        xmlName: "Blobs",
        type: {
          name: "Composite",
          className: "Blobs"
        }
      },
      nextMarker: {
        serializedName: "NextMarker",
        required: true,
        xmlName: "NextMarker",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Blobs: coreHttp.CompositeMapper = {
  serializedName: "Blobs",
  type: {
    name: "Composite",
    className: "Blobs",
    modelProperties: {
      blobPrefix: {
        serializedName: "BlobPrefix",
        xmlName: "BlobPrefix",
        xmlElementName: "BlobPrefix",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "BlobPrefix"
            }
          }
        }
      },
      blob: {
        serializedName: "Blob",
        xmlName: "Blob",
        xmlElementName: "Blob",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Blob"
            }
          }
        }
      }
    }
  }
};

export const BlobPrefix: coreHttp.CompositeMapper = {
  serializedName: "BlobPrefix",
  type: {
    name: "Composite",
    className: "BlobPrefix",
    modelProperties: {
      name: {
        serializedName: "Name",
        required: true,
        xmlName: "Name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Blob: coreHttp.CompositeMapper = {
  serializedName: "Blob",
  xmlName: "Blob",
  type: {
    name: "Composite",
    className: "Blob",
    modelProperties: {
      name: {
        serializedName: "Name",
        required: true,
        xmlName: "Name",
        type: {
          name: "String"
        }
      },
      deleted: {
        serializedName: "Deleted",
        required: true,
        xmlName: "Deleted",
        type: {
          name: "Boolean"
        }
      },
      snapshot: {
        serializedName: "Snapshot",
        required: true,
        xmlName: "Snapshot",
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "Properties",
        xmlName: "Properties",
        type: {
          name: "Composite",
          className: "BlobProperties"
        }
      },
      metadata: {
        serializedName: "Metadata",
        xmlName: "Metadata",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      }
    }
  }
};

export const BlobProperties: coreHttp.CompositeMapper = {
  serializedName: "BlobProperties",
  type: {
    name: "Composite",
    className: "BlobProperties",
    modelProperties: {
      lastModified: {
        serializedName: "Last-Modified",
        required: true,
        xmlName: "Last-Modified",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      etag: {
        serializedName: "Etag",
        required: true,
        xmlName: "Etag",
        type: {
          name: "String"
        }
      },
      contentLength: {
        serializedName: "Content-Length",
        xmlName: "Content-Length",
        type: {
          name: "Number"
        }
      },
      contentType: {
        serializedName: "Content-Type",
        xmlName: "Content-Type",
        type: {
          name: "String"
        }
      },
      contentEncoding: {
        serializedName: "Content-Encoding",
        xmlName: "Content-Encoding",
        type: {
          name: "String"
        }
      },
      contentLanguage: {
        serializedName: "Content-Language",
        xmlName: "Content-Language",
        type: {
          name: "String"
        }
      },
      contentMD5: {
        serializedName: "Content-MD5",
        xmlName: "Content-MD5",
        type: {
          name: "String"
        }
      },
      contentDisposition: {
        serializedName: "Content-Disposition",
        xmlName: "Content-Disposition",
        type: {
          name: "String"
        }
      },
      cacheControl: {
        serializedName: "Cache-Control",
        xmlName: "Cache-Control",
        type: {
          name: "String"
        }
      },
      blobSequenceNumber: {
        serializedName: "x-ms-blob-sequence-number",
        xmlName: "x-ms-blob-sequence-number",
        type: {
          name: "Number"
        }
      },
      blobType: {
        serializedName: "BlobType",
        xmlName: "BlobType",
        type: {
          name: "Enum",
          allowedValues: ["BlockBlob", "PageBlob", "AppendBlob"]
        }
      },
      leaseStatus: {
        serializedName: "LeaseStatus",
        xmlName: "LeaseStatus",
        type: {
          name: "Enum",
          allowedValues: ["locked", "unlocked"]
        }
      },
      leaseState: {
        serializedName: "LeaseState",
        xmlName: "LeaseState",
        type: {
          name: "Enum",
          allowedValues: [
            "available",
            "leased",
            "expired",
            "breaking",
            "broken"
          ]
        }
      },
      leaseDuration: {
        serializedName: "LeaseDuration",
        xmlName: "LeaseDuration",
        type: {
          name: "Enum",
          allowedValues: ["infinite", "fixed"]
        }
      },
      copyId: {
        serializedName: "CopyId",
        xmlName: "CopyId",
        type: {
          name: "String"
        }
      },
      copyStatus: {
        serializedName: "CopyStatus",
        xmlName: "CopyStatus",
        type: {
          name: "Enum",
          allowedValues: ["pending", "success", "aborted", "failed"]
        }
      },
      copySource: {
        serializedName: "CopySource",
        xmlName: "CopySource",
        type: {
          name: "String"
        }
      },
      copyProgress: {
        serializedName: "CopyProgress",
        xmlName: "CopyProgress",
        type: {
          name: "String"
        }
      },
      copyCompletionTime: {
        serializedName: "CopyCompletionTime",
        xmlName: "CopyCompletionTime",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      copyStatusDescription: {
        serializedName: "CopyStatusDescription",
        xmlName: "CopyStatusDescription",
        type: {
          name: "String"
        }
      },
      serverEncrypted: {
        serializedName: "ServerEncrypted",
        xmlName: "ServerEncrypted",
        type: {
          name: "Boolean"
        }
      },
      incrementalCopy: {
        serializedName: "IncrementalCopy",
        xmlName: "IncrementalCopy",
        type: {
          name: "Boolean"
        }
      },
      destinationSnapshot: {
        serializedName: "DestinationSnapshot",
        xmlName: "DestinationSnapshot",
        type: {
          name: "String"
        }
      },
      deletedTime: {
        serializedName: "DeletedTime",
        xmlName: "DeletedTime",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      remainingRetentionDays: {
        serializedName: "RemainingRetentionDays",
        xmlName: "RemainingRetentionDays",
        type: {
          name: "Number"
        }
      },
      accessTier: {
        serializedName: "AccessTier",
        xmlName: "AccessTier",
        type: {
          name: "String"
        }
      },
      accessTierInferred: {
        serializedName: "AccessTierInferred",
        xmlName: "AccessTierInferred",
        type: {
          name: "Boolean"
        }
      },
      archiveStatus: {
        serializedName: "ArchiveStatus",
        xmlName: "ArchiveStatus",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const JsonInput: coreHttp.CompositeMapper = {
  serializedName: "JsonInput",
  type: {
    name: "Composite",
    className: "JsonInput",
    modelProperties: {
      id: {
        serializedName: "id",
        xmlName: "id",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const JsonOutput: coreHttp.CompositeMapper = {
  serializedName: "JsonOutput",
  type: {
    name: "Composite",
    className: "JsonOutput",
    modelProperties: {
      id: {
        serializedName: "id",
        xmlName: "id",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ObjectWithXMsTextProperty: coreHttp.CompositeMapper = {
  serializedName: "ObjectWithXMsTextProperty",
  xmlName: "Data",
  type: {
    name: "Composite",
    className: "ObjectWithXMsTextProperty",
    modelProperties: {
      language: {
        serializedName: "language",
        xmlName: "language",
        xmlIsAttribute: true,
        type: {
          name: "String"
        }
      },
      content: {
        serializedName: "content",
        xmlName: "content",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ModelWithByteProperty: coreHttp.CompositeMapper = {
  serializedName: "ModelWithByteProperty",
  type: {
    name: "Composite",
    className: "ModelWithByteProperty",
    modelProperties: {
      bytes: {
        serializedName: "Bytes",
        xmlName: "Bytes",
        type: {
          name: "ByteArray"
        }
      }
    }
  }
};

export const ModelWithUrlProperty: coreHttp.CompositeMapper = {
  serializedName: "ModelWithUrlProperty",
  type: {
    name: "Composite",
    className: "ModelWithUrlProperty",
    modelProperties: {
      url: {
        serializedName: "Url",
        xmlName: "Url",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const XmlGetHeadersHeaders: coreHttp.CompositeMapper = {
  serializedName: "Xml_getHeadersHeaders",
  type: {
    name: "Composite",
    className: "XmlGetHeadersHeaders",
    modelProperties: {
      customHeader: {
        serializedName: "custom-header",
        xmlName: "custom-header",
        type: {
          name: "String"
        }
      }
    }
  }
};
