// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import {
  PathsEkfzteAuthoringAnalyzeTextProjectsProjectnamePatchRequestbodyContentApplicationMergePatchJsonSchema,
  TrainingJobOptions,
  SwapDeploymentsOptions
} from "./models";

export interface ProjectsListPathParameters {
  /** The endpoint to use. */
  Endpoint: string;
}

export interface ProjectsListQueryParamProperties {
  top?: number;
  skip?: number;
  maxpagesize?: number;
}

export interface ProjectsListQueryParam {
  queryParameters?: ProjectsListQueryParamProperties;
}

export interface ProjectsListPathParam {
  pathParameters: ProjectsListPathParameters;
}

export type ProjectsListParameters = ProjectsListQueryParam &
  ProjectsListPathParam &
  RequestParameters;

export interface ProjectsCreateOrUpdatePathParameters {
  /** The endpoint to use. */
  Endpoint: string;
}

export interface ProjectsCreateOrUpdateBodyParam {
  body?: PathsEkfzteAuthoringAnalyzeTextProjectsProjectnamePatchRequestbodyContentApplicationMergePatchJsonSchema;
}

export interface ProjectsCreateOrUpdatePathParam {
  pathParameters: ProjectsCreateOrUpdatePathParameters;
}

export interface ProjectsCreateOrUpdateMediaTypesParam {
  /** Request content type */
  contentType?: "application/merge-patch+json";
}

export type ProjectsCreateOrUpdateParameters = ProjectsCreateOrUpdatePathParam &
  ProjectsCreateOrUpdateMediaTypesParam &
  ProjectsCreateOrUpdateBodyParam &
  RequestParameters;

export interface ProjectsGetPathParameters {
  /** The endpoint to use. */
  Endpoint: string;
}

export interface ProjectsGetPathParam {
  pathParameters: ProjectsGetPathParameters;
}

export type ProjectsGetParameters = ProjectsGetPathParam & RequestParameters;

export interface ProjectsDeletePathParameters {
  /** The endpoint to use. */
  Endpoint: string;
}

export interface ProjectsDeletePathParam {
  pathParameters: ProjectsDeletePathParameters;
}

export type ProjectsDeleteParameters = ProjectsDeletePathParam &
  RequestParameters;

export interface ProjectsExportPathParameters {
  /** The endpoint to use. */
  Endpoint: string;
}

export interface ProjectsExportQueryParamProperties {
  projectFileVersion: string;
}

export interface ProjectsExportQueryParam {
  queryParameters: ProjectsExportQueryParamProperties;
}

export interface ProjectsExportPathParam {
  pathParameters: ProjectsExportPathParameters;
}

export type ProjectsExportParameters = ProjectsExportQueryParam &
  ProjectsExportPathParam &
  RequestParameters;

export interface ProjectsImportxPathParameters {
  /** The endpoint to use. */
  Endpoint: string;
}

export interface ProjectsImportxPathParam {
  pathParameters: ProjectsImportxPathParameters;
}

export type ProjectsImportxParameters = ProjectsImportxPathParam &
  RequestParameters;

export interface ProjectsTrainPathParameters {
  /** The endpoint to use. */
  Endpoint: string;
}

export interface ProjectsTrainBodyParam {
  body: TrainingJobOptions;
}

export interface ProjectsTrainPathParam {
  pathParameters: ProjectsTrainPathParameters;
}

export interface ProjectsTrainMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type ProjectsTrainParameters = ProjectsTrainPathParam &
  ProjectsTrainMediaTypesParam &
  ProjectsTrainBodyParam &
  RequestParameters;

export interface DeploymentsListPathParameters {
  /** The endpoint to use. */
  Endpoint: string;
}

export interface DeploymentsListPathParam {
  pathParameters: DeploymentsListPathParameters;
}

export type DeploymentsListParameters = DeploymentsListPathParam &
  RequestParameters;

export interface DeploymentsGetDeploymentPathParameters {
  /** The endpoint to use. */
  Endpoint: string;
}

