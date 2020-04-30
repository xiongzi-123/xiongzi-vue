<template>
  <div class="rank_list_box">
    <div class="box" v-for="item in list" :key="item.comic_id">
      <div class="box-left">
        <img :src="item.hcover" alt="" />
      </div>
      <div class="box-center">
        <div class="center-top">{{ item.name }}</div>
        <div class="center-center">
        <img src="~@/assets/icon/icon001.png" alt="">
          <!-- {{ item.cate_list[0].cate_cn_name }}/{{
            item.cate_list[1].cate_cn_name
          }}/{{ item.cate_list[2].cate_cn_name }} -->
          <!-- 1233213 -->
          <template v-for="i in item.cate_list.slice(0, 3)">
            {{ i.cate_cn_name }}
          </template>
        </div>

        <div class="center-bottom">
         <img src="~@/assets/icon/aa.png" alt="">

          {{ item.sina_nickname }}
        </div>
      </div>

      <!-- <div class="box-right"></div> -->
      <div
        class="tupian"
        :class="`img-${item.rank_no < 4 ? item.rank_no : ''}`"
      >
        <div class="" v-if="item.rank_no > 3">{{ item.rank_no }}</div>
      </div>
    </div>
  </div>
</template>

<script>
// import { getterRank } from '@/api/dongman'
export default {
  name: 'RankList',
  props: {
    list: {
      type: Array
    }
  }

}
</script>
<style lang="scss" scoped>
.rank_list_box {
  flex: 1;
  overflow: auto;
  flex-direction: column;
  margin-top: 8px;

  .box {
    display: flex;
    height: 81px;
    padding: 0 16px 16px;
    position: relative;

    .box-left {
      width: 144px;
      height: 81px;
      margin: 0 4px 0 0;

      img {
        width: 100%;
        height: 100%;
        display: block;
        border-radius: 5px;
      }
    }
    .box-center {
      width: 155px;
      height: 81px;
      .center-top {
        font-size: 16px;
        color: #333333;
        width: 139px;
        margin: 4px 0 0;
        padding: 0 0 8px;
        text-overflow: ellipsis;
        overflow: hidden; // 多余隐藏
        white-space: nowrap; // 规定段落中的文本不进行换行
      }
      .center-center {
        width: 139px;
        height: 24px;
        font-size: 12px;
        color: #000000;
        padding: 0 0 4px;
        img {
          width: 16px;
          height: 16px;
          display: block;
          float: left;
        }
      }
      .center-bottom {
        width: 139px;
        height: 16px;
        font-size: 12px;
        color: #000000;
        img {
          width: 16px;
          height: 16px;
          display: block;
          float: left;
        }
      }
    }
    .img-1 {
      background-image: url("~@/assets/icon/rank_num1.6f4a3ebc.png");
      width: 1.33333rem;
      height: 54px;
      margin: auto;
     background-repeat: no-repeat;

      right: 0.53333rem;
      background-size: 100%;
      bottom: 0;
    }
     .img-2 {
      background-image: url("~@/assets/icon/rank_num2.9a307695.png");
      width: 1.33333rem;
      height: 54px;
      margin: auto;
     background-repeat: no-repeat;

      right: 0.53333rem;
      background-size: 100%;
      bottom: 0;
    }
     .img-3 {
      background-image: url("~@/assets/icon/rank_num3.8800c965.png");
      width: 1.33333rem;
      height: 54px;
      margin: auto;
     background-repeat: no-repeat;

      right: 0.53333rem;
      background-size: 100%;
      bottom: 0;
    }

  }
}
</style>
