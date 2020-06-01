module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://api.jisuapi.com/recipe', //目标路径，别忘了加http和端口号
        changeOrigin: true, //是否跨域
        ws: true,
        pathRewrite: {
          '^/api': '' //重写路径
        }
      }
    }
  },
  publicPath: './'

};
