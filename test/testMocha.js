const glob = require("glob-all");

describe("checking generated file exists", function () {
  it("should generate html files", function (done) {
    const files = glob.sync(["../dist/index.html", "../dies/search.html"]);
    if (files.length > 0) {
      done();
    } else {
      throw new Error("No Html Files Found.");
    }
  });
  it("should generate js & css files", function (done) {
    const files = glob.sync([
      "../dist/index_*.js",
      "../dist/search_*.js",
      "../dist/index_*.css",
      "../dist/search_*.css",
    ]);
    if (files.length > 0) {
      done();
    } else {
      throw new Error("No Files Found");
    }
  });
});
