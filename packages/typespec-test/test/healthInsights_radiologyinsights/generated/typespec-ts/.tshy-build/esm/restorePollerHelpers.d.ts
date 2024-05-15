import { PollerLike, OperationState } from "@azure/core-lro";
import { AzureHealthInsightsContext } from "./api/radiologyInsightsContext.js";
import { RadiologyInsightsClient } from "./radiologyInsightsClient.js";
import { PathUncheckedResponse, OperationOptions } from "@azure-rest/core-client";
import { AbortSignalLike } from "@azure/abort-controller";
export interface RestorePollerOptions<TResult, TResponse extends PathUncheckedResponse = PathUncheckedResponse> extends OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /**
     * The signal which can be used to abort requests.
     */
    abortSignal?: AbortSignalLike;
    /** Deserialization function for raw response body */
    processResponseBody?: (result: TResponse) => PromiseLike<TResult>;
}
/**
 * Creates a poller from the serialized state of another poller. This can be
 * useful when you want to create pollers on a different host or a poller
 * needs to be constructed after the original one is not in scope.
 */
export declare function restorePoller<TResponse extends PathUncheckedResponse, TResult>(client: AzureHealthInsightsContext | RadiologyInsightsClient, serializedState: string, sourceOperation: (...args: any[]) => PollerLike<OperationState<TResult>, TResult>, options?: RestorePollerOptions<TResult>): PollerLike<OperationState<TResult>, TResult>;
//# sourceMappingURL=restorePollerHelpers.d.ts.map