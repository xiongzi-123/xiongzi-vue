<template>
  <header class="header">
    <div class="header-left" @click='goBack'>
      <i class="iconfont icon-iconfontjiantou1"></i>
    </div>
    <div class="center">
      {{ title }}
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: '放送表'
    }
  },
  methods: {
    goBack () {
      // 使用编程式导航
      this.$router.back()
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
.header {
  // @include border-bottom;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  box-sizing: border-box;
  background-color: #fff;
  position: relative;
  .header-left {
    position: absolute;
    top: 5px;
    left: 13px;
    width: 44px;
    height: 44px;
    i {
      font-size: 24px;
    }
  }
  .center{
    font-size: 18px;
  }
}
</style>
