const path = require('path');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [
    './main.js',
  ],

  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel-loader',
        include: __dirname + '/src',
      },
      {
        test: /\.css/,
        loaders: ['style-loader', 'css-loader'],
        include: __dirname + '/src'
      }
    ],
  },

  // plugins: [
  //   new ExtractTextPlugin("styles.css")
  // ],

  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  }

};
