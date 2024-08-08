const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/about.html',
      filename: 'about.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/contact.html',
      filename: 'contact.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/footer.html',
      filename: 'footer.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/header.html',
      filename: 'header.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/portfolio.html',
      filename: 'portfolio.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/sidebar.html',
      filename: 'sidebar.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'assets/img', to: 'img' },
        { from: 'assets/css', to: 'css' },
        { from: 'assets/js/vendor', to: 'js/vendor' },
        { from: 'assets/favicon.ico', to: 'favicon.ico' },
        { from: 'assets/robots.txt', to: 'robots.txt' },
        { from: 'assets/icon.png', to: 'icon.png' },
        { from: '404.html', to: '404.html' },
        { from: 'site.webmanifest', to: 'site.webmanifest' }
      ],
    }),
  ],
});
