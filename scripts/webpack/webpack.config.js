const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common');
const devConfig = require('./webpack.dev');
const productionConfig = {};

module.exports = (env, args) => {
  switch (args.mode) {
    case 'development':
      return merge(commonConfig, devConfig);
    case 'production':
      return merge(commonConfig, productionConfig);
    default:
      return merge(commonConfig, devConfig);
  }
};
