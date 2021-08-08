const assert = require("assert");

describe("webpack.base.js test case", () => {
  const baseConfig = require("../../lib/webpack.base");

  console.log(baseConfig);
  it("entry", () => {
    assert.strictEqual(
      baseConfig.entry,
      "/Users/wangchanghong/StudyProjects/build_webpack/test/smoke/template/src/index"
    );
    console.log("entry SUCC");
  });
});
