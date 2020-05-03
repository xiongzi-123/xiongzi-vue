<template>
  <div class="page-search">
    <div class="search_header">
      <form method="get" action="javascript:void(0);">
        <div class="search_ferame">
          <span class="search_ferame_icon  iconfont icon-search"></span
          ><input placeholder="请输入搜索关键字" v-model="searchVal" />
          <span
            class="search_clear_cion"
            v-show="searchVal"
            @click="(searchVal = ''), (isResult = false)"
          ></span>
        </div>
      </form>
      <div class="search_fix_btn" v-show="!searchVal">
        <span @click="goBack">取消</span>
        <!---->
      </div>
      <div class="search_fix_btn" v-show="searchVal">
        <span @click="handleClick(searchVal.trim())">搜索</span>
        <!---->
      </div>
    </div>
    <div class="search_footer">
      <template v-if="!searchVal">
        <div class="search_page" style="">
          <div class="hot_search">
            <div class="hot_serch_header">
              <div class="search_title">热门搜索</div>
              <div class="search_icon refresh" @click="refData"></div>
            </div>
            <ul class="hot_search_conent">
              <li
                class="search_label"
                v-for="item in hotData"
                :key="item.object_id"
                @click="handleClick(item.title)"
              >
                <a href="javascript:;" class="">
                  {{ item.title }}
                </a>
              </li>
              <!-- <li class="search_label">
              <a href="/c/71806" class="">
                悬疑猫——大叔深夜故事集
              </a>
            </li>
            <li class="search_label">
              <a href="/c/71554" class="">
                黑粉的造星计划
              </a>
            </li>
            <li class="search_label">
              <a href="/c/71557" class="">
                男友来自异次元
              </a>
            </li>
            <li class="search_label">
              <a href="/c/71524" class="">
                我的灵界女友们
              </a>
            </li>
            <li class="search_label">
              <a href="/c/71633" class="">
                伞少女梦谈
              </a>
            </li>
            <li class="search_label">
              <a href="/c/71631" class="">
                魔王奶爸修炼中
              </a>
            </li>
            <li class="search_label">
              <a href="/c/71157" class="">
                无常备忘录
              </a>
            </li>
            <li class="search_label">
              <a href="/c/71358" class="">
                拜托了！学霸
              </a>
            </li>
            <li class="search_label">
              <a href="/c/71323" class="">
                拎猫入住
              </a>
            </li>
            <li class="search_label">
              <a href="/c/70372" class="">
                我的女友是直男
              </a>
            </li>
            <li class="search_label">
              <a href="/c/71168" class="">
                天劫神卷
              </a>
            </li> -->
            </ul>
          </div>
        </div>

        <div class="hot_search hosity" v-if="historySearchList.length > 0">
          <div class="hot_serch_header">
            <div class="search_title">搜索历史</div>
            <div class="search_icon clear" @click="clearHistory"></div>
          </div>
          <ul class="hot_search_conent">
            <li
              class="search_label"
              v-for="item in historySearchList"
              :key="item.object_id"
            >
              <span class="search_label_text">{{ item }}</span>
            </li>
          </ul>
        </div>
      </template>
      <template v-else>
        <!-- 搜索结果面板 begin -->
        <section class="search-content">
          <div
            class="search_list"
            v-for="item in searchIndexList"
            :key="item.comic_id"
            @click="handleClick(item.sina_nickname)"
          >
            <a href="javascript:;" class=""
              ><div
                class="searchList"
                @click="
                  $router.push({
                    name: 'detailspage',
                    query: { comic_id: item.comic_id }
                  })
                "
              >
                <div class="search_list_img">
                  <div
                    class="comic_cover"
                    :style="`background-image: url(${item.cover});`"
                  ></div>
                </div>
                <div class="search_list_delete">
                  <h4 class="sarchList_title">
                    <font color="red"></font>{{ item.name }}
                  </h4>
                  <div class="sina_nickname">{{ item.sina_nickname }}</div>
                  <div class="sina_nickname">
                    <span v-for="i in item.cates" :key="i.cate_id"
                      >{{ i.cate_name }} \</span
                    >
                  </div>
                </div>
              </div></a>

          </div>
        </section>
        <!-- 搜索结果面板 end -->
      </template>
    </div>
  </div>
</template>

