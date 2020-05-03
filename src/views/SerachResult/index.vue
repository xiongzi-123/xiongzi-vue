<template>
  <div class="wrap">
    <div class="comic" v-if="list.comic">
      <div class="nav_layout comic_nav">
        <div class="com_nav gray_nav">
          <div class="nav_content">
            <div class="nav_left" @click="$router.back()">
              <div class="back_btn l_con"></div>
            </div>
            <div class="nav_middle">
              <span class="nav_title">{{ list.comic.name }}</span>
            </div>
            <div class="nav_right">
              <div>
                <div class="com_fav"><span class="add_fav_btn"></span></div>
                <!---->
              </div>
              <div class="share_btn comic_share"></div>
            </div>
          </div>
          <!---->
        </div>
      </div>
      <div class="comic_content">
        <div>
          <!---->
          <div class="comic_info h_comic_info">
            <div
              class="comic_cover"
              lazy="loaded"
              :style="
                `background-image: url(https://img.manhua.weibo.com/${list.comic.hcover});`
              "
            ></div>
            <div class="mask"></div>
            <div class="comic_article ">
              <div class="comic_name">
                <span class="name">{{ list.comic.name }}</span
                ><!---->
              </div>
              <div class="comic_tags_hot">
                <div class="comic_tags">
                  <span
                    class="tags"
                    v-for="(i, index) in list.wbcomic_cate"
                    :key="i.cate_id"
                    :class="
                      index + 1 === list.wbcomic_cate.length ? 'tags_last' : ''
                    "
                  >
                    {{ i.cate_cn_name }} </span
                  >
                </div>
                <div class="comic_hot">
                  <span class="hot_icon"></span><span>热度值：</span
                  ><span class="hot_num">{{list.comic.comic_hot_value_text}}</span>
                </div>
              </div>
            </div>
            <div class="comic_irregular_bg"></div>
          </div>
        </div>
        <div class="last_time_chapter">
          <span class="looking_chapter">暂未阅读</span>
          <div class="button_header" fontsize="24">
            <button
              type="button"
              class="comic_button"
              style="width: 5.5rem; height: 2.25rem; font-size: 0.875rem;"
            >
              开始阅读
            </button>
          </div>
        </div>
        <div class="download_banner" v-if="isDownload">
          <div class="download_left">
            <div class="cancel_download_banner" @click="isDownload = false"></div>
            <div class="download_logo"></div>
            <div>
              <div class="banner_title">安装微博动漫APP</div>
              <p class="banner_desc">多一种陪伴</p>
            </div>
          </div>
          <div class="download_right">安装</div>
        </div>
        <div class="comic_intro">
          <div class="menu_nav">
            <div class="menu_detail" :class="isChange ? 'cur_menu' : ''" @click="isChange = true" >详情</div>
            <div class="menu_catelog" :class="!isChange ? 'cur_menu' : ''" @click="isChange = false">目录</div>
            <!---->
          </div>
        </div>
        <div class="comic_bottom_content" v-show="isChange">
          <div class="detail_wrap">
            <div class="details">
              <div class="bold">简介</div>
              <!-- 世间万物,皆为人所使。物尽其用,方能始终。被主人疼爱珍惜的物件,拥有灵性,便可以幻化成人。若是被主人抛弃丟置。便会流浪世间终无所归最终消逝成灰。
              青黛是一把唐代古伞,百年之前因因为战争,不得不被主人遗失,几百年间,青黛已临近日薄西山。为了延长自己的寿命,为了可以再见到想见的主人。青黛不停的帮助被遗弃的物件找到失主延续生命,也为了弥补自己心灵的空缺,在这段旅途中发生了一件件温馨感人的故事…… -->
              {{list.comic.description}}

            </div>
            <div class="author">
              <span class="bold">作者：</span>
              <div class="author_item">
                <div class="avatar component_avatar author_avatar">
                  <img
                    src="//img.manhua.weibo.com/static/b/vcomic-h5/dist/img/default_avatar.8bc0dfd7.png"
                  />
                  <!-- <img v-if="list.new_author[0].user_avatar.substr(0,4) === 'http'"
                    :src="list.new_author[0].user_avatar"
                  /> -->
                </div>
               <span class="author_name">{{list.new_author[0].sina_nickname}}</span>
              </div>
            </div>
          </div>
        </div>

           <div class="catalog_wrap" v-show="!isChange">
          <div>
            <ul class="catalog_list row_catalog_list">
              <li chapter_id="405772" class="catalog_ceil" v-for="item in list.chapter_list" :key="item.chapter_id">
                <div class="chapter_name lock">
                  <div class="name-box"><p class="name">{{item.chapter_name}}</p></div>
                  <span></span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="comment_box"  v-show="isChange">
          <div class="comment-area">
            <div class="comment-title">
              热门评论
            </div>
            <div class="comment-list">
              <div class="comment-item">
                <div class="avatar-outer">
                  <div class="avatar component_avatar">
                    <img
                      src="//img.manhua.weibo.com/static/b/vcomic-h5/dist/img/default_avatar.8bc0dfd7.png"
                    /><img
                      src="https://img.manhua.weibo.com/wbcomic/user/2020/202004/202020/1587369062KpwJhTrO.jpg"
                    />
                  </div>
                </div>
                <div class="comment-item-content">
                  <div class="comment-nickname comment-line content-line">
                    <div class="bold">_苍苍苍</div>
                    <div class="comment-time comment-line">2020-04-25</div>
                  </div>
                  <div class="comment-content comment-line content-line">
                    非常好看！墙裂推荐，画风好，剧情更好
                  </div>
                  <div class="reply-list-box">
                    <div class="reply-list">
                      <div class="reply-item-box comment-line content-line">
                        <span class="rep-user">苍苍苍:</span
                        ><span class="rep-content">小羽毛好可爱啊！</span>
                      </div>
                    </div>
                    <!---->
                  </div>
                </div>
              </div>
              <div class="comment-item">
                <div class="avatar-outer">
                  <div class="avatar component_avatar">
                    <img
                      src="//img.manhua.weibo.com/static/b/vcomic-h5/dist/img/default_avatar.8bc0dfd7.png"
                    /><img
                      src="https://img.manhua.weibo.com/wbcomic/user/2020/202004/202026/1587899586GyKaJoWa.jpg"
                    />
                  </div>
                </div>
                <div class="comment-item-content">
                  <div class="comment-nickname comment-line content-line">
                    <div class="bold">新华dictionary</div>
                    <div class="comment-time comment-line">2020-04-25</div>
                  </div>
                  <div class="comment-content comment-line content-line">
                    小剪子太可爱了
                  </div>
                  <!---->
                </div>
              </div>
              <div class="comment-item">
                <div class="avatar-outer">
                  <div class="avatar component_avatar">
                    <img
                      src="//img.manhua.weibo.com/static/b/vcomic-h5/dist/img/default_avatar.8bc0dfd7.png"
                    /><img
                      src="https://img.manhua.weibo.com/wbcomic/user/2020/202004/202005/1586075154gyCA7iRI.jpg"
                    />
                  </div>
                </div>
                <div class="comment-item-content">
                  <div class="comment-nickname comment-line content-line">
                    <div class="bold">三斤米粒</div>
                    <div class="comment-time comment-line">2020-04-30</div>
                  </div>
                  <div class="comment-content comment-line content-line">
                    这画风爱了爱了，这本书里的每个人物和事物都非常好看，这个画风更是漂亮，好喜欢这种的画风
                  </div>
                  <!---->
                </div>
              </div>
            </div>
            <div class="comment_more">
              <button class="moreComment">更多精彩评论</button>
            </div>
            <!---->
          </div>
          <!---->
        </div>
      </div>
      <!---->
    </div>

  </div>
