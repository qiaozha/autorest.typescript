// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export type Methods = {
  [key: string]: [OperationMethod];
};

export interface ResponseTypes {
  success: string[];
  error: string[];
}

export interface OperationMethod {
  optionsName: string;
  description: string;
  hasOptionalOptions: boolean;
  returnType: string;
  successStatus: string[];
  responseTypes: ResponseTypes;
  operationName: string;
}
export interface PathMetadata {
  name: string;
  pathParameters: PathParameter[];
  methods: Methods;
  annotations?: OperationAnnotations;
  operationGroupName: string;
  description: string;
}

export type Paths = Record<string, PathMetadata>;

export type PathParameter = {
  name: string;
  type: string;
  description?: string;
};

export interface OperationAnnotations {
  isLongRunning?: boolean;
  isPageable?: boolean;
}

export interface RLCOptions {
  includeShortcuts?: boolean;
  multiClient?: boolean;
  batch?: any[];
  packageDetails?: PackageDetails,
  addCredentials?: boolean,
  credentialScopes?: string[],
  credentialKeyHeaderName?: string;
  endpoint?: string;
  endpointParameterName?: string;
}

export interface RLCModel {
  libraryName: string;
  srcPath: string;
  paths: Paths;
  options?: RLCOptions;
  schemas: Schema[];
  apiVersionParam?: Parameter[];
  parameters?: OperationParameter[];
  responses?: OperationResponse[];
  importSet?: Map<ImportKind, Set<string>>;
}

export enum ImportKind {
  ResponseOutput,
  ParameterInput
}
export interface File {
  path: string,
  content: string
}

export enum SchemaContext {
  /** Schema is used as an input to an operation. */
  Input = "input",
  /** Schema is used as an output from an operation. */
  Output = "output",
  /** Schema is used as an exception from an operation. */
  Exception = "exception"
}

export interface Schema {
  name: string;
  type: string;
  typeName?: string;
  outputTypeName?: string;
  description?: string;
  required?: boolean;
  default?: any;
  readOnly?: boolean;
  usage?: SchemaContext[];
}

export interface ObjectSchema extends Schema {
  properties?: Record<string, Schema>;
  discriminatorValue?: string;
  discriminator?: Schema;
  isPolyParent?: boolean;
  children?: {
    all?: ObjectSchema[];
    immediate?: ObjectSchema[];
  };
  parents?: {
    all?: ObjectSchema[]
    immediate?: ObjectSchema[];
  }
}

export interface Property extends Schema {

}

export interface Parameter extends Schema {

}

export interface PackageDetails {
  name: string;
  scopeName?: string;
  nameWithoutScope: string;
  description?: string;
  version: string;
}
export interface OperationParameter {
  operationName: string;
  parameters: ParameterMetadata[];
}
export interface ParameterMetadata {
  type: "query" | "path" | "header" | "body";
  name: string;
  param: Schema;
}

export interface OperationResponse {
  operationName: string;
  responses: ResponseMetadata[];
}
export interface ResponseMetadata {
  statusCode: string;
  description?: string;
  headers?: HeaderMetadata[];
  body?: Schema;
}

export type HeaderMetadata = Schema;
