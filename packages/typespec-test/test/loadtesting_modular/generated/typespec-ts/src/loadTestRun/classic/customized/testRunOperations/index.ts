// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AzureLoadTestingContext } from "../../../api/LoadTestRunContext.js";
import {
  FileInfo,
  TestRun,
  TestRunAppComponents,
  TestRunServerMetricConfig,
  MetricDefinitionCollection,
  MetricNamespaceCollection,
  MetricRequestPayload,
  PagedTimeSeriesElement,
  PagedTestRun,
  PagedDimensionValueList,
} from "../../../models/models.js";
import {
  testRun,
  createOrUpdateAppComponents,
  createOrUpdateServerMetricsConfig,
  deleteTestRun,
  getAppComponents,
  getServerMetricsConfig,
  getTestRun,
  getTestRunFile,
  listMetricDimensionValues,
  listMetricDefinitions,
  listMetricNamespaces,
  listMetrics,
  listTestRuns,
  stopTestRun,
} from "../../../api/customized/testRunOperations/index.js";
import {
  CustomizedTestRunOperationsTestRunOptions,
  CustomizedTestRunOperationsCreateOrUpdateAppComponentsOptions,
  CustomizedTestRunOperationsCreateOrUpdateServerMetricsConfigOptions,
  CustomizedTestRunOperationsDeleteTestRunOptions,
  CustomizedTestRunOperationsGetAppComponentsOptions,
  CustomizedTestRunOperationsGetServerMetricsConfigOptions,
  CustomizedTestRunOperationsGetTestRunOptions,
  CustomizedTestRunOperationsGetTestRunFileOptions,
  CustomizedTestRunOperationsListMetricDimensionValuesOptions,
  CustomizedTestRunOperationsListMetricDefinitionsOptions,
  CustomizedTestRunOperationsListMetricNamespacesOptions,
  CustomizedTestRunOperationsListMetricsOptions,
  CustomizedTestRunOperationsListTestRunsOptions,
  CustomizedTestRunOperationsStopTestRunOptions,
} from "../../../models/options.js";

export interface CustomizedTestRunOperationsOperations {
  testRunOperations: {
    testRun: (
      testRunId: string,
      resource: TestRun,
      options?: CustomizedTestRunOperationsTestRunOptions
    ) => Promise<TestRun>;
    createOrUpdateAppComponents: (
      testRunId: string,
      body: TestRunAppComponents,
      options?: CustomizedTestRunOperationsCreateOrUpdateAppComponentsOptions
    ) => Promise<TestRunAppComponents>;
    createOrUpdateServerMetricsConfig: (
      testRunId: string,
      body: TestRunServerMetricConfig,
      options?: CustomizedTestRunOperationsCreateOrUpdateServerMetricsConfigOptions
    ) => Promise<TestRunServerMetricConfig>;
    deleteTestRun: (
      testRunId: string,
      options?: CustomizedTestRunOperationsDeleteTestRunOptions
    ) => Promise<void>;
    getAppComponents: (
      testRunId: string,
      options?: CustomizedTestRunOperationsGetAppComponentsOptions
    ) => Promise<TestRunAppComponents>;
    getServerMetricsConfig: (
      testRunId: string,
      options?: CustomizedTestRunOperationsGetServerMetricsConfigOptions
    ) => Promise<TestRunServerMetricConfig>;
    getTestRun: (
      testRunId: string,
      options?: CustomizedTestRunOperationsGetTestRunOptions
    ) => Promise<TestRun>;
    getTestRunFile: (
      testRunId: string,
      fileName: string,
      options?: CustomizedTestRunOperationsGetTestRunFileOptions
    ) => Promise<FileInfo>;
    listMetricDimensionValues: (
      testRunId: string,
      name: string,
      metricNamespace: string,
      options?: CustomizedTestRunOperationsListMetricDimensionValuesOptions
    ) => Promise<PagedDimensionValueList>;
    listMetricDefinitions: (
      testRunId: string,
      options?: CustomizedTestRunOperationsListMetricDefinitionsOptions
    ) => Promise<MetricDefinitionCollection>;
    listMetricNamespaces: (
      testRunId: string,
      options?: CustomizedTestRunOperationsListMetricNamespacesOptions
    ) => Promise<MetricNamespaceCollection>;
    listMetrics: (
      testRunId: string,
      body: MetricRequestPayload,
      options?: CustomizedTestRunOperationsListMetricsOptions
    ) => Promise<PagedTimeSeriesElement>;
    listTestRuns: (
      options?: CustomizedTestRunOperationsListTestRunsOptions
    ) => Promise<PagedTestRun>;
    stopTestRun: (
      testRunId: string,
      options?: CustomizedTestRunOperationsStopTestRunOptions
    ) => Promise<TestRun>;
  };
}

