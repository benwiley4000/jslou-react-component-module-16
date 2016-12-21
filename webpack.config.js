var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var cssLoaders = [
  {
    loader: 'css',
    query: { modules: true, localIdentName: '[name]-[local]--[hash:base64:5]' }
  },
  'postcss'
];
var sassLoaders = cssLoaders.concat('sass');
var devCssLoaders = ['style'].concat(cssLoaders);
var devSassLoaders = ['style'].concat(sassLoaders);

var webpackConfig = {
  entry: './src/index.js',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/dist',
    filename: 'jslou.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: process.env.NODE_ENV === 'production' ?
          [ExtractTextPlugin.extract('style', cssLoaders)] :
          devCssLoaders
      },
      {
        test: /\.scss$/,
        loaders: process.env.NODE_ENV === 'production' ?
          [ExtractTextPlugin.extract('style', sassLoaders)] :
          devSassLoaders
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
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
