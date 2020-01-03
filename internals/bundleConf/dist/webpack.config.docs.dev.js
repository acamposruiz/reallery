"use strict";

var webpack = require("webpack");

var path = require("path");

var merge = require("webpack-merge");

var baseConfig = require("./webpack.config.base");

var mode = "production";
module.exports = merge(baseConfig, {
  output: {
    path: path.join(__dirname, "../../docs"),
    filename: "[name]-[hash].js"
  },
  mode: mode,
  optimization: baseConfig.optimization(mode),
  plugins: baseConfig.plugins(mode).concat([])
});