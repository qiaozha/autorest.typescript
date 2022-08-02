// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface Product {
  properties?: ProductProperties;
}

export interface ProductProperties {
  provisioningState?: string;
  provisioningStateValues?:
    | "Succeeded"
    | "Failed"
    | "canceled"
    | "Accepted"
    | "Creating"
    | "Created"
    | "Updating"
    | "Updated"
    | "Deleting"
    | "Deleted"
    | "OK";
}

export interface Resource {
  /** Resource Id */
  id?: string;
  /** Resource Type */
  type?: string;
  /** Dictionary of <string> */
  tags?: { [propertyName: string]: string };
  /** Resource Location */
  location?: string;
  /** Resource Name */
  name?: string;
}

export interface Sku {
  name?: string;
  id?: string;
}

export interface SubProduct {
  properties?: SubProductProperties;
}

export interface SubProductProperties {
  provisioningState?: string;
  provisioningStateValues?:
    | "Succeeded"
    | "Failed"
    | "canceled"
    | "Accepted"
    | "Creating"
    | "Created"
    | "Updating"
    | "Updated"
    | "Deleting"
    | "Deleted"
    | "OK";
}

export interface SubResource {
  /** Sub Resource Id */
  id?: string;
}
