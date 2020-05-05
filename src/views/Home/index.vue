<template>
  <div class="page-home">
    <div class="top">
      <div class="com_nav">
        <div class="nav_content">
          <div class="nav_left">
            <img
              src="http://img.manhua.weibo.com/static/b/vcomic-h5/dist/img/icon.b72a7a04.png"
              alt
            />
          </div>
          <div class="nav_right">
            <div class="right-1">
              <i class="iconfont icon-shuaxin"></i>
            </div>
            <router-link to="/search">
              <div class="right-2">
                <i class="iconfont icon-sousuo "></i>
              </div>
            </router-link>
            <router-link to="/mine">
              <div class="right-3">
                <i class=" iconfont icon-gerenzhongxin "></i>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <!-- <van-pull-refresh
        v-model="isLoading"
        @refresh="onRefresh"
        success-text="刷新成功"
      > -->
      <el-backtop target=".bottom" :bottom="8" :right="8">
        <div class="goTop"></div>
      </el-backtop>

      <div class="swipeContainer">
        <div class="swipe_wrap">
          <Swiper class="mint-swipe" v-if="bannerList.length > 0">
            <SwiperItem
              class="swiper-item"
              v-for="item in bannerList"
              :key="item.info_id"
              v-lazy="item.image_ext_url"
            >
              <img :src="item.image_ext_url" alt="" />
            </SwiperItem>
          </Swiper>
        </div>
      </div>

      <div class="home_menu">
        <router-link to="/daypub">
          <div class="home_menu_item">
            <img
              src="http://img.manhua.weibo.com/static/b/vcomic-h5/dist/img/daypub.7d71503a.png"
              alt=""
            />
            <p>放送表</p>
          </div>
        </router-link>
        <router-link to="/cate">
          <div class="home_menu_item">
            <img
              src="//img.manhua.weibo.com/static/b/vcomic-h5/dist/img/catelog.3cfb4bb6.png"
              alt=""
            />
            <p>分类</p>
          </div>
        </router-link>
        <router-link to="/rank">
          <div class="home_menu_item">
            <img
              src="//img.manhua.weibo.com/static/b/vcomic-h5/dist/img/rank.bfd0ebb0.png"
              alt=""
            />
            <p>榜单</p>
          </div>
        </router-link>
        <router-link to="/comic">
          <div class="home_menu_item">
            <img
              src="//img.manhua.weibo.com/static/b/vcomic-h5/dist/img/ending.932e7864.png"
              alt=""
            />
            <p>完结</p>
          </div>
        </router-link>
      </div>

      <!-- 这六个组件是 六块数据 -->
      <Homea
        :list="goodWork"
        :title="location_list[1]"
        :myclass="`threeClassic`"
        :en="list_en[1]"
      ></Homea>
      <Homea
        :list="popularList"
        :title="location_list[2]"
        :en="list_en[2]"
      ></Homea>
      <Homeb :list="newWork" :title="location_list[3]" :en="list_en[3]">
      </Homeb>
      <Homea
        :list="hotSerial"
        :title="location_list[4]"
        :en="list_en[4]"
      ></Homea>
      <Homea
        :list="xiaoBian"
        :title="location_list[5]"
        :myclass="`threeClassic`"
        :en="list_en[5]"
      ></Homea>
      <Homea
        :list="weekList"
        :title="location_list[6]"
        :myclass="`threeRow`"
        :en="list_en[6]"
      ></Homea>
      <!-- </van-pull-refresh> -->
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from '@/components/Swiper' // 引入抽离的 轮播图组件
import { Homea, Homeb } from '@/components/Home' // 引入首页下半部分主体部分

import { getter } from '@/api/dongman' // 这是个接口 首页所以数据的接口

