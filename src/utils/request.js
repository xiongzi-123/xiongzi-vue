// 这里可以说是 封装 axios

// 1。 引入axios

import axios from 'axios'

// 1.创建一个 axios 的实例对象
const instance = axios.create({
  // 基准路径
  baseURL: 'http://localhost:8080',
  // 超过时间的设置 ms
  timeout: 10000
})

instance.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    return config
  },
  error => {
    // 对请求错误做些什么
    // 错误处理 全部放在这里
    return Promise.reject(error)
  }
)

// 暴露这个实例
export default instance
