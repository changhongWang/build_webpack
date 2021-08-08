const glob = require("glob-all");

describe("checking generated file exists", function () {
  it("should generate html files", function (done) {
    const files = glob.sync(["./dist/index.html"]);
    if (files.length > 0) {
      done();
    } else {
      throw new Error("No Html Files Found.");
    }
  });
});
