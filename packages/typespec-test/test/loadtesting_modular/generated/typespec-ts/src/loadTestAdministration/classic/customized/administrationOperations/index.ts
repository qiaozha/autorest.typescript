// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AzureLoadTestingContext } from "../../../api/LoadTestAdministrationContext.js";
import {
  Test,
  FileInfo,
  TestAppComponents,
  TestServerMetricConfig,
  PagedFileInfo,
  PagedTest,
} from "../../../models/models.js";
import {
  createOrUpdateTest,
  createOrUpdateAppComponents,
  createOrUpdateServerMetricsConfig,
  getAppComponents,
  getServerMetricsConfig,
  getTest,
  getTestFile,
  listTestFiles,
  listTests,
  uploadTestFile,
  deleteTestFile,
  deleteTest,
} from "../../../api/customized/administrationOperations/index.js";
import {
  CustomizedAdministrationOperationsCreateOrUpdateTestOptions,
  CustomizedAdministrationOperationsCreateOrUpdateAppComponentsOptions,
  CustomizedAdministrationOperationsCreateOrUpdateServerMetricsConfigOptions,
  CustomizedAdministrationOperationsGetAppComponentsOptions,
  CustomizedAdministrationOperationsGetServerMetricsConfigOptions,
  CustomizedAdministrationOperationsGetTestOptions,
  CustomizedAdministrationOperationsGetTestFileOptions,
  CustomizedAdministrationOperationsListTestFilesOptions,
  CustomizedAdministrationOperationsListTestsOptions,
  CustomizedAdministrationOperationsUploadTestFileOptions,
  CustomizedAdministrationOperationsDeleteTestFileOptions,
  CustomizedAdministrationOperationsDeleteTestOptions,
} from "../../../models/options.js";

export interface CustomizedAdministrationOperationsOperations {
  administrationOperations: {
    createOrUpdateTest: (
      testId: string,
      body: Test,
      options?: CustomizedAdministrationOperationsCreateOrUpdateTestOptions
    ) => Promise<Test>;
    createOrUpdateAppComponents: (
      testId: string,
      body: TestAppComponents,
      options?: CustomizedAdministrationOperationsCreateOrUpdateAppComponentsOptions
    ) => Promise<TestAppComponents>;
    createOrUpdateServerMetricsConfig: (
      testId: string,
      body: TestServerMetricConfig,
      options?: CustomizedAdministrationOperationsCreateOrUpdateServerMetricsConfigOptions
    ) => Promise<TestServerMetricConfig>;
    getAppComponents: (
      testId: string,
      options?: CustomizedAdministrationOperationsGetAppComponentsOptions
    ) => Promise<TestAppComponents>;
    getServerMetricsConfig: (
      testId: string,
      options?: CustomizedAdministrationOperationsGetServerMetricsConfigOptions
    ) => Promise<TestServerMetricConfig>;
    getTest: (
      testId: string,
      options?: CustomizedAdministrationOperationsGetTestOptions
    ) => Promise<Test>;
    getTestFile: (
      testId: string,
      fileName: string,
      options?: CustomizedAdministrationOperationsGetTestFileOptions
    ) => Promise<FileInfo>;
    listTestFiles: (
      testId: string,
      options?: CustomizedAdministrationOperationsListTestFilesOptions
    ) => Promise<PagedFileInfo>;
    listTests: (
      options?: CustomizedAdministrationOperationsListTestsOptions
    ) => Promise<PagedTest>;
    uploadTestFile: (
      testId: string,
      fileName: string,
      body: Uint8Array,
      options?: CustomizedAdministrationOperationsUploadTestFileOptions
    ) => Promise<FileInfo>;
    deleteTestFile: (
      testId: string,
      fileName: string,
      options?: CustomizedAdministrationOperationsDeleteTestFileOptions
    ) => Promise<void>;
    deleteTest: (
      testId: string,
      options?: CustomizedAdministrationOperationsDeleteTestOptions
    ) => Promise<void>;
  };
}

export function getCustomizedAdministrationOperations(
  context: AzureLoadTestingContext
) {
  return {
    createOrUpdateTest: (
      testId: string,
      body: Test,
      options?: CustomizedAdministrationOperationsCreateOrUpdateTestOptions
    ) => createOrUpdateTest(context, testId, body, options),
    createOrUpdateAppComponents: (
      testId: string,
      body: TestAppComponents,
      options?: CustomizedAdministrationOperationsCreateOrUpdateAppComponentsOptions
    ) => createOrUpdateAppComponents(context, testId, body, options),
    createOrUpdateServerMetricsConfig: (
      testId: string,
      body: TestServerMetricConfig,
      options?: CustomizedAdministrationOperationsCreateOrUpdateServerMetricsConfigOptions
    ) => createOrUpdateServerMetricsConfig(context, testId, body, options),
    getAppComponents: (
      testId: string,
      options?: CustomizedAdministrationOperationsGetAppComponentsOptions
    ) => getAppComponents(context, testId, options),
    getServerMetricsConfig: (
      testId: string,
      options?: CustomizedAdministrationOperationsGetServerMetricsConfigOptions
    ) => getServerMetricsConfig(context, testId, options),
    getTest: (
      testId: string,
      options?: CustomizedAdministrationOperationsGetTestOptions
    ) => getTest(context, testId, options),
    getTestFile: (
      testId: string,
      fileName: string,
      options?: CustomizedAdministrationOperationsGetTestFileOptions
    ) => getTestFile(context, testId, fileName, options),
    listTestFiles: (
      testId: string,
      options?: CustomizedAdministrationOperationsListTestFilesOptions
    ) => listTestFiles(context, testId, options),
    listTests: (options?: CustomizedAdministrationOperationsListTestsOptions) =>
      listTests(context, options),
    uploadTestFile: (
      testId: string,
      fileName: string,
      body: Uint8Array,
      options?: CustomizedAdministrationOperationsUploadTestFileOptions
    ) => uploadTestFile(context, testId, fileName, body, options),
    deleteTestFile: (
      testId: string,
      fileName: string,
      options?: CustomizedAdministrationOperationsDeleteTestFileOptions
    ) => deleteTestFile(context, testId, fileName, options),
    deleteTest: (
      testId: string,
      options?: CustomizedAdministrationOperationsDeleteTestOptions
    ) => deleteTest(context, testId, options),
  };
}

export function getCustomizedAdministrationOperationsOperations(
  context: AzureLoadTestingContext
): CustomizedAdministrationOperationsOperations {
  return {
    administrationOperations: getCustomizedAdministrationOperations(context),
  };
}
