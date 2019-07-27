const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin');
var isProduction = (process.env.NODE_ENV == 'production');

module.exports = {
	entry: {
		app: './src/index.js'
	},
	output: {
		filename: 'js/[name].js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/dist',
	},

	devtool: (isProduction) ? 'source-map' : 'cheap-inline-module-source-map',

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
							name: '[path][name].[ext]'
						},
					},
					{
						loader: 'img-loader'
					},
				],
			},
			{
				test: /\.(woff|woff2|eof|ttf|otf)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name].[ext]'
						},
					},
				],
			},
			{
				test: /\.svg$/,
				loader: 'svg-url-loader',
			},
		
		],
	},

	plugins: [
			new MiniCssExtractPlugin({
				filename: 'css/main.css'
			}),
			new CleanWebpackPlugin(),
			new CopyWebpackPlugin(
				[
					{ from: './public/img', to: './dist/img' },
				]
			),
	],

	devServer: {
		overlay: true,
		contentBase: path.resolve(__dirname, 'public'),
		port: 3000,
		stats: 'errors-only'
	},

};

if (isProduction) {

	module.exports.plugins.push(
		new UglifyJSPlugin({ sourceMap: true })
	);

	module.exports.plugins.push(
		new ImageminPlugin({
			test: /\.(png|gif|jpe?g|svg)$/
		})
	);

	module.exports.plugins.push(
		new webpack.LoaderOptionsPlugin({
			minimizep: true
		})
	);

};