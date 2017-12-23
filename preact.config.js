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
  
  const plugins = [
    new WebpackNotifierPlugin({
      title: 'try-preact',
      alwaysNotify: true
    })
  ]

  config.plugins = config.plugins.concat(plugins);


}