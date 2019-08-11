const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf.js');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
	mode: 'production',

	devtool: 'source-map',

	plugins: [
		new HtmlPlugin({
			hash: false,
			template: './public/index.html',
			filename: 'index.html',

		})
	],

	optimization: {
		moduleIds: 'hashed',
		runtimeChunk: 'single',
		splitChunks: {
			vendor: {
				test: /[\\/]node_modules[\\/]/,
				name: 'vendors',
				chunks: 'all',
			}
		}

		usedExports: true,
	},

});