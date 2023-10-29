// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";
import { Interval } from "./models.js";

export interface CustomizedTestRunOperationsTestRunOptions
  extends OperationOptions {
  /** This request has a JSON Merge Patch body. */
  contentType?: string;
  /**
   * Existing test run identifier that should be rerun, if this is provided, the
   * test will run with the JMX file, configuration and app components from the
   * existing test run. You can override the configuration values for new test run
   * in the request body.
   */
  oldTestRunId?: string;
}

export interface CustomizedTestRunOperationsCreateOrUpdateAppComponentsOptions
  extends OperationOptions {
  contentType?: string;
}

export interface CustomizedTestRunOperationsCreateOrUpdateServerMetricsConfigOptions
  extends OperationOptions {
  contentType?: string;
}

export interface CustomizedTestRunOperationsDeleteTestRunOptions
  extends OperationOptions {}

export interface CustomizedTestRunOperationsGetAppComponentsOptions
  extends OperationOptions {}

export interface CustomizedTestRunOperationsGetServerMetricsConfigOptions
  extends OperationOptions {}

export interface CustomizedTestRunOperationsGetTestRunOptions
  extends OperationOptions {}

export interface CustomizedTestRunOperationsGetTestRunFileOptions
  extends OperationOptions {}

export interface CustomizedTestRunOperationsListMetricDimensionValuesOptions
  extends OperationOptions {
  /** The interval (i.e. timegrain) of the query. */
  interval?: Interval;
  /** Metric name */
  metricName?: string;
  /**
   * The timespan of the query. It is a string with the following format
   * 'startDateTime_ISO/endDateTime_ISO'.
   */
  timespan?: string;
}

export interface CustomizedTestRunOperationsListMetricDefinitionsOptions
  extends OperationOptions {
  /** Metric namespace to query metric definitions for. */
  metricNamespace?: string;
}

export interface CustomizedTestRunOperationsListMetricNamespacesOptions
  extends OperationOptions {}

export interface CustomizedTestRunOperationsListMetricsOptions
  extends OperationOptions {
  /** The aggregation */
  aggregation?: string;
  /** The interval (i.e. timegrain) of the query. */
  interval?: Interval;
  /** Metric name */
  metricName?: string;
  /** Metric namespace to query metric definitions for. */
  metricNamespace?: string;
  /**
   * The timespan of the query. It is a string with the following format
   * 'startDateTime_ISO/endDateTime_ISO'.
   */
  timespan?: string;
}

export interface CustomizedTestRunOperationsListTestRunsOptions
  extends OperationOptions {
  /**
   * Sort on the supported fields in (field asc/desc) format. eg: executedDateTime
   * asc. Supported fields - executedDateTime
   */
  orderby?: string;
  /**
   * Prefix based, case sensitive search on searchable fields - description,
   * executedUser. For example, to search for a test run, with description 500 VUs,
   * the search parameter can be 500.
   */
  search?: string;
  /** Unique name of an existing load test. */
  testId?: string;
  /** Start DateTime(ISO 8601 literal format) of test-run execution time filter range. */
  executionFrom?: string;
  /** End DateTime(ISO 8601 literal format) of test-run execution time filter range. */
  executionTo?: string;
  /** Comma separated list of test run status. */
  status?: string;
  /** Number of results in response. */
  maxpagesize?: number;
}

export interface CustomizedTestRunOperationsStopTestRunOptions
  extends OperationOptions {}
