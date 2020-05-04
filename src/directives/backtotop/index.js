import Vue from 'vue'
import Index from './index.vue'

// 暴露一个函数
export default (el, binding) => {
  // el 指令所在元素的DOM 对象
  // binding 指令使用时传递一些信息对象

  // 扩展Vue 等到一个子类
  const IndexConstructor = Vue.extend(Index)
  // 实例化这个子类， 得到子类的实例对象
  const instance = new IndexConstructor()
  // 调用子类的实例对象的 $mount() 这个实例方法， 不需要挂载点
  instance.$mount()
  // 将 instance 的 $el 插入到 当前指令绑定的元素的 DOM 里面去
  el.appendChild(instance.$el)

  // 监听的当前指令绑定的元素  滚动事件
  el.addEventListener('scroll', () => {
    if (el.scrollTop >= el.clientHeight) {
      instance.visible = true
    } else {
      instance.visible = false
    }
  })
}
