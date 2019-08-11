module.exports = {
	test: /\.(png|gif|jpe?g)$/,
	use: [
		{
			loader: 'file-loader',
			options: {
				name: 'img/[name].[ext]'
			},
		},
	],
};