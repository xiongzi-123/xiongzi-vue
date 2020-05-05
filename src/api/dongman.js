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
    method: 'GET' // 这个是请求方式
  })
}

// http://manhua.weibo.cn/wbcomic/comic/daypub_list?pub_day=&page_num=1&rows_num=20&_type=h5
/**
 * 获取 放松表
 */
export const getDay = () => {
  // return 的是 接口调用之后，axios 返回的 Promise 对象
  return request({
    url:
      '/api/wbcomic/comic/daypub_list?pub_day=&page_num=1&rows_num=20&_type=h5', // 这个地址是 主体数据
    method: 'GET' // 这个是请求方式
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
    method: 'GET' // 这个是请求方式
  })
}

// 获取首页  更多  的数据
// http://manhua.weibo.cn/wbcomic/home/recommend_list?location_en=h5_recommend_female_new_arrival&_type=h5
export const getMoredata = (location_en = 'h5_recommend_female_fine_works') => {
  return request({
    url: '/api/wbcomic/home/recommend_list',
    method: 'GET',
    params: {
      location_en,
      _type: 'h5'
    }
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
    method: 'GET' // 这个是请求方式
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
    method: 'GET' // 这个是请求方式
  })
}

// manhua.weibo.cn/wbcomic/home/rank?_type=h5
/**
 * 获取综合榜
 */
export const getterMax = () => {
  // return 的是 接口调用之后，axios 返回的 Promise 对象
  return request({
    url: '/api/wbcomic/home/rank?_type=h5', // 这个地址是 主体数据
    method: 'GET' // 这个是请求方式
  })
}

// http://manhua.weibo.cn/wbcomic/comic/filter_list?_type=h5
/**
 * 获取分类名称数据
 */

export const getterCate = () => {
  // return 的是 接口调用之后，axios 返回的 Promise 对象
  return request({
    url: '/api/wbcomic/comic/filter_list?_type=h5', // 这个地址是 主体数据
    method: 'GET' // 这个是请求方式
  })
}

// http://manhua.weibo.cn/wbcomic/comic/filter_result?cate_id=0&end_status=0&comic_pay_status=0&page_num=2&rows_num=20&order=&_type=h5

// http://manhua.weibo.cn/wbcomic/comic/filter_result?cate_id=0&end_status=0&comic_pay_status=0&page_num=1&rows_num=20&order=&_type=h5
/**
 * 获取分类 下面的具体数据
 */
export const getterResult = (
  cate_id = 0,
  end_status = 0,
  comic_pay_status = 0,
  page_num = 1
) => {
  // return 的是 接口调用之后，axios 返回的 Promise 对象
  return request({
    url: '/api/wbcomic/comic/filter_result', // 这个地址是 主体数据
    method: 'GET', // 这个是请求方式
    params: {
      cate_id,
      end_status,
      comic_pay_status,
      page_num,
      rows_num: 20,
      order: '',
      _type: 'h5'
    }
  })
}

// http://manhua.weibo.cn/wbcomic/home/hot_words?_type=h5
/**
 * 获取 热门搜索数据
 */
export const getHot = () => {
  return request({
    url: '/api/wbcomic/home/hot_words?_type=h5', // 这个地址是 主体数据
    method: 'GET' // 这个是请求方式
  })
}

// http://manhua.weibo.cn/wbcomic/home/search?word=%E6%88%91%E6%98%AF&page_num=1&_type=h5
/**
 * 获取搜索结果
 */
export const getSearchResult = (word, page_num = 1) => {
  return request({
    url: '/api/wbcomic/home/search',
    method: 'GET',
    params: {
      word,
      page_num,
      _type: 'h5'
    }
  })
}

// http: manhua.weibo.cn/wbcomic/comic/comic_show?comic_id=71633&create_source=h5&_=1588408432416&_type=h5

/**
 * 获取搜索结果页
 */

/* eslint-disable */
export const getDetailsdata = (comic_id) => {
  return request({
    url: '/api/wbcomic/comic/comic_show',
    method: 'GET',
    params: {
      comic_id,
      create_source: 'h5',
      _: new Date().getTime(),
      _type: 'h5'
    }
  })
}

/* eslint-enable */
