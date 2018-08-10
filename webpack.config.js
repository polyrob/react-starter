const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',

  entry: path.join(__dirname, 'src', 'index.jsx'),

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },

  module: {
    rules: [{
      test: /.jsx?$/,
      include: [
        path.resolve(__dirname, 'src'),
      ],
      exclude: [
        path.resolve(__dirname, 'node_modules'),
        path.resolve(__dirname, 'bower_components'),
      ],
      loader: 'babel-loader',

    }],
  },

  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css'],
  },

  devtool: 'source-map',

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],

  devServer: {
    contentBase: './dist',
  },
};
