const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/js/app.js', // Adjust based on your entry file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  plugins: [
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
    new CopyWebpackPlugin({
      patterns: [
        { from: './src/assets/img', to: 'img' },
        { from: './src/assets/css', to: 'css' },
        { from: './src/assets/js/vendor', to: 'js/vendor' },
        { from: './src/assets/favicon.ico', to: 'favicon.ico' },
        { from: './public/robots.txt', to: 'robots.txt' },
        { from: './public/site.webmanifest', to: 'site.webmanifest' },
        { from: './public/404.html', to: '404.html' }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
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
};
