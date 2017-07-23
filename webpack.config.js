// file : /webpack.config.js

const WebpackConfig = require('webpack-config');

const TARGET = process.env.npm_lifecycle_event;

var webpackConfig;

switch (TARGET) {
  case 'start':
  webpackConfig = './config/webpack-dev.config.js';
  break;
  case 'test':
  webpackConfig = './config/webpack-test.config.js';
  break;
default:
  webpackConfig = './config/webpack-dev.config.js';
  break
}

module.exports = new WebpackConfig().extend(webpackConfig);
