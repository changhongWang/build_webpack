const assert = require("assert");

describe("webpack.base.js test case", () => {
  const baseConfig = require("../../lib/webpack.base");

  console.log(baseConfig);
  it("entry", () => {
    assert.strictEqual(
      baseConfig.entry.indexOf(
        "/build_webpack/test/smoke/template/src/index"
      ) !== -1,
      true
    );
    console.log("entry SUCC");
  });
});
