const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");

const prodConfig = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: "ignore-loader",
      },
      {
        test: /\.scss$/,
        use: "ignore-loader",
      },
    ],
  },
  plugins: [
    new OptimizeCssAssetsWebpackPlugin({
      assetNameReqExp: /\.css$/g,
      cssProcessor: require("cssnano"),
    }),
  ],
  optimization: {
    splitChunks: {
      minSize: 0,
      cacheGroups: {
        commons: {
          name: "commons",
          chunks: "all",
          minChunks: 2,
        },
      },
    },
  },
};

module.exports = merge(baseConfig, prodConfig);
