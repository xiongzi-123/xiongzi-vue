// 专门处理  课堂相关的 接口请求

// 引入封装好的  axios 的实例
import request from '@/utils/request'

/**
 * 获取轮播图
 */

export const getter = () => {
  // return 的是 接口调用之后，axios 返回的 Promise 对象
  return request({
    url:
      '/api/wbcomic/home/page_recommend_list?mca=h5_recommend_female&_type=h5', // 这个地址是 主体数据
    methods: 'GET' // 这个是请求方式
  })
}

//  http://manhua.weibo.cn/wbcomic/home/recommend_list?location_en=ending_works_list&_type=h5
/**
 * 获取完结
 */

export const getterComic = () => {
  // return 的是 接口调用之后，axios 返回的 Promise 对象
  return request({
    url:
      '/api/wbcomic/home/recommend_list?location_en=ending_works_list&_type=h5', // 这个地址是 主体数据
    methods: 'GET' // 这个是请求方式
  })
}

// http://manhua.weibo.cn/wbcomic/comic/filter_list?_type=h5
/**
 * 获取完结
 */

export const getterCate = () => {
  // return 的是 接口调用之后，axios 返回的 Promise 对象
  return request({
    url: '/api/wbcomic/comic/filter_list?_type=h5', // 这个地址是 主体数据
    methods: 'GET' // 这个是请求方式
  })
}

// http://manhua.weibo.cn/wbcomic/home/rank_read?_type=h5
/**
 * 获取排行榜阅读榜
 */

export const getterRank = () => {
  // return 的是 接口调用之后，axios 返回的 Promise 对象
  return request({
    url: '/api/wbcomic/home/rank_read?_type=h5', // 这个地址是 主体数据
    methods: 'GET' // 这个是请求方式
  })
}

// http://manhua.weibo.cn/wbcomic/home/rank_share?_type=h5
/**
 * 获取排行榜新作榜
 */
export const getterShare = () => {
  // return 的是 接口调用之后，axios 返回的 Promise 对象
  return request({
    url: '/api/wbcomic/home/rank_share?_type=h5', // 这个地址是 主体数据
    methods: 'GET' // 这个是请求方式
  })
}

// http://manhua.weibo.cn/wbcomic/comic/filter_result?cate_id=0&end_status=0&comic_pay_status=0&page_num=1&rows_num=20&order=&_type=h5
/**
 * 获取分类
 */
export const getterResult = () => {
  // return 的是 接口调用之后，axios 返回的 Promise 对象
  return request({
    url:
      '/api/wbcomic/comic/filter_result?cate_id=0&end_status=0&comic_pay_status=0&page_num=1&rows_num=20&order=&_type=h5', // 这个地址是 主体数据
    methods: 'GET' // 这个是请求方式
  })
}
