const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'js/[name].[contenthash].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './public/about.html',
      filename: 'about.html'
    }),
    new HtmlWebpackPlugin({
      template: './public/contact.html',
      filename: 'contact.html'
    }),
    new HtmlWebpackPlugin({
      template: './public/footer.html',
      filename: 'footer.html'
    }),
    new HtmlWebpackPlugin({
      template: './public/header.html',
      filename: 'header.html'
    }),
    new HtmlWebpackPlugin({
      template: './public/portfolio.html',
      filename: 'portfolio.html'
    }),
    new HtmlWebpackPlugin({
      template: './public/sidebar.html',
      filename: 'sidebar.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public/favicon.ico', to: 'favicon.ico' },
        { from: 'public/robots.txt', to: 'robots.txt' },
        { from: 'public/site.webmanifest', to: 'site.webmanifest' },
        { from: 'src/assets/img', to: 'img' },
        { from: 'src/assets/css', to: 'css' },
        { from: 'src/assets/js/vendor', to: 'js/vendor' },
      ]
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['transform-remove-console']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      }
    ]
  }
});
