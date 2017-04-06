var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: ['./js/src/main.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'js/dist')
  },
  module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015']
          }
        }
      ]
  },
};
