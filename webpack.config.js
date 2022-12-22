const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
  },
  devtool: 'inline-source-map',
  devServer: { static: './dist' },
  // loaders
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(svg|jpeg|ico|png|webp|jpg|gif)$/, type: 'asset/resource' },
      { test: /\.(woff|woff2|eot|ttf|otf)$/i, type: 'asset/resource' },
    ],
  },
  // plugins
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Leaderboard 📑',
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/temp.html'),
    }),
  ],
};
