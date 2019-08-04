const collabUrl = 'http://localhost:8084/'
module.exports = {
  devServer: {
    proxy: {
      '/collab/app.js': {
        target: collabUrl,
        changeOrigin: true,
        pathRewrite: {
          '^/collab/': '/'
        }
      },
      '/collab/static/': {
        target: collabUrl,
        changeOrigin: true
      },
      '/collab/**.js': {
        target: collabUrl,
        changeOrigin: true
      },
      '/collab/__webpack_hmr': {
        target: collabUrl,
        changeOrigin: true
      }
    }
  }
}
