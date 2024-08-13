const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: './src/assets/js/app.js',
    footer: './src/assets/js/component.js' // Add component.js as an entry point
  },
  output: {
    filename: 'js/[name].js', // Use [name] to output multiple entry points
    path: path.resolve(__dirname, '../dist'),
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
        { from: 'public/top-container.html', to: 'top-container.html' }, // Add this line
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
