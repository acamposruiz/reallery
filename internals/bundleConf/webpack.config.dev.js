const merge = require("webpack-merge");
const baseConfig = require("./webpack.config.base");
const mode = "development";

module.exports = merge(baseConfig, {
  mode,
  optimization: {
    minimize: false,
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
  },
  devtool: "inline-source-map",
  plugins: baseConfig.plugins(mode),
});
