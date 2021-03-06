/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/vMInsightsMappers";
import * as Parameters from "../models/parameters";
import { MonitorManagementClientContext } from "../monitorManagementClientContext";

/** Class representing a VMInsights. */
export class VMInsights {
  private readonly client: MonitorManagementClientContext;

  /**
   * Create a VMInsights.
   * @param {MonitorManagementClientContext} client Reference to the service client.
   */
  constructor(client: MonitorManagementClientContext) {
    this.client = client;
  }

  /**
   * Retrieves the VM Insights onboarding status for the specified resource or resource scope.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the resource, or
   * scope, whose status to retrieve.
   * @param [options] The optional parameters
   * @returns Promise<Models.VMInsightsGetOnboardingStatusResponse>
   */
  getOnboardingStatus(resourceUri: string, options?: msRest.RequestOptionsBase): Promise<Models.VMInsightsGetOnboardingStatusResponse>;
  /**
   * @param resourceUri The fully qualified Azure Resource manager identifier of the resource, or
   * scope, whose status to retrieve.
   * @param callback The callback
   */
  getOnboardingStatus(resourceUri: string, callback: msRest.ServiceCallback<Models.VMInsightsOnboardingStatus>): void;
  /**
   * @param resourceUri The fully qualified Azure Resource manager identifier of the resource, or
   * scope, whose status to retrieve.
   * @param options The optional parameters
   * @param callback The callback
   */
  getOnboardingStatus(resourceUri: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VMInsightsOnboardingStatus>): void;
  getOnboardingStatus(resourceUri: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.VMInsightsOnboardingStatus>, callback?: msRest.ServiceCallback<Models.VMInsightsOnboardingStatus>): Promise<Models.VMInsightsGetOnboardingStatusResponse> {
    return this.client.sendOperationRequest(
      {
        resourceUri,
        options
      },
      getOnboardingStatusOperationSpec,
      callback) as Promise<Models.VMInsightsGetOnboardingStatusResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOnboardingStatusOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{resourceUri}/providers/Microsoft.Insights/vmInsightsOnboardingStatuses/default",
  urlParameters: [
    Parameters.resourceUri
  ],
  queryParameters: [
    Parameters.apiVersion10
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.VMInsightsOnboardingStatus
    },
    default: {
      bodyMapper: Mappers.ResponseWithError
    }
  },
  serializer
};
