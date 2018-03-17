'use strict';

const WebpackNotifierPlugin = require('webpack-notifier');

/**
 * Function that mutates original webpack config.
 * Supports asynchronous changes when promise is returned.
 *
 * @param {object} config - original webpack config.
 * @param {object} env - options passed to CLI.
 * @param {WebpackConfigHelpers} helpers - object with useful helpers when working with config.
 **/
export default function (config, env, helpers) {

  const uglify = helpers.getPluginsByName(config, 'UglifyJsPlugin')
    .map(e => e.index)[0];
  
  console.log(uglify);
  
  const notifier = new WebpackNotifierPlugin({
    title: 'try-preact',
    alwaysNotify: true
  });

  config.plugins.splice(uglify, 1);
  config.plugins.push(notifier);

  if (env.production) {
    config.output.publicPath = "/try-preact/";
  }


}