module.exports = {
	test: /\.(woff|woff2|eof|ttf|otf)$/,
	use: [
		{
			loader: 'file-loader',
			options: {
				name: 'fonts/[name].[ext]'
			},
		},
	],
};