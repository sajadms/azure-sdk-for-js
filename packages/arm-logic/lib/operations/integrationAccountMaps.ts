/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/integrationAccountMapsMappers";
import * as Parameters from "../models/parameters";
import { LogicManagementClientContext } from "../logicManagementClientContext";

/** Class representing a IntegrationAccountMaps. */
export class IntegrationAccountMaps {
  private readonly client: LogicManagementClientContext;

  /**
   * Create a IntegrationAccountMaps.
   * @param {LogicManagementClientContext} client Reference to the service client.
   */
  constructor(client: LogicManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a list of integration account maps.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param [options] The optional parameters
   * @returns Promise<Models.IntegrationAccountMapsListResponse>
   */
  list(resourceGroupName: string, integrationAccountName: string, options?: Models.IntegrationAccountMapsListOptionalParams): Promise<Models.IntegrationAccountMapsListResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param callback The callback
   */
  list(resourceGroupName: string, integrationAccountName: string, callback: msRest.ServiceCallback<Models.IntegrationAccountMapListResult>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, integrationAccountName: string, options: Models.IntegrationAccountMapsListOptionalParams, callback: msRest.ServiceCallback<Models.IntegrationAccountMapListResult>): void;
  list(resourceGroupName: string, integrationAccountName: string, options?: Models.IntegrationAccountMapsListOptionalParams, callback?: msRest.ServiceCallback<Models.IntegrationAccountMapListResult>): Promise<Models.IntegrationAccountMapsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        integrationAccountName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.IntegrationAccountMapsListResponse>;
  }

  /**
   * Gets an integration account map.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param mapName The integration account map name.
   * @param [options] The optional parameters
   * @returns Promise<Models.IntegrationAccountMapsGetResponse>
   */
  get(resourceGroupName: string, integrationAccountName: string, mapName: string, options?: msRest.RequestOptionsBase): Promise<Models.IntegrationAccountMapsGetResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param mapName The integration account map name.
   * @param callback The callback
   */
  get(resourceGroupName: string, integrationAccountName: string, mapName: string, callback: msRest.ServiceCallback<Models.IntegrationAccountMap>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param mapName The integration account map name.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, integrationAccountName: string, mapName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.IntegrationAccountMap>): void;
  get(resourceGroupName: string, integrationAccountName: string, mapName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.IntegrationAccountMap>): Promise<Models.IntegrationAccountMapsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        integrationAccountName,
        mapName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.IntegrationAccountMapsGetResponse>;
  }

  /**
   * Creates or updates an integration account map.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param mapName The integration account map name.
   * @param map The integration account map.
   * @param [options] The optional parameters
   * @returns Promise<Models.IntegrationAccountMapsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, integrationAccountName: string, mapName: string, map: Models.IntegrationAccountMap, options?: msRest.RequestOptionsBase): Promise<Models.IntegrationAccountMapsCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param mapName The integration account map name.
   * @param map The integration account map.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, integrationAccountName: string, mapName: string, map: Models.IntegrationAccountMap, callback: msRest.ServiceCallback<Models.IntegrationAccountMap>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param mapName The integration account map name.
   * @param map The integration account map.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, integrationAccountName: string, mapName: string, map: Models.IntegrationAccountMap, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.IntegrationAccountMap>): void;
  createOrUpdate(resourceGroupName: string, integrationAccountName: string, mapName: string, map: Models.IntegrationAccountMap, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.IntegrationAccountMap>): Promise<Models.IntegrationAccountMapsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        integrationAccountName,
        mapName,
        map,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.IntegrationAccountMapsCreateOrUpdateResponse>;
  }

  /**
   * Deletes an integration account map.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param mapName The integration account map name.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, integrationAccountName: string, mapName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param mapName The integration account map name.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, integrationAccountName: string, mapName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param mapName The integration account map name.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, integrationAccountName: string, mapName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, integrationAccountName: string, mapName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        integrationAccountName,
        mapName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Get the content callback url.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param mapName The integration account map name.
   * @param listContentCallbackUrlParameter
   * @param [options] The optional parameters
   * @returns Promise<Models.IntegrationAccountMapsListContentCallbackUrlResponse>
   */
  listContentCallbackUrl(resourceGroupName: string, integrationAccountName: string, mapName: string, listContentCallbackUrlParameter: Models.GetCallbackUrlParameters, options?: msRest.RequestOptionsBase): Promise<Models.IntegrationAccountMapsListContentCallbackUrlResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param mapName The integration account map name.
   * @param listContentCallbackUrlParameter
   * @param callback The callback
   */
  listContentCallbackUrl(resourceGroupName: string, integrationAccountName: string, mapName: string, listContentCallbackUrlParameter: Models.GetCallbackUrlParameters, callback: msRest.ServiceCallback<Models.WorkflowTriggerCallbackUrl>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param mapName The integration account map name.
   * @param listContentCallbackUrlParameter
   * @param options The optional parameters
   * @param callback The callback
   */
  listContentCallbackUrl(resourceGroupName: string, integrationAccountName: string, mapName: string, listContentCallbackUrlParameter: Models.GetCallbackUrlParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WorkflowTriggerCallbackUrl>): void;
  listContentCallbackUrl(resourceGroupName: string, integrationAccountName: string, mapName: string, listContentCallbackUrlParameter: Models.GetCallbackUrlParameters, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.WorkflowTriggerCallbackUrl>): Promise<Models.IntegrationAccountMapsListContentCallbackUrlResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        integrationAccountName,
        mapName,
        listContentCallbackUrlParameter,
        options
      },
      listContentCallbackUrlOperationSpec,
      callback) as Promise<Models.IntegrationAccountMapsListContentCallbackUrlResponse>;
  }

  /**
   * Gets a list of integration account maps.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.IntegrationAccountMapsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.IntegrationAccountMapsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.IntegrationAccountMapListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.IntegrationAccountMapListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.IntegrationAccountMapListResult>): Promise<Models.IntegrationAccountMapsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.IntegrationAccountMapsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/maps",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.integrationAccountName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.top,
    Parameters.filter
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.IntegrationAccountMapListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/maps/{mapName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.integrationAccountName,
    Parameters.mapName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.IntegrationAccountMap
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/maps/{mapName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.integrationAccountName,
    Parameters.mapName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "map",
    mapper: {
      ...Mappers.IntegrationAccountMap,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.IntegrationAccountMap
    },
    201: {
      bodyMapper: Mappers.IntegrationAccountMap
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/maps/{mapName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.integrationAccountName,
    Parameters.mapName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listContentCallbackUrlOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/maps/{mapName}/listContentCallbackUrl",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.integrationAccountName,
    Parameters.mapName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "listContentCallbackUrlParameter",
    mapper: {
      ...Mappers.GetCallbackUrlParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.WorkflowTriggerCallbackUrl
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.IntegrationAccountMapListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};