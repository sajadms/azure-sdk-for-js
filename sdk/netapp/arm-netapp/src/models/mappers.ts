/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { CloudErrorMapper, BaseResourceMapper } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export const CloudError = CloudErrorMapper;
export const BaseResource = BaseResourceMapper;

export const OperationDisplay: msRest.CompositeMapper = {
  serializedName: "Operation_display",
  type: {
    name: "Composite",
    className: "OperationDisplay",
    modelProperties: {
      provider: {
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "resource",
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "operation",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Dimension: msRest.CompositeMapper = {
  serializedName: "Dimension",
  type: {
    name: "Composite",
    className: "Dimension",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MetricSpecification: msRest.CompositeMapper = {
  serializedName: "MetricSpecification",
  type: {
    name: "Composite",
    className: "MetricSpecification",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      displayDescription: {
        serializedName: "displayDescription",
        type: {
          name: "String"
        }
      },
      unit: {
        serializedName: "unit",
        type: {
          name: "String"
        }
      },
      dimensions: {
        serializedName: "dimensions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Dimension"
            }
          }
        }
      },
      aggregationType: {
        serializedName: "aggregationType",
        type: {
          name: "String"
        }
      },
      fillGapWithZero: {
        serializedName: "fillGapWithZero",
        type: {
          name: "Boolean"
        }
      },
      category: {
        serializedName: "category",
        type: {
          name: "String"
        }
      },
      resourceIdDimensionNameOverride: {
        serializedName: "resourceIdDimensionNameOverride",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServiceSpecification: msRest.CompositeMapper = {
  serializedName: "ServiceSpecification",
  type: {
    name: "Composite",
    className: "ServiceSpecification",
    modelProperties: {
      metricSpecifications: {
        serializedName: "metricSpecifications",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MetricSpecification"
            }
          }
        }
      }
    }
  }
};

export const Operation: msRest.CompositeMapper = {
  serializedName: "Operation",
  type: {
    name: "Composite",
    className: "Operation",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplay"
        }
      },
      origin: {
        serializedName: "origin",
        type: {
          name: "String"
        }
      },
      serviceSpecification: {
        serializedName: "properties.serviceSpecification",
        type: {
          name: "Composite",
          className: "ServiceSpecification"
        }
      }
    }
  }
};

