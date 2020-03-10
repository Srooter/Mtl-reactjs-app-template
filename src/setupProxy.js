const { createProxyMiddleware } = require('http-proxy-middleware')

// 参考：https://github.com/chimurai/http-proxy-middleware
// Reference：https://github.com/chimurai/http-proxy-middleware
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8080/',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    })
  )
}
