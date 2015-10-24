var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var config = {
  addStyleEntry: function (name, path) {
    this.entry[name] = path;
  },
  entry: {
    application: ['webpack/hot/dev-server', './app/assets/javascripts/application'],
    vendor: ['jquery'],
  },
  output: {
    path: './public/assets',
    publicPath: '/assets',
    filename: 'javascripts/[name].js',
  },
  module: {
    noParse: [],
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader!sass-loader'),
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.(otf|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'javascripts/vendor.js'),
    new ExtractTextPlugin('stylesheets/[name].css'),
  ],
  resolve: {
    alias: {},
    extensions: ['', '.js', '.json'],
  },
};

// config.addStyleEntry();

module.exports = config;
