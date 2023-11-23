// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface KqlScriptsResourceCollectionResponseOutput {
  value?: Array<KqlScriptResourceOutput>;
  nextLink?: string;
}

export interface KqlScriptResourceOutput {
  id?: string;
  name?: string;
  type?: string;
  /** Properties of sql script. */
  properties?: KqlScriptOutput;
}

export interface KqlScriptOutput {
  content?: KqlScriptContentOutput;
}

export interface KqlScriptContentOutput {
  query?: string;
  metadata?: KqlScriptContentMetadataOutput;
  currentConnection?: KqlScriptContentCurrentConnectionOutput;
}

export interface KqlScriptContentMetadataOutput {
  language?: string;
}

export interface KqlScriptContentCurrentConnectionOutput {
  name?: string;
  poolName?: string;
  databaseName?: string;
  type?: string;
}

/** Contains details when the response code indicates an error. */
export interface ErrorContractOutput {
  /** The error details. */
  error?: ErrorResponseOutput;
}

/** Common error response for all Azure Resource Manager APIs to return error details for failed operations. (This also follows the OData error response format.) */
export interface ErrorResponseOutput {
  /** The error code. */
  readonly code?: string;
  /** The error message. */
  readonly message?: string;
  /** The error target. */
  readonly target?: string;
  /** The error details. */
  readonly details?: Array<ErrorResponseOutput>;
  /** The error additional info. */
  readonly additionalInfo?: Array<ErrorAdditionalInfoOutput>;
}

/** The resource management error additional info. */
export interface ErrorAdditionalInfoOutput {
  /** The additional info type. */
  readonly type?: string;
  /** The additional info. */
  readonly info?: any;
}

export interface MetastoreRegistrationResponseOutput {
  /** Enumerates possible request statuses. */
  status?: "Running" | "Completed" | "Failed";
}

export interface MetastoreRequestSuccessResponseOutput {
  /** Enumerates possible Status of the resource. */
  status?: "Creating" | "Created" | "Failed";
}

export interface MetastoreUpdationResponseOutput {
  /** Enumerates possible request statuses. */
  status?: "Running" | "Completed" | "Failed";
}

/** A list of sparkconfiguration resources. */
export interface SparkConfigurationListResponseOutput {
  /** List of sparkconfigurations. */
  value: Array<SparkConfigurationResourceOutput>;
  /** The link to the next page of results, if any remaining results exist. */
  nextLink?: string;
}

/** Spark Configuration resource type. */
export interface SparkConfigurationResourceOutput extends SubResourceOutput {
  /** Properties of Spark Configuration. */
  properties: SparkConfigurationOutput;
}

/** SparkConfiguration Artifact information */
export interface SparkConfigurationOutput {
  /** Description about the SparkConfiguration. */
  description?: string;
  /** SparkConfiguration configs. */
  configs: Record<string, string>;
  /** Annotations for SparkConfiguration. */
  annotations?: Array<string>;
  /** additional Notes. */
  notes?: string;
  /** The identity that created the resource. */
  createdBy?: string;
  /** The timestamp of resource creation. */
  created?: string;
  /** SparkConfiguration configMergeRule. */
  configMergeRule?: Record<string, string>;
}

/** Azure Synapse nested resource, which belongs to a workspace. */
export interface SubResourceOutput extends AzureEntityResourceOutput {}

/** The resource model definition for an Azure Resource Manager resource with an etag. */
export interface AzureEntityResourceOutput extends ResourceOutput {
  /** Resource Etag. */
  readonly etag?: string;
}

/** Common fields that are returned in the response for all Azure Resource Manager resources */
export interface ResourceOutput {
  /** Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} */
  readonly id?: string;
  /** The name of the resource */
  readonly name?: string;
  /** The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts" */
  readonly type?: string;
}

/** The object that defines the structure of an Azure Synapse error response. */
export interface CloudErrorOutput {
  /** Error data */
  error: CloudErrorBodyOutput;
}

/** The object that defines the structure of an Azure Synapse error. */
export interface CloudErrorBodyOutput {
  /** Error code. */
  code: string;
  /** Error message. */
  message: string;
  /** Property name/path in request associated with error. */
  target?: string;
  /** Array with additional error details. */
  details?: Array<CloudErrorOutput>;
}

/** Collection of Big Data pool information */
export interface BigDataPoolResourceInfoListResultOutput {
  /** Link to the next page of results */
  nextLink?: string;
  /** List of Big Data pools */
  value?: Array<BigDataPoolResourceInfoOutput>;
}

/** A Big Data pool */
export interface BigDataPoolResourceInfoOutput extends TrackedResourceOutput {
  /** Big Data pool properties */
  properties?: BigDataPoolResourcePropertiesOutput;
}

/** Properties of a Big Data pool powered by Apache Spark */
export interface BigDataPoolResourcePropertiesOutput {
  /** The state of the Big Data pool. */
  provisioningState?: string;
  /** Auto-scaling properties */
  autoScale?: AutoScalePropertiesOutput;
  /** The time when the Big Data pool was created. */
  creationDate?: string;
  /** Auto-pausing properties */
  autoPause?: AutoPausePropertiesOutput;
  /** Whether compute isolation is required or not. */
  isComputeIsolationEnabled?: boolean;
  /** Whether session level packages enabled. */
  sessionLevelPackagesEnabled?: boolean;
  /** The cache size */
  cacheSize?: number;
  /** Dynamic Executor Allocation */
  dynamicExecutorAllocation?: DynamicExecutorAllocationOutput;
  /** The Spark events folder */
  sparkEventsFolder?: string;
  /** The number of nodes in the Big Data pool. */
  nodeCount?: number;
  /** Library version requirements */
  libraryRequirements?: LibraryRequirementsOutput;
  /** List of custom libraries/packages associated with the spark pool. */
  customLibraries?: Array<LibraryInfoOutput>;
  /** Spark configuration file to specify additional properties */
  sparkConfigProperties?: LibraryRequirementsOutput;
  /** The Apache Spark version. */
  sparkVersion?: string;
  /** The default folder where Spark logs will be written. */
  defaultSparkLogFolder?: string;
  /** The level of compute power that each node in the Big Data pool has. */
  nodeSize?:
    | "None"
    | "Small"
    | "Medium"
    | "Large"
    | "XLarge"
    | "XXLarge"
    | "XXXLarge";
  /** The kind of nodes that the Big Data pool provides. */
  nodeSizeFamily?: "None" | "MemoryOptimized";
  /** The time when the Big Data pool was updated successfully. */
  readonly lastSucceededTimestamp?: string;
}

/** Auto-scaling properties of a Big Data pool powered by Apache Spark */
export interface AutoScalePropertiesOutput {
  /** The minimum number of nodes the Big Data pool can support. */
  minNodeCount?: number;
  /** Whether automatic scaling is enabled for the Big Data pool. */
  enabled?: boolean;
  /** The maximum number of nodes the Big Data pool can support. */
  maxNodeCount?: number;
}

/** Auto-pausing properties of a Big Data pool powered by Apache Spark */
export interface AutoPausePropertiesOutput {
  /** Number of minutes of idle time before the Big Data pool is automatically paused. */
  delayInMinutes?: number;
  /** Whether auto-pausing is enabled for the Big Data pool. */
  enabled?: boolean;
}

/** Dynamic Executor Allocation Properties */
export interface DynamicExecutorAllocationOutput {
  /** Indicates whether Dynamic Executor Allocation is enabled or not. */
  enabled?: boolean;
}

/** Library requirements for a Big Data pool powered by Apache Spark */
export interface LibraryRequirementsOutput {
  /** The last update time of the library requirements file. */
  readonly time?: string;
  /** The library requirements. */
  content?: string;
  /** The filename of the library requirements file. */
  filename?: string;
}

/** Library/package information of a Big Data pool powered by Apache Spark */
export interface LibraryInfoOutput {
  /** Name of the library. */
  name?: string;
  /** Storage blob path of library. */
  path?: string;
  /** Storage blob container name. */
  containerName?: string;
  /** The last update time of the library. */
  uploadedTimestamp?: string;
  /** Type of the library. */
  type?: string;
  /** Provisioning status of the library/package. */
  readonly provisioningStatus?: string;
  /** Creator Id of the library/package. */
  readonly creatorId?: string;
}

/** The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location' */
export interface TrackedResourceOutput extends ResourceOutput {
  /** Resource tags. */
  tags?: Record<string, string>;
  /** The geo-location where the resource lives */
  location: string;
}

/** Data flow resource type. */
export interface DataFlowResourceOutput extends SubResourceOutput {
  /** Data flow properties. */
  properties: DataFlowOutput;
}

/** Azure Synapse nested object which contains a flow with data movements and transformations. */
export interface DataFlowOutputParent {
  /** The description of the data flow. */
  description?: string;
  /** List of tags that can be used for describing the data flow. */
  annotations?: Array<any>;
  /** The folder that this data flow is in. If not specified, Data flow will appear at the root level. */
  folder?: DataFlowFolderOutput;
  type: "DataFlow" | "MappingDataFlow" | "Flowlet";
}

/** The folder that this data flow is in. If not specified, Data flow will appear at the root level. */
export interface DataFlowFolderOutput {
  /** The name of the folder that this data flow is in. */
  name?: string;
}

/** The object that defines the structure of an Azure Synapse error response. */
export interface CloudErrorAutoGeneratedOutput {
  /** Error data */
  error: CloudErrorBodyAutoGeneratedOutput;
}

/** The object that defines the structure of an Azure Synapse error. */
export interface CloudErrorBodyAutoGeneratedOutput {
  /** Error code. */
  code: string;
  /** Error message. */
  message: string;
  /** Property name/path in request associated with error. */
  target?: string;
  /** Array with additional error details. */
  details?: Array<CloudErrorAutoGeneratedOutput>;
}

/** A list of data flow resources. */
export interface DataFlowListResponseOutput {
  /** List of data flows. */
  value: Array<DataFlowResourceOutput>;
  /** The link to the next page of results, if any remaining results exist. */
  nextLink?: string;
}

/** Azure Synapse nested object which serves as a compute resource for activities. */
export interface IntegrationRuntimeOutputParent
  extends Record<string, unknown> {
  /** Integration runtime description. */
  description?: string;
  type: "IntegrationRuntime" | "Managed" | "SelfHosted";
}

/** Response body structure for creating data flow debug session. */
export interface CreateDataFlowDebugSessionResponseOutput {
  /** The ID of data flow debug session. */
  sessionId?: string;
}

/** A list of active debug sessions. */
export interface QueryDataFlowDebugSessionsResponseOutput {
  /** Array with all active debug sessions. */
  value?: Array<DataFlowDebugSessionInfoOutput>;
  /** The link to the next page of results, if any remaining results exist. */
  nextLink?: string;
}

/** Data flow debug session info. */
export interface DataFlowDebugSessionInfoOutput
  extends Record<string, unknown> {
  /** The name of the data flow. */
  dataFlowName?: string;
  /** Compute type of the cluster. */
  computeType?: string;
  /** Core count of the cluster. */
  coreCount?: number;
  /** Node count of the cluster. (deprecated property) */
  nodeCount?: number;
  /** Attached integration runtime name of data flow debug session. */
  integrationRuntimeName?: string;
  /** The ID of data flow debug session. */
  sessionId?: string;
  /** Start time of data flow debug session. */
  startTime?: string;
  /** Compute type of the cluster. */
  timeToLiveInMinutes?: number;
  /** Last activity time of data flow debug session. */
  lastActivityTime?: string;
}

/** The Azure Data Factory nested object which identifies data within different data stores, such as tables, files, folders, and documents. */
export interface DatasetOutputParent extends Record<string, unknown> {
  /** Dataset description. */
  description?: string;
  /** Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement. */
  structure?: any;
  /** Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement. */
  schema?: any;
  /** Linked service reference. */
  linkedServiceName: LinkedServiceReferenceOutput;
  /** Parameters for dataset. */
  parameters?: Record<string, ParameterSpecificationOutput>;
  /** List of tags that can be used for describing the Dataset. */
  annotations?: Array<any>;
  /** The folder that this Dataset is in. If not specified, Dataset will appear at the root level. */
  folder?: DatasetFolderOutput;
  type:
    | "Dataset"
    | "AmazonS3Object"
    | "Avro"
    | "Excel"
    | "Parquet"
    | "DelimitedText"
    | "Json"
    | "Xml"
    | "Orc"
    | "Binary"
    | "AzureBlob"
    | "AzureTable"
    | "AzureSqlTable"
    | "AzureSqlMITable"
    | "AzureSqlDWTable"
    | "CassandraTable"
    | "CustomDataset"
    | "CosmosDbSqlApiCollection"
    | "DocumentDbCollection"
    | "DynamicsEntity"
    | "DynamicsCrmEntity"
    | "CommonDataServiceForAppsEntity"
    | "AzureDataLakeStoreFile"
    | "AzureBlobFSFile"
    | "Office365Table"
    | "FileShare"
    | "MongoDbCollection"
    | "MongoDbAtlasCollection"
    | "MongoDbV2Collection"
    | "CosmosDbMongoDbApiCollection"
    | "ODataResource"
    | "OracleTable"
    | "AmazonRdsForOracleTable"
    | "TeradataTable"
    | "AzureMySqlTable"
    | "AmazonRedshiftTable"
    | "Db2Table"
    | "RelationalTable"
    | "InformixTable"
    | "OdbcTable"
    | "MySqlTable"
    | "PostgreSqlTable"
    | "MicrosoftAccessTable"
    | "SalesforceObject"
    | "SalesforceServiceCloudObject"
    | "SybaseTable"
    | "SapBwCube"
    | "SapCloudForCustomerResource"
    | "SapEccResource"
    | "SapHanaTable"
    | "SapOpenHubTable"
    | "SqlServerTable"
    | "AmazonRdsForSqlServerTable"
    | "RestResource"
    | "SapTableResource"
    | "WebTable"
    | "AzureSearchIndex"
    | "HttpFile"
    | "AmazonMWSObject"
    | "AzurePostgreSqlTable"
    | "ConcurObject"
    | "CouchbaseTable"
    | "DrillTable"
    | "EloquaObject"
    | "GoogleBigQueryObject"
    | "GreenplumTable"
    | "HBaseObject"
    | "HiveObject"
    | "HubspotObject"
    | "ImpalaObject"
    | "JiraObject"
    | "MagentoObject"
    | "MariaDBTable"
    | "AzureMariaDBTable"
    | "MarketoObject"
    | "PaypalObject"
    | "PhoenixObject"
    | "PrestoObject"
    | "QuickBooksObject"
    | "ServiceNowObject"
    | "ShopifyObject"
    | "SparkObject"
    | "SquareObject"
    | "XeroObject"
    | "ZohoObject"
    | "NetezzaTable"
    | "VerticaTable"
    | "SalesforceMarketingCloudObject"
    | "ResponsysObject"
    | "DynamicsAXResource"
    | "OracleServiceCloudObject"
    | "AzureDataExplorerTable"
    | "GoogleAdWordsObject"
    | "SnowflakeTable"
    | "SharePointOnlineListResource"
    | "AzureDatabricksDeltaLakeDataset";
}

/** Linked service reference type. */
export interface LinkedServiceReferenceOutput {
  /** Linked service reference type. */
  type: "LinkedServiceReference";
  /** Reference LinkedService name. */
  referenceName: string;
  /** Arguments for LinkedService. */
  parameters?: Record<string, any>;
}

/** Definition of a single parameter for an entity. */
export interface ParameterSpecificationOutput {
  /** Parameter type. */
  type:
    | "Object"
    | "String"
    | "Int"
    | "Float"
    | "Bool"
    | "Array"
    | "SecureString";
  /** Default value of parameter. */
  defaultValue?: any;
}

/** The folder that this Dataset is in. If not specified, Dataset will appear at the root level. */
export interface DatasetFolderOutput {
  /** The name of the folder that this Dataset is in. */
  name?: string;
}

/** The Azure Synapse nested object which contains the information and credential which can be used to connect with related store or compute resource. */
export interface LinkedServiceOutputParent extends Record<string, unknown> {
  /** The integration runtime reference. */
  connectVia?: IntegrationRuntimeReferenceOutput;
  /** Linked service description. */
  description?: string;
  /** Parameters for linked service. */
  parameters?: Record<string, ParameterSpecificationOutput>;
  /** List of tags that can be used for describing the linked service. */
  annotations?: Array<any>;
  type:
    | "LinkedService"
    | "AzureStorage"
    | "AzureBlobStorage"
    | "AzureTableStorage"
    | "AzureSqlDW"
    | "SqlServer"
    | "AmazonRdsForSqlServer"
    | "AzureSqlDatabase"
    | "AzureSqlMI"
    | "AzureBatch"
    | "AzureKeyVault"
    | "CosmosDb"
    | "Dynamics"
    | "DynamicsCrm"
    | "CommonDataServiceForApps"
    | "HDInsight"
    | "FileServer"
    | "AzureFileStorage"
    | "GoogleCloudStorage"
    | "Oracle"
    | "AmazonRdsForOracle"
    | "AzureMySql"
    | "MySql"
    | "PostgreSql"
    | "Sybase"
    | "Db2"
    | "Teradata"
    | "AzureML"
    | "AzureMLService"
    | "Odbc"
    | "Informix"
    | "MicrosoftAccess"
    | "Hdfs"
    | "OData"
    | "Web"
    | "Cassandra"
    | "MongoDb"
    | "MongoDbAtlas"
    | "MongoDbV2"
    | "CosmosDbMongoDbApi"
    | "AzureDataLakeStore"
    | "AzureBlobFS"
    | "Office365"
    | "Salesforce"
    | "SalesforceServiceCloud"
    | "SapCloudForCustomer"
    | "SapEcc"
    | "SapOpenHub"
    | "RestService"
    | "AmazonS3"
    | "AmazonRedshift"
    | "CustomDataSource"
    | "AzureSearch"
    | "HttpServer"
    | "FtpServer"
    | "Sftp"
    | "SapBW"
    | "SapHana"
    | "AmazonMWS"
    | "AzurePostgreSql"
    | "Concur"
    | "Couchbase"
    | "Drill"
    | "Eloqua"
    | "GoogleBigQuery"
    | "Greenplum"
    | "HBase"
    | "Hive"
    | "Hubspot"
    | "Impala"
    | "Jira"
    | "Magento"
    | "MariaDB"
    | "AzureMariaDB"
    | "Marketo"
    | "Paypal"
    | "Phoenix"
    | "Presto"
    | "QuickBooks"
    | "ServiceNow"
    | "Shopify"
    | "Spark"
    | "Square"
    | "Xero"
    | "Zoho"
    | "Vertica"
    | "Netezza"
    | "SalesforceMarketingCloud"
    | "HDInsightOnDemand"
    | "AzureDataLakeAnalytics"
    | "AzureDatabricks"
    | "AzureDatabricksDeltaLake"
    | "Responsys"
    | "DynamicsAX"
    | "OracleServiceCloud"
    | "GoogleAdWords"
    | "SapTable"
    | "AzureDataExplorer"
    | "AzureFunction"
    | "Snowflake"
    | "SharePointOnlineList";
}

/** Integration runtime reference type. */
export interface IntegrationRuntimeReferenceOutput {
  /** Type of integration runtime. */
  type: "IntegrationRuntimeReference";
  /** Reference integration runtime name. */
  referenceName: string;
  /** Arguments for integration runtime. */
  parameters?: Record<string, any>;
}

/** Staging info for execute data flow activity. */
export interface DataFlowStagingInfoOutput {
  /** Staging linked service reference. */
  linkedService?: LinkedServiceReferenceOutput;
  /** Folder path for staging blob. */
  folderPath?: string;
}

/** Response body structure for starting data flow debug session. */
export interface AddDataFlowToDebugSessionResponseOutput {
  /** The ID of data flow debug job version. */
  jobVersion?: string;
}

/** Response body structure of data flow result for data preview, statistics or expression preview. */
export interface DataFlowDebugCommandResponseOutput {
  /** The run status of data preview, statistics or expression preview. */
  status?: string;
  /** The result data of data preview, statistics or expression preview. */
  data?: string;
}

/** A list of dataset resources. */
export interface DatasetListResponseOutput {
  /** List of datasets. */
  value: Array<DatasetResourceOutput>;
  /** The link to the next page of results, if any remaining results exist. */
  nextLink?: string;
}

/** Dataset resource type. */
export interface DatasetResourceOutput extends SubResourceOutput {
  /** Dataset properties. */
  properties: DatasetOutput;
}

export interface GitHubAccessTokenResponseOutput {
  gitHubAccessToken?: string;
}

/** A list of integration runtime resources. */
export interface IntegrationRuntimeListResponseOutput {
  /** List of integration runtimes. */
  value: Array<IntegrationRuntimeResourceOutput>;
  /** The link to the next page of results, if any remaining results exist. */
  nextLink?: string;
}

/** Integration runtime resource type. */
export interface IntegrationRuntimeResourceOutput extends SubResourceOutput {
  /** Integration runtime properties. */
  properties: IntegrationRuntimeOutput;
}

/** A list of Library resources. */
export interface LibraryListResponseOutput {
  /** List of Library. */
  value: Array<LibraryResourceOutput>;
  /** The link to the next page of results, if any remaining results exist. */
  nextLink?: string;
}

/** Library response details */
export interface LibraryResourceOutput extends SubResourceOutput {
  /** Library/package properties. */
  properties: LibraryResourcePropertiesOutput;
}

/** Library/package properties */
export interface LibraryResourcePropertiesOutput {
  /** Name of the library/package. */
  readonly name?: string;
  /** Location of library/package in storage account. */
  readonly path?: string;
  /** Container name of the library/package. */
  readonly containerName?: string;
  /** The last update time of the library/package. */
  readonly uploadedTimestamp?: string;
  /** Type of the library/package. */
  readonly type?: string;
  /** Provisioning status of the library/package. */
  readonly provisioningStatus?: string;
  /** Creator Id of the library/package. */
  readonly creatorId?: string;
}

/** Library resource info */
export interface LibraryResourceInfoOutput {
  /** Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} */
  readonly id?: string;
  /** record Id of the library/package. */
  readonly recordId?: number;
  /** Provisioning status of the library/package. */
  readonly state?: string;
  /** The creation time of the library/package. */
  readonly created?: string;
  /** The last updated time of the library/package. */
  readonly changed?: string;
  /** The type of the resource. E.g. LibraryArtifact */
  readonly type?: string;
  /** Name of the library/package. */
  readonly name?: string;
  /** Operation Id of the operation performed on library/package. */
  readonly operationId?: string;
  /** artifact Id of the library/package. */
  readonly artifactId?: string;
}

/** Operation status for the operation */
export interface OperationResultOutput {
  /** Operation status */
  readonly status?: string;
  /** Error data */
  error?: CloudErrorBodyAutoGeneratedOutput;
}

/** A list of linked service resources. */
export interface LinkedServiceListResponseOutput {
  /** List of linked services. */
  value: Array<LinkedServiceResourceOutput>;
  /** The link to the next page of results, if any remaining results exist. */
  nextLink?: string;
}

/** Linked service resource type. */
export interface LinkedServiceResourceOutput extends SubResourceOutput {
  /** Properties of linked service. */
  properties: LinkedServiceOutput;
}

/** A list of Notebook resources. */
export interface NotebookListResponseOutput {
  /** List of Notebooks. */
  value: Array<NotebookResourceOutput>;
  /** The link to the next page of results, if any remaining results exist. */
  nextLink?: string;
}

/** Notebook resource type. */
export interface NotebookResourceOutput {
  /** Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} */
  readonly id?: string;
  /** The name of the resource */
  name: string;
  /** The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts. */
  readonly type?: string;
  /** Resource Etag. */
  readonly etag?: string;
  /** Properties of Notebook. */
  properties: NotebookOutput;
}

/** Notebook. */
export interface NotebookOutput extends Record<string, unknown> {
  /** The description of the notebook. */
  description?: string;
  /** Big data pool reference. */
  bigDataPool?: BigDataPoolReferenceOutput;
  /** Session properties. */
  sessionProperties?: NotebookSessionPropertiesOutput;
  /** Notebook root-level metadata. */
  metadata: NotebookMetadataOutput;
  /** Notebook format (major number). Incremented between backwards incompatible changes to the notebook format. */
  nbformat: number;
  /** Notebook format (minor number). Incremented for backward compatible changes to the notebook format. */
  nbformat_minor: number;
  /** Array of cells of the current notebook. */
  cells: Array<NotebookCellOutput>;
  /** The folder that this notebook is in. If not specified, this notebook will appear at the root level. */
  folder?: NotebookFolderOutput;
}

/** Big data pool reference. */
export interface BigDataPoolReferenceOutput {
  /** Big data pool reference type. */
  type: "BigDataPoolReference";
  /** Reference big data pool name. */
  referenceName: string;
}

/** Session properties. */
export interface NotebookSessionPropertiesOutput {
  /** Amount of memory to use for the driver process. */
  driverMemory: string;
  /** Number of cores to use for the driver. */
  driverCores: number;
  /** Amount of memory to use per executor process. */
  executorMemory: string;
  /** Number of cores to use for each executor. */
  executorCores: number;
  /** Number of executors to launch for this session. */
  numExecutors: number;
}

/** Notebook root-level metadata. */
export interface NotebookMetadataOutput extends Record<string, unknown> {
  /** Kernel information. */
  kernelspec?: NotebookKernelSpecOutput;
  /** Language info. */
  language_info?: NotebookLanguageInfoOutput;
}

/** Kernel information. */
export interface NotebookKernelSpecOutput extends Record<string, unknown> {
  /** Name of the kernel specification. */
  name: string;
  /** Name to display in UI. */
  display_name: string;
}

/** Language info. */
export interface NotebookLanguageInfoOutput extends Record<string, unknown> {
  /** The programming language which this kernel runs. */
  name: string;
  /** The codemirror mode to use for code in this language. */
  codemirror_mode?: string;
}

/** Notebook cell. */
export interface NotebookCellOutput extends Record<string, unknown> {
  /** String identifying the type of cell. */
  cell_type: string;
  /** Cell-level metadata. */
  metadata: any;
  /** Contents of the cell, represented as an array of lines. */
  source: Array<string>;
  /** Attachments associated with the cell. */
  attachments?: any;
  /** Cell-level output items. */
  outputs?: Array<NotebookCellOutputItemOutput>;
}

/** An item of the notebook cell execution output. */
export interface NotebookCellOutputItemOutput {
  /** For output_type=stream, determines the name of stream (stdout / stderr). */
  name?: string;
  /** Execution sequence number. */
  execution_count?: number;
  /** Execution, display, or stream outputs. */
  output_type: "execute_result" | "display_data" | "stream" | "error";
  /** For output_type=stream, the stream's text output, represented as a string or an array of strings. */
  text?: any;
  /** Output data. Use MIME type as key, and content as value. */
  data?: any;
  /** Metadata for the output item. */
  metadata?: any;
}

/** The folder that this notebook is in. If not specified, this notebook will appear at the root level. */
export interface NotebookFolderOutput {
  /** The name of the folder that this notebook is in. */
  name?: string;
}

/** A list of pipeline resources. */
export interface PipelineListResponseOutput {
  /** List of pipelines. */
  value: Array<PipelineResourceOutput>;
  /** The link to the next page of results, if any remaining results exist. */
  nextLink?: string;
}

/** Pipeline resource type. */
export interface PipelineResourceOutput
  extends SubResourceOutput,
    Record<string, unknown> {
  /** Properties of the pipeline. */
  properties: PipelineOutput;
}

/** A workspace pipeline. */
export interface PipelineOutput {
  /** The description of the pipeline. */
  description?: string;
  /** List of activities in pipeline. */
  activities?: Array<ActivityOutput>;
  /** List of parameters for pipeline. */
  parameters?: Record<string, ParameterSpecificationOutput>;
  /** List of variables for pipeline. */
  variables?: Record<string, VariableSpecificationOutput>;
  /** The max number of concurrent runs for the pipeline. */
  concurrency?: number;
  /** List of tags that can be used for describing the Pipeline. */
  annotations?: Array<any>;
  /** Dimensions emitted by Pipeline. */
  runDimensions?: Record<string, any>;
  /** The folder that this Pipeline is in. If not specified, Pipeline will appear at the root level. */
  folder?: PipelineFolderOutput;
}

/** A pipeline activity. */
export interface ActivityOutputParent extends Record<string, unknown> {
  /** Activity name. */
  name: string;
  /** Activity description. */
  description?: string;
  /** Activity depends on condition. */
  dependsOn?: Array<ActivityDependencyOutput>;
  /** Activity user properties. */
  userProperties?: Array<UserPropertyOutput>;
  type:
    | "Activity"
    | "Container"
    | "Execution"
    | "Copy"
    | "HDInsightHive"
    | "HDInsightPig"
    | "HDInsightMapReduce"
    | "HDInsightStreaming"
    | "HDInsightSpark"
    | "ExecuteSSISPackage"
    | "Custom"
    | "SqlServerStoredProcedure"
    | "ExecutePipeline"
    | "Delete"
    | "AzureDataExplorerCommand"
    | "Lookup"
    | "WebActivity"
    | "GetMetadata"
    | "IfCondition"
    | "Switch"
    | "ForEach"
    | "AzureMLBatchExecution"
    | "AzureMLUpdateResource"
    | "AzureMLExecutePipeline"
    | "DataLakeAnalyticsU-SQL"
    | "Wait"
    | "Until"
    | "Validation"
    | "Filter"
    | "DatabricksNotebook"
    | "DatabricksSparkJar"
    | "DatabricksSparkPython"
    | "SetVariable"
    | "AppendVariable"
    | "AzureFunctionActivity"
    | "WebHook"
    | "ExecuteDataFlow"
    | "SynapseNotebook"
    | "SparkJob"
    | "SqlPoolStoredProcedure";
}

/** Activity dependency information. */
export interface ActivityDependencyOutput extends Record<string, unknown> {
  /** Activity name. */
  activity: string;
  /** Match-Condition for the dependency. */
  dependencyConditions: Array<"Succeeded" | "Failed" | "Skipped" | "Completed">;
}

/** User property. */
export interface UserPropertyOutput {
  /** User property name. */
  name: string;
  /** User property value. Type: string (or Expression with resultType string). */
  value: any;
}

/** Definition of a single variable for a Pipeline. */
export interface VariableSpecificationOutput {
  /** Variable type. */
  type: "String" | "Bool" | "Boolean" | "Array";
  /** Default value of variable. */
  defaultValue?: any;
}

/** The folder that this Pipeline is in. If not specified, Pipeline will appear at the root level. */
export interface PipelineFolderOutput {
  /** The name of the folder that this Pipeline is in. */
  name?: string;
}

/** Response body with a run identifier. */
export interface CreateRunResponseOutput {
  /** Identifier of a run. */
  runId: string;
}

/** A list pipeline runs. */
export interface PipelineRunsQueryResponseOutput {
  /** List of pipeline runs. */
  value: Array<PipelineRunOutput>;
  /** The continuation token for getting the next page of results, if any remaining results exist, null otherwise. */
  continuationToken?: string;
}

/** Information about a pipeline run. */
export interface PipelineRunOutput extends Record<string, unknown> {
  /** Identifier of a run. */
  readonly runId?: string;
  /** Identifier that correlates all the recovery runs of a pipeline run. */
  readonly runGroupId?: string;
  /** Indicates if the recovered pipeline run is the latest in its group. */
  readonly isLatest?: boolean;
  /** The pipeline name. */
  readonly pipelineName?: string;
  /** The full or partial list of parameter name, value pair used in the pipeline run. */
  readonly parameters?: Record<string, string>;
  /** Entity that started the pipeline run. */
  readonly invokedBy?: PipelineRunInvokedByOutput;
  /** The last updated timestamp for the pipeline run event in ISO8601 format. */
  readonly lastUpdated?: string;
  /** The start time of a pipeline run in ISO8601 format. */
  readonly runStart?: string;
  /** The end time of a pipeline run in ISO8601 format. */
  readonly runEnd?: string;
  /** The duration of a pipeline run. */
  readonly durationInMs?: number;
  /** The status of a pipeline run. */
  readonly status?: string;
  /** The message from a pipeline run. */
  readonly message?: string;
}

/** Provides entity name and id that started the pipeline run. */
export interface PipelineRunInvokedByOutput {
  /** Name of the entity that started the pipeline run. */
  readonly name?: string;
  /** The ID of the entity that started the run. */
  readonly id?: string;
  /** The type of the entity that started the run. */
  readonly invokedByType?: string;
}

/** A list activity runs. */
export interface ActivityRunsQueryResponseOutput {
  /** List of activity runs. */
  value: Array<ActivityRunOutput>;
  /** The continuation token for getting the next page of results, if any remaining results exist, null otherwise. */
  continuationToken?: string;
}

/** Information about an activity run in a pipeline. */
export interface ActivityRunOutput extends Record<string, unknown> {
  /** The name of the pipeline. */
  readonly pipelineName?: string;
  /** The id of the pipeline run. */
  readonly pipelineRunId?: string;
  /** The name of the activity. */
  readonly activityName?: string;
  /** The type of the activity. */
  readonly activityType?: string;
  /** The id of the activity run. */
  readonly activityRunId?: string;
  /** The name of the compute linked service. */
  readonly linkedServiceName?: string;
  /** The status of the activity run. */
  readonly status?: string;
  /** The start time of the activity run in 'ISO 8601' format. */
  readonly activityRunStart?: string;
  /** The end time of the activity run in 'ISO 8601' format. */
  readonly activityRunEnd?: string;
  /** The duration of the activity run. */
  readonly durationInMs?: number;
  /** The input for the activity. */
  readonly input?: any;
  /** The output for the activity. */
  readonly output?: any;
  /** The error if any from the activity run. */
  readonly error?: any;
}

/** A list of spark job definitions resources. */
export interface SparkJobDefinitionsListResponseOutput {
  /** List of spark job definitions. */
  value: Array<SparkJobDefinitionResourceOutput>;
  /** The link to the next page of results, if any remaining results exist. */
  nextLink?: string;
}

/** Spark job definition resource type. */
export interface SparkJobDefinitionResourceOutput extends SubResourceOutput {
  /** Properties of spark job definition. */
  properties: SparkJobDefinitionOutput;
}

/** Spark job definition. */
export interface SparkJobDefinitionOutput extends Record<string, unknown> {
  /** The description of the Spark job definition. */
  description?: string;
  /** Big data pool reference. */
  targetBigDataPool: BigDataPoolReferenceOutput;
  /** The required Spark version of the application. */
  requiredSparkVersion?: string;
  /** The language of the Spark application. */
  language?: string;
  /** The properties of the Spark job. */
  jobProperties: SparkJobPropertiesOutput;
  /** The folder that this Spark job definition is in. If not specified, this Spark job definition will appear at the root level. */
  folder?: SparkJobDefinitionFolderOutput;
}

/** The properties of the Spark job. */
export interface SparkJobPropertiesOutput extends Record<string, unknown> {
  /** The name of the job. */
  name?: string;
  /** File containing the application to execute. */
  file: string;
  /** Main class for Java/Scala application. */
  className?: string;
  /** Spark configuration properties. */
  conf?: any;
  /** Command line arguments for the application. */
  args?: Array<string>;
  /** Jars to be used in this job. */
  jars?: Array<string>;
  /** files to be used in this job. */
  files?: Array<string>;
  /** Archives to be used in this job. */
  archives?: Array<string>;
  /** Amount of memory to use for the driver process. */
  driverMemory: string;
  /** Number of cores to use for the driver. */
  driverCores: number;
  /** Amount of memory to use per executor process. */
  executorMemory: string;
  /** Number of cores to use for each executor. */
  executorCores: number;
  /** Number of executors to launch for this job. */
  numExecutors: number;
}

/** The folder that this Spark job definition is in. If not specified, this Spark job definition will appear at the root level. */
export interface SparkJobDefinitionFolderOutput {
  /** The name of the folder that this Spark job definition is in. */
  name?: string;
}

export interface SparkBatchJobOutput {
  livyInfo?: SparkBatchJobStateOutput;
  /** The batch name. */
  name?: string;
  /** The workspace name. */
  workspaceName?: string;
  /** The Spark pool name. */
  sparkPoolName?: string;
  /** The submitter name. */
  submitterName?: string;
  /** The submitter identifier. */
  submitterId?: string;
  /** The artifact identifier. */
  artifactId?: string;
  /** The job type. */
  jobType?: "SparkBatch" | "SparkSession";
  /** The Spark batch job result. */
  result?: "Uncertain" | "Succeeded" | "Failed" | "Cancelled";
  /** The scheduler information. */
  schedulerInfo?: SparkSchedulerOutput;
  /** The plugin information. */
  pluginInfo?: SparkServicePluginOutput;
  /** The error information. */
  errorInfo?: Array<SparkServiceErrorOutput>;
  /** The tags. */
  tags?: Record<string, string>;
  /** The session Id. */
  id: number;
  /** The application id of this session */
  appId?: string;
  /** The detailed application info. */
  appInfo?: Record<string, string>;
  /** The batch state */
  state?:
    | "not_started"
    | "starting"
    | "idle"
    | "busy"
    | "shutting_down"
    | "error"
    | "dead"
    | "killed"
    | "success"
    | "running"
    | "recovering";
  /** The log lines. */
  log?: Array<string>;
}

export interface SparkBatchJobStateOutput {
  /** the time that at which "not_started" livy state was first seen. */
  notStartedAt?: string;
  /** the time that at which "starting" livy state was first seen. */
  startingAt?: string;
  /** the time that at which "running" livy state was first seen. */
  runningAt?: string;
  /** time that at which "dead" livy state was first seen. */
  deadAt?: string;
  /** the time that at which "success" livy state was first seen. */
  successAt?: string;
  /** the time that at which "killed" livy state was first seen. */
  killedAt?: string;
  /** the time that at which "recovering" livy state was first seen. */
  recoveringAt?: string;
  /** the Spark job state. */
  currentState?: string;
  jobCreationRequest?: SparkRequestOutput;
}

export interface SparkRequestOutput {
  name?: string;
  file?: string;
  className?: string;
  args?: Array<string>;
  jars?: Array<string>;
  pyFiles?: Array<string>;
  files?: Array<string>;
  archives?: Array<string>;
  /** Dictionary of <string> */
  conf?: Record<string, string>;
  driverMemory?: string;
  driverCores?: number;
  executorMemory?: string;
  executorCores?: number;
  numExecutors?: number;
}

export interface SparkSchedulerOutput {
  submittedAt?: string;
  scheduledAt?: string;
  endedAt?: string;
  cancellationRequestedAt?: string;
  currentState?: "Queued" | "Scheduled" | "Ended";
}

export interface SparkServicePluginOutput {
  preparationStartedAt?: string;
  resourceAcquisitionStartedAt?: string;
  submissionStartedAt?: string;
  monitoringStartedAt?: string;
  cleanupStartedAt?: string;
  currentState?:
    | "Preparation"
    | "ResourceAcquisition"
    | "Queued"
    | "Submission"
    | "Monitoring"
    | "Cleanup"
    | "Ended";
}

export interface SparkServiceErrorOutput {
  message?: string;
  errorCode?: string;
  source?: "System" | "User" | "Unknown" | "Dependency";
}

/** List of SQL pools */
export interface SqlPoolInfoListResultOutput {
  /** Link to the next page of results */
  nextLink?: string;
  /** List of SQL pools */
  value?: Array<SqlPoolOutput>;
}

/** A SQL Analytics pool */
export interface SqlPoolOutput extends TrackedResourceOutput {
  /** SQL pool SKU */
  sku?: SkuOutput;
  /** SQL pool properties */
  properties?: SqlPoolResourcePropertiesOutput;
}

/** SQL pool SKU */
export interface SkuOutput {
  /** The service tier */
  tier?: string;
  /** The SKU name */
  name?: string;
  /** If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted. */
  capacity?: number;
}

/** Properties of a SQL Analytics pool */
export interface SqlPoolResourcePropertiesOutput {
  /** Maximum size in bytes */
  maxSizeBytes?: number;
  /** Collation mode */
  collation?: string;
  /** Source database to create from */
  sourceDatabaseId?: string;
  /** Backup database to restore from */
  recoverableDatabaseId?: string;
  /** Resource state */
  provisioningState?: string;
  /** Resource status */
  status?: string;
  /** Snapshot time to restore */
  restorePointInTime?: string;
  /**
   * Specifies the mode of sql pool creation.
   *
   * Default: regular sql pool creation.
   *
   * PointInTimeRestore: Creates a sql pool by restoring a point in time backup of an existing sql pool. sourceDatabaseId must be specified as the resource ID of the existing sql pool, and restorePointInTime must be specified.
   *
   * Recovery: Creates a sql pool by a geo-replicated backup. sourceDatabaseId  must be specified as the recoverableDatabaseId to restore.
   *
   * Restore: Creates a sql pool by restoring a backup of a deleted sql  pool. SourceDatabaseId should be the sql pool's original resource ID. SourceDatabaseId and sourceDatabaseDeletionDate must be specified.
   */
  createMode?: "Default" | "PointInTimeRestore" | "Recovery" | "Restore";
  /** Date the SQL pool was created */
  creationDate?: string;
}

/** A list of sql scripts resources. */
export interface SqlScriptsListResponseOutput {
  /** List of sql scripts. */
  value: Array<SqlScriptResourceOutput>;
  /** The link to the next page of results, if any remaining results exist. */
  nextLink?: string;
}

/** Sql Script resource type. */
export interface SqlScriptResourceOutput {
  /** Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} */
  readonly id?: string;
  /** The name of the resource */
  name: string;
  /** The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts. */
  readonly type?: string;
  /** Resource Etag. */
  readonly etag?: string;
  /** Properties of sql script. */
  properties: SqlScriptOutput;
}

/** SQL script. */
export interface SqlScriptOutput extends Record<string, unknown> {
  /** The description of the SQL script. */
  description?: string;
  /** The type of the SQL script. */
  type?: "SqlQuery";
  /** The content of the SQL script. */
  content: SqlScriptContentOutput;
  /** The folder that this SQL script is in. If not specified, this SQL script will appear at the root level. */
  folder?: SqlScriptFolderOutput;
}

/** The content of the SQL script. */
export interface SqlScriptContentOutput extends Record<string, unknown> {
  /** SQL query to execute. */
  query: string;
  /** The connection used to execute the SQL script. */
  currentConnection?: SqlConnectionOutput;
  /** Limit of results, '-1' for no limit. */
  resultLimit?: number;
  /** The metadata of the SQL script. */
  metadata?: SqlScriptMetadataOutput;
}

/** The connection used to execute the SQL script. */
export interface SqlConnectionOutput extends Record<string, unknown> {
  /** The type of the connection. */
  type?: "SqlOnDemand" | "SqlPool";
  /** The identifier of the connection. */
  name?: string;
  /** The associated SQL pool name (supported by SQL pool v3) */
  poolName?: string;
  /** The associated database name (supported by SQL pool v3) */
  databaseName?: string;
}

/** The metadata of the SQL script. */
export interface SqlScriptMetadataOutput extends Record<string, unknown> {
  /** The language of the SQL script. */
  language?: string;
}

/** The folder that this SQL script is in. If not specified, this SQL script will appear at the root level. */
export interface SqlScriptFolderOutput {
  /** The name of the folder that this SQL script is in. */
  name?: string;
}

/** A list of trigger resources. */
export interface TriggerListResponseOutput {
  /** List of triggers. */
  value: Array<TriggerResourceOutput>;
  /** The link to the next page of results, if any remaining results exist. */
  nextLink?: string;
}

/** Trigger resource type. */
export interface TriggerResourceOutput extends SubResourceOutput {
  /** Properties of the trigger. */
  properties: TriggerOutput;
}

/** Azure Synapse nested object which contains information about creating pipeline run */
export interface TriggerOutputParent extends Record<string, unknown> {
  /** Trigger description. */
  description?: string;
  /** Indicates if trigger is running or not. Updated when Start/Stop APIs are called on the Trigger. */
  readonly runtimeState?: "Started" | "Stopped" | "Disabled";
  /** List of tags that can be used for describing the trigger. */
  annotations?: Array<any>;
  type:
    | "Trigger"
    | "RerunTumblingWindowTrigger"
    | "MultiplePipelineTrigger"
    | "ScheduleTrigger"
    | "BlobTrigger"
    | "BlobEventsTrigger"
    | "CustomEventsTrigger"
    | "TumblingWindowTrigger"
    | "ChainingTrigger";
}

/** Defines the response of a trigger subscription operation. */
export interface TriggerSubscriptionOperationStatusOutput {
  /** Trigger name. */
  readonly triggerName?: string;
  /** Event Subscription Status. */
  readonly status?:
    | "Enabled"
    | "Provisioning"
    | "Deprovisioning"
    | "Disabled"
    | "Unknown";
}

/** A list of trigger runs. */
export interface TriggerRunsQueryResponseOutput {
  /** List of trigger runs. */
  value: Array<TriggerRunOutput>;
  /** The continuation token for getting the next page of results, if any remaining results exist, null otherwise. */
  continuationToken?: string;
}

/** Trigger runs. */
export interface TriggerRunOutput extends Record<string, unknown> {
  /** Trigger run id. */
  readonly triggerRunId?: string;
  /** Trigger name. */
  readonly triggerName?: string;
  /** Trigger type. */
  readonly triggerType?: string;
  /** Trigger run start time. */
  readonly triggerRunTimestamp?: string;
  /** Trigger run status. */
  readonly status?: "Succeeded" | "Failed" | "Inprogress";
  /** Trigger error message. */
  readonly message?: string;
  /** List of property name and value related to trigger run. Name, value pair depends on type of trigger. */
  readonly properties?: Record<string, string>;
  /** List of pipeline name and run Id triggered by the trigger run. */
  readonly triggeredPipelines?: Record<string, string>;
}

/** A workspace */
export interface WorkspaceOutput extends TrackedResourceOutput {
  /** Workspace resource properties */
  properties?: WorkspacePropertiesOutput;
  /** Identity of the workspace */
  identity?: ManagedIdentityOutput;
}

/** Workspace properties */
export interface WorkspacePropertiesOutput {
  /** Workspace default data lake storage account details */
  defaultDataLakeStorage?: DataLakeStorageAccountDetailsOutput;
  /** SQL administrator login password */
  sqlAdministratorLoginPassword?: string;
  /** Workspace managed resource group. The resource group name uniquely identifies the resource group within the user subscriptionId. The resource group name must be no longer than 90 characters long, and must be alphanumeric characters (Char.IsLetterOrDigit()) and '-', '_', '(', ')' and'.'. Note that the name cannot end with '.' */
  managedResourceGroupName?: string;
  /** Resource provisioning state */
  readonly provisioningState?: string;
  /** Login for workspace SQL active directory administrator */
  sqlAdministratorLogin?: string;
  /** Virtual Network profile */
  virtualNetworkProfile?: VirtualNetworkProfileOutput;
  /** Connectivity endpoints */
  connectivityEndpoints?: Record<string, string>;
  /** Setting this to 'default' will ensure that all compute for this workspace is in a virtual network managed on behalf of the user. */
  managedVirtualNetwork?: string;
  /** Private endpoint connections to the workspace */
  privateEndpointConnections?: Array<PrivateEndpointConnectionOutput>;
  /** The encryption details of the workspace */
  encryption?: EncryptionDetailsOutput;
  /**
   * The workspace unique identifier
   *
   * Value may contain a UUID
   */
  readonly workspaceUID?: string;
  /** Workspace level configs and feature flags */
  readonly extraProperties?: Record<string, any>;
  /** Managed Virtual Network Settings */
  managedVirtualNetworkSettings?: ManagedVirtualNetworkSettingsOutput;
  /** Git integration settings */
  workspaceRepositoryConfiguration?: WorkspaceRepositoryConfigurationOutput;
  /** Purview Configuration */
  purviewConfiguration?: PurviewConfigurationOutput;
  /** The ADLA resource ID. */
  readonly adlaResourceId?: string;
}

/** Details of the data lake storage account associated with the workspace */
export interface DataLakeStorageAccountDetailsOutput {
  /** Account URL */
  accountUrl?: string;
  /** Filesystem name */
  filesystem?: string;
}

/** Virtual Network Profile */
export interface VirtualNetworkProfileOutput {
  /** Subnet ID used for computes in workspace */
  computeSubnetId?: string;
}

/** A private endpoint connection */
export interface PrivateEndpointConnectionOutput extends ProxyResourceOutput {
  /** Private endpoint connection properties. */
  properties?: PrivateEndpointConnectionPropertiesOutput;
}

/** Properties of a private endpoint connection. */
export interface PrivateEndpointConnectionPropertiesOutput {
  /** The private endpoint which the connection belongs to. */
  privateEndpoint?: PrivateEndpointOutput;
  /** Connection state of the private endpoint connection. */
  privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStateOutput;
  /** Provisioning state of the private endpoint connection. */
  readonly provisioningState?: string;
}

/** Private endpoint details */
export interface PrivateEndpointOutput {
  /** Resource id of the private endpoint. */
  readonly id?: string;
}

/** Connection state details of the private endpoint */
export interface PrivateLinkServiceConnectionStateOutput {
  /** The private link service connection status. */
  status?: string;
  /** The private link service connection description. */
  description?: string;
  /** The actions required for private link service connection. */
  readonly actionsRequired?: string;
}

/** The resource model definition for a Azure Resource Manager proxy resource. It will not have tags and a location */
export interface ProxyResourceOutput extends ResourceOutput {}

/** Details of the encryption associated with the workspace */
export interface EncryptionDetailsOutput {
  /** Double Encryption enabled */
  readonly doubleEncryptionEnabled?: boolean;
  /** Customer Managed Key Details */
  cmk?: CustomerManagedKeyDetailsOutput;
}

/** Details of the customer managed key associated with the workspace */
export interface CustomerManagedKeyDetailsOutput {
  /** The customer managed key status on the workspace */
  readonly status?: string;
  /** The key object of the workspace */
  key?: WorkspaceKeyDetailsOutput;
}

/** Details of the customer managed key associated with the workspace */
export interface WorkspaceKeyDetailsOutput {
  /** Workspace Key sub-resource name */
  name?: string;
  /** Workspace Key sub-resource key vault url */
  keyVaultUrl?: string;
}

/** Managed Virtual Network Settings */
export interface ManagedVirtualNetworkSettingsOutput {
  /** Prevent Data Exfiltration */
  preventDataExfiltration?: boolean;
  /** Linked Access Check On Target Resource */
  linkedAccessCheckOnTargetResource?: boolean;
  /** Allowed Aad Tenant Ids For Linking */
  allowedAadTenantIdsForLinking?: Array<string>;
}

/** Git integration settings */
export interface WorkspaceRepositoryConfigurationOutput {
  /** Type of workspace repositoryID configuration. Example WorkspaceVSTSConfiguration, WorkspaceGitHubConfiguration */
  type?: string;
  /** GitHub Enterprise host name. For example: https://github.mydomain.com */
  hostName?: string;
  /** Account name */
  accountName?: string;
  /** VSTS project name */
  projectName?: string;
  /** Repository name */
  repositoryName?: string;
  /** Collaboration branch */
  collaborationBranch?: string;
  /** Root folder to use in the repository */
  rootFolder?: string;
  /** The last commit ID */
  lastCommitId?: string;
  /**
   * The VSTS tenant ID
   *
   * Value may contain a UUID
   */
  tenantId?: string;
  /** GitHub bring your own app client id */
  clientId?: string;
  /** GitHub bring your own app client secret information. */
  clientSecret?: GitHubClientSecretOutput;
}

/** Client secret information for factory's bring your own app repository configuration */
export interface GitHubClientSecretOutput {
  /** Bring your own app client secret AKV URL */
  byoaSecretAkvUrl?: string;
  /** Bring your own app client secret name in AKV */
  byoaSecretName?: string;
}

/** Purview Configuration */
export interface PurviewConfigurationOutput {
  /** Purview Resource ID */
  purviewResourceId?: string;
}

/** The workspace managed identity */
export interface ManagedIdentityOutput {
  /** The principal ID of the workspace managed identity */
  readonly principalId?: string;
  /**
   * The tenant ID of the workspace managed identity
   *
   * Value may contain a UUID
   */
  readonly tenantId?: string;
  /** The type of managed identity for the workspace */
  type?: "None" | "SystemAssigned";
}

/** Azure Synapse expression definition. */
export interface ExpressionOutput {
  /** Expression type. */
  type: "Expression";
  /** Expression value. */
  value: string;
}

/** Azure Synapse secure string definition. The string value will be masked with asterisks '*' during Get or List API calls. */
export interface SecureStringOutput extends SecretBaseOutputParent {
  /** Value of secure string. */
  value: string;
  type: "SecureString";
}

/** The base definition of a secret type. */
export interface SecretBaseOutputParent {
  type: "SecretBase" | "SecureString" | "AzureKeyVaultSecret";
}

/** Azure Key Vault secret reference. */
export interface AzureKeyVaultSecretReferenceOutput
  extends SecretBaseOutputParent {
  /** The Azure Key Vault linked service reference. */
  store: LinkedServiceReferenceOutput;
  /** The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string). */
  secretName: any;
  /** The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string). */
  secretVersion?: any;
  type: "AzureKeyVaultSecret";
}

/** Pipeline reference type. */
export interface PipelineReferenceOutput {
  /** Pipeline reference type. */
  type: "PipelineReference";
  /** Reference pipeline name. */
  referenceName: string;
  /** Reference name. */
  name?: string;
}

/** Pipeline that needs to be triggered with the given parameters. */
export interface TriggerPipelineReferenceOutput {
  /** Pipeline reference. */
  pipelineReference?: PipelineReferenceOutput;
  /** Pipeline parameters. */
  parameters?: Record<string, any>;
}

/** Dataset reference type. */
export interface DatasetReferenceOutput {
  /** Dataset reference type. */
  type: "DatasetReference";
  /** Reference dataset name. */
  referenceName: string;
  /** Arguments for dataset. */
  parameters?: Record<string, any>;
}

/** Data flow reference type. */
export interface DataFlowReferenceOutput extends Record<string, unknown> {
  /** Data flow reference type. */
  type: "DataFlowReference";
  /** Reference data flow name. */
  referenceName: string;
  /** Reference data flow parameters from dataset. */
  datasetParameters?: any;
  /** Data flow parameters */
  parameters?: Record<string, any>;
}

/** RerunTrigger resource type. */
export interface RerunTriggerResourceOutput extends SubResourceOutput {
  /** Properties of the rerun trigger. */
  properties: RerunTumblingWindowTriggerOutput;
}

/** Trigger that schedules pipeline reruns for all fixed time interval windows from a requested start time to requested end time. */
export interface RerunTumblingWindowTriggerOutput extends TriggerOutputParent {
  /** Rerun Trigger properties. */
  typeProperties: RerunTumblingWindowTriggerTypePropertiesOutput;
  type: "RerunTumblingWindowTrigger";
}

/** Rerun Trigger properties. */
export interface RerunTumblingWindowTriggerTypePropertiesOutput {
  /** The parent trigger reference. */
  parentTrigger: any;
  /** The start time for the time period for which restatement is initiated. Only UTC time is currently supported. */
  requestedStartTime: string;
  /** The end time for the time period for which restatement is initiated. Only UTC time is currently supported. */
  requestedEndTime: string;
  /** The max number of parallel time windows (ready for execution) for which a rerun is triggered. */
  rerunConcurrency: number;
}

/** Synapse notebook reference type. */
export interface SynapseNotebookReferenceOutput {
  /** Synapse notebook reference type. */
  type: "NotebookReference";
  /** Reference notebook name. */
  referenceName: string;
}

/** Synapse spark job reference type. */
export interface SynapseSparkJobReferenceOutput {
  /** Synapse spark job reference type. */
  type: "SparkJobDefinitionReference";
  /** Reference spark job name. */
  referenceName: string;
}

/** SQL pool reference type. */
export interface SqlPoolReferenceOutput {
  /** SQL pool reference type. */
  type: "SqlPoolReference";
  /** Reference SQL pool name. */
  referenceName: string;
}

/** Mapping data flow. */
export interface MappingDataFlowOutput extends DataFlowOutputParent {
  /** Mapping data flow type properties. */
  typeProperties?: MappingDataFlowTypePropertiesOutput;
  type: "MappingDataFlow";
}

/** Mapping data flow type properties. */
export interface MappingDataFlowTypePropertiesOutput {
  /** List of sources in data flow. */
  sources?: Array<DataFlowSourceOutput>;
  /** List of sinks in data flow. */
  sinks?: Array<DataFlowSinkOutput>;
  /** List of transformations in data flow. */
  transformations?: Array<TransformationOutput>;
  /** DataFlow script. */
  script?: string;
  /** Data flow script lines. */
  scriptLines?: Array<string>;
}

/** Transformation for data flow source. */
export interface DataFlowSourceOutput extends TransformationOutput {
  /** Schema linked service reference. */
  schemaLinkedService?: LinkedServiceReferenceOutput;
}

/** A data flow transformation. */
export interface TransformationOutput {
  /** Transformation name. */
  name: string;
  /** Transformation description. */
  description?: string;
  /** Dataset reference. */
  dataset?: DatasetReferenceOutput;
  /** Linked service reference. */
  linkedService?: LinkedServiceReferenceOutput;
  /** Flowlet Reference */
  flowlet?: DataFlowReferenceOutput;
}

/** Transformation for data flow sink. */
export interface DataFlowSinkOutput extends TransformationOutput {
  /** Schema linked service reference. */
  schemaLinkedService?: LinkedServiceReferenceOutput;
}

/** Data flow flowlet */
export interface FlowletOutput extends DataFlowOutputParent {
  /** Flowlet type properties. */
  typeProperties?: FlowletTypePropertiesOutput;
  type: "Flowlet";
}

/** Flowlet type properties. */
export interface FlowletTypePropertiesOutput {
  /** List of sources in Flowlet. */
  sources?: Array<DataFlowSourceOutput>;
  /** List of sinks in Flowlet. */
  sinks?: Array<DataFlowSinkOutput>;
  /** List of transformations in Flowlet. */
  transformations?: Array<TransformationOutput>;
  /** Flowlet script. */
  script?: string;
  /** Flowlet script lines. */
  scriptLines?: Array<string>;
}

/** Dataset location. */
export interface DatasetLocationOutputParent extends Record<string, unknown> {
  /** Specify the folder path of dataset. Type: string (or Expression with resultType string) */
  folderPath?: any;
  /** Specify the file name of dataset. Type: string (or Expression with resultType string). */
  fileName?: any;
  type:
    | "DatasetLocation"
    | "AzureBlobStorageLocation"
    | "AzureBlobFSLocation"
    | "AzureDataLakeStoreLocation"
    | "AmazonS3Location"
    | "FileServerLocation"
    | "AzureFileStorageLocation"
    | "GoogleCloudStorageLocation"
    | "FtpServerLocation"
    | "SftpLocation"
    | "HttpServerLocation"
    | "HdfsLocation";
}

/** The location of azure blob dataset. */
export interface AzureBlobStorageLocationOutput
  extends DatasetLocationOutputParent {
  /** Specify the container of azure blob. Type: string (or Expression with resultType string). */
  container?: any;
  type: "AzureBlobStorageLocation";
}

/** The location of azure blobFS dataset. */
export interface AzureBlobFSLocationOutput extends DatasetLocationOutputParent {
  /** Specify the fileSystem of azure blobFS. Type: string (or Expression with resultType string). */
  fileSystem?: any;
  type: "AzureBlobFSLocation";
}

/** The location of azure data lake store dataset. */
export interface AzureDataLakeStoreLocationOutput
  extends DatasetLocationOutputParent {
  type: "AzureDataLakeStoreLocation";
}

/** The location of amazon S3 dataset. */
export interface AmazonS3LocationOutput extends DatasetLocationOutputParent {
  /** Specify the bucketName of amazon S3. Type: string (or Expression with resultType string) */
  bucketName?: any;
  /** Specify the version of amazon S3. Type: string (or Expression with resultType string). */
  version?: any;
  type: "AmazonS3Location";
}

/** The location of file server dataset. */
export interface FileServerLocationOutput extends DatasetLocationOutputParent {
  type: "FileServerLocation";
}

/** The location of file server dataset. */
export interface AzureFileStorageLocationOutput
  extends DatasetLocationOutputParent {
  type: "AzureFileStorageLocation";
}

/** The location of Google Cloud Storage dataset. */
export interface GoogleCloudStorageLocationOutput
  extends DatasetLocationOutputParent {
  /** Specify the bucketName of Google Cloud Storage. Type: string (or Expression with resultType string) */
  bucketName?: any;
  /** Specify the version of Google Cloud Storage. Type: string (or Expression with resultType string). */
  version?: any;
  type: "GoogleCloudStorageLocation";
}

/** The location of ftp server dataset. */
export interface FtpServerLocationOutput extends DatasetLocationOutputParent {
  type: "FtpServerLocation";
}

/** The location of SFTP dataset. */
export interface SftpLocationOutput extends DatasetLocationOutputParent {
  type: "SftpLocation";
}

/** The location of http server. */
export interface HttpServerLocationOutput extends DatasetLocationOutputParent {
  /** Specify the relativeUrl of http server. Type: string (or Expression with resultType string) */
  relativeUrl?: any;
  type: "HttpServerLocation";
}

/** The location of HDFS. */
export interface HdfsLocationOutput extends DatasetLocationOutputParent {
  type: "HdfsLocation";
}

/** The format definition of a storage. */
export interface DatasetStorageFormatOutputParent
  extends Record<string, unknown> {
  /** Serializer. Type: string (or Expression with resultType string). */
  serializer?: any;
  /** Deserializer. Type: string (or Expression with resultType string). */
  deserializer?: any;
  type:
    | "DatasetStorageFormat"
    | "TextFormat"
    | "JsonFormat"
    | "AvroFormat"
    | "OrcFormat"
    | "ParquetFormat";
}

/** The data stored in text format. */
export interface TextFormatOutput extends DatasetStorageFormatOutputParent {
  /** The column delimiter. Type: string (or Expression with resultType string). */
  columnDelimiter?: any;
  /** The row delimiter. Type: string (or Expression with resultType string). */
  rowDelimiter?: any;
  /** The escape character. Type: string (or Expression with resultType string). */
  escapeChar?: any;
  /** The quote character. Type: string (or Expression with resultType string). */
  quoteChar?: any;
  /** The null value string. Type: string (or Expression with resultType string). */
  nullValue?: any;
  /** The code page name of the preferred encoding. If miss, the default value is ΓÇ£utf-8ΓÇ¥, unless BOM denotes another Unicode encoding. Refer to the ΓÇ£NameΓÇ¥ column of the table in the following link to set supported values: https://msdn.microsoft.com/library/system.text.encoding.aspx. Type: string (or Expression with resultType string). */
  encodingName?: any;
  /** Treat empty column values in the text file as null. The default value is true. Type: boolean (or Expression with resultType boolean). */
  treatEmptyAsNull?: any;
  /** The number of lines/rows to be skipped when parsing text files. The default value is 0. Type: integer (or Expression with resultType integer). */
  skipLineCount?: any;
  /** When used as input, treat the first row of data as headers. When used as output,write the headers into the output as the first row of data. The default value is false. Type: boolean (or Expression with resultType boolean). */
  firstRowAsHeader?: any;
  type: "TextFormat";
}

/** The data stored in JSON format. */
export interface JsonFormatOutput extends DatasetStorageFormatOutputParent {
  /** File pattern of JSON. To be more specific, the way of separating a collection of JSON objects. The default value is 'setOfObjects'. It is case-sensitive. */
  filePattern?: any;
  /** The character used to separate nesting levels. Default value is '.' (dot). Type: string (or Expression with resultType string). */
  nestingSeparator?: any;
  /** The code page name of the preferred encoding. If not provided, the default value is 'utf-8', unless the byte order mark (BOM) denotes another Unicode encoding. The full list of supported values can be found in the 'Name' column of the table of encodings in the following reference: https://go.microsoft.com/fwlink/?linkid=861078. Type: string (or Expression with resultType string). */
  encodingName?: any;
  /** The JSONPath of the JSON array element to be flattened. Example: "$.ArrayPath". Type: string (or Expression with resultType string). */
  jsonNodeReference?: any;
  /** The JSONPath definition for each column mapping with a customized column name to extract data from JSON file. For fields under root object, start with "$"; for fields inside the array chosen by jsonNodeReference property, start from the array element. Example: {"Column1": "$.Column1Path", "Column2": "Column2PathInArray"}. Type: object (or Expression with resultType object). */
  jsonPathDefinition?: any;
  type: "JsonFormat";
}

/** The data stored in Avro format. */
export interface AvroFormatOutput extends DatasetStorageFormatOutputParent {
  type: "AvroFormat";
}

/** The data stored in Optimized Row Columnar (ORC) format. */
export interface OrcFormatOutput extends DatasetStorageFormatOutputParent {
  type: "OrcFormat";
}

/** The data stored in Parquet format. */
export interface ParquetFormatOutput extends DatasetStorageFormatOutputParent {
  type: "ParquetFormat";
}

/** The compression method used on a dataset. */
export interface DatasetCompressionOutput extends Record<string, unknown> {
  /** Type of dataset compression. Type: string (or Expression with resultType string). */
  type: any;
  /** The dataset compression level. Type: string (or Expression with resultType string). */
  level?: any;
}

/** A single Amazon Simple Storage Service (S3) object or a set of S3 objects. */
export interface AmazonS3DatasetOutput extends DatasetOutputParent {
  /** Amazon S3 dataset properties. */
  typeProperties: AmazonS3DatasetTypePropertiesOutput;
  type: "AmazonS3Object";
}

/** Amazon S3 dataset properties. */
export interface AmazonS3DatasetTypePropertiesOutput {
  /** The name of the Amazon S3 bucket. Type: string (or Expression with resultType string). */
  bucketName: any;
  /** The key of the Amazon S3 object. Type: string (or Expression with resultType string). */
  key?: any;
  /** The prefix filter for the S3 object name. Type: string (or Expression with resultType string). */
  prefix?: any;
  /** The version for the S3 object. Type: string (or Expression with resultType string). */
  version?: any;
  /** The start of S3 object's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeStart?: any;
  /** The end of S3 object's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeEnd?: any;
  /** The format of files. */
  format?: DatasetStorageFormatOutput;
  /** The data compression method used for the Amazon S3 object. */
  compression?: DatasetCompressionOutput;
}

/** Avro dataset. */
export interface AvroDatasetOutput extends DatasetOutputParent {
  /** Avro dataset properties. */
  typeProperties?: AvroDatasetTypePropertiesOutput;
  type: "Avro";
}

/** Avro dataset properties. */
export interface AvroDatasetTypePropertiesOutput {
  /** The location of the avro storage. */
  location: DatasetLocationOutput;
  /** A string from AvroCompressionCodecEnum or an expression */
  avroCompressionCodec?: any;
  avroCompressionLevel?: number;
}

/** Excel dataset. */
export interface ExcelDatasetOutput extends DatasetOutputParent {
  /** Excel dataset properties. */
  typeProperties?: ExcelDatasetTypePropertiesOutput;
  type: "Excel";
}

/** Excel dataset properties. */
export interface ExcelDatasetTypePropertiesOutput {
  /** The location of the excel storage. */
  location: DatasetLocationOutput;
  /** The sheet of excel file. Type: string (or Expression with resultType string). */
  sheetName: any;
  /** The partial data of one sheet. Type: string (or Expression with resultType string). */
  range?: any;
  /** When used as input, treat the first row of data as headers. When used as output,write the headers into the output as the first row of data. The default value is false. Type: boolean (or Expression with resultType boolean). */
  firstRowAsHeader?: any;
  /** The data compression method used for the json dataset. */
  compression?: DatasetCompressionOutput;
  /** The null value string. Type: string (or Expression with resultType string). */
  nullValue?: any;
}

/** Parquet dataset. */
export interface ParquetDatasetOutput extends DatasetOutputParent {
  /** Parquet dataset properties. */
  typeProperties?: ParquetDatasetTypePropertiesOutput;
  type: "Parquet";
}

/** Parquet dataset properties. */
export interface ParquetDatasetTypePropertiesOutput {
  /** The location of the parquet storage. */
  location: DatasetLocationOutput;
  /** A string from ParquetCompressionCodecEnum or an expression */
  compressionCodec?: any;
}

/** Delimited text dataset. */
export interface DelimitedTextDatasetOutput extends DatasetOutputParent {
  /** Delimited text dataset properties. */
  typeProperties?: DelimitedTextDatasetTypePropertiesOutput;
  type: "DelimitedText";
}

/** DelimitedText dataset properties. */
export interface DelimitedTextDatasetTypePropertiesOutput {
  /** The location of the delimited text storage. */
  location: DatasetLocationOutput;
  /** The column delimiter. Type: string (or Expression with resultType string). */
  columnDelimiter?: any;
  /** The row delimiter. Type: string (or Expression with resultType string). */
  rowDelimiter?: any;
  /** The code page name of the preferred encoding. If miss, the default value is UTF-8, unless BOM denotes another Unicode encoding. Refer to the name column of the table in the following link to set supported values: https://msdn.microsoft.com/library/system.text.encoding.aspx. Type: string (or Expression with resultType string). */
  encodingName?: any;
  /** The data compressionCodec. Type: string (or Expression with resultType string). */
  compressionCodec?: any;
  /** The data compression method used for DelimitedText. */
  compressionLevel?: any;
  /** The quote character. Type: string (or Expression with resultType string). */
  quoteChar?: any;
  /** The escape character. Type: string (or Expression with resultType string). */
  escapeChar?: any;
  /** When used as input, treat the first row of data as headers. When used as output,write the headers into the output as the first row of data. The default value is false. Type: boolean (or Expression with resultType boolean). */
  firstRowAsHeader?: any;
  /** The null value string. Type: string (or Expression with resultType string). */
  nullValue?: any;
}

/** Json dataset. */
export interface JsonDatasetOutput extends DatasetOutputParent {
  /** Json dataset properties. */
  typeProperties?: JsonDatasetTypePropertiesOutput;
  type: "Json";
}

/** Json dataset properties. */
export interface JsonDatasetTypePropertiesOutput {
  /** The location of the json data storage. */
  location: DatasetLocationOutput;
  /** The code page name of the preferred encoding. If not specified, the default value is UTF-8, unless BOM denotes another Unicode encoding. Refer to the name column of the table in the following link to set supported values: https://msdn.microsoft.com/library/system.text.encoding.aspx. Type: string (or Expression with resultType string). */
  encodingName?: any;
  /** The data compression method used for the json dataset. */
  compression?: DatasetCompressionOutput;
}

/** Xml dataset. */
export interface XmlDatasetOutput extends DatasetOutputParent {
  /** Xml dataset properties. */
  typeProperties?: XmlDatasetTypePropertiesOutput;
  type: "Xml";
}

/** Xml dataset properties. */
export interface XmlDatasetTypePropertiesOutput {
  /** The location of the json data storage. */
  location: DatasetLocationOutput;
  /** The code page name of the preferred encoding. If not specified, the default value is UTF-8, unless BOM denotes another Unicode encoding. Refer to the name column of the table in the following link to set supported values: https://msdn.microsoft.com/library/system.text.encoding.aspx. Type: string (or Expression with resultType string). */
  encodingName?: any;
  /** The null value string. Type: string (or Expression with resultType string). */
  nullValue?: any;
  /** The data compression method used for the json dataset. */
  compression?: DatasetCompressionOutput;
}

/** ORC dataset. */
export interface OrcDatasetOutput extends DatasetOutputParent {
  /** ORC dataset properties. */
  typeProperties?: OrcDatasetTypePropertiesOutput;
  type: "Orc";
}

/** ORC dataset properties. */
export interface OrcDatasetTypePropertiesOutput {
  /** The location of the ORC data storage. */
  location: DatasetLocationOutput;
  /** The data orcCompressionCodec. Type: string (or Expression with resultType string). */
  orcCompressionCodec?: any;
}

/** Binary dataset. */
export interface BinaryDatasetOutput extends DatasetOutputParent {
  /** Binary dataset properties. */
  typeProperties?: BinaryDatasetTypePropertiesOutput;
  type: "Binary";
}

/** Binary dataset properties. */
export interface BinaryDatasetTypePropertiesOutput {
  /** The location of the Binary storage. */
  location: DatasetLocationOutput;
  /** The data compression method used for the binary dataset. */
  compression?: DatasetCompressionOutput;
}

/** The Azure Blob storage. */
export interface AzureBlobDatasetOutput extends DatasetOutputParent {
  /** Azure Blob dataset properties. */
  typeProperties?: AzureBlobDatasetTypePropertiesOutput;
  type: "AzureBlob";
}

/** Azure Blob dataset properties. */
export interface AzureBlobDatasetTypePropertiesOutput {
  /** The path of the Azure Blob storage. Type: string (or Expression with resultType string). */
  folderPath?: any;
  /** The root of blob path. Type: string (or Expression with resultType string). */
  tableRootLocation?: any;
  /** The name of the Azure Blob. Type: string (or Expression with resultType string). */
  fileName?: any;
  /** The start of Azure Blob's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeStart?: any;
  /** The end of Azure Blob's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeEnd?: any;
  /** The format of the Azure Blob storage. */
  format?: DatasetStorageFormatOutput;
  /** The data compression method used for the blob storage. */
  compression?: DatasetCompressionOutput;
}

/** The Azure Table storage dataset. */
export interface AzureTableDatasetOutput extends DatasetOutputParent {
  /** Azure Table dataset properties. */
  typeProperties: AzureTableDatasetTypePropertiesOutput;
  type: "AzureTable";
}

/** Azure Table dataset properties. */
export interface AzureTableDatasetTypePropertiesOutput {
  /** The table name of the Azure Table storage. Type: string (or Expression with resultType string). */
  tableName: any;
}

/** The Azure SQL Server database dataset. */
export interface AzureSqlTableDatasetOutput extends DatasetOutputParent {
  /** Azure SQL dataset properties. */
  typeProperties?: AzureSqlTableDatasetTypePropertiesOutput;
  type: "AzureSqlTable";
}

/** Azure SQL dataset properties. */
export interface AzureSqlTableDatasetTypePropertiesOutput {
  /** This property will be retired. Please consider using schema + table properties instead. */
  tableName?: any;
  /** The schema name of the Azure SQL database. Type: string (or Expression with resultType string). */
  schema?: any;
  /** The table name of the Azure SQL database. Type: string (or Expression with resultType string). */
  table?: any;
}

/** The Azure SQL Managed Instance dataset. */
export interface AzureSqlMITableDatasetOutput extends DatasetOutputParent {
  /** Azure SQL Managed Instance dataset properties. */
  typeProperties?: AzureSqlMITableDatasetTypePropertiesOutput;
  type: "AzureSqlMITable";
}

/** Azure SQL Managed Instance dataset properties. */
export interface AzureSqlMITableDatasetTypePropertiesOutput {
  /** This property will be retired. Please consider using schema + table properties instead. */
  tableName?: any;
  /** The schema name of the Azure SQL Managed Instance. Type: string (or Expression with resultType string). */
  schema?: any;
  /** The table name of the Azure SQL Managed Instance dataset. Type: string (or Expression with resultType string). */
  table?: any;
}

/** The Azure SQL Data Warehouse dataset. */
export interface AzureSqlDWTableDatasetOutput extends DatasetOutputParent {
  /** Azure SQL Data Warehouse dataset properties. */
  typeProperties?: AzureSqlDWTableDatasetTypePropertiesOutput;
  type: "AzureSqlDWTable";
}

/** Azure SQL Data Warehouse dataset properties. */
export interface AzureSqlDWTableDatasetTypePropertiesOutput {
  /** This property will be retired. Please consider using schema + table properties instead. */
  tableName?: any;
  /** The schema name of the Azure SQL Data Warehouse. Type: string (or Expression with resultType string). */
  schema?: any;
  /** The table name of the Azure SQL Data Warehouse. Type: string (or Expression with resultType string). */
  table?: any;
}

/** The Cassandra database dataset. */
export interface CassandraTableDatasetOutput extends DatasetOutputParent {
  /** Cassandra dataset properties. */
  typeProperties?: CassandraTableDatasetTypePropertiesOutput;
  type: "CassandraTable";
}

/** Cassandra dataset properties. */
export interface CassandraTableDatasetTypePropertiesOutput {
  /** The table name of the Cassandra database. Type: string (or Expression with resultType string). */
  tableName?: any;
  /** The keyspace of the Cassandra database. Type: string (or Expression with resultType string). */
  keyspace?: any;
}

/** The custom dataset. */
export interface CustomDatasetOutput extends DatasetOutputParent {
  /** Custom dataset properties. */
  typeProperties?: any;
  type: "CustomDataset";
}

/** Microsoft Azure CosmosDB (SQL API) Collection dataset. */
export interface CosmosDbSqlApiCollectionDatasetOutput
  extends DatasetOutputParent {
  /** CosmosDB (SQL API) Collection dataset properties. */
  typeProperties: CosmosDbSqlApiCollectionDatasetTypePropertiesOutput;
  type: "CosmosDbSqlApiCollection";
}

/** CosmosDB (SQL API) Collection dataset properties. */
export interface CosmosDbSqlApiCollectionDatasetTypePropertiesOutput {
  /** CosmosDB (SQL API) collection name. Type: string (or Expression with resultType string). */
  collectionName: any;
}

/** Microsoft Azure Document Database Collection dataset. */
export interface DocumentDbCollectionDatasetOutput extends DatasetOutputParent {
  /** DocumentDB Collection dataset properties. */
  typeProperties: DocumentDbCollectionDatasetTypePropertiesOutput;
  type: "DocumentDbCollection";
}

/** DocumentDB Collection dataset properties. */
export interface DocumentDbCollectionDatasetTypePropertiesOutput {
  /** Document Database collection name. Type: string (or Expression with resultType string). */
  collectionName: any;
}

/** The Dynamics entity dataset. */
export interface DynamicsEntityDatasetOutput extends DatasetOutputParent {
  /** Dynamics entity dataset properties. */
  typeProperties?: DynamicsEntityDatasetTypePropertiesOutput;
  type: "DynamicsEntity";
}

/** Dynamics entity dataset properties. */
export interface DynamicsEntityDatasetTypePropertiesOutput {
  /** The logical name of the entity. Type: string (or Expression with resultType string). */
  entityName?: any;
}

/** The Dynamics CRM entity dataset. */
export interface DynamicsCrmEntityDatasetOutput extends DatasetOutputParent {
  /** Dynamics CRM entity dataset properties. */
  typeProperties?: DynamicsCrmEntityDatasetTypePropertiesOutput;
  type: "DynamicsCrmEntity";
}

/** Dynamics CRM entity dataset properties. */
export interface DynamicsCrmEntityDatasetTypePropertiesOutput {
  /** The logical name of the entity. Type: string (or Expression with resultType string). */
  entityName?: any;
}

/** The Common Data Service for Apps entity dataset. */
export interface CommonDataServiceForAppsEntityDatasetOutput
  extends DatasetOutputParent {
  /** Common Data Service for Apps entity dataset properties. */
  typeProperties?: CommonDataServiceForAppsEntityDatasetTypePropertiesOutput;
  type: "CommonDataServiceForAppsEntity";
}

/** Common Data Service for Apps entity dataset properties. */
export interface CommonDataServiceForAppsEntityDatasetTypePropertiesOutput {
  /** The logical name of the entity. Type: string (or Expression with resultType string). */
  entityName?: any;
}

/** Azure Data Lake Store dataset. */
export interface AzureDataLakeStoreDatasetOutput extends DatasetOutputParent {
  /** Azure Data Lake Store dataset properties. */
  typeProperties?: AzureDataLakeStoreDatasetTypePropertiesOutput;
  type: "AzureDataLakeStoreFile";
}

/** Azure Data Lake Store dataset properties. */
export interface AzureDataLakeStoreDatasetTypePropertiesOutput {
  /** Path to the folder in the Azure Data Lake Store. Type: string (or Expression with resultType string). */
  folderPath?: any;
  /** The name of the file in the Azure Data Lake Store. Type: string (or Expression with resultType string). */
  fileName?: any;
  /** The format of the Data Lake Store. */
  format?: DatasetStorageFormatOutput;
  /** The data compression method used for the item(s) in the Azure Data Lake Store. */
  compression?: DatasetCompressionOutput;
}

/** The Azure Data Lake Storage Gen2 storage. */
export interface AzureBlobFSDatasetOutput extends DatasetOutputParent {
  /** Azure Data Lake Storage Gen2 dataset properties. */
  typeProperties?: AzureBlobFSDatasetTypePropertiesOutput;
  type: "AzureBlobFSFile";
}

/** Azure Data Lake Storage Gen2 dataset properties. */
export interface AzureBlobFSDatasetTypePropertiesOutput {
  /** The path of the Azure Data Lake Storage Gen2 storage. Type: string (or Expression with resultType string). */
  folderPath?: any;
  /** The name of the Azure Data Lake Storage Gen2. Type: string (or Expression with resultType string). */
  fileName?: any;
  /** The format of the Azure Data Lake Storage Gen2 storage. */
  format?: DatasetStorageFormatOutput;
  /** The data compression method used for the blob storage. */
  compression?: DatasetCompressionOutput;
}

/** The Office365 account. */
export interface Office365DatasetOutput extends DatasetOutputParent {
  /** Office365 dataset properties. */
  typeProperties: Office365DatasetTypePropertiesOutput;
  type: "Office365Table";
}

/** Office365 dataset properties. */
export interface Office365DatasetTypePropertiesOutput {
  /** Name of the dataset to extract from Office 365. Type: string (or Expression with resultType string). */
  tableName: any;
  /** A predicate expression that can be used to filter the specific rows to extract from Office 365. Type: string (or Expression with resultType string). */
  predicate?: any;
}

/** An on-premises file system dataset. */
export interface FileShareDatasetOutput extends DatasetOutputParent {
  /** On-premises file system dataset properties. */
  typeProperties?: FileShareDatasetTypePropertiesOutput;
  type: "FileShare";
}

/** On-premises file system dataset properties. */
export interface FileShareDatasetTypePropertiesOutput {
  /** The path of the on-premises file system. Type: string (or Expression with resultType string). */
  folderPath?: any;
  /** The name of the on-premises file system. Type: string (or Expression with resultType string). */
  fileName?: any;
  /** The start of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeStart?: any;
  /** The end of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeEnd?: any;
  /** The format of the files. */
  format?: DatasetStorageFormatOutput;
  /** Specify a filter to be used to select a subset of files in the folderPath rather than all files. Type: string (or Expression with resultType string). */
  fileFilter?: any;
  /** The data compression method used for the file system. */
  compression?: DatasetCompressionOutput;
}

/** The MongoDB database dataset. */
export interface MongoDbCollectionDatasetOutput extends DatasetOutputParent {
  /** MongoDB database dataset properties. */
  typeProperties: MongoDbCollectionDatasetTypePropertiesOutput;
  type: "MongoDbCollection";
}

/** MongoDB database dataset properties. */
export interface MongoDbCollectionDatasetTypePropertiesOutput {
  /** The table name of the MongoDB database. Type: string (or Expression with resultType string). */
  collectionName: any;
}

/** The MongoDB Atlas database dataset. */
export interface MongoDbAtlasCollectionDatasetOutput
  extends DatasetOutputParent {
  /** MongoDB Atlas database dataset properties. */
  typeProperties: MongoDbAtlasCollectionDatasetTypePropertiesOutput;
  type: "MongoDbAtlasCollection";
}

/** MongoDB Atlas database dataset properties. */
export interface MongoDbAtlasCollectionDatasetTypePropertiesOutput {
  /** The collection name of the MongoDB Atlas database. Type: string (or Expression with resultType string). */
  collection: any;
}

/** The MongoDB database dataset. */
export interface MongoDbV2CollectionDatasetOutput extends DatasetOutputParent {
  /** MongoDB database dataset properties. */
  typeProperties: MongoDbV2CollectionDatasetTypePropertiesOutput;
  type: "MongoDbV2Collection";
}

/** MongoDB database dataset properties. */
export interface MongoDbV2CollectionDatasetTypePropertiesOutput {
  /** The collection name of the MongoDB database. Type: string (or Expression with resultType string). */
  collection: any;
}

/** The CosmosDB (MongoDB API) database dataset. */
export interface CosmosDbMongoDbApiCollectionDatasetOutput
  extends DatasetOutputParent {
  /** CosmosDB (MongoDB API) database dataset properties. */
  typeProperties: CosmosDbMongoDbApiCollectionDatasetTypePropertiesOutput;
  type: "CosmosDbMongoDbApiCollection";
}

/** CosmosDB (MongoDB API) database dataset properties. */
export interface CosmosDbMongoDbApiCollectionDatasetTypePropertiesOutput {
  /** The collection name of the CosmosDB (MongoDB API) database. Type: string (or Expression with resultType string). */
  collection: any;
}

/** The Open Data Protocol (OData) resource dataset. */
export interface ODataResourceDatasetOutput extends DatasetOutputParent {
  /** OData dataset properties. */
  typeProperties?: ODataResourceDatasetTypePropertiesOutput;
  type: "ODataResource";
}

/** OData dataset properties. */
export interface ODataResourceDatasetTypePropertiesOutput {
  /** The OData resource path. Type: string (or Expression with resultType string). */
  path?: any;
}

/** The on-premises Oracle database dataset. */
export interface OracleTableDatasetOutput extends DatasetOutputParent {
  /** On-premises Oracle dataset properties. */
  typeProperties?: OracleTableDatasetTypePropertiesOutput;
  type: "OracleTable";
}

/** On-premises Oracle dataset properties. */
export interface OracleTableDatasetTypePropertiesOutput {
  /** This property will be retired. Please consider using schema + table properties instead. */
  tableName?: any;
  /** The schema name of the on-premises Oracle database. Type: string (or Expression with resultType string). */
  schema?: any;
  /** The table name of the on-premises Oracle database. Type: string (or Expression with resultType string). */
  table?: any;
}

/** The AmazonRdsForOracle database dataset. */
export interface AmazonRdsForOracleTableDatasetOutput
  extends DatasetOutputParent {
  /** AmazonRdsForOracle dataset properties. */
  typeProperties?: AmazonRdsForOracleTableDatasetTypePropertiesOutput;
  type: "AmazonRdsForOracleTable";
}

/** AmazonRdsForOracle dataset properties. */
export interface AmazonRdsForOracleTableDatasetTypePropertiesOutput {
  /** The schema name of the AmazonRdsForOracle database. Type: string (or Expression with resultType string). */
  schema?: any;
  /** The table name of the AmazonRdsForOracle database. Type: string (or Expression with resultType string). */
  table?: any;
}

/** The Teradata database dataset. */
export interface TeradataTableDatasetOutput extends DatasetOutputParent {
  /** Teradata dataset properties. */
  typeProperties?: TeradataTableDatasetTypePropertiesOutput;
  type: "TeradataTable";
}

/** Teradata dataset properties. */
export interface TeradataTableDatasetTypePropertiesOutput {
  /** The database name of Teradata. Type: string (or Expression with resultType string). */
  database?: any;
  /** The table name of Teradata. Type: string (or Expression with resultType string). */
  table?: any;
}

/** The Azure MySQL database dataset. */
export interface AzureMySqlTableDatasetOutput extends DatasetOutputParent {
  /** Azure MySQL database dataset properties. */
  typeProperties: AzureMySqlTableDatasetTypePropertiesOutput;
  type: "AzureMySqlTable";
}

/** Azure MySQL database dataset properties. */
export interface AzureMySqlTableDatasetTypePropertiesOutput {
  /** The Azure MySQL database table name. Type: string (or Expression with resultType string). */
  tableName?: any;
  /** The name of Azure MySQL database table. Type: string (or Expression with resultType string). */
  table?: any;
}

/** The Amazon Redshift table dataset. */
export interface AmazonRedshiftTableDatasetOutput extends DatasetOutputParent {
  /** Amazon Redshift table dataset properties. */
  typeProperties?: AmazonRedshiftTableDatasetTypePropertiesOutput;
  type: "AmazonRedshiftTable";
}

/** Amazon Redshift table dataset properties. */
export interface AmazonRedshiftTableDatasetTypePropertiesOutput {
  /** This property will be retired. Please consider using schema + table properties instead. */
  tableName?: any;
  /** The Amazon Redshift table name. Type: string (or Expression with resultType string). */
  table?: any;
  /** The Amazon Redshift schema name. Type: string (or Expression with resultType string). */
  schema?: any;
}

/** The Db2 table dataset. */
export interface Db2TableDatasetOutput extends DatasetOutputParent {
  /** Db2 table dataset properties. */
  typeProperties?: Db2TableDatasetTypePropertiesOutput;
  type: "Db2Table";
}

/** Db2 table dataset properties. */
export interface Db2TableDatasetTypePropertiesOutput {
  /** This property will be retired. Please consider using schema + table properties instead. */
  tableName?: any;
  /** The Db2 schema name. Type: string (or Expression with resultType string). */
  schema?: any;
  /** The Db2 table name. Type: string (or Expression with resultType string). */
  table?: any;
}

/** The relational table dataset. */
export interface RelationalTableDatasetOutput extends DatasetOutputParent {
  /** Relational table dataset properties. */
  typeProperties?: RelationalTableDatasetTypePropertiesOutput;
  type: "RelationalTable";
}

/** Relational table dataset properties. */
export interface RelationalTableDatasetTypePropertiesOutput {
  /** The relational table name. Type: string (or Expression with resultType string). */
  tableName?: any;
}

/** The Informix table dataset. */
export interface InformixTableDatasetOutput extends DatasetOutputParent {
  /** Informix table dataset properties. */
  typeProperties?: InformixTableDatasetTypePropertiesOutput;
  type: "InformixTable";
}

/** Informix table dataset properties. */
export interface InformixTableDatasetTypePropertiesOutput {
  /** The Informix table name. Type: string (or Expression with resultType string). */
  tableName?: any;
}

/** The ODBC table dataset. */
export interface OdbcTableDatasetOutput extends DatasetOutputParent {
  /** ODBC table dataset properties. */
  typeProperties?: OdbcTableDatasetTypePropertiesOutput;
  type: "OdbcTable";
}

/** ODBC table dataset properties. */
export interface OdbcTableDatasetTypePropertiesOutput {
  /** The ODBC table name. Type: string (or Expression with resultType string). */
  tableName?: any;
}

/** The MySQL table dataset. */
export interface MySqlTableDatasetOutput extends DatasetOutputParent {
  /** MySQL table dataset properties. */
  typeProperties?: MySqlTableDatasetTypePropertiesOutput;
  type: "MySqlTable";
}

/** MySql table dataset properties. */
export interface MySqlTableDatasetTypePropertiesOutput {
  /** The MySQL table name. Type: string (or Expression with resultType string). */
  tableName?: any;
}

/** The PostgreSQL table dataset. */
export interface PostgreSqlTableDatasetOutput extends DatasetOutputParent {
  /** PostgreSQL table dataset properties. */
  typeProperties?: PostgreSqlTableDatasetTypePropertiesOutput;
  type: "PostgreSqlTable";
}

/** PostgreSQL table dataset properties. */
export interface PostgreSqlTableDatasetTypePropertiesOutput {
  /** This property will be retired. Please consider using schema + table properties instead. */
  tableName?: any;
  /** The PostgreSQL table name. Type: string (or Expression with resultType string). */
  table?: any;
  /** The PostgreSQL schema name. Type: string (or Expression with resultType string). */
  schema?: any;
}

/** The Microsoft Access table dataset. */
export interface MicrosoftAccessTableDatasetOutput extends DatasetOutputParent {
  /** Microsoft Access table dataset properties. */
  typeProperties?: MicrosoftAccessTableDatasetTypePropertiesOutput;
  type: "MicrosoftAccessTable";
}

/** Microsoft Access table dataset properties. */
export interface MicrosoftAccessTableDatasetTypePropertiesOutput {
  /** The Microsoft Access table name. Type: string (or Expression with resultType string). */
  tableName?: any;
}

/** The Salesforce object dataset. */
export interface SalesforceObjectDatasetOutput extends DatasetOutputParent {
  /** Salesforce object dataset properties. */
  typeProperties?: SalesforceObjectDatasetTypePropertiesOutput;
  type: "SalesforceObject";
}

/** Salesforce object dataset properties. */
export interface SalesforceObjectDatasetTypePropertiesOutput {
  /** The Salesforce object API name. Type: string (or Expression with resultType string). */
  objectApiName?: any;
}

/** The Salesforce Service Cloud object dataset. */
export interface SalesforceServiceCloudObjectDatasetOutput
  extends DatasetOutputParent {
  /** Salesforce Service Cloud object dataset properties. */
  typeProperties?: SalesforceServiceCloudObjectDatasetTypePropertiesOutput;
  type: "SalesforceServiceCloudObject";
}

/** Salesforce Service Cloud object dataset properties. */
export interface SalesforceServiceCloudObjectDatasetTypePropertiesOutput {
  /** The Salesforce Service Cloud object API name. Type: string (or Expression with resultType string). */
  objectApiName?: any;
}

/** The Sybase table dataset. */
export interface SybaseTableDatasetOutput extends DatasetOutputParent {
  /** Sybase table dataset properties. */
  typeProperties?: SybaseTableDatasetTypePropertiesOutput;
  type: "SybaseTable";
}

/** Sybase table dataset properties. */
export interface SybaseTableDatasetTypePropertiesOutput {
  /** The Sybase table name. Type: string (or Expression with resultType string). */
  tableName?: any;
}

/** The SAP BW cube dataset. */
export interface SapBwCubeDatasetOutput extends DatasetOutputParent {
  type: "SapBwCube";
}

/** The path of the SAP Cloud for Customer OData entity. */
export interface SapCloudForCustomerResourceDatasetOutput
  extends DatasetOutputParent {
  /** SAP Cloud For Customer OData resource dataset properties. */
  typeProperties: SapCloudForCustomerResourceDatasetTypePropertiesOutput;
  type: "SapCloudForCustomerResource";
}

/** Sap Cloud For Customer OData resource dataset properties. */
export interface SapCloudForCustomerResourceDatasetTypePropertiesOutput {
  /** The path of the SAP Cloud for Customer OData entity. Type: string (or Expression with resultType string). */
  path: any;
}

/** The path of the SAP ECC OData entity. */
export interface SapEccResourceDatasetOutput extends DatasetOutputParent {
  /** SAP ECC OData resource dataset properties. */
  typeProperties: SapEccResourceDatasetTypePropertiesOutput;
  type: "SapEccResource";
}

/** Sap ECC OData resource dataset properties. */
export interface SapEccResourceDatasetTypePropertiesOutput {
  /** The path of the SAP ECC OData entity. Type: string (or Expression with resultType string). */
  path: any;
}

/** SAP HANA Table properties. */
export interface SapHanaTableDatasetOutput extends DatasetOutputParent {
  /** SAP HANA Table properties. */
  typeProperties?: SapHanaTableDatasetTypePropertiesOutput;
  type: "SapHanaTable";
}

/** SAP HANA Table properties. */
export interface SapHanaTableDatasetTypePropertiesOutput {
  /** The schema name of SAP HANA. Type: string (or Expression with resultType string). */
  schema?: any;
  /** The table name of SAP HANA. Type: string (or Expression with resultType string). */
  table?: any;
}

/** Sap Business Warehouse Open Hub Destination Table properties. */
export interface SapOpenHubTableDatasetOutput extends DatasetOutputParent {
  /** Sap Business Warehouse Open Hub Destination Table properties. */
  typeProperties: SapOpenHubTableDatasetTypePropertiesOutput;
  type: "SapOpenHubTable";
}

/** Sap Business Warehouse Open Hub Destination Table properties. */
export interface SapOpenHubTableDatasetTypePropertiesOutput {
  /** The name of the Open Hub Destination with destination type as Database Table. Type: string (or Expression with resultType string). */
  openHubDestinationName: any;
  /** Whether to exclude the records of the last request. The default value is true. Type: boolean (or Expression with resultType boolean). */
  excludeLastRequest?: any;
  /** The ID of request for delta loading. Once it is set, only data with requestId larger than the value of this property will be retrieved. The default value is 0. Type: integer (or Expression with resultType integer ). */
  baseRequestId?: any;
}

/** The on-premises SQL Server dataset. */
export interface SqlServerTableDatasetOutput extends DatasetOutputParent {
  /** On-premises SQL Server dataset properties. */
  typeProperties?: SqlServerTableDatasetTypePropertiesOutput;
  type: "SqlServerTable";
}

/** On-premises SQL Server dataset properties. */
export interface SqlServerTableDatasetTypePropertiesOutput {
  /** This property will be retired. Please consider using schema + table properties instead. */
  tableName?: any;
  /** The schema name of the SQL Server dataset. Type: string (or Expression with resultType string). */
  schema?: any;
  /** The table name of the SQL Server dataset. Type: string (or Expression with resultType string). */
  table?: any;
}

/** The Amazon RDS for SQL Server dataset. */
export interface AmazonRdsForSqlServerTableDatasetOutput
  extends DatasetOutputParent {
  /** The Amazon RDS for SQL Server dataset properties. */
  typeProperties?: AmazonRdsForSqlServerTableDatasetTypePropertiesOutput;
  type: "AmazonRdsForSqlServerTable";
}

/** The Amazon RDS for SQL Server dataset properties. */
export interface AmazonRdsForSqlServerTableDatasetTypePropertiesOutput {
  /** The schema name of the SQL Server dataset. Type: string (or Expression with resultType string). */
  schema?: any;
  /** The table name of the SQL Server dataset. Type: string (or Expression with resultType string). */
  table?: any;
}

/** A Rest service dataset. */
export interface RestResourceDatasetOutput extends DatasetOutputParent {
  /** Properties specific to this dataset type. */
  typeProperties?: RestResourceDatasetTypePropertiesOutput;
  type: "RestResource";
}

/** Properties specific to this dataset type. */
export interface RestResourceDatasetTypePropertiesOutput {
  /** The relative URL to the resource that the RESTful API provides. Type: string (or Expression with resultType string). */
  relativeUrl?: any;
  /** The HTTP method used to call the RESTful API. The default is GET. Type: string (or Expression with resultType string). */
  requestMethod?: any;
  /** The HTTP request body to the RESTful API if requestMethod is POST. Type: string (or Expression with resultType string). */
  requestBody?: any;
  /** The additional HTTP headers in the request to the RESTful API. Type: string (or Expression with resultType string). */
  additionalHeaders?: any;
  /** The pagination rules to compose next page requests. Type: string (or Expression with resultType string). */
  paginationRules?: any;
}

/** SAP Table Resource properties. */
export interface SapTableResourceDatasetOutput extends DatasetOutputParent {
  /** SAP Table Resource properties. */
  typeProperties: SapTableResourceDatasetTypePropertiesOutput;
  type: "SapTableResource";
}

/** SAP Table Resource properties. */
export interface SapTableResourceDatasetTypePropertiesOutput {
  /** The name of the SAP Table. Type: string (or Expression with resultType string). */
  tableName: any;
}

/** The dataset points to a HTML table in the web page. */
export interface WebTableDatasetOutput extends DatasetOutputParent {
  /** Web table dataset properties. */
  typeProperties: WebTableDatasetTypePropertiesOutput;
  type: "WebTable";
}

/** Web table dataset properties. */
export interface WebTableDatasetTypePropertiesOutput {
  /** The zero-based index of the table in the web page. Type: integer (or Expression with resultType integer), minimum: 0. */
  index: any;
  /** The relative URL to the web page from the linked service URL. Type: string (or Expression with resultType string). */
  path?: any;
}

/** The Azure Search Index. */
export interface AzureSearchIndexDatasetOutput extends DatasetOutputParent {
  /** Properties specific to this dataset type. */
  typeProperties: AzureSearchIndexDatasetTypePropertiesOutput;
  type: "AzureSearchIndex";
}

/** Properties specific to this dataset type. */
export interface AzureSearchIndexDatasetTypePropertiesOutput {
  /** The name of the Azure Search Index. Type: string (or Expression with resultType string). */
  indexName: any;
}

/** A file in an HTTP web server. */
export interface HttpDatasetOutput extends DatasetOutputParent {
  /** Properties specific to this dataset type. */
  typeProperties?: HttpDatasetTypePropertiesOutput;
  type: "HttpFile";
}

/** Properties specific to this dataset type. */
export interface HttpDatasetTypePropertiesOutput {
  /** The relative URL based on the URL in the HttpLinkedService refers to an HTTP file Type: string (or Expression with resultType string). */
  relativeUrl?: any;
  /** The HTTP method for the HTTP request. Type: string (or Expression with resultType string). */
  requestMethod?: any;
  /** The body for the HTTP request. Type: string (or Expression with resultType string). */
  requestBody?: any;
  /**
   * The headers for the HTTP Request. e.g. request-header-name-1:request-header-value-1
   * ...
   * request-header-name-n:request-header-value-n Type: string (or Expression with resultType string).
   */
  additionalHeaders?: any;
  /** The format of files. */
  format?: DatasetStorageFormatOutput;
  /** The data compression method used on files. */
  compression?: DatasetCompressionOutput;
}

/** Properties specific to this dataset type. */
export interface GenericDatasetTypePropertiesOutput {
  /** The table name. Type: string (or Expression with resultType string). */
  tableName?: any;
}

/** Amazon Marketplace Web Service dataset. */
export interface AmazonMWSObjectDatasetOutput extends DatasetOutputParent {
  /** Properties specific to this dataset type. */
  typeProperties?: GenericDatasetTypePropertiesOutput;
  type: "AmazonMWSObject";
}

/** Azure PostgreSQL dataset. */
export interface AzurePostgreSqlTableDatasetOutput extends DatasetOutputParent {
  /** Properties specific to this dataset type. */
  typeProperties?: AzurePostgreSqlTableDatasetTypePropertiesOutput;
  type: "AzurePostgreSqlTable";
}

/** Azure PostgreSQL dataset properties. */
export interface AzurePostgreSqlTableDatasetTypePropertiesOutput {
  /** The table name of the Azure PostgreSQL database which includes both schema and table. Type: string (or Expression with resultType string). */
  tableName?: any;
  /** The table name of the Azure PostgreSQL database. Type: string (or Expression with resultType string). */
  table?: any;
  /** The schema name of the Azure PostgreSQL database. Type: string (or Expression with resultType string). */
  schema?: any;
}

/** Concur Service dataset. */
export interface ConcurObjectDatasetOutput extends DatasetOutputParent {
  /** Properties specific to this dataset type. */
  typeProperties?: GenericDatasetTypePropertiesOutput;
  type: "ConcurObject";
}

/** Couchbase server dataset. */
export interface CouchbaseTableDatasetOutput extends DatasetOutputParent {
  /** Properties specific to this dataset type. */
  typeProperties?: GenericDatasetTypePropertiesOutput;
  type: "CouchbaseTable";
}

/** Drill server dataset. */
export interface DrillTableDatasetOutput extends DatasetOutputParent {
  /** Properties specific to this dataset type. */
  typeProperties?: DrillDatasetTypePropertiesOutput;
  type: "DrillTable";
}

/** Drill Dataset Properties */
export interface DrillDatasetTypePropertiesOutput {
  /** This property will be retired. Please consider using schema + table properties instead. */
  tableName?: any;
  /** The table name of the Drill. Type: string (or Expression with resultType string). */
  table?: any;
  /** The schema name of the Drill. Type: string (or Expression with resultType string). */
  schema?: any;
}

/** Eloqua server dataset. */
export interface EloquaObjectDatasetOutput extends DatasetOutputParent {
  /** Properties specific to this dataset type. */
  typeProperties?: GenericDatasetTypePropertiesOutput;
  type: "EloquaObject";
}

/** Google BigQuery service dataset. */
export interface GoogleBigQueryObjectDatasetOutput extends DatasetOutputParent {
  /** Properties specific to this dataset type. */
  typeProperties?: GoogleBigQueryDatasetTypePropertiesOutput;
  type: "GoogleBigQueryObject";
}

/** Google BigQuery Dataset Properties */
export interface GoogleBigQueryDatasetTypePropertiesOutput {
  /** This property will be retired. Please consider using database + table properties instead. */
  tableName?: any;
  /** The table name of the Google BigQuery. Type: string (or Expression with resultType string). */
  table?: any;
  /** The database name of the Google BigQuery. Type: string (or Expression with resultType string). */
  dataset?: any;
}

/** Greenplum Database dataset. */
export interface GreenplumTableDatasetOutput extends DatasetOutputParent {
  /** Properties specific to this dataset type. */
  typeProperties?: GreenplumDatasetTypePropertiesOutput;
  type: "GreenplumTable";
}

/** Greenplum Dataset Properties */
export interface GreenplumDatasetTypePropertiesOutput {
  /** This property will be retired. Please consider using schema + table properties instead. */
  tableName?: any;
  /** The table name of Greenplum. Type: string (or Expression with resultType string). */
  table?: any;
  /** The schema name of Greenplum. Type: string (or Expression with resultType string). */
  schema?: any;
}

/** HBase server dataset. */
export interface HBaseObjectDatasetOutput extends DatasetOutputParent {
  /** Properties specific to this dataset type. */
  typeProperties?: GenericDatasetTypePropertiesOutput;
  type: "HBaseObject";
}

/** Hive Server dataset. */
export interface HiveObjectDatasetOutput extends DatasetOutputParent {
  /** Properties specific to this dataset type. */
  typeProperties?: HiveDatasetTypePropertiesOutput;
  type: "HiveObject";
}

/** Hive Properties */
export interface HiveDatasetTypePropertiesOutput {
  /** This property will be retired. Please consider using schema + table properties instead. */
  tableName?: any;
  /** The table name of the Hive. Type: string (or Expression with resultType string). */
  table?: any;
  /** The schema name of the Hive. Type: string (or Expression with resultType string). */
  schema?: any;
}

/** Hubspot Service dataset. */
export interface HubspotObjectDatasetOutput extends DatasetOutputParent {
  /** Properties specific to this dataset type. */
  typeProperties?: GenericDatasetTypePropertiesOutput;
  type: "HubspotObject";
}

/** Impala server dataset. */
export interface ImpalaObjectDatasetOutput extends DatasetOutputParent {
  /** Properties specific to this dataset type. */
  typeProperties?: ImpalaDatasetTypePropertiesOutput;
  type: "ImpalaObject";
}

/** Impala Dataset Properties */
export interface ImpalaDatasetTypePropertiesOutput {
  /** This property will be retired. Please consider using schema + table properties instead. */
  tableName?: any;
  /** The table name of the Impala. Type: string (or Expression with resultType string). */
  table?: any;
  /** The schema name of the Impala. Type: string (or Expression with resultType string). */
  schema?: any;
}

/** Jira Service dataset. */
export interface JiraObjectDatasetOutput extends DatasetOutputParent {
  /** Properties specific to this dataset type. */
  typeProperties?: GenericDatasetTypePropertiesOutput;
  type: "JiraObject";
}

/** Magento server dataset. */
export interface MagentoObjectDatasetOutput extends DatasetOutputParent {
  /** Properties specific to this dataset type. */
  typeProperties?: GenericDatasetTypePropertiesOutput;
  type: "MagentoObject";
}

/** MariaDB server dataset. */
export interface MariaDBTableDatasetOutput extends DatasetOutputParent {
  /** Properties specific to this dataset type. */
  typeProperties?: GenericDatasetTypePropertiesOutput;
  type: "MariaDBTable";
}

/** Azure Database for MariaDB dataset. */
export interface AzureMariaDBTableDatasetOutput extends DatasetOutputParent {
  /** Properties specific to this dataset type. */
  typeProperties?: GenericDatasetTypePropertiesOutput;
  type: "AzureMariaDBTable";
}

/** Marketo server dataset. */
export interface MarketoObjectDatasetOutput extends DatasetOutputParent {
  /** Properties specific to this dataset type. */
  typeProperties?: GenericDatasetTypePropertiesOutput;
  type: "MarketoObject";
}

/** Paypal Service dataset. */
export interface PaypalObjectDatasetOutput extends DatasetOutputParent {
  /** Properties specific to this dataset type. */
  typeProperties?: GenericDatasetTypePropertiesOutput;
  type: "PaypalObject";
}

/** Phoenix server dataset. */
export interface PhoenixObjectDatasetOutput extends DatasetOutputParent {
  /** Properties specific to this dataset type. */
  typeProperties?: PhoenixDatasetTypePropertiesOutput;
  type: "PhoenixObject";
}

/** Phoenix Dataset Properties */
export interface PhoenixDatasetTypePropertiesOutput {
  /** This property will be retired. Please consider using schema + table properties instead. */
  tableName?: any;
  /** The table name of the Phoenix. Type: string (or Expression with resultType string). */
  table?: any;
  /** The schema name of the Phoenix. Type: string (or Expression with resultType string). */
  schema?: any;
}

/** Presto server dataset. */
export interface PrestoObjectDatasetOutput extends DatasetOutputParent {
  /** Properties specific to this dataset type. */
  typeProperties?: PrestoDatasetTypePropertiesOutput;
  type: "PrestoObject";
}

/** Presto Dataset Properties */
export interface PrestoDatasetTypePropertiesOutput {
  /** This property will be retired. Please consider using schema + table properties instead. */
  tableName?: any;
  /** The table name of the Presto. Type: string (or Expression with resultType string). */
  table?: any;
  /** The schema name of the Presto. Type: string (or Expression with resultType string). */
  schema?: any;
}

/** QuickBooks server dataset. */
export interface QuickBooksObjectDatasetOutput extends DatasetOutputParent {
  /** Properties specific to this dataset type. */
  typeProperties?: GenericDatasetTypePropertiesOutput;
  type: "QuickBooksObject";
}

/** ServiceNow server dataset. */
export interface ServiceNowObjectDatasetOutput extends DatasetOutputParent {
  /** Properties specific to this dataset type. */
  typeProperties?: GenericDatasetTypePropertiesOutput;
  type: "ServiceNowObject";
}

/** Shopify Service dataset. */
export interface ShopifyObjectDatasetOutput extends DatasetOutputParent {
  /** Properties specific to this dataset type. */
  typeProperties?: GenericDatasetTypePropertiesOutput;
  type: "ShopifyObject";
}

/** Spark Server dataset. */
export interface SparkObjectDatasetOutput extends DatasetOutputParent {
  /** Properties specific to this dataset type. */
  typeProperties?: SparkDatasetTypePropertiesOutput;
  type: "SparkObject";
}

/** Spark Properties */
export interface SparkDatasetTypePropertiesOutput {
  /** This property will be retired. Please consider using schema + table properties instead. */
  tableName?: any;
  /** The table name of the Spark. Type: string (or Expression with resultType string). */
  table?: any;
  /** The schema name of the Spark. Type: string (or Expression with resultType string). */
  schema?: any;
}

/** Square Service dataset. */
export interface SquareObjectDatasetOutput extends DatasetOutputParent {
  /** Properties specific to this dataset type. */
  typeProperties?: GenericDatasetTypePropertiesOutput;
  type: "SquareObject";
}

/** Xero Service dataset. */
export interface XeroObjectDatasetOutput extends DatasetOutputParent {
  /** Properties specific to this dataset type. */
  typeProperties?: GenericDatasetTypePropertiesOutput;
  type: "XeroObject";
}

/** Zoho server dataset. */
export interface ZohoObjectDatasetOutput extends DatasetOutputParent {
  /** Properties specific to this dataset type. */
  typeProperties?: GenericDatasetTypePropertiesOutput;
  type: "ZohoObject";
}

/** Netezza dataset. */
export interface NetezzaTableDatasetOutput extends DatasetOutputParent {
  /** Properties specific to this dataset type. */
  typeProperties?: NetezzaTableDatasetTypePropertiesOutput;
  type: "NetezzaTable";
}

/** Netezza dataset properties. */
export interface NetezzaTableDatasetTypePropertiesOutput {
  /** This property will be retired. Please consider using schema + table properties instead. */
  tableName?: any;
  /** The table name of the Netezza. Type: string (or Expression with resultType string). */
  table?: any;
  /** The schema name of the Netezza. Type: string (or Expression with resultType string). */
  schema?: any;
}

/** Vertica dataset. */
export interface VerticaTableDatasetOutput extends DatasetOutputParent {
  /** Properties specific to this dataset type. */
  typeProperties?: VerticaDatasetTypePropertiesOutput;
  type: "VerticaTable";
}

/** Vertica Properties */
export interface VerticaDatasetTypePropertiesOutput {
  /** This property will be retired. Please consider using schema + table properties instead. */
  tableName?: any;
  /** The table name of the Vertica. Type: string (or Expression with resultType string). */
  table?: any;
  /** The schema name of the Vertica. Type: string (or Expression with resultType string). */
  schema?: any;
}

/** Salesforce Marketing Cloud dataset. */
export interface SalesforceMarketingCloudObjectDatasetOutput
  extends DatasetOutputParent {
  /** Properties specific to this dataset type. */
  typeProperties?: GenericDatasetTypePropertiesOutput;
  type: "SalesforceMarketingCloudObject";
}

/** Responsys dataset. */
export interface ResponsysObjectDatasetOutput extends DatasetOutputParent {
  /** Properties specific to this dataset type. */
  typeProperties?: GenericDatasetTypePropertiesOutput;
  type: "ResponsysObject";
}

/** The path of the Dynamics AX OData entity. */
export interface DynamicsAXResourceDatasetOutput extends DatasetOutputParent {
  /** Dynamics AX OData resource dataset properties. */
  typeProperties: DynamicsAXResourceDatasetTypePropertiesOutput;
  type: "DynamicsAXResource";
}

/** Dynamics AX OData resource dataset properties. */
export interface DynamicsAXResourceDatasetTypePropertiesOutput {
  /** The path of the Dynamics AX OData entity. Type: string (or Expression with resultType string). */
  path: any;
}

/** Oracle Service Cloud dataset. */
export interface OracleServiceCloudObjectDatasetOutput
  extends DatasetOutputParent {
  /** Properties specific to this dataset type. */
  typeProperties?: GenericDatasetTypePropertiesOutput;
  type: "OracleServiceCloudObject";
}

/** The Azure Data Explorer (Kusto) dataset. */
export interface AzureDataExplorerTableDatasetOutput
  extends DatasetOutputParent {
  /** Azure Data Explorer (Kusto) dataset properties. */
  typeProperties: AzureDataExplorerDatasetTypePropertiesOutput;
  type: "AzureDataExplorerTable";
}

/** Azure Data Explorer (Kusto) dataset properties. */
export interface AzureDataExplorerDatasetTypePropertiesOutput {
  /** The table name of the Azure Data Explorer database. Type: string (or Expression with resultType string). */
  table?: any;
}

/** Google AdWords service dataset. */
export interface GoogleAdWordsObjectDatasetOutput extends DatasetOutputParent {
  /** Properties specific to this dataset type. */
  typeProperties?: GenericDatasetTypePropertiesOutput;
  type: "GoogleAdWordsObject";
}

/** The snowflake dataset. */
export interface SnowflakeDatasetOutput extends DatasetOutputParent {
  /** Snowflake dataset properties. */
  typeProperties: SnowflakeDatasetTypePropertiesOutput;
  type: "SnowflakeTable";
}

/** Snowflake dataset properties. */
export interface SnowflakeDatasetTypePropertiesOutput {
  /** The schema name of the Snowflake database. Type: string (or Expression with resultType string). */
  schema?: any;
  /** The table name of the Snowflake database. Type: string (or Expression with resultType string). */
  table?: any;
}

/** The sharepoint online list resource dataset. */
export interface SharePointOnlineListResourceDatasetOutput
  extends DatasetOutputParent {
  /** Sharepoint online list dataset properties. */
  typeProperties?: SharePointOnlineListDatasetTypePropertiesOutput;
  type: "SharePointOnlineListResource";
}

/** Sharepoint online list dataset properties. */
export interface SharePointOnlineListDatasetTypePropertiesOutput {
  /** The name of the SharePoint Online list. Type: string (or Expression with resultType string). */
  listName?: any;
}

/** Azure Databricks Delta Lake dataset. */
export interface AzureDatabricksDeltaLakeDatasetOutput
  extends DatasetOutputParent {
  /** Properties specific to this dataset type. */
  typeProperties?: AzureDatabricksDeltaLakeDatasetTypePropertiesOutput;
  type: "AzureDatabricksDeltaLakeDataset";
}

/** Azure Databricks Delta Lake Dataset Properties */
export interface AzureDatabricksDeltaLakeDatasetTypePropertiesOutput {
  /** The name of delta table. Type: string (or Expression with resultType string). */
  table?: any;
  /** The database name of delta table. Type: string (or Expression with resultType string). */
  database?: any;
}

/** The storage account linked service. */
export interface AzureStorageLinkedServiceOutput
  extends LinkedServiceOutputParent {
  /** Azure Storage linked service properties. */
  typeProperties: AzureStorageLinkedServiceTypePropertiesOutput;
  type: "AzureStorage";
}

/** Azure Storage linked service properties. */
export interface AzureStorageLinkedServiceTypePropertiesOutput {
  /** The connection string. It is mutually exclusive with sasUri property. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString?: any;
  /** The Azure key vault secret reference of accountKey in connection string. */
  accountKey?: AzureKeyVaultSecretReferenceOutput;
  /** SAS URI of the Azure Storage resource. It is mutually exclusive with connectionString property. Type: string, SecureString or AzureKeyVaultSecretReference. */
  sasUri?: any;
  /** The Azure key vault secret reference of sasToken in sas uri. */
  sasToken?: AzureKeyVaultSecretReferenceOutput;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: string;
}

/** The azure blob storage linked service. */
export interface AzureBlobStorageLinkedServiceOutput
  extends LinkedServiceOutputParent {
  /** Azure Blob Storage linked service properties. */
  typeProperties: AzureBlobStorageLinkedServiceTypePropertiesOutput;
  type: "AzureBlobStorage";
}

/** Azure Blob Storage linked service properties. */
export interface AzureBlobStorageLinkedServiceTypePropertiesOutput {
  /** The connection string. It is mutually exclusive with sasUri, serviceEndpoint property. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString?: any;
  /** The Azure key vault secret reference of accountKey in connection string. */
  accountKey?: AzureKeyVaultSecretReferenceOutput;
  /** SAS URI of the Azure Blob Storage resource. It is mutually exclusive with connectionString, serviceEndpoint property. Type: string, SecureString or AzureKeyVaultSecretReference. */
  sasUri?: any;
  /** The Azure key vault secret reference of sasToken in sas uri. */
  sasToken?: AzureKeyVaultSecretReferenceOutput;
  /** Blob service endpoint of the Azure Blob Storage resource. It is mutually exclusive with connectionString, sasUri property. */
  serviceEndpoint?: string;
  /** The ID of the service principal used to authenticate against Azure SQL Data Warehouse. Type: string (or Expression with resultType string). */
  servicePrincipalId?: any;
  /** The key of the service principal used to authenticate against Azure SQL Data Warehouse. */
  servicePrincipalKey?: SecretBaseOutput;
  /** The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). */
  tenant?: any;
  /** Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regions’ cloud type. Type: string (or Expression with resultType string). */
  azureCloudType?: any;
  /** Specify the kind of your storage account. Allowed values are: Storage (general purpose v1), StorageV2 (general purpose v2), BlobStorage, or BlockBlobStorage. Type: string (or Expression with resultType string). */
  accountKind?: string;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: string;
}

/** The azure table storage linked service. */
export interface AzureTableStorageLinkedServiceOutput
  extends LinkedServiceOutputParent {
  /** Azure Table Storage linked service properties. */
  typeProperties: AzureStorageLinkedServiceTypePropertiesOutput;
  type: "AzureTableStorage";
}

/** Azure SQL Data Warehouse linked service. */
export interface AzureSqlDWLinkedServiceOutput
  extends LinkedServiceOutputParent {
  /** Azure SQL Data Warehouse linked service properties. */
  typeProperties: AzureSqlDWLinkedServiceTypePropertiesOutput;
  type: "AzureSqlDW";
}

/** Azure SQL Data Warehouse linked service properties. */
export interface AzureSqlDWLinkedServiceTypePropertiesOutput {
  /** The connection string. Type: string, SecureString or AzureKeyVaultSecretReference. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString: any;
  /** The Azure key vault secret reference of password in connection string. */
  password?: AzureKeyVaultSecretReferenceOutput;
  /** The ID of the service principal used to authenticate against Azure SQL Data Warehouse. Type: string (or Expression with resultType string). */
  servicePrincipalId?: any;
  /** The key of the service principal used to authenticate against Azure SQL Data Warehouse. */
  servicePrincipalKey?: SecretBaseOutput;
  /** The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). */
  tenant?: any;
  /** Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regions’ cloud type. Type: string (or Expression with resultType string). */
  azureCloudType?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** SQL Server linked service. */
export interface SqlServerLinkedServiceOutput
  extends LinkedServiceOutputParent {
  /** SQL Server linked service properties. */
  typeProperties: SqlServerLinkedServiceTypePropertiesOutput;
  type: "SqlServer";
}

/** SQL Server linked service properties. */
export interface SqlServerLinkedServiceTypePropertiesOutput {
  /** The connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString: any;
  /** The on-premises Windows authentication user name. Type: string (or Expression with resultType string). */
  userName?: any;
  /** The on-premises Windows authentication password. */
  password?: SecretBaseOutput;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Amazon RDS for SQL Server linked service. */
export interface AmazonRdsForSqlServerLinkedServiceOutput
  extends LinkedServiceOutputParent {
  /** Amazon RDS for SQL Server linked service properties. */
  typeProperties: AmazonRdsForSqlServerLinkedServiceTypePropertiesOutput;
  type: "AmazonRdsForSqlServer";
}

/** SQL Server linked service properties. */
export interface AmazonRdsForSqlServerLinkedServiceTypePropertiesOutput {
  /** The connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString: any;
  /** The on-premises Windows authentication user name. Type: string (or Expression with resultType string). */
  userName?: any;
  /** The on-premises Windows authentication password. */
  password?: SecretBaseOutput;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Microsoft Azure SQL Database linked service. */
export interface AzureSqlDatabaseLinkedServiceOutput
  extends LinkedServiceOutputParent {
  /** Azure SQL Database linked service properties. */
  typeProperties: AzureSqlDatabaseLinkedServiceTypePropertiesOutput;
  type: "AzureSqlDatabase";
}

/** Azure SQL Database linked service properties. */
export interface AzureSqlDatabaseLinkedServiceTypePropertiesOutput {
  /** The connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString: any;
  /** The Azure key vault secret reference of password in connection string. */
  password?: AzureKeyVaultSecretReferenceOutput;
  /** The ID of the service principal used to authenticate against Azure SQL Database. Type: string (or Expression with resultType string). */
  servicePrincipalId?: any;
  /** The key of the service principal used to authenticate against Azure SQL Database. */
  servicePrincipalKey?: SecretBaseOutput;
  /** The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). */
  tenant?: any;
  /** Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regions’ cloud type. Type: string (or Expression with resultType string). */
  azureCloudType?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Azure SQL Managed Instance linked service. */
export interface AzureSqlMILinkedServiceOutput
  extends LinkedServiceOutputParent {
  /** Azure SQL Managed Instance linked service properties. */
  typeProperties: AzureSqlMILinkedServiceTypePropertiesOutput;
  type: "AzureSqlMI";
}

/** Azure SQL Managed Instance linked service properties. */
export interface AzureSqlMILinkedServiceTypePropertiesOutput {
  /** The connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString: any;
  /** The Azure key vault secret reference of password in connection string. */
  password?: AzureKeyVaultSecretReferenceOutput;
  /** The ID of the service principal used to authenticate against Azure SQL Managed Instance. Type: string (or Expression with resultType string). */
  servicePrincipalId?: any;
  /** The key of the service principal used to authenticate against Azure SQL Managed Instance. */
  servicePrincipalKey?: SecretBaseOutput;
  /** The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). */
  tenant?: any;
  /** Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regions’ cloud type. Type: string (or Expression with resultType string). */
  azureCloudType?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Azure Batch linked service. */
export interface AzureBatchLinkedServiceOutput
  extends LinkedServiceOutputParent {
  /** Azure Batch linked service properties. */
  typeProperties: AzureBatchLinkedServiceTypePropertiesOutput;
  type: "AzureBatch";
}

/** Azure Batch linked service properties. */
export interface AzureBatchLinkedServiceTypePropertiesOutput {
  /** The Azure Batch account name. Type: string (or Expression with resultType string). */
  accountName: any;
  /** The Azure Batch account access key. */
  accessKey?: SecretBaseOutput;
  /** The Azure Batch URI. Type: string (or Expression with resultType string). */
  batchUri: any;
  /** The Azure Batch pool name. Type: string (or Expression with resultType string). */
  poolName: any;
  /** The Azure Storage linked service reference. */
  linkedServiceName: LinkedServiceReferenceOutput;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Azure Key Vault linked service. */
export interface AzureKeyVaultLinkedServiceOutput
  extends LinkedServiceOutputParent {
  /** Azure Key Vault linked service properties. */
  typeProperties: AzureKeyVaultLinkedServiceTypePropertiesOutput;
  type: "AzureKeyVault";
}

/** Azure Key Vault linked service properties. */
export interface AzureKeyVaultLinkedServiceTypePropertiesOutput {
  /** The base URL of the Azure Key Vault. e.g. https://myakv.vault.azure.net Type: string (or Expression with resultType string). */
  baseUrl: any;
}

/** Microsoft Azure Cosmos Database (CosmosDB) linked service. */
export interface CosmosDbLinkedServiceOutput extends LinkedServiceOutputParent {
  /** CosmosDB linked service properties. */
  typeProperties: CosmosDbLinkedServiceTypePropertiesOutput;
  type: "CosmosDb";
}

/** CosmosDB linked service properties. */
export interface CosmosDbLinkedServiceTypePropertiesOutput {
  /** The connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString?: any;
  /** The endpoint of the Azure CosmosDB account. Type: string (or Expression with resultType string) */
  accountEndpoint?: any;
  /** The name of the database. Type: string (or Expression with resultType string) */
  database?: any;
  /** The account key of the Azure CosmosDB account. Type: SecureString or AzureKeyVaultSecretReference. */
  accountKey?: SecretBaseOutput;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Dynamics linked service. */
export interface DynamicsLinkedServiceOutput extends LinkedServiceOutputParent {
  /** Dynamics linked service properties. */
  typeProperties: DynamicsLinkedServiceTypePropertiesOutput;
  type: "Dynamics";
}

/** Dynamics linked service properties. */
export interface DynamicsLinkedServiceTypePropertiesOutput {
  /** The deployment type of the Dynamics instance. 'Online' for Dynamics Online and 'OnPremisesWithIfd' for Dynamics on-premises with Ifd. Type: string (or Expression with resultType string). */
  deploymentType: any;
  /** The host name of the on-premises Dynamics server. The property is required for on-prem and not allowed for online. Type: string (or Expression with resultType string). */
  hostName?: any;
  /** The port of on-premises Dynamics server. The property is required for on-prem and not allowed for online. Default is 443. Type: integer (or Expression with resultType integer), minimum: 0. */
  port?: any;
  /** The URL to the Microsoft Dynamics server. The property is required for on-line and not allowed for on-prem. Type: string (or Expression with resultType string). */
  serviceUri?: any;
  /** The organization name of the Dynamics instance. The property is required for on-prem and required for online when there are more than one Dynamics instances associated with the user. Type: string (or Expression with resultType string). */
  organizationName?: any;
  /** The authentication type to connect to Dynamics server. 'Office365' for online scenario, 'Ifd' for on-premises with Ifd scenario, 'AADServicePrincipal' for Server-To-Server authentication in online scenario. Type: string (or Expression with resultType string). */
  authenticationType: any;
  /** User name to access the Dynamics instance. Type: string (or Expression with resultType string). */
  username?: any;
  /** Password to access the Dynamics instance. */
  password?: SecretBaseOutput;
  /** The client ID of the application in Azure Active Directory used for Server-To-Server authentication. Type: string (or Expression with resultType string). */
  servicePrincipalId?: any;
  /** The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string). */
  servicePrincipalCredentialType?: any;
  /** The credential of the service principal object in Azure Active Directory. If servicePrincipalCredentialType is 'ServicePrincipalKey', servicePrincipalCredential can be SecureString or AzureKeyVaultSecretReference. If servicePrincipalCredentialType is 'ServicePrincipalCert', servicePrincipalCredential can only be AzureKeyVaultSecretReference. */
  servicePrincipalCredential?: SecretBaseOutput;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Dynamics CRM linked service. */
export interface DynamicsCrmLinkedServiceOutput
  extends LinkedServiceOutputParent {
  /** Dynamics CRM linked service properties. */
  typeProperties: DynamicsCrmLinkedServiceTypePropertiesOutput;
  type: "DynamicsCrm";
}

/** Dynamics CRM linked service properties. */
export interface DynamicsCrmLinkedServiceTypePropertiesOutput {
  /** The deployment type of the Dynamics CRM instance. 'Online' for Dynamics CRM Online and 'OnPremisesWithIfd' for Dynamics CRM on-premises with Ifd. Type: string (or Expression with resultType string). */
  deploymentType: any;
  /** The host name of the on-premises Dynamics CRM server. The property is required for on-prem and not allowed for online. Type: string (or Expression with resultType string). */
  hostName?: any;
  /** The port of on-premises Dynamics CRM server. The property is required for on-prem and not allowed for online. Default is 443. Type: integer (or Expression with resultType integer), minimum: 0. */
  port?: any;
  /** The URL to the Microsoft Dynamics CRM server. The property is required for on-line and not allowed for on-prem. Type: string (or Expression with resultType string). */
  serviceUri?: any;
  /** The organization name of the Dynamics CRM instance. The property is required for on-prem and required for online when there are more than one Dynamics CRM instances associated with the user. Type: string (or Expression with resultType string). */
  organizationName?: any;
  /** The authentication type to connect to Dynamics CRM server. 'Office365' for online scenario, 'Ifd' for on-premises with Ifd scenario, 'AADServicePrincipal' for Server-To-Server authentication in online scenario. Type: string (or Expression with resultType string). */
  authenticationType: any;
  /** User name to access the Dynamics CRM instance. Type: string (or Expression with resultType string). */
  username?: any;
  /** Password to access the Dynamics CRM instance. */
  password?: SecretBaseOutput;
  /** The client ID of the application in Azure Active Directory used for Server-To-Server authentication. Type: string (or Expression with resultType string). */
  servicePrincipalId?: any;
  /** A string from ServicePrincipalCredentialEnum or an expression */
  servicePrincipalCredentialType?: any;
  /** The credential of the service principal object in Azure Active Directory. If servicePrincipalCredentialType is 'ServicePrincipalKey', servicePrincipalCredential can be SecureString or AzureKeyVaultSecretReference. If servicePrincipalCredentialType is 'ServicePrincipalCert', servicePrincipalCredential can only be AzureKeyVaultSecretReference. */
  servicePrincipalCredential?: SecretBaseOutput;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Common Data Service for Apps linked service. */
export interface CommonDataServiceForAppsLinkedServiceOutput
  extends LinkedServiceOutputParent {
  /** Common Data Service for Apps linked service properties. */
  typeProperties: CommonDataServiceForAppsLinkedServiceTypePropertiesOutput;
  type: "CommonDataServiceForApps";
}

/** Common Data Service for Apps linked service properties. */
export interface CommonDataServiceForAppsLinkedServiceTypePropertiesOutput {
  /** The deployment type of the Common Data Service for Apps instance. 'Online' for Common Data Service for Apps Online and 'OnPremisesWithIfd' for Common Data Service for Apps on-premises with Ifd. Type: string (or Expression with resultType string). */
  deploymentType: any;
  /** The host name of the on-premises Common Data Service for Apps server. The property is required for on-prem and not allowed for online. Type: string (or Expression with resultType string). */
  hostName?: any;
  /** The port of on-premises Common Data Service for Apps server. The property is required for on-prem and not allowed for online. Default is 443. Type: integer (or Expression with resultType integer), minimum: 0. */
  port?: any;
  /** The URL to the Microsoft Common Data Service for Apps server. The property is required for on-line and not allowed for on-prem. Type: string (or Expression with resultType string). */
  serviceUri?: any;
  /** The organization name of the Common Data Service for Apps instance. The property is required for on-prem and required for online when there are more than one Common Data Service for Apps instances associated with the user. Type: string (or Expression with resultType string). */
  organizationName?: any;
  /** The authentication type to connect to Common Data Service for Apps server. 'Office365' for online scenario, 'Ifd' for on-premises with Ifd scenario. 'AADServicePrincipal' for Server-To-Server authentication in online scenario. Type: string (or Expression with resultType string). */
  authenticationType: any;
  /** User name to access the Common Data Service for Apps instance. Type: string (or Expression with resultType string). */
  username?: any;
  /** Password to access the Common Data Service for Apps instance. */
  password?: SecretBaseOutput;
  /** The client ID of the application in Azure Active Directory used for Server-To-Server authentication. Type: string (or Expression with resultType string). */
  servicePrincipalId?: any;
  /** A string from ServicePrincipalCredentialEnum or an expression */
  servicePrincipalCredentialType?: any;
  /** The credential of the service principal object in Azure Active Directory. If servicePrincipalCredentialType is 'ServicePrincipalKey', servicePrincipalCredential can be SecureString or AzureKeyVaultSecretReference. If servicePrincipalCredentialType is 'ServicePrincipalCert', servicePrincipalCredential can only be AzureKeyVaultSecretReference. */
  servicePrincipalCredential?: SecretBaseOutput;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** HDInsight linked service. */
export interface HDInsightLinkedServiceOutput
  extends LinkedServiceOutputParent {
  /** HDInsight linked service properties. */
  typeProperties: HDInsightLinkedServiceTypePropertiesOutput;
  type: "HDInsight";
}

/** HDInsight linked service properties. */
export interface HDInsightLinkedServiceTypePropertiesOutput {
  /** HDInsight cluster URI. Type: string (or Expression with resultType string). */
  clusterUri: any;
  /** HDInsight cluster user name. Type: string (or Expression with resultType string). */
  userName?: any;
  /** HDInsight cluster password. */
  password?: SecretBaseOutput;
  /** The Azure Storage linked service reference. */
  linkedServiceName?: LinkedServiceReferenceOutput;
  /** A reference to the Azure SQL linked service that points to the HCatalog database. */
  hcatalogLinkedServiceName?: LinkedServiceReferenceOutput;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
  /** Specify if the HDInsight is created with ESP (Enterprise Security Package). Type: Boolean. */
  isEspEnabled?: any;
  /** Specify the FileSystem if the main storage for the HDInsight is ADLS Gen2. Type: string (or Expression with resultType string). */
  fileSystem?: any;
}

/** File system linked service. */
export interface FileServerLinkedServiceOutput
  extends LinkedServiceOutputParent {
  /** File system linked service properties. */
  typeProperties: FileServerLinkedServiceTypePropertiesOutput;
  type: "FileServer";
}

/** File system linked service properties. */
export interface FileServerLinkedServiceTypePropertiesOutput {
  /** Host name of the server. Type: string (or Expression with resultType string). */
  host: any;
  /** User ID to logon the server. Type: string (or Expression with resultType string). */
  userId?: any;
  /** Password to logon the server. */
  password?: SecretBaseOutput;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Azure File Storage linked service. */
export interface AzureFileStorageLinkedServiceOutput
  extends LinkedServiceOutputParent {
  /** Azure File Storage linked service properties. */
  typeProperties: AzureFileStorageLinkedServiceTypePropertiesOutput;
  type: "AzureFileStorage";
}

/** Azure File Storage linked service properties. */
export interface AzureFileStorageLinkedServiceTypePropertiesOutput {
  /** Host name of the server. Type: string (or Expression with resultType string). */
  host: any;
  /** User ID to logon the server. Type: string (or Expression with resultType string). */
  userId?: any;
  /** Password to logon the server. */
  password?: SecretBaseOutput;
  /** The connection string. It is mutually exclusive with sasUri property. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString?: any;
  /** The Azure key vault secret reference of accountKey in connection string. */
  accountKey?: AzureKeyVaultSecretReferenceOutput;
  /** SAS URI of the Azure File resource. It is mutually exclusive with connectionString property. Type: string, SecureString or AzureKeyVaultSecretReference. */
  sasUri?: any;
  /** The Azure key vault secret reference of sasToken in sas uri. */
  sasToken?: AzureKeyVaultSecretReferenceOutput;
  /** The azure file share name. It is required when auth with accountKey/sasToken. Type: string (or Expression with resultType string). */
  fileShare?: any;
  /** The azure file share snapshot version. Type: string (or Expression with resultType string). */
  snapshot?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Linked service for Google Cloud Storage. */
export interface GoogleCloudStorageLinkedServiceOutput
  extends LinkedServiceOutputParent {
  /** Google Cloud Storage linked service properties. */
  typeProperties: GoogleCloudStorageLinkedServiceTypePropertiesOutput;
  type: "GoogleCloudStorage";
}

/** Google Cloud Storage linked service properties. */
export interface GoogleCloudStorageLinkedServiceTypePropertiesOutput {
  /** The access key identifier of the Google Cloud Storage Identity and Access Management (IAM) user. Type: string (or Expression with resultType string). */
  accessKeyId?: any;
  /** The secret access key of the Google Cloud Storage Identity and Access Management (IAM) user. */
  secretAccessKey?: SecretBaseOutput;
  /** This value specifies the endpoint to access with the Google Cloud Storage Connector. This is an optional property; change it only if you want to try a different service endpoint or want to switch between https and http. Type: string (or Expression with resultType string). */
  serviceUrl?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Oracle database. */
export interface OracleLinkedServiceOutput extends LinkedServiceOutputParent {
  /** Oracle database linked service properties. */
  typeProperties: OracleLinkedServiceTypePropertiesOutput;
  type: "Oracle";
}

/** Oracle database linked service properties. */
export interface OracleLinkedServiceTypePropertiesOutput {
  /** The connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString: any;
  /** The Azure key vault secret reference of password in connection string. */
  password?: AzureKeyVaultSecretReferenceOutput;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** AmazonRdsForOracle database. */
export interface AmazonRdsForOracleLinkedServiceOutput
  extends LinkedServiceOutputParent {
  /** AmazonRdsForOracle database linked service properties. */
  typeProperties: AmazonRdsForLinkedServiceTypePropertiesOutput;
  type: "AmazonRdsForOracle";
}

/** AmazonRdsForOracle database linked service properties. */
export interface AmazonRdsForLinkedServiceTypePropertiesOutput {
  /** The connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString: any;
  /** The Azure key vault secret reference of password in connection string. */
  password?: SecretBaseOutput;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Azure MySQL database linked service. */
export interface AzureMySqlLinkedServiceOutput
  extends LinkedServiceOutputParent {
  /** Azure MySQL database linked service properties. */
  typeProperties: AzureMySqlLinkedServiceTypePropertiesOutput;
  type: "AzureMySql";
}

/** Azure MySQL database linked service properties. */
export interface AzureMySqlLinkedServiceTypePropertiesOutput {
  /** The connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString: any;
  /** The Azure key vault secret reference of password in connection string. */
  password?: AzureKeyVaultSecretReferenceOutput;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Linked service for MySQL data source. */
export interface MySqlLinkedServiceOutput extends LinkedServiceOutputParent {
  /** MySQL linked service properties. */
  typeProperties: MySqlLinkedServiceTypePropertiesOutput;
  type: "MySql";
}

/** MySQL linked service properties. */
export interface MySqlLinkedServiceTypePropertiesOutput {
  /** The connection string. */
  connectionString: any;
  /** The Azure key vault secret reference of password in connection string. */
  password?: AzureKeyVaultSecretReferenceOutput;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Linked service for PostgreSQL data source. */
export interface PostgreSqlLinkedServiceOutput
  extends LinkedServiceOutputParent {
  /** PostgreSQL linked service properties. */
  typeProperties: PostgreSqlLinkedServiceTypePropertiesOutput;
  type: "PostgreSql";
}

/** PostgreSQL linked service properties. */
export interface PostgreSqlLinkedServiceTypePropertiesOutput {
  /** The connection string. */
  connectionString: any;
  /** The Azure key vault secret reference of password in connection string. */
  password?: AzureKeyVaultSecretReferenceOutput;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Linked service for Sybase data source. */
export interface SybaseLinkedServiceOutput extends LinkedServiceOutputParent {
  /** Sybase linked service properties. */
  typeProperties: SybaseLinkedServiceTypePropertiesOutput;
  type: "Sybase";
}

/** Sybase linked service properties. */
export interface SybaseLinkedServiceTypePropertiesOutput {
  /** Server name for connection. Type: string (or Expression with resultType string). */
  server: any;
  /** Database name for connection. Type: string (or Expression with resultType string). */
  database: any;
  /** Schema name for connection. Type: string (or Expression with resultType string). */
  schema?: any;
  /** AuthenticationType to be used for connection. */
  authenticationType?: "Basic" | "Windows";
  /** Username for authentication. Type: string (or Expression with resultType string). */
  username?: any;
  /** Password for authentication. */
  password?: SecretBaseOutput;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Linked service for DB2 data source. */
export interface Db2LinkedServiceOutput extends LinkedServiceOutputParent {
  /** DB2 linked service properties. */
  typeProperties: Db2LinkedServiceTypePropertiesOutput;
  type: "Db2";
}

/** DB2 linked service properties. */
export interface Db2LinkedServiceTypePropertiesOutput {
  /** The connection string. It is mutually exclusive with server, database, authenticationType, userName, packageCollection and certificateCommonName property. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString?: any;
  /** Server name for connection. It is mutually exclusive with connectionString property. Type: string (or Expression with resultType string). */
  server: any;
  /** Database name for connection. It is mutually exclusive with connectionString property. Type: string (or Expression with resultType string). */
  database: any;
  /** AuthenticationType to be used for connection. It is mutually exclusive with connectionString property. */
  authenticationType?: "Basic";
  /** Username for authentication. It is mutually exclusive with connectionString property. Type: string (or Expression with resultType string). */
  username?: any;
  /** Password for authentication. */
  password?: SecretBaseOutput;
  /** Under where packages are created when querying database. It is mutually exclusive with connectionString property. Type: string (or Expression with resultType string). */
  packageCollection?: any;
  /** Certificate Common Name when TLS is enabled. It is mutually exclusive with connectionString property. Type: string (or Expression with resultType string). */
  certificateCommonName?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. It is mutually exclusive with connectionString property. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Linked service for Teradata data source. */
export interface TeradataLinkedServiceOutput extends LinkedServiceOutputParent {
  /** Teradata linked service properties. */
  typeProperties: TeradataLinkedServiceTypePropertiesOutput;
  type: "Teradata";
}

/** Teradata linked service properties. */
export interface TeradataLinkedServiceTypePropertiesOutput {
  /** Teradata ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString?: any;
  /** Server name for connection. Type: string (or Expression with resultType string). */
  server?: any;
  /** AuthenticationType to be used for connection. */
  authenticationType?: "Basic" | "Windows";
  /** Username for authentication. Type: string (or Expression with resultType string). */
  username?: any;
  /** Password for authentication. */
  password?: SecretBaseOutput;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Azure ML Studio Web Service linked service. */
export interface AzureMLLinkedServiceOutput extends LinkedServiceOutputParent {
  /** Azure ML Studio Web Service linked service properties. */
  typeProperties: AzureMLLinkedServiceTypePropertiesOutput;
  type: "AzureML";
}

/** Azure ML Studio Web Service linked service properties. */
export interface AzureMLLinkedServiceTypePropertiesOutput {
  /** The Batch Execution REST URL for an Azure ML Studio Web Service endpoint. Type: string (or Expression with resultType string). */
  mlEndpoint: any;
  /** The API key for accessing the Azure ML model endpoint. */
  apiKey: SecretBaseOutput;
  /** The Update Resource REST URL for an Azure ML Studio Web Service endpoint. Type: string (or Expression with resultType string). */
  updateResourceEndpoint?: any;
  /** The ID of the service principal used to authenticate against the ARM-based updateResourceEndpoint of an Azure ML Studio web service. Type: string (or Expression with resultType string). */
  servicePrincipalId?: any;
  /** The key of the service principal used to authenticate against the ARM-based updateResourceEndpoint of an Azure ML Studio web service. */
  servicePrincipalKey?: SecretBaseOutput;
  /** The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). */
  tenant?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Azure ML Service linked service. */
export interface AzureMLServiceLinkedServiceOutput
  extends LinkedServiceOutputParent {
  /** Azure ML Service linked service properties. */
  typeProperties: AzureMLServiceLinkedServiceTypePropertiesOutput;
  type: "AzureMLService";
}

/** Azure ML Service linked service properties. */
export interface AzureMLServiceLinkedServiceTypePropertiesOutput {
  /** Azure ML Service workspace subscription ID. Type: string (or Expression with resultType string). */
  subscriptionId: any;
  /** Azure ML Service workspace resource group name. Type: string (or Expression with resultType string). */
  resourceGroupName: any;
  /** Azure ML Service workspace name. Type: string (or Expression with resultType string). */
  mlWorkspaceName: any;
  /** The ID of the service principal used to authenticate against the endpoint of a published Azure ML Service pipeline. Type: string (or Expression with resultType string). */
  servicePrincipalId?: any;
  /** The key of the service principal used to authenticate against the endpoint of a published Azure ML Service pipeline. */
  servicePrincipalKey?: SecretBaseOutput;
  /** The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). */
  tenant?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Open Database Connectivity (ODBC) linked service. */
export interface OdbcLinkedServiceOutput extends LinkedServiceOutputParent {
  /** ODBC linked service properties. */
  typeProperties: OdbcLinkedServiceTypePropertiesOutput;
  type: "Odbc";
}

/** ODBC linked service properties. */
export interface OdbcLinkedServiceTypePropertiesOutput {
  /** The non-access credential portion of the connection string as well as an optional encrypted credential. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString: any;
  /** Type of authentication used to connect to the ODBC data store. Possible values are: Anonymous and Basic. Type: string (or Expression with resultType string). */
  authenticationType?: any;
  /** The access credential portion of the connection string specified in driver-specific property-value format. */
  credential?: SecretBaseOutput;
  /** User name for Basic authentication. Type: string (or Expression with resultType string). */
  userName?: any;
  /** Password for Basic authentication. */
  password?: SecretBaseOutput;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Informix linked service. */
export interface InformixLinkedServiceOutput extends LinkedServiceOutputParent {
  /** Informix linked service properties. */
  typeProperties: InformixLinkedServiceTypePropertiesOutput;
  type: "Informix";
}

/** Informix linked service properties. */
export interface InformixLinkedServiceTypePropertiesOutput {
  /** The non-access credential portion of the connection string as well as an optional encrypted credential. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString: any;
  /** Type of authentication used to connect to the Informix as ODBC data store. Possible values are: Anonymous and Basic. Type: string (or Expression with resultType string). */
  authenticationType?: any;
  /** The access credential portion of the connection string specified in driver-specific property-value format. */
  credential?: SecretBaseOutput;
  /** User name for Basic authentication. Type: string (or Expression with resultType string). */
  userName?: any;
  /** Password for Basic authentication. */
  password?: SecretBaseOutput;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Microsoft Access linked service. */
export interface MicrosoftAccessLinkedServiceOutput
  extends LinkedServiceOutputParent {
  /** Microsoft Access linked service properties. */
  typeProperties: MicrosoftAccessLinkedServiceTypePropertiesOutput;
  type: "MicrosoftAccess";
}

/** Microsoft Access linked service properties. */
export interface MicrosoftAccessLinkedServiceTypePropertiesOutput {
  /** The non-access credential portion of the connection string as well as an optional encrypted credential. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString: any;
  /** Type of authentication used to connect to the Microsoft Access as ODBC data store. Possible values are: Anonymous and Basic. Type: string (or Expression with resultType string). */
  authenticationType?: any;
  /** The access credential portion of the connection string specified in driver-specific property-value format. */
  credential?: SecretBaseOutput;
  /** User name for Basic authentication. Type: string (or Expression with resultType string). */
  userName?: any;
  /** Password for Basic authentication. */
  password?: SecretBaseOutput;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Hadoop Distributed File System (HDFS) linked service. */
export interface HdfsLinkedServiceOutput extends LinkedServiceOutputParent {
  /** HDFS linked service properties. */
  typeProperties: HdfsLinkedServiceTypePropertiesOutput;
  type: "Hdfs";
}

/** HDFS linked service properties. */
export interface HdfsLinkedServiceTypePropertiesOutput {
  /** The URL of the HDFS service endpoint, e.g. http://myhostname:50070/webhdfs/v1 . Type: string (or Expression with resultType string). */
  url: any;
  /** Type of authentication used to connect to the HDFS. Possible values are: Anonymous and Windows. Type: string (or Expression with resultType string). */
  authenticationType?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
  /** User name for Windows authentication. Type: string (or Expression with resultType string). */
  userName?: any;
  /** Password for Windows authentication. */
  password?: SecretBaseOutput;
}

/** Open Data Protocol (OData) linked service. */
export interface ODataLinkedServiceOutput extends LinkedServiceOutputParent {
  /** OData linked service properties. */
  typeProperties: ODataLinkedServiceTypePropertiesOutput;
  type: "OData";
}

/** OData linked service properties. */
export interface ODataLinkedServiceTypePropertiesOutput {
  /** The URL of the OData service endpoint. Type: string (or Expression with resultType string). */
  url: any;
  /** Type of authentication used to connect to the OData service. */
  authenticationType?:
    | "Basic"
    | "Anonymous"
    | "Windows"
    | "AadServicePrincipal"
    | "ManagedServiceIdentity";
  /** User name of the OData service. Type: string (or Expression with resultType string). */
  userName?: any;
  /** Password of the OData service. */
  password?: SecretBaseOutput;
  /** Specify the tenant information (domain name or tenant ID) under which your application resides. Type: string (or Expression with resultType string). */
  tenant?: any;
  /** Specify the application id of your application registered in Azure Active Directory. Type: string (or Expression with resultType string). */
  servicePrincipalId?: any;
  /** Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regions’ cloud type. Type: string (or Expression with resultType string). */
  azureCloudType?: any;
  /** Specify the resource you are requesting authorization to use Directory. Type: string (or Expression with resultType string). */
  aadResourceId?: any;
  /** Specify the credential type (key or cert) is used for service principal. */
  aadServicePrincipalCredentialType?:
    | "ServicePrincipalKey"
    | "ServicePrincipalCert";
  /** Specify the secret of your application registered in Azure Active Directory. Type: string (or Expression with resultType string). */
  servicePrincipalKey?: SecretBaseOutput;
  /** Specify the base64 encoded certificate of your application registered in Azure Active Directory. Type: string (or Expression with resultType string). */
  servicePrincipalEmbeddedCert?: SecretBaseOutput;
  /** Specify the password of your certificate if your certificate has a password and you are using AadServicePrincipal authentication. Type: string (or Expression with resultType string). */
  servicePrincipalEmbeddedCertPassword?: SecretBaseOutput;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Web linked service. */
export interface WebLinkedServiceOutput extends LinkedServiceOutputParent {
  /** Web linked service properties. */
  typeProperties: WebLinkedServiceTypePropertiesOutput;
  type: "Web";
}

/** Base definition of WebLinkedServiceTypeProperties, this typeProperties is polymorphic based on authenticationType, so not flattened in SDK models. */
export interface WebLinkedServiceTypePropertiesOutputParent {
  /** The URL of the web service endpoint, e.g. http://www.microsoft.com . Type: string (or Expression with resultType string). */
  url: any;
  authenticationType:
    | "WebLinkedServiceTypeProperties"
    | "Anonymous"
    | "Basic"
    | "ClientCertificate";
}

/** A WebLinkedService that uses anonymous authentication to communicate with an HTTP endpoint. */
export interface WebAnonymousAuthenticationOutput
  extends WebLinkedServiceTypePropertiesOutputParent {
  authenticationType: "Anonymous";
}

/** A WebLinkedService that uses basic authentication to communicate with an HTTP endpoint. */
export interface WebBasicAuthenticationOutput
  extends WebLinkedServiceTypePropertiesOutputParent {
  /** User name for Basic authentication. Type: string (or Expression with resultType string). */
  username: any;
  /** The password for Basic authentication. */
  password: SecretBaseOutput;
  authenticationType: "Basic";
}

/** A WebLinkedService that uses client certificate based authentication to communicate with an HTTP endpoint. This scheme follows mutual authentication; the server must also provide valid credentials to the client. */
export interface WebClientCertificateAuthenticationOutput
  extends WebLinkedServiceTypePropertiesOutputParent {
  /** Base64-encoded contents of a PFX file. */
  pfx: SecretBaseOutput;
  /** Password for the PFX file. */
  password: SecretBaseOutput;
  authenticationType: "ClientCertificate";
}

/** Linked service for Cassandra data source. */
export interface CassandraLinkedServiceOutput
  extends LinkedServiceOutputParent {
  /** Cassandra linked service properties. */
  typeProperties: CassandraLinkedServiceTypePropertiesOutput;
  type: "Cassandra";
}

/** Cassandra linked service properties. */
export interface CassandraLinkedServiceTypePropertiesOutput {
  /** Host name for connection. Type: string (or Expression with resultType string). */
  host: any;
  /** AuthenticationType to be used for connection. Type: string (or Expression with resultType string). */
  authenticationType?: any;
  /** The port for the connection. Type: integer (or Expression with resultType integer). */
  port?: any;
  /** Username for authentication. Type: string (or Expression with resultType string). */
  username?: any;
  /** Password for authentication. */
  password?: SecretBaseOutput;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Linked service for MongoDb data source. */
export interface MongoDbLinkedServiceOutput extends LinkedServiceOutputParent {
  /** MongoDB linked service properties. */
  typeProperties: MongoDbLinkedServiceTypePropertiesOutput;
  type: "MongoDb";
}

/** MongoDB linked service properties. */
export interface MongoDbLinkedServiceTypePropertiesOutput {
  /** The IP address or server name of the MongoDB server. Type: string (or Expression with resultType string). */
  server: any;
  /** The authentication type to be used to connect to the MongoDB database. */
  authenticationType?: "Basic" | "Anonymous";
  /** The name of the MongoDB database that you want to access. Type: string (or Expression with resultType string). */
  databaseName: any;
  /** Username for authentication. Type: string (or Expression with resultType string). */
  username?: any;
  /** Password for authentication. */
  password?: SecretBaseOutput;
  /** Database to verify the username and password. Type: string (or Expression with resultType string). */
  authSource?: any;
  /** The TCP port number that the MongoDB server uses to listen for client connections. The default value is 27017. Type: integer (or Expression with resultType integer), minimum: 0. */
  port?: any;
  /** Specifies whether the connections to the server are encrypted using SSL. The default value is false. Type: boolean (or Expression with resultType boolean). */
  enableSsl?: any;
  /** Specifies whether to allow self-signed certificates from the server. The default value is false. Type: boolean (or Expression with resultType boolean). */
  allowSelfSignedServerCert?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Linked service for MongoDB Atlas data source. */
export interface MongoDbAtlasLinkedServiceOutput
  extends LinkedServiceOutputParent {
  /** MongoDB Atlas linked service properties. */
  typeProperties: MongoDbAtlasLinkedServiceTypePropertiesOutput;
  type: "MongoDbAtlas";
}

/** MongoDB Atlas linked service properties. */
export interface MongoDbAtlasLinkedServiceTypePropertiesOutput {
  /** The MongoDB Atlas connection string. Type: string, SecureString or AzureKeyVaultSecretReference. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString: any;
  /** The name of the MongoDB Atlas database that you want to access. Type: string (or Expression with resultType string). */
  database: any;
}

/** Linked service for MongoDB data source. */
export interface MongoDbV2LinkedServiceOutput
  extends LinkedServiceOutputParent {
  /** MongoDB linked service properties. */
  typeProperties: MongoDbV2LinkedServiceTypePropertiesOutput;
  type: "MongoDbV2";
}

/** MongoDB linked service properties. */
export interface MongoDbV2LinkedServiceTypePropertiesOutput {
  /** The MongoDB connection string. Type: string, SecureString or AzureKeyVaultSecretReference. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString: any;
  /** The name of the MongoDB database that you want to access. Type: string (or Expression with resultType string). */
  database: any;
}

/** Linked service for CosmosDB (MongoDB API) data source. */
export interface CosmosDbMongoDbApiLinkedServiceOutput
  extends LinkedServiceOutputParent {
  /** CosmosDB (MongoDB API) linked service properties. */
  typeProperties: CosmosDbMongoDbApiLinkedServiceTypePropertiesOutput;
  type: "CosmosDbMongoDbApi";
}

/** CosmosDB (MongoDB API) linked service properties. */
export interface CosmosDbMongoDbApiLinkedServiceTypePropertiesOutput {
  /** The CosmosDB (MongoDB API) connection string. Type: string, SecureString or AzureKeyVaultSecretReference. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString: any;
  /** The name of the CosmosDB (MongoDB API) database that you want to access. Type: string (or Expression with resultType string). */
  database: any;
}

/** Azure Data Lake Store linked service. */
export interface AzureDataLakeStoreLinkedServiceOutput
  extends LinkedServiceOutputParent {
  /** Azure Data Lake Store linked service properties. */
  typeProperties: AzureDataLakeStoreLinkedServiceTypePropertiesOutput;
  type: "AzureDataLakeStore";
}

/** Azure Data Lake Store linked service properties. */
export interface AzureDataLakeStoreLinkedServiceTypePropertiesOutput {
  /** Data Lake Store service URI. Type: string (or Expression with resultType string). */
  dataLakeStoreUri: any;
  /** The ID of the application used to authenticate against the Azure Data Lake Store account. Type: string (or Expression with resultType string). */
  servicePrincipalId?: any;
  /** The Key of the application used to authenticate against the Azure Data Lake Store account. */
  servicePrincipalKey?: SecretBaseOutput;
  /** The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). */
  tenant?: any;
  /** Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regions’ cloud type. Type: string (or Expression with resultType string). */
  azureCloudType?: any;
  /** Data Lake Store account name. Type: string (or Expression with resultType string). */
  accountName?: any;
  /** Data Lake Store account subscription ID (if different from Data Factory account). Type: string (or Expression with resultType string). */
  subscriptionId?: any;
  /** Data Lake Store account resource group name (if different from Data Factory account). Type: string (or Expression with resultType string). */
  resourceGroupName?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Azure Data Lake Storage Gen2 linked service. */
export interface AzureBlobFSLinkedServiceOutput
  extends LinkedServiceOutputParent {
  /** Azure Data Lake Storage Gen2 linked service properties. */
  typeProperties: AzureBlobFSLinkedServiceTypePropertiesOutput;
  type: "AzureBlobFS";
}

/** Azure Data Lake Storage Gen2 linked service properties. */
export interface AzureBlobFSLinkedServiceTypePropertiesOutput {
  /** Endpoint for the Azure Data Lake Storage Gen2 service. Type: string (or Expression with resultType string). */
  url: any;
  /** Account key for the Azure Data Lake Storage Gen2 service. Type: string (or Expression with resultType string). */
  accountKey?: any;
  /** The ID of the application used to authenticate against the Azure Data Lake Storage Gen2 account. Type: string (or Expression with resultType string). */
  servicePrincipalId?: any;
  /** The Key of the application used to authenticate against the Azure Data Lake Storage Gen2 account. */
  servicePrincipalKey?: SecretBaseOutput;
  /** The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). */
  tenant?: any;
  /** Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regions’ cloud type. Type: string (or Expression with resultType string). */
  azureCloudType?: any;
  /** The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string). */
  servicePrincipalCredentialType?: any;
  /** The credential of the service principal object in Azure Active Directory. If servicePrincipalCredentialType is 'ServicePrincipalKey', servicePrincipalCredential can be SecureString or AzureKeyVaultSecretReference. If servicePrincipalCredentialType is 'ServicePrincipalCert', servicePrincipalCredential can only be AzureKeyVaultSecretReference. */
  servicePrincipalCredential?: SecretBaseOutput;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Office365 linked service. */
export interface Office365LinkedServiceOutput
  extends LinkedServiceOutputParent {
  /** Office365 linked service properties. */
  typeProperties: Office365LinkedServiceTypePropertiesOutput;
  type: "Office365";
}

/** Office365 linked service properties. */
export interface Office365LinkedServiceTypePropertiesOutput {
  /** Azure tenant ID to which the Office 365 account belongs. Type: string (or Expression with resultType string). */
  office365TenantId: any;
  /** Specify the tenant information under which your Azure AD web application resides. Type: string (or Expression with resultType string). */
  servicePrincipalTenantId: any;
  /** Specify the application's client ID. Type: string (or Expression with resultType string). */
  servicePrincipalId: any;
  /** Specify the application's key. */
  servicePrincipalKey: SecretBaseOutput;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Linked service for Salesforce. */
export interface SalesforceLinkedServiceOutput
  extends LinkedServiceOutputParent {
  /** Salesforce linked service properties. */
  typeProperties: SalesforceLinkedServiceTypePropertiesOutput;
  type: "Salesforce";
}

/** Salesforce linked service properties. */
export interface SalesforceLinkedServiceTypePropertiesOutput {
  /** The URL of Salesforce instance. Default is 'https://login.salesforce.com'. To copy data from sandbox, specify 'https://test.salesforce.com'. To copy data from custom domain, specify, for example, 'https://[domain].my.salesforce.com'. Type: string (or Expression with resultType string). */
  environmentUrl?: any;
  /** The username for Basic authentication of the Salesforce instance. Type: string (or Expression with resultType string). */
  username?: any;
  /** The password for Basic authentication of the Salesforce instance. */
  password?: SecretBaseOutput;
  /** The security token is optional to remotely access Salesforce instance. */
  securityToken?: SecretBaseOutput;
  /** The Salesforce API version used in ADF. Type: string (or Expression with resultType string). */
  apiVersion?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Linked service for Salesforce Service Cloud. */
export interface SalesforceServiceCloudLinkedServiceOutput
  extends LinkedServiceOutputParent {
  /** Salesforce Service Cloud linked service properties. */
  typeProperties: SalesforceServiceCloudLinkedServiceTypePropertiesOutput;
  type: "SalesforceServiceCloud";
}

/** Salesforce Service Cloud linked service properties. */
export interface SalesforceServiceCloudLinkedServiceTypePropertiesOutput {
  /** The URL of Salesforce Service Cloud instance. Default is 'https://login.salesforce.com'. To copy data from sandbox, specify 'https://test.salesforce.com'. To copy data from custom domain, specify, for example, 'https://[domain].my.salesforce.com'. Type: string (or Expression with resultType string). */
  environmentUrl?: any;
  /** The username for Basic authentication of the Salesforce instance. Type: string (or Expression with resultType string). */
  username?: any;
  /** The password for Basic authentication of the Salesforce instance. */
  password?: SecretBaseOutput;
  /** The security token is optional to remotely access Salesforce instance. */
  securityToken?: SecretBaseOutput;
  /** The Salesforce API version used in ADF. Type: string (or Expression with resultType string). */
  apiVersion?: any;
  /** Extended properties appended to the connection string. Type: string (or Expression with resultType string). */
  extendedProperties?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Linked service for SAP Cloud for Customer. */
export interface SapCloudForCustomerLinkedServiceOutput
  extends LinkedServiceOutputParent {
  /** SAP Cloud for Customer linked service properties. */
  typeProperties: SapCloudForCustomerLinkedServiceTypePropertiesOutput;
  type: "SapCloudForCustomer";
}

/** SAP Cloud for Customer linked service properties. */
export interface SapCloudForCustomerLinkedServiceTypePropertiesOutput {
  /** The URL of SAP Cloud for Customer OData API. For example, '[https://[tenantname].crm.ondemand.com/sap/c4c/odata/v1]'. Type: string (or Expression with resultType string). */
  url: any;
  /** The username for Basic authentication. Type: string (or Expression with resultType string). */
  username?: any;
  /** The password for Basic authentication. */
  password?: SecretBaseOutput;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Either encryptedCredential or username/password must be provided. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Linked service for SAP ERP Central Component(SAP ECC). */
export interface SapEccLinkedServiceOutput extends LinkedServiceOutputParent {
  /** SAP ECC linked service properties. */
  typeProperties: SapEccLinkedServiceTypePropertiesOutput;
  type: "SapEcc";
}

/** SAP ECC linked service properties. */
export interface SapEccLinkedServiceTypePropertiesOutput {
  /** The URL of SAP ECC OData API. For example, '[https://hostname:port/sap/opu/odata/sap/servicename/]'. Type: string (or Expression with resultType string). */
  url: string;
  /** The username for Basic authentication. Type: string (or Expression with resultType string). */
  username?: string;
  /** The password for Basic authentication. */
  password?: SecretBaseOutput;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Either encryptedCredential or username/password must be provided. Type: string (or Expression with resultType string). */
  encryptedCredential?: string;
}

/** SAP Business Warehouse Open Hub Destination Linked Service. */
export interface SapOpenHubLinkedServiceOutput
  extends LinkedServiceOutputParent {
  /** Properties specific to SAP Business Warehouse Open Hub Destination linked service type. */
  typeProperties: SapOpenHubLinkedServiceTypePropertiesOutput;
  type: "SapOpenHub";
}

/** Properties specific to SAP Business Warehouse Open Hub Destination linked service type. */
export interface SapOpenHubLinkedServiceTypePropertiesOutput {
  /** Host name of the SAP BW instance where the open hub destination is located. Type: string (or Expression with resultType string). */
  server: any;
  /** System number of the BW system where the open hub destination is located. (Usually a two-digit decimal number represented as a string.) Type: string (or Expression with resultType string). */
  systemNumber: any;
  /** Client ID of the client on the BW system where the open hub destination is located. (Usually a three-digit decimal number represented as a string) Type: string (or Expression with resultType string). */
  clientId: any;
  /** Language of the BW system where the open hub destination is located. The default value is EN. Type: string (or Expression with resultType string). */
  language?: any;
  /** SystemID of the SAP system where the table is located. Type: string (or Expression with resultType string). */
  systemId?: any;
  /** Username to access the SAP BW server where the open hub destination is located. Type: string (or Expression with resultType string). */
  userName?: any;
  /** Password to access the SAP BW server where the open hub destination is located. */
  password?: SecretBaseOutput;
  /** The hostname of the SAP Message Server. Type: string (or Expression with resultType string). */
  messageServer?: any;
  /** The service name or port number of the Message Server. Type: string (or Expression with resultType string). */
  messageServerService?: any;
  /** The Logon Group for the SAP System. Type: string (or Expression with resultType string). */
  logonGroup?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Rest Service linked service. */
export interface RestServiceLinkedServiceOutput
  extends LinkedServiceOutputParent {
  /** Rest Service linked service properties. */
  typeProperties: RestServiceLinkedServiceTypePropertiesOutput;
  type: "RestService";
}

/** Rest Service linked service properties. */
export interface RestServiceLinkedServiceTypePropertiesOutput {
  /** The base URL of the REST service. */
  url: any;
  /** Whether to validate server side SSL certificate when connecting to the endpoint.The default value is true. Type: boolean (or Expression with resultType boolean). */
  enableServerCertificateValidation?: any;
  /** Type of authentication used to connect to the REST service. */
  authenticationType:
    | "Anonymous"
    | "Basic"
    | "AadServicePrincipal"
    | "ManagedServiceIdentity";
  /** The user name used in Basic authentication type. */
  userName?: any;
  /** The password used in Basic authentication type. */
  password?: SecretBaseOutput;
  /** The application's client ID used in AadServicePrincipal authentication type. */
  servicePrincipalId?: any;
  /** The application's key used in AadServicePrincipal authentication type. */
  servicePrincipalKey?: SecretBaseOutput;
  /** The tenant information (domain name or tenant ID) used in AadServicePrincipal authentication type under which your application resides. */
  tenant?: any;
  /** Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regions’ cloud type. Type: string (or Expression with resultType string). */
  azureCloudType?: any;
  /** The resource you are requesting authorization to use. */
  aadResourceId?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Linked service for Amazon S3. */
export interface AmazonS3LinkedServiceOutput extends LinkedServiceOutputParent {
  /** Amazon S3 linked service properties. */
  typeProperties: AmazonS3LinkedServiceTypePropertiesOutput;
  type: "AmazonS3";
}

/** Amazon S3 linked service properties. */
export interface AmazonS3LinkedServiceTypePropertiesOutput {
  /** The authentication type of S3. Allowed value: AccessKey (default) or TemporarySecurityCredentials. Type: string (or Expression with resultType string). */
  authenticationType?: any;
  /** The access key identifier of the Amazon S3 Identity and Access Management (IAM) user. Type: string (or Expression with resultType string). */
  accessKeyId?: any;
  /** The secret access key of the Amazon S3 Identity and Access Management (IAM) user. */
  secretAccessKey?: SecretBaseOutput;
  /** This value specifies the endpoint to access with the S3 Connector. This is an optional property; change it only if you want to try a different service endpoint or want to switch between https and http. Type: string (or Expression with resultType string). */
  serviceUrl?: any;
  /** The session token for the S3 temporary security credential. */
  sessionToken?: SecretBaseOutput;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Linked service for Amazon Redshift. */
export interface AmazonRedshiftLinkedServiceOutput
  extends LinkedServiceOutputParent {
  /** Amazon Redshift linked service properties. */
  typeProperties: AmazonRedshiftLinkedServiceTypePropertiesOutput;
  type: "AmazonRedshift";
}

/** Amazon Redshift linked service properties. */
export interface AmazonRedshiftLinkedServiceTypePropertiesOutput {
  /** The name of the Amazon Redshift server. Type: string (or Expression with resultType string). */
  server: any;
  /** The username of the Amazon Redshift source. Type: string (or Expression with resultType string). */
  username?: any;
  /** The password of the Amazon Redshift source. */
  password?: SecretBaseOutput;
  /** The database name of the Amazon Redshift source. Type: string (or Expression with resultType string). */
  database: any;
  /** The TCP port number that the Amazon Redshift server uses to listen for client connections. The default value is 5439. Type: integer (or Expression with resultType integer). */
  port?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Custom linked service. */
export interface CustomDataSourceLinkedServiceOutput
  extends LinkedServiceOutputParent {
  /** Custom linked service properties. */
  typeProperties: any;
  type: "CustomDataSource";
}

/** Linked service for Windows Azure Search Service. */
export interface AzureSearchLinkedServiceOutput
  extends LinkedServiceOutputParent {
  /** Windows Azure Search Service linked service properties. */
  typeProperties: AzureSearchLinkedServiceTypePropertiesOutput;
  type: "AzureSearch";
}

/** Windows Azure Search Service linked service properties. */
export interface AzureSearchLinkedServiceTypePropertiesOutput {
  /** URL for Azure Search service. Type: string (or Expression with resultType string). */
  url: any;
  /** Admin Key for Azure Search service */
  key?: SecretBaseOutput;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Linked service for an HTTP source. */
export interface HttpLinkedServiceOutput extends LinkedServiceOutputParent {
  /** Properties specific to this linked service type. */
  typeProperties: HttpLinkedServiceTypePropertiesOutput;
  type: "HttpServer";
}

/** Properties specific to this linked service type. */
export interface HttpLinkedServiceTypePropertiesOutput {
  /** The base URL of the HTTP endpoint, e.g. http://www.microsoft.com. Type: string (or Expression with resultType string). */
  url: any;
  /** The authentication type to be used to connect to the HTTP server. */
  authenticationType?:
    | "Basic"
    | "Anonymous"
    | "Digest"
    | "Windows"
    | "ClientCertificate";
  /** User name for Basic, Digest, or Windows authentication. Type: string (or Expression with resultType string). */
  userName?: any;
  /** Password for Basic, Digest, Windows, or ClientCertificate with EmbeddedCertData authentication. */
  password?: SecretBaseOutput;
  /** Base64 encoded certificate data for ClientCertificate authentication. For on-premises copy with ClientCertificate authentication, either CertThumbprint or EmbeddedCertData/Password should be specified. Type: string (or Expression with resultType string). */
  embeddedCertData?: any;
  /** Thumbprint of certificate for ClientCertificate authentication. Only valid for on-premises copy. For on-premises copy with ClientCertificate authentication, either CertThumbprint or EmbeddedCertData/Password should be specified. Type: string (or Expression with resultType string). */
  certThumbprint?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
  /** If true, validate the HTTPS server SSL certificate. Default value is true. Type: boolean (or Expression with resultType boolean). */
  enableServerCertificateValidation?: any;
}

/** A FTP server Linked Service. */
export interface FtpServerLinkedServiceOutput
  extends LinkedServiceOutputParent {
  /** Properties specific to this linked service type. */
  typeProperties: FtpServerLinkedServiceTypePropertiesOutput;
  type: "FtpServer";
}

/** Properties specific to this linked service type. */
export interface FtpServerLinkedServiceTypePropertiesOutput {
  /** Host name of the FTP server. Type: string (or Expression with resultType string). */
  host: any;
  /** The TCP port number that the FTP server uses to listen for client connections. Default value is 21. Type: integer (or Expression with resultType integer), minimum: 0. */
  port?: any;
  /** The authentication type to be used to connect to the FTP server. */
  authenticationType?: "Basic" | "Anonymous";
  /** Username to logon the FTP server. Type: string (or Expression with resultType string). */
  userName?: any;
  /** Password to logon the FTP server. */
  password?: SecretBaseOutput;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
  /** If true, connect to the FTP server over SSL/TLS channel. Default value is true. Type: boolean (or Expression with resultType boolean). */
  enableSsl?: any;
  /** If true, validate the FTP server SSL certificate when connect over SSL/TLS channel. Default value is true. Type: boolean (or Expression with resultType boolean). */
  enableServerCertificateValidation?: any;
}

/** A linked service for an SSH File Transfer Protocol (SFTP) server. */
export interface SftpServerLinkedServiceOutput
  extends LinkedServiceOutputParent {
  /** Properties specific to this linked service type. */
  typeProperties: SftpServerLinkedServiceTypePropertiesOutput;
  type: "Sftp";
}

/** Properties specific to this linked service type. */
export interface SftpServerLinkedServiceTypePropertiesOutput {
  /** The SFTP server host name. Type: string (or Expression with resultType string). */
  host: any;
  /** The TCP port number that the SFTP server uses to listen for client connections. Default value is 22. Type: integer (or Expression with resultType integer), minimum: 0. */
  port?: any;
  /** The authentication type to be used to connect to the FTP server. */
  authenticationType?: "Basic" | "SshPublicKey";
  /** The username used to log on to the SFTP server. Type: string (or Expression with resultType string). */
  userName?: any;
  /** Password to logon the SFTP server for Basic authentication. */
  password?: SecretBaseOutput;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
  /** The SSH private key file path for SshPublicKey authentication. Only valid for on-premises copy. For on-premises copy with SshPublicKey authentication, either PrivateKeyPath or PrivateKeyContent should be specified. SSH private key should be OpenSSH format. Type: string (or Expression with resultType string). */
  privateKeyPath?: any;
  /** Base64 encoded SSH private key content for SshPublicKey authentication. For on-premises copy with SshPublicKey authentication, either PrivateKeyPath or PrivateKeyContent should be specified. SSH private key should be OpenSSH format. */
  privateKeyContent?: SecretBaseOutput;
  /** The password to decrypt the SSH private key if the SSH private key is encrypted. */
  passPhrase?: SecretBaseOutput;
  /** If true, skip the SSH host key validation. Default value is false. Type: boolean (or Expression with resultType boolean). */
  skipHostKeyValidation?: any;
  /** The host key finger-print of the SFTP server. When SkipHostKeyValidation is false, HostKeyFingerprint should be specified. Type: string (or Expression with resultType string). */
  hostKeyFingerprint?: any;
}

/** SAP Business Warehouse Linked Service. */
export interface SapBWLinkedServiceOutput extends LinkedServiceOutputParent {
  /** Properties specific to this linked service type. */
  typeProperties: SapBWLinkedServiceTypePropertiesOutput;
  type: "SapBW";
}

/** Properties specific to this linked service type. */
export interface SapBWLinkedServiceTypePropertiesOutput {
  /** Host name of the SAP BW instance. Type: string (or Expression with resultType string). */
  server: any;
  /** System number of the BW system. (Usually a two-digit decimal number represented as a string.) Type: string (or Expression with resultType string). */
  systemNumber: any;
  /** Client ID of the client on the BW system. (Usually a three-digit decimal number represented as a string) Type: string (or Expression with resultType string). */
  clientId: any;
  /** Username to access the SAP BW server. Type: string (or Expression with resultType string). */
  userName?: any;
  /** Password to access the SAP BW server. */
  password?: SecretBaseOutput;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** SAP HANA Linked Service. */
export interface SapHanaLinkedServiceOutput extends LinkedServiceOutputParent {
  /** Properties specific to this linked service type. */
  typeProperties: SapHanaLinkedServicePropertiesOutput;
  type: "SapHana";
}

/** Properties specific to this linked service type. */
export interface SapHanaLinkedServicePropertiesOutput {
  /** SAP HANA ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString?: any;
  /** Host name of the SAP HANA server. Type: string (or Expression with resultType string). */
  server: any;
  /** The authentication type to be used to connect to the SAP HANA server. */
  authenticationType?: "Basic" | "Windows";
  /** Username to access the SAP HANA server. Type: string (or Expression with resultType string). */
  userName?: any;
  /** Password to access the SAP HANA server. */
  password?: SecretBaseOutput;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Amazon Marketplace Web Service linked service. */
export interface AmazonMWSLinkedServiceOutput
  extends LinkedServiceOutputParent {
  /** Amazon Marketplace Web Service linked service properties. */
  typeProperties: AmazonMWSLinkedServiceTypePropertiesOutput;
  type: "AmazonMWS";
}

/** Amazon Marketplace Web Service linked service properties. */
export interface AmazonMWSLinkedServiceTypePropertiesOutput {
  /** The endpoint of the Amazon MWS server, (i.e. mws.amazonservices.com) */
  endpoint: any;
  /** The Amazon Marketplace ID you want to retrieve data from. To retrieve data from multiple Marketplace IDs, separate them with a comma (,). (i.e. A2EUQ1WTGCTBG2) */
  marketplaceID: any;
  /** The Amazon seller ID. */
  sellerID: any;
  /** The Amazon MWS authentication token. */
  mwsAuthToken?: SecretBaseOutput;
  /** The access key id used to access data. */
  accessKeyId: any;
  /** The secret key used to access data. */
  secretKey?: SecretBaseOutput;
  /** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
  useEncryptedEndpoints?: any;
  /** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
  useHostVerification?: any;
  /** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
  usePeerVerification?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Azure PostgreSQL linked service. */
export interface AzurePostgreSqlLinkedServiceOutput
  extends LinkedServiceOutputParent {
  /** Azure PostgreSQL linked service properties. */
  typeProperties: AzurePostgreSqlLinkedServiceTypePropertiesOutput;
  type: "AzurePostgreSql";
}

/** Azure PostgreSQL linked service properties. */
export interface AzurePostgreSqlLinkedServiceTypePropertiesOutput {
  /** An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString?: any;
  /** The Azure key vault secret reference of password in connection string. */
  password?: AzureKeyVaultSecretReferenceOutput;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Concur Service linked service. */
export interface ConcurLinkedServiceOutput extends LinkedServiceOutputParent {
  /** Concur Service linked service properties. */
  typeProperties: ConcurLinkedServiceTypePropertiesOutput;
  type: "Concur";
}

/** Concur Service linked service properties. */
export interface ConcurLinkedServiceTypePropertiesOutput {
  /** Properties used to connect to Concur. It is mutually exclusive with any other properties in the linked service. Type: object. */
  connectionProperties?: any;
  /** Application client_id supplied by Concur App Management. */
  clientId: any;
  /** The user name that you use to access Concur Service. */
  username: any;
  /** The password corresponding to the user name that you provided in the username field. */
  password?: SecretBaseOutput;
  /** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
  useEncryptedEndpoints?: any;
  /** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
  useHostVerification?: any;
  /** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
  usePeerVerification?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Couchbase server linked service. */
export interface CouchbaseLinkedServiceOutput
  extends LinkedServiceOutputParent {
  /** Couchbase server linked service properties. */
  typeProperties: CouchbaseLinkedServiceTypePropertiesOutput;
  type: "Couchbase";
}

/** Couchbase server linked service properties. */
export interface CouchbaseLinkedServiceTypePropertiesOutput {
  /** An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString?: any;
  /** The Azure key vault secret reference of credString in connection string. */
  credString?: AzureKeyVaultSecretReferenceOutput;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Drill server linked service. */
export interface DrillLinkedServiceOutput extends LinkedServiceOutputParent {
  /** Drill server linked service properties. */
  typeProperties: DrillLinkedServiceTypePropertiesOutput;
  type: "Drill";
}

/** Drill server linked service properties. */
export interface DrillLinkedServiceTypePropertiesOutput {
  /** An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString?: any;
  /** The Azure key vault secret reference of password in connection string. */
  pwd?: AzureKeyVaultSecretReferenceOutput;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Eloqua server linked service. */
export interface EloquaLinkedServiceOutput extends LinkedServiceOutputParent {
  /** Eloqua server linked service properties. */
  typeProperties: EloquaLinkedServiceTypePropertiesOutput;
  type: "Eloqua";
}

/** Eloqua server linked service properties. */
export interface EloquaLinkedServiceTypePropertiesOutput {
  /** The endpoint of the Eloqua server. (i.e. eloqua.example.com) */
  endpoint: any;
  /** The site name and user name of your Eloqua account in the form: sitename/username. (i.e. Eloqua/Alice) */
  username: any;
  /** The password corresponding to the user name. */
  password?: SecretBaseOutput;
  /** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
  useEncryptedEndpoints?: any;
  /** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
  useHostVerification?: any;
  /** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
  usePeerVerification?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Google BigQuery service linked service. */
export interface GoogleBigQueryLinkedServiceOutput
  extends LinkedServiceOutputParent {
  /** Google BigQuery service linked service properties. */
  typeProperties: GoogleBigQueryLinkedServiceTypePropertiesOutput;
  type: "GoogleBigQuery";
}

/** Google BigQuery service linked service properties. */
export interface GoogleBigQueryLinkedServiceTypePropertiesOutput {
  /** The default BigQuery project to query against. */
  project: any;
  /** A comma-separated list of public BigQuery projects to access. */
  additionalProjects?: any;
  /** Whether to request access to Google Drive. Allowing Google Drive access enables support for federated tables that combine BigQuery data with data from Google Drive. The default value is false. */
  requestGoogleDriveScope?: any;
  /** The OAuth 2.0 authentication mechanism used for authentication. ServiceAuthentication can only be used on self-hosted IR. */
  authenticationType: "ServiceAuthentication" | "UserAuthentication";
  /** The refresh token obtained from Google for authorizing access to BigQuery for UserAuthentication. */
  refreshToken?: SecretBaseOutput;
  /** The client id of the google application used to acquire the refresh token. Type: string (or Expression with resultType string). */
  clientId?: any;
  /** The client secret of the google application used to acquire the refresh token. */
  clientSecret?: SecretBaseOutput;
  /** The service account email ID that is used for ServiceAuthentication and can only be used on self-hosted IR. */
  email?: any;
  /** The full path to the .p12 key file that is used to authenticate the service account email address and can only be used on self-hosted IR. */
  keyFilePath?: any;
  /** The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. */
  trustedCertPath?: any;
  /** Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false. */
  useSystemTrustStore?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Greenplum Database linked service. */
export interface GreenplumLinkedServiceOutput
  extends LinkedServiceOutputParent {
  /** Greenplum Database linked service properties. */
  typeProperties: GreenplumLinkedServiceTypePropertiesOutput;
  type: "Greenplum";
}

/** Greenplum Database linked service properties. */
export interface GreenplumLinkedServiceTypePropertiesOutput {
  /** An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString?: any;
  /** The Azure key vault secret reference of password in connection string. */
  pwd?: AzureKeyVaultSecretReferenceOutput;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** HBase server linked service. */
export interface HBaseLinkedServiceOutput extends LinkedServiceOutputParent {
  /** HBase server linked service properties. */
  typeProperties: HBaseLinkedServiceTypePropertiesOutput;
  type: "HBase";
}

/** HBase server linked service properties. */
export interface HBaseLinkedServiceTypePropertiesOutput {
  /** The IP address or host name of the HBase server. (i.e. 192.168.222.160) */
  host: any;
  /** The TCP port that the HBase instance uses to listen for client connections. The default value is 9090. */
  port?: any;
  /** The partial URL corresponding to the HBase server. (i.e. /gateway/sandbox/hbase/version) */
  httpPath?: any;
  /** The authentication mechanism to use to connect to the HBase server. */
  authenticationType: "Anonymous" | "Basic";
  /** The user name used to connect to the HBase instance. */
  username?: any;
  /** The password corresponding to the user name. */
  password?: SecretBaseOutput;
  /** Specifies whether the connections to the server are encrypted using SSL. The default value is false. */
  enableSsl?: any;
  /** The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. */
  trustedCertPath?: any;
  /** Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false. */
  allowHostNameCNMismatch?: any;
  /** Specifies whether to allow self-signed certificates from the server. The default value is false. */
  allowSelfSignedServerCert?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Hive Server linked service. */
export interface HiveLinkedServiceOutput extends LinkedServiceOutputParent {
  /** Hive Server linked service properties. */
  typeProperties: HiveLinkedServiceTypePropertiesOutput;
  type: "Hive";
}

/** Hive Server linked service properties. */
export interface HiveLinkedServiceTypePropertiesOutput {
  /** IP address or host name of the Hive server, separated by ';' for multiple hosts (only when serviceDiscoveryMode is enable). */
  host: any;
  /** The TCP port that the Hive server uses to listen for client connections. */
  port?: any;
  /** The type of Hive server. */
  serverType?: "HiveServer1" | "HiveServer2" | "HiveThriftServer";
  /** The transport protocol to use in the Thrift layer. */
  thriftTransportProtocol?: "Binary" | "SASL" | "HTTP ";
  /** The authentication method used to access the Hive server. */
  authenticationType:
    | "Anonymous"
    | "Username"
    | "UsernameAndPassword"
    | "WindowsAzureHDInsightService";
  /** true to indicate using the ZooKeeper service, false not. */
  serviceDiscoveryMode?: any;
  /** The namespace on ZooKeeper under which Hive Server 2 nodes are added. */
  zooKeeperNameSpace?: any;
  /** Specifies whether the driver uses native HiveQL queries,or converts them into an equivalent form in HiveQL. */
  useNativeQuery?: any;
  /** The user name that you use to access Hive Server. */
  username?: any;
  /** The password corresponding to the user name that you provided in the Username field */
  password?: SecretBaseOutput;
  /** The partial URL corresponding to the Hive server. */
  httpPath?: any;
  /** Specifies whether the connections to the server are encrypted using SSL. The default value is false. */
  enableSsl?: any;
  /** The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. */
  trustedCertPath?: any;
  /** Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false. */
  useSystemTrustStore?: any;
  /** Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false. */
  allowHostNameCNMismatch?: any;
  /** Specifies whether to allow self-signed certificates from the server. The default value is false. */
  allowSelfSignedServerCert?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Hubspot Service linked service. */
export interface HubspotLinkedServiceOutput extends LinkedServiceOutputParent {
  /** Hubspot Service linked service properties. */
  typeProperties: HubspotLinkedServiceTypePropertiesOutput;
  type: "Hubspot";
}

/** Hubspot Service linked service properties. */
export interface HubspotLinkedServiceTypePropertiesOutput {
  /** The client ID associated with your Hubspot application. */
  clientId: any;
  /** The client secret associated with your Hubspot application. */
  clientSecret?: SecretBaseOutput;
  /** The access token obtained when initially authenticating your OAuth integration. */
  accessToken?: SecretBaseOutput;
  /** The refresh token obtained when initially authenticating your OAuth integration. */
  refreshToken?: SecretBaseOutput;
  /** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
  useEncryptedEndpoints?: any;
  /** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
  useHostVerification?: any;
  /** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
  usePeerVerification?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Impala server linked service. */
export interface ImpalaLinkedServiceOutput extends LinkedServiceOutputParent {
  /** Impala server linked service properties. */
  typeProperties: ImpalaLinkedServiceTypePropertiesOutput;
  type: "Impala";
}

/** Impala server linked service properties. */
export interface ImpalaLinkedServiceTypePropertiesOutput {
  /** The IP address or host name of the Impala server. (i.e. 192.168.222.160) */
  host: any;
  /** The TCP port that the Impala server uses to listen for client connections. The default value is 21050. */
  port?: any;
  /** The authentication type to use. */
  authenticationType: "Anonymous" | "SASLUsername" | "UsernameAndPassword";
  /** The user name used to access the Impala server. The default value is anonymous when using SASLUsername. */
  username?: any;
  /** The password corresponding to the user name when using UsernameAndPassword. */
  password?: SecretBaseOutput;
  /** Specifies whether the connections to the server are encrypted using SSL. The default value is false. */
  enableSsl?: any;
  /** The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. */
  trustedCertPath?: any;
  /** Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false. */
  useSystemTrustStore?: any;
  /** Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false. */
  allowHostNameCNMismatch?: any;
  /** Specifies whether to allow self-signed certificates from the server. The default value is false. */
  allowSelfSignedServerCert?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Jira Service linked service. */
export interface JiraLinkedServiceOutput extends LinkedServiceOutputParent {
  /** Jira Service linked service properties. */
  typeProperties: JiraLinkedServiceTypePropertiesOutput;
  type: "Jira";
}

/** Jira Service linked service properties. */
export interface JiraLinkedServiceTypePropertiesOutput {
  /** The IP address or host name of the Jira service. (e.g. jira.example.com) */
  host: any;
  /** The TCP port that the Jira server uses to listen for client connections. The default value is 443 if connecting through HTTPS, or 8080 if connecting through HTTP. */
  port?: any;
  /** The user name that you use to access Jira Service. */
  username: any;
  /** The password corresponding to the user name that you provided in the username field. */
  password?: SecretBaseOutput;
  /** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
  useEncryptedEndpoints?: any;
  /** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
  useHostVerification?: any;
  /** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
  usePeerVerification?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Magento server linked service. */
export interface MagentoLinkedServiceOutput extends LinkedServiceOutputParent {
  /** Magento server linked service properties. */
  typeProperties: MagentoLinkedServiceTypePropertiesOutput;
  type: "Magento";
}

/** Magento server linked service properties. */
export interface MagentoLinkedServiceTypePropertiesOutput {
  /** The URL of the Magento instance. (i.e. 192.168.222.110/magento3) */
  host: any;
  /** The access token from Magento. */
  accessToken?: SecretBaseOutput;
  /** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
  useEncryptedEndpoints?: any;
  /** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
  useHostVerification?: any;
  /** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
  usePeerVerification?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** MariaDB server linked service. */
export interface MariaDBLinkedServiceOutput extends LinkedServiceOutputParent {
  /** MariaDB server linked service properties. */
  typeProperties: MariaDBLinkedServiceTypePropertiesOutput;
  type: "MariaDB";
}

/** MariaDB server linked service properties. */
export interface MariaDBLinkedServiceTypePropertiesOutput {
  /** An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString?: any;
  /** The Azure key vault secret reference of password in connection string. */
  pwd?: AzureKeyVaultSecretReferenceOutput;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Azure Database for MariaDB linked service. */
export interface AzureMariaDBLinkedServiceOutput
  extends LinkedServiceOutputParent {
  /** Azure Database for MariaDB linked service properties. */
  typeProperties: AzureMariaDBLinkedServiceTypePropertiesOutput;
  type: "AzureMariaDB";
}

/** Azure Database for MariaDB linked service properties. */
export interface AzureMariaDBLinkedServiceTypePropertiesOutput {
  /** An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString?: any;
  /** The Azure key vault secret reference of password in connection string. */
  pwd?: AzureKeyVaultSecretReferenceOutput;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Marketo server linked service. */
export interface MarketoLinkedServiceOutput extends LinkedServiceOutputParent {
  /** Marketo server linked service properties. */
  typeProperties: MarketoLinkedServiceTypePropertiesOutput;
  type: "Marketo";
}

/** Marketo server linked service properties. */
export interface MarketoLinkedServiceTypePropertiesOutput {
  /** The endpoint of the Marketo server. (i.e. 123-ABC-321.mktorest.com) */
  endpoint: any;
  /** The client Id of your Marketo service. */
  clientId: any;
  /** The client secret of your Marketo service. */
  clientSecret?: SecretBaseOutput;
  /** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
  useEncryptedEndpoints?: any;
  /** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
  useHostVerification?: any;
  /** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
  usePeerVerification?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Paypal Service linked service. */
export interface PaypalLinkedServiceOutput extends LinkedServiceOutputParent {
  /** Paypal Service linked service properties. */
  typeProperties: PaypalLinkedServiceTypePropertiesOutput;
  type: "Paypal";
}

/** Paypal Service linked service properties. */
export interface PaypalLinkedServiceTypePropertiesOutput {
  /** The URL of the PayPal instance. (i.e. api.sandbox.paypal.com) */
  host: any;
  /** The client ID associated with your PayPal application. */
  clientId: any;
  /** The client secret associated with your PayPal application. */
  clientSecret?: SecretBaseOutput;
  /** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
  useEncryptedEndpoints?: any;
  /** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
  useHostVerification?: any;
  /** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
  usePeerVerification?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Phoenix server linked service. */
export interface PhoenixLinkedServiceOutput extends LinkedServiceOutputParent {
  /** Phoenix server linked service properties. */
  typeProperties: PhoenixLinkedServiceTypePropertiesOutput;
  type: "Phoenix";
}

/** Phoenix server linked service properties. */
export interface PhoenixLinkedServiceTypePropertiesOutput {
  /** The IP address or host name of the Phoenix server. (i.e. 192.168.222.160) */
  host: any;
  /** The TCP port that the Phoenix server uses to listen for client connections. The default value is 8765. */
  port?: any;
  /** The partial URL corresponding to the Phoenix server. (i.e. /gateway/sandbox/phoenix/version). The default value is hbasephoenix if using WindowsAzureHDInsightService. */
  httpPath?: any;
  /** The authentication mechanism used to connect to the Phoenix server. */
  authenticationType:
    | "Anonymous"
    | "UsernameAndPassword"
    | "WindowsAzureHDInsightService";
  /** The user name used to connect to the Phoenix server. */
  username?: any;
  /** The password corresponding to the user name. */
  password?: SecretBaseOutput;
  /** Specifies whether the connections to the server are encrypted using SSL. The default value is false. */
  enableSsl?: any;
  /** The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. */
  trustedCertPath?: any;
  /** Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false. */
  useSystemTrustStore?: any;
  /** Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false. */
  allowHostNameCNMismatch?: any;
  /** Specifies whether to allow self-signed certificates from the server. The default value is false. */
  allowSelfSignedServerCert?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Presto server linked service. */
export interface PrestoLinkedServiceOutput extends LinkedServiceOutputParent {
  /** Presto server linked service properties. */
  typeProperties: PrestoLinkedServiceTypePropertiesOutput;
  type: "Presto";
}

/** Presto server linked service properties. */
export interface PrestoLinkedServiceTypePropertiesOutput {
  /** The IP address or host name of the Presto server. (i.e. 192.168.222.160) */
  host: any;
  /** The version of the Presto server. (i.e. 0.148-t) */
  serverVersion: any;
  /** The catalog context for all request against the server. */
  catalog: any;
  /** The TCP port that the Presto server uses to listen for client connections. The default value is 8080. */
  port?: any;
  /** The authentication mechanism used to connect to the Presto server. */
  authenticationType: "Anonymous" | "LDAP";
  /** The user name used to connect to the Presto server. */
  username?: any;
  /** The password corresponding to the user name. */
  password?: SecretBaseOutput;
  /** Specifies whether the connections to the server are encrypted using SSL. The default value is false. */
  enableSsl?: any;
  /** The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. */
  trustedCertPath?: any;
  /** Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false. */
  useSystemTrustStore?: any;
  /** Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false. */
  allowHostNameCNMismatch?: any;
  /** Specifies whether to allow self-signed certificates from the server. The default value is false. */
  allowSelfSignedServerCert?: any;
  /** The local time zone used by the connection. Valid values for this option are specified in the IANA Time Zone Database. The default value is the system time zone. */
  timeZoneID?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** QuickBooks server linked service. */
export interface QuickBooksLinkedServiceOutput
  extends LinkedServiceOutputParent {
  /** QuickBooks server linked service properties. */
  typeProperties: QuickBooksLinkedServiceTypePropertiesOutput;
  type: "QuickBooks";
}

/** QuickBooks server linked service properties. */
export interface QuickBooksLinkedServiceTypePropertiesOutput {
  /** Properties used to connect to QuickBooks. It is mutually exclusive with any other properties in the linked service. Type: object. */
  connectionProperties?: any;
  /** The endpoint of the QuickBooks server. (i.e. quickbooks.api.intuit.com) */
  endpoint: any;
  /** The company ID of the QuickBooks company to authorize. */
  companyId: any;
  /** The consumer key for OAuth 1.0 authentication. */
  consumerKey: any;
  /** The consumer secret for OAuth 1.0 authentication. */
  consumerSecret: SecretBaseOutput;
  /** The access token for OAuth 1.0 authentication. */
  accessToken: SecretBaseOutput;
  /** The access token secret for OAuth 1.0 authentication. */
  accessTokenSecret: SecretBaseOutput;
  /** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
  useEncryptedEndpoints?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** ServiceNow server linked service. */
export interface ServiceNowLinkedServiceOutput
  extends LinkedServiceOutputParent {
  /** ServiceNow server linked service properties. */
  typeProperties: ServiceNowLinkedServiceTypePropertiesOutput;
  type: "ServiceNow";
}

/** ServiceNow server linked service properties. */
export interface ServiceNowLinkedServiceTypePropertiesOutput {
  /** The endpoint of the ServiceNow server. (i.e. <instance>.service-now.com) */
  endpoint: any;
  /** The authentication type to use. */
  authenticationType: "Basic" | "OAuth2";
  /** The user name used to connect to the ServiceNow server for Basic and OAuth2 authentication. */
  username?: any;
  /** The password corresponding to the user name for Basic and OAuth2 authentication. */
  password?: SecretBaseOutput;
  /** The client id for OAuth2 authentication. */
  clientId?: any;
  /** The client secret for OAuth2 authentication. */
  clientSecret?: SecretBaseOutput;
  /** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
  useEncryptedEndpoints?: any;
  /** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
  useHostVerification?: any;
  /** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
  usePeerVerification?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Shopify Service linked service. */
export interface ShopifyLinkedServiceOutput extends LinkedServiceOutputParent {
  /** Shopify Service linked service properties. */
  typeProperties: ShopifyLinkedServiceTypePropertiesOutput;
  type: "Shopify";
}

/** Shopify Service linked service properties. */
export interface ShopifyLinkedServiceTypePropertiesOutput {
  /** The endpoint of the Shopify server. (i.e. mystore.myshopify.com) */
  host: any;
  /** The API access token that can be used to access Shopify’s data. The token won't expire if it is offline mode. */
  accessToken?: SecretBaseOutput;
  /** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
  useEncryptedEndpoints?: any;
  /** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
  useHostVerification?: any;
  /** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
  usePeerVerification?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Spark Server linked service. */
export interface SparkLinkedServiceOutput extends LinkedServiceOutputParent {
  /** Spark Server linked service properties. */
  typeProperties: SparkLinkedServiceTypePropertiesOutput;
  type: "Spark";
}

/** Spark Server linked service properties. */
export interface SparkLinkedServiceTypePropertiesOutput {
  /** IP address or host name of the Spark server */
  host: any;
  /** The TCP port that the Spark server uses to listen for client connections. */
  port: any;
  /** The type of Spark server. */
  serverType?: "SharkServer" | "SharkServer2" | "SparkThriftServer";
  /** The transport protocol to use in the Thrift layer. */
  thriftTransportProtocol?: "Binary" | "SASL" | "HTTP ";
  /** The authentication method used to access the Spark server. */
  authenticationType:
    | "Anonymous"
    | "Username"
    | "UsernameAndPassword"
    | "WindowsAzureHDInsightService";
  /** The user name that you use to access Spark Server. */
  username?: any;
  /** The password corresponding to the user name that you provided in the Username field */
  password?: SecretBaseOutput;
  /** The partial URL corresponding to the Spark server. */
  httpPath?: any;
  /** Specifies whether the connections to the server are encrypted using SSL. The default value is false. */
  enableSsl?: any;
  /** The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. */
  trustedCertPath?: any;
  /** Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false. */
  useSystemTrustStore?: any;
  /** Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false. */
  allowHostNameCNMismatch?: any;
  /** Specifies whether to allow self-signed certificates from the server. The default value is false. */
  allowSelfSignedServerCert?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Square Service linked service. */
export interface SquareLinkedServiceOutput extends LinkedServiceOutputParent {
  /** Square Service linked service properties. */
  typeProperties: SquareLinkedServiceTypePropertiesOutput;
  type: "Square";
}

/** Square Service linked service properties. */
export interface SquareLinkedServiceTypePropertiesOutput {
  /** Properties used to connect to Square. It is mutually exclusive with any other properties in the linked service. Type: object. */
  connectionProperties?: any;
  /** The URL of the Square instance. (i.e. mystore.mysquare.com) */
  host: any;
  /** The client ID associated with your Square application. */
  clientId: any;
  /** The client secret associated with your Square application. */
  clientSecret?: SecretBaseOutput;
  /** The redirect URL assigned in the Square application dashboard. (i.e. http://localhost:2500) */
  redirectUri: any;
  /** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
  useEncryptedEndpoints?: any;
  /** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
  useHostVerification?: any;
  /** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
  usePeerVerification?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Xero Service linked service. */
export interface XeroLinkedServiceOutput extends LinkedServiceOutputParent {
  /** Xero Service linked service properties. */
  typeProperties: XeroLinkedServiceTypePropertiesOutput;
  type: "Xero";
}

/** Xero Service linked service properties. */
export interface XeroLinkedServiceTypePropertiesOutput {
  /** Properties used to connect to Xero. It is mutually exclusive with any other properties in the linked service. Type: object. */
  connectionProperties?: any;
  /** The endpoint of the Xero server. (i.e. api.xero.com) */
  host: any;
  /** The consumer key associated with the Xero application. */
  consumerKey?: SecretBaseOutput;
  /**
   * The private key from the .pem file that was generated for your Xero private application. You must include all the text from the .pem file, including the Unix line endings(
   * ).
   */
  privateKey?: SecretBaseOutput;
  /** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
  useEncryptedEndpoints?: any;
  /** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
  useHostVerification?: any;
  /** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
  usePeerVerification?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Zoho server linked service. */
export interface ZohoLinkedServiceOutput extends LinkedServiceOutputParent {
  /** Zoho server linked service properties. */
  typeProperties: ZohoLinkedServiceTypePropertiesOutput;
  type: "Zoho";
}

/** Zoho server linked service properties. */
export interface ZohoLinkedServiceTypePropertiesOutput {
  /** Properties used to connect to Zoho. It is mutually exclusive with any other properties in the linked service. Type: object. */
  connectionProperties?: any;
  /** The endpoint of the Zoho server. (i.e. crm.zoho.com/crm/private) */
  endpoint: any;
  /** The access token for Zoho authentication. */
  accessToken?: SecretBaseOutput;
  /** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
  useEncryptedEndpoints?: any;
  /** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
  useHostVerification?: any;
  /** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
  usePeerVerification?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Vertica linked service. */
export interface VerticaLinkedServiceOutput extends LinkedServiceOutputParent {
  /** Vertica linked service properties. */
  typeProperties: VerticaLinkedServiceTypePropertiesOutput;
  type: "Vertica";
}

/** Vertica linked service properties. */
export interface VerticaLinkedServiceTypePropertiesOutput {
  /** An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString?: any;
  /** The Azure key vault secret reference of password in connection string. */
  pwd?: AzureKeyVaultSecretReferenceOutput;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Netezza linked service. */
export interface NetezzaLinkedServiceOutput extends LinkedServiceOutputParent {
  /** Netezza linked service properties. */
  typeProperties: NetezzaLinkedServiceTypePropertiesOutput;
  type: "Netezza";
}

/** Netezza linked service properties. */
export interface NetezzaLinkedServiceTypePropertiesOutput {
  /** An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString?: any;
  /** The Azure key vault secret reference of password in connection string. */
  pwd?: AzureKeyVaultSecretReferenceOutput;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Salesforce Marketing Cloud linked service. */
export interface SalesforceMarketingCloudLinkedServiceOutput
  extends LinkedServiceOutputParent {
  /** Salesforce Marketing Cloud linked service properties. */
  typeProperties: SalesforceMarketingCloudLinkedServiceTypePropertiesOutput;
  type: "SalesforceMarketingCloud";
}

/** Salesforce Marketing Cloud linked service properties. */
export interface SalesforceMarketingCloudLinkedServiceTypePropertiesOutput {
  /** Properties used to connect to Salesforce Marketing Cloud. It is mutually exclusive with any other properties in the linked service. Type: object. */
  connectionProperties?: any;
  /** The client ID associated with the Salesforce Marketing Cloud application. Type: string (or Expression with resultType string). */
  clientId: any;
  /** The client secret associated with the Salesforce Marketing Cloud application. Type: string (or Expression with resultType string). */
  clientSecret?: SecretBaseOutput;
  /** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. Type: boolean (or Expression with resultType boolean). */
  useEncryptedEndpoints?: any;
  /** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean). */
  useHostVerification?: any;
  /** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean). */
  usePeerVerification?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** HDInsight ondemand linked service. */
export interface HDInsightOnDemandLinkedServiceOutput
  extends LinkedServiceOutputParent {
  /** HDInsight ondemand linked service properties. */
  typeProperties: HDInsightOnDemandLinkedServiceTypePropertiesOutput;
  type: "HDInsightOnDemand";
}

/** HDInsight ondemand linked service properties. */
export interface HDInsightOnDemandLinkedServiceTypePropertiesOutput {
  /** Number of worker/data nodes in the cluster. Suggestion value: 4. Type: string (or Expression with resultType string). */
  clusterSize: any;
  /** The allowed idle time for the on-demand HDInsight cluster. Specifies how long the on-demand HDInsight cluster stays alive after completion of an activity run if there are no other active jobs in the cluster. The minimum value is 5 mins. Type: string (or Expression with resultType string). */
  timeToLive: any;
  /** Version of the HDInsight cluster.  Type: string (or Expression with resultType string). */
  version: any;
  /** Azure Storage linked service to be used by the on-demand cluster for storing and processing data. */
  linkedServiceName: LinkedServiceReferenceOutput;
  /** The customer’s subscription to host the cluster. Type: string (or Expression with resultType string). */
  hostSubscriptionId: any;
  /** The service principal id for the hostSubscriptionId. Type: string (or Expression with resultType string). */
  servicePrincipalId?: any;
  /** The key for the service principal id. */
  servicePrincipalKey?: SecretBaseOutput;
  /** The Tenant id/name to which the service principal belongs. Type: string (or Expression with resultType string). */
  tenant: any;
  /** The resource group where the cluster belongs. Type: string (or Expression with resultType string). */
  clusterResourceGroup: any;
  /** The prefix of cluster name, postfix will be distinct with timestamp. Type: string (or Expression with resultType string). */
  clusterNamePrefix?: any;
  /** The username to access the cluster. Type: string (or Expression with resultType string). */
  clusterUserName?: any;
  /** The password to access the cluster. */
  clusterPassword?: SecretBaseOutput;
  /** The username to SSH remotely connect to cluster’s node (for Linux). Type: string (or Expression with resultType string). */
  clusterSshUserName?: any;
  /** The password to SSH remotely connect cluster’s node (for Linux). */
  clusterSshPassword?: SecretBaseOutput;
  /** Specifies additional storage accounts for the HDInsight linked service so that the Data Factory service can register them on your behalf. */
  additionalLinkedServiceNames?: Array<LinkedServiceReferenceOutput>;
  /** The name of Azure SQL linked service that point to the HCatalog database. The on-demand HDInsight cluster is created by using the Azure SQL database as the metastore. */
  hcatalogLinkedServiceName?: LinkedServiceReferenceOutput;
  /** The cluster type. Type: string (or Expression with resultType string). */
  clusterType?: any;
  /** The version of spark if the cluster type is 'spark'. Type: string (or Expression with resultType string). */
  sparkVersion?: any;
  /** Specifies the core configuration parameters (as in core-site.xml) for the HDInsight cluster to be created. */
  coreConfiguration?: any;
  /** Specifies the HBase configuration parameters (hbase-site.xml) for the HDInsight cluster. */
  hBaseConfiguration?: any;
  /** Specifies the HDFS configuration parameters (hdfs-site.xml) for the HDInsight cluster. */
  hdfsConfiguration?: any;
  /** Specifies the hive configuration parameters (hive-site.xml) for the HDInsight cluster. */
  hiveConfiguration?: any;
  /** Specifies the MapReduce configuration parameters (mapred-site.xml) for the HDInsight cluster. */
  mapReduceConfiguration?: any;
  /** Specifies the Oozie configuration parameters (oozie-site.xml) for the HDInsight cluster. */
  oozieConfiguration?: any;
  /** Specifies the Storm configuration parameters (storm-site.xml) for the HDInsight cluster. */
  stormConfiguration?: any;
  /** Specifies the Yarn configuration parameters (yarn-site.xml) for the HDInsight cluster. */
  yarnConfiguration?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
  /** Specifies the size of the head node for the HDInsight cluster. */
  headNodeSize?: any;
  /** Specifies the size of the data node for the HDInsight cluster. */
  dataNodeSize?: any;
  /** Specifies the size of the Zoo Keeper node for the HDInsight cluster. */
  zookeeperNodeSize?: any;
  /** Custom script actions to run on HDI ondemand cluster once it's up. Please refer to https://docs.microsoft.com/en-us/azure/hdinsight/hdinsight-hadoop-customize-cluster-linux?toc=%2Fen-us%2Fazure%2Fhdinsight%2Fr-server%2FTOC.json&bc=%2Fen-us%2Fazure%2Fbread%2Ftoc.json#understanding-script-actions. */
  scriptActions?: Array<ScriptActionOutput>;
  /** The ARM resource ID for the vNet to which the cluster should be joined after creation. Type: string (or Expression with resultType string). */
  virtualNetworkId?: any;
  /** The ARM resource ID for the subnet in the vNet. If virtualNetworkId was specified, then this property is required. Type: string (or Expression with resultType string). */
  subnetName?: any;
}

/** Custom script action to run on HDI ondemand cluster once it's up. */
export interface ScriptActionOutput {
  /** The user provided name of the script action. */
  name: string;
  /** The URI for the script action. */
  uri: string;
  /** The node types on which the script action should be executed. */
  roles: any;
  /** The parameters for the script action. */
  parameters?: string;
}

/** Azure Data Lake Analytics linked service. */
export interface AzureDataLakeAnalyticsLinkedServiceOutput
  extends LinkedServiceOutputParent {
  /** Azure Data Lake Analytics linked service properties. */
  typeProperties: AzureDataLakeAnalyticsLinkedServiceTypePropertiesOutput;
  type: "AzureDataLakeAnalytics";
}

/** Azure Data Lake Analytics linked service properties. */
export interface AzureDataLakeAnalyticsLinkedServiceTypePropertiesOutput {
  /** The Azure Data Lake Analytics account name. Type: string (or Expression with resultType string). */
  accountName: any;
  /** The ID of the application used to authenticate against the Azure Data Lake Analytics account. Type: string (or Expression with resultType string). */
  servicePrincipalId?: any;
  /** The Key of the application used to authenticate against the Azure Data Lake Analytics account. */
  servicePrincipalKey?: SecretBaseOutput;
  /** The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). */
  tenant: any;
  /** Data Lake Analytics account subscription ID (if different from Data Factory account). Type: string (or Expression with resultType string). */
  subscriptionId?: any;
  /** Data Lake Analytics account resource group name (if different from Data Factory account). Type: string (or Expression with resultType string). */
  resourceGroupName?: any;
  /** Azure Data Lake Analytics URI Type: string (or Expression with resultType string). */
  dataLakeAnalyticsUri?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Azure Databricks linked service. */
export interface AzureDatabricksLinkedServiceOutput
  extends LinkedServiceOutputParent {
  /** Azure Databricks linked service properties. */
  typeProperties: AzureDatabricksLinkedServiceTypePropertiesOutput;
  type: "AzureDatabricks";
}

/** Azure Databricks linked service properties. */
export interface AzureDatabricksLinkedServiceTypePropertiesOutput {
  /** <REGION>.azuredatabricks.net, domain name of your Databricks deployment. Type: string (or Expression with resultType string). */
  domain: any;
  /** Access token for databricks REST API. Refer to https://docs.azuredatabricks.net/api/latest/authentication.html. Type: string (or Expression with resultType string). */
  accessToken?: SecretBaseOutput;
  /** Required to specify MSI, if using Workspace resource id for databricks REST API. Type: string (or Expression with resultType string). */
  authentication?: any;
  /** Workspace resource id for databricks REST API. Type: string (or Expression with resultType string). */
  workspaceResourceId?: any;
  /** The id of an existing interactive cluster that will be used for all runs of this activity. Type: string (or Expression with resultType string). */
  existingClusterId?: any;
  /** The id of an existing instance pool that will be used for all runs of this activity. Type: string (or Expression with resultType string). */
  instancePoolId?: any;
  /** If not using an existing interactive cluster, this specifies the Spark version of a new job cluster or instance pool nodes created for each run of this activity. Required if instancePoolId is specified. Type: string (or Expression with resultType string). */
  newClusterVersion?: any;
  /** If not using an existing interactive cluster, this specifies the number of worker nodes to use for the new job cluster or instance pool. For new job clusters, this a string-formatted Int32, like '1' means numOfWorker is 1 or '1:10' means auto-scale from 1 (min) to 10 (max). For instance pools, this is a string-formatted Int32, and can only specify a fixed number of worker nodes, such as '2'. Required if newClusterVersion is specified. Type: string (or Expression with resultType string). */
  newClusterNumOfWorker?: any;
  /** The node type of the new job cluster. This property is required if newClusterVersion is specified and instancePoolId is not specified. If instancePoolId is specified, this property is ignored. Type: string (or Expression with resultType string). */
  newClusterNodeType?: any;
  /** A set of optional, user-specified Spark configuration key-value pairs. */
  newClusterSparkConf?: Record<string, any>;
  /** A set of optional, user-specified Spark environment variables key-value pairs. */
  newClusterSparkEnvVars?: Record<string, any>;
  /** Additional tags for cluster resources. This property is ignored in instance pool configurations. */
  newClusterCustomTags?: Record<string, any>;
  /** Specify a location to deliver Spark driver, worker, and event logs. Type: string (or Expression with resultType string). */
  newClusterLogDestination?: any;
  /** The driver node type for the new job cluster. This property is ignored in instance pool configurations. Type: string (or Expression with resultType string). */
  newClusterDriverNodeType?: any;
  /** User-defined initialization scripts for the new cluster. Type: array of strings (or Expression with resultType array of strings). */
  newClusterInitScripts?: any;
  /** Enable the elastic disk on the new cluster. This property is now ignored, and takes the default elastic disk behavior in Databricks (elastic disks are always enabled). Type: boolean (or Expression with resultType boolean). */
  newClusterEnableElasticDisk?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
  /** The policy id for limiting the ability to configure clusters based on a user defined set of rules. Type: string (or Expression with resultType string). */
  policyId?: any;
}

/** Azure Databricks Delta Lake linked service. */
export interface AzureDatabricksDeltaLakeLinkedServiceOutput
  extends LinkedServiceOutputParent {
  /** Azure Databricks Delta Lake linked service properties. */
  typeProperties: AzureDatabricksDetltaLakeLinkedServiceTypePropertiesOutput;
  type: "AzureDatabricksDeltaLake";
}

/** Azure Databricks Delta Lake linked service properties. */
export interface AzureDatabricksDetltaLakeLinkedServiceTypePropertiesOutput {
  /** <REGION>.azuredatabricks.net, domain name of your Databricks deployment. Type: string (or Expression with resultType string). */
  domain: any;
  /** Access token for databricks REST API. Refer to https://docs.azuredatabricks.net/api/latest/authentication.html. Type: string, SecureString or AzureKeyVaultSecretReference. */
  accessToken: SecretBaseOutput;
  /** The id of an existing interactive cluster that will be used for all runs of this job. Type: string (or Expression with resultType string). */
  clusterId?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Responsys linked service. */
export interface ResponsysLinkedServiceOutput
  extends LinkedServiceOutputParent {
  /** Responsys linked service properties. */
  typeProperties: ResponsysLinkedServiceTypePropertiesOutput;
  type: "Responsys";
}

/** Responsys linked service properties. */
export interface ResponsysLinkedServiceTypePropertiesOutput {
  /** The endpoint of the Responsys server. */
  endpoint: any;
  /** The client ID associated with the Responsys application. Type: string (or Expression with resultType string). */
  clientId: any;
  /** The client secret associated with the Responsys application. Type: string (or Expression with resultType string). */
  clientSecret?: SecretBaseOutput;
  /** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. Type: boolean (or Expression with resultType boolean). */
  useEncryptedEndpoints?: any;
  /** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean). */
  useHostVerification?: any;
  /** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean). */
  usePeerVerification?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Dynamics AX linked service. */
export interface DynamicsAXLinkedServiceOutput
  extends LinkedServiceOutputParent {
  /** Dynamics AX linked service properties. */
  typeProperties: DynamicsAXLinkedServiceTypePropertiesOutput;
  type: "DynamicsAX";
}

/** Dynamics AX linked service properties. */
export interface DynamicsAXLinkedServiceTypePropertiesOutput {
  /** The Dynamics AX (or Dynamics 365 Finance and Operations) instance OData endpoint. */
  url: any;
  /** Specify the application's client ID. Type: string (or Expression with resultType string). */
  servicePrincipalId: any;
  /** Specify the application's key. Mark this field as a SecureString to store it securely in Data Factory, or reference a secret stored in Azure Key Vault. Type: string (or Expression with resultType string). */
  servicePrincipalKey: SecretBaseOutput;
  /** Specify the tenant information (domain name or tenant ID) under which your application resides. Retrieve it by hovering the mouse in the top-right corner of the Azure portal. Type: string (or Expression with resultType string). */
  tenant: any;
  /** Specify the resource you are requesting authorization. Type: string (or Expression with resultType string). */
  aadResourceId: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Oracle Service Cloud linked service. */
export interface OracleServiceCloudLinkedServiceOutput
  extends LinkedServiceOutputParent {
  /** Oracle Service Cloud linked service properties. */
  typeProperties: OracleServiceCloudLinkedServiceTypePropertiesOutput;
  type: "OracleServiceCloud";
}

/** Oracle Service Cloud linked service properties. */
export interface OracleServiceCloudLinkedServiceTypePropertiesOutput {
  /** The URL of the Oracle Service Cloud instance. */
  host: any;
  /** The user name that you use to access Oracle Service Cloud server. */
  username: any;
  /** The password corresponding to the user name that you provided in the username key. */
  password: SecretBaseOutput;
  /** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. Type: boolean (or Expression with resultType boolean). */
  useEncryptedEndpoints?: any;
  /** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean). */
  useHostVerification?: any;
  /** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean). */
  usePeerVerification?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Google AdWords service linked service. */
export interface GoogleAdWordsLinkedServiceOutput
  extends LinkedServiceOutputParent {
  /** Google AdWords service linked service properties. */
  typeProperties: GoogleAdWordsLinkedServiceTypePropertiesOutput;
  type: "GoogleAdWords";
}

/** Google AdWords service linked service properties. */
export interface GoogleAdWordsLinkedServiceTypePropertiesOutput {
  /** Properties used to connect to GoogleAds. It is mutually exclusive with any other properties in the linked service. Type: object. */
  connectionProperties?: any;
  /** The Client customer ID of the AdWords account that you want to fetch report data for. */
  clientCustomerID?: any;
  /** The developer token associated with the manager account that you use to grant access to the AdWords API. */
  developerToken?: SecretBaseOutput;
  /** The OAuth 2.0 authentication mechanism used for authentication. ServiceAuthentication can only be used on self-hosted IR. */
  authenticationType?: "ServiceAuthentication" | "UserAuthentication";
  /** The refresh token obtained from Google for authorizing access to AdWords for UserAuthentication. */
  refreshToken?: SecretBaseOutput;
  /** The client id of the google application used to acquire the refresh token. Type: string (or Expression with resultType string). */
  clientId?: any;
  /** The client secret of the google application used to acquire the refresh token. */
  clientSecret?: SecretBaseOutput;
  /** The service account email ID that is used for ServiceAuthentication and can only be used on self-hosted IR. */
  email?: any;
  /** The full path to the .p12 key file that is used to authenticate the service account email address and can only be used on self-hosted IR. */
  keyFilePath?: any;
  /** The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. */
  trustedCertPath?: any;
  /** Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false. */
  useSystemTrustStore?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** SAP Table Linked Service. */
export interface SapTableLinkedServiceOutput extends LinkedServiceOutputParent {
  /** Properties specific to this linked service type. */
  typeProperties: SapTableLinkedServiceTypePropertiesOutput;
  type: "SapTable";
}

/** Properties specific to this linked service type. */
export interface SapTableLinkedServiceTypePropertiesOutput {
  /** Host name of the SAP instance where the table is located. Type: string (or Expression with resultType string). */
  server?: any;
  /** System number of the SAP system where the table is located. (Usually a two-digit decimal number represented as a string.) Type: string (or Expression with resultType string). */
  systemNumber?: any;
  /** Client ID of the client on the SAP system where the table is located. (Usually a three-digit decimal number represented as a string) Type: string (or Expression with resultType string). */
  clientId?: any;
  /** Language of the SAP system where the table is located. The default value is EN. Type: string (or Expression with resultType string). */
  language?: any;
  /** SystemID of the SAP system where the table is located. Type: string (or Expression with resultType string). */
  systemId?: any;
  /** Username to access the SAP server where the table is located. Type: string (or Expression with resultType string). */
  userName?: any;
  /** Password to access the SAP server where the table is located. */
  password?: SecretBaseOutput;
  /** The hostname of the SAP Message Server. Type: string (or Expression with resultType string). */
  messageServer?: any;
  /** The service name or port number of the Message Server. Type: string (or Expression with resultType string). */
  messageServerService?: any;
  /** SNC activation indicator to access the SAP server where the table is located. Must be either 0 (off) or 1 (on). Type: string (or Expression with resultType string). */
  sncMode?: any;
  /** Initiator's SNC name to access the SAP server where the table is located. Type: string (or Expression with resultType string). */
  sncMyName?: any;
  /** Communication partner's SNC name to access the SAP server where the table is located. Type: string (or Expression with resultType string). */
  sncPartnerName?: any;
  /** External security product's library to access the SAP server where the table is located. Type: string (or Expression with resultType string). */
  sncLibraryPath?: any;
  /** SNC Quality of Protection. Allowed value include: 1, 2, 3, 8, 9. Type: string (or Expression with resultType string). */
  sncQop?: any;
  /** The Logon Group for the SAP System. Type: string (or Expression with resultType string). */
  logonGroup?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Azure Data Explorer (Kusto) linked service. */
export interface AzureDataExplorerLinkedServiceOutput
  extends LinkedServiceOutputParent {
  /** Azure Data Explorer (Kusto) linked service properties. */
  typeProperties: AzureDataExplorerLinkedServiceTypePropertiesOutput;
  type: "AzureDataExplorer";
}

/** Azure Data Explorer (Kusto) linked service properties. */
export interface AzureDataExplorerLinkedServiceTypePropertiesOutput {
  /** The endpoint of Azure Data Explorer (the engine's endpoint). URL will be in the format https://<clusterName>.<regionName>.kusto.windows.net. Type: string (or Expression with resultType string) */
  endpoint: any;
  /** The ID of the service principal used to authenticate against Azure Data Explorer. Type: string (or Expression with resultType string). */
  servicePrincipalId?: any;
  /** The key of the service principal used to authenticate against Kusto. */
  servicePrincipalKey?: SecretBaseOutput;
  /** Database name for connection. Type: string (or Expression with resultType string). */
  database: any;
  /** The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). */
  tenant?: any;
}

/** Azure Function linked service. */
export interface AzureFunctionLinkedServiceOutput
  extends LinkedServiceOutputParent {
  /** Azure Function linked service properties. */
  typeProperties: AzureFunctionLinkedServiceTypePropertiesOutput;
  type: "AzureFunction";
}

/** Azure Function linked service properties. */
export interface AzureFunctionLinkedServiceTypePropertiesOutput {
  /** The endpoint of the Azure Function App. URL will be in the format https://<accountName>.azurewebsites.net. */
  functionAppUrl: any;
  /** Function or Host key for Azure Function App. */
  functionKey?: SecretBaseOutput;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Snowflake linked service. */
export interface SnowflakeLinkedServiceOutput
  extends LinkedServiceOutputParent {
  /** Snowflake linked service properties. */
  typeProperties: SnowflakeLinkedServiceTypePropertiesOutput;
  type: "Snowflake";
}

/** Snowflake linked service properties. */
export interface SnowflakeLinkedServiceTypePropertiesOutput {
  /** The connection string of snowflake. Type: string, SecureString. */
  connectionString: any;
  /** The Azure key vault secret reference of password in connection string. */
  password?: AzureKeyVaultSecretReferenceOutput;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** SharePoint Online List linked service. */
export interface SharePointOnlineListLinkedServiceOutput
  extends LinkedServiceOutputParent {
  /** SharePoint Online List linked service properties. */
  typeProperties: SharePointOnlineListLinkedServiceTypePropertiesOutput;
  type: "SharePointOnlineList";
}

/** SharePoint Online List linked service properties. */
export interface SharePointOnlineListLinkedServiceTypePropertiesOutput {
  /** The URL of the SharePoint Online site. For example, https://contoso.sharepoint.com/sites/siteName. Type: string (or Expression with resultType string). */
  siteUrl: any;
  /** The tenant ID under which your application resides. You can find it from Azure portal Active Directory overview page. Type: string (or Expression with resultType string). */
  tenantId: any;
  /** The application (client) ID of your application registered in Azure Active Directory. Make sure to grant SharePoint site permission to this application. Type: string (or Expression with resultType string). */
  servicePrincipalId: any;
  /** The client secret of your application registered in Azure Active Directory. Type: string (or Expression with resultType string). */
  servicePrincipalKey: SecretBaseOutput;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Base class for all control activities like IfCondition, ForEach , Until. */
export interface ControlActivityOutputParent extends ActivityOutputParent {
  type:
    | "Container"
    | "ExecutePipeline"
    | "IfCondition"
    | "Switch"
    | "ForEach"
    | "Wait"
    | "Until"
    | "Validation"
    | "Filter"
    | "SetVariable"
    | "AppendVariable"
    | "WebHook";
}

/** Base class for all execution activities. */
export interface ExecutionActivityOutputParent extends ActivityOutputParent {
  /** Linked service reference. */
  linkedServiceName?: LinkedServiceReferenceOutput;
  /** Activity policy. */
  policy?: ActivityPolicyOutput;
  type:
    | "Execution"
    | "Copy"
    | "HDInsightHive"
    | "HDInsightPig"
    | "HDInsightMapReduce"
    | "HDInsightStreaming"
    | "HDInsightSpark"
    | "ExecuteSSISPackage"
    | "Custom"
    | "SqlServerStoredProcedure"
    | "Delete"
    | "AzureDataExplorerCommand"
    | "Lookup"
    | "WebActivity"
    | "GetMetadata"
    | "AzureMLBatchExecution"
    | "AzureMLUpdateResource"
    | "AzureMLExecutePipeline"
    | "DataLakeAnalyticsU-SQL"
    | "DatabricksNotebook"
    | "DatabricksSparkJar"
    | "DatabricksSparkPython"
    | "AzureFunctionActivity"
    | "ExecuteDataFlow"
    | "SynapseNotebook"
    | "SparkJob";
}

/** Execution policy for an activity. */
export interface ActivityPolicyOutput extends Record<string, unknown> {
  /** Specifies the timeout for the activity to run. The default timeout is 7 days. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  timeout?: any;
  /** Maximum ordinary retry attempts. Default is 0. Type: integer (or Expression with resultType integer), minimum: 0. */
  retry?: any;
  /** Interval between each retry attempt (in seconds). The default is 30 sec. */
  retryIntervalInSeconds?: number;
  /** When set to true, Input from activity is considered as secure and will not be logged to monitoring. */
  secureInput?: boolean;
  /** When set to true, Output from activity is considered as secure and will not be logged to monitoring. */
  secureOutput?: boolean;
}

/** Connector read setting. */
export interface StoreReadSettingsOutputParent extends Record<string, unknown> {
  /** The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer). */
  maxConcurrentConnections?: any;
  type:
    | "StoreReadSettings"
    | "AzureBlobStorageReadSettings"
    | "AzureBlobFSReadSettings"
    | "AzureDataLakeStoreReadSettings"
    | "AmazonS3ReadSettings"
    | "FileServerReadSettings"
    | "AzureFileStorageReadSettings"
    | "GoogleCloudStorageReadSettings"
    | "FtpReadSettings"
    | "SftpReadSettings"
    | "HttpReadSettings"
    | "HdfsReadSettings";
}

/** Azure blob read settings. */
export interface AzureBlobStorageReadSettingsOutput
  extends StoreReadSettingsOutputParent {
  /** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
  recursive?: any;
  /** Azure blob wildcardFolderPath. Type: string (or Expression with resultType string). */
  wildcardFolderPath?: any;
  /** Azure blob wildcardFileName. Type: string (or Expression with resultType string). */
  wildcardFileName?: any;
  /** The prefix filter for the Azure Blob name. Type: string (or Expression with resultType string). */
  prefix?: any;
  /** Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string). */
  fileListPath?: any;
  /** Indicates whether to enable partition discovery. */
  enablePartitionDiscovery?: boolean;
  /** Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). */
  partitionRootPath?: any;
  /** Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean). */
  deleteFilesAfterCompletion?: any;
  /** The start of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeStart?: any;
  /** The end of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeEnd?: any;
  type: "AzureBlobStorageReadSettings";
}

/** Azure blobFS read settings. */
export interface AzureBlobFSReadSettingsOutput
  extends StoreReadSettingsOutputParent {
  /** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
  recursive?: any;
  /** Azure blobFS wildcardFolderPath. Type: string (or Expression with resultType string). */
  wildcardFolderPath?: any;
  /** Azure blobFS wildcardFileName. Type: string (or Expression with resultType string). */
  wildcardFileName?: any;
  /** Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string). */
  fileListPath?: any;
  /** Indicates whether to enable partition discovery. */
  enablePartitionDiscovery?: boolean;
  /** Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). */
  partitionRootPath?: any;
  /** Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean). */
  deleteFilesAfterCompletion?: any;
  /** The start of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeStart?: any;
  /** The end of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeEnd?: any;
  type: "AzureBlobFSReadSettings";
}

/** Azure data lake store read settings. */
export interface AzureDataLakeStoreReadSettingsOutput
  extends StoreReadSettingsOutputParent {
  /** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
  recursive?: any;
  /** ADLS wildcardFolderPath. Type: string (or Expression with resultType string). */
  wildcardFolderPath?: any;
  /** ADLS wildcardFileName. Type: string (or Expression with resultType string). */
  wildcardFileName?: any;
  /** Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string). */
  fileListPath?: any;
  /** Lists files after the value (exclusive) based on file/folder names’ lexicographical order. Applies under the folderPath in data set, and filter files/sub-folders under the folderPath. Type: string (or Expression with resultType string). */
  listAfter?: any;
  /** Lists files before the value (inclusive) based on file/folder names’ lexicographical order. Applies under the folderPath in data set, and filter files/sub-folders under the folderPath. Type: string (or Expression with resultType string). */
  listBefore?: any;
  /** Indicates whether to enable partition discovery. */
  enablePartitionDiscovery?: boolean;
  /** Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). */
  partitionRootPath?: any;
  /** Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean). */
  deleteFilesAfterCompletion?: any;
  /** The start of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeStart?: any;
  /** The end of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeEnd?: any;
  type: "AzureDataLakeStoreReadSettings";
}

/** Azure data lake store read settings. */
export interface AmazonS3ReadSettingsOutput
  extends StoreReadSettingsOutputParent {
  /** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
  recursive?: any;
  /** AmazonS3 wildcardFolderPath. Type: string (or Expression with resultType string). */
  wildcardFolderPath?: any;
  /** AmazonS3 wildcardFileName. Type: string (or Expression with resultType string). */
  wildcardFileName?: any;
  /** The prefix filter for the S3 object name. Type: string (or Expression with resultType string). */
  prefix?: any;
  /** Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string). */
  fileListPath?: any;
  /** Indicates whether to enable partition discovery. */
  enablePartitionDiscovery?: boolean;
  /** Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). */
  partitionRootPath?: any;
  /** Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean). */
  deleteFilesAfterCompletion?: any;
  /** The start of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeStart?: any;
  /** The end of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeEnd?: any;
  type: "AmazonS3ReadSettings";
}

/** File server read settings. */
export interface FileServerReadSettingsOutput
  extends StoreReadSettingsOutputParent {
  /** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
  recursive?: any;
  /** FileServer wildcardFolderPath. Type: string (or Expression with resultType string). */
  wildcardFolderPath?: any;
  /** FileServer wildcardFileName. Type: string (or Expression with resultType string). */
  wildcardFileName?: any;
  /** Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string). */
  fileListPath?: any;
  /** Indicates whether to enable partition discovery. */
  enablePartitionDiscovery?: boolean;
  /** Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). */
  partitionRootPath?: any;
  /** Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean). */
  deleteFilesAfterCompletion?: any;
  /** The start of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeStart?: any;
  /** The end of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeEnd?: any;
  /** Specify a filter to be used to select a subset of files in the folderPath rather than all files. Type: string (or Expression with resultType string). */
  fileFilter?: any;
  type: "FileServerReadSettings";
}

/** Azure File Storage read settings. */
export interface AzureFileStorageReadSettingsOutput
  extends StoreReadSettingsOutputParent {
  /** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
  recursive?: any;
  /** Azure File Storage wildcardFolderPath. Type: string (or Expression with resultType string). */
  wildcardFolderPath?: any;
  /** Azure File Storage wildcardFileName. Type: string (or Expression with resultType string). */
  wildcardFileName?: any;
  /** The prefix filter for the Azure File name starting from root path. Type: string (or Expression with resultType string). */
  prefix?: any;
  /** Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string). */
  fileListPath?: any;
  /** Indicates whether to enable partition discovery. */
  enablePartitionDiscovery?: boolean;
  /** Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). */
  partitionRootPath?: any;
  /** Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean). */
  deleteFilesAfterCompletion?: any;
  /** The start of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeStart?: any;
  /** The end of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeEnd?: any;
  type: "AzureFileStorageReadSettings";
}

/** Sftp write settings. */
export interface SftpWriteSettingsOutput
  extends StoreWriteSettingsOutputParent {
  /** Specifies the timeout for writing each chunk to SFTP server. Default value: 01:00:00 (one hour). Type: string (or Expression with resultType string). */
  operationTimeout?: any;
  /** Upload to temporary file(s) and rename. Disable this option if your SFTP server doesn't support rename operation. Type: boolean (or Expression with resultType boolean). */
  useTempFileRename?: any;
  type: "SftpWriteSettings";
}

/** Connector write settings. */
export interface StoreWriteSettingsOutputParent
  extends Record<string, unknown> {
  /** The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer). */
  maxConcurrentConnections?: any;
  /** The type of copy behavior for copy sink. */
  copyBehavior?: any;
  type:
    | "StoreWriteSettings"
    | "SftpWriteSettings"
    | "AzureBlobStorageWriteSettings"
    | "AzureBlobFSWriteSettings"
    | "AzureDataLakeStoreWriteSettings"
    | "FileServerWriteSettings"
    | "AzureFileStorageWriteSettings";
}

/** Google Cloud Storage read settings. */
export interface GoogleCloudStorageReadSettingsOutput
  extends StoreReadSettingsOutputParent {
  /** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
  recursive?: any;
  /** Google Cloud Storage wildcardFolderPath. Type: string (or Expression with resultType string). */
  wildcardFolderPath?: any;
  /** Google Cloud Storage wildcardFileName. Type: string (or Expression with resultType string). */
  wildcardFileName?: any;
  /** The prefix filter for the Google Cloud Storage object name. Type: string (or Expression with resultType string). */
  prefix?: any;
  /** Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string). */
  fileListPath?: any;
  /** Indicates whether to enable partition discovery. */
  enablePartitionDiscovery?: boolean;
  /** Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). */
  partitionRootPath?: any;
  /** Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean). */
  deleteFilesAfterCompletion?: any;
  /** The start of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeStart?: any;
  /** The end of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeEnd?: any;
  type: "GoogleCloudStorageReadSettings";
}

/** Ftp read settings. */
export interface FtpReadSettingsOutput extends StoreReadSettingsOutputParent {
  /** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
  recursive?: any;
  /** Ftp wildcardFolderPath. Type: string (or Expression with resultType string). */
  wildcardFolderPath?: any;
  /** Ftp wildcardFileName. Type: string (or Expression with resultType string). */
  wildcardFileName?: any;
  /** Indicates whether to enable partition discovery. */
  enablePartitionDiscovery?: boolean;
  /** Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). */
  partitionRootPath?: any;
  /** Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean). */
  deleteFilesAfterCompletion?: any;
  /** Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string). */
  fileListPath?: any;
  /** Specify whether to use binary transfer mode for FTP stores. */
  useBinaryTransfer?: boolean;
  /** If true, disable parallel reading within each file. Default is false. Type: boolean (or Expression with resultType boolean). */
  disableChunking?: any;
  type: "FtpReadSettings";
}

/** Sftp read settings. */
export interface SftpReadSettingsOutput extends StoreReadSettingsOutputParent {
  /** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
  recursive?: any;
  /** Sftp wildcardFolderPath. Type: string (or Expression with resultType string). */
  wildcardFolderPath?: any;
  /** Sftp wildcardFileName. Type: string (or Expression with resultType string). */
  wildcardFileName?: any;
  /** Indicates whether to enable partition discovery. */
  enablePartitionDiscovery?: boolean;
  /** Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). */
  partitionRootPath?: any;
  /** Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string). */
  fileListPath?: any;
  /** Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean). */
  deleteFilesAfterCompletion?: any;
  /** The start of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeStart?: any;
  /** The end of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeEnd?: any;
  /** If true, disable parallel reading within each file. Default is false. Type: boolean (or Expression with resultType boolean). */
  disableChunking?: any;
  type: "SftpReadSettings";
}

/** Sftp read settings. */
export interface HttpReadSettingsOutput extends StoreReadSettingsOutputParent {
  /** The HTTP method used to call the RESTful API. The default is GET. Type: string (or Expression with resultType string). */
  requestMethod?: any;
  /** The HTTP request body to the RESTful API if requestMethod is POST. Type: string (or Expression with resultType string). */
  requestBody?: any;
  /** The additional HTTP headers in the request to the RESTful API. Type: string (or Expression with resultType string). */
  additionalHeaders?: any;
  /** Specifies the timeout for a HTTP client to get HTTP response from HTTP server. */
  requestTimeout?: any;
  /** Indicates whether to enable partition discovery. */
  enablePartitionDiscovery?: boolean;
  /** Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). */
  partitionRootPath?: any;
  type: "HttpReadSettings";
}

/** HDFS read settings. */
export interface HdfsReadSettingsOutput extends StoreReadSettingsOutputParent {
  /** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
  recursive?: any;
  /** HDFS wildcardFolderPath. Type: string (or Expression with resultType string). */
  wildcardFolderPath?: any;
  /** HDFS wildcardFileName. Type: string (or Expression with resultType string). */
  wildcardFileName?: any;
  /** Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string). */
  fileListPath?: any;
  /** Indicates whether to enable partition discovery. */
  enablePartitionDiscovery?: boolean;
  /** Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). */
  partitionRootPath?: any;
  /** The start of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeStart?: any;
  /** The end of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeEnd?: any;
  /** Specifies Distcp-related settings. */
  distcpSettings?: DistcpSettingsOutput;
  /** Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean). */
  deleteFilesAfterCompletion?: any;
  type: "HdfsReadSettings";
}

/** Distcp settings. */
export interface DistcpSettingsOutput {
  /** Specifies the Yarn ResourceManager endpoint. Type: string (or Expression with resultType string). */
  resourceManagerEndpoint: any;
  /** Specifies an existing folder path which will be used to store temp Distcp command script. The script file is generated by ADF and will be removed after Copy job finished. Type: string (or Expression with resultType string). */
  tempScriptPath: any;
  /** Specifies the Distcp options. Type: string (or Expression with resultType string). */
  distcpOptions?: any;
}

/** Azure blob write settings. */
export interface AzureBlobStorageWriteSettingsOutput
  extends StoreWriteSettingsOutputParent {
  /** Indicates the block size(MB) when writing data to blob. Type: integer (or Expression with resultType integer). */
  blockSizeInMB?: any;
  type: "AzureBlobStorageWriteSettings";
}

/** Azure blobFS write settings. */
export interface AzureBlobFSWriteSettingsOutput
  extends StoreWriteSettingsOutputParent {
  /** Indicates the block size(MB) when writing data to blob. Type: integer (or Expression with resultType integer). */
  blockSizeInMB?: any;
  type: "AzureBlobFSWriteSettings";
}

/** Azure data lake store write settings. */
export interface AzureDataLakeStoreWriteSettingsOutput
  extends StoreWriteSettingsOutputParent {
  /** Specifies the expiry time of the written files. The time is applied to the UTC time zone in the format of "2018-12-01T05:00:00Z". Default value is NULL. Type: integer (or Expression with resultType integer). */
  expiryDateTime?: any;
  type: "AzureDataLakeStoreWriteSettings";
}

/** File server write settings. */
export interface FileServerWriteSettingsOutput
  extends StoreWriteSettingsOutputParent {
  type: "FileServerWriteSettings";
}

/** Azure File Storage write settings. */
export interface AzureFileStorageWriteSettingsOutput
  extends StoreWriteSettingsOutputParent {
  type: "AzureFileStorageWriteSettings";
}

/** Format read settings. */
export interface FormatReadSettingsOutputParent
  extends Record<string, unknown> {
  type:
    | "FormatReadSettings"
    | "DelimitedTextReadSettings"
    | "JsonReadSettings"
    | "XmlReadSettings"
    | "BinaryReadSettings";
}

/** Compression read settings. */
export interface CompressionReadSettingsOutputParent
  extends Record<string, unknown> {
  type:
    | "CompressionReadSettings"
    | "ZipDeflateReadSettings"
    | "TarReadSettings"
    | "TarGZipReadSettings";
}

/** The ZipDeflate compression read settings. */
export interface ZipDeflateReadSettingsOutput
  extends CompressionReadSettingsOutputParent {
  /** Preserve the zip file name as folder path. Type: boolean (or Expression with resultType boolean). */
  preserveZipFileNameAsFolder?: any;
  type: "ZipDeflateReadSettings";
}

/** The Tar compression read settings. */
export interface TarReadSettingsOutput
  extends CompressionReadSettingsOutputParent {
  /** Preserve the compression file name as folder path. Type: boolean (or Expression with resultType boolean). */
  preserveCompressionFileNameAsFolder?: any;
  type: "TarReadSettings";
}

/** The TarGZip compression read settings. */
export interface TarGZipReadSettingsOutput
  extends CompressionReadSettingsOutputParent {
  /** Preserve the compression file name as folder path. Type: boolean (or Expression with resultType boolean). */
  preserveCompressionFileNameAsFolder?: any;
  type: "TarGZipReadSettings";
}

/** Delimited text read settings. */
export interface DelimitedTextReadSettingsOutput
  extends FormatReadSettingsOutputParent {
  /** Indicates the number of non-empty rows to skip when reading data from input files. Type: integer (or Expression with resultType integer). */
  skipLineCount?: any;
  /** Compression settings. */
  compressionProperties?: CompressionReadSettingsOutput;
  type: "DelimitedTextReadSettings";
}

/** Json read settings. */
export interface JsonReadSettingsOutput extends FormatReadSettingsOutputParent {
  /** Compression settings. */
  compressionProperties?: CompressionReadSettingsOutput;
  type: "JsonReadSettings";
}

/** Xml read settings. */
export interface XmlReadSettingsOutput extends FormatReadSettingsOutputParent {
  /** Compression settings. */
  compressionProperties?: CompressionReadSettingsOutput;
  /** Indicates what validation method is used when reading the xml files. Allowed values: 'none', 'xsd', or 'dtd'. Type: string (or Expression with resultType string). */
  validationMode?: any;
  /** Indicates whether type detection is enabled when reading the xml files. Type: boolean (or Expression with resultType boolean). */
  detectDataType?: any;
  /** Indicates whether namespace is enabled when reading the xml files. Type: boolean (or Expression with resultType boolean). */
  namespaces?: any;
  /** Namespace uri to prefix mappings to override the prefixes in column names when namespace is enabled, if no prefix is defined for a namespace uri, the prefix of xml element/attribute name in the xml data file will be used. Example: "{"http://www.example.com/xml":"prefix"}" Type: object (or Expression with resultType object). */
  namespacePrefixes?: any;
  type: "XmlReadSettings";
}

/** Binary read settings. */
export interface BinaryReadSettingsOutput
  extends FormatReadSettingsOutputParent {
  /** Compression settings. */
  compressionProperties?: CompressionReadSettingsOutput;
  type: "BinaryReadSettings";
}

/** Format write settings. */
export interface FormatWriteSettingsOutputParent
  extends Record<string, unknown> {
  type:
    | "FormatWriteSettings"
    | "AvroWriteSettings"
    | "OrcWriteSettings"
    | "ParquetWriteSettings"
    | "DelimitedTextWriteSettings"
    | "JsonWriteSettings";
}

/** Avro write settings. */
export interface AvroWriteSettingsOutput
  extends FormatWriteSettingsOutputParent {
  /** Top level record name in write result, which is required in AVRO spec. */
  recordName?: string;
  /** Record namespace in the write result. */
  recordNamespace?: string;
  /** Limit the written file's row count to be smaller than or equal to the specified count. Type: integer (or Expression with resultType integer). */
  maxRowsPerFile?: any;
  /** Specifies the file name pattern <fileNamePrefix>_<fileIndex>.<fileExtension> when copy from non-file based store without partitionOptions. Type: string (or Expression with resultType string). */
  fileNamePrefix?: any;
  type: "AvroWriteSettings";
}

/** Orc write settings. */
export interface OrcWriteSettingsOutput
  extends FormatWriteSettingsOutputParent {
  /** Limit the written file's row count to be smaller than or equal to the specified count. Type: integer (or Expression with resultType integer). */
  maxRowsPerFile?: any;
  /** Specifies the file name pattern <fileNamePrefix>_<fileIndex>.<fileExtension> when copy from non-file based store without partitionOptions. Type: string (or Expression with resultType string). */
  fileNamePrefix?: any;
  type: "OrcWriteSettings";
}

/** Parquet write settings. */
export interface ParquetWriteSettingsOutput
  extends FormatWriteSettingsOutputParent {
  /** Limit the written file's row count to be smaller than or equal to the specified count. Type: integer (or Expression with resultType integer). */
  maxRowsPerFile?: any;
  /** Specifies the file name pattern <fileNamePrefix>_<fileIndex>.<fileExtension> when copy from non-file based store without partitionOptions. Type: string (or Expression with resultType string). */
  fileNamePrefix?: any;
  type: "ParquetWriteSettings";
}

/** Delimited text write settings. */
export interface DelimitedTextWriteSettingsOutput
  extends FormatWriteSettingsOutputParent {
  /** Indicates whether string values should always be enclosed with quotes. Type: boolean (or Expression with resultType boolean). */
  quoteAllText?: any;
  /** The file extension used to create the files. Type: string (or Expression with resultType string). */
  fileExtension: any;
  /** Limit the written file's row count to be smaller than or equal to the specified count. Type: integer (or Expression with resultType integer). */
  maxRowsPerFile?: any;
  /** Specifies the file name pattern <fileNamePrefix>_<fileIndex>.<fileExtension> when copy from non-file based store without partitionOptions. Type: string (or Expression with resultType string). */
  fileNamePrefix?: any;
  type: "DelimitedTextWriteSettings";
}

/** Json write settings. */
export interface JsonWriteSettingsOutput
  extends FormatWriteSettingsOutputParent {
  /** File pattern of JSON. This setting controls the way a collection of JSON objects will be treated. The default value is 'setOfObjects'. It is case-sensitive. */
  filePattern?: any;
  type: "JsonWriteSettings";
}

/** A copy activity Avro source. */
export interface AvroSourceOutput extends CopySourceOutputParent {
  /** Avro store settings. */
  storeSettings?: StoreReadSettingsOutput;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: any;
  type: "AvroSource";
}

/** A copy activity source. */
export interface CopySourceOutputParent extends Record<string, unknown> {
  /** Source retry count. Type: integer (or Expression with resultType integer). */
  sourceRetryCount?: any;
  /** Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  sourceRetryWait?: any;
  /** The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer). */
  maxConcurrentConnections?: any;
  type:
    | "CopySource"
    | "AvroSource"
    | "ExcelSource"
    | "ParquetSource"
    | "DelimitedTextSource"
    | "JsonSource"
    | "XmlSource"
    | "OrcSource"
    | "BinarySource"
    | "TabularSource"
    | "AzureTableSource"
    | "BlobSource"
    | "DocumentDbCollectionSource"
    | "CosmosDbSqlApiSource"
    | "DynamicsSource"
    | "DynamicsCrmSource"
    | "CommonDataServiceForAppsSource"
    | "RelationalSource"
    | "InformixSource"
    | "MicrosoftAccessSource"
    | "Db2Source"
    | "OdbcSource"
    | "MySqlSource"
    | "PostgreSqlSource"
    | "SybaseSource"
    | "SapBwSource"
    | "ODataSource"
    | "SalesforceSource"
    | "SalesforceServiceCloudSource"
    | "SapCloudForCustomerSource"
    | "SapEccSource"
    | "SapHanaSource"
    | "SapOpenHubSource"
    | "SapTableSource"
    | "RestSource"
    | "SqlSource"
    | "SqlServerSource"
    | "AmazonRdsForSqlServerSource"
    | "AzureSqlSource"
    | "SqlMISource"
    | "SqlDWSource"
    | "FileSystemSource"
    | "HdfsSource"
    | "AzureMySqlSource"
    | "AzureDataExplorerSource"
    | "OracleSource"
    | "AmazonRdsForOracleSource"
    | "TeradataSource"
    | "WebSource"
    | "CassandraSource"
    | "MongoDbSource"
    | "MongoDbAtlasSource"
    | "MongoDbV2Source"
    | "CosmosDbMongoDbApiSource"
    | "Office365Source"
    | "AzureDataLakeStoreSource"
    | "AzureBlobFSSource"
    | "HttpSource"
    | "AmazonMWSSource"
    | "AzurePostgreSqlSource"
    | "ConcurSource"
    | "CouchbaseSource"
    | "DrillSource"
    | "EloquaSource"
    | "GoogleBigQuerySource"
    | "GreenplumSource"
    | "HBaseSource"
    | "HiveSource"
    | "HubspotSource"
    | "ImpalaSource"
    | "JiraSource"
    | "MagentoSource"
    | "MariaDBSource"
    | "AzureMariaDBSource"
    | "MarketoSource"
    | "PaypalSource"
    | "PhoenixSource"
    | "PrestoSource"
    | "QuickBooksSource"
    | "ServiceNowSource"
    | "ShopifySource"
    | "SparkSource"
    | "SquareSource"
    | "XeroSource"
    | "ZohoSource"
    | "NetezzaSource"
    | "VerticaSource"
    | "SalesforceMarketingCloudSource"
    | "ResponsysSource"
    | "DynamicsAXSource"
    | "OracleServiceCloudSource"
    | "GoogleAdWordsSource"
    | "AmazonRedshiftSource"
    | "SnowflakeSource"
    | "AzureDatabricksDeltaLakeSource"
    | "SharePointOnlineListSource";
}

/** A copy activity excel source. */
export interface ExcelSourceOutput extends CopySourceOutputParent {
  /** Excel store settings. */
  storeSettings?: StoreReadSettingsOutput;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: any;
  type: "ExcelSource";
}

/** A copy activity Parquet source. */
export interface ParquetSourceOutput extends CopySourceOutputParent {
  /** Parquet store settings. */
  storeSettings?: StoreReadSettingsOutput;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: any;
  type: "ParquetSource";
}

/** A copy activity DelimitedText source. */
export interface DelimitedTextSourceOutput extends CopySourceOutputParent {
  /** DelimitedText store settings. */
  storeSettings?: StoreReadSettingsOutput;
  /** DelimitedText format settings. */
  formatSettings?: DelimitedTextReadSettingsOutput;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: any;
  type: "DelimitedTextSource";
}

/** A copy activity Json source. */
export interface JsonSourceOutput extends CopySourceOutputParent {
  /** Json store settings. */
  storeSettings?: StoreReadSettingsOutput;
  /** Json format settings. */
  formatSettings?: JsonReadSettingsOutput;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: any;
  type: "JsonSource";
}

/** A copy activity Xml source. */
export interface XmlSourceOutput extends CopySourceOutputParent {
  /** Xml store settings. */
  storeSettings?: StoreReadSettingsOutput;
  /** Xml format settings. */
  formatSettings?: XmlReadSettingsOutput;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: any;
  type: "XmlSource";
}

/** A copy activity ORC source. */
export interface OrcSourceOutput extends CopySourceOutputParent {
  /** ORC store settings. */
  storeSettings?: StoreReadSettingsOutput;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: any;
  type: "OrcSource";
}

/** A copy activity DelimitedText sink. */
export interface DelimitedTextSinkOutput extends CopySinkOutputParent {
  /** DelimitedText store settings. */
  storeSettings?: StoreWriteSettingsOutput;
  /** DelimitedText format settings. */
  formatSettings?: DelimitedTextWriteSettingsOutput;
  type: "DelimitedTextSink";
}

/** A copy activity sink. */
export interface CopySinkOutputParent extends Record<string, unknown> {
  /** Write batch size. Type: integer (or Expression with resultType integer), minimum: 0. */
  writeBatchSize?: any;
  /** Write batch timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  writeBatchTimeout?: any;
  /** Sink retry count. Type: integer (or Expression with resultType integer). */
  sinkRetryCount?: any;
  /** Sink retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  sinkRetryWait?: any;
  /** The maximum concurrent connection count for the sink data store. Type: integer (or Expression with resultType integer). */
  maxConcurrentConnections?: any;
  type:
    | "CopySink"
    | "DelimitedTextSink"
    | "JsonSink"
    | "OrcSink"
    | "RestSink"
    | "AzurePostgreSqlSink"
    | "AzureMySqlSink"
    | "AzureDatabricksDeltaLakeSink"
    | "SapCloudForCustomerSink"
    | "AzureQueueSink"
    | "AzureTableSink"
    | "AvroSink"
    | "ParquetSink"
    | "BinarySink"
    | "BlobSink"
    | "FileSystemSink"
    | "DocumentDbCollectionSink"
    | "CosmosDbSqlApiSink"
    | "SqlSink"
    | "SqlServerSink"
    | "AzureSqlSink"
    | "SqlMISink"
    | "SqlDWSink"
    | "SnowflakeSink"
    | "OracleSink"
    | "AzureDataLakeStoreSink"
    | "AzureBlobFSSink"
    | "AzureSearchIndexSink"
    | "OdbcSink"
    | "InformixSink"
    | "MicrosoftAccessSink"
    | "DynamicsSink"
    | "DynamicsCrmSink"
    | "CommonDataServiceForAppsSink"
    | "AzureDataExplorerSink"
    | "SalesforceSink"
    | "SalesforceServiceCloudSink"
    | "CosmosDbMongoDbApiSink";
}

/** A copy activity Json sink. */
export interface JsonSinkOutput extends CopySinkOutputParent {
  /** Json store settings. */
  storeSettings?: StoreWriteSettingsOutput;
  /** Json format settings. */
  formatSettings?: JsonWriteSettingsOutput;
  type: "JsonSink";
}

/** A copy activity ORC sink. */
export interface OrcSinkOutput extends CopySinkOutputParent {
  /** ORC store settings. */
  storeSettings?: StoreWriteSettingsOutput;
  /** ORC format settings. */
  formatSettings?: OrcWriteSettingsOutput;
  type: "OrcSink";
}

/** Copy activity. */
export interface CopyActivityOutput extends ExecutionActivityOutputParent {
  /** Copy activity properties. */
  typeProperties: CopyActivityTypePropertiesOutput;
  /** List of inputs for the activity. */
  inputs?: Array<DatasetReferenceOutput>;
  /** List of outputs for the activity. */
  outputs?: Array<DatasetReferenceOutput>;
  type: "Copy";
}

/** Copy activity properties. */
export interface CopyActivityTypePropertiesOutput {
  /** Copy activity source. */
  source: CopySourceOutput;
  /** Copy activity sink. */
  sink: CopySinkOutput;
  /** Copy activity translator. If not specified, tabular translator is used. */
  translator?: any;
  /** Specifies whether to copy data via an interim staging. Default value is false. Type: boolean (or Expression with resultType boolean). */
  enableStaging?: any;
  /** Specifies interim staging settings when EnableStaging is true. */
  stagingSettings?: StagingSettingsOutput;
  /** Maximum number of concurrent sessions opened on the source or sink to avoid overloading the data store. Type: integer (or Expression with resultType integer), minimum: 0. */
  parallelCopies?: any;
  /** Maximum number of data integration units that can be used to perform this data movement. Type: integer (or Expression with resultType integer), minimum: 0. */
  dataIntegrationUnits?: any;
  /** Whether to skip incompatible row. Default value is false. Type: boolean (or Expression with resultType boolean). */
  enableSkipIncompatibleRow?: any;
  /** Redirect incompatible row settings when EnableSkipIncompatibleRow is true. */
  redirectIncompatibleRowSettings?: RedirectIncompatibleRowSettingsOutput;
  /** (Deprecated. Please use LogSettings) Log storage settings customer need to provide when enabling session log. */
  logStorageSettings?: LogStorageSettingsOutput;
  /** Log settings customer needs provide when enabling log. */
  logSettings?: LogSettingsOutput;
  /** Preserve Rules. */
  preserveRules?: Array<any>;
  /** Preserve rules. */
  preserve?: Array<any>;
  /** Whether to enable Data Consistency validation. Type: boolean (or Expression with resultType boolean). */
  validateDataConsistency?: any;
  /** Specify the fault tolerance for data consistency. */
  skipErrorFile?: SkipErrorFileOutput;
}

/** Staging settings. */
export interface StagingSettingsOutput extends Record<string, unknown> {
  /** Staging linked service reference. */
  linkedServiceName: LinkedServiceReferenceOutput;
  /** The path to storage for storing the interim data. Type: string (or Expression with resultType string). */
  path?: any;
  /** Specifies whether to use compression when copying data via an interim staging. Default value is false. Type: boolean (or Expression with resultType boolean). */
  enableCompression?: any;
}

/** Redirect incompatible row settings */
export interface RedirectIncompatibleRowSettingsOutput
  extends Record<string, unknown> {
  /** Name of the Azure Storage, Storage SAS, or Azure Data Lake Store linked service used for redirecting incompatible row. Must be specified if redirectIncompatibleRowSettings is specified. Type: string (or Expression with resultType string). */
  linkedServiceName: any;
  /** The path for storing the redirect incompatible row data. Type: string (or Expression with resultType string). */
  path?: any;
}

/** (Deprecated. Please use LogSettings) Log storage settings. */
export interface LogStorageSettingsOutput extends Record<string, unknown> {
  /** Log storage linked service reference. */
  linkedServiceName: LinkedServiceReferenceOutput;
  /** The path to storage for storing detailed logs of activity execution. Type: string (or Expression with resultType string). */
  path?: any;
  /** Gets or sets the log level, support: Info, Warning. Type: string (or Expression with resultType string). */
  logLevel?: any;
  /** Specifies whether to enable reliable logging. Type: boolean (or Expression with resultType boolean). */
  enableReliableLogging?: any;
}

/** Log settings. */
export interface LogSettingsOutput {
  /** Specifies whether to enable copy activity log. Type: boolean (or Expression with resultType boolean). */
  enableCopyActivityLog?: any;
  /** Specifies settings for copy activity log. */
  copyActivityLogSettings?: CopyActivityLogSettingsOutput;
  /** Log location settings customer needs to provide when enabling log. */
  logLocationSettings: LogLocationSettingsOutput;
}

/** Settings for copy activity log. */
export interface CopyActivityLogSettingsOutput {
  /** Gets or sets the log level, support: Info, Warning. Type: string (or Expression with resultType string). */
  logLevel?: any;
  /** Specifies whether to enable reliable logging. Type: boolean (or Expression with resultType boolean). */
  enableReliableLogging?: any;
}

/** Log location settings. */
export interface LogLocationSettingsOutput {
  /** Log storage linked service reference. */
  linkedServiceName: LinkedServiceReferenceOutput;
  /** The path to storage for storing detailed logs of activity execution. Type: string (or Expression with resultType string). */
  path?: any;
}

/** Skip error file. */
export interface SkipErrorFileOutput {
  /** Skip if file is deleted by other client during copy. Default is true. Type: boolean (or Expression with resultType boolean). */
  fileMissing?: any;
  /** Skip if source/sink file changed by other concurrent write. Default is false. Type: boolean (or Expression with resultType boolean). */
  dataInconsistency?: any;
}

/** A copy activity Binary source. */
export interface BinarySourceOutput extends CopySourceOutputParent {
  /** Binary store settings. */
  storeSettings?: StoreReadSettingsOutput;
  /** Binary format settings. */
  formatSettings?: BinaryReadSettingsOutput;
  type: "BinarySource";
}

/** Copy activity sources of tabular type. */
export interface TabularSourceOutputParent extends CopySourceOutputParent {
  /** Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  queryTimeout?: any;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: any;
  type:
    | "TabularSource"
    | "AzureTableSource"
    | "InformixSource"
    | "Db2Source"
    | "OdbcSource"
    | "MySqlSource"
    | "PostgreSqlSource"
    | "SybaseSource"
    | "SapBwSource"
    | "SalesforceSource"
    | "SapCloudForCustomerSource"
    | "SapEccSource"
    | "SapHanaSource"
    | "SapOpenHubSource"
    | "SapTableSource"
    | "SqlSource"
    | "SqlServerSource"
    | "AmazonRdsForSqlServerSource"
    | "AzureSqlSource"
    | "SqlMISource"
    | "SqlDWSource"
    | "AzureMySqlSource"
    | "TeradataSource"
    | "CassandraSource"
    | "AmazonMWSSource"
    | "AzurePostgreSqlSource"
    | "ConcurSource"
    | "CouchbaseSource"
    | "DrillSource"
    | "EloquaSource"
    | "GoogleBigQuerySource"
    | "GreenplumSource"
    | "HBaseSource"
    | "HiveSource"
    | "HubspotSource"
    | "ImpalaSource"
    | "JiraSource"
    | "MagentoSource"
    | "MariaDBSource"
    | "AzureMariaDBSource"
    | "MarketoSource"
    | "PaypalSource"
    | "PhoenixSource"
    | "PrestoSource"
    | "QuickBooksSource"
    | "ServiceNowSource"
    | "ShopifySource"
    | "SparkSource"
    | "SquareSource"
    | "XeroSource"
    | "ZohoSource"
    | "NetezzaSource"
    | "VerticaSource"
    | "SalesforceMarketingCloudSource"
    | "ResponsysSource"
    | "DynamicsAXSource"
    | "OracleServiceCloudSource"
    | "GoogleAdWordsSource"
    | "AmazonRedshiftSource";
}

/** A copy activity Azure Table source. */
export interface AzureTableSourceOutput extends TabularSourceOutputParent {
  /** Azure Table source query. Type: string (or Expression with resultType string). */
  azureTableSourceQuery?: any;
  /** Azure Table source ignore table not found. Type: boolean (or Expression with resultType boolean). */
  azureTableSourceIgnoreTableNotFound?: any;
  type: "AzureTableSource";
}

/** A copy activity Azure Blob source. */
export interface BlobSourceOutput extends CopySourceOutputParent {
  /** Treat empty as null. Type: boolean (or Expression with resultType boolean). */
  treatEmptyAsNull?: any;
  /** Number of header lines to skip from each blob. Type: integer (or Expression with resultType integer). */
  skipHeaderLineCount?: any;
  /** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
  recursive?: any;
  type: "BlobSource";
}

/** A copy activity Document Database Collection source. */
export interface DocumentDbCollectionSourceOutput
  extends CopySourceOutputParent {
  /** Documents query. Type: string (or Expression with resultType string). */
  query?: any;
  /** Nested properties separator. Type: string (or Expression with resultType string). */
  nestingSeparator?: any;
  /** Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  queryTimeout?: any;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: any;
  type: "DocumentDbCollectionSource";
}

/** A copy activity Azure CosmosDB (SQL API) Collection source. */
export interface CosmosDbSqlApiSourceOutput extends CopySourceOutputParent {
  /** SQL API query. Type: string (or Expression with resultType string). */
  query?: any;
  /** Page size of the result. Type: integer (or Expression with resultType integer). */
  pageSize?: any;
  /** Preferred regions. Type: array of strings (or Expression with resultType array of strings). */
  preferredRegions?: any;
  /** Whether detect primitive values as datetime values. Type: boolean (or Expression with resultType boolean). */
  detectDatetime?: any;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: any;
  type: "CosmosDbSqlApiSource";
}

/** A copy activity Dynamics source. */
export interface DynamicsSourceOutput extends CopySourceOutputParent {
  /** FetchXML is a proprietary query language that is used in Microsoft Dynamics (online & on-premises). Type: string (or Expression with resultType string). */
  query?: any;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: any;
  type: "DynamicsSource";
}

/** A copy activity Dynamics CRM source. */
export interface DynamicsCrmSourceOutput extends CopySourceOutputParent {
  /** FetchXML is a proprietary query language that is used in Microsoft Dynamics CRM (online & on-premises). Type: string (or Expression with resultType string). */
  query?: any;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: any;
  type: "DynamicsCrmSource";
}

/** A copy activity Common Data Service for Apps source. */
export interface CommonDataServiceForAppsSourceOutput
  extends CopySourceOutputParent {
  /** FetchXML is a proprietary query language that is used in Microsoft Common Data Service for Apps (online & on-premises). Type: string (or Expression with resultType string). */
  query?: any;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: any;
  type: "CommonDataServiceForAppsSource";
}

/** A copy activity source for various relational databases. */
export interface RelationalSourceOutput extends CopySourceOutputParent {
  /** Database query. Type: string (or Expression with resultType string). */
  query?: any;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: any;
  type: "RelationalSource";
}

/** A copy activity source for Informix. */
export interface InformixSourceOutput extends TabularSourceOutputParent {
  /** Database query. Type: string (or Expression with resultType string). */
  query?: any;
  type: "InformixSource";
}

/** A copy activity source for Microsoft Access. */
export interface MicrosoftAccessSourceOutput extends CopySourceOutputParent {
  /** Database query. Type: string (or Expression with resultType string). */
  query?: any;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: any;
  type: "MicrosoftAccessSource";
}

/** A copy activity source for Db2 databases. */
export interface Db2SourceOutput extends TabularSourceOutputParent {
  /** Database query. Type: string (or Expression with resultType string). */
  query?: any;
  type: "Db2Source";
}

/** A copy activity source for ODBC databases. */
export interface OdbcSourceOutput extends TabularSourceOutputParent {
  /** Database query. Type: string (or Expression with resultType string). */
  query?: any;
  type: "OdbcSource";
}

/** A copy activity source for MySQL databases. */
export interface MySqlSourceOutput extends TabularSourceOutputParent {
  /** Database query. Type: string (or Expression with resultType string). */
  query?: any;
  type: "MySqlSource";
}

/** A copy activity source for PostgreSQL databases. */
export interface PostgreSqlSourceOutput extends TabularSourceOutputParent {
  /** Database query. Type: string (or Expression with resultType string). */
  query?: any;
  type: "PostgreSqlSource";
}

/** A copy activity source for Sybase databases. */
export interface SybaseSourceOutput extends TabularSourceOutputParent {
  /** Database query. Type: string (or Expression with resultType string). */
  query?: any;
  type: "SybaseSource";
}

/** A copy activity source for SapBW server via MDX. */
export interface SapBwSourceOutput extends TabularSourceOutputParent {
  /** MDX query. Type: string (or Expression with resultType string). */
  query?: any;
  type: "SapBwSource";
}

/** A copy activity source for OData source. */
export interface ODataSourceOutput extends CopySourceOutputParent {
  /** OData query. For example, "$top=1". Type: string (or Expression with resultType string). */
  query?: any;
  /** The timeout (TimeSpan) to get an HTTP response. It is the timeout to get a response, not the timeout to read response data. Default value: 00:05:00. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  httpRequestTimeout?: any;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: any;
  type: "ODataSource";
}

/** A copy activity Salesforce source. */
export interface SalesforceSourceOutput extends TabularSourceOutputParent {
  /** Database query. Type: string (or Expression with resultType string). */
  query?: any;
  /** The read behavior for the operation. Default is Query. */
  readBehavior?: "Query" | "QueryAll";
  type: "SalesforceSource";
}

/** A copy activity Salesforce Service Cloud source. */
export interface SalesforceServiceCloudSourceOutput
  extends CopySourceOutputParent {
  /** Database query. Type: string (or Expression with resultType string). */
  query?: any;
  /** The read behavior for the operation. Default is Query. */
  readBehavior?: "Query" | "QueryAll";
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: any;
  type: "SalesforceServiceCloudSource";
}

/** A copy activity source for SAP Cloud for Customer source. */
export interface SapCloudForCustomerSourceOutput
  extends TabularSourceOutputParent {
  /** SAP Cloud for Customer OData query. For example, "$top=1". Type: string (or Expression with resultType string). */
  query?: any;
  /** The timeout (TimeSpan) to get an HTTP response. It is the timeout to get a response, not the timeout to read response data. Default value: 00:05:00. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  httpRequestTimeout?: any;
  type: "SapCloudForCustomerSource";
}

/** A copy activity source for SAP ECC source. */
export interface SapEccSourceOutput extends TabularSourceOutputParent {
  /** SAP ECC OData query. For example, "$top=1". Type: string (or Expression with resultType string). */
  query?: any;
  /** The timeout (TimeSpan) to get an HTTP response. It is the timeout to get a response, not the timeout to read response data. Default value: 00:05:00. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  httpRequestTimeout?: any;
  type: "SapEccSource";
}

/** A copy activity source for SAP HANA source. */
export interface SapHanaSourceOutput extends TabularSourceOutputParent {
  /** SAP HANA Sql query. Type: string (or Expression with resultType string). */
  query?: any;
  /** The packet size of data read from SAP HANA. Type: integer(or Expression with resultType integer). */
  packetSize?: any;
  /** The partition mechanism that will be used for SAP HANA read in parallel. */
  partitionOption?:
    | "None"
    | "PhysicalPartitionsOfTable"
    | "SapHanaDynamicRange";
  /** The settings that will be leveraged for SAP HANA source partitioning. */
  partitionSettings?: SapHanaPartitionSettingsOutput;
  type: "SapHanaSource";
}

/** The settings that will be leveraged for SAP HANA source partitioning. */
export interface SapHanaPartitionSettingsOutput {
  /** The name of the column that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
  partitionColumnName?: any;
}

/** A copy activity source for SAP Business Warehouse Open Hub Destination source. */
export interface SapOpenHubSourceOutput extends TabularSourceOutputParent {
  /** Whether to exclude the records of the last request. The default value is true. Type: boolean (or Expression with resultType boolean). */
  excludeLastRequest?: any;
  /** The ID of request for delta loading. Once it is set, only data with requestId larger than the value of this property will be retrieved. The default value is 0. Type: integer (or Expression with resultType integer ). */
  baseRequestId?: any;
  /** Specifies the custom RFC function module that will be used to read data from SAP Table. Type: string (or Expression with resultType string). */
  customRfcReadTableFunctionModule?: any;
  /** The single character that will be used as delimiter passed to SAP RFC as well as splitting the output data retrieved. Type: string (or Expression with resultType string). */
  sapDataColumnDelimiter?: any;
  type: "SapOpenHubSource";
}

/** A copy activity source for SAP Table source. */
export interface SapTableSourceOutput extends TabularSourceOutputParent {
  /** The number of rows to be retrieved. Type: integer(or Expression with resultType integer). */
  rowCount?: any;
  /** The number of rows that will be skipped. Type: integer (or Expression with resultType integer). */
  rowSkips?: any;
  /** The fields of the SAP table that will be retrieved. For example, column0, column1. Type: string (or Expression with resultType string). */
  rfcTableFields?: any;
  /** The options for the filtering of the SAP Table. For example, COLUMN0 EQ SOME VALUE. Type: string (or Expression with resultType string). */
  rfcTableOptions?: any;
  /** Specifies the maximum number of rows that will be retrieved at a time when retrieving data from SAP Table. Type: integer (or Expression with resultType integer). */
  batchSize?: any;
  /** Specifies the custom RFC function module that will be used to read data from SAP Table. Type: string (or Expression with resultType string). */
  customRfcReadTableFunctionModule?: any;
  /** The single character that will be used as delimiter passed to SAP RFC as well as splitting the output data retrieved. Type: string (or Expression with resultType string). */
  sapDataColumnDelimiter?: any;
  /** The partition mechanism that will be used for SAP table read in parallel. */
  partitionOption?:
    | "None"
    | "PartitionOnInt"
    | "PartitionOnCalendarYear"
    | "PartitionOnCalendarMonth"
    | "PartitionOnCalendarDate"
    | "PartitionOnTime";
  /** The settings that will be leveraged for SAP table source partitioning. */
  partitionSettings?: SapTablePartitionSettingsOutput;
  type: "SapTableSource";
}

/** The settings that will be leveraged for SAP table source partitioning. */
export interface SapTablePartitionSettingsOutput {
  /** The name of the column that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
  partitionColumnName?: any;
  /** The maximum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
  partitionUpperBound?: any;
  /** The minimum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
  partitionLowerBound?: any;
  /** The maximum value of partitions the table will be split into. Type: integer (or Expression with resultType string). */
  maxPartitionsNumber?: any;
}

/** A copy activity Rest service Sink. */
export interface RestSinkOutput extends CopySinkOutputParent {
  /** The HTTP method used to call the RESTful API. The default is POST. Type: string (or Expression with resultType string). */
  requestMethod?: any;
  /** The additional HTTP headers in the request to the RESTful API. Type: string (or Expression with resultType string). */
  additionalHeaders?: any;
  /** The timeout (TimeSpan) to get an HTTP response. It is the timeout to get a response, not the timeout to read response data. Default value: 00:01:40. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  httpRequestTimeout?: any;
  /** The time to await before sending next request, in milliseconds */
  requestInterval?: any;
  /** Http Compression Type to Send data in compressed format with Optimal Compression Level, Default is None. And The Only Supported option is Gzip. */
  httpCompressionType?: any;
  type: "RestSink";
}

/** A copy activity Rest service source. */
export interface RestSourceOutput extends CopySourceOutputParent {
  /** The HTTP method used to call the RESTful API. The default is GET. Type: string (or Expression with resultType string). */
  requestMethod?: any;
  /** The HTTP request body to the RESTful API if requestMethod is POST. Type: string (or Expression with resultType string). */
  requestBody?: any;
  /** The additional HTTP headers in the request to the RESTful API. Type: string (or Expression with resultType string). */
  additionalHeaders?: any;
  /** The pagination rules to compose next page requests. Type: string (or Expression with resultType string). */
  paginationRules?: any;
  /** The timeout (TimeSpan) to get an HTTP response. It is the timeout to get a response, not the timeout to read response data. Default value: 00:01:40. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  httpRequestTimeout?: any;
  /** The time to await before sending next page request. */
  requestInterval?: any;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: any;
  type: "RestSource";
}

/** A copy activity SQL source. */
export interface SqlSourceOutput extends TabularSourceOutputParent {
  /** SQL reader query. Type: string (or Expression with resultType string). */
  sqlReaderQuery?: any;
  /** Name of the stored procedure for a SQL Database source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string). */
  sqlReaderStoredProcedureName?: any;
  /** Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}". */
  storedProcedureParameters?: Record<string, StoredProcedureParameterOutput>;
  /** Specifies the transaction locking behavior for the SQL source. Allowed values: ReadCommitted/ReadUncommitted/RepeatableRead/Serializable/Snapshot. The default value is ReadCommitted. Type: string (or Expression with resultType string). */
  isolationLevel?: any;
  /** The partition mechanism that will be used for Sql read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "DynamicRange". */
  partitionOption?: any;
  /** The settings that will be leveraged for Sql source partitioning. */
  partitionSettings?: SqlPartitionSettingsOutput;
  type: "SqlSource";
}

/** SQL stored procedure parameter. */
export interface StoredProcedureParameterOutput {
  /** Stored procedure parameter value. Type: string (or Expression with resultType string). */
  value?: any;
  /** Stored procedure parameter type. */
  type?: "String" | "Int" | "Int64" | "Decimal" | "Guid" | "Boolean" | "Date";
}

/** The settings that will be leveraged for Sql source partitioning. */
export interface SqlPartitionSettingsOutput {
  /** The name of the column in integer or datetime type that will be used for proceeding partitioning. If not specified, the primary key of the table is auto-detected and used as the partition column. Type: string (or Expression with resultType string). */
  partitionColumnName?: any;
  /** The maximum value of the partition column for partition range splitting. This value is used to decide the partition stride, not for filtering the rows in table. All rows in the table or query result will be partitioned and copied. Type: string (or Expression with resultType string). */
  partitionUpperBound?: any;
  /** The minimum value of the partition column for partition range splitting. This value is used to decide the partition stride, not for filtering the rows in table. All rows in the table or query result will be partitioned and copied. Type: string (or Expression with resultType string). */
  partitionLowerBound?: any;
}

/** A copy activity SQL server source. */
export interface SqlServerSourceOutput extends TabularSourceOutputParent {
  /** SQL reader query. Type: string (or Expression with resultType string). */
  sqlReaderQuery?: any;
  /** Name of the stored procedure for a SQL Database source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string). */
  sqlReaderStoredProcedureName?: any;
  /** Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}". */
  storedProcedureParameters?: Record<string, StoredProcedureParameterOutput>;
  /** Which additional types to produce. */
  produceAdditionalTypes?: any;
  /** The partition mechanism that will be used for Sql read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "DynamicRange". */
  partitionOption?: any;
  /** The settings that will be leveraged for Sql source partitioning. */
  partitionSettings?: SqlPartitionSettingsOutput;
  type: "SqlServerSource";
}

/** A copy activity Amazon RDS for SQL Server source. */
export interface AmazonRdsForSqlServerSourceOutput
  extends TabularSourceOutputParent {
  /** SQL reader query. Type: string (or Expression with resultType string). */
  sqlReaderQuery?: any;
  /** Name of the stored procedure for a SQL Database source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string). */
  sqlReaderStoredProcedureName?: any;
  /** Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}". */
  storedProcedureParameters?: Record<string, StoredProcedureParameterOutput>;
  /** Which additional types to produce. */
  produceAdditionalTypes?: any;
  /** The partition mechanism that will be used for Sql read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "DynamicRange". */
  partitionOption?: any;
  /** The settings that will be leveraged for Sql source partitioning. */
  partitionSettings?: SqlPartitionSettingsOutput;
  type: "AmazonRdsForSqlServerSource";
}

/** A copy activity Azure SQL source. */
export interface AzureSqlSourceOutput extends TabularSourceOutputParent {
  /** SQL reader query. Type: string (or Expression with resultType string). */
  sqlReaderQuery?: any;
  /** Name of the stored procedure for a SQL Database source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string). */
  sqlReaderStoredProcedureName?: any;
  /** Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}". */
  storedProcedureParameters?: Record<string, StoredProcedureParameterOutput>;
  /** Which additional types to produce. */
  produceAdditionalTypes?: any;
  /** The partition mechanism that will be used for Sql read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "DynamicRange". */
  partitionOption?: any;
  /** The settings that will be leveraged for Sql source partitioning. */
  partitionSettings?: SqlPartitionSettingsOutput;
  type: "AzureSqlSource";
}

/** A copy activity Azure SQL Managed Instance source. */
export interface SqlMISourceOutput extends TabularSourceOutputParent {
  /** SQL reader query. Type: string (or Expression with resultType string). */
  sqlReaderQuery?: any;
  /** Name of the stored procedure for a Azure SQL Managed Instance source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string). */
  sqlReaderStoredProcedureName?: any;
  /** Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}". */
  storedProcedureParameters?: Record<string, StoredProcedureParameterOutput>;
  /** Which additional types to produce. */
  produceAdditionalTypes?: any;
  /** The partition mechanism that will be used for Sql read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "DynamicRange". */
  partitionOption?: any;
  /** The settings that will be leveraged for Sql source partitioning. */
  partitionSettings?: SqlPartitionSettingsOutput;
  type: "SqlMISource";
}

/** A copy activity SQL Data Warehouse source. */
export interface SqlDWSourceOutput extends TabularSourceOutputParent {
  /** SQL Data Warehouse reader query. Type: string (or Expression with resultType string). */
  sqlReaderQuery?: any;
  /** Name of the stored procedure for a SQL Data Warehouse source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string). */
  sqlReaderStoredProcedureName?: any;
  /** Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}". Type: object (or Expression with resultType object), itemType: StoredProcedureParameter. */
  storedProcedureParameters?: any;
  /** The partition mechanism that will be used for Sql read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "DynamicRange". */
  partitionOption?: any;
  /** The settings that will be leveraged for Sql source partitioning. */
  partitionSettings?: SqlPartitionSettingsOutput;
  type: "SqlDWSource";
}

/** A copy activity file system source. */
export interface FileSystemSourceOutput extends CopySourceOutputParent {
  /** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
  recursive?: any;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: any;
  type: "FileSystemSource";
}

/** A copy activity HDFS source. */
export interface HdfsSourceOutput extends CopySourceOutputParent {
  /** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
  recursive?: any;
  /** Specifies Distcp-related settings. */
  distcpSettings?: DistcpSettingsOutput;
  type: "HdfsSource";
}

/** A copy activity Azure MySQL source. */
export interface AzureMySqlSourceOutput extends TabularSourceOutputParent {
  /** Database query. Type: string (or Expression with resultType string). */
  query?: any;
  type: "AzureMySqlSource";
}

/** A copy activity Azure Data Explorer (Kusto) source. */
export interface AzureDataExplorerSourceOutput extends CopySourceOutputParent {
  /** Database query. Should be a Kusto Query Language (KQL) query. Type: string (or Expression with resultType string). */
  query: any;
  /** The name of the Boolean option that controls whether truncation is applied to result-sets that go beyond a certain row-count limit. */
  noTruncation?: any;
  /** Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).. */
  queryTimeout?: any;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: any;
  type: "AzureDataExplorerSource";
}

/** A copy activity Oracle source. */
export interface OracleSourceOutput extends CopySourceOutputParent {
  /** Oracle reader query. Type: string (or Expression with resultType string). */
  oracleReaderQuery?: any;
  /** Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  queryTimeout?: any;
  /** The partition mechanism that will be used for Oracle read in parallel. */
  partitionOption?: "None" | "PhysicalPartitionsOfTable" | "DynamicRange";
  /** The settings that will be leveraged for Oracle source partitioning. */
  partitionSettings?: OraclePartitionSettingsOutput;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: any;
  type: "OracleSource";
}

/** The settings that will be leveraged for Oracle source partitioning. */
export interface OraclePartitionSettingsOutput {
  /** Names of the physical partitions of Oracle table. */
  partitionNames?: any;
  /** The name of the column in integer type that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
  partitionColumnName?: any;
  /** The maximum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
  partitionUpperBound?: any;
  /** The minimum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
  partitionLowerBound?: any;
}

/** A copy activity AmazonRdsForOracle source. */
export interface AmazonRdsForOracleSourceOutput extends CopySourceOutputParent {
  /** AmazonRdsForOracle reader query. Type: string (or Expression with resultType string). */
  oracleReaderQuery?: any;
  /** Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  queryTimeout?: any;
  /** The partition mechanism that will be used for AmazonRdsForOracle read in parallel. Type: string (or Expression with resultType string). */
  partitionOption?: any;
  /** The settings that will be leveraged for AmazonRdsForOracle source partitioning. */
  partitionSettings?: AmazonRdsForOraclePartitionSettingsOutput;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: any;
  type: "AmazonRdsForOracleSource";
}

/** The settings that will be leveraged for AmazonRdsForOracle source partitioning. */
export interface AmazonRdsForOraclePartitionSettingsOutput {
  /** Names of the physical partitions of AmazonRdsForOracle table. */
  partitionNames?: any;
  /** The name of the column in integer type that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
  partitionColumnName?: any;
  /** The maximum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
  partitionUpperBound?: any;
  /** The minimum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
  partitionLowerBound?: any;
}

/** A copy activity Teradata source. */
export interface TeradataSourceOutput extends TabularSourceOutputParent {
  /** Teradata query. Type: string (or Expression with resultType string). */
  query?: any;
  /** The partition mechanism that will be used for teradata read in parallel. */
  partitionOption?: "None" | "Hash" | "DynamicRange";
  /** The settings that will be leveraged for teradata source partitioning. */
  partitionSettings?: TeradataPartitionSettingsOutput;
  type: "TeradataSource";
}

/** The settings that will be leveraged for teradata source partitioning. */
export interface TeradataPartitionSettingsOutput {
  /** The name of the column that will be used for proceeding range or hash partitioning. Type: string (or Expression with resultType string). */
  partitionColumnName?: any;
  /** The maximum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
  partitionUpperBound?: any;
  /** The minimum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
  partitionLowerBound?: any;
}

/** A copy activity source for web page table. */
export interface WebSourceOutput extends CopySourceOutputParent {
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: any;
  type: "WebSource";
}

/** A copy activity source for a Cassandra database. */
export interface CassandraSourceOutput extends TabularSourceOutputParent {
  /** Database query. Should be a SQL-92 query expression or Cassandra Query Language (CQL) command. Type: string (or Expression with resultType string). */
  query?: any;
  /** The consistency level specifies how many Cassandra servers must respond to a read request before returning data to the client application. Cassandra checks the specified number of Cassandra servers for data to satisfy the read request. Must be one of cassandraSourceReadConsistencyLevels. The default value is 'ONE'. It is case-insensitive. */
  consistencyLevel?:
    | "ALL"
    | "EACH_QUORUM"
    | "QUORUM"
    | "LOCAL_QUORUM"
    | "ONE"
    | "TWO"
    | "THREE"
    | "LOCAL_ONE"
    | "SERIAL"
    | "LOCAL_SERIAL";
  type: "CassandraSource";
}

/** A copy activity source for a MongoDB database. */
export interface MongoDbSourceOutput extends CopySourceOutputParent {
  /** Database query. Should be a SQL-92 query expression. Type: string (or Expression with resultType string). */
  query?: any;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: any;
  type: "MongoDbSource";
}

/** A copy activity source for a MongoDB Atlas database. */
export interface MongoDbAtlasSourceOutput extends CopySourceOutputParent {
  /** Specifies selection filter using query operators. To return all documents in a collection, omit this parameter or pass an empty document ({}). Type: string (or Expression with resultType string). */
  filter?: any;
  /** Cursor methods for Mongodb query */
  cursorMethods?: MongoDbCursorMethodsPropertiesOutput;
  /** Specifies the number of documents to return in each batch of the response from MongoDB Atlas instance. In most cases, modifying the batch size will not affect the user or the application. This property's main purpose is to avoid hit the limitation of response size. Type: integer (or Expression with resultType integer). */
  batchSize?: any;
  /** Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  queryTimeout?: any;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: any;
  type: "MongoDbAtlasSource";
}

/** Cursor methods for Mongodb query */
export interface MongoDbCursorMethodsPropertiesOutput
  extends Record<string, unknown> {
  /** Specifies the fields to return in the documents that match the query filter. To return all fields in the matching documents, omit this parameter. Type: string (or Expression with resultType string). */
  project?: any;
  /** Specifies the order in which the query returns matching documents. Type: string (or Expression with resultType string). Type: string (or Expression with resultType string). */
  sort?: any;
  /** Specifies the how many documents skipped and where MongoDB begins returning results. This approach may be useful in implementing paginated results. Type: integer (or Expression with resultType integer). */
  skip?: any;
  /** Specifies the maximum number of documents the server returns. limit() is analogous to the LIMIT statement in a SQL database. Type: integer (or Expression with resultType integer). */
  limit?: any;
}

/** A copy activity source for a MongoDB database. */
export interface MongoDbV2SourceOutput extends CopySourceOutputParent {
  /** Specifies selection filter using query operators. To return all documents in a collection, omit this parameter or pass an empty document ({}). Type: string (or Expression with resultType string). */
  filter?: any;
  /** Cursor methods for Mongodb query */
  cursorMethods?: MongoDbCursorMethodsPropertiesOutput;
  /** Specifies the number of documents to return in each batch of the response from MongoDB instance. In most cases, modifying the batch size will not affect the user or the application. This property's main purpose is to avoid hit the limitation of response size. Type: integer (or Expression with resultType integer). */
  batchSize?: any;
  /** Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  queryTimeout?: any;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: any;
  type: "MongoDbV2Source";
}

/** A copy activity source for a CosmosDB (MongoDB API) database. */
export interface CosmosDbMongoDbApiSourceOutput extends CopySourceOutputParent {
  /** Specifies selection filter using query operators. To return all documents in a collection, omit this parameter or pass an empty document ({}). Type: string (or Expression with resultType string). */
  filter?: any;
  /** Cursor methods for Mongodb query. */
  cursorMethods?: MongoDbCursorMethodsPropertiesOutput;
  /** Specifies the number of documents to return in each batch of the response from MongoDB instance. In most cases, modifying the batch size will not affect the user or the application. This property's main purpose is to avoid hit the limitation of response size. Type: integer (or Expression with resultType integer). */
  batchSize?: any;
  /** Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  queryTimeout?: any;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: any;
  type: "CosmosDbMongoDbApiSource";
}

/** A copy activity source for an Office 365 service. */
export interface Office365SourceOutput extends CopySourceOutputParent {
  /** The groups containing all the users. Type: array of strings (or Expression with resultType array of strings). */
  allowedGroups?: any;
  /** The user scope uri. Type: string (or Expression with resultType string). */
  userScopeFilterUri?: any;
  /** The Column to apply the <paramref name="StartTime"/> and <paramref name="EndTime"/>. Type: string (or Expression with resultType string). */
  dateFilterColumn?: any;
  /** Start time of the requested range for this dataset. Type: string (or Expression with resultType string). */
  startTime?: any;
  /** End time of the requested range for this dataset. Type: string (or Expression with resultType string). */
  endTime?: any;
  /** The columns to be read out from the Office 365 table. Type: array of objects (or Expression with resultType array of objects). Example: [ { "name": "Id" }, { "name": "CreatedDateTime" } ] */
  outputColumns?: any;
  type: "Office365Source";
}

/** A copy activity Azure Data Lake source. */
export interface AzureDataLakeStoreSourceOutput extends CopySourceOutputParent {
  /** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
  recursive?: any;
  type: "AzureDataLakeStoreSource";
}

/** A copy activity Azure BlobFS source. */
export interface AzureBlobFSSourceOutput extends CopySourceOutputParent {
  /** Treat empty as null. Type: boolean (or Expression with resultType boolean). */
  treatEmptyAsNull?: any;
  /** Number of header lines to skip from each blob. Type: integer (or Expression with resultType integer). */
  skipHeaderLineCount?: any;
  /** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
  recursive?: any;
  type: "AzureBlobFSSource";
}

/** A copy activity source for an HTTP file. */
export interface HttpSourceOutput extends CopySourceOutputParent {
  /** Specifies the timeout for a HTTP client to get HTTP response from HTTP server. The default value is equivalent to System.Net.HttpWebRequest.Timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  httpRequestTimeout?: any;
  type: "HttpSource";
}

/** A copy activity Amazon Marketplace Web Service source. */
export interface AmazonMWSSourceOutput extends TabularSourceOutputParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "AmazonMWSSource";
}

/** A copy activity Azure PostgreSQL source. */
export interface AzurePostgreSqlSourceOutput extends TabularSourceOutputParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "AzurePostgreSqlSource";
}

/** A copy activity Azure PostgreSQL sink. */
export interface AzurePostgreSqlSinkOutput extends CopySinkOutputParent {
  /** A query to execute before starting the copy. Type: string (or Expression with resultType string). */
  preCopyScript?: any;
  type: "AzurePostgreSqlSink";
}

/** A copy activity Azure MySql sink. */
export interface AzureMySqlSinkOutput extends CopySinkOutputParent {
  /** A query to execute before starting the copy. Type: string (or Expression with resultType string). */
  preCopyScript?: any;
  type: "AzureMySqlSink";
}

/** A copy activity Concur Service source. */
export interface ConcurSourceOutput extends TabularSourceOutputParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "ConcurSource";
}

/** A copy activity Couchbase server source. */
export interface CouchbaseSourceOutput extends TabularSourceOutputParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "CouchbaseSource";
}

/** A copy activity Drill server source. */
export interface DrillSourceOutput extends TabularSourceOutputParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "DrillSource";
}

/** A copy activity Eloqua server source. */
export interface EloquaSourceOutput extends TabularSourceOutputParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "EloquaSource";
}

/** A copy activity Google BigQuery service source. */
export interface GoogleBigQuerySourceOutput extends TabularSourceOutputParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "GoogleBigQuerySource";
}

/** A copy activity Greenplum Database source. */
export interface GreenplumSourceOutput extends TabularSourceOutputParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "GreenplumSource";
}

/** A copy activity HBase server source. */
export interface HBaseSourceOutput extends TabularSourceOutputParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "HBaseSource";
}

/** A copy activity Hive Server source. */
export interface HiveSourceOutput extends TabularSourceOutputParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "HiveSource";
}

/** A copy activity Hubspot Service source. */
export interface HubspotSourceOutput extends TabularSourceOutputParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "HubspotSource";
}

/** A copy activity Impala server source. */
export interface ImpalaSourceOutput extends TabularSourceOutputParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "ImpalaSource";
}

/** A copy activity Jira Service source. */
export interface JiraSourceOutput extends TabularSourceOutputParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "JiraSource";
}

/** A copy activity Magento server source. */
export interface MagentoSourceOutput extends TabularSourceOutputParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "MagentoSource";
}

/** A copy activity MariaDB server source. */
export interface MariaDBSourceOutput extends TabularSourceOutputParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "MariaDBSource";
}

/** A copy activity Azure MariaDB source. */
export interface AzureMariaDBSourceOutput extends TabularSourceOutputParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "AzureMariaDBSource";
}

/** A copy activity Marketo server source. */
export interface MarketoSourceOutput extends TabularSourceOutputParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "MarketoSource";
}

/** A copy activity Paypal Service source. */
export interface PaypalSourceOutput extends TabularSourceOutputParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "PaypalSource";
}

/** A copy activity Phoenix server source. */
export interface PhoenixSourceOutput extends TabularSourceOutputParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "PhoenixSource";
}

/** A copy activity Presto server source. */
export interface PrestoSourceOutput extends TabularSourceOutputParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "PrestoSource";
}

/** A copy activity QuickBooks server source. */
export interface QuickBooksSourceOutput extends TabularSourceOutputParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "QuickBooksSource";
}

/** A copy activity ServiceNow server source. */
export interface ServiceNowSourceOutput extends TabularSourceOutputParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "ServiceNowSource";
}

/** A copy activity Shopify Service source. */
export interface ShopifySourceOutput extends TabularSourceOutputParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "ShopifySource";
}

/** A copy activity Spark Server source. */
export interface SparkSourceOutput extends TabularSourceOutputParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "SparkSource";
}

/** A copy activity Square Service source. */
export interface SquareSourceOutput extends TabularSourceOutputParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "SquareSource";
}

/** A copy activity Xero Service source. */
export interface XeroSourceOutput extends TabularSourceOutputParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "XeroSource";
}

/** A copy activity Zoho server source. */
export interface ZohoSourceOutput extends TabularSourceOutputParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "ZohoSource";
}

/** A copy activity Netezza source. */
export interface NetezzaSourceOutput extends TabularSourceOutputParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  /** The partition mechanism that will be used for Netezza read in parallel. */
  partitionOption?: "None" | "DataSlice" | "DynamicRange";
  /** The settings that will be leveraged for Netezza source partitioning. */
  partitionSettings?: NetezzaPartitionSettingsOutput;
  type: "NetezzaSource";
}

/** The settings that will be leveraged for Netezza source partitioning. */
export interface NetezzaPartitionSettingsOutput {
  /** The name of the column in integer type that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
  partitionColumnName?: any;
  /** The maximum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
  partitionUpperBound?: any;
  /** The minimum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
  partitionLowerBound?: any;
}

/** A copy activity Vertica source. */
export interface VerticaSourceOutput extends TabularSourceOutputParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "VerticaSource";
}

/** A copy activity Salesforce Marketing Cloud source. */
export interface SalesforceMarketingCloudSourceOutput
  extends TabularSourceOutputParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "SalesforceMarketingCloudSource";
}

/** A copy activity Responsys source. */
export interface ResponsysSourceOutput extends TabularSourceOutputParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "ResponsysSource";
}

/** A copy activity Dynamics AX source. */
export interface DynamicsAXSourceOutput extends TabularSourceOutputParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  /** The timeout (TimeSpan) to get an HTTP response. It is the timeout to get a response, not the timeout to read response data. Default value: 00:05:00. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  httpRequestTimeout?: any;
  type: "DynamicsAXSource";
}

/** A copy activity Oracle Service Cloud source. */
export interface OracleServiceCloudSourceOutput
  extends TabularSourceOutputParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "OracleServiceCloudSource";
}

/** A copy activity Google AdWords service source. */
export interface GoogleAdWordsSourceOutput extends TabularSourceOutputParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "GoogleAdWordsSource";
}

/** A copy activity source for Amazon Redshift Source. */
export interface AmazonRedshiftSourceOutput extends TabularSourceOutputParent {
  /** Database query. Type: string (or Expression with resultType string). */
  query?: any;
  /** The Amazon S3 settings needed for the interim Amazon S3 when copying from Amazon Redshift with unload. With this, data from Amazon Redshift source will be unloaded into S3 first and then copied into the targeted sink from the interim S3. */
  redshiftUnloadSettings?: RedshiftUnloadSettingsOutput;
  type: "AmazonRedshiftSource";
}

/** The Amazon S3 settings needed for the interim Amazon S3 when copying from Amazon Redshift with unload. With this, data from Amazon Redshift source will be unloaded into S3 first and then copied into the targeted sink from the interim S3. */
export interface RedshiftUnloadSettingsOutput {
  /** The name of the Amazon S3 linked service which will be used for the unload operation when copying from the Amazon Redshift source. */
  s3LinkedServiceName: LinkedServiceReferenceOutput;
  /** The bucket of the interim Amazon S3 which will be used to store the unloaded data from Amazon Redshift source. The bucket must be in the same region as the Amazon Redshift source. Type: string (or Expression with resultType string). */
  bucketName: any;
}

/** A copy activity snowflake source. */
export interface SnowflakeSourceOutput extends CopySourceOutputParent {
  /** Snowflake Sql query. Type: string (or Expression with resultType string). */
  query?: any;
  /** Snowflake export settings. */
  exportSettings?: SnowflakeExportCopyCommandOutput;
  type: "SnowflakeSource";
}

/** Snowflake export command settings. */
export interface SnowflakeExportCopyCommandOutput
  extends ExportSettingsOutputParent {
  /** Additional copy options directly passed to snowflake Copy Command. Type: key value pairs (value should be string type) (or Expression with resultType object). Example: "additionalCopyOptions": { "DATE_FORMAT": "MM/DD/YYYY", "TIME_FORMAT": "'HH24:MI:SS.FF'" } */
  additionalCopyOptions?: Record<string, any>;
  /** Additional format options directly passed to snowflake Copy Command. Type: key value pairs (value should be string type) (or Expression with resultType object). Example: "additionalFormatOptions": { "OVERWRITE": "TRUE", "MAX_FILE_SIZE": "'FALSE'" } */
  additionalFormatOptions?: Record<string, any>;
  type: "SnowflakeExportCopyCommand";
}

/** Export command settings. */
export interface ExportSettingsOutputParent extends Record<string, unknown> {
  type:
    | "ExportSettings"
    | "SnowflakeExportCopyCommand"
    | "AzureDatabricksDeltaLakeExportCommand";
}

/** A copy activity Azure Databricks Delta Lake source. */
export interface AzureDatabricksDeltaLakeSourceOutput
  extends CopySourceOutputParent {
  /** Azure Databricks Delta Lake Sql query. Type: string (or Expression with resultType string). */
  query?: any;
  /** Azure Databricks Delta Lake export settings. */
  exportSettings?: AzureDatabricksDeltaLakeExportCommandOutput;
  type: "AzureDatabricksDeltaLakeSource";
}

/** Azure Databricks Delta Lake export command settings. */
export interface AzureDatabricksDeltaLakeExportCommandOutput
  extends ExportSettingsOutputParent {
  /** Specify the date format for the csv in Azure Databricks Delta Lake Copy. Type: string (or Expression with resultType string). */
  dateFormat?: any;
  /** Specify the timestamp format for the csv in Azure Databricks Delta Lake Copy. Type: string (or Expression with resultType string). */
  timestampFormat?: any;
  type: "AzureDatabricksDeltaLakeExportCommand";
}

/** A copy activity Azure Databricks Delta Lake sink. */
export interface AzureDatabricksDeltaLakeSinkOutput
  extends CopySinkOutputParent {
  /** SQL pre-copy script. Type: string (or Expression with resultType string). */
  preCopyScript?: any;
  /** Azure Databricks Delta Lake import settings. */
  importSettings?: AzureDatabricksDeltaLakeImportCommandOutput;
  type: "AzureDatabricksDeltaLakeSink";
}

/** Azure Databricks Delta Lake import command settings. */
export interface AzureDatabricksDeltaLakeImportCommandOutput
  extends ImportSettingsOutputParent {
  /** Specify the date format for csv in Azure Databricks Delta Lake Copy. Type: string (or Expression with resultType string). */
  dateFormat?: any;
  /** Specify the timestamp format for csv in Azure Databricks Delta Lake Copy. Type: string (or Expression with resultType string). */
  timestampFormat?: any;
  type: "AzureDatabricksDeltaLakeImportCommand";
}

/** Import command settings. */
export interface ImportSettingsOutputParent extends Record<string, unknown> {
  type:
    | "ImportSettings"
    | "AzureDatabricksDeltaLakeImportCommand"
    | "SnowflakeImportCopyCommand";
}

/** Notebook parameter. */
export interface NotebookParameterOutput {
  /** Notebook parameter value. Type: string (or Expression with resultType string). */
  value?: any;
  /** Notebook parameter type. */
  type?: "string" | "int" | "float" | "bool";
}

/** A copy activity SAP Cloud for Customer sink. */
export interface SapCloudForCustomerSinkOutput extends CopySinkOutputParent {
  /** The write behavior for the operation. Default is 'Insert'. */
  writeBehavior?: "Insert" | "Update";
  /** The timeout (TimeSpan) to get an HTTP response. It is the timeout to get a response, not the timeout to read response data. Default value: 00:05:00. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  httpRequestTimeout?: any;
  type: "SapCloudForCustomerSink";
}

/** A copy activity Azure Queue sink. */
export interface AzureQueueSinkOutput extends CopySinkOutputParent {
  type: "AzureQueueSink";
}

/** A copy activity Azure Table sink. */
export interface AzureTableSinkOutput extends CopySinkOutputParent {
  /** Azure Table default partition key value. Type: string (or Expression with resultType string). */
  azureTableDefaultPartitionKeyValue?: any;
  /** Azure Table partition key name. Type: string (or Expression with resultType string). */
  azureTablePartitionKeyName?: any;
  /** Azure Table row key name. Type: string (or Expression with resultType string). */
  azureTableRowKeyName?: any;
  /** Azure Table insert type. Type: string (or Expression with resultType string). */
  azureTableInsertType?: any;
  type: "AzureTableSink";
}

/** A copy activity Avro sink. */
export interface AvroSinkOutput extends CopySinkOutputParent {
  /** Avro store settings. */
  storeSettings?: StoreWriteSettingsOutput;
  /** Avro format settings. */
  formatSettings?: AvroWriteSettingsOutput;
  type: "AvroSink";
}

/** A copy activity Parquet sink. */
export interface ParquetSinkOutput extends CopySinkOutputParent {
  /** Parquet store settings. */
  storeSettings?: StoreWriteSettingsOutput;
  /** Parquet format settings. */
  formatSettings?: ParquetWriteSettingsOutput;
  type: "ParquetSink";
}

/** A copy activity Binary sink. */
export interface BinarySinkOutput extends CopySinkOutputParent {
  /** Binary store settings. */
  storeSettings?: StoreWriteSettingsOutput;
  type: "BinarySink";
}

/** A copy activity Azure Blob sink. */
export interface BlobSinkOutput extends CopySinkOutputParent {
  /** Blob writer overwrite files. Type: boolean (or Expression with resultType boolean). */
  blobWriterOverwriteFiles?: any;
  /** Blob writer date time format. Type: string (or Expression with resultType string). */
  blobWriterDateTimeFormat?: any;
  /** Blob writer add header. Type: boolean (or Expression with resultType boolean). */
  blobWriterAddHeader?: any;
  /** The type of copy behavior for copy sink. */
  copyBehavior?: any;
  type: "BlobSink";
}

/** A copy activity file system sink. */
export interface FileSystemSinkOutput extends CopySinkOutputParent {
  /** The type of copy behavior for copy sink. */
  copyBehavior?: any;
  type: "FileSystemSink";
}

/** A copy activity Document Database Collection sink. */
export interface DocumentDbCollectionSinkOutput extends CopySinkOutputParent {
  /** Nested properties separator. Default is . (dot). Type: string (or Expression with resultType string). */
  nestingSeparator?: any;
  /** Describes how to write data to Azure Cosmos DB. Type: string (or Expression with resultType string). Allowed values: insert and upsert. */
  writeBehavior?: any;
  type: "DocumentDbCollectionSink";
}

/** A copy activity Azure CosmosDB (SQL API) Collection sink. */
export interface CosmosDbSqlApiSinkOutput extends CopySinkOutputParent {
  /** Describes how to write data to Azure Cosmos DB. Type: string (or Expression with resultType string). Allowed values: insert and upsert. */
  writeBehavior?: any;
  type: "CosmosDbSqlApiSink";
}

/** A copy activity SQL sink. */
export interface SqlSinkOutput extends CopySinkOutputParent {
  /** SQL writer stored procedure name. Type: string (or Expression with resultType string). */
  sqlWriterStoredProcedureName?: any;
  /** SQL writer table type. Type: string (or Expression with resultType string). */
  sqlWriterTableType?: any;
  /** SQL pre-copy script. Type: string (or Expression with resultType string). */
  preCopyScript?: any;
  /** SQL stored procedure parameters. */
  storedProcedureParameters?: Record<string, StoredProcedureParameterOutput>;
  /** The stored procedure parameter name of the table type. Type: string (or Expression with resultType string). */
  storedProcedureTableTypeParameterName?: any;
  /** The option to handle sink table, such as autoCreate. For now only 'autoCreate' value is supported. Type: string (or Expression with resultType string). */
  tableOption?: any;
  type: "SqlSink";
}

/** A copy activity SQL server sink. */
export interface SqlServerSinkOutput extends CopySinkOutputParent {
  /** SQL writer stored procedure name. Type: string (or Expression with resultType string). */
  sqlWriterStoredProcedureName?: any;
  /** SQL writer table type. Type: string (or Expression with resultType string). */
  sqlWriterTableType?: any;
  /** SQL pre-copy script. Type: string (or Expression with resultType string). */
  preCopyScript?: any;
  /** SQL stored procedure parameters. */
  storedProcedureParameters?: Record<string, StoredProcedureParameterOutput>;
  /** The stored procedure parameter name of the table type. Type: string (or Expression with resultType string). */
  storedProcedureTableTypeParameterName?: any;
  /** The option to handle sink table, such as autoCreate. For now only 'autoCreate' value is supported. Type: string (or Expression with resultType string). */
  tableOption?: any;
  type: "SqlServerSink";
}

/** A copy activity Azure SQL sink. */
export interface AzureSqlSinkOutput extends CopySinkOutputParent {
  /** SQL writer stored procedure name. Type: string (or Expression with resultType string). */
  sqlWriterStoredProcedureName?: any;
  /** SQL writer table type. Type: string (or Expression with resultType string). */
  sqlWriterTableType?: any;
  /** SQL pre-copy script. Type: string (or Expression with resultType string). */
  preCopyScript?: any;
  /** SQL stored procedure parameters. */
  storedProcedureParameters?: Record<string, StoredProcedureParameterOutput>;
  /** The stored procedure parameter name of the table type. Type: string (or Expression with resultType string). */
  storedProcedureTableTypeParameterName?: any;
  /** The option to handle sink table, such as autoCreate. For now only 'autoCreate' value is supported. Type: string (or Expression with resultType string). */
  tableOption?: any;
  type: "AzureSqlSink";
}

/** A copy activity Azure SQL Managed Instance sink. */
export interface SqlMISinkOutput extends CopySinkOutputParent {
  /** SQL writer stored procedure name. Type: string (or Expression with resultType string). */
  sqlWriterStoredProcedureName?: any;
  /** SQL writer table type. Type: string (or Expression with resultType string). */
  sqlWriterTableType?: any;
  /** SQL pre-copy script. Type: string (or Expression with resultType string). */
  preCopyScript?: any;
  /** SQL stored procedure parameters. */
  storedProcedureParameters?: Record<string, StoredProcedureParameterOutput>;
  /** The stored procedure parameter name of the table type. Type: string (or Expression with resultType string). */
  storedProcedureTableTypeParameterName?: any;
  /** The option to handle sink table, such as autoCreate. For now only 'autoCreate' value is supported. Type: string (or Expression with resultType string). */
  tableOption?: any;
  type: "SqlMISink";
}

/** A copy activity SQL Data Warehouse sink. */
export interface SqlDWSinkOutput extends CopySinkOutputParent {
  /** SQL pre-copy script. Type: string (or Expression with resultType string). */
  preCopyScript?: any;
  /** Indicates to use PolyBase to copy data into SQL Data Warehouse when applicable. Type: boolean (or Expression with resultType boolean). */
  allowPolyBase?: any;
  /** Specifies PolyBase-related settings when allowPolyBase is true. */
  polyBaseSettings?: PolybaseSettingsOutput;
  /** Indicates to use Copy Command to copy data into SQL Data Warehouse. Type: boolean (or Expression with resultType boolean). */
  allowCopyCommand?: any;
  /** Specifies Copy Command related settings when allowCopyCommand is true. */
  copyCommandSettings?: DWCopyCommandSettingsOutput;
  /** The option to handle sink table, such as autoCreate. For now only 'autoCreate' value is supported. Type: string (or Expression with resultType string). */
  tableOption?: any;
  type: "SqlDWSink";
}

/** PolyBase settings. */
export interface PolybaseSettingsOutput extends Record<string, unknown> {
  /** Reject type. */
  rejectType?: "value" | "percentage";
  /** Specifies the value or the percentage of rows that can be rejected before the query fails. Type: number (or Expression with resultType number), minimum: 0. */
  rejectValue?: any;
  /** Determines the number of rows to attempt to retrieve before the PolyBase recalculates the percentage of rejected rows. Type: integer (or Expression with resultType integer), minimum: 0. */
  rejectSampleValue?: any;
  /** Specifies how to handle missing values in delimited text files when PolyBase retrieves data from the text file. Type: boolean (or Expression with resultType boolean). */
  useTypeDefault?: any;
}

/** DW Copy Command settings. */
export interface DWCopyCommandSettingsOutput {
  /** Specifies the default values for each target column in SQL DW. The default values in the property overwrite the DEFAULT constraint set in the DB, and identity column cannot have a default value. Type: array of objects (or Expression with resultType array of objects). */
  defaultValues?: Array<DWCopyCommandDefaultValueOutput>;
  /** Additional options directly passed to SQL DW in Copy Command. Type: key value pairs (value should be string type) (or Expression with resultType object). Example: "additionalOptions": { "MAXERRORS": "1000", "DATEFORMAT": "'ymd'" } */
  additionalOptions?: Record<string, string>;
}

/** Default value. */
export interface DWCopyCommandDefaultValueOutput {
  /** Column name. Type: object (or Expression with resultType string). */
  columnName?: any;
  /** The default value of the column. Type: object (or Expression with resultType string). */
  defaultValue?: any;
}

/** A copy activity snowflake sink. */
export interface SnowflakeSinkOutput extends CopySinkOutputParent {
  /** SQL pre-copy script. Type: string (or Expression with resultType string). */
  preCopyScript?: any;
  /** Snowflake import settings. */
  importSettings?: SnowflakeImportCopyCommandOutput;
  type: "SnowflakeSink";
}

/** Snowflake import command settings. */
export interface SnowflakeImportCopyCommandOutput
  extends ImportSettingsOutputParent {
  /** Additional copy options directly passed to snowflake Copy Command. Type: key value pairs (value should be string type) (or Expression with resultType object). Example: "additionalCopyOptions": { "DATE_FORMAT": "MM/DD/YYYY", "TIME_FORMAT": "'HH24:MI:SS.FF'" } */
  additionalCopyOptions?: Record<string, any>;
  /** Additional format options directly passed to snowflake Copy Command. Type: key value pairs (value should be string type) (or Expression with resultType object). Example: "additionalFormatOptions": { "FORCE": "TRUE", "LOAD_UNCERTAIN_FILES": "'FALSE'" } */
  additionalFormatOptions?: Record<string, any>;
  type: "SnowflakeImportCopyCommand";
}

/** A copy activity Oracle sink. */
export interface OracleSinkOutput extends CopySinkOutputParent {
  /** SQL pre-copy script. Type: string (or Expression with resultType string). */
  preCopyScript?: any;
  type: "OracleSink";
}

/** A copy activity Azure Data Lake Store sink. */
export interface AzureDataLakeStoreSinkOutput extends CopySinkOutputParent {
  /** The type of copy behavior for copy sink. */
  copyBehavior?: any;
  /** Single File Parallel. */
  enableAdlsSingleFileParallel?: any;
  type: "AzureDataLakeStoreSink";
}

/** A copy activity Azure Data Lake Storage Gen2 sink. */
export interface AzureBlobFSSinkOutput extends CopySinkOutputParent {
  /** The type of copy behavior for copy sink. */
  copyBehavior?: any;
  type: "AzureBlobFSSink";
}

/** A copy activity Azure Search Index sink. */
export interface AzureSearchIndexSinkOutput extends CopySinkOutputParent {
  /** Specify the write behavior when upserting documents into Azure Search Index. */
  writeBehavior?: "Merge" | "Upload";
  type: "AzureSearchIndexSink";
}

/** A copy activity ODBC sink. */
export interface OdbcSinkOutput extends CopySinkOutputParent {
  /** A query to execute before starting the copy. Type: string (or Expression with resultType string). */
  preCopyScript?: any;
  type: "OdbcSink";
}

/** A copy activity Informix sink. */
export interface InformixSinkOutput extends CopySinkOutputParent {
  /** A query to execute before starting the copy. Type: string (or Expression with resultType string). */
  preCopyScript?: any;
  type: "InformixSink";
}

/** A copy activity Microsoft Access sink. */
export interface MicrosoftAccessSinkOutput extends CopySinkOutputParent {
  /** A query to execute before starting the copy. Type: string (or Expression with resultType string). */
  preCopyScript?: any;
  type: "MicrosoftAccessSink";
}

/** A copy activity Dynamics sink. */
export interface DynamicsSinkOutput extends CopySinkOutputParent {
  /** The write behavior for the operation. */
  writeBehavior: "Upsert";
  /** The flag indicating whether ignore null values from input dataset (except key fields) during write operation. Default is false. Type: boolean (or Expression with resultType boolean). */
  ignoreNullValues?: any;
  /** The logical name of the alternate key which will be used when upserting records. Type: string (or Expression with resultType string). */
  alternateKeyName?: any;
  type: "DynamicsSink";
}

/** A copy activity Dynamics CRM sink. */
export interface DynamicsCrmSinkOutput extends CopySinkOutputParent {
  /** The write behavior for the operation. */
  writeBehavior: "Upsert";
  /** The flag indicating whether to ignore null values from input dataset (except key fields) during write operation. Default is false. Type: boolean (or Expression with resultType boolean). */
  ignoreNullValues?: any;
  /** The logical name of the alternate key which will be used when upserting records. Type: string (or Expression with resultType string). */
  alternateKeyName?: any;
  type: "DynamicsCrmSink";
}

/** A copy activity Common Data Service for Apps sink. */
export interface CommonDataServiceForAppsSinkOutput
  extends CopySinkOutputParent {
  /** The write behavior for the operation. */
  writeBehavior: "Upsert";
  /** The flag indicating whether to ignore null values from input dataset (except key fields) during write operation. Default is false. Type: boolean (or Expression with resultType boolean). */
  ignoreNullValues?: any;
  /** The logical name of the alternate key which will be used when upserting records. Type: string (or Expression with resultType string). */
  alternateKeyName?: any;
  type: "CommonDataServiceForAppsSink";
}

/** A copy activity Azure Data Explorer sink. */
export interface AzureDataExplorerSinkOutput extends CopySinkOutputParent {
  /** A name of a pre-created csv mapping that was defined on the target Kusto table. Type: string. */
  ingestionMappingName?: any;
  /** An explicit column mapping description provided in a json format. Type: string. */
  ingestionMappingAsJson?: any;
  /** If set to true, any aggregation will be skipped. Default is false. Type: boolean. */
  flushImmediately?: any;
  type: "AzureDataExplorerSink";
}

/** A copy activity Salesforce sink. */
export interface SalesforceSinkOutput extends CopySinkOutputParent {
  /** The write behavior for the operation. Default is Insert. */
  writeBehavior?: "Insert" | "Upsert";
  /** The name of the external ID field for upsert operation. Default value is 'Id' column. Type: string (or Expression with resultType string). */
  externalIdFieldName?: any;
  /** The flag indicating whether or not to ignore null values from input dataset (except key fields) during write operation. Default value is false. If set it to true, it means ADF will leave the data in the destination object unchanged when doing upsert/update operation and insert defined default value when doing insert operation, versus ADF will update the data in the destination object to NULL when doing upsert/update operation and insert NULL value when doing insert operation. Type: boolean (or Expression with resultType boolean). */
  ignoreNullValues?: any;
  type: "SalesforceSink";
}

/** A copy activity Salesforce Service Cloud sink. */
export interface SalesforceServiceCloudSinkOutput extends CopySinkOutputParent {
  /** The write behavior for the operation. Default is Insert. */
  writeBehavior?: "Insert" | "Upsert";
  /** The name of the external ID field for upsert operation. Default value is 'Id' column. Type: string (or Expression with resultType string). */
  externalIdFieldName?: any;
  /** The flag indicating whether or not to ignore null values from input dataset (except key fields) during write operation. Default value is false. If set it to true, it means ADF will leave the data in the destination object unchanged when doing upsert/update operation and insert defined default value when doing insert operation, versus ADF will update the data in the destination object to NULL when doing upsert/update operation and insert NULL value when doing insert operation. Type: boolean (or Expression with resultType boolean). */
  ignoreNullValues?: any;
  type: "SalesforceServiceCloudSink";
}

/** A copy activity sink for a CosmosDB (MongoDB API) database. */
export interface CosmosDbMongoDbApiSinkOutput extends CopySinkOutputParent {
  /** Specifies whether the document with same key to be overwritten (upsert) rather than throw exception (insert). The default value is "insert". Type: string (or Expression with resultType string). Type: string (or Expression with resultType string). */
  writeBehavior?: any;
  type: "CosmosDbMongoDbApiSink";
}

/** HDInsight Hive activity type. */
export interface HDInsightHiveActivityOutput
  extends ExecutionActivityOutputParent {
  /** HDInsight Hive activity properties. */
  typeProperties: HDInsightHiveActivityTypePropertiesOutput;
  type: "HDInsightHive";
}

/** HDInsight Hive activity properties. */
export interface HDInsightHiveActivityTypePropertiesOutput {
  /** Storage linked service references. */
  storageLinkedServices?: Array<LinkedServiceReferenceOutput>;
  /** User specified arguments to HDInsightActivity. */
  arguments?: Array<any>;
  /** Debug info option. */
  getDebugInfo?: "None" | "Always" | "Failure";
  /** Script path. Type: string (or Expression with resultType string). */
  scriptPath?: any;
  /** Script linked service reference. */
  scriptLinkedService?: LinkedServiceReferenceOutput;
  /** Allows user to specify defines for Hive job request. */
  defines?: Record<string, any>;
  /** User specified arguments under hivevar namespace. */
  variables?: Array<any>;
  /** Query timeout value (in minutes).  Effective when the HDInsight cluster is with ESP (Enterprise Security Package) */
  queryTimeout?: number;
}

/** HDInsight Pig activity type. */
export interface HDInsightPigActivityOutput
  extends ExecutionActivityOutputParent {
  /** HDInsight Pig activity properties. */
  typeProperties: HDInsightPigActivityTypePropertiesOutput;
  type: "HDInsightPig";
}

/** HDInsight Pig activity properties. */
export interface HDInsightPigActivityTypePropertiesOutput {
  /** Storage linked service references. */
  storageLinkedServices?: Array<LinkedServiceReferenceOutput>;
  /** User specified arguments to HDInsightActivity. Type: array (or Expression with resultType array). */
  arguments?: any;
  /** Debug info option. */
  getDebugInfo?: "None" | "Always" | "Failure";
  /** Script path. Type: string (or Expression with resultType string). */
  scriptPath?: any;
  /** Script linked service reference. */
  scriptLinkedService?: LinkedServiceReferenceOutput;
  /** Allows user to specify defines for Pig job request. */
  defines?: Record<string, any>;
}

/** HDInsight MapReduce activity type. */
export interface HDInsightMapReduceActivityOutput
  extends ExecutionActivityOutputParent {
  /** HDInsight MapReduce activity properties. */
  typeProperties: HDInsightMapReduceActivityTypePropertiesOutput;
  type: "HDInsightMapReduce";
}

/** HDInsight MapReduce activity properties. */
export interface HDInsightMapReduceActivityTypePropertiesOutput {
  /** Storage linked service references. */
  storageLinkedServices?: Array<LinkedServiceReferenceOutput>;
  /** User specified arguments to HDInsightActivity. */
  arguments?: Array<any>;
  /** Debug info option. */
  getDebugInfo?: "None" | "Always" | "Failure";
  /** Class name. Type: string (or Expression with resultType string). */
  className: any;
  /** Jar path. Type: string (or Expression with resultType string). */
  jarFilePath: any;
  /** Jar linked service reference. */
  jarLinkedService?: LinkedServiceReferenceOutput;
  /** Jar libs. */
  jarLibs?: Array<any>;
  /** Allows user to specify defines for the MapReduce job request. */
  defines?: Record<string, any>;
}

/** HDInsight streaming activity type. */
export interface HDInsightStreamingActivityOutput
  extends ExecutionActivityOutputParent {
  /** HDInsight streaming activity properties. */
  typeProperties: HDInsightStreamingActivityTypePropertiesOutput;
  type: "HDInsightStreaming";
}

/** HDInsight streaming activity properties. */
export interface HDInsightStreamingActivityTypePropertiesOutput {
  /** Storage linked service references. */
  storageLinkedServices?: Array<LinkedServiceReferenceOutput>;
  /** User specified arguments to HDInsightActivity. */
  arguments?: Array<any>;
  /** Debug info option. */
  getDebugInfo?: "None" | "Always" | "Failure";
  /** Mapper executable name. Type: string (or Expression with resultType string). */
  mapper: any;
  /** Reducer executable name. Type: string (or Expression with resultType string). */
  reducer: any;
  /** Input blob path. Type: string (or Expression with resultType string). */
  input: any;
  /** Output blob path. Type: string (or Expression with resultType string). */
  output: any;
  /** Paths to streaming job files. Can be directories. */
  filePaths: Array<any>;
  /** Linked service reference where the files are located. */
  fileLinkedService?: LinkedServiceReferenceOutput;
  /** Combiner executable name. Type: string (or Expression with resultType string). */
  combiner?: any;
  /** Command line environment values. */
  commandEnvironment?: Array<any>;
  /** Allows user to specify defines for streaming job request. */
  defines?: Record<string, any>;
}

/** HDInsight Spark activity. */
export interface HDInsightSparkActivityOutput
  extends ExecutionActivityOutputParent {
  /** HDInsight spark activity properties. */
  typeProperties: HDInsightSparkActivityTypePropertiesOutput;
  type: "HDInsightSpark";
}

/** HDInsight spark activity properties. */
export interface HDInsightSparkActivityTypePropertiesOutput {
  /** The root path in 'sparkJobLinkedService' for all the job’s files. Type: string (or Expression with resultType string). */
  rootPath: any;
  /** The relative path to the root folder of the code/package to be executed. Type: string (or Expression with resultType string). */
  entryFilePath: any;
  /** The user-specified arguments to HDInsightSparkActivity. */
  arguments?: Array<any>;
  /** Debug info option. */
  getDebugInfo?: "None" | "Always" | "Failure";
  /** The storage linked service for uploading the entry file and dependencies, and for receiving logs. */
  sparkJobLinkedService?: LinkedServiceReferenceOutput;
  /** The application's Java/Spark main class. */
  className?: string;
  /** The user to impersonate that will execute the job. Type: string (or Expression with resultType string). */
  proxyUser?: any;
  /** Spark configuration property. */
  sparkConfig?: Record<string, any>;
}

/** Execute SSIS package activity. */
export interface ExecuteSsisPackageActivityOutput
  extends ExecutionActivityOutputParent {
  /** Execute SSIS package activity properties. */
  typeProperties: ExecuteSsisPackageActivityTypePropertiesOutput;
  type: "ExecuteSSISPackage";
}

/** Execute SSIS package activity properties. */
export interface ExecuteSsisPackageActivityTypePropertiesOutput {
  /** SSIS package location. */
  packageLocation: SsisPackageLocationOutput;
  /** Specifies the runtime to execute SSIS package. The value should be "x86" or "x64". Type: string (or Expression with resultType string). */
  runtime?: any;
  /** The logging level of SSIS package execution. Type: string (or Expression with resultType string). */
  loggingLevel?: any;
  /** The environment path to execute the SSIS package. Type: string (or Expression with resultType string). */
  environmentPath?: any;
  /** The package execution credential. */
  executionCredential?: SsisExecutionCredentialOutput;
  /** The integration runtime reference. */
  connectVia: IntegrationRuntimeReferenceOutput;
  /** The project level parameters to execute the SSIS package. */
  projectParameters?: Record<string, SsisExecutionParameterOutput>;
  /** The package level parameters to execute the SSIS package. */
  packageParameters?: Record<string, SsisExecutionParameterOutput>;
  /** The project level connection managers to execute the SSIS package. */
  projectConnectionManagers?: Record<
    string,
    Record<string, SsisExecutionParameterOutput>
  >;
  /** The package level connection managers to execute the SSIS package. */
  packageConnectionManagers?: Record<
    string,
    Record<string, SsisExecutionParameterOutput>
  >;
  /** The property overrides to execute the SSIS package. */
  propertyOverrides?: Record<string, SsisPropertyOverrideOutput>;
  /** SSIS package execution log location. */
  logLocation?: SsisLogLocationOutput;
}

/** SSIS package location. */
export interface SsisPackageLocationOutput {
  /** The SSIS package path. Type: string (or Expression with resultType string). */
  packagePath?: any;
  /** The type of SSIS package location. */
  type?: "SSISDB" | "File" | "InlinePackage" | "PackageStore";
  /** SSIS package location properties. */
  typeProperties?: SsisPackageLocationTypePropertiesOutput;
}

/** SSIS package location properties. */
export interface SsisPackageLocationTypePropertiesOutput {
  /** Password of the package. */
  packagePassword?: SecretBaseOutput;
  /** The package access credential. */
  accessCredential?: SsisAccessCredentialOutput;
  /** The configuration file of the package execution. Type: string (or Expression with resultType string). */
  configurationPath?: any;
  /** The configuration file access credential. */
  configurationAccessCredential?: SsisAccessCredentialOutput;
  /** The package name. */
  packageName?: string;
  /** The embedded package content. Type: string (or Expression with resultType string). */
  packageContent?: any;
  /** The embedded package last modified date. */
  packageLastModifiedDate?: string;
  /** The embedded child package list. */
  childPackages?: Array<SsisChildPackageOutput>;
}

/** SSIS access credential. */
export interface SsisAccessCredentialOutput {
  /** Domain for windows authentication. */
  domain: any;
  /** UseName for windows authentication. */
  userName: any;
  /** Password for windows authentication. */
  password: SecretBaseOutput;
}

/** SSIS embedded child package. */
export interface SsisChildPackageOutput {
  /** Path for embedded child package. Type: string (or Expression with resultType string). */
  packagePath: any;
  /** Name for embedded child package. */
  packageName?: string;
  /** Content for embedded child package. Type: string (or Expression with resultType string). */
  packageContent: any;
  /** Last modified date for embedded child package. */
  packageLastModifiedDate?: string;
}

/** SSIS package execution credential. */
export interface SsisExecutionCredentialOutput {
  /** Domain for windows authentication. */
  domain: any;
  /** UseName for windows authentication. */
  userName: any;
  /** Password for windows authentication. */
  password: SecureStringOutput;
}

/** SSIS execution parameter. */
export interface SsisExecutionParameterOutput {
  /** SSIS package execution parameter value. Type: string (or Expression with resultType string). */
  value: any;
}

/** SSIS property override. */
export interface SsisPropertyOverrideOutput {
  /** SSIS package property override value. Type: string (or Expression with resultType string). */
  value: any;
  /** Whether SSIS package property override value is sensitive data. Value will be encrypted in SSISDB if it is true */
  isSensitive?: boolean;
}

/** SSIS package execution log location */
export interface SsisLogLocationOutput {
  /** The SSIS package execution log path. Type: string (or Expression with resultType string). */
  logPath: any;
  /** The type of SSIS log location. */
  type: "File";
  /** SSIS package execution log location properties. */
  typeProperties: SsisLogLocationTypePropertiesOutput;
}

/** SSIS package execution log location properties. */
export interface SsisLogLocationTypePropertiesOutput {
  /** The package execution log access credential. */
  accessCredential?: SsisAccessCredentialOutput;
  /** Specifies the interval to refresh log. The default interval is 5 minutes. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  logRefreshInterval?: any;
}

/** Custom activity type. */
export interface CustomActivityOutput extends ExecutionActivityOutputParent {
  /** Custom activity properties. */
  typeProperties: CustomActivityTypePropertiesOutput;
  type: "Custom";
}

/** Custom activity properties. */
export interface CustomActivityTypePropertiesOutput {
  /** Command for custom activity Type: string (or Expression with resultType string). */
  command: any;
  /** Resource linked service reference. */
  resourceLinkedService?: LinkedServiceReferenceOutput;
  /** Folder path for resource files Type: string (or Expression with resultType string). */
  folderPath?: any;
  /** Reference objects */
  referenceObjects?: CustomActivityReferenceObjectOutput;
  /** User defined property bag. There is no restriction on the keys or values that can be used. The user specified custom activity has the full responsibility to consume and interpret the content defined. */
  extendedProperties?: Record<string, any>;
  /** The retention time for the files submitted for custom activity. Type: double (or Expression with resultType double). */
  retentionTimeInDays?: any;
  /** Elevation level and scope for the user, default is nonadmin task. Type: string (or Expression with resultType double). */
  autoUserSpecification?: any;
}

/** Reference objects for custom activity */
export interface CustomActivityReferenceObjectOutput {
  /** Linked service references. */
  linkedServices?: Array<LinkedServiceReferenceOutput>;
  /** Dataset references. */
  datasets?: Array<DatasetReferenceOutput>;
}

/** SQL stored procedure activity type. */
export interface SqlServerStoredProcedureActivityOutput
  extends ExecutionActivityOutputParent {
  /** SQL stored procedure activity properties. */
  typeProperties: SqlServerStoredProcedureActivityTypePropertiesOutput;
  type: "SqlServerStoredProcedure";
}

/** SQL stored procedure activity properties. */
export interface SqlServerStoredProcedureActivityTypePropertiesOutput {
  /** Stored procedure name. Type: string (or Expression with resultType string). */
  storedProcedureName: any;
  /** Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}". */
  storedProcedureParameters?: Record<string, StoredProcedureParameterOutput>;
}

/** Execute pipeline activity. */
export interface ExecutePipelineActivityOutput
  extends ControlActivityOutputParent {
  /** Execute pipeline activity properties. */
  typeProperties: ExecutePipelineActivityTypePropertiesOutput;
  type: "ExecutePipeline";
}

/** Execute pipeline activity properties. */
export interface ExecutePipelineActivityTypePropertiesOutput {
  /** Pipeline reference. */
  pipeline: PipelineReferenceOutput;
  /** Pipeline parameters. */
  parameters?: Record<string, any>;
  /** Defines whether activity execution will wait for the dependent pipeline execution to finish. Default is false. */
  waitOnCompletion?: boolean;
}

/** Delete activity. */
export interface DeleteActivityOutput extends ExecutionActivityOutputParent {
  /** Delete activity properties. */
  typeProperties: DeleteActivityTypePropertiesOutput;
  type: "Delete";
}

/** Delete activity properties. */
export interface DeleteActivityTypePropertiesOutput {
  /** If true, files or sub-folders under current folder path will be deleted recursively. Default is false. Type: boolean (or Expression with resultType boolean). */
  recursive?: any;
  /** The max concurrent connections to connect data source at the same time. */
  maxConcurrentConnections?: number;
  /** Whether to record detailed logs of delete-activity execution. Default value is false. Type: boolean (or Expression with resultType boolean). */
  enableLogging?: any;
  /** Log storage settings customer need to provide when enableLogging is true. */
  logStorageSettings?: LogStorageSettingsOutput;
  /** Delete activity dataset reference. */
  dataset: DatasetReferenceOutput;
  /** Delete activity store settings. */
  storeSettings?: StoreReadSettingsOutput;
}

/** Azure Data Explorer command activity. */
export interface AzureDataExplorerCommandActivityOutput
  extends ExecutionActivityOutputParent {
  /** Azure Data Explorer command activity properties. */
  typeProperties: AzureDataExplorerCommandActivityTypePropertiesOutput;
  type: "AzureDataExplorerCommand";
}

/** Azure Data Explorer command activity properties. */
export interface AzureDataExplorerCommandActivityTypePropertiesOutput {
  /** A control command, according to the Azure Data Explorer command syntax. Type: string (or Expression with resultType string). */
  command: any;
  /** Control command timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9]))..) */
  commandTimeout?: any;
}

/** Lookup activity. */
export interface LookupActivityOutput extends ExecutionActivityOutputParent {
  /** Lookup activity properties. */
  typeProperties: LookupActivityTypePropertiesOutput;
  type: "Lookup";
}

/** Lookup activity properties. */
export interface LookupActivityTypePropertiesOutput {
  /** Dataset-specific source properties, same as copy activity source. */
  source: CopySourceOutput;
  /** Lookup activity dataset reference. */
  dataset: DatasetReferenceOutput;
  /** Whether to return first row or all rows. Default value is true. Type: boolean (or Expression with resultType boolean). */
  firstRowOnly?: any;
}

/** Web activity. */
export interface WebActivityOutput extends ExecutionActivityOutputParent {
  /** Web activity properties. */
  typeProperties: WebActivityTypePropertiesOutput;
  type: "WebActivity";
}

/** Web activity type properties. */
export interface WebActivityTypePropertiesOutput {
  /** Rest API method for target endpoint. */
  method: "GET" | "POST" | "PUT" | "DELETE";
  /** Web activity target endpoint and path. Type: string (or Expression with resultType string). */
  url: any;
  /** Represents the headers that will be sent to the request. For example, to set the language and type on a request: "headers" : { "Accept-Language": "en-us", "Content-Type": "application/json" }. Type: string (or Expression with resultType string). */
  headers?: any;
  /** Represents the payload that will be sent to the endpoint. Required for POST/PUT method, not allowed for GET method Type: string (or Expression with resultType string). */
  body?: any;
  /** Authentication method used for calling the endpoint. */
  authentication?: WebActivityAuthenticationOutput;
  /** List of datasets passed to web endpoint. */
  datasets?: Array<DatasetReferenceOutput>;
  /** List of linked services passed to web endpoint. */
  linkedServices?: Array<LinkedServiceReferenceOutput>;
  /** The integration runtime reference. */
  connectVia?: IntegrationRuntimeReferenceOutput;
}

/** Web activity authentication properties. */
export interface WebActivityAuthenticationOutput {
  /** Web activity authentication (Basic/ClientCertificate/MSI) */
  type: string;
  /** Base64-encoded contents of a PFX file. */
  pfx?: SecretBaseOutput;
  /** Web activity authentication user name for basic authentication. */
  username?: string;
  /** Password for the PFX file or basic authentication. */
  password?: SecretBaseOutput;
  /** Resource for which Azure Auth token will be requested when using MSI Authentication. */
  resource?: string;
}

/** Activity to get metadata of dataset */
export interface GetMetadataActivityOutput
  extends ExecutionActivityOutputParent {
  /** GetMetadata activity properties. */
  typeProperties: GetMetadataActivityTypePropertiesOutput;
  type: "GetMetadata";
}

/** GetMetadata activity properties. */
export interface GetMetadataActivityTypePropertiesOutput {
  /** GetMetadata activity dataset reference. */
  dataset: DatasetReferenceOutput;
  /** Fields of metadata to get from dataset. */
  fieldList?: Array<any>;
  /** GetMetadata activity store settings. */
  storeSettings?: StoreReadSettingsOutput;
  /** GetMetadata activity format settings. */
  formatSettings?: FormatReadSettingsOutput;
}

/** This activity evaluates a boolean expression and executes either the activities under the ifTrueActivities property or the ifFalseActivities property depending on the result of the expression. */
export interface IfConditionActivityOutput extends ControlActivityOutputParent {
  /** IfCondition activity properties. */
  typeProperties: IfConditionActivityTypePropertiesOutput;
  type: "IfCondition";
}

/** IfCondition activity properties. */
export interface IfConditionActivityTypePropertiesOutput {
  /** An expression that would evaluate to Boolean. This is used to determine the block of activities (ifTrueActivities or ifFalseActivities) that will be executed. */
  expression: ExpressionOutput;
  /** List of activities to execute if expression is evaluated to true. This is an optional property and if not provided, the activity will exit without any action. */
  ifTrueActivities?: Array<ActivityOutput>;
  /** List of activities to execute if expression is evaluated to false. This is an optional property and if not provided, the activity will exit without any action. */
  ifFalseActivities?: Array<ActivityOutput>;
}

/** This activity evaluates an expression and executes activities under the cases property that correspond to the expression evaluation expected in the equals property. */
export interface SwitchActivityOutput extends ControlActivityOutputParent {
  /** Switch activity properties. */
  typeProperties: SwitchActivityTypePropertiesOutput;
  type: "Switch";
}

/** Switch activity properties. */
export interface SwitchActivityTypePropertiesOutput {
  /** An expression that would evaluate to a string or integer. This is used to determine the block of activities in cases that will be executed. */
  on: ExpressionOutput;
  /** List of cases that correspond to expected values of the 'on' property. This is an optional property and if not provided, the activity will execute activities provided in defaultActivities. */
  cases?: Array<SwitchCaseOutput>;
  /** List of activities to execute if no case condition is satisfied. This is an optional property and if not provided, the activity will exit without any action. */
  defaultActivities?: Array<ActivityOutput>;
}

/** Switch cases with have a value and corresponding activities. */
export interface SwitchCaseOutput {
  /** Expected value that satisfies the expression result of the 'on' property. */
  value?: string;
  /** List of activities to execute for satisfied case condition. */
  activities?: Array<ActivityOutput>;
}

/** This activity is used for iterating over a collection and execute given activities. */
export interface ForEachActivityOutput extends ControlActivityOutputParent {
  /** ForEach activity properties. */
  typeProperties: ForEachActivityTypePropertiesOutput;
  type: "ForEach";
}

/** ForEach activity properties. */
export interface ForEachActivityTypePropertiesOutput {
  /** Should the loop be executed in sequence or in parallel (max 50) */
  isSequential?: boolean;
  /** Batch count to be used for controlling the number of parallel execution (when isSequential is set to false). */
  batchCount?: number;
  /** Collection to iterate. */
  items: ExpressionOutput;
  /** List of activities to execute . */
  activities: Array<ActivityOutput>;
}

/** Azure ML Batch Execution activity. */
export interface AzureMLBatchExecutionActivityOutput
  extends ExecutionActivityOutputParent {
  /** Azure ML Batch Execution activity properties. */
  typeProperties: AzureMLBatchExecutionActivityTypePropertiesOutput;
  type: "AzureMLBatchExecution";
}

/** Azure ML Batch Execution activity properties. */
export interface AzureMLBatchExecutionActivityTypePropertiesOutput {
  /** Key,Value pairs to be passed to the Azure ML Batch Execution Service endpoint. Keys must match the names of web service parameters defined in the published Azure ML web service. Values will be passed in the GlobalParameters property of the Azure ML batch execution request. */
  globalParameters?: Record<string, any>;
  /** Key,Value pairs, mapping the names of Azure ML endpoint's Web Service Outputs to AzureMLWebServiceFile objects specifying the output Blob locations. This information will be passed in the WebServiceOutputs property of the Azure ML batch execution request. */
  webServiceOutputs?: Record<string, AzureMLWebServiceFileOutput>;
  /** Key,Value pairs, mapping the names of Azure ML endpoint's Web Service Inputs to AzureMLWebServiceFile objects specifying the input Blob locations.. This information will be passed in the WebServiceInputs property of the Azure ML batch execution request. */
  webServiceInputs?: Record<string, AzureMLWebServiceFileOutput>;
}

/** Azure ML WebService Input/Output file */
export interface AzureMLWebServiceFileOutput {
  /** The relative file path, including container name, in the Azure Blob Storage specified by the LinkedService. Type: string (or Expression with resultType string). */
  filePath: any;
  /** Reference to an Azure Storage LinkedService, where Azure ML WebService Input/Output file located. */
  linkedServiceName: LinkedServiceReferenceOutput;
}

/** Azure ML Update Resource management activity. */
export interface AzureMLUpdateResourceActivityOutput
  extends ExecutionActivityOutputParent {
  /** Azure ML Update Resource management activity properties. */
  typeProperties: AzureMLUpdateResourceActivityTypePropertiesOutput;
  type: "AzureMLUpdateResource";
}

/** Azure ML Update Resource activity properties. */
export interface AzureMLUpdateResourceActivityTypePropertiesOutput {
  /** Name of the Trained Model module in the Web Service experiment to be updated. Type: string (or Expression with resultType string). */
  trainedModelName: any;
  /** Name of Azure Storage linked service holding the .ilearner file that will be uploaded by the update operation. */
  trainedModelLinkedServiceName: LinkedServiceReferenceOutput;
  /** The relative file path in trainedModelLinkedService to represent the .ilearner file that will be uploaded by the update operation.  Type: string (or Expression with resultType string). */
  trainedModelFilePath: any;
}

/** Azure ML Execute Pipeline activity. */
export interface AzureMLExecutePipelineActivityOutput
  extends ExecutionActivityOutputParent {
  /** Azure ML Execute Pipeline activity properties. */
  typeProperties: AzureMLExecutePipelineActivityTypePropertiesOutput;
  type: "AzureMLExecutePipeline";
}

/** Azure ML Execute Pipeline activity properties. */
export interface AzureMLExecutePipelineActivityTypePropertiesOutput {
  /** ID of the published Azure ML pipeline. Type: string (or Expression with resultType string). */
  mlPipelineId: any;
  /** Run history experiment name of the pipeline run. This information will be passed in the ExperimentName property of the published pipeline execution request. Type: string (or Expression with resultType string). */
  experimentName?: any;
  /** Key,Value pairs to be passed to the published Azure ML pipeline endpoint. Keys must match the names of pipeline parameters defined in the published pipeline. Values will be passed in the ParameterAssignments property of the published pipeline execution request. Type: object with key value pairs (or Expression with resultType object). */
  mlPipelineParameters?: any;
  /** The parent Azure ML Service pipeline run id. This information will be passed in the ParentRunId property of the published pipeline execution request. Type: string (or Expression with resultType string). */
  mlParentRunId?: any;
  /** Whether to continue execution of other steps in the PipelineRun if a step fails. This information will be passed in the continueOnStepFailure property of the published pipeline execution request. Type: boolean (or Expression with resultType boolean). */
  continueOnStepFailure?: any;
}

/** Data Lake Analytics U-SQL activity. */
export interface DataLakeAnalyticsUsqlActivityOutput
  extends ExecutionActivityOutputParent {
  /** Data Lake Analytics U-SQL activity properties. */
  typeProperties: DataLakeAnalyticsUsqlActivityTypePropertiesOutput;
  type: "DataLakeAnalyticsU-SQL";
}

/** DataLakeAnalyticsU-SQL activity properties. */
export interface DataLakeAnalyticsUsqlActivityTypePropertiesOutput {
  /** Case-sensitive path to folder that contains the U-SQL script. Type: string (or Expression with resultType string). */
  scriptPath: any;
  /** Script linked service reference. */
  scriptLinkedService: LinkedServiceReferenceOutput;
  /** The maximum number of nodes simultaneously used to run the job. Default value is 1. Type: integer (or Expression with resultType integer), minimum: 1. */
  degreeOfParallelism?: any;
  /** Determines which jobs out of all that are queued should be selected to run first. The lower the number, the higher the priority. Default value is 1000. Type: integer (or Expression with resultType integer), minimum: 1. */
  priority?: any;
  /** Parameters for U-SQL job request. */
  parameters?: Record<string, any>;
  /** Runtime version of the U-SQL engine to use. Type: string (or Expression with resultType string). */
  runtimeVersion?: any;
  /** Compilation mode of U-SQL. Must be one of these values : Semantic, Full and SingleBox. Type: string (or Expression with resultType string). */
  compilationMode?: any;
}

/** This activity suspends pipeline execution for the specified interval. */
export interface WaitActivityOutput extends ControlActivityOutputParent {
  /** Wait activity properties. */
  typeProperties: WaitActivityTypePropertiesOutput;
  type: "Wait";
}

/** Wait activity properties. */
export interface WaitActivityTypePropertiesOutput {
  /** Duration in seconds. */
  waitTimeInSeconds: any;
}

/** This activity executes inner activities until the specified boolean expression results to true or timeout is reached, whichever is earlier. */
export interface UntilActivityOutput extends ControlActivityOutputParent {
  /** Until activity properties. */
  typeProperties: UntilActivityTypePropertiesOutput;
  type: "Until";
}

/** Until activity properties. */
export interface UntilActivityTypePropertiesOutput {
  /** An expression that would evaluate to Boolean. The loop will continue until this expression evaluates to true */
  expression: ExpressionOutput;
  /** Specifies the timeout for the activity to run. If there is no value specified, it takes the value of TimeSpan.FromDays(7) which is 1 week as default. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  timeout?: any;
  /** List of activities to execute. */
  activities: Array<ActivityOutput>;
}

/** This activity verifies that an external resource exists. */
export interface ValidationActivityOutput extends ControlActivityOutputParent {
  /** Validation activity properties. */
  typeProperties: ValidationActivityTypePropertiesOutput;
  type: "Validation";
}

/** Validation activity properties. */
export interface ValidationActivityTypePropertiesOutput {
  /** Specifies the timeout for the activity to run. If there is no value specified, it takes the value of TimeSpan.FromDays(7) which is 1 week as default. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  timeout?: any;
  /** A delay in seconds between validation attempts. If no value is specified, 10 seconds will be used as the default. Type: integer (or Expression with resultType integer). */
  sleep?: any;
  /** Can be used if dataset points to a file. The file must be greater than or equal in size to the value specified. Type: integer (or Expression with resultType integer). */
  minimumSize?: any;
  /** Can be used if dataset points to a folder. If set to true, the folder must have at least one file. If set to false, the folder must be empty. Type: boolean (or Expression with resultType boolean). */
  childItems?: any;
  /** Validation activity dataset reference. */
  dataset: DatasetReferenceOutput;
}

/** Filter and return results from input array based on the conditions. */
export interface FilterActivityOutput extends ControlActivityOutputParent {
  /** Filter activity properties. */
  typeProperties: FilterActivityTypePropertiesOutput;
  type: "Filter";
}

/** Filter activity properties. */
export interface FilterActivityTypePropertiesOutput {
  /** Input array on which filter should be applied. */
  items: ExpressionOutput;
  /** Condition to be used for filtering the input. */
  condition: ExpressionOutput;
}

/** DatabricksNotebook activity. */
export interface DatabricksNotebookActivityOutput
  extends ExecutionActivityOutputParent {
  /** Databricks Notebook activity properties. */
  typeProperties: DatabricksNotebookActivityTypePropertiesOutput;
  type: "DatabricksNotebook";
}

/** Databricks Notebook activity properties. */
export interface DatabricksNotebookActivityTypePropertiesOutput {
  /** The absolute path of the notebook to be run in the Databricks Workspace. This path must begin with a slash. Type: string (or Expression with resultType string). */
  notebookPath: any;
  /** Base parameters to be used for each run of this job.If the notebook takes a parameter that is not specified, the default value from the notebook will be used. */
  baseParameters?: Record<string, any>;
  /** A list of libraries to be installed on the cluster that will execute the job. */
  libraries?: Array<Record<string, any>>;
}

/** DatabricksSparkJar activity. */
export interface DatabricksSparkJarActivityOutput
  extends ExecutionActivityOutputParent {
  /** Databricks SparkJar activity properties. */
  typeProperties: DatabricksSparkJarActivityTypePropertiesOutput;
  type: "DatabricksSparkJar";
}

/** Databricks SparkJar activity properties. */
export interface DatabricksSparkJarActivityTypePropertiesOutput {
  /** The full name of the class containing the main method to be executed. This class must be contained in a JAR provided as a library. Type: string (or Expression with resultType string). */
  mainClassName: any;
  /** Parameters that will be passed to the main method. */
  parameters?: Array<any>;
  /** A list of libraries to be installed on the cluster that will execute the job. */
  libraries?: Array<Record<string, any>>;
}

/** DatabricksSparkPython activity. */
export interface DatabricksSparkPythonActivityOutput
  extends ExecutionActivityOutputParent {
  /** Databricks SparkPython activity properties. */
  typeProperties: DatabricksSparkPythonActivityTypePropertiesOutput;
  type: "DatabricksSparkPython";
}

/** Databricks SparkPython activity properties. */
export interface DatabricksSparkPythonActivityTypePropertiesOutput {
  /** The URI of the Python file to be executed. DBFS paths are supported. Type: string (or Expression with resultType string). */
  pythonFile: any;
  /** Command line parameters that will be passed to the Python file. */
  parameters?: Array<any>;
  /** A list of libraries to be installed on the cluster that will execute the job. */
  libraries?: Array<Record<string, any>>;
}

/** Set value for a Variable. */
export interface SetVariableActivityOutput extends ControlActivityOutputParent {
  /** Set Variable activity properties. */
  typeProperties: SetVariableActivityTypePropertiesOutput;
  type: "SetVariable";
}

/** SetVariable activity properties. */
export interface SetVariableActivityTypePropertiesOutput {
  /** Name of the variable whose value needs to be set. */
  variableName?: string;
  /** Value to be set. Could be a static value or Expression */
  value?: any;
}

/** Append value for a Variable of type Array. */
export interface AppendVariableActivityOutput
  extends ControlActivityOutputParent {
  /** Append Variable activity properties. */
  typeProperties: AppendVariableActivityTypePropertiesOutput;
  type: "AppendVariable";
}

/** AppendVariable activity properties. */
export interface AppendVariableActivityTypePropertiesOutput {
  /** Name of the variable whose value needs to be appended to. */
  variableName?: string;
  /** Value to be appended. Could be a static value or Expression */
  value?: any;
}

/** Azure Function activity. */
export interface AzureFunctionActivityOutput
  extends ExecutionActivityOutputParent {
  /** Azure Function activity properties. */
  typeProperties: AzureFunctionActivityTypePropertiesOutput;
  type: "AzureFunctionActivity";
}

/** Azure Function activity type properties. */
export interface AzureFunctionActivityTypePropertiesOutput {
  /** Rest API method for target endpoint. */
  method: "GET" | "POST" | "PUT" | "DELETE" | "OPTIONS" | "HEAD" | "TRACE";
  /** Name of the Function that the Azure Function Activity will call. Type: string (or Expression with resultType string) */
  functionName: any;
  /** Represents the headers that will be sent to the request. For example, to set the language and type on a request: "headers" : { "Accept-Language": "en-us", "Content-Type": "application/json" }. Type: string (or Expression with resultType string). */
  headers?: any;
  /** Represents the payload that will be sent to the endpoint. Required for POST/PUT method, not allowed for GET method Type: string (or Expression with resultType string). */
  body?: any;
}

/** WebHook activity. */
export interface WebHookActivityOutput extends ControlActivityOutputParent {
  /** WebHook activity properties. */
  typeProperties: WebHookActivityTypePropertiesOutput;
  type: "WebHook";
}

/** WebHook activity type properties. */
export interface WebHookActivityTypePropertiesOutput {
  /** Rest API method for target endpoint. */
  method: "POST";
  /** WebHook activity target endpoint and path. Type: string (or Expression with resultType string). */
  url: any;
  /** The timeout within which the webhook should be called back. If there is no value specified, it defaults to 10 minutes. Type: string. Pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  timeout?: string;
  /** Represents the headers that will be sent to the request. For example, to set the language and type on a request: "headers" : { "Accept-Language": "en-us", "Content-Type": "application/json" }. Type: string (or Expression with resultType string). */
  headers?: any;
  /** Represents the payload that will be sent to the endpoint. Required for POST/PUT method, not allowed for GET method Type: string (or Expression with resultType string). */
  body?: any;
  /** Authentication method used for calling the endpoint. */
  authentication?: WebActivityAuthenticationOutput;
  /** When set to true, statusCode, output and error in callback request body will be consumed by activity. The activity can be marked as failed by setting statusCode >= 400 in callback request. Default is false. Type: boolean (or Expression with resultType boolean). */
  reportStatusOnCallBack?: any;
}

/** Execute data flow activity. */
export interface ExecuteDataFlowActivityOutput
  extends ExecutionActivityOutputParent {
  /** Execute data flow activity properties. */
  typeProperties: ExecuteDataFlowActivityTypePropertiesOutput;
  type: "ExecuteDataFlow";
}

/** Execute data flow activity properties. */
export interface ExecuteDataFlowActivityTypePropertiesOutput {
  /** Data flow reference. */
  dataflow: DataFlowReferenceOutput;
  /** Staging info for execute data flow activity. */
  staging?: DataFlowStagingInfoOutput;
  /** The integration runtime reference. */
  integrationRuntime?: IntegrationRuntimeReferenceOutput;
  /** Compute properties for data flow activity. */
  compute?: ExecuteDataFlowActivityTypePropertiesComputeOutput;
  /** Trace level setting used for data flow monitoring output. Supported values are: 'coarse', 'fine', and 'none'. Type: string (or Expression with resultType string) */
  traceLevel?: any;
  /** Continue on error setting used for data flow execution. Enables processing to continue if a sink fails. Type: boolean (or Expression with resultType boolean) */
  continueOnError?: any;
  /** Concurrent run setting used for data flow execution. Allows sinks with the same save order to be processed concurrently. Type: boolean (or Expression with resultType boolean) */
  runConcurrently?: any;
}

/** Compute properties for data flow activity. */
export interface ExecuteDataFlowActivityTypePropertiesComputeOutput {
  /** Compute type of the cluster which will execute data flow job. */
  computeType?: "General" | "MemoryOptimized" | "ComputeOptimized";
  /** Core count of the cluster which will execute data flow job. Supported values are: 8, 16, 32, 48, 80, 144 and 272. */
  coreCount?: number;
}

/** A copy activity source for sharePoint online list source. */
export interface SharePointOnlineListSourceOutput
  extends CopySourceOutputParent {
  /** The OData query to filter the data in SharePoint Online list. For example, "$top=1". Type: string (or Expression with resultType string). */
  query?: any;
  /** The wait time to get a response from SharePoint Online. Default value is 5 minutes (00:05:00). Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  httpRequestTimeout?: any;
  type: "SharePointOnlineListSource";
}

/** Execute Synapse notebook activity. */
export interface SynapseNotebookActivityOutput
  extends ExecutionActivityOutputParent {
  /** Execute Synapse notebook activity properties. */
  typeProperties: SynapseNotebookActivityTypePropertiesOutput;
  type: "SynapseNotebook";
}

/** Execute Synapse notebook activity properties. */
export interface SynapseNotebookActivityTypePropertiesOutput {
  /** Synapse notebook reference. */
  notebook: SynapseNotebookReferenceOutput;
  /** Notebook parameters. */
  parameters?: Record<string, NotebookParameterOutput>;
}

/** Execute spark job activity. */
export interface SynapseSparkJobDefinitionActivityOutput
  extends ExecutionActivityOutputParent {
  /** Execute spark job activity properties. */
  typeProperties: SynapseSparkJobActivityTypePropertiesOutput;
  type: "SparkJob";
}

/** Execute spark job activity properties. */
export interface SynapseSparkJobActivityTypePropertiesOutput {
  /** Synapse spark job reference. */
  sparkJob: SynapseSparkJobReferenceOutput;
  /** User specified arguments to SynapseSparkJobDefinitionActivity. */
  args?: Array<any>;
}

/** Execute SQL pool stored procedure activity. */
export interface SqlPoolStoredProcedureActivityOutput
  extends ActivityOutputParent {
  /** SQL pool stored procedure reference. */
  sqlPool: SqlPoolReferenceOutput;
  /** Execute SQL pool stored procedure activity properties. */
  typeProperties: SqlPoolStoredProcedureActivityTypePropertiesOutput;
  type: "SqlPoolStoredProcedure";
}

/** SQL stored procedure activity properties. */
export interface SqlPoolStoredProcedureActivityTypePropertiesOutput {
  /** Stored procedure name. Type: string (or Expression with resultType string). */
  storedProcedureName: any;
  /** Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}". */
  storedProcedureParameters?: Record<string, StoredProcedureParameterOutput>;
}

/** Base class for all triggers that support one to many model for trigger to pipeline. */
export interface MultiplePipelineTriggerOutputParent
  extends TriggerOutputParent {
  /** Pipelines that need to be started. */
  pipelines?: Array<TriggerPipelineReferenceOutput>;
  type:
    | "MultiplePipelineTrigger"
    | "ScheduleTrigger"
    | "BlobTrigger"
    | "BlobEventsTrigger"
    | "CustomEventsTrigger";
}

/** Trigger that creates pipeline runs periodically, on schedule. */
export interface ScheduleTriggerOutput
  extends MultiplePipelineTriggerOutputParent {
  /** Schedule Trigger properties. */
  typeProperties: ScheduleTriggerTypePropertiesOutput;
  type: "ScheduleTrigger";
}

/** Schedule Trigger properties. */
export interface ScheduleTriggerTypePropertiesOutput {
  /** Recurrence schedule configuration. */
  recurrence: ScheduleTriggerRecurrenceOutput;
}

/** The workflow trigger recurrence. */
export interface ScheduleTriggerRecurrenceOutput
  extends Record<string, unknown> {
  /** The frequency. */
  frequency?:
    | "NotSpecified"
    | "Minute"
    | "Hour"
    | "Day"
    | "Week"
    | "Month"
    | "Year";
  /** The interval. */
  interval?: number;
  /** The start time. */
  startTime?: string;
  /** The end time. */
  endTime?: string;
  /** The time zone. */
  timeZone?: string;
  /** The recurrence schedule. */
  schedule?: RecurrenceScheduleOutput;
}

/** The recurrence schedule. */
export interface RecurrenceScheduleOutput extends Record<string, unknown> {
  /** The minutes. */
  minutes?: Array<number>;
  /** The hours. */
  hours?: Array<number>;
  /** The days of the week. */
  weekDays?: Array<
    | "Sunday"
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
  >;
  /** The month days. */
  monthDays?: Array<number>;
  /** The monthly occurrences. */
  monthlyOccurrences?: Array<RecurrenceScheduleOccurrenceOutput>;
}

/** The recurrence schedule occurrence. */
export interface RecurrenceScheduleOccurrenceOutput
  extends Record<string, unknown> {
  /** The day of the week. */
  day?:
    | "Sunday"
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday";
  /** The occurrence. */
  occurrence?: number;
}

/** Trigger that runs every time the selected Blob container changes. */
export interface BlobTriggerOutput extends MultiplePipelineTriggerOutputParent {
  /** Blob Trigger properties. */
  typeProperties: BlobTriggerTypePropertiesOutput;
  type: "BlobTrigger";
}

/** Blob Trigger properties. */
export interface BlobTriggerTypePropertiesOutput {
  /** The path of the container/folder that will trigger the pipeline. */
  folderPath: string;
  /** The max number of parallel files to handle when it is triggered. */
  maxConcurrency: number;
  /** The Azure Storage linked service reference. */
  linkedService: LinkedServiceReferenceOutput;
}

/** Trigger that runs every time a Blob event occurs. */
export interface BlobEventsTriggerOutput
  extends MultiplePipelineTriggerOutputParent {
  /** Blob Events Trigger properties. */
  typeProperties: BlobEventsTriggerTypePropertiesOutput;
  type: "BlobEventsTrigger";
}

/** Blob Events Trigger properties. */
export interface BlobEventsTriggerTypePropertiesOutput {
  /** The blob path must begin with the pattern provided for trigger to fire. For example, '/records/blobs/december/' will only fire the trigger for blobs in the december folder under the records container. At least one of these must be provided: blobPathBeginsWith, blobPathEndsWith. */
  blobPathBeginsWith?: string;
  /** The blob path must end with the pattern provided for trigger to fire. For example, 'december/boxes.csv' will only fire the trigger for blobs named boxes in a december folder. At least one of these must be provided: blobPathBeginsWith, blobPathEndsWith. */
  blobPathEndsWith?: string;
  /** If set to true, blobs with zero bytes will be ignored. */
  ignoreEmptyBlobs?: boolean;
  /** The type of events that cause this trigger to fire. */
  events: Array<
    "Microsoft.Storage.BlobCreated" | "Microsoft.Storage.BlobDeleted"
  >;
  /** The ARM resource ID of the Storage Account. */
  scope: string;
}

/** Trigger that runs every time a custom event is received. */
export interface CustomEventsTriggerOutput
  extends MultiplePipelineTriggerOutputParent {
  /** Custom Events Trigger properties. */
  typeProperties: CustomEventsTriggerTypePropertiesOutput;
  type: "CustomEventsTrigger";
}

/** Custom Events Trigger properties. */
export interface CustomEventsTriggerTypePropertiesOutput {
  /** The event subject must begin with the pattern provided for trigger to fire. At least one of these must be provided: subjectBeginsWith, subjectEndsWith. */
  subjectBeginsWith?: string;
  /** The event subject must end with the pattern provided for trigger to fire. At least one of these must be provided: subjectBeginsWith, subjectEndsWith. */
  subjectEndsWith?: string;
  /** The list of event types that cause this trigger to fire. */
  events: Array<any>;
  /** The ARM resource ID of the Azure Event Grid Topic. */
  scope: string;
}

/** Trigger that schedules pipeline runs for all fixed time interval windows from a start time without gaps and also supports backfill scenarios (when start time is in the past). */
export interface TumblingWindowTriggerOutput extends TriggerOutputParent {
  /** Pipeline for which runs are created when an event is fired for trigger window that is ready. */
  pipeline: TriggerPipelineReferenceOutput;
  /** Tumbling Window Trigger properties. */
  typeProperties: TumblingWindowTriggerTypePropertiesOutput;
  type: "TumblingWindowTrigger";
}

/** Tumbling Window Trigger properties. */
export interface TumblingWindowTriggerTypePropertiesOutput {
  /** The frequency of the time windows. */
  frequency: "Minute" | "Hour" | "Month";
  /** The interval of the time windows. The minimum interval allowed is 15 Minutes. */
  interval: number;
  /** The start time for the time period for the trigger during which events are fired for windows that are ready. Only UTC time is currently supported. */
  startTime: string;
  /** The end time for the time period for the trigger during which events are fired for windows that are ready. Only UTC time is currently supported. */
  endTime?: string;
  /** Specifies how long the trigger waits past due time before triggering new run. It doesn't alter window start and end time. The default is 0. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  delay?: any;
  /** The max number of parallel time windows (ready for execution) for which a new run is triggered. */
  maxConcurrency: number;
  /** Retry policy that will be applied for failed pipeline runs. */
  retryPolicy?: RetryPolicyOutput;
  /** Triggers that this trigger depends on. Only tumbling window triggers are supported. */
  dependsOn?: Array<DependencyReferenceOutput>;
}

/** Execution policy for an activity. */
export interface RetryPolicyOutput {
  /** Maximum ordinary retry attempts. Default is 0. Type: integer (or Expression with resultType integer), minimum: 0. */
  count?: any;
  /** Interval between retries in seconds. Default is 30. */
  intervalInSeconds?: number;
}

/** Referenced dependency. */
export interface DependencyReferenceOutputParent {
  type:
    | "DependencyReference"
    | "TriggerDependencyReference"
    | "TumblingWindowTriggerDependencyReference"
    | "SelfDependencyTumblingWindowTriggerReference";
}

/** Trigger reference type. */
export interface TriggerReferenceOutput {
  /** Trigger reference type. */
  type: "TriggerReference";
  /** Reference trigger name. */
  referenceName: string;
}

/** Trigger referenced dependency. */
export interface TriggerDependencyReferenceOutputParent
  extends DependencyReferenceOutputParent {
  /** Referenced trigger. */
  referenceTrigger: TriggerReferenceOutput;
  type:
    | "TriggerDependencyReference"
    | "TumblingWindowTriggerDependencyReference";
}

/** Referenced tumbling window trigger dependency. */
export interface TumblingWindowTriggerDependencyReferenceOutput
  extends TriggerDependencyReferenceOutputParent {
  /** Timespan applied to the start time of a tumbling window when evaluating dependency. */
  offset?: string;
  /** The size of the window when evaluating the dependency. If undefined the frequency of the tumbling window will be used. */
  size?: string;
  type: "TumblingWindowTriggerDependencyReference";
}

/** Self referenced tumbling window trigger dependency. */
export interface SelfDependencyTumblingWindowTriggerReferenceOutput
  extends DependencyReferenceOutputParent {
  /** Timespan applied to the start time of a tumbling window when evaluating dependency. */
  offset: string;
  /** The size of the window when evaluating the dependency. If undefined the frequency of the tumbling window will be used. */
  size?: string;
  type: "SelfDependencyTumblingWindowTriggerReference";
}

/** Trigger that allows the referenced pipeline to depend on other pipeline runs based on runDimension Name/Value pairs. Upstream pipelines should declare the same runDimension Name and their runs should have the values for those runDimensions. The referenced pipeline run would be triggered if the values for the runDimension match for all upstream pipeline runs. */
export interface ChainingTriggerOutput extends TriggerOutputParent {
  /** Pipeline for which runs are created when all upstream pipelines complete successfully. */
  pipeline: TriggerPipelineReferenceOutput;
  /** Chaining Trigger properties. */
  typeProperties: ChainingTriggerTypePropertiesOutput;
  type: "ChainingTrigger";
}

/** Chaining Trigger properties. */
export interface ChainingTriggerTypePropertiesOutput {
  /** Upstream Pipelines. */
  dependsOn: Array<PipelineReferenceOutput>;
  /** Run Dimension property that needs to be emitted by upstream pipelines. */
  runDimension: string;
}

/** Managed integration runtime, including managed elastic and managed dedicated integration runtimes. */
export interface ManagedIntegrationRuntimeOutput
  extends IntegrationRuntimeOutputParent {
  /** Integration runtime state, only valid for managed dedicated integration runtime. */
  readonly state?:
    | "Initial"
    | "Stopped"
    | "Started"
    | "Starting"
    | "Stopping"
    | "NeedRegistration"
    | "Online"
    | "Limited"
    | "Offline"
    | "AccessDenied";
  /** Managed integration runtime properties. */
  typeProperties: ManagedIntegrationRuntimeTypePropertiesOutput;
  /** Managed Virtual Network reference. */
  managedVirtualNetwork?: ManagedVirtualNetworkReferenceOutput;
  type: "Managed";
}

/** Managed integration runtime type properties. */
export interface ManagedIntegrationRuntimeTypePropertiesOutput {
  /** The compute resource for managed integration runtime. */
  computeProperties?: IntegrationRuntimeComputePropertiesOutput;
  /** SSIS properties for managed integration runtime. */
  ssisProperties?: IntegrationRuntimeSsisPropertiesOutput;
}

/** The compute resource properties for managed integration runtime. */
export interface IntegrationRuntimeComputePropertiesOutput
  extends Record<string, unknown> {
  /** The location for managed integration runtime. The supported regions could be found on https://docs.microsoft.com/en-us/azure/data-factory/data-factory-data-movement-activities */
  location?: string;
  /** The node size requirement to managed integration runtime. */
  nodeSize?: string;
  /** The required number of nodes for managed integration runtime. */
  numberOfNodes?: number;
  /** Maximum parallel executions count per node for managed integration runtime. */
  maxParallelExecutionsPerNode?: number;
  /** Data flow properties for managed integration runtime. */
  dataFlowProperties?: IntegrationRuntimeDataFlowPropertiesOutput;
  /** VNet properties for managed integration runtime. */
  vNetProperties?: IntegrationRuntimeVNetPropertiesOutput;
}

/** Data flow properties for managed integration runtime. */
export interface IntegrationRuntimeDataFlowPropertiesOutput
  extends Record<string, unknown> {
  /** Compute type of the cluster which will execute data flow job. */
  computeType?: "General" | "MemoryOptimized" | "ComputeOptimized";
  /** Core count of the cluster which will execute data flow job. Supported values are: 8, 16, 32, 48, 80, 144 and 272. */
  coreCount?: number;
  /** Time to live (in minutes) setting of the cluster which will execute data flow job. */
  timeToLive?: number;
  /** Cluster will not be recycled and it will be used in next data flow activity run until TTL (time to live) is reached if this is set as false. Default is true. */
  cleanup?: boolean;
}

/** VNet properties for managed integration runtime. */
export interface IntegrationRuntimeVNetPropertiesOutput
  extends Record<string, unknown> {
  /** The ID of the VNet that this integration runtime will join. */
  vNetId?: string;
  /** The name of the subnet this integration runtime will join. */
  subnet?: string;
  /** Resource IDs of the public IP addresses that this integration runtime will use. */
  publicIPs?: Array<string>;
}

/** SSIS properties for managed integration runtime. */
export interface IntegrationRuntimeSsisPropertiesOutput
  extends Record<string, unknown> {
  /** Catalog information for managed dedicated integration runtime. */
  catalogInfo?: IntegrationRuntimeSsisCatalogInfoOutput;
  /** License type for bringing your own license scenario. */
  licenseType?: "BasePrice" | "LicenseIncluded";
  /** Custom setup script properties for a managed dedicated integration runtime. */
  customSetupScriptProperties?: IntegrationRuntimeCustomSetupScriptPropertiesOutput;
  /** Data proxy properties for a managed dedicated integration runtime. */
  dataProxyProperties?: IntegrationRuntimeDataProxyPropertiesOutput;
  /** The edition for the SSIS Integration Runtime */
  edition?: "Standard" | "Enterprise";
  /** Custom setup without script properties for a SSIS integration runtime. */
  expressCustomSetupProperties?: Array<CustomSetupBaseOutput>;
}

/** Catalog information for managed dedicated integration runtime. */
export interface IntegrationRuntimeSsisCatalogInfoOutput
  extends Record<string, unknown> {
  /** The catalog database server URL. */
  catalogServerEndpoint?: string;
  /** The administrator user name of catalog database. */
  catalogAdminUserName?: string;
  /** The password of the administrator user account of the catalog database. */
  catalogAdminPassword?: SecureStringOutput;
  /** The pricing tier for the catalog database. The valid values could be found in https://azure.microsoft.com/en-us/pricing/details/sql-database/ */
  catalogPricingTier?: "Basic" | "Standard" | "Premium" | "PremiumRS";
}

/** Custom setup script properties for a managed dedicated integration runtime. */
export interface IntegrationRuntimeCustomSetupScriptPropertiesOutput {
  /** The URI of the Azure blob container that contains the custom setup script. */
  blobContainerUri?: string;
  /** The SAS token of the Azure blob container. */
  sasToken?: SecureStringOutput;
}

/** Data proxy properties for a managed dedicated integration runtime. */
export interface IntegrationRuntimeDataProxyPropertiesOutput {
  /** The self-hosted integration runtime reference. */
  connectVia?: EntityReferenceOutput;
  /** The staging linked service reference. */
  stagingLinkedService?: EntityReferenceOutput;
  /** The path to contain the staged data in the Blob storage. */
  path?: string;
}

/** The entity reference. */
export interface EntityReferenceOutput {
  /** The type of this referenced entity. */
  type?: "IntegrationRuntimeReference" | "LinkedServiceReference";
  /** The name of this referenced entity. */
  referenceName?: string;
}

/** The base definition of the custom setup. */
export interface CustomSetupBaseOutput {
  type: "CustomSetupBase";
}

/** Managed Virtual Network reference type. */
export interface ManagedVirtualNetworkReferenceOutput {
  /** Managed Virtual Network reference type. */
  type: "ManagedVirtualNetworkReference";
  /** Reference ManagedVirtualNetwork name. */
  referenceName: string;
}

/** Self-hosted integration runtime. */
export interface SelfHostedIntegrationRuntimeOutput
  extends IntegrationRuntimeOutputParent {
  /** When this property is not null, means this is a linked integration runtime. The property is used to access original integration runtime. */
  typeProperties?: SelfHostedIntegrationRuntimeTypePropertiesOutput;
  type: "SelfHosted";
}

/** The self-hosted integration runtime properties. */
export interface SelfHostedIntegrationRuntimeTypePropertiesOutput {
  /** Linked integration runtime type from data factory */
  linkedInfo?: LinkedIntegrationRuntimeTypeOutput;
}

/** The base definition of a linked integration runtime. */
export interface LinkedIntegrationRuntimeTypeOutputParent {
  authorizationType: "LinkedIntegrationRuntimeType" | "Key" | "RBAC";
}

/** The key authorization type integration runtime. */
export interface LinkedIntegrationRuntimeKeyAuthorizationOutput
  extends LinkedIntegrationRuntimeTypeOutputParent {
  /** The key used for authorization. */
  key: SecureStringOutput;
  authorizationType: "Key";
}

/** The role based access control (RBAC) authorization type integration runtime. */
export interface LinkedIntegrationRuntimeRbacAuthorizationOutput
  extends LinkedIntegrationRuntimeTypeOutputParent {
  /** The resource identifier of the integration runtime to be shared. */
  resourceId: string;
  authorizationType: "RBAC";
}

/** Azure Synapse nested object which contains a flow with data movements and transformations. */
export type DataFlowOutput = MappingDataFlowOutput | FlowletOutput;
/** Azure Synapse nested object which serves as a compute resource for activities. */
export type IntegrationRuntimeOutput =
  | ManagedIntegrationRuntimeOutput
  | SelfHostedIntegrationRuntimeOutput;
/** The Azure Data Factory nested object which identifies data within different data stores, such as tables, files, folders, and documents. */
export type DatasetOutput =
  | AmazonS3DatasetOutput
  | AvroDatasetOutput
  | ExcelDatasetOutput
  | ParquetDatasetOutput
  | DelimitedTextDatasetOutput
  | JsonDatasetOutput
  | XmlDatasetOutput
  | OrcDatasetOutput
  | BinaryDatasetOutput
  | AzureBlobDatasetOutput
  | AzureTableDatasetOutput
  | AzureSqlTableDatasetOutput
  | AzureSqlMITableDatasetOutput
  | AzureSqlDWTableDatasetOutput
  | CassandraTableDatasetOutput
  | CustomDatasetOutput
  | CosmosDbSqlApiCollectionDatasetOutput
  | DocumentDbCollectionDatasetOutput
  | DynamicsEntityDatasetOutput
  | DynamicsCrmEntityDatasetOutput
  | CommonDataServiceForAppsEntityDatasetOutput
  | AzureDataLakeStoreDatasetOutput
  | AzureBlobFSDatasetOutput
  | Office365DatasetOutput
  | FileShareDatasetOutput
  | MongoDbCollectionDatasetOutput
  | MongoDbAtlasCollectionDatasetOutput
  | MongoDbV2CollectionDatasetOutput
  | CosmosDbMongoDbApiCollectionDatasetOutput
  | ODataResourceDatasetOutput
  | OracleTableDatasetOutput
  | AmazonRdsForOracleTableDatasetOutput
  | TeradataTableDatasetOutput
  | AzureMySqlTableDatasetOutput
  | AmazonRedshiftTableDatasetOutput
  | Db2TableDatasetOutput
  | RelationalTableDatasetOutput
  | InformixTableDatasetOutput
  | OdbcTableDatasetOutput
  | MySqlTableDatasetOutput
  | PostgreSqlTableDatasetOutput
  | MicrosoftAccessTableDatasetOutput
  | SalesforceObjectDatasetOutput
  | SalesforceServiceCloudObjectDatasetOutput
  | SybaseTableDatasetOutput
  | SapBwCubeDatasetOutput
  | SapCloudForCustomerResourceDatasetOutput
  | SapEccResourceDatasetOutput
  | SapHanaTableDatasetOutput
  | SapOpenHubTableDatasetOutput
  | SqlServerTableDatasetOutput
  | AmazonRdsForSqlServerTableDatasetOutput
  | RestResourceDatasetOutput
  | SapTableResourceDatasetOutput
  | WebTableDatasetOutput
  | AzureSearchIndexDatasetOutput
  | HttpDatasetOutput
  | AmazonMWSObjectDatasetOutput
  | AzurePostgreSqlTableDatasetOutput
  | ConcurObjectDatasetOutput
  | CouchbaseTableDatasetOutput
  | DrillTableDatasetOutput
  | EloquaObjectDatasetOutput
  | GoogleBigQueryObjectDatasetOutput
  | GreenplumTableDatasetOutput
  | HBaseObjectDatasetOutput
  | HiveObjectDatasetOutput
  | HubspotObjectDatasetOutput
  | ImpalaObjectDatasetOutput
  | JiraObjectDatasetOutput
  | MagentoObjectDatasetOutput
  | MariaDBTableDatasetOutput
  | AzureMariaDBTableDatasetOutput
  | MarketoObjectDatasetOutput
  | PaypalObjectDatasetOutput
  | PhoenixObjectDatasetOutput
  | PrestoObjectDatasetOutput
  | QuickBooksObjectDatasetOutput
  | ServiceNowObjectDatasetOutput
  | ShopifyObjectDatasetOutput
  | SparkObjectDatasetOutput
  | SquareObjectDatasetOutput
  | XeroObjectDatasetOutput
  | ZohoObjectDatasetOutput
  | NetezzaTableDatasetOutput
  | VerticaTableDatasetOutput
  | SalesforceMarketingCloudObjectDatasetOutput
  | ResponsysObjectDatasetOutput
  | DynamicsAXResourceDatasetOutput
  | OracleServiceCloudObjectDatasetOutput
  | AzureDataExplorerTableDatasetOutput
  | GoogleAdWordsObjectDatasetOutput
  | SnowflakeDatasetOutput
  | SharePointOnlineListResourceDatasetOutput
  | AzureDatabricksDeltaLakeDatasetOutput;
/** The Azure Synapse nested object which contains the information and credential which can be used to connect with related store or compute resource. */
export type LinkedServiceOutput =
  | AzureStorageLinkedServiceOutput
  | AzureBlobStorageLinkedServiceOutput
  | AzureTableStorageLinkedServiceOutput
  | AzureSqlDWLinkedServiceOutput
  | SqlServerLinkedServiceOutput
  | AmazonRdsForSqlServerLinkedServiceOutput
  | AzureSqlDatabaseLinkedServiceOutput
  | AzureSqlMILinkedServiceOutput
  | AzureBatchLinkedServiceOutput
  | AzureKeyVaultLinkedServiceOutput
  | CosmosDbLinkedServiceOutput
  | DynamicsLinkedServiceOutput
  | DynamicsCrmLinkedServiceOutput
  | CommonDataServiceForAppsLinkedServiceOutput
  | HDInsightLinkedServiceOutput
  | FileServerLinkedServiceOutput
  | AzureFileStorageLinkedServiceOutput
  | GoogleCloudStorageLinkedServiceOutput
  | OracleLinkedServiceOutput
  | AmazonRdsForOracleLinkedServiceOutput
  | AzureMySqlLinkedServiceOutput
  | MySqlLinkedServiceOutput
  | PostgreSqlLinkedServiceOutput
  | SybaseLinkedServiceOutput
  | Db2LinkedServiceOutput
  | TeradataLinkedServiceOutput
  | AzureMLLinkedServiceOutput
  | AzureMLServiceLinkedServiceOutput
  | OdbcLinkedServiceOutput
  | InformixLinkedServiceOutput
  | MicrosoftAccessLinkedServiceOutput
  | HdfsLinkedServiceOutput
  | ODataLinkedServiceOutput
  | WebLinkedServiceOutput
  | CassandraLinkedServiceOutput
  | MongoDbLinkedServiceOutput
  | MongoDbAtlasLinkedServiceOutput
  | MongoDbV2LinkedServiceOutput
  | CosmosDbMongoDbApiLinkedServiceOutput
  | AzureDataLakeStoreLinkedServiceOutput
  | AzureBlobFSLinkedServiceOutput
  | Office365LinkedServiceOutput
  | SalesforceLinkedServiceOutput
  | SalesforceServiceCloudLinkedServiceOutput
  | SapCloudForCustomerLinkedServiceOutput
  | SapEccLinkedServiceOutput
  | SapOpenHubLinkedServiceOutput
  | RestServiceLinkedServiceOutput
  | AmazonS3LinkedServiceOutput
  | AmazonRedshiftLinkedServiceOutput
  | CustomDataSourceLinkedServiceOutput
  | AzureSearchLinkedServiceOutput
  | HttpLinkedServiceOutput
  | FtpServerLinkedServiceOutput
  | SftpServerLinkedServiceOutput
  | SapBWLinkedServiceOutput
  | SapHanaLinkedServiceOutput
  | AmazonMWSLinkedServiceOutput
  | AzurePostgreSqlLinkedServiceOutput
  | ConcurLinkedServiceOutput
  | CouchbaseLinkedServiceOutput
  | DrillLinkedServiceOutput
  | EloquaLinkedServiceOutput
  | GoogleBigQueryLinkedServiceOutput
  | GreenplumLinkedServiceOutput
  | HBaseLinkedServiceOutput
  | HiveLinkedServiceOutput
  | HubspotLinkedServiceOutput
  | ImpalaLinkedServiceOutput
  | JiraLinkedServiceOutput
  | MagentoLinkedServiceOutput
  | MariaDBLinkedServiceOutput
  | AzureMariaDBLinkedServiceOutput
  | MarketoLinkedServiceOutput
  | PaypalLinkedServiceOutput
  | PhoenixLinkedServiceOutput
  | PrestoLinkedServiceOutput
  | QuickBooksLinkedServiceOutput
  | ServiceNowLinkedServiceOutput
  | ShopifyLinkedServiceOutput
  | SparkLinkedServiceOutput
  | SquareLinkedServiceOutput
  | XeroLinkedServiceOutput
  | ZohoLinkedServiceOutput
  | VerticaLinkedServiceOutput
  | NetezzaLinkedServiceOutput
  | SalesforceMarketingCloudLinkedServiceOutput
  | HDInsightOnDemandLinkedServiceOutput
  | AzureDataLakeAnalyticsLinkedServiceOutput
  | AzureDatabricksLinkedServiceOutput
  | AzureDatabricksDeltaLakeLinkedServiceOutput
  | ResponsysLinkedServiceOutput
  | DynamicsAXLinkedServiceOutput
  | OracleServiceCloudLinkedServiceOutput
  | GoogleAdWordsLinkedServiceOutput
  | SapTableLinkedServiceOutput
  | AzureDataExplorerLinkedServiceOutput
  | AzureFunctionLinkedServiceOutput
  | SnowflakeLinkedServiceOutput
  | SharePointOnlineListLinkedServiceOutput;
/** A pipeline activity. */
export type ActivityOutput =
  | ControlActivityOutput
  | ExecutionActivityOutput
  | CopyActivityOutput
  | HDInsightHiveActivityOutput
  | HDInsightPigActivityOutput
  | HDInsightMapReduceActivityOutput
  | HDInsightStreamingActivityOutput
  | HDInsightSparkActivityOutput
  | ExecuteSsisPackageActivityOutput
  | CustomActivityOutput
  | SqlServerStoredProcedureActivityOutput
  | ExecutePipelineActivityOutput
  | DeleteActivityOutput
  | AzureDataExplorerCommandActivityOutput
  | LookupActivityOutput
  | WebActivityOutput
  | GetMetadataActivityOutput
  | IfConditionActivityOutput
  | SwitchActivityOutput
  | ForEachActivityOutput
  | AzureMLBatchExecutionActivityOutput
  | AzureMLUpdateResourceActivityOutput
  | AzureMLExecutePipelineActivityOutput
  | DataLakeAnalyticsUsqlActivityOutput
  | WaitActivityOutput
  | UntilActivityOutput
  | ValidationActivityOutput
  | FilterActivityOutput
  | DatabricksNotebookActivityOutput
  | DatabricksSparkJarActivityOutput
  | DatabricksSparkPythonActivityOutput
  | SetVariableActivityOutput
  | AppendVariableActivityOutput
  | AzureFunctionActivityOutput
  | WebHookActivityOutput
  | ExecuteDataFlowActivityOutput
  | SynapseNotebookActivityOutput
  | SynapseSparkJobDefinitionActivityOutput
  | SqlPoolStoredProcedureActivityOutput;
/** Azure Synapse nested object which contains information about creating pipeline run */
export type TriggerOutput =
  | RerunTumblingWindowTriggerOutput
  | MultiplePipelineTriggerOutput
  | ScheduleTriggerOutput
  | BlobTriggerOutput
  | BlobEventsTriggerOutput
  | CustomEventsTriggerOutput
  | TumblingWindowTriggerOutput
  | ChainingTriggerOutput;
/** The base definition of a secret type. */
export type SecretBaseOutput =
  | SecureStringOutput
  | AzureKeyVaultSecretReferenceOutput;
/** Dataset location. */
export type DatasetLocationOutput =
  | AzureBlobStorageLocationOutput
  | AzureBlobFSLocationOutput
  | AzureDataLakeStoreLocationOutput
  | AmazonS3LocationOutput
  | FileServerLocationOutput
  | AzureFileStorageLocationOutput
  | GoogleCloudStorageLocationOutput
  | FtpServerLocationOutput
  | SftpLocationOutput
  | HttpServerLocationOutput
  | HdfsLocationOutput;
/** The format definition of a storage. */
export type DatasetStorageFormatOutput =
  | TextFormatOutput
  | JsonFormatOutput
  | AvroFormatOutput
  | OrcFormatOutput
  | ParquetFormatOutput;
/** Base definition of WebLinkedServiceTypeProperties, this typeProperties is polymorphic based on authenticationType, so not flattened in SDK models. */
export type WebLinkedServiceTypePropertiesOutput =
  | WebAnonymousAuthenticationOutput
  | WebBasicAuthenticationOutput
  | WebClientCertificateAuthenticationOutput;
/** Base class for all control activities like IfCondition, ForEach , Until. */
export type ControlActivityOutput =
  | ControlActivityOutputParent
  | ExecutePipelineActivityOutput
  | IfConditionActivityOutput
  | SwitchActivityOutput
  | ForEachActivityOutput
  | WaitActivityOutput
  | UntilActivityOutput
  | ValidationActivityOutput
  | FilterActivityOutput
  | SetVariableActivityOutput
  | AppendVariableActivityOutput
  | WebHookActivityOutput;
/** Base class for all execution activities. */
export type ExecutionActivityOutput =
  | ExecutionActivityOutputParent
  | CopyActivityOutput
  | HDInsightHiveActivityOutput
  | HDInsightPigActivityOutput
  | HDInsightMapReduceActivityOutput
  | HDInsightStreamingActivityOutput
  | HDInsightSparkActivityOutput
  | ExecuteSsisPackageActivityOutput
  | CustomActivityOutput
  | SqlServerStoredProcedureActivityOutput
  | DeleteActivityOutput
  | AzureDataExplorerCommandActivityOutput
  | LookupActivityOutput
  | WebActivityOutput
  | GetMetadataActivityOutput
  | AzureMLBatchExecutionActivityOutput
  | AzureMLUpdateResourceActivityOutput
  | AzureMLExecutePipelineActivityOutput
  | DataLakeAnalyticsUsqlActivityOutput
  | DatabricksNotebookActivityOutput
  | DatabricksSparkJarActivityOutput
  | DatabricksSparkPythonActivityOutput
  | AzureFunctionActivityOutput
  | ExecuteDataFlowActivityOutput
  | SynapseNotebookActivityOutput
  | SynapseSparkJobDefinitionActivityOutput;
/** Connector read setting. */
export type StoreReadSettingsOutput =
  | AzureBlobStorageReadSettingsOutput
  | AzureBlobFSReadSettingsOutput
  | AzureDataLakeStoreReadSettingsOutput
  | AmazonS3ReadSettingsOutput
  | FileServerReadSettingsOutput
  | AzureFileStorageReadSettingsOutput
  | GoogleCloudStorageReadSettingsOutput
  | FtpReadSettingsOutput
  | SftpReadSettingsOutput
  | HttpReadSettingsOutput
  | HdfsReadSettingsOutput;
/** Connector write settings. */
export type StoreWriteSettingsOutput =
  | SftpWriteSettingsOutput
  | AzureBlobStorageWriteSettingsOutput
  | AzureBlobFSWriteSettingsOutput
  | AzureDataLakeStoreWriteSettingsOutput
  | FileServerWriteSettingsOutput
  | AzureFileStorageWriteSettingsOutput;
/** Format read settings. */
export type FormatReadSettingsOutput =
  | DelimitedTextReadSettingsOutput
  | JsonReadSettingsOutput
  | XmlReadSettingsOutput
  | BinaryReadSettingsOutput;
/** Compression read settings. */
export type CompressionReadSettingsOutput =
  | ZipDeflateReadSettingsOutput
  | TarReadSettingsOutput
  | TarGZipReadSettingsOutput;
/** Format write settings. */
export type FormatWriteSettingsOutput =
  | AvroWriteSettingsOutput
  | OrcWriteSettingsOutput
  | ParquetWriteSettingsOutput
  | DelimitedTextWriteSettingsOutput
  | JsonWriteSettingsOutput;
/** A copy activity source. */
export type CopySourceOutput =
  | AvroSourceOutput
  | ExcelSourceOutput
  | ParquetSourceOutput
  | DelimitedTextSourceOutput
  | JsonSourceOutput
  | XmlSourceOutput
  | OrcSourceOutput
  | BinarySourceOutput
  | TabularSourceOutput
  | AzureTableSourceOutput
  | BlobSourceOutput
  | DocumentDbCollectionSourceOutput
  | CosmosDbSqlApiSourceOutput
  | DynamicsSourceOutput
  | DynamicsCrmSourceOutput
  | CommonDataServiceForAppsSourceOutput
  | RelationalSourceOutput
  | InformixSourceOutput
  | MicrosoftAccessSourceOutput
  | Db2SourceOutput
  | OdbcSourceOutput
  | MySqlSourceOutput
  | PostgreSqlSourceOutput
  | SybaseSourceOutput
  | SapBwSourceOutput
  | ODataSourceOutput
  | SalesforceSourceOutput
  | SalesforceServiceCloudSourceOutput
  | SapCloudForCustomerSourceOutput
  | SapEccSourceOutput
  | SapHanaSourceOutput
  | SapOpenHubSourceOutput
  | SapTableSourceOutput
  | RestSourceOutput
  | SqlSourceOutput
  | SqlServerSourceOutput
  | AmazonRdsForSqlServerSourceOutput
  | AzureSqlSourceOutput
  | SqlMISourceOutput
  | SqlDWSourceOutput
  | FileSystemSourceOutput
  | HdfsSourceOutput
  | AzureMySqlSourceOutput
  | AzureDataExplorerSourceOutput
  | OracleSourceOutput
  | AmazonRdsForOracleSourceOutput
  | TeradataSourceOutput
  | WebSourceOutput
  | CassandraSourceOutput
  | MongoDbSourceOutput
  | MongoDbAtlasSourceOutput
  | MongoDbV2SourceOutput
  | CosmosDbMongoDbApiSourceOutput
  | Office365SourceOutput
  | AzureDataLakeStoreSourceOutput
  | AzureBlobFSSourceOutput
  | HttpSourceOutput
  | AmazonMWSSourceOutput
  | AzurePostgreSqlSourceOutput
  | ConcurSourceOutput
  | CouchbaseSourceOutput
  | DrillSourceOutput
  | EloquaSourceOutput
  | GoogleBigQuerySourceOutput
  | GreenplumSourceOutput
  | HBaseSourceOutput
  | HiveSourceOutput
  | HubspotSourceOutput
  | ImpalaSourceOutput
  | JiraSourceOutput
  | MagentoSourceOutput
  | MariaDBSourceOutput
  | AzureMariaDBSourceOutput
  | MarketoSourceOutput
  | PaypalSourceOutput
  | PhoenixSourceOutput
  | PrestoSourceOutput
  | QuickBooksSourceOutput
  | ServiceNowSourceOutput
  | ShopifySourceOutput
  | SparkSourceOutput
  | SquareSourceOutput
  | XeroSourceOutput
  | ZohoSourceOutput
  | NetezzaSourceOutput
  | VerticaSourceOutput
  | SalesforceMarketingCloudSourceOutput
  | ResponsysSourceOutput
  | DynamicsAXSourceOutput
  | OracleServiceCloudSourceOutput
  | GoogleAdWordsSourceOutput
  | AmazonRedshiftSourceOutput
  | SnowflakeSourceOutput
  | AzureDatabricksDeltaLakeSourceOutput
  | SharePointOnlineListSourceOutput;
/** A copy activity sink. */
export type CopySinkOutput =
  | DelimitedTextSinkOutput
  | JsonSinkOutput
  | OrcSinkOutput
  | RestSinkOutput
  | AzurePostgreSqlSinkOutput
  | AzureMySqlSinkOutput
  | AzureDatabricksDeltaLakeSinkOutput
  | SapCloudForCustomerSinkOutput
  | AzureQueueSinkOutput
  | AzureTableSinkOutput
  | AvroSinkOutput
  | ParquetSinkOutput
  | BinarySinkOutput
  | BlobSinkOutput
  | FileSystemSinkOutput
  | DocumentDbCollectionSinkOutput
  | CosmosDbSqlApiSinkOutput
  | SqlSinkOutput
  | SqlServerSinkOutput
  | AzureSqlSinkOutput
  | SqlMISinkOutput
  | SqlDWSinkOutput
  | SnowflakeSinkOutput
  | OracleSinkOutput
  | AzureDataLakeStoreSinkOutput
  | AzureBlobFSSinkOutput
  | AzureSearchIndexSinkOutput
  | OdbcSinkOutput
  | InformixSinkOutput
  | MicrosoftAccessSinkOutput
  | DynamicsSinkOutput
  | DynamicsCrmSinkOutput
  | CommonDataServiceForAppsSinkOutput
  | AzureDataExplorerSinkOutput
  | SalesforceSinkOutput
  | SalesforceServiceCloudSinkOutput
  | CosmosDbMongoDbApiSinkOutput;
/** Copy activity sources of tabular type. */
export type TabularSourceOutput =
  | TabularSourceOutputParent
  | AzureTableSourceOutput
  | InformixSourceOutput
  | Db2SourceOutput
  | OdbcSourceOutput
  | MySqlSourceOutput
  | PostgreSqlSourceOutput
  | SybaseSourceOutput
  | SapBwSourceOutput
  | SalesforceSourceOutput
  | SapCloudForCustomerSourceOutput
  | SapEccSourceOutput
  | SapHanaSourceOutput
  | SapOpenHubSourceOutput
  | SapTableSourceOutput
  | SqlSourceOutput
  | SqlServerSourceOutput
  | AmazonRdsForSqlServerSourceOutput
  | AzureSqlSourceOutput
  | SqlMISourceOutput
  | SqlDWSourceOutput
  | AzureMySqlSourceOutput
  | TeradataSourceOutput
  | CassandraSourceOutput
  | AmazonMWSSourceOutput
  | AzurePostgreSqlSourceOutput
  | ConcurSourceOutput
  | CouchbaseSourceOutput
  | DrillSourceOutput
  | EloquaSourceOutput
  | GoogleBigQuerySourceOutput
  | GreenplumSourceOutput
  | HBaseSourceOutput
  | HiveSourceOutput
  | HubspotSourceOutput
  | ImpalaSourceOutput
  | JiraSourceOutput
  | MagentoSourceOutput
  | MariaDBSourceOutput
  | AzureMariaDBSourceOutput
  | MarketoSourceOutput
  | PaypalSourceOutput
  | PhoenixSourceOutput
  | PrestoSourceOutput
  | QuickBooksSourceOutput
  | ServiceNowSourceOutput
  | ShopifySourceOutput
  | SparkSourceOutput
  | SquareSourceOutput
  | XeroSourceOutput
  | ZohoSourceOutput
  | NetezzaSourceOutput
  | VerticaSourceOutput
  | SalesforceMarketingCloudSourceOutput
  | ResponsysSourceOutput
  | DynamicsAXSourceOutput
  | OracleServiceCloudSourceOutput
  | GoogleAdWordsSourceOutput
  | AmazonRedshiftSourceOutput;
/** Export command settings. */
export type ExportSettingsOutput =
  | SnowflakeExportCopyCommandOutput
  | AzureDatabricksDeltaLakeExportCommandOutput;
/** Import command settings. */
export type ImportSettingsOutput =
  | AzureDatabricksDeltaLakeImportCommandOutput
  | SnowflakeImportCopyCommandOutput;
/** Base class for all triggers that support one to many model for trigger to pipeline. */
export type MultiplePipelineTriggerOutput =
  | MultiplePipelineTriggerOutputParent
  | ScheduleTriggerOutput
  | BlobTriggerOutput
  | BlobEventsTriggerOutput
  | CustomEventsTriggerOutput;
/** Referenced dependency. */
export type DependencyReferenceOutput =
  | TriggerDependencyReferenceOutput
  | TumblingWindowTriggerDependencyReferenceOutput
  | SelfDependencyTumblingWindowTriggerReferenceOutput;
/** Trigger referenced dependency. */
export type TriggerDependencyReferenceOutput =
  | TriggerDependencyReferenceOutputParent
  | TumblingWindowTriggerDependencyReferenceOutput;
/** The base definition of a linked integration runtime. */
export type LinkedIntegrationRuntimeTypeOutput =
  | LinkedIntegrationRuntimeKeyAuthorizationOutput
  | LinkedIntegrationRuntimeRbacAuthorizationOutput;