export default {
  name: 'Home',
  components: {
    // 局部组件
    Swiper: Swiper,
    SwiperItem: SwiperItem,
    Homea: Homea,
    Homeb: Homeb
  },
  data () {
    return {
      isLoading: false, // 控制下拉刷新
      bannerList: [], // 存于轮播图数据
      goodWork: [], // 存于精品佳作数据 3个
      locationList: [], // 存于那个类型的名字  6个
      newWork: [], // 存于最新上架  3个
      hotSerial: [], // 存于热门连载 2个
      xiaoBian: [], // 存于小编推荐 3个
      weekList: [], // 本周推荐  3个
      popularList: [] // 人气作品  4个
      // isShow: false //  这个来控制回到顶部按钮的显示隐藏
    }
  },
  methods: {
    // 这个方法时用来控制下拉刷新的  给了个定时器
    onRefresh () {
      setTimeout(() => {
        // Toast('刷新成功')
        this.isLoading = false
        // this.count++;
      }, 1000)
    },

    getter () {
      // 获取数据
      getter().then(res => {
        // console.log(res.data)
        // .slice 是用来截取数据的  （x,y） 包前不包后
        this.bannerList = res.data.data.h5_recommend_female_rotation_map

        this.goodWork = res.data.data.h5_recommend_female_fine_works.slice(
          0,
          3
        )
        this.popularList = res.data.data.h5_recommend_female_popular_works.slice(
          0,
          4
        )
        this.newWork = res.data.data.h5_recommend_female_new_arrival.slice(
          0,
          3
        )
        this.hotSerial = res.data.data.h5_recommend_female_hot_serial.slice(
          0,
          2
        )
        this.weekList = res.data.data.h5_recommend_female_week_recommend.slice(
          0,
          3
        )
        this.xiaoBian = res.data.data.h5_recommend_female_xiaobian_recommend.slice(
          0,
          3
        )
        this.locationList = res.data.data.location_list
      })
    }
  },
  computed: {
    // 这个数据是用来 获取某个值的属性  然后返回出去
    location_list () {
      return this.locationList.map(item => {
        return item.location_cn
      })
    },
    list_en () {
      return this.locationList.map(item => {
        return item.location_en
      })
    }
  },
  created () {
    // 这个钩子函数 是用来发请求的
    this.getter()
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
.page-home {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
  .topBtn {
    width: 36px;
    height: 36px;
    z-index: 1;
    border-radius: 100%;
    position: fixed;
    bottom: 0.5rem;
    right: 0.5rem;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAAAwpJREFUeAHtmT1vE0EQhmeckLPrmBopfwAh0VFRQEVDQ2UHJBA1SZcYoSuSIFIk1CAUSEiThiYVBVTpkOAPgESFUOwKIX8gPOw4kJzsu9vNee8cofckS+uZ2Z2d58avb20iXCAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiDgSoBdA/OMk4WNSrd1uCLEdRaZJuKXQbXa4M3Fdp55XdaeOCC527jQ/dV/I0KXohtmpo/BudJNfrH6NWovejxRQO355asktEck1fjCuUlMtyrba+/j/flbS/mniM/QqTcesNDbZDg6T6oao7Hxq+RvLbyDVG86reYzEqmdqjzm1+XZ6v2idalQQEl64wpqErpUGCC73jhjKlSXCtEgN71xBVSsLuXaQZn1xpVVAbqUWwcN9KZ1eGAVY1NkCo/dFJ/5kpOaecA80FypcWM4cwGketPpyYfhh7/oPk3r/uYSL5pnnHrUHh1Xdh7XNEZjo/boWHNoroHGRR2ext4BdW4vL9ifb7gp01PXy6/WNm11aIzGmuNHMzn2ry6Z3Mkx2TzeAMne3pS5izvSlw0hPU/FX/pVXZ7hy5WtlXfxEaNWjdU5OnfUe2TRnJp7sIcwTMyfND/J7g1Qd//TqlVviHaD2fNXspyvdI7ONYXYdelzbz2p4NPavQEyWnAnKfmx3qimjHFC17kuukQs9yQMvdTmZZEkMEd2ozfM11z0Jn2dE+9Al8yaKbrU5zDsn8zIPvIHiHlreBvHepPDaVxP+Cm69Hx4L1nfewNUvnHxITM/MXf1u750nFVvXIv5p0tMpXVzM36Yj/JPLtHTYC5Ycl3DFmfWnPzVri9J3C6M3kx8f946KK7A/8EGQJa7CEAAZCFgcaODAMhCwOJGBwGQhYDFjQ4CIAsBixsdBEAWAhY3OgiALAQs7jPSQfxtdJ9xttGovC1nApD5sWt7uNA423BMEe+9/T0yzmaDuZlH3S8986cIzes6Ckdt46yJuSAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiBQPIE/Jn79xtinElQAAAAASUVORK5CYII=);
    background-color: #fff;
    -webkit-box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
  }
  .topBtn,
  .nav_right .nav_serach {
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .top {
    @include border-bottom;

    height: 44px;
    .com_nav {
      position: relative;
      width: 100%;
      top: 0;
      left: 0;
      background-image: #ffffff;
      .nav_content {
        flex-direction: row;
        justify-content: space-between;
        display: flex;
        flex: 1;
        z-index: 1;
        height: 44px;
        .nav_left {
          justify-items: center;
          display: flex;
          flex-direction: row;
          align-items: center;
          img {
            margin-left: 16px;
            width: 103px;
            height: 24px;
          }
        }
        .nav_right {
          display: flex;

          flex-direction: row;

          justify-content: center;

          align-items: center;
          height: 44px;
          width: 132px;
          .right-1 {
            width: 44px;
            height: 44px;
            text-align: center;
            i {
              font-size: 20px;
            }
          }
          .right-2 {
            width: 44px;
            height: 44px;
            text-align: center;
            i {
              font-size: 20px;
            }
          }
          .right-3 {
            width: 44px;
            height: 44px;
            text-align: center;
            i {
              font-size: 20px;
            }
          }
        }
      }
    }
  }
  .bottom {
    flex: 1;
    overflow-y: auto;
    .swipeContainer {
      padding-top: 8px;
      .swipe_wrap {
        width: 343px;
        height: 214px;
        margin: 0 16px;
        .mint-swipe {
          width: 343px;
          height: 214px;
          border-radius: 8px;
          overflow: hidden;
          .swiper-item {
            width: 100%;
            height: 100%;
            img {
              width: 100%;
              height: 214px;
            }
          }
        }
      }
    }
    .home_menu {
      height: 88px;
      padding: 16px;
      background: #ffffff;
      display: flex;
      justify-content: space-between;
      .home_menu_item {
        width: 60px;
        height: 88px;
        img {
          width: 60px;
        }
        p {
          line-height: 0.75rem;
          font-size: 14px;
          text-align: center;
          color: #333;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>
