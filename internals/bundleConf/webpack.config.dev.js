const merge = require("webpack-merge");
const baseConfig = require("./webpack.config.base");
const mode = "development";

module.exports = merge(baseConfig, {
  mode,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
  },
  devServer: {
    open: true,
    port: 8989,
  },
  devtool: "inline-source-map",
  optimization: baseConfig.optimization(mode),
  plugins: baseConfig.plugins(mode),
});
