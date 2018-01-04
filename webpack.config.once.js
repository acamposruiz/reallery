const path = require('path');
var cmd = require('node-cmd');
const webpack = require('webpack');


function CompilationPlugin(options) {
}

CompilationPlugin.prototype.apply = function (compiler) {

  compiler.plugin('done', function () {
    console.log('Hello World!, done');
    cmd.get(
      'npm run cypress:run',
      function (err, data, stderr) {
        console.log(data);
        console.log(stderr);
        console.log(err);
      }
    );
  });

};

module.exports = CompilationPlugin;

module.exports = {
  watch: false,
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
      console.log('.............................' + percentage + '..................................');
      console.log(msg);
    }),
    new CompilationPlugin({options: true})
  ],
  devServer: {
    port: 8989
  }
};
