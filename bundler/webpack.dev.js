const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const config = require('./config.js')
const webpack = require('webpack');

module.exports = (env) => {

  return {
    entry: path.resolve(__dirname, '../assets/src/js/app.js'),
    output: {
      path: path.resolve(__dirname, '../assets/js'),
      filename: 'bundle.min.js'
    },
    plugins: [
      new BrowserSyncPlugin({
        files: '**/*',
        host: '127.0.0.1',
        injectChanges: false,
        notify: false,
        open: 'external',
        port: 80,
        proxy: config.datas.localPath
      }),
      new UglifyJSPlugin({
        sourceMap: env.sourcemaps ? true : false
      }),
      new MiniCSSExtractPlugin({
        filename: '../css/style.min.css'
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
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
            {
              loader: "css-loader",
              options: {
                sourceMap: env.sourcemaps ? true : false,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: env.sourcemaps ? true : false,
              },
            },
        ]
        }, 
      ]
    },

    mode: 'development',
    devtool: env.sourcemaps ? 'source-map' : false
  };
};