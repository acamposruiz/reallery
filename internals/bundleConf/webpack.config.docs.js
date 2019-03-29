const webpack = require("webpack");
const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.config.base");
const mode = "production";

module.exports = merge(baseConfig, {
  output: {
    path: path.join(__dirname, "../../docs"),
    filename: "[name]-[hash].js",
  },
  mode,
  optimization: baseConfig.optimization(mode),
  plugins: baseConfig.plugins(mode).concat([
    new webpack.EnvironmentPlugin({
      PUBLICPATH: "reallery", // use 'development' unless process.env.NODE_ENV is defined
    }),
  ]),
});
