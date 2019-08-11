module.exports = {
	test: /\.svg$/,
	use: [
		{
			loader: 'file-loader',
			options: {
				name: 'icons/[name].[ext]'
			},
		},
	],
};