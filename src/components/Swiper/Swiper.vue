<template>
  <div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper">
      <slot />
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'Swiper',
  props: {
    autoplay: {
      type: Number,
      default: 3000
    },
    loop: {
      type: Boolean,
      default: true
    }
  },
  mounted () {
    // eslint-disable-next-line no-new
    new Swiper(this.$el, {
      pagination: {
        el: '.swiper-pagination'
      },
      loop: true,
      autoplay: true
    })
  }
}
</script>

<style lang="scss">
.swiper-container {
  width: 343px;
  height: 214px;
  .swiper-pagination-bullet {
    background: #fff;
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    background: #f75d79;
  }
}
</style>
