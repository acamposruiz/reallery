const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const CompilationPlugin = require("./compilationPlugin.js");

module.exports = {
  resolve: {
    extensions: ['.jsx', '.js', '.es6', '.css', '.pcss']
  },
  entry: {
    app: './src/es6/app',
    styles: './src/styles/styles.pcss'
  },
  output: {
    path: path.join(__dirname, '../../build'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /(\.js|\.jsx|\.es6)$/,
        use: [{
          loader: 'babel-loader',
          query: {
            plugins: ['transform-decorators-legacy', "transform-class-properties", "syntax-decorators"],
            presets: ['babel-preset-es2015', 'babel-preset-stage-0', 'babel-preset-react']
          }
        }]
      },
      {test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/, exclude: /node_modules/, use: 'url-loader?limit=100000'},
      {
        test: /(\.css|\.pcss)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: 'inline',
            }
          }
        ]
      }
    ]
  },
  plugins: (mode) => [
    new ProgressBarPlugin(),
    new CompilationPlugin(mode === 'production' ? {test: true} : {})
  ],
  devServer: {
    port: 8989
  }
};
