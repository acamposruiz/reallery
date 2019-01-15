const path = require("path");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CompilationPlugin = require("./compilationPlugin.js");

module.exports = {
  resolve: {
    extensions: [".jsx", ".js", ".es6", ".css", ".pcss"],
  },
  entry: {
    app: "./src/es6/app",
    styles: "./src/styles/styles.pcss",
  },
  output: {
    path: path.join(__dirname, "../../build"),
    filename: "[name]-[hash].js",
  },
  module: {
    rules: [
      {
        test: /(\.js|\.jsx|\.es6)$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              /*plugins: [["@babel/plugin-proposal-decorators", {"legacy": true}],
              "@babel/plugin-proposal-class-properties", ["@babel/plugin-syntax-decorators", {"legacy": true}]],*/
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        ],
      },
      {
        test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
        exclude: /node_modules/,
        use: "url-loader?limit=100000",
      },
      {
        test: /(\.css|\.pcss)$/,
        exclude: /node_modules/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              importLoaders: 1,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: "inline",
            },
          },
        ],
      },
    ],
  },
  optimization: (mode) => ({
    splitChunks: {
      maxInitialRequests: 5,
      minSize: 60000,
      cacheGroups: {
        vendors: {
          enforce: true,
          priority: 5,
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
        vendorsSplitMore: {
          priority: 10,
          test: /[\\/]node_modules[\\/]/,
          name: (module) => {
            const context = module.context.includes("/")
              ? module.context.split("/")
              : module.context.split("\\");

            return context.find(function(element, index) {
              return context[index - 1] === "node_modules";
            });
          },
          chunks: "all",
        },
      },
    },
    minimize: mode === "production",
  }),
  plugins: (mode) => [
    new HtmlWebpackPlugin({
      template: "./src/indexTpl.html",
    }),
    new ProgressBarPlugin(),
    new BundleAnalyzerPlugin(),
    new CompilationPlugin(mode === "production" ? { test: false } : {}),
  ],
};
