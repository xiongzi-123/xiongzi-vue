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
      <div class="swipeContainer">
        <div class="swipe_wrap">
          <Swiper class="mint-swipe" v-if="bannerList.length > 0">
            <SwiperItem
              class="swiper-item"
              v-for="item in bannerList"
              :key="item.info_id"
            >
              <img :src="item.image_ext_url" alt="" />
            </SwiperItem>
            <!-- <SwiperItem class="swiper-item">
              <img
                src="https://img.manhua.weibo.com/client/2020/04/15/n7hszy0N.png"
                alt=""
              />
            </SwiperItem>
            <SwiperItem class="swiper-item">
              <img
                src="https://img.manhua.weibo.com/client/2020/04/14/gU3Vg3gU.jpg"
                alt=""
              />
            </SwiperItem>
            <SwiperItem class="swiper-item">
              <img
                src="https://img.manhua.weibo.com/client/2020/04/15/n7hszy0N.png"
                alt=""
              />
            </SwiperItem> -->
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
              src="http://img.manhua.weibo.com/static/b/vcomic-h5/dist/img/daypub.7d71503a.png"
              alt=""
            />
            <p>分类</p>
          </div>
        </router-link>
        <router-link to="/rank">
          <div class="home_menu_item">
            <img
              src="http://img.manhua.weibo.com/static/b/vcomic-h5/dist/img/daypub.7d71503a.png"
              alt=""
            />
            <p>榜单</p>
          </div>
        </router-link>
        <router-link to="/comic">
          <div class="home_menu_item">
            <img
              src="http://img.manhua.weibo.com/static/b/vcomic-h5/dist/img/daypub.7d71503a.png"
              alt=""
            />
            <p>完结</p>
          </div>
        </router-link>
      </div>
      <!-- v-for="item in locationList" :key="" -->
      <template ></template>
      <div class="recommend_block">
        <div class="home_recommend_header">
          <div class="header-left">精品佳作</div>
          <div class="header-right">更多></div>
        </div>
        <div class="home_recommend_comics threeClassic two">
          <div class="home-center" v-for="item in goodWork" :key="item.info_id">
            <div class="center-top">
              <img :src="item.image_ext_url" alt="" />
            </div>
            <div class="center-bottom">
              <p class="p1">
                {{ item.title }}
              </p>
              <p class="p2">
                {{ item.extra.watching_focus }}
              </p>
            </div>
          </div>
          <!-- <div class="home-center">
            <div class="center-top">
              <img
                src="https://img.manhua.weibo.com/client/2020/04/13/U7BV1BOY.jpg"
                alt=""
              />
            </div>
            <div class="center-bottom">
              <p class="p1">
                恶魔，别吻我
              </p>
              <p class="p2">
                美男小三居然是恶魔？
              </p>
            </div>
          </div>
          <div class="home-center">
            <div class="center-top">
              <img
                src="https://img.manhua.weibo.com/client/2020/04/13/U7BV1BOY.jpg"
                alt=""
              />
            </div>
            <div class="center-bottom">
              <p class="p1">
                恶魔，别吻我
              </p>
              <p class="p2">
                美男小三居然是恶魔？
              </p>
            </div>
          </div> -->
        </div>
      </div>

      <div class="recommend_block">
        <div class="home_recommend_header">
          <div class="header-left">人气作品</div>
          <div class="header-right">更多></div>
        </div>
        <div class="home_recommend_comics ">
          <div
            class="home-center"
            v-for="item in popularList"
            :key="item.comic_id"
          >
            <div class="center-top">
              <img :src="item.image_ext_url" alt="" />
            </div>
            <div class="center-bottom">
              <p class="p1">
                {{ item.title }}
              </p>
              <p class="p2">
                {{ item.extra.watching_focus }}
              </p>
            </div>
          </div>
          <!-- <div class="home-center">
            <div class="center-top">
              <img
                src="https://img.manhua.weibo.com/client/2020/04/13/U7BV1BOY.jpg"
                alt=""
              />
            </div>
            <div class="center-bottom">
              <p class="p1">
                恶魔，别吻我
              </p>
              <p class="p2">
                美男小三居然是恶魔？
              </p>
            </div>
          </div>
          <div class="home-center">
            <div class="center-top">
              <img
                src="https://img.manhua.weibo.com/client/2020/04/13/U7BV1BOY.jpg"
                alt=""
              />
            </div>
            <div class="center-bottom">
              <p class="p1">
                恶魔，别吻我
              </p>
              <p class="p2">
                美男小三居然是恶魔？
              </p>
            </div>
          </div>
          <div class="home-center">
            <div class="center-top">
              <img
                src="https://img.manhua.weibo.com/client/2020/04/13/U7BV1BOY.jpg"
                alt=""
              />
            </div>
            <div class="center-bottom">
              <p class="p1">
                恶魔，别吻我
              </p>
              <p class="p2">
                美男小三居然是恶魔？
              </p>
            </div>
          </div> -->
        </div>
      </div>
      <div class="recommend_block">
        <div class="home_recommend_header">
          <div class="header-left">人气作品</div>
          <div class="header-right">更多></div>
        </div>
        <div class="home_recommend_comics ">
          <!-- v-for="item in newWork" :key="item.info_id" -->
          <div
            class="home-center-type1"
            v-for="item in newWork"
            :key="item.info_id"
          >
            <div class="type1-left">
              <!-- :src="item.image_ext_url" -->
              <img :src="item.image_ext_url" alt="" />
            </div>
            <div class="type2-right">
              <div class="right-top">{{ item.title }}</div>
              <div class="right-center">
                <img src="~@/assets/icon/icon001.png" alt="" />

                {{ item.cate_list[0].cate_cn_name }}、{{
                  item.cate_list[1].cate_cn_name
                }}
              </div>
              <div class="right-bottom">
                <img src="~@/assets/icon/aa.png" alt="" />
                {{ item.extra.sina_nickname }}
              </div>
            </div>
          </div>
          <!-- <div class="home-center-type1">
            <div class="type1-left">
              <img
                src="https://img.manhua.weibo.com/client/2020/04/20/JqyVe73t.jpg"
                alt=""
              />
            </div>
            <div class="type2-right">
              <div class="right-top">你好明天你好明天你好明天你好明天</div>
              <div class="right-center">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGFBMVEUAAABKkOJLkeNLkONVqv9LkuRMkeNKkOIsiLo4AAAAB3RSTlMA5rWIBktK5LpJhQAAADpJREFUKM9joBFgMSwXdkAWYC4vLzdgUAeSRRABxjKGcAFkAfYCEEIATAHGUoQWTEMR1hIGo74lEgAAomkhe7DLd3MAAAAASUVORK5CYII="
                  alt=""
                />
                你好你好
              </div>
              <div class="right-bottom">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAyVBMVEUAAAAmJiVJREJ0cm9oaGNubmhzcG1IRUJ2c3BJRUJ0cXB4eHR5d3R5dXVDQz4AAABzcG5iYF1raWZdWlh0cG5QTEpGQ0FPTkx5eXZ7e3s3NzF1dXV3d3d+eHPe3tSkoJ1xa2fIx76ZlpNpZGByb21OSkfCwLhubmlPS0iGgXvOzcR1cW68vLSVkY5/eXR4cm1oaGRgW1dcV1TS0snFw7qQjImCf3yinpqin5iKhoODfXhtZ2Pb29KzsKmOiYVZVFHFxbxsamVmY2Fv8+XpAAAAHXRSTlMAKK/n4uHeuLaun4BkPzcN+vry7ezrlZRQOiojHsW6HFUAAAEbSURBVDjL7ZDXbsMgFECdPZt0b4jtpsSY4Ix6O6Pt/39URYuggOXXRFGOhHR1dXRkX+vMIRg1l18zQWtUKTfd+acjSFuV8nL+ASXO7Njli0G3MdVodAdPZeotiTPqatAsJu1H3R2SKJmUkkRkqLqvlzShOxwAjTyL3AmdvihyP464aILduK/IbVBBsLtW5CsCGAgBEDo5G34fdkK2Jt+KfGcDBoTsoYAP2IcOWxc3iny/+ifDLR986GO2Xj8ocs1bSHkD07+Bu7b3bCnUV1JO4UaR13WhibSQwRbKz2DhmtBEWsoBkj/Iw0ZaXAzk7GQhOx0SYSNtIsJm2kQLV6cXPGymC9ug4GGD3v7NYN+zyhl3vHcNrzO2zpwOPxnwU3esbrlEAAAAAElFTkSuQmCC"
                  alt=""
                />
                你好昨天
              </div>
            </div>
          </div>
          <div class="home-center-type1">
            <div class="type1-left">
              <img
                src="https://img.manhua.weibo.com/client/2020/04/20/JqyVe73t.jpg"
                alt=""
              />
            </div>
            <div class="type2-right">
              <div class="right-top">你好明天你好明天你好明天你好明天</div>
              <div class="right-center">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGFBMVEUAAABKkOJLkeNLkONVqv9LkuRMkeNKkOIsiLo4AAAAB3RSTlMA5rWIBktK5LpJhQAAADpJREFUKM9joBFgMSwXdkAWYC4vLzdgUAeSRRABxjKGcAFkAfYCEEIATAHGUoQWTEMR1hIGo74lEgAAomkhe7DLd3MAAAAASUVORK5CYII="
                  alt=""
                />
                你好你好
              </div>
              <div class="right-bottom">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAyVBMVEUAAAAmJiVJREJ0cm9oaGNubmhzcG1IRUJ2c3BJRUJ0cXB4eHR5d3R5dXVDQz4AAABzcG5iYF1raWZdWlh0cG5QTEpGQ0FPTkx5eXZ7e3s3NzF1dXV3d3d+eHPe3tSkoJ1xa2fIx76ZlpNpZGByb21OSkfCwLhubmlPS0iGgXvOzcR1cW68vLSVkY5/eXR4cm1oaGRgW1dcV1TS0snFw7qQjImCf3yinpqin5iKhoODfXhtZ2Pb29KzsKmOiYVZVFHFxbxsamVmY2Fv8+XpAAAAHXRSTlMAKK/n4uHeuLaun4BkPzcN+vry7ezrlZRQOiojHsW6HFUAAAEbSURBVDjL7ZDXbsMgFECdPZt0b4jtpsSY4Ix6O6Pt/39URYuggOXXRFGOhHR1dXRkX+vMIRg1l18zQWtUKTfd+acjSFuV8nL+ASXO7Njli0G3MdVodAdPZeotiTPqatAsJu1H3R2SKJmUkkRkqLqvlzShOxwAjTyL3AmdvihyP464aILduK/IbVBBsLtW5CsCGAgBEDo5G34fdkK2Jt+KfGcDBoTsoYAP2IcOWxc3iny/+ifDLR986GO2Xj8ocs1bSHkD07+Bu7b3bCnUV1JO4UaR13WhibSQwRbKz2DhmtBEWsoBkj/Iw0ZaXAzk7GQhOx0SYSNtIsJm2kQLV6cXPGymC9ug4GGD3v7NYN+zyhl3vHcNrzO2zpwOPxnwU3esbrlEAAAAAElFTkSuQmCC"
                  alt=""
                />
                你好昨天
              </div>
            </div>
          </div> -->
        </div>
      </div>
      <div class="recommend_block">
        <div class="home_recommend_header">
          <div class="header-left">热门连载</div>
          <div class="header-right">更多></div>
        </div>
        <div class="home_recommend_comics ">
          <div
            class="home-center"
            v-for="item in hotSerial"
            :key="item.info_id"
          >
            <div class="center-top">
              <img :src="item.image_ext_url" alt="" />
            </div>
            <div class="center-bottom">
              <p class="p1">
                {{ item.title }}
              </p>
              <p class="p2">
                {{ item.extra.watching_focus }}
              </p>
            </div>
          </div>
          <!-- <div class="home-center">
            <div class="center-top">
              <img
                src="https://img.manhua.weibo.com/client/2020/04/13/U7BV1BOY.jpg"
                alt=""
              />
            </div>
            <div class="center-bottom">
              <p class="p1">
                恶魔，别吻我
              </p>
              <p class="p2">
                美男小三居然是恶魔？
              </p>
            </div>
          </div> -->
        </div>
      </div>

      <div class="recommend_block">
        <div class="home_recommend_header">
          <div class="header-left">小编推荐</div>
          <div class="header-right">更多></div>
        </div>
        <div class="home_recommend_comics threeClassic">
          <div class="home-center" v-for="item in xiaoBian" :key="item.info_id">
            <div class="center-top">
              <img
                :src="item.image_ext_url"
                alt=""
              />
            </div>
            <div class="center-bottom">
              <p class="p1">
                {{ item.title}}
              </p>
              <p class="p2">
                {{ item.extra.watching_focus}}
              </p>
            </div>
          </div>
          <!-- <div class="home-center">
            <div class="center-top">
              <img
                src="https://img.manhua.weibo.com/client/2020/04/13/U7BV1BOY.jpg"
                alt=""
              />
            </div>
            <div class="center-bottom">
              <p class="p1">
                恶魔，别吻我
              </p>
              <p class="p2">
                美男小三居然是恶魔？
              </p>
            </div>
          </div>
          <div class="home-center">
            <div class="center-top">
              <img
                src="https://img.manhua.weibo.com/client/2020/04/13/U7BV1BOY.jpg"
                alt=""
              />
            </div>
            <div class="center-bottom">
              <p class="p1">
                恶魔，别吻我
              </p>
              <p class="p2">
                美男小三居然是恶魔？
              </p>
            </div>
          </div> -->
        </div>
      </div>
      <div class="recommend_block">
        <div class="home_recommend_header">
          <div class="header-left">本周推荐</div>
          <div class="header-right">更多></div>
        </div>
        <div class="home_recommend_comics ">
          <div class="home-bottom" v-for="item in weekList" :key="item.info_id">
            <div class="bottom-top">
              <img :src="item.image_ext_url" alt="" />
            </div>
            <div class="bottom-bottom">
              <p class="p1">
                {{ item.title }}
              </p>
              <p class="p2">
                {{ item.extra.watching_focus }}
              </p>
            </div>
          </div>
          <!-- <div class="home-bottom">
            <div class="bottom-top">
              <img
                src="https://img.manhua.weibo.com/client/2020/04/20/x6dbxpxt.jpg"
                alt=""
              />
            </div>
            <div class="bottom-bottom">
              <p class="p1">
                只对你臣服
              </p>
              <p class="p2">
                占了便宜还想跑？
              </p>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from '@/components/Swiper'
