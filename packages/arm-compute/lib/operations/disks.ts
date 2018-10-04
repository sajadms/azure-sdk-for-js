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
import * as msRestAzure from "ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/disksMappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClientContext } from "../computeManagementClientContext";

/** Class representing a Disks. */
export class Disks {
  private readonly client: ComputeManagementClientContext;

  /**
   * Create a Disks.
   * @param {ComputeManagementClientContext} client Reference to the service client.
   */
  constructor(client: ComputeManagementClientContext) {
    this.client = client;
  }


  /**
   * Creates or updates a disk.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} diskName The name of the managed disk that is being created. The name can't be
   * changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _.
   * The maximum name length is 80 characters.
   *
   * @param {Disk} disk Disk object supplied in the body of the Put disk operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  createOrUpdate(resourceGroupName: string, diskName: string, disk: Models.Disk, options?: msRest.RequestOptionsBase): Promise<Models.DisksCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName, diskName, disk, options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.DisksCreateOrUpdateResponse>;
  }


  /**
   * Updates (patches) a disk.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} diskName The name of the managed disk that is being created. The name can't be
   * changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _.
   * The maximum name length is 80 characters.
   *
   * @param {DiskUpdate} disk Disk object supplied in the body of the Patch disk operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  update(resourceGroupName: string, diskName: string, disk: Models.DiskUpdate, options?: msRest.RequestOptionsBase): Promise<Models.DisksUpdateResponse> {
    return this.beginUpdate(resourceGroupName, diskName, disk, options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.DisksUpdateResponse>;
  }

  /**
   * Gets information about a disk.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} diskName The name of the managed disk that is being created. The name can't be
   * changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _.
   * The maximum name length is 80 characters.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  get(resourceGroupName: string, diskName: string): Promise<Models.DisksGetResponse>;
  get(resourceGroupName: string, diskName: string, options: msRest.RequestOptionsBase): Promise<Models.DisksGetResponse>;
  get(resourceGroupName: string, diskName: string, callback: msRest.ServiceCallback<Models.Disk>): void;
  get(resourceGroupName: string, diskName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Disk>): void;
  get(resourceGroupName: string, diskName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.Disk>): Promise<Models.DisksGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        diskName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.DisksGetResponse>;
  }


  /**
   * Deletes a disk.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} diskName The name of the managed disk that is being created. The name can't be
   * changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _.
   * The maximum name length is 80 characters.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  deleteMethod(resourceGroupName: string, diskName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName, diskName, options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Lists all the disks under a resource group.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  listByResourceGroup(resourceGroupName: string): Promise<Models.DisksListByResourceGroupResponse>;
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase): Promise<Models.DisksListByResourceGroupResponse>;
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.DiskList>): void;
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DiskList>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.DiskList>): Promise<Models.DisksListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.DisksListByResourceGroupResponse>;
  }

  /**
   * Lists all the disks under a subscription.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  list(): Promise<Models.DisksListResponse>;
  list(options: msRest.RequestOptionsBase): Promise<Models.DisksListResponse>;
  list(callback: msRest.ServiceCallback<Models.DiskList>): void;
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DiskList>): void;
  list(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.DiskList>): Promise<Models.DisksListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.DisksListResponse>;
  }


  /**
   * Grants access to a disk.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} diskName The name of the managed disk that is being created. The name can't be
   * changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _.
   * The maximum name length is 80 characters.
   *
   * @param {GrantAccessData} grantAccessData Access data object supplied in the body of the get disk
   * access operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  grantAccess(resourceGroupName: string, diskName: string, grantAccessData: Models.GrantAccessData, options?: msRest.RequestOptionsBase): Promise<Models.DisksGrantAccessResponse> {
    return this.beginGrantAccess(resourceGroupName, diskName, grantAccessData, options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.DisksGrantAccessResponse>;
  }


  /**
   * Revokes access to a disk.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} diskName The name of the managed disk that is being created. The name can't be
   * changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _.
   * The maximum name length is 80 characters.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  revokeAccess(resourceGroupName: string, diskName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginRevokeAccess(resourceGroupName, diskName, options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Creates or updates a disk.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} diskName The name of the managed disk that is being created. The name can't be
   * changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _.
   * The maximum name length is 80 characters.
   *
   * @param {Disk} disk Disk object supplied in the body of the Put disk operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  beginCreateOrUpdate(resourceGroupName: string, diskName: string, disk: Models.Disk, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        diskName,
        disk,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Updates (patches) a disk.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} diskName The name of the managed disk that is being created. The name can't be
   * changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _.
   * The maximum name length is 80 characters.
   *
   * @param {DiskUpdate} disk Disk object supplied in the body of the Patch disk operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  beginUpdate(resourceGroupName: string, diskName: string, disk: Models.DiskUpdate, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        diskName,
        disk,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * Deletes a disk.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} diskName The name of the managed disk that is being created. The name can't be
   * changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _.
   * The maximum name length is 80 characters.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  beginDeleteMethod(resourceGroupName: string, diskName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        diskName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Grants access to a disk.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} diskName The name of the managed disk that is being created. The name can't be
   * changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _.
   * The maximum name length is 80 characters.
   *
   * @param {GrantAccessData} grantAccessData Access data object supplied in the body of the get disk
   * access operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  beginGrantAccess(resourceGroupName: string, diskName: string, grantAccessData: Models.GrantAccessData, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        diskName,
        grantAccessData,
        options
      },
      beginGrantAccessOperationSpec,
      options);
  }

  /**
   * Revokes access to a disk.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} diskName The name of the managed disk that is being created. The name can't be
   * changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _.
   * The maximum name length is 80 characters.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  beginRevokeAccess(resourceGroupName: string, diskName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        diskName,
        options
      },
      beginRevokeAccessOperationSpec,
      options);
  }

  /**
   * Lists all the disks under a resource group.
   *
   * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  listByResourceGroupNext(nextPageLink: string): Promise<Models.DisksListByResourceGroupNextResponse>;
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.DisksListByResourceGroupNextResponse>;
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.DiskList>): void;
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DiskList>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.DiskList>): Promise<Models.DisksListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.DisksListByResourceGroupNextResponse>;
  }

  /**
   * Lists all the disks under a subscription.
   *
   * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  listNext(nextPageLink: string): Promise<Models.DisksListNextResponse>;
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.DisksListNextResponse>;
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.DiskList>): void;
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DiskList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.DiskList>): Promise<Models.DisksListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.DisksListNextResponse>;
  }

}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/disks/{diskName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.diskName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Disk
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/disks",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DiskList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Compute/disks",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DiskList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/disks/{diskName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.diskName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "disk",
    mapper: {
      ...Mappers.Disk,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Disk
    },
    202: {
      bodyMapper: Mappers.Disk
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/disks/{diskName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.diskName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "disk",
    mapper: {
      ...Mappers.DiskUpdate,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Disk
    },
    202: {
      bodyMapper: Mappers.Disk
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/disks/{diskName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.diskName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginGrantAccessOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/disks/{diskName}/beginGetAccess",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.diskName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "grantAccessData",
    mapper: {
      ...Mappers.GrantAccessData,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.AccessUri
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginRevokeAccessOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/disks/{diskName}/endGetAccess",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.diskName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.DiskList
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
      bodyMapper: Mappers.DiskList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};