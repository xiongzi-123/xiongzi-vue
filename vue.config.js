// 项目的配置文件

module.exports = {
  devServer: {
    proxy: {
      // key: value
      // key - 前缀
      //      value - 是跟 http-proxy-middleware 相同的一个配置对象
      // http://manhua.weibo.cn/wbcomic/home/page_recommend_list?mca=h5_recommend_female&_type=h5
      '/api': {
        // http://manhua.weibo.cn
        target: 'http://manhua.weibo.cn',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