import { getter } from '@/api/dongman'

export default {
  name: 'Home',
  components: {
    Swiper: Swiper,
    SwiperItem: SwiperItem
  },
  data () {
    return {
      bannerList: [], // 存于轮播图数据
      goodWork: [], // 存于精品佳作数据 3个
      locationList: [], // 存于那个类型的名字  6个
      newWork: [], // 存于最新上架  3个
      hotSerial: [], // 存于热门连载 2个
      xiaoBian: [], // 存于小编推荐 3个
      weekList: [], // 本周推荐  3个
      popularList: [] // 人气作品  4个
    }
  },
  methods: {
    getter () {
      getter().then(res => {
        console.log(res.data)
        this.bannerList = res.data.data.h5_recommend_female_rotation_map
        // console.log('bannerList', bannerList)
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
        this.xiaoBian = res.data.data.h5_recommend_female_xiaobian_recommend.slice(0, 3)
        this.locationList = res.data.data.location_list.slice(1, 7)
      })
    }
  },
  created () {
    this.getter()
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
.page-home {
  display: flex;
  flex-direction: column;
  height: 100%;
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
    .recommend_block {
      border-radius: 0.5rem;
      margin-bottom: 10px;
      .home_recommend_header {
        height: 44px;
        background: #ffffff;
        margin: 8px 0 0;
        padding: 0 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .header-left {
          color: #666;
          font-size: 18px;
          // padding: 0 0 0 26px;
          width: 98px;
          height: 44px;
          line-height: 44px;
          position: relative;
          padding-left: 24px;
          &::before {
            content: "";
            position: absolute;
            top: 11px;
            left: 0;
            width: 22px;

            height: 22px;
            background-size: cover;
            background-position: 50%;
            background: url("../../assets/icon/aa.png");
            background-repeat: no-repeat;
          }
        }
        .header-right {
          background: #4a90e2;
          border-radius: 10px;
          color: #ffffff;
          line-height: 22px;
          text-align: center;
          font-size: 12px;
          width: 42px;
          height: 20px;
        }
      }
      .home_recommend_comics {
        // height: 420px;
        background: #ffffff;
        max-width: 100%;
        flex: auto;
        padding: 0 16px;
        display: flex;
        flex-wrap: wrap; // 允许换行
        box-sizing: border-box;
        justify-content: space-between;

        .home-center {
          // width: 167px;
          height: 140px;
          // border: 1px solid #cccccc;
          margin-bottom: 5px;
          .center-top {
            width: 167px;
            height: 90px;
            img {
              width: 100%;
              height: 100%;
              display: block;
              border-radius: 10px;
            }
            .p1 {
              color: #666;
              font-size: 14px;
              height: 19px;
              margin-top: 6px;
              margin-bottom: 6px;
            }
            .p2 {
              color: #999;
              font-size: 12px;
              margin: 0 0 6px;
            }
          }
          .center-bottom {
            width: 159px;
            height: 40px;
            .p1 {
              color: #666;
              font-size: 14px;
              height: 19px;
              margin-top: 6px;
              margin-bottom: 6px;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
            }
            .p2 {
              color: #999;
              font-size: 12px;
              margin: 0 0 6px;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
            }
          }
        }
        .home-center-type1 {
          height: 106px;
          // padding: 0 16px 16px;
          display: flex;
          .type1-left {
            width: 160px;
            height: 90px;
            margin: 0 4px 0 0;
            // border: 1px solid #cccccc;
            img {
              width: 160px;
              height: 90px;
              display: block;
              border-radius: 10px;
            }
          }
          .type2-right {
            width: 180px;
            height: 90px;
            // padding: 0 16px 0 0;
            // border: 1px solid #cccccc;
            .right-top {
              width: 163px;
              height: 32px;
              color: #333;
              font-size: 16px;
              margin: 4px 0 0;
              padding: 0 0 4px;
              text-overflow: ellipsis;
              overflow: hidden; // 多余隐藏
              white-space: nowrap; // 规定段落中的文本不进行换行
            }
            .right-center {
              width: 163px;
              height: 24px;
              color: #000000;
              font-size: 12px;
              padding: 0 0 4px;
              img {
                width: 16px;
                height: 16px;
                display: block;
                float: left;
              }
            }
            .right-bottom {
              width: 163px;
              color: #000;
              font-size: 12px;
              height: 16px;
              img {
                width: 16px;
                height: 16px;
                display: block;
                float: left;
              }
            }
          }
        }
        .home-bottom {
          width: 109px;
          height: 199px;
          // border: 1px solid #cccccc;
          .bottom-top {
            width: 109px;
            height: 150px;
            img {
              width: 100%;
              height: 100%;
              display: block;
              border-radius: 10px;
            }
          }
          .bottom-bottom {
            width: 101px;
            height: 49px;
            .p1 {
              font-size: 14px;
              color: #666;
              height: 19px;
              margin-top: 6px;
              margin-bottom: 6px;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
            }
            .p2 {
              font-size: 12px;
              color: #999;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
            }
          }
        }
      }
      .threeClassic .home-center:first-child {
        max-width: 100%;
        width: 100%;
        flex: auto;
        height: 265px;
        .center-top {
          height: 215px;
          width: 100%;
        }
      }
      // .two :nth-child(2) {
      //   margin-right: 10px;
      //   flex: 1 0 40%;
      //   overflow: hidden;
      // }
    }
  }
}
</style>
