const webpack = require('webpack');
const ModuleFederation = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  output: {
    publicPath: 'auto',
    uniqueName: 'shell',
    scriptType: 'text/javascript',
  },
  // optimization: {
  //   runtimeChunk: false,
  // },
  plugins: [
    new ModuleFederation({
      // name: 'mfe',
      // library: { type: 'var', name: 'mfe' },
      // filename: 'remoteEntry.js',
      shared: {
        'component-library': { requiredVersion: '1.0.0', eager: true },
        'stencil-library': { requiredVersion: '1.0.0', eager: true }
      }
    }),
  ],
}
