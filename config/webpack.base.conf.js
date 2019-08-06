const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//const CopyPlugin = require('copy-webpack-plugin');

const PATHS = {
	src: path.join(__dirname, '../src/'),
	dist: path.join(__dirname, '../dist/'),
	public: path.join(__dirname, '../public/'),
}

module.exports = {

	externals: {
		paths: PATHS
	},

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
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: '/node_modules/'
			},
			{
				test: /\.sass$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: { sourceMap: true }
					},
					{
						loader: 'postcss-loader',
						options: { sourceMap: true }
					},
					{
						loader: 'sass-loader',
						options: { sourceMap: true }
					},
				],		
			},
			{
				test: /\.(png|gif|jpe?g)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'img/[name].[ext]'
						},
					},
				],
			},
			{
				test: /\.(woff|woff2|eof|ttf|otf)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: PATHS.public + 'fonts/[name].[ext]'
						},
					},
				],
			},
			{
				test: /\.svg$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'icons/[name].[ext]'
						},
					},
				],
			},
		
		],
	},

	plugins: [
			new MiniCssExtractPlugin({
				filename: 'css/main.css'
			}),
			new CleanWebpackPlugin(),
	],

};