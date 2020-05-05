<template>
  <div class="page-rank">
    <Header title="排行榜"></Header>

    <div class="rank_list_title">
      <div
        class="list-left"
        :class="{ 'active': isShow === 0 }"
        @click="isShow === 0  , hello1()"
      >
        阅读榜
      </div>
      <div
        class="list-left"
        :class="{ 'active': isShow === 1 }"
        @click="isShow === 1, getterShare() , hello2()"
      >
        新作榜
      </div>
      <div
        class="list-left"
        :class="{ 'active': isShow === 2 }"
        @click="isShow === 2, getterMax() , hello3()"
      >
        综合榜
      </div>
    </div>

    <RankList :list="oneList" v-show="isShow === 0"></RankList>
    <RankList :list="twoList" v-show="isShow === 1"></RankList>
    <RankList :list="threeList" v-show="isShow === 2"></RankList>
      <el-backtop target=".rank_list_box" :bottom="8" :right="8">
        <div class="goTop"></div>
      </el-backtop>

  </div>
</template>

<script>
// http://manhua.weibo.cn/wbcomic/home/rank_share?_type=h5
import Header from '@/components/Header'
import { getterRank, getterShare, getterMax } from '@/api/dongman'
// import RankHeader from "./components/RankHeader";
import RankList from './components/RankList'
export default {
  name: 'Cate',
  components: {
    Header,
    // RankHeader,
    RankList
  },
  data () {
    return {
      isShow: 0,
      isTwo: false,
      isThree: false,
      oneList: [],
      twoList: [],
      threeList: []
    }
  },
  methods: {
    hello1 () {
      this.isShow = 0
    },
    hello2 () {
      this.isShow = 1
    },
    hello3 () {
      this.isShow = 2
    },

    getterRank () {
      getterRank().then(res => {
        this.oneList = res.data.data.week
      })
    },
    getterShare () {
      if (this.isTwo) return
      getterShare().then(res => {
        this.twoList = res.data.data.week
        this.isTwo = true
      })
    },
    getterMax () {
      if (this.isThree) return
      getterMax().then(res => {
        this.threeList = res.data.data.week
        this.isThree = true
      })
    }
  },
  created () {
    this.getterRank()
    // this.getterShare()
    // this.getterMax()
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
.page-rank {
  display: flex;
  flex-direction: column;
  height: 100%;
  .rank_list_title {
    @include border-bottom;
    height: 44px;
    display: flex;
    position: relative;
    height: 1.17333rem;
    justify-content: space-around;

    align-items: center;
    .list-left {
      flex: 1;
      text-align: center;
      font-size: 14px;
      color: #666666;
      height: 44px;
      line-height: 44px;
      position: relative;
    }
    .active {
      &::before {
        position: absolute;
        content: "";
        width: 44px;
        height: 2px;
        background: #f75d79;
        bottom: 0;
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
      }
    }
    .list-center {
      text-align: center;
      font-size: 14px;
      color: #666666;
      line-height: 44px;

      height: 44px;
      position: relative;
      flex: 1;
    }
    .list-right {
      text-align: center;
      height: 44px;
      font-size: 14px;
      line-height: 44px;

      color: #666666;
      position: relative;
      flex: 1;
    }
  }
  .rank_list_title {
    @include border-bottom;
    height: 44px;
    display: flex;
    position: relative;
    height: 1.17333rem;
    justify-content: space-around;

    align-items: center;
    .list-left {
      flex: 1;
      text-align: center;
      font-size: 14px;
      color: #666666;
      height: 44px;
      line-height: 44px;
      position: relative;
    }
    .color {
      &::before {
        position: absolute;
        content: "";
        width: 44px;
        height: 2px;
        background: #f75d79;
        bottom: 0;
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
      }
    }
    .list-center {
      text-align: center;
      font-size: 14px;
      color: #666666;
      line-height: 44px;

      height: 44px;
      position: relative;
      flex: 1;
    }
    .list-right {
      text-align: center;
      height: 44px;
      font-size: 14px;
      line-height: 44px;

      color: #666666;
      position: relative;
      flex: 1;
    }
  }
  // .rank_list_box {
  //   flex: 1;
  //   overflow: auto;
  //   flex-direction: column;
  //   margin-top: 8px;

  //   .box {
  //     display: flex;
  //     height: 81px;
  //     padding: 0 16px 16px;
  //     position: relative;

  //     .box-left {
  //       width: 144px;
  //       height: 81px;
  //       margin: 0 4px 0 0;

  //       img {
  //         width: 100%;
  //         height: 100%;
  //         display: block;
  //         border-radius: 5px;
  //       }
  //     }
  //     .box-center {
  //       width: 155px;
  //       height: 81px;
  //       .center-top {
  //         font-size: 16px;
  //         color: #333333;
  //         width: 139px;
  //         margin: 4px 0 0;
  //         padding: 0 0 8px;
  //         text-overflow: ellipsis;
  //         overflow: hidden; // 多余隐藏
  //         white-space: nowrap; // 规定段落中的文本不进行换行
  //       }
  //       .center-center {
  //         width: 139px;
  //         height: 24px;
  //         font-size: 12px;
  //         color: #000000;
  //         padding: 0 0 4px;
  //         img {
  //           width: 16px;
  //           height: 16px;
  //           display: block;
  //           float: left;
  //         }
  //       }
  //       .center-bottom {
  //         width: 139px;
  //         height: 16px;
  //         font-size: 12px;
  //         color: #000000;
  //         img {
  //           width: 16px;
  //           height: 16px;
  //           display: block;
  //           float: left;
  //         }
  //       }
  //     }
  //     .box-right {
  //       background: url("../../../src/assets/icon/item-rank-1.png") no-repeat;
  //       width: 1.33333rem;
  //       height: 0.74667rem;
  //       margin: auto;
  //       position: absolute;
  //       top: -28px;
  //       right: 0.53333rem;
  //       background-size: 100%;
  //       bottom: 0;
  //     }
  //   }
  // }
}
</style>