export const ResourceNameAvailability: msRest.CompositeMapper = {
  serializedName: "ResourceNameAvailability",
  type: {
    name: "Composite",
    className: "ResourceNameAvailability",
    modelProperties: {
      isAvailable: {
        serializedName: "isAvailable",
        type: {
          name: "Boolean"
        }
      },
      reason: {
        serializedName: "reason",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceNameAvailabilityRequest: msRest.CompositeMapper = {
  serializedName: "ResourceNameAvailabilityRequest",
  type: {
    name: "Composite",
    className: "ResourceNameAvailabilityRequest",
    modelProperties: {
      name: {
        required: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        required: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      resourceGroup: {
        required: true,
        serializedName: "resourceGroup",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ActiveDirectory: msRest.CompositeMapper = {
  serializedName: "activeDirectory",
  type: {
    name: "Composite",
    className: "ActiveDirectory",
    modelProperties: {
      activeDirectoryId: {
        serializedName: "activeDirectoryId",
        type: {
          name: "String"
        }
      },
      username: {
        serializedName: "username",
        type: {
          name: "String"
        }
      },
      password: {
        serializedName: "password",
        type: {
          name: "String"
        }
      },
      domain: {
        serializedName: "domain",
        type: {
          name: "String"
        }
      },
      dns: {
        serializedName: "dns",
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        type: {
          name: "String"
        }
      },
      smbServerName: {
        serializedName: "smbServerName",
        type: {
          name: "String"
        }
      },
      organizationalUnit: {
        serializedName: "organizationalUnit",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const NetAppAccount: msRest.CompositeMapper = {
  serializedName: "netAppAccount",
  type: {
    name: "Composite",
    className: "NetAppAccount",
    modelProperties: {
      location: {
        required: true,
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Object"
        }
      },
      provisioningState: {
        readOnly: true,
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      },
      activeDirectories: {
        serializedName: "properties.activeDirectories",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ActiveDirectory"
            }
          }
        }
      }
    }
  }
};

export const NetAppAccountPatch: msRest.CompositeMapper = {
  serializedName: "netAppAccountPatch",
  type: {
    name: "Composite",
    className: "NetAppAccountPatch",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Object"
        }
      },
      provisioningState: {
        readOnly: true,
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      },
      activeDirectories: {
        serializedName: "properties.activeDirectories",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ActiveDirectory"
            }
          }
        }
      }
    }
  }
};

export const CapacityPool: msRest.CompositeMapper = {
  serializedName: "capacityPool",
  type: {
    name: "Composite",
    className: "CapacityPool",
    modelProperties: {
      location: {
        required: true,
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Object"
        }
      },
      poolId: {
        readOnly: true,
        serializedName: "properties.poolId",
        constraints: {
          MaxLength: 36,
          MinLength: 36,
          Pattern: /^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/
        },
        type: {
          name: "String"
        }
      },
      size: {
        required: true,
        serializedName: "properties.size",
        constraints: {
          InclusiveMaximum: 549755813888000,
          InclusiveMinimum: 4398046511104
        },
        type: {
          name: "Number"
        }
      },
      serviceLevel: {
        required: true,
        serializedName: "properties.serviceLevel",
        defaultValue: 'Premium',
        type: {
          name: "String"
        }
      },
      provisioningState: {
        readOnly: true,
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CapacityPoolPatch: msRest.CompositeMapper = {
  serializedName: "capacityPoolPatch",
  type: {
    name: "Composite",
    className: "CapacityPoolPatch",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Object"
        }
      },
      size: {
        serializedName: "properties.size",
        defaultValue: 4398046511104,
        constraints: {
          InclusiveMaximum: 549755813888000,
          InclusiveMinimum: 4398046511104
        },
        type: {
          name: "Number"
        }
      },
      serviceLevel: {
        serializedName: "properties.serviceLevel",
        defaultValue: 'Premium',
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ExportPolicyRule: msRest.CompositeMapper = {
  serializedName: "exportPolicyRule",
  type: {
    name: "Composite",
    className: "ExportPolicyRule",
    modelProperties: {
      ruleIndex: {
        serializedName: "ruleIndex",
        type: {
          name: "Number"
        }
      },
      unixReadOnly: {
        serializedName: "unixReadOnly",
        type: {
          name: "Boolean"
        }
      },
      unixReadWrite: {
        serializedName: "unixReadWrite",
        type: {
          name: "Boolean"
        }
      },
      cifs: {
        serializedName: "cifs",
        type: {
          name: "Boolean"
        }
      },
      nfsv3: {
        serializedName: "nfsv3",
        type: {
          name: "Boolean"
        }
      },
      nfsv4: {
        serializedName: "nfsv4",
        type: {
          name: "Boolean"
        }
      },
      allowedClients: {
        serializedName: "allowedClients",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VolumePropertiesExportPolicy: msRest.CompositeMapper = {
  serializedName: "volumeProperties_exportPolicy",
  type: {
    name: "Composite",
    className: "VolumePropertiesExportPolicy",
    modelProperties: {
      rules: {
        serializedName: "rules",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ExportPolicyRule"
            }
          }
        }
      }
    }
  }
};

export const Volume: msRest.CompositeMapper = {
  serializedName: "volume",
  type: {
    name: "Composite",
    className: "Volume",
    modelProperties: {
      location: {
        required: true,
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Object"
        }
      },
      fileSystemId: {
        readOnly: true,
        serializedName: "properties.fileSystemId",
        constraints: {
          MaxLength: 36,
          MinLength: 36,
          Pattern: /^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/
        },
        type: {
          name: "String"
        }
      },
      creationToken: {
        required: true,
        serializedName: "properties.creationToken",
        type: {
          name: "String"
        }
      },
      serviceLevel: {
        serializedName: "properties.serviceLevel",
        defaultValue: 'Premium',
        type: {
          name: "String"
        }
      },
      usageThreshold: {
        required: true,
        serializedName: "properties.usageThreshold",
        defaultValue: 107374182400,
        constraints: {
          InclusiveMaximum: 109951162777600,
          InclusiveMinimum: 107374182400
        },
        type: {
          name: "Number"
        }
      },
      exportPolicy: {
        serializedName: "properties.exportPolicy",
        type: {
          name: "Composite",
          className: "VolumePropertiesExportPolicy"
        }
      },
      protocolTypes: {
        serializedName: "properties.protocolTypes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      provisioningState: {
        readOnly: true,
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      },
      snapshotId: {
        serializedName: "properties.snapshotId",
        constraints: {
          MaxLength: 36,
          MinLength: 36,
          Pattern: /^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}|(\\?([^\/]*[\/])*)([^\/]+)$/
        },
        type: {
          name: "String"
        }
      },
      baremetalTenantId: {
        readOnly: true,
        serializedName: "properties.baremetalTenantId",
        constraints: {
          MaxLength: 36,
          MinLength: 36,
          Pattern: /^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/
        },
        type: {
          name: "String"
        }
      },
      subnetId: {
        required: true,
        serializedName: "properties.subnetId",
        type: {
          name: "String"
        }
      },
      mountTargets: {
        serializedName: "properties.mountTargets",
        type: {
          name: "Object"
        }
      }
    }
  }
};

export const VolumePatchPropertiesExportPolicy: msRest.CompositeMapper = {
  serializedName: "volumePatchProperties_exportPolicy",
  type: {
    name: "Composite",
    className: "VolumePatchPropertiesExportPolicy",
    modelProperties: {
      rules: {
        serializedName: "rules",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ExportPolicyRule"
            }
          }
        }
      }
    }
  }
};

export const VolumePatch: msRest.CompositeMapper = {
  serializedName: "volumePatch",
  type: {
    name: "Composite",
    className: "VolumePatch",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Object"
        }
      },
      serviceLevel: {
        serializedName: "properties.serviceLevel",
        defaultValue: 'Premium',
        type: {
          name: "String"
        }
      },
      usageThreshold: {
        serializedName: "properties.usageThreshold",
        defaultValue: 107374182400,
        constraints: {
          InclusiveMaximum: 109951162777600,
          InclusiveMinimum: 107374182400
        },
        type: {
          name: "Number"
        }
      },
      exportPolicy: {
        serializedName: "properties.exportPolicy",
        type: {
          name: "Composite",
          className: "VolumePatchPropertiesExportPolicy"
        }
      }
    }
  }
};

