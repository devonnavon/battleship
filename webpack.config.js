const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry: {
		app: './src/index.js',
	},
	mode: 'development',
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Battleship',
		}),
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
};
