// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  CreateOrUpdateParameters,
  GetParameters,
  DeleteParameters,
  ListProjectsParameters,
  ExportParameters,
  ImportxParameters,
  TrainParameters,
  GetDeploymentParameters,
  DeployProjectParameters,
  DeleteDeploymentParameters,
  ListDeploymentsParameters,
  SwapDeploymentsParameters,
  GetDeploymentStatusParameters,
  GetSwapDeploymentsStatusParameters,
  GetSupportedLanguagesParameters,
  ListTrainingConfigVersionsParameters,
} from "./parameters.js";
import {
  CreateOrUpdate200Response,
  CreateOrUpdate201Response,
  CreateOrUpdateDefaultResponse,
  Get200Response,
  GetDefaultResponse,
  Delete202Response,
  DeleteDefaultResponse,
  ListProjects200Response,
  ListProjectsDefaultResponse,
  Export202Response,
  ExportDefaultResponse,
  Importx202Response,
  ImportxDefaultResponse,
  Train202Response,
  TrainDefaultResponse,
  GetDeployment200Response,
  GetDeploymentDefaultResponse,
  DeployProject200Response,
  DeployProject201Response,
  DeployProjectDefaultResponse,
  DeleteDeployment202Response,
  DeleteDeploymentDefaultResponse,
  ListDeployments200Response,
  ListDeploymentsDefaultResponse,
  SwapDeployments202Response,
  SwapDeploymentsDefaultResponse,
  GetDeploymentStatus200Response,
  GetDeploymentStatusDefaultResponse,
  GetSwapDeploymentsStatus200Response,
  GetSwapDeploymentsStatusDefaultResponse,
  GetSupportedLanguages200Response,
  GetSupportedLanguagesDefaultResponse,
  ListTrainingConfigVersions200Response,
  ListTrainingConfigVersionsDefaultResponse,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface CreateOrUpdate {
  /** Creates a new project or updates an existing one. */
  patch(
    options: CreateOrUpdateParameters,
  ): StreamableMethod<
    | CreateOrUpdate200Response
    | CreateOrUpdate201Response
    | CreateOrUpdateDefaultResponse
  >;
  /** Gets the details of a project. */
  get(
    options?: GetParameters,
  ): StreamableMethod<Get200Response | GetDefaultResponse>;
  /** Deletes a project. */
  delete(
    options?: DeleteParameters,
  ): StreamableMethod<Delete202Response | DeleteDefaultResponse>;
}

export interface ListProjects {
  /** Lists the existing projects. */
  get(
    options?: ListProjectsParameters,
  ): StreamableMethod<ListProjects200Response | ListProjectsDefaultResponse>;
}

export interface Export {
  /** Triggers a job to export a project's data. */
  post(
    options: ExportParameters,
  ): StreamableMethod<Export202Response | ExportDefaultResponse>;
}

export interface Importx {
  /** Triggers a job to export a project's data. */
  post(
    options?: ImportxParameters,
  ): StreamableMethod<Importx202Response | ImportxDefaultResponse>;
}

export interface Train {
  /** Triggers a training job for a project. */
  post(
    options: TrainParameters,
  ): StreamableMethod<Train202Response | TrainDefaultResponse>;
}

export interface GetDeployment {
  /** Gets the details of a deployment. */
  get(
    options?: GetDeploymentParameters,
  ): StreamableMethod<GetDeployment200Response | GetDeploymentDefaultResponse>;
  /** Creates a new deployment or replaces an existing one. */
  put(
    options: DeployProjectParameters,
  ): StreamableMethod<
    | DeployProject200Response
    | DeployProject201Response
    | DeployProjectDefaultResponse
  >;
  /** Deletes a project deployment. */
  delete(
    options?: DeleteDeploymentParameters,
  ): StreamableMethod<
    DeleteDeployment202Response | DeleteDeploymentDefaultResponse
  >;
}

export interface ListDeployments {
  /** Lists the existing deployments. */
  get(
    options?: ListDeploymentsParameters,
  ): StreamableMethod<
    ListDeployments200Response | ListDeploymentsDefaultResponse
  >;
}

export interface SwapDeployments {
  /** Swaps two existing deployments with each other. */
  post(
    options: SwapDeploymentsParameters,
  ): StreamableMethod<
    SwapDeployments202Response | SwapDeploymentsDefaultResponse
  >;
}

export interface GetDeploymentStatus {
  /** Gets the status of an existing deployment job. */
  get(
    options?: GetDeploymentStatusParameters,
  ): StreamableMethod<
    GetDeploymentStatus200Response | GetDeploymentStatusDefaultResponse
  >;
}

export interface GetSwapDeploymentsStatus {
  /** Gets the status of an existing swap deployment job. */
  get(
    options?: GetSwapDeploymentsStatusParameters,
  ): StreamableMethod<
    | GetSwapDeploymentsStatus200Response
    | GetSwapDeploymentsStatusDefaultResponse
  >;
}

export interface GetSupportedLanguages {
  /** Gets the supported languages. */
  get(
    options?: GetSupportedLanguagesParameters,
  ): StreamableMethod<
    GetSupportedLanguages200Response | GetSupportedLanguagesDefaultResponse
  >;
}

export interface ListTrainingConfigVersions {
  /** Lists training configuration versions. */
  get(
    options?: ListTrainingConfigVersionsParameters,
  ): StreamableMethod<
    | ListTrainingConfigVersions200Response
    | ListTrainingConfigVersionsDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/projects/\{projectName\}' has methods for the following verbs: patch, get, delete */
  (path: "/projects/{projectName}", projectName: string): CreateOrUpdate;
  /** Resource for '/projects' has methods for the following verbs: get */
  (path: "/projects"): ListProjects;
  /** Resource for '/projects/\{projectName\}:export' has methods for the following verbs: post */
  (path: "/projects/{projectName}:export", projectName: string): Export;
  /** Resource for '/projects/\{projectName\}:importx' has methods for the following verbs: post */
  (path: "/projects/{projectName}:importx", projectName: string): Importx;
  /** Resource for '/projects/\{projectName\}:train' has methods for the following verbs: post */
  (path: "/projects/{projectName}:train", projectName: string): Train;
  /** Resource for '/projects/\{projectName\}/deployments/\{deploymentName\}' has methods for the following verbs: get, put, delete */
  (
    path: "/projects/{projectName}/deployments/{deploymentName}",
    projectName: string,
    deploymentName: string,
  ): GetDeployment;
  /** Resource for '/projects/\{projectName\}/deployments' has methods for the following verbs: get */
  (
    path: "/projects/{projectName}/deployments",
    projectName: string,
  ): ListDeployments;
  /** Resource for '/projects/\{projectName\}/deployments:swap' has methods for the following verbs: post */
  (
    path: "/projects/{projectName}/deployments:swap",
    projectName: string,
  ): SwapDeployments;
  /** Resource for '/projects/\{projectName\}/deployments/\{deploymentName\}/jobs/\{jobId\}' has methods for the following verbs: get */
  (
    path: "/projects/{projectName}/deployments/{deploymentName}/jobs/{jobId}",
    projectName: string,
    deploymentName: string,
    jobId: string,
  ): GetDeploymentStatus;
  /** Resource for '/projects/\{projectName\}/deployments/\{deploymentName\}/swap/jobs/\{jobId\}' has methods for the following verbs: get */
  (
    path: "/projects/{projectName}/deployments/{deploymentName}/swap/jobs/{jobId}",
    projectName: string,
    deploymentName: string,
    jobId: string,
  ): GetSwapDeploymentsStatus;
  /** Resource for '/languages' has methods for the following verbs: get */
  (path: "/languages"): GetSupportedLanguages;
  /** Resource for '/training-config-versions' has methods for the following verbs: get */
  (path: "/training-config-versions"): ListTrainingConfigVersions;
}

export type AuthoringClient = Client & {
  path: Routes;
};
