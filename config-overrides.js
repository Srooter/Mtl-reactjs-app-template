const { override, addDecoratorsLegacy, addBundleVisualizer } = require('customize-cra')
require('dotenv').config()

const publicPathPlugin = (config, env) => {
  config.output = {
    publicPath: process.env.OUTPUT_PUBLIC_PATH ? process.env.OUTPUT_PUBLIC_PATH : '/',
  }
  return config
}
// 参考：https://github.com/timarney/react-app-rewired/
// Reference：https://github.com/timarney/react-app-rewired/

// 参考：https://github.com/arackaf/customize-cra
// Reference：https://github.com/arackaf/customize-cra
module.exports = {
  webpack: override(
    addDecoratorsLegacy(),
    publicPathPlugin,
    process.env.BUNDLE_VISUALIZE == 0 &&
      addBundleVisualizer({
        analyzerMode: 'static',
        reportFilename: '../reports/bundle-analyzer-report.html',
      })
  ),
}
