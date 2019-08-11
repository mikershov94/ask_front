const path = require('path');
const webpack = require('webpack');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const babelLoader = require('./webpack-loaders/babel-loader');
const stylesLoader = require('./webpack-loaders/styles-loader');
const imageLoader = require('./webpack-loaders/image-loader');
const fontsLoader = require('./webpack-loaders/fonts-loader');
const iconsLoader = require('./webpack-loaders/icons-loader');

const PATHS = {
	src: path.join(__dirname, '../src/'),
	dist: path.join(__dirname, '../dist/'),
};

module.exports = {

	entry: {
		app: PATHS.src + 'index.js'
	},
	output: {
		filename: 'js/[name].js',
		path: PATHS.dist,
		publicPath: '',
	},

	module: {

		rules: [
			babelLoader,
			stylesLoader,
			imageLoader,
			fontsLoader,
			iconsLoader
		],
	},

	plugins: [
			new MiniCssExtractPlugin({
				filename: 'css/main.css'
			}),
			new CleanWebpackPlugin(),
	],

};