<script>
import { getHot, getSearchResult } from '@/api/dongman'
export default {
  name: 'Search',

  data () {
    return {
      isShow: false,
      isResult: false,

      num: 12, // 一页12条数据
      hotData: [],
      hotList: [],
      pageNum: 2,
      searchVal: '', // 这个用来绑定input里面的值
      // 历史搜索记录列表
      historySearchList: this.getSearch(),
      // 搜索面板数据集合
      searchIndexList: []
    }
  },
  watch: {
    searchVal (newVal, oldVal) {
      // 判断newVal是否有值

      // ？思考？只要 searchVal 发生变化，就发生ajax请求
      // 先输入 z
      // 在输入 h
      // 先后发了两个请求 一个是  z 一个是 zh
      // ajax请求的响应顺序我们是控制不了的，就有可能出现，我需要展示在页面上的是 zh 的结果
      // 但是显示的是  z 的结果

      if (newVal) {
        // 这里是判断 就是输入框里面的内容存在的时候 就触发
        // 防抖
        // 清除计时器
        clearTimeout(this.timer)

        this.timer = setTimeout(() => {
          this.getSearchResult(newVal)
        }, 500)
      }
      // console.log(23)
    }
  },

  methods: {
    goBack () {
      // 使用编程式导航
      this.$router.back()
    },
    getHot () {
      getHot().then(res => {
        // console.log(res.data)
        this.hotList = res.data.data
        this.hotData = this.hotList.slice(0, 12) // 因为这个热门搜索一次只能显示十一条数据 所以这里要做一个切割
      })
    },
    refData () {
      getHot().then(res => {
        this.hotList = res.data.data
        this.hotData = this.hotList.slice(this.num, this.num + 11) // 因为这个热门搜索一次只能显示十二条数据 所以这里要做一个切割
        this.num += 12 // 再次刷新就会显示后面十二条数据
        if (this.num >= this.hotList.length) {
          this.num = 0 // 如果大于那个数据的长度的话 就让他等于第一页
        }
      })
    },
    // input 输入的关键字请求
    getSearchResult (word, pageNum) {
      getSearchResult(word, pageNum).then(res => {
        // console.log(res.data)
        this.searchIndexList = res.data.data.data
      })
    },
    /**
     * 保存最近搜索
     * @param {String} key 搜索关键字
     */
    saveSearch (key) {
      // 取出之前存的内容
      let tmp = window.localStorage.getItem('search')

      // 2. 判断tmp是否存在
      if (!tmp) {
        tmp = []
      } else {
        tmp = JSON.parse(tmp)
      }
      // 3.判断key是否在 tmp 中
      if (tmp.includes(key)) {
        return // 存在就直接返回
      }
      // 4. 将 key 追加到 tmp 中
      tmp.push(key)
      // 5.在将 tmp 存储
      window.localStorage.setItem('search', JSON.stringify(tmp))
    },
    /**
     * 取出最近搜索
     */
    getSearch () {
      const tmp = window.localStorage.getItem('search')
      // 判断一下是否有值
      if (!tmp) {
        return []
      } else {
        // 如果有值就解析出来 , 没值就直接空数组
        return JSON.parse(tmp)
      }
    },
    // 关键字点击
    handleClick (key) {
      // 保存
      this.saveSearch(key)
      // 跳转serachResult
      this.$router.push('/serachResult')
    },
    clearHistory () {
      window.localStorage.setItem('search', '')
      this.historySearchList = this.getSearch()
    }
  },
  created () {
    this.getHot()
    // this.searchIndex(newVal)
  }
}
</script>
<style lang="scss" scoped>
@import "~@/assets/styles/mixins.scss";
.page-search {
  height: 100%;
  display: flex;
  flex-direction: column;
  .search_footer {
    flex: 1;
    overflow-y: auto;
  }
  .search_header {
    display: flex;
    margin: 16px 16px 0;

    .search_ferame {
      width: 288px;
      height: 44px;
      display: flex;
      // justify-content: center;
      align-items: center;
      background: #ffffff;
      border-radius: 5px;
      box-shadow: 0 8px 15px 0 rgba(0, 0, 0, 0.1);
      input {
        width: 206px;
      }
      .search_ferame_icon {
        width: 44px;
        height: 44px;
        background: url("../../assets/icon/search.15e76af5.png");
        background-repeat: no-repeat;
      }
      .search_clear_cion {
        -ms-flex-negative: 0;
        flex-shrink: 0;
        width: 20px;
        height: 20px;
        margin: 12px 18px 12px 0;
        background: url("../../assets/icon/delete.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }
    }
    .search_fix_btn {
      // width: 44px;
      height: 24px;
      margin: 10px 0 10px 11px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #666;
      font-size: 14px;
    }
  }
  .hot_search {
    padding: 16px 16px 24px;
  }

  .hot_search .hot_serch_header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    height: 44px;
  }

  .hot_search .hot_serch_header .search_title {
    font-size: 18px;
    color: #666;
    letter-spacing: 0;
    height: 44px;
    width: 72px;
    font-weight: 700;
  }

  .hot_search .hot_serch_header .search_icon {
    width: 44px;
    height: 44px;
  }
  .refresh {
    background: url("../../assets/icon/search.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .clear {
    background: url("../../assets/icon/clearsearch.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  .hot_search .hot_search_conent .search_label {
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;
    *vertical-align: auto;
    *zoom: 1;
    *display: inline;
    background: #efefef;
    border-radius: 0.125rem;
    margin: 0 16px 8px 0;
    padding: 0 17px;
    height: 36px;
    line-height: 36px;
    color: #666;
    font-size: 0.875rem;
  }
  .search_label_text {
    font-size: 14px;
    line-height: 36px;
  }
  .hot_search .hot_search_conent .search_label a {
    display: -webkit-box;
    line-clamp: 1;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    height: 36px;
    font-size: 14px;
    line-height: 36px;
    color: #666;
  }
  .search-content {
    box-sizing: border-box;
    margin: 0 auto;
    padding: 0 10px;
    .item {
      @include border-bottom;

      box-sizing: border-box;
      display: flex;
      align-items: center;
      height: 40px;
      padding-left: 10px;
      font-weight: 600;
    }
  }
  .search_list {
    margin: 0 16px 16px;

    display: flex;
  }
  .search_list .searchList {
    width: 343px;
    height: 96px;

    display: flex;

    flex-direction: row;

    justify-content: center;

    align-items: center;

    align-items: flex-start;
  }
  .comic_cover {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
  }

  .search_list .searchList .search_list_img {
    width: 72px;
    height: 96px;
  }
  .search_list .searchList .search_list_delete {
    flex: 1;
    margin-left: 8px;
    height: 96;
  }
  .search_list .searchList .search_list_delete .sarchList_title {
    height: 24px;
    font-size: 14px;
    color: #666;
    letter-spacing: 0;
    line-height: 24px;
  }
  .search_list .searchList .search_list_delete .sina_nickname {
    height: 24px;
    font-size: 12px;
    color: #999;
    letter-spacing: 0;
    line-height: 24px;
  }
}
</style>
