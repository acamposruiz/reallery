


module.exports = {
	resolve: {
		extensions: ['', '.jsx', '.js', 'es6', 'css']
	},
	entry:  './es6/app.es6',
	output: {
		path: './build',
		filename:'app.js'
	},
	module: {
		loaders: [
			{
				test: /(\.js|\.jsx|\.es6)$/,
				loader: 'babel',
                query: {
                    plugins: ['transform-decorators-legacy', "transform-class-properties", "syntax-decorators"],
                    presets: ['babel-preset-es2015', 'babel-preset-stage-0', 'babel-preset-react']
                }
			},
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
