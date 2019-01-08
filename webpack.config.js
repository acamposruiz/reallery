const path = require('path');
var cmd = require('node-cmd');
const webpack = require('webpack');
const {yellow} = require('./internals/utils.js').colors;
const CompilationPlugin = require("./internals/bundleConf/compilationPlugin.js");


let previousPercentage;

module.exports = {
  watch: true,
  watchOptions: {
    poll: 300000
  },
  devtool: "source-map",
  resolve: {
    extensions: ['.jsx', '.js', '.es6', '.css', '.pcss'],
    alias: {
      Styles: path.resolve(__dirname, 'src/styles/')
    }
  },
  entry: './src/es6/app',
  output: {
    path: __dirname + '/build',
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /(\.js|\.jsx|\.es6)$/,
        loader: 'babel-loader',
        query: {
          plugins: ['transform-decorators-legacy', "transform-class-properties", "syntax-decorators"],
          presets: ['babel-preset-es2015', 'babel-preset-stage-0', 'babel-preset-react']
        }
      },
      {test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/, exclude: /node_modules/, loader: 'url-loader?limit=100000'},
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
  plugins: [
    //new WebpackShellPlugin({onBuildStart:['npm run test', 'npm run create:dev'], onBuildEnd:['npm run cypress:run']}),
    new webpack.ProgressPlugin(function(percentage, msg) {
      const percentageToPrint = Math.trunc(100 * percentage);
      if (percentageToPrint % 5 === 0 && previousPercentage !== percentageToPrint) {
        console.log(yellow,`progress ${percentageToPrint}% : ${msg}`);
      }
      previousPercentage = percentageToPrint;
    }),
    new CompilationPlugin()
  ],
  devServer: {
    port: 8989
  }
};
