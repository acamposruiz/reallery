var path = require('path');


module.exports = {
    devtool: "source-map",
    resolve: {
        extensions: ['.jsx', '.js', 'es6', 'css', 'pcss'],
        alias: {
            Styles: path.resolve(__dirname, 'src/styles/')
        }
    },
    entry:  './src/es6/app.es6',
    output: {
        path: __dirname + '/build',
        filename:'app.js'
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
            { test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/, exclude: /node_modules/, loader: 'url-loader?limit=100000' },
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
    }
};
