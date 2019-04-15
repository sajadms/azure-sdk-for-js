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
import * as Mappers from "../models/assetFiltersMappers";
import * as Parameters from "../models/parameters";
import { AzureMediaServicesContext } from "../azureMediaServicesContext";

/** Class representing a AssetFilters. */
export class AssetFilters {
  private readonly client: AzureMediaServicesContext;

  /**
   * Create a AssetFilters.
   * @param {AzureMediaServicesContext} client Reference to the service client.
   */
  constructor(client: AzureMediaServicesContext) {
    this.client = client;
  }

  /**
   * List Asset Filters associated with the specified Asset.
   * @summary List Asset Filters
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param assetName The Asset name.
   * @param [options] The optional parameters
   * @returns Promise<Models.AssetFiltersListResponse>
   */
  list(resourceGroupName: string, accountName: string, assetName: string, options?: msRest.RequestOptionsBase): Promise<Models.AssetFiltersListResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param assetName The Asset name.
   * @param callback The callback
   */
  list(resourceGroupName: string, accountName: string, assetName: string, callback: msRest.ServiceCallback<Models.AssetFilterCollection>): void;
  /**
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param assetName The Asset name.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, accountName: string, assetName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AssetFilterCollection>): void;
  list(resourceGroupName: string, accountName: string, assetName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AssetFilterCollection>, callback?: msRest.ServiceCallback<Models.AssetFilterCollection>): Promise<Models.AssetFiltersListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        assetName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.AssetFiltersListResponse>;
  }

  /**
   * Get the details of an Asset Filter associated with the specified Asset.
   * @summary Get an Asset Filter.
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param assetName The Asset name.
   * @param filterName The Asset Filter name
   * @param [options] The optional parameters
   * @returns Promise<Models.AssetFiltersGetResponse>
   */
  get(resourceGroupName: string, accountName: string, assetName: string, filterName: string, options?: msRest.RequestOptionsBase): Promise<Models.AssetFiltersGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param assetName The Asset name.
   * @param filterName The Asset Filter name
   * @param callback The callback
   */
  get(resourceGroupName: string, accountName: string, assetName: string, filterName: string, callback: msRest.ServiceCallback<Models.AssetFilter>): void;
  /**
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param assetName The Asset name.
   * @param filterName The Asset Filter name
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, accountName: string, assetName: string, filterName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AssetFilter>): void;
  get(resourceGroupName: string, accountName: string, assetName: string, filterName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AssetFilter>, callback?: msRest.ServiceCallback<Models.AssetFilter>): Promise<Models.AssetFiltersGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        assetName,
        filterName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.AssetFiltersGetResponse>;
  }

  /**
   * Creates or updates an Asset Filter associated with the specified Asset.
   * @summary Create or update an Asset Filter
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param assetName The Asset name.
   * @param filterName The Asset Filter name
   * @param parameters The request parameters
   * @param [options] The optional parameters
   * @returns Promise<Models.AssetFiltersCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, accountName: string, assetName: string, filterName: string, parameters: Models.AssetFilter, options?: msRest.RequestOptionsBase): Promise<Models.AssetFiltersCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param assetName The Asset name.
   * @param filterName The Asset Filter name
   * @param parameters The request parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, accountName: string, assetName: string, filterName: string, parameters: Models.AssetFilter, callback: msRest.ServiceCallback<Models.AssetFilter>): void;
  /**
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param assetName The Asset name.
   * @param filterName The Asset Filter name
   * @param parameters The request parameters
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, accountName: string, assetName: string, filterName: string, parameters: Models.AssetFilter, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AssetFilter>): void;
  createOrUpdate(resourceGroupName: string, accountName: string, assetName: string, filterName: string, parameters: Models.AssetFilter, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AssetFilter>, callback?: msRest.ServiceCallback<Models.AssetFilter>): Promise<Models.AssetFiltersCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        assetName,
        filterName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.AssetFiltersCreateOrUpdateResponse>;
  }

  /**
   * Deletes an Asset Filter associated with the specified Asset.
   * @summary Delete an Asset Filter.
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param assetName The Asset name.
   * @param filterName The Asset Filter name
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, accountName: string, assetName: string, filterName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param assetName The Asset name.
   * @param filterName The Asset Filter name
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, accountName: string, assetName: string, filterName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param assetName The Asset name.
   * @param filterName The Asset Filter name
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, accountName: string, assetName: string, filterName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, accountName: string, assetName: string, filterName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        assetName,
        filterName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Updates an existing Asset Filter associated with the specified Asset.
   * @summary Update an Asset Filter
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param assetName The Asset name.
   * @param filterName The Asset Filter name
   * @param parameters The request parameters
   * @param [options] The optional parameters
   * @returns Promise<Models.AssetFiltersUpdateResponse>
   */
  update(resourceGroupName: string, accountName: string, assetName: string, filterName: string, parameters: Models.AssetFilter, options?: msRest.RequestOptionsBase): Promise<Models.AssetFiltersUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param assetName The Asset name.
   * @param filterName The Asset Filter name
   * @param parameters The request parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, accountName: string, assetName: string, filterName: string, parameters: Models.AssetFilter, callback: msRest.ServiceCallback<Models.AssetFilter>): void;
  /**
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param assetName The Asset name.
   * @param filterName The Asset Filter name
   * @param parameters The request parameters
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, accountName: string, assetName: string, filterName: string, parameters: Models.AssetFilter, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AssetFilter>): void;
  update(resourceGroupName: string, accountName: string, assetName: string, filterName: string, parameters: Models.AssetFilter, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AssetFilter>, callback?: msRest.ServiceCallback<Models.AssetFilter>): Promise<Models.AssetFiltersUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        assetName,
        filterName,
        parameters,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.AssetFiltersUpdateResponse>;
  }

  /**
   * List Asset Filters associated with the specified Asset.
   * @summary List Asset Filters
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.AssetFiltersListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.AssetFiltersListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AssetFilterCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AssetFilterCollection>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AssetFilterCollection>, callback?: msRest.ServiceCallback<Models.AssetFilterCollection>): Promise<Models.AssetFiltersListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.AssetFiltersListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/assets/{assetName}/assetFilters",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.assetName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AssetFilterCollection
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/assets/{assetName}/assetFilters/{filterName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.assetName,
    Parameters.filterName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AssetFilter
    },
    404: {},
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/assets/{assetName}/assetFilters/{filterName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.assetName,
    Parameters.filterName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.AssetFilter,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.AssetFilter
    },
    201: {
      bodyMapper: Mappers.AssetFilter
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/assets/{assetName}/assetFilters/{filterName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.assetName,
    Parameters.filterName
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
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/assets/{assetName}/assetFilters/{filterName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.assetName,
    Parameters.filterName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.AssetFilter,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.AssetFilter
    },
    default: {
      bodyMapper: Mappers.ApiError
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
      bodyMapper: Mappers.AssetFilterCollection
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};