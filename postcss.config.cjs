module.exports = {
  plugins: [
    require('postcss-easy-import')(),
    require('postcss-custom-properties')({ preserve: false }),
    require('postcss-color-function')(),
    require('autoprefixer')(),
  ],
}
