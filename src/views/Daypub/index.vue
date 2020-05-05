<template>
  <div class="page-daypub">
    <Header title='放松表'></Header>
    <div class="release_date" >
      <p class="release_date_day"
      :class="{'active': item.pub_name === isactive}"
      @click="isactive = item.pub_name  "
       v-for="item in dayList" :key="item.pub_day"
       >{{ item.pub_name }}</p>

    </div>
    <div class="load_state">
      <img
        src="//img.manhua.weibo.com/static/b/vcomic-h5/dist/img/play-loading.83412bf6.png"
        alt=""
      />
      <p>今日的漫画还在绘制中</p>
      <!---->
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header'
import { getDay } from '@/api/dongman'
export default {
  name: 'Daypub',
  components: {
    Header
  },
  data () {
    return {
      dayList: [],
      isactive: '今天'
    }
  },
  methods: {
    getDay () {
      getDay().then(res => {
        this.dayList = res.data.tab_list
      })
    }
  },
  created () {
    this.getDay()
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";

.page-daypub {
  display: flex;
  flex-direction: column;
  height: 100%;
  .release_date {
    @include border-bottom;

    display: flex;
    justify-content: space-around;
    align-items: center;
    .release_date_day {
      display: flex;
      // align-items: center;
      line-height: 40px;
      width: 28px;
      height: 40px;
      font-size: 14px;
      color: #b3b3b3;
      position: relative;
    }
    .active:before {
      position: absolute;
      width: 100%;
      height: 2px;
      content: "";
      background: #f75d79;
      bottom: 0;
      left: 0;
    }
  }
  .release .load_state {
    color: #ccc;
    font-size: 0.75rem;
  }
  .load_state {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      width: 184px;
      height: 184px;
    }
    p {
      margin-bottom: 1.375rem;
      color: #999;
      font-size: 16px;
    }
  }
}
</style>
