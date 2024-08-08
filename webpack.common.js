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
      template: './src/index.html',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/about.html',
      filename: 'about.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/contact.html',
      filename: 'contact.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/footer.html',
      filename: 'footer.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/header.html',
      filename: 'header.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/portfolio.html',
      filename: 'portfolio.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/sidebar.html',
      filename: 'sidebar.html'
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
