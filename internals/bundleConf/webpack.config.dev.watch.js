const merge = require("webpack-merge");
const baseConfig = require("./webpack.config.dev");

module.exports = merge(baseConfig, {
  watch: true,
  watchOptions: {
    poll: 300000,
  },
});