</template>

<script>
import { getDetailsdata } from '@/api/dongman'
export default {
  name: 'detailspage',
  data () {
    return {
      list: [],
      isDownload: true,
      isChange: true
    }
  },
  methods: {
    getDetailsdata () {
      getDetailsdata(this.$route.query.comiCid).then(res => {
        console.log(res.data)
        this.list = res.data.data
      })
    }
  },
  created () {
    this.getDetailsdata()
  }
}
</script>

<style lang="scss" scoped>
.comic_content {
  overflow-y: scroll;
  // height: 44px;
}
.looking_chapter {
  font-size: 16px;
}
.back_btn {
  background-image: url("~@/assets/icon/goback.png");
  height: 44px;
}
.h_comic_info .mask {
  background: -webkit-gradient(
    linear,
    0 0,
    0 bottom,
    from(transparent),
    to(rgba(0, 0, 0, 0.6))
  );
}
.add_fav_btn {
  background-image: url("~@/assets/icon/add_fav.35784ea1.png");
}
.comic_share.share_btn {
  background-image: url("~@/assets/icon/share_gray.d8764234.png");
}
.label_red_pay {
  background-image: url("~@/assets/icon/pay.png");
}
.comic_info .comic_irregular_bg {
  background-image: url("~@/assets/icon/cover_bottom.50206627.png");
}
.comic .download_banner .cancel_download_banner {
  background-image: url("~@/assets/icon/delete.png");
}
.comic .download_banner .download_logo {
  background-image: url("~@/assets/icon/logo.937028ab.png");
}
.hot_icon::before {
  background-image: url("~@/assets/icon/hot.5adf85f9.png");
}
</style>
