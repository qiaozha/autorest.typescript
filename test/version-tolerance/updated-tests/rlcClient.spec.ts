// Code generated by Microsoft (R) AutoRest Version Tolerance Test Tool.
// Changes may cause incorrect behavior and will be lost if the code is regenerated.
import { LLCClient, LLCClientRestClient } from "../generated/llc-updated/src";
import { assert } from "chai";

const phase = "updated";

describe(`RLC Version Tolerance ${phase} phase`, async () => {
  let client: LLCClientRestClient;
  beforeEach(() => {
    client = LLCClient({ allowInsecureConnection: true });
  });
  describe("path", () => {
    it("Query parameter required to optional", async () => {
      const result = await client
        .path("/servicedriven/parameters")
        .get({ queryParameters: { parameter: "foo" } });

      assert.equal(result.status, "200");
    });

    it("Body payload required to optional", async () => {
      const result = await client.path("/servicedriven/parameters").post({
        body: { url: "http://example.org/myimage.jpeg" },
        contentType: "application/json"
      });

      assert.equal(result.status, "200");
    });
  });

  describe("shortcut", () => {
    it("Query parameter required to optional", async () => {
      const result = await client.params.getRequired({
        queryParameters: { parameter: "foo" }
      });
      assert.equal(result.status, "200");
    });

    it("Body payload required to optional", async () => {
      const result = await client.params.postParameters({
        body: { url: "http://example.org/myimage.jpeg" },
        contentType: "application/json"
      });

      assert.equal(result.status, "200");
    });
  });
});
