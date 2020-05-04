<template>
  <div class="page-comic">
    <Header title="完结"></Header>
    <div class="box">
      <div class="box-max" v-for="item in ComicList" :key="item.extra.comic_id">
        <div class="max-top">
          <img :src="item.extra.hcover" alt="" />
        </div>
        <div class="max-bottom">
          <span class="span1">恋爱</span>

          <span class="span2"> {{ item.extra.name }}</span>
        </div>
      </div>
      <el-backtop target=".box" :bottom="8" :right="8">
        <div class="goTop"></div>
      </el-backtop>
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header'
import { getterComic } from '@/api/dongman'

export default {
  name: 'Comic',
  components: {
    Header
  },
  data () {
    return {
      ComicList: []
    }
  },
  methods: {
    getterComic () {
      getterComic().then(res => {
        console.log(res.data.data.ending_works_list)
        this.ComicList = res.data.data.ending_works_list
      })
    }
  },
  created () {
    this.getterComic()
  }
}
</script>
<style lang="scss" scoped>
.page-comic {
  display: flex;
  flex-direction: column;
  height: 100%;
  .box {
    flex: 1;
    overflow: auto;
    .box-max {
      flex-direction: column;
      display: flex;
      margin: 0 0 8px;
      .max-top {
        height: 211px;
        width: 100%;
        img {
          width: 100%;
          height: 100%;
          display: block;
          border-radius: 10px;
        }
      }
      .max-bottom {
        height: 28px;

        margin: 0 0 0 8px;

        .span1 {
          background: #fc7933;
          width: 32px;
          height: 16px;
          color: #efefef;
          text-align: center;
          font-size: 10px;
        }
        .span2 {
          font-size: 16px;
          color: #666666;
        }
      }
    }
  }
}
</style>
