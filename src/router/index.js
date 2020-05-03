import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/Home')
const Cate = () => import('../views/Cate')
const Daypub = () => import('../views/Daypub')
const Mine = () => import('../views/Mine')
const Rank = () => import('../views/Rank')

const Search = () => import('../views/Search')
const Comic = () => import('../views/Comic')
const SerachResult = () => import('../views/SerachResult')

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/cate',
      component: Cate
    },
    {
      path: '/daypub',
      component: Daypub
    },
    {
      path: '/mine',
      component: Mine
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/serachResult',
      component: SerachResult
    },
    {
      path: '/comic',
      component: Comic
    },
    {
      path: '',
      redirect: '/home'
    }
  ]
})

export default router
