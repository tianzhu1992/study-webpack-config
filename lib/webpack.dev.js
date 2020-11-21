const webpack = require('webpack');
const {merge} = require('webpack-merge');
const baseConfig = require('./webpack.base');

const devConfig = {
  mode: 'development',
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 300,
    poll: 1000,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 9000,
    stats: { preset: 'errors-only' },
  },
  devtoll: 'cheap-source-map',
};

module.exports = merge(baseConfig, devConfig);
