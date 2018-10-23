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
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { StorageManagementClientContext } from "./storageManagementClientContext";


class StorageManagementClientJS extends StorageManagementClientContext {
  // Operation groups
  operations: operations.Operations;
  skus: operations.Skus;
  storageAccounts: operations.StorageAccounts;
  usages: operations.Usages;
  blobContainers: operations.BlobContainers;
  managementPolicies: operations.ManagementPolicies;

  /**
   * Initializes a new instance of the StorageManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId The ID of the target subscription.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.StorageManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.operations = new operations.Operations(this);
    this.skus = new operations.Skus(this);
    this.storageAccounts = new operations.StorageAccounts(this);
    this.usages = new operations.Usages(this);
    this.blobContainers = new operations.BlobContainers(this);
    this.managementPolicies = new operations.ManagementPolicies(this);
  }
}

// Operation Specifications

export {
  StorageManagementClientJS,
  StorageManagementClientContext,
  Models as StorageManagementModels,
  Mappers as StorageManagementMappers
};
export * from "./operations";