export const MountTarget: msRest.CompositeMapper = {
  serializedName: "mountTarget",
  type: {
    name: "Composite",
    className: "MountTarget",
    modelProperties: {
      location: {
        required: true,
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Object"
        }
      },
      mountTargetId: {
        readOnly: true,
        serializedName: "properties.mountTargetId",
        constraints: {
          MaxLength: 36,
          MinLength: 36,
          Pattern: /^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/
        },
        type: {
          name: "String"
        }
      },
      fileSystemId: {
        required: true,
        serializedName: "properties.fileSystemId",
        constraints: {
          MaxLength: 36,
          MinLength: 36,
          Pattern: /^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/
        },
        type: {
          name: "String"
        }
      },
      ipAddress: {
        readOnly: true,
        serializedName: "properties.ipAddress",
        type: {
          name: "String"
        }
      },
      subnet: {
        serializedName: "properties.subnet",
        type: {
          name: "String"
        }
      },
      startIp: {
        serializedName: "properties.startIp",
        type: {
          name: "String"
        }
      },
      endIp: {
        serializedName: "properties.endIp",
        type: {
          name: "String"
        }
      },
      gateway: {
        serializedName: "properties.gateway",
        type: {
          name: "String"
        }
      },
      netmask: {
        serializedName: "properties.netmask",
        type: {
          name: "String"
        }
      },
      smbServerFqdn: {
        serializedName: "properties.smbServerFqdn",
        type: {
          name: "String"
        }
      },
      provisioningState: {
        readOnly: true,
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Snapshot: msRest.CompositeMapper = {
  serializedName: "snapshot",
  type: {
    name: "Composite",
    className: "Snapshot",
    modelProperties: {
      location: {
        required: true,
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Object"
        }
      },
      snapshotId: {
        readOnly: true,
        serializedName: "properties.snapshotId",
        constraints: {
          MaxLength: 36,
          MinLength: 36,
          Pattern: /^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/
        },
        type: {
          name: "String"
        }
      },
      fileSystemId: {
        serializedName: "properties.fileSystemId",
        constraints: {
          MaxLength: 36,
          MinLength: 36,
          Pattern: /^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/
        },
        type: {
          name: "String"
        }
      },
      creationDate: {
        readOnly: true,
        serializedName: "properties.creationDate",
        type: {
          name: "DateTime"
        }
      },
      provisioningState: {
        readOnly: true,
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SnapshotPatch: msRest.CompositeMapper = {
  serializedName: "snapshotPatch",
  type: {
    name: "Composite",
    className: "SnapshotPatch",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Object"
        }
      }
    }
  }
};

export const OperationListResult: msRest.CompositeMapper = {
  serializedName: "OperationListResult",
  type: {
    name: "Composite",
    className: "OperationListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Operation"
            }
          }
        }
      }
    }
  }
};

export const NetAppAccountList: msRest.CompositeMapper = {
  serializedName: "netAppAccountList",
  type: {
    name: "Composite",
    className: "NetAppAccountList",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "NetAppAccount"
            }
          }
        }
      }
    }
  }
};

export const CapacityPoolList: msRest.CompositeMapper = {
  serializedName: "capacityPoolList",
  type: {
    name: "Composite",
    className: "CapacityPoolList",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CapacityPool"
            }
          }
        }
      }
    }
  }
};

export const VolumeList: msRest.CompositeMapper = {
  serializedName: "volumeList",
  type: {
    name: "Composite",
    className: "VolumeList",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Volume"
            }
          }
        }
      }
    }
  }
};

export const MountTargetList: msRest.CompositeMapper = {
  serializedName: "mountTargetList",
  type: {
    name: "Composite",
    className: "MountTargetList",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MountTarget"
            }
          }
        }
      }
    }
  }
};

export const SnapshotsList: msRest.CompositeMapper = {
  serializedName: "snapshotsList",
  type: {
    name: "Composite",
    className: "SnapshotsList",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Snapshot"
            }
          }
        }
      }
    }
  }
};
