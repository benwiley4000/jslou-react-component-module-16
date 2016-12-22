var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var cssLoaders = [
  'css',
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
    libraryTarget: 'umd',
    library: 'JSLou',
    filename: 'jslou.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: process.env.NODE_ENV === 'production' ?
          ExtractTextPlugin.extract('style', cssLoaders.join('!')) :
          devCssLoaders.join('!')
      },
      {
        test: /\.scss$/,
        loader: process.env.NODE_ENV === 'production' ?
          ExtractTextPlugin.extract('style', sassLoaders.join('!')) :
          devSassLoaders.join('!')
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  devServer: {
    inline: true,
    staticOptions: { index: 'example.html' }
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
