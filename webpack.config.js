var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var webpackConfig = {
  entry: './src/index.js',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/dist',
    libraryTarget: 'umd',
    library: 'JSLou',
    filename: 'jslou.js'
  },
  devServer: {
    inline: true,
    staticOptions: { index: 'example.html' }
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: process.env.NODE_ENV === 'production' ?
          ExtractTextPlugin.extract('style', 'css!postcss') :
          'style!css!postcss'
      },
      {
        test: /\.scss$/,
        loader: process.env.NODE_ENV === 'production' ?
          ExtractTextPlugin.extract('style', 'css!postcss!sass') :
          'style!css!postcss!sass'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  externals: {
    'react': {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react'
    }
  },
  postcss: function () {
    return [autoprefixer({ browsers: ["> 2%"] })];
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('jslou.css', {
      allChunks: true
    })
  ]
};

module.exports = webpackConfig;
