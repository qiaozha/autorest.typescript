// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse } from "@azure-rest/core-client";
import {
  PathsT5N5IkAuthoringAnalyzeTextProjectsGetResponses200ContentApplicationJsonSchemaOutput,
  AzureCoreFoundationsErrorResponseOutput,
  PathsPbd2VdAuthoringAnalyzeTextProjectsProjectnamePatchResponses200ContentApplicationJsonSchemaOutput,
  Paths1Aqv1ZlAuthoringAnalyzeTextProjectsProjectnamePatchResponses201ContentApplicationJsonSchemaOutput,
  Paths9B3KfyAuthoringAnalyzeTextProjectsProjectnameGetResponses200ContentApplicationJsonSchemaOutput,
  PathsB2Ql7RAuthoringAnalyzeTextProjectsProjectnameDeleteResponses202ContentApplicationJsonSchemaOutput,
  Paths163P6AaAuthoringAnalyzeTextProjectsProjectnameDeploymentsGetResponses200ContentApplicationJsonSchemaOutput,
  Paths5VjuiiAuthoringAnalyzeTextProjectsProjectnameDeploymentsDeploymentnameGetResponses200ContentApplicationJsonSchemaOutput,
  Paths1Nlca2YAuthoringAnalyzeTextProjectsProjectnameDeploymentsDeploymentnamePutResponses200ContentApplicationJsonSchemaOutput,
  Paths140OfanAuthoringAnalyzeTextProjectsProjectnameDeploymentsDeploymentnamePutResponses201ContentApplicationJsonSchemaOutput,
  Paths1R873G1AuthoringAnalyzeTextProjectsProjectnameDeploymentsDeploymentnameDeleteResponses202ContentApplicationJsonSchemaOutput,
  Paths9Co3TzAuthoringAnalyzeTextProjectsProjectnameDeploymentsDeploymentnameJobsJobidGetResponses200ContentApplicationJsonSchemaOutput,
  PathsY1DwxgAuthoringAnalyzeTextProjectsProjectnameDeploymentsDeploymentnameSwapJobsJobidGetResponses200ContentApplicationJsonSchemaOutput,
  PagedSupportedLanguageOutput,
  PagedTrainingConfigVersionOutput
} from "./outputModels";

/** Lists the existing projects. */
export interface ProjectsList200Response extends HttpResponse {
  status: "200";
  body: PathsT5N5IkAuthoringAnalyzeTextProjectsGetResponses200ContentApplicationJsonSchemaOutput;
}

/** Lists the existing projects. */
export interface ProjectsListDefaultResponse extends HttpResponse {
  status: string;
  body: AzureCoreFoundationsErrorResponseOutput;
}

export interface ProjectsCreateOrUpdate200Headers {
  /** The location of an instance of OperationStatus */
  "operation-location"?: string;
}

/** Creates a new project or updates an existing one. */
export interface ProjectsCreateOrUpdate200Response extends HttpResponse {
  status: "200";
  body: PathsPbd2VdAuthoringAnalyzeTextProjectsProjectnamePatchResponses200ContentApplicationJsonSchemaOutput;
  headers: RawHttpHeaders & ProjectsCreateOrUpdate200Headers;
}

export interface ProjectsCreateOrUpdate201Headers {
  /** The location of an instance of OperationStatus */
  "operation-location"?: string;
}

/** Creates a new project or updates an existing one. */
export interface ProjectsCreateOrUpdate201Response extends HttpResponse {
  status: "201";
  body: Paths1Aqv1ZlAuthoringAnalyzeTextProjectsProjectnamePatchResponses201ContentApplicationJsonSchemaOutput;
  headers: RawHttpHeaders & ProjectsCreateOrUpdate201Headers;
}

/** Creates a new project or updates an existing one. */
export interface ProjectsCreateOrUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: AzureCoreFoundationsErrorResponseOutput;
}

/** Gets the details of a project. */
export interface ProjectsGet200Response extends HttpResponse {
  status: "200";
  body: Paths9B3KfyAuthoringAnalyzeTextProjectsProjectnameGetResponses200ContentApplicationJsonSchemaOutput;
}

/** Gets the details of a project. */
export interface ProjectsGetDefaultResponse extends HttpResponse {
  status: string;
  body: AzureCoreFoundationsErrorResponseOutput;
}

export interface ProjectsDelete202Headers {
  /** The location of an instance of OperationStatus */
  "operation-location"?: string;
}

/** Deletes a project. */
export interface ProjectsDelete202Response extends HttpResponse {
  status: "202";
  body: PathsB2Ql7RAuthoringAnalyzeTextProjectsProjectnameDeleteResponses202ContentApplicationJsonSchemaOutput;
  headers: RawHttpHeaders & ProjectsDelete202Headers;
}

/** Deletes a project. */
export interface ProjectsDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: AzureCoreFoundationsErrorResponseOutput;
}

export interface ProjectsExport202Headers {
  /** The location of an instance of OperationStatus */
  "operation-location"?: string;
}

/** Triggers a job to export a project's data. */
export interface ProjectsExport202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & ProjectsExport202Headers;
}

/** Triggers a job to export a project's data. */
export interface ProjectsExportDefaultResponse extends HttpResponse {
  status: string;
  body: AzureCoreFoundationsErrorResponseOutput;
}

export interface ProjectsImportx202Headers {
  /** The location of an instance of OperationStatus */
  "operation-location"?: string;
}

/** Triggers a job to export a project's data. */
export interface ProjectsImportx202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & ProjectsImportx202Headers;
}

/** Triggers a job to export a project's data. */
export interface ProjectsImportxDefaultResponse extends HttpResponse {
  status: string;
  body: AzureCoreFoundationsErrorResponseOutput;
}

