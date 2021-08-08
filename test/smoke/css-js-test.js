const glob = require("glob-all");

describe("checking generated file exists", function () {
  it("should generate js & css files", function (done) {
    const files = glob.sync(["./dist/main_*.js"]);
    if (files.length > 0) {
      done();
    } else {
      throw new Error("No css or js Files Found");
    }
  });
});
