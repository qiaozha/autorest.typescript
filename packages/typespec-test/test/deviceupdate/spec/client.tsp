import "./main.tsp";
import "@azure-tools/typespec-client-generator-core";

using Azure.ClientGenerator.Core;

namespace Customizations;

@@client(Azure.IoT.DeviceUpdate.DeviceUpdate,
  {
    name: "DeviceUpdate1Client",
    service: Azure.IoT.DeviceUpdate
  }
);

@@client(Azure.IoT.DeviceUpdate.DeviceManagement,
  {
    name: "DeviceManagementClient",
    service: Azure.IoT.DeviceUpdate
  }
);

@@client(Azure.IoT.DeviceUpdate.InstanceManagement,
  {
    name: "InstanceManagementClient",
    service: Azure.IoT.DeviceUpdate
  }
);
