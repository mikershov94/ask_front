const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const baseWebpackConfig = require('./webpack.base.conf.js');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
	mode: 'development',

	devtool: 'cheap-inline-module-source-map',

	plugins: [
		new webpack.SourceMapDevToolPlugin({
			filename: '[file].map',
		}),
		new HtmlPlugin({
			template: './public/index.html',
			filename: 'index.html',

		})
	],

	devServer: {
		contentBase: path.join(__dirname, '../public'),
		overlay: true,
		stats: 'errors-only',
		port: 3000,
	},

});