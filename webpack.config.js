const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const WebpackMd5Hash = require('webpack-md5-hash');

module.exports = {
  entry: {
    bundle: './assets/js/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'eslint-loader'
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.ejs$/,
        exclude: /node_modules/,
        use: {
          loader: 'compile-ejs-loader'
        }
      },
      {
        test: /\.svg$/,
        use: [
          'svg-sprite-loader',
          'svgo-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: 'body',
      hash: true,
      template: './ejs/pages/index.ejs',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].min.css'
    }),
    new WebpackMd5Hash()
  ],
};
