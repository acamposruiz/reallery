
module.exports = {
	resolve: {
		extensions: ['.jsx', '.js', 'es6']
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
			}
		]
	}
};
