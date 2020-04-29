<template>
  <div class="page-cate">
    <div class="cate-top">
      <Header title="分类"></Header>
      <div class="cate_list ">
        <div
          class=" filter_item "
          v-for="item in CateList.cate_list"
          :key="item.cate_id"
          :class="{ active: classOne === item.cate_id }"
          @click="classOne = item.cate_id"
        >
          {{ item.cate_cn_name }}
        </div>
        <!-- <div class=" filter_item">
          剧情
        </div>
        <div class=" filter_item">
          恋爱
        </div>
        <div class=" filter_item">
          搞笑
        </div>
        <div class=" filter_item">
          日常
        </div>
        <div class=" filter_item">
          总裁
        </div>
        <div class=" filter_item">
          奇幻
        </div>
        <div class=" filter_item">
          少年
        </div>
        <div class=" filter_item">
          动作
        </div>
        <div class=" filter_item">
          校园
        </div>
        <div class=" filter_item">
          都市
        </div>
        <div class=" filter_item">
          悬疑
        </div>
        <div class=" filter_item">
          灵异
        </div>
        <div class=" filter_item">
          古风
        </div>
        <div class=" filter_item">
          其他
        </div> -->
      </div>
      <!-- </div> -->
      <div class="show_filter">
        <div class="filter">
          <div
            class=" filter_item "
            v-for="item in CateList.end_status_list"
            :key="item.end_status"
            :class="{ active: classThree === item.end_status }"
            @click="classThree = item.end_status"
          >
            {{ item.end_status_name }}
          </div>
          <!-- <div class=" filter_item">
            完结
          </div>
          <div class=" filter_item">
            连载
          </div> -->
        </div>
        <div class="filter">
          <div
            class=" filter_item "
            v-for="item in CateList.comic_pay_status_list"
            :key="item.comic_pay_status"
            :class="{ active: classTwo === item.comic_pay_status }"
            @click="classTwo = item.comic_pay_status"
          >
            {{ item.comic_pay_status_name }}
          </div>
          <!-- <div class=" filter_item">
              完结
            </div>
            <div class=" filter_item">
              连载
            </div> -->
        </div>
      </div>
    </div>
    <div class="cate-bottom">
      <div class="loadMoreWraper">
        <!-- v-for="item in Result" :key="item.comic_id" -->
        <div class="loadMore" v-for="item in Result.data" :key="item.comic_id" >
          <div class="loadMore-top">
            <img :src="item.comic_hcover" alt="" />
          </div>
          <div class="loadMore-center">
            <p class="p1">
              {{ item.comic_name }}

            </p>
            <p class="p2">
              {{ item.comic_desc }}

            </p>
          </div>
        </div>
        <!-- <div class="loadMore">
          <div class="loadMore-top">
            <img
              src="https://img.manhua.weibo.com/hcover/2018/09/07/2660188431_YdWpZOAj.jpg"
              alt=""
            />
          </div>
          <div class="loadMore-center">
            <p class="p1">
              万里雪歌
            </p>
            <p class="p2">
              女装大佬，同游江湖
            </p>
          </div>
        </div>
        <div class="loadMore">
          <div class="loadMore-top">
            <img
              src="https://img.manhua.weibo.com/hcover/2018/09/07/2660188431_YdWpZOAj.jpg"
              alt=""
            />
          </div>
          <div class="loadMore-center">
            <p class="p1">
              万里雪歌
            </p>
            <p class="p2">
              女装大佬，同游江湖
            </p>
          </div>
        </div>
        <div class="loadMore">
          <div class="loadMore-top">
            <img
              src="https://img.manhua.weibo.com/hcover/2018/09/07/2660188431_YdWpZOAj.jpg"
              alt=""
            />
          </div>
          <div class="loadMore-center">
            <p class="p1">
              万里雪歌
            </p>
            <p class="p2">
              女装大佬，同游江湖
            </p>
          </div>
        </div>
        <div class="loadMore">
          <div class="loadMore-top">
            <img
              src="https://img.manhua.weibo.com/hcover/2018/09/07/2660188431_YdWpZOAj.jpg"
              alt=""
            />
          </div>
          <div class="loadMore-center">
            <p class="p1">
              万里雪歌
            </p>
            <p class="p2">
              女装大佬，同游江湖
            </p>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header'
import { getterCate, getterResult } from '@/api/dongman'
export default {
  name: 'Cate',
  components: {
    Header
  },
  data () {
    return {
      // 当前选中的index
      classOne: 0,
      classTwo: 0,
      classThree: 0,
      CateList: [],
      Result: []
    }
  },
  methods: {
    getterCate () {
      getterCate().then(res => {
        console.log(res.data.data.cate_list)
        this.CateList = res.data.data
      })
    },
    getterResult () {
      getterResult().then(res => {
        console.log(res.data.data)
        this.Result = res.data.data
      })
    }
  },
  created () {
    this.getterCate()
    this.getterResult()
  }
}
</script>
<style lang="scss" scoped>
.page-cate {
  display: flex;
  flex-direction: column;
  height: 100%;
  .cate_list {
    height: 90px;
    padding: 0 7px 0 8px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
  }
  .filter_item {
    width: 60px;
    height: 30px;
    font-size: 14px;
    line-height: 24px;
    color: #ccc;
    text-align: center;
  }
  .active {
    color: #fff;
    background: #f75d79;
    border-radius: 5px;
    width: 54px;
    height: 24px;
  }
  .active2 {
    color: #fff;
    background: #f75d79;
    border-radius: 5px;
    width: 54px;
    height: 24px;
  }
  .active3 {
    color: #fff;
    background: #f75d79;
    border-radius: 5px;
    width: 54px;
    height: 24px;
  }
  .show_filter {
    height: 60px;
    .filter {
      height: 30px;
      padding: 0 7px 0 8px;
      display: flex;
      .filter_item {
        width: 60px;
        height: 30px;
        font-size: 14px;
        line-height: 24px;
        color: #ccc;
        text-align: center;
      }
      .active {
        color: #fff;
        background: #f75d79;
        border-radius: 5px;
        width: 54px;
        height: 24px;
      }
    }
  }
  .cate-bottom {
    flex: 1;
    overflow-y: auto;
    .loadMoreWraper {
      flex-grow: 1;
      overflow: auto;
      padding: 0 8px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .loadMore {
        width: 175px;
        height: 154px;
        // border: 1px solid #cccccc;
        margin-bottom: 5px;
        .loadMore-top {
          width: 175px;
          height: 105px;
          img {
            width: 100%;
            height: 100%;
            display: block;
          }
        }
        .loadMore-center {
          width: 167px;
          height: 50px;
          .p1 {
            color: #666;
            margin-top: 6px;
            font-size: 14px;
          }
          .p2 {
            color: #999;
            font-size: 12px;
            margin: 0 0 6px;
          }
        }
      }
    }
  }
}
</style>
