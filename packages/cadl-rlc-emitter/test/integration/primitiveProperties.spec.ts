import { assert } from "chai";
import PrimitivePropertyFactory, {
  isUnexpected,
  PrimitivePropertiesGetModelParameters,
  PrimitivePropertyClient
} from "./generated/models/primitiveProperties/src/index.js";
describe("PrimitiveProperty Rest Client", () => {
  let client: PrimitivePropertyClient;

  beforeEach(() => {
    client = PrimitivePropertyFactory({ allowInsecureConnection: true });
  });

  it("should return 200", async () => {
    try {
      const modelPath = await client.path("/primitive-properties/models");
      const param: PrimitivePropertiesGetModelParameters = {
        body: {
          requiredBodyDateTime: "2022-02-02",
          requiredBoolean: true,
          requiredBytes: "xxx",
          requiredDouble: 2.001,
          requiredDuration: "ddd",
          requiredFloat: 1.224444444444444,
          requiredInt: 2,
          requiredLong: 888999999999,
          requiredSafeInt: 3,
          requiredString: "ddd"
        }
      };
      const result = await modelPath.get(param);

      if (isUnexpected(result)) {
        const error = `Unexpected response: ${result.status}`;
        assert.fail(error);
      }
      assert.strictEqual(result.status, "200");
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
