<template>
  <div class="recommend_block">
    <div class="home_recommend_header">
      <div class="header-left">
        <img src="../../assets/icon/aa.png" alt="">{{ title }}</div>
      <div class="header-right" @click="$router.push({name:'recommend',query: {location_en: en,title:title}})" >更多></div>
    </div>
    <!-- <div :class="`home_recommend_comics ${myclass}`"> -->

    <div :class="`home_recommend_comics ${myclass} `">
      <div class="home-center" v-for="item in list" :key="item.info_id">
        <div class="center-top">
          <img :src="item.image_ext_url" alt="" v-lazy="item.image_ext_url" />
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'Homeb',
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    },
    title: {
      type: String
    },
    myclass: {
      type: String
    },
    en: {
      type: String
    }
  }
}
</script>