export interface ProjectsTrain202Headers {
  /** The location of an instance of OperationStatus */
  "operation-location"?: string;
}

/** Triggers a training job for a project. */
export interface ProjectsTrain202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & ProjectsTrain202Headers;
}

/** Triggers a training job for a project. */
export interface ProjectsTrainDefaultResponse extends HttpResponse {
  status: string;
  body: AzureCoreFoundationsErrorResponseOutput;
}

/** Lists the existing deployments. */
export interface DeploymentsList200Response extends HttpResponse {
  status: "200";
  body: Paths163P6AaAuthoringAnalyzeTextProjectsProjectnameDeploymentsGetResponses200ContentApplicationJsonSchemaOutput;
}

/** Lists the existing deployments. */
export interface DeploymentsListDefaultResponse extends HttpResponse {
  status: string;
  body: AzureCoreFoundationsErrorResponseOutput;
}

/** Gets the details of a deployment. */
export interface DeploymentsGetDeployment200Response extends HttpResponse {
  status: "200";
  body: Paths5VjuiiAuthoringAnalyzeTextProjectsProjectnameDeploymentsDeploymentnameGetResponses200ContentApplicationJsonSchemaOutput;
}

/** Gets the details of a deployment. */
export interface DeploymentsGetDeploymentDefaultResponse extends HttpResponse {
  status: string;
  body: AzureCoreFoundationsErrorResponseOutput;
}

export interface DeploymentsDeployProject200Headers {
  /** The location of an instance of OperationStatus */
  "operation-location"?: string;
}

/** Creates a new deployment or replaces an existing one. */
export interface DeploymentsDeployProject200Response extends HttpResponse {
  status: "200";
  body: Paths1Nlca2YAuthoringAnalyzeTextProjectsProjectnameDeploymentsDeploymentnamePutResponses200ContentApplicationJsonSchemaOutput;
  headers: RawHttpHeaders & DeploymentsDeployProject200Headers;
}

export interface DeploymentsDeployProject201Headers {
  /** The location of an instance of OperationStatus */
  "operation-location"?: string;
}

/** Creates a new deployment or replaces an existing one. */
export interface DeploymentsDeployProject201Response extends HttpResponse {
  status: "201";
  body: Paths140OfanAuthoringAnalyzeTextProjectsProjectnameDeploymentsDeploymentnamePutResponses201ContentApplicationJsonSchemaOutput;
  headers: RawHttpHeaders & DeploymentsDeployProject201Headers;
}

/** Creates a new deployment or replaces an existing one. */
export interface DeploymentsDeployProjectDefaultResponse extends HttpResponse {
  status: string;
  body: AzureCoreFoundationsErrorResponseOutput;
}

export interface DeploymentsDeleteDeployment202Headers {
  /** The location of an instance of OperationStatus */
  "operation-location"?: string;
}

/** Deletes a project deployment. */
export interface DeploymentsDeleteDeployment202Response extends HttpResponse {
  status: "202";
  body: Paths1R873G1AuthoringAnalyzeTextProjectsProjectnameDeploymentsDeploymentnameDeleteResponses202ContentApplicationJsonSchemaOutput;
  headers: RawHttpHeaders & DeploymentsDeleteDeployment202Headers;
}

/** Deletes a project deployment. */
export interface DeploymentsDeleteDeploymentDefaultResponse
  extends HttpResponse {
  status: string;
  body: AzureCoreFoundationsErrorResponseOutput;
}

export interface DeploymentsSwapDeployments202Headers {
  /** The location of an instance of OperationStatus */
  "operation-location"?: string;
}

/** Swaps two existing deployments with each other. */
export interface DeploymentsSwapDeployments202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & DeploymentsSwapDeployments202Headers;
}

/** Swaps two existing deployments with each other. */
export interface DeploymentsSwapDeploymentsDefaultResponse
  extends HttpResponse {
  status: string;
  body: AzureCoreFoundationsErrorResponseOutput;
}

/** Gets the status of an existing deployment job. */
export interface JobsGetDeploymentStatus200Response extends HttpResponse {
  status: "200";
  body: Paths9Co3TzAuthoringAnalyzeTextProjectsProjectnameDeploymentsDeploymentnameJobsJobidGetResponses200ContentApplicationJsonSchemaOutput;
}

/** Gets the status of an existing deployment job. */
export interface JobsGetDeploymentStatusDefaultResponse extends HttpResponse {
  status: string;
  body: AzureCoreFoundationsErrorResponseOutput;
}

/** Gets the status of an existing swap deployment job. */
export interface JobsGetSwapDeploymentsStatus200Response extends HttpResponse {
  status: "200";
  body: PathsY1DwxgAuthoringAnalyzeTextProjectsProjectnameDeploymentsDeploymentnameSwapJobsJobidGetResponses200ContentApplicationJsonSchemaOutput;
}

/** Gets the status of an existing swap deployment job. */
export interface JobsGetSwapDeploymentsStatusDefaultResponse
  extends HttpResponse {
  status: string;
  body: AzureCoreFoundationsErrorResponseOutput;
}

export interface GlobalGetSupportedLanguages200Response extends HttpResponse {
  status: "200";
  body: PagedSupportedLanguageOutput;
}

export interface GlobalGetSupportedLanguagesDefaultResponse
  extends HttpResponse {
  status: string;
  body: AzureCoreFoundationsErrorResponseOutput;
}

export interface GlobalListTrainingConfigVersions200Response
  extends HttpResponse {
  status: "200";
  body: PagedTrainingConfigVersionOutput;
}

export interface GlobalListTrainingConfigVersionsDefaultResponse
  extends HttpResponse {
  status: string;
  body: AzureCoreFoundationsErrorResponseOutput;
}
