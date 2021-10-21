var path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  configureWebpack: {
    resolve: {
      symlinks: false,
      alias: {
        '@/': path.join(__dirname, 'src')
      }
    },
    optimization: {
      usedExports: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            output: {
              comments: false,
            },
            compress: {
              pure_funcs: ["console.log"]
            }
          },
          extractComments: false,
        }),
      ],
    },
  }
}