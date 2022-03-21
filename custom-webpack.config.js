const MomentLocalesPlugin = require('crypto-browserify');

module.exports = {
  fallback: {
    "crypto-browserify": require.resolve('crypto-browserify'),
    "crypto": false,

  },
  plugins: [
    new MomentLocalesPlugin({
      localesToKeep: ['fr']
    })
  ]
};
