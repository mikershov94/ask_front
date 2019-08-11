const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	test: /\.sass$/,
	use: [
		MiniCssExtractPlugin.loader,
		{
			loader: 'css-loader',
			options: { sourceMap: true }
		},
		{
			loader: 'postcss-loader',
			options: { 
				sourceMap: true,
				config: {
					path: __dirname + '../'
				},
			 }
			},
		{
			loader: 'sass-loader',
			options: { sourceMap: true }
		},
	],
};