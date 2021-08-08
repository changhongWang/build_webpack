const path = require("path");
const webpack = require("webpack");
const rimraf = require("rimraf");
const Mocha = require("mocha");

const mocha = new Mocha({
  timeout: "10000ms",
});
process.chdir(path.join(__dirname, "template"));

rimraf("./dist", () => {
  const prodConfig = require("../../lib/webpack.prod");
  webpack(prodConfig, (err, stats) => {
    if (err) {
      console.log(err);
      process.exit(2);
    }

    console.log(
      stats.toString({
        colors: true,
        modules: true,
        children: false,
        // chunks: false,
        // chunkModules: false,
      })
    );

    console.log("webpack build success, Starting exec test.js");

    mocha.addFile(path.join(__dirname, "html-test.js"));
    mocha.addFile(path.join(__dirname, "css-js-test.js"));

    mocha.run();

    console.log("\n" + "Compiler success");
  });
});
