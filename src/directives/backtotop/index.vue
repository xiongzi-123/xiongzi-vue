<template>
  <section v-show="visible" class="back-to-top" @click="handleClick">
    <div class="icon-arrow-up"></div>
  </section>
</template>

<script>
export default {
  name: 'BackToTop',
  data () {
    return {
      visible: false
    }
  },
  methods: {
    handleClick () {
      this.$el.parentElement.scrollTop = 0
    }
  }
}
</script>

<style lang="scss" scoped>
.back-to-top {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  text-align: center;
  position: fixed;
  z-index: 999;
  bottom: 20px;
  right: 5px;
  color: #fff;
  font-size: 10px;
  background: #fff;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
  .icon-arrow-up {
    width: 36px;
    height: 36px;
    margin: auto;
    background: url("./assets/backTop.png") no-repeat center center;
    background-size: 20px 20px;
  }
}
</style>
