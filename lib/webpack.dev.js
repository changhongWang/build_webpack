const { merge } = require('webpack-merge');
const webpack = require('webpack');
const baseConfig = require('./webpack.base');

const devConfig = {
    mode: 'development',
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
        contentBase: './',
        hot: true,
        status: 'errors-only',
    },
    devtool: 'cheap-source-map',
};

module.exports = merge(baseConfig, devConfig);
