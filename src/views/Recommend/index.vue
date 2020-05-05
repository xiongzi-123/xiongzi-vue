<template>
  <div class="page-recommend">
    <Header :title="title"></Header>

    <div class="list_loaded scroll">
      <el-backtop target=".list_loaded " :bottom="8" :right="8">
        <div class="goTop"></div>
      </el-backtop>
      <div class="com-item" v-for="item in list[message]" :key="item.info_id">
        <div class="item-cover">
          <div
            class="comic_cover"
            lazy="loaded"
            :style="`background-image: url(${item.extra.hcover});`"
          ></div>
        </div>
        <div class="item-info">
          <p class="info-title">{{ item.extra.name }}</p>
          <p class="info-author">
            <span class="author-name"
              >作者：{{ item.extra.sina_nickname }}</span
            >
          </p>
          <p class="info-content">{{ item.extra.watching_focus }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getMoredata } from '../../api/dongman'
import Header from '@/components/Header'
export default {
  name: 'recommend',
  components: {
    Header
  },
  data () {
    return {
      list: [],
      message: '',
      title: ''
    }
  },
  methods: {
    getMessage () {
      this.message = this.$route.query.location_en
      this.title = this.$route.query.title
    },
    getMoredata (str) {
      getMoredata(str).then(res => {
        console.log(res)
        this.list = res.data.data
      })
    }
  },
  async created () {
    await this.getMessage()
    this.getMoredata(this.message)
  }
}
</script>
<style lang="scss" scoped>
.page-recommend {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  .list_loaded {
    flex: 1;
    overflow-y: auto;
    .com-item {
      height: 88px;
      padding: 8px 8px 8px 16px;
      display: flex;
      flex-direction: row;
      .item-cover {
        margin-right: 10px;
        width: 128px;
        height: 72px;
        .comic_cover {
          background-image: url(https://img.manhua.weibo.com/hcover/2019/11/20/6396974840_AfI7HcBv.jpg);

          width: 128px;
          height: 100%;
          background-repeat: no-repeat;
          background-position: 50%;
          background-size: cover;
        }
      }
    }

    .com-item .item-info {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-flex: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      overflow: hidden;
    }

    .com-item .item-info .info-title {
      line-height: 28px;
      color: #333;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-break: break-all;
      font-size: 14px;
    }

    .com-item .item-info .info-author,
    .com-item .item-info .info-content {
      font-size: 12px;
      color: #999;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-break: break-all;
    }

    .com-item .item-info .info-content {
      font-size: 12px;
      margin-top: 10px;
    }
  }
}
</style>