export interface DeploymentsGetDeploymentPathParam {
  pathParameters: DeploymentsGetDeploymentPathParameters;
}

export type DeploymentsGetDeploymentParameters = DeploymentsGetDeploymentPathParam &
  RequestParameters;

export interface DeploymentsDeployProjectPathParameters {
  /** The endpoint to use. */
  Endpoint: string;
}

export interface DeploymentsDeployProjectPathParam {
  pathParameters: DeploymentsDeployProjectPathParameters;
}

export type DeploymentsDeployProjectParameters = DeploymentsDeployProjectPathParam &
  RequestParameters;

export interface DeploymentsDeleteDeploymentPathParameters {
  /** The endpoint to use. */
  Endpoint: string;
}

export interface DeploymentsDeleteDeploymentPathParam {
  pathParameters: DeploymentsDeleteDeploymentPathParameters;
}

export type DeploymentsDeleteDeploymentParameters = DeploymentsDeleteDeploymentPathParam &
  RequestParameters;

export interface DeploymentsSwapDeploymentsPathParameters {
  /** The endpoint to use. */
  Endpoint: string;
}

export interface DeploymentsSwapDeploymentsBodyParam {
  /** The body schema of the operation. */
  body: SwapDeploymentsOptions;
}

export interface DeploymentsSwapDeploymentsPathParam {
  pathParameters: DeploymentsSwapDeploymentsPathParameters;
}

export interface DeploymentsSwapDeploymentsMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type DeploymentsSwapDeploymentsParameters = DeploymentsSwapDeploymentsPathParam &
  DeploymentsSwapDeploymentsMediaTypesParam &
  DeploymentsSwapDeploymentsBodyParam &
  RequestParameters;

export interface JobsGetDeploymentStatusPathParameters {
  /** The endpoint to use. */
  Endpoint: string;
}

export interface JobsGetDeploymentStatusPathParam {
  pathParameters: JobsGetDeploymentStatusPathParameters;
}

export type JobsGetDeploymentStatusParameters = JobsGetDeploymentStatusPathParam &
  RequestParameters;

export interface JobsGetSwapDeploymentsStatusPathParameters {
  /** The endpoint to use. */
  Endpoint: string;
}

export interface JobsGetSwapDeploymentsStatusPathParam {
  pathParameters: JobsGetSwapDeploymentsStatusPathParameters;
}

export type JobsGetSwapDeploymentsStatusParameters = JobsGetSwapDeploymentsStatusPathParam &
  RequestParameters;

export interface GlobalGetSupportedLanguagesPathParameters {
  /** The endpoint to use. */
  Endpoint: string;
}

export interface GlobalGetSupportedLanguagesQueryParamProperties {
  top?: number;
  skip?: number;
  maxpagesize?: number;
}

export interface GlobalGetSupportedLanguagesQueryParam {
  queryParameters?: GlobalGetSupportedLanguagesQueryParamProperties;
}

export interface GlobalGetSupportedLanguagesPathParam {
  pathParameters: GlobalGetSupportedLanguagesPathParameters;
}

export type GlobalGetSupportedLanguagesParameters = GlobalGetSupportedLanguagesQueryParam &
  GlobalGetSupportedLanguagesPathParam &
  RequestParameters;

export interface GlobalListTrainingConfigVersionsPathParameters {
  /** The endpoint to use. */
  Endpoint: string;
}

export interface GlobalListTrainingConfigVersionsQueryParamProperties {
  top?: number;
  skip?: number;
  maxpagesize?: number;
}

export interface GlobalListTrainingConfigVersionsQueryParam {
  queryParameters?: GlobalListTrainingConfigVersionsQueryParamProperties;
}

export interface GlobalListTrainingConfigVersionsPathParam {
  pathParameters: GlobalListTrainingConfigVersionsPathParameters;
}

export type GlobalListTrainingConfigVersionsParameters = GlobalListTrainingConfigVersionsQueryParam &
  GlobalListTrainingConfigVersionsPathParam &
  RequestParameters;
