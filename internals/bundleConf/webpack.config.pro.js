const merge = require("webpack-merge");
const baseConfig = require("./webpack.config.base");
const mode = "production";

module.exports = merge(baseConfig, {
  mode,
  optimization: baseConfig.optimization(mode),
  plugins: baseConfig.plugins(mode),
});
