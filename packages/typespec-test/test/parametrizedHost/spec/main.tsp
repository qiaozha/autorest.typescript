import "@typespec/rest";
import "@typespec/versioning";
import "@typespec/openapi";
import "@azure-tools/typespec-azure-core";
import "@azure-tools/typespec-autorest";

using TypeSpec.Http;
using TypeSpec.Rest;
using TypeSpec.Versioning;
using Azure.Core;
using OpenAPI;

//
// ** Service description **
//

@service({title: "ParametrizedHost"})
@useAuth(OAuth2Auth<[MyFlow]>)
@useDependency(Azure.Core.Versions.v1_0_Preview_1)
@server(
  "{host}.{subdomain}.{sufix}.com/{apiVersion}",
  "Confidential Ledger Service",
  {
    @path
    host?: string = "one",
    @path
    subdomain?: string = "two",
    @path
    sufix?: string = "three",
    @path
    apiVersion?: string = "v1"
  }
)
namespace Azure.Test.ParametrizedHost;

//
// ** Parameter descriptions **
//

model MyFlow {
  type: OAuth2FlowType.implicit;
  authorizationUrl: "https://login.microsoftonline.com/common/v2.0/oauth2/authorize";
  tokenUrl: "https://login.microsoftonline.com/common/v2.0/oauth2/token";
  scopes: ["https://parametrized-host.azure.com/.default"];
}

//
// ** Model descriptions **
//

@resource("collections")
@doc("Identifier for collections.")
model Collection {
  @key
  @visibility("read")
  collectionId: string;
}

//
// ** Operations **
//

@route("/app")
namespace ConfidentialLedger {
  @summary("Retrieves a list of collection ids present in the Confidential Ledger")
  @doc("Collection ids are user-created collections of ledger entries")
  op listCollections is Azure.Core.Foundations.NonPagedResourceList<Collection>;
}