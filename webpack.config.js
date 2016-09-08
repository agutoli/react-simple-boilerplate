const path = require('path');
const webpack = require('webpack');

const options = {
  debug: true,
  name: 'react-simple-stack',
  entry: {
    app: './src/app'
  },
  output: {
    path: path.join(__dirname, 'dist/static'),
    filename: '[name].bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [
      { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'url-loader' },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      }
    ]
  },
  devServer: {
    debug: true,
    hot: true,
    inline: true,
    port: 8080,
    host: '0.0.0.0',
    devtool: 'source-map',
    contentBase: './src',
    historyApiFallback: {
      rewrites: [
        { from: /.*\.html/, to: '/index.html' }
      ]
    },
    proxy: {
      '/api/*': {
        target: 'http://www.nytimes.com/',
        pathRewrite: {
          '/api': ''
        },
        changeOrigin: true
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js', '.less']
  }
};

module.exports = options;
