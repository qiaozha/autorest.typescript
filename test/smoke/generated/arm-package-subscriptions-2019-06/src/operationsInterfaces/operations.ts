/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  Operation,
  OperationsListNextOptionalParams,
  OperationsListOptionalParams,
  OperationsListNextNextOptionalParams,
  OperationsListNextNextNextOptionalParams,
  OperationsListNextNextNextNextOptionalParams,
  OperationsListNextNextNextNextNextOptionalParams,
  OperationsListNextNextNextNextNextNextOptionalParams,
  OperationsListNextNextNextNextNextNextNextOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Operations. */
export interface Operations {
  /**
   * Lists all of the available Microsoft.Resources REST API operations.
   * @param options The options parameters.
   */
  list(
    options?: OperationsListOptionalParams
  ): PagedAsyncIterableIterator<Operation>;
  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  listNext(
    nextLink: string,
    options?: OperationsListNextOptionalParams
  ): PagedAsyncIterableIterator<Operation>;
  /**
   * ListNextNext
   * @param nextLink The nextLink from the previous successful call to the ListNext method.
   * @param options The options parameters.
   */
  listNextNext(
    nextLink: string,
    options?: OperationsListNextNextOptionalParams
  ): PagedAsyncIterableIterator<Operation>;
  /**
   * ListNextNextNext
   * @param nextLink The nextLink from the previous successful call to the ListNextNext method.
   * @param options The options parameters.
   */
  listNextNextNext(
    nextLink: string,
    options?: OperationsListNextNextNextOptionalParams
  ): PagedAsyncIterableIterator<Operation>;
  /**
   * ListNextNextNextNext
   * @param nextLink The nextLink from the previous successful call to the ListNextNextNext method.
   * @param options The options parameters.
   */
  listNextNextNextNext(
    nextLink: string,
    options?: OperationsListNextNextNextNextOptionalParams
  ): PagedAsyncIterableIterator<Operation>;
  /**
   * ListNextNextNextNextNext
   * @param nextLink The nextLink from the previous successful call to the ListNextNextNextNext method.
   * @param options The options parameters.
   */
  listNextNextNextNextNext(
    nextLink: string,
    options?: OperationsListNextNextNextNextNextOptionalParams
  ): PagedAsyncIterableIterator<Operation>;
  /**
   * ListNextNextNextNextNextNext
   * @param nextLink The nextLink from the previous successful call to the ListNextNextNextNextNext
   *                 method.
   * @param options The options parameters.
   */
  listNextNextNextNextNextNext(
    nextLink: string,
    options?: OperationsListNextNextNextNextNextNextOptionalParams
  ): PagedAsyncIterableIterator<Operation>;
  /**
   * ListNextNextNextNextNextNextNext
   * @param nextLink The nextLink from the previous successful call to the ListNextNextNextNextNextNext
   *                 method.
   * @param options The options parameters.
   */
  listNextNextNextNextNextNextNext(
    nextLink: string,
    options?: OperationsListNextNextNextNextNextNextNextOptionalParams
  ): PagedAsyncIterableIterator<Operation>;
}
