// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import {
  PathsEkfzteAuthoringAnalyzeTextProjectsProjectnamePatchRequestbodyContentApplicationMergePatchJsonSchema,
  TrainingJobOptions,
  SwapDeploymentsOptions
} from "./models";

export interface ProjectsListQueryParamProperties {
  top?: number;
  skip?: number;
  maxpagesize?: number;
}

export interface ProjectsListQueryParam {
  queryParameters?: ProjectsListQueryParamProperties;
}

export type ProjectsListParameters = ProjectsListQueryParam & RequestParameters;

export interface ProjectsCreateOrUpdateBodyParam {
  body?: PathsEkfzteAuthoringAnalyzeTextProjectsProjectnamePatchRequestbodyContentApplicationMergePatchJsonSchema;
}

export interface ProjectsCreateOrUpdateMediaTypesParam {
  /** Request content type */
  contentType?: "application/merge-patch+json";
}

export type ProjectsCreateOrUpdateParameters = ProjectsCreateOrUpdateMediaTypesParam &
  ProjectsCreateOrUpdateBodyParam &
  RequestParameters;
export type ProjectsGetParameters = RequestParameters;
export type ProjectsDeleteParameters = RequestParameters;

export interface ProjectsExportQueryParamProperties {
  projectFileVersion: string;
}

export interface ProjectsExportQueryParam {
  queryParameters: ProjectsExportQueryParamProperties;
}

export type ProjectsExportParameters = ProjectsExportQueryParam &
  RequestParameters;
export type ProjectsImportxParameters = RequestParameters;

export interface ProjectsTrainBodyParam {
  body: TrainingJobOptions;
}

export interface ProjectsTrainMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type ProjectsTrainParameters = ProjectsTrainMediaTypesParam &
  ProjectsTrainBodyParam &
  RequestParameters;
export type DeploymentsListParameters = RequestParameters;
export type DeploymentsGetDeploymentParameters = RequestParameters;
export type DeploymentsDeployProjectParameters = RequestParameters;
export type DeploymentsDeleteDeploymentParameters = RequestParameters;

export interface DeploymentsSwapDeploymentsBodyParam {
  /** The body schema of the operation. */
  body: SwapDeploymentsOptions;
}

export interface DeploymentsSwapDeploymentsMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type DeploymentsSwapDeploymentsParameters = DeploymentsSwapDeploymentsMediaTypesParam &
  DeploymentsSwapDeploymentsBodyParam &
  RequestParameters;
export type JobsGetDeploymentStatusParameters = RequestParameters;
export type JobsGetSwapDeploymentsStatusParameters = RequestParameters;

export interface GlobalGetSupportedLanguagesQueryParamProperties {
  top?: number;
  skip?: number;
  maxpagesize?: number;
}

export interface GlobalGetSupportedLanguagesQueryParam {
  queryParameters?: GlobalGetSupportedLanguagesQueryParamProperties;
}

export type GlobalGetSupportedLanguagesParameters = GlobalGetSupportedLanguagesQueryParam &
  RequestParameters;

export interface GlobalListTrainingConfigVersionsQueryParamProperties {
  top?: number;
  skip?: number;
  maxpagesize?: number;
}

export interface GlobalListTrainingConfigVersionsQueryParam {
  queryParameters?: GlobalListTrainingConfigVersionsQueryParamProperties;
}

export type GlobalListTrainingConfigVersionsParameters = GlobalListTrainingConfigVersionsQueryParam &
  RequestParameters;
