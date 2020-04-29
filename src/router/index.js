import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import Cate from '../views/Cate'
import Daypub from '../views/Daypub'
import Mine from '../views/Mine'
import Rank from '../views/Rank'
import RankComprehensive from '../views/Rank/RankComprehensive'
import RankNewlist from '../views/Rank/RankNewlist'
import RankReading from '../views/Rank/RankReading'
import Search from '../views/Search'
import Comic from '../views/Comic'

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
      component: Rank,
      children: [
        {
          path: 'rankComprehensive',
          component: RankComprehensive
        },
        {
          path: 'rankNewlist',
          component: RankNewlist
        },
        {
          path: 'rankReading',
          component: RankReading
        }
      ]
    },
    {
      path: '/search',
      component: Search
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
