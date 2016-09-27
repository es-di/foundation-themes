var config = require('./webpack.base.config');

config.devtool = 'eval-source-map';

config.devServer = {
  noInfo: false,
  contentBase: config.__themeRoot
};

config.output.publicPath = 'dist/';

module.exports = config;
