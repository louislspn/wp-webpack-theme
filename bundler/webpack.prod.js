const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

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
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
        ]
      }, 
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },

  mode: "production",
  devtool: 'source-map',
};