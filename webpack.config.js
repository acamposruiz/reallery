var path = require('path');


module.exports = {
	resolve: {
		extensions: ['.jsx', '.js', 'es6', 'css'],
        alias: {
            Styles: path.resolve(__dirname, 'styles/')
        }
	},
	entry:  './es6/app.es6',
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
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
            {
                test: /\.css$/,
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
                    },
                    {
                        loader: "sass-loader",
                        query: {
                            plugins: ['precss']
                        }
                    }
                ]
            }
		]
	}
};
