/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import {
  PipelineRequest,
  PipelineResponse,
  SendRequest
} from "@azure/core-rest-pipeline";
import * as coreAuth from "@azure/core-auth";
import {
  KeysImpl,
  VaultsImpl,
  PrivateEndpointConnectionsImpl,
  PrivateLinkResourcesImpl,
  ManagedHsmsImpl,
  MhsmPrivateEndpointConnectionsImpl,
  MhsmPrivateLinkResourcesImpl,
  OperationsImpl,
  SecretsImpl
} from "./operations";
import {
  Keys,
  Vaults,
  PrivateEndpointConnections,
  PrivateLinkResources,
  ManagedHsms,
  MhsmPrivateEndpointConnections,
  MhsmPrivateLinkResources,
  Operations,
  Secrets
} from "./operationsInterfaces";
import { KeyVaultManagementClientOptionalParams } from "./models";

export class KeyVaultManagementClient extends coreClient.ServiceClient {
  $host: string;
  subscriptionId: string;
  apiVersion: string;

  /**
   * Initializes a new instance of the KeyVaultManagementClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription.
   *                       The subscription ID forms part of the URI for every service call.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: KeyVaultManagementClientOptionalParams
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }
    if (subscriptionId === undefined) {
      throw new Error("'subscriptionId' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: KeyVaultManagementClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-keyvault-resource-manager/1.0.0-beta.1`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      baseUri:
        options.endpoint ?? options.baseUri ?? "https://management.azure.com"
    };
    super(optionsWithDefaults);
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.apiVersion = options.apiVersion || "2021-06-01-preview";
    this.keys = new KeysImpl(this);
    this.vaults = new VaultsImpl(this);
    this.privateEndpointConnections = new PrivateEndpointConnectionsImpl(this);
    this.privateLinkResources = new PrivateLinkResourcesImpl(this);
    this.managedHsms = new ManagedHsmsImpl(this);
    this.mhsmPrivateEndpointConnections = new MhsmPrivateEndpointConnectionsImpl(
      this
    );
    this.mhsmPrivateLinkResources = new MhsmPrivateLinkResourcesImpl(this);
    this.operations = new OperationsImpl(this);
    this.secrets = new SecretsImpl(this);
    if (options.apiVersion) {
      this.customApiVersion(options.apiVersion);
    }
  }

  /**  A policy that sets the api-version (or equivalent) to reflect the library version. */
  private customApiVersion(apiVersion: string) {
    const apiVersionPolicy = {
      name: "replace api version",
      async sendRequest(
        request: PipelineRequest,
        next: SendRequest
      ): Promise<PipelineResponse> {
        const param = request.url.split("?");
        if (param.length > 1) {
          const newParams = param[1].split("&").map((item) => {
            if (item.indexOf("api-version") > -1) {
              return item.replace(/(?<==).*$/, apiVersion);
            }
          });
          request.url = param[0] + "?" + newParams.join("&");
        }
        return next(request);
      }
    };
    this.pipeline.addPolicy(apiVersionPolicy);
  }

  keys: Keys;
  vaults: Vaults;
  privateEndpointConnections: PrivateEndpointConnections;
  privateLinkResources: PrivateLinkResources;
  managedHsms: ManagedHsms;
  mhsmPrivateEndpointConnections: MhsmPrivateEndpointConnections;
  mhsmPrivateLinkResources: MhsmPrivateLinkResources;
  operations: Operations;
  secrets: Secrets;
}
