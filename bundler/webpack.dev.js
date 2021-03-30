const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const config = require('./config.js')
const webpack = require('webpack')

module.exports = {
  entry: path.resolve(__dirname, '../assets/src/js/app.js'),
  output: {
    path: path.resolve(__dirname, '../assets/js'),
    filename: 'bundle.min.js'
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new MiniCSSExtractPlugin({
      filename: "../css/style.min.css"
    }),
    new BrowserSyncPlugin({
      files: "*",
      injectChanges: false,
      proxy: config.datas.localPath,
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ],
  externals: {
    jquery: 'jQuery'
  },
  module: {
    rules: [
      // JAVASCRIPT
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      // SASS
      {
        test: /\.(sa|sc|c)ss$/,
        use:
        [
            MiniCSSExtractPlugin.loader,
            "css-loader",
            'sass-loader',
        ]
      }, 
    ]
  },

  mode: "development",
  devtool: 'source-map',
};