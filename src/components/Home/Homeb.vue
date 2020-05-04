<template>
  <div class="recommend_block">
    <div class="home_recommend_header">
      <div class="header-left">{{title}}</div>
      <div class="header-right">更多></div>
    </div>
    <div class="home_recommend_comics ">

      <div
        class="home-center-type1"
        v-for="item in list"
        :key="item.info_id"
      >
        <div class="type1-left">

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
    </div>
  </div>
</template>

<script>
export default {
  name: 'Homea',
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    },
    title: {
      type: String
    }

  }
}
</script>

<style></style>
