const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf.js');
const HtmlPlugin = require('html-webpack-plugin');

const ImageminPlugin = require('imagemin-webpack-plugin');

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

});