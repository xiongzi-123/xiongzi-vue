import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 这个里面用来搞回到顶部按钮
import ElementUI from 'element-ui'

// import VueLazyload from "vue-lazyload";
import { Lazyload, PullRefresh } from 'vant'
// 引入 gotop 指令
import backtotop from './directives/backtotop/index'

import './assets/styles/base.scss' // 所有一些基本的css样式
import './assets/styles/home.scss' // 主页下半部分的样式
import 'element-ui/lib/theme-chalk/index.css' // ui 插件样式
// import './assets/styles/vendors.scss'

// Vue.use(VueLazyload)  // 这个是npm的图片懒加载调用 这里不需要
Vue.config.productionTip = false

Vue.use(PullRefresh)
Vue.use(ElementUI)
// 选项配置
Vue.use(Lazyload, {
  Swiper: true,
  SwiperItem: true,
  preload: 1.3
})

Vue.directive('backtotop', backtotop)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