export function getCustomizedTestRunOperations(
  context: AzureLoadTestingContext
) {
  return {
    testRun: (
      testRunId: string,
      resource: TestRun,
      options?: CustomizedTestRunOperationsTestRunOptions
    ) => testRun(context, testRunId, resource, options),
    createOrUpdateAppComponents: (
      testRunId: string,
      body: TestRunAppComponents,
      options?: CustomizedTestRunOperationsCreateOrUpdateAppComponentsOptions
    ) => createOrUpdateAppComponents(context, testRunId, body, options),
    createOrUpdateServerMetricsConfig: (
      testRunId: string,
      body: TestRunServerMetricConfig,
      options?: CustomizedTestRunOperationsCreateOrUpdateServerMetricsConfigOptions
    ) => createOrUpdateServerMetricsConfig(context, testRunId, body, options),
    deleteTestRun: (
      testRunId: string,
      options?: CustomizedTestRunOperationsDeleteTestRunOptions
    ) => deleteTestRun(context, testRunId, options),
    getAppComponents: (
      testRunId: string,
      options?: CustomizedTestRunOperationsGetAppComponentsOptions
    ) => getAppComponents(context, testRunId, options),
    getServerMetricsConfig: (
      testRunId: string,
      options?: CustomizedTestRunOperationsGetServerMetricsConfigOptions
    ) => getServerMetricsConfig(context, testRunId, options),
    getTestRun: (
      testRunId: string,
      options?: CustomizedTestRunOperationsGetTestRunOptions
    ) => getTestRun(context, testRunId, options),
    getTestRunFile: (
      testRunId: string,
      fileName: string,
      options?: CustomizedTestRunOperationsGetTestRunFileOptions
    ) => getTestRunFile(context, testRunId, fileName, options),
    listMetricDimensionValues: (
      testRunId: string,
      name: string,
      metricNamespace: string,
      options?: CustomizedTestRunOperationsListMetricDimensionValuesOptions
    ) =>
      listMetricDimensionValues(
        context,
        testRunId,
        name,
        metricNamespace,
        options
      ),
    listMetricDefinitions: (
      testRunId: string,
      options?: CustomizedTestRunOperationsListMetricDefinitionsOptions
    ) => listMetricDefinitions(context, testRunId, options),
    listMetricNamespaces: (
      testRunId: string,
      options?: CustomizedTestRunOperationsListMetricNamespacesOptions
    ) => listMetricNamespaces(context, testRunId, options),
    listMetrics: (
      testRunId: string,
      body: MetricRequestPayload,
      options?: CustomizedTestRunOperationsListMetricsOptions
    ) => listMetrics(context, testRunId, body, options),
    listTestRuns: (options?: CustomizedTestRunOperationsListTestRunsOptions) =>
      listTestRuns(context, options),
    stopTestRun: (
      testRunId: string,
      options?: CustomizedTestRunOperationsStopTestRunOptions
    ) => stopTestRun(context, testRunId, options),
  };
}

export function getCustomizedTestRunOperationsOperations(
  context: AzureLoadTestingContext
): CustomizedTestRunOperationsOperations {
  return {
    testRunOperations: getCustomizedTestRunOperations(context),
  };
}
