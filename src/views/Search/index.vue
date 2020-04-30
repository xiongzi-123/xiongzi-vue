<template>
  <div class="page-search">
    <div class="top">
      <div class="top-ferame">
        <!-- <i class="iconfont icon-sousuo"></i> -->
        <input type="text" placeholder="请输入搜索关键字" />
      </div>
      <div class="right">取消</div>
    </div>
    <div class="search_footer">
      <div class="search_page" style="">
        <div class="hot_search">
          <div class="hot_serch_header">
            <div class="search_title">热门搜索</div>
            <div class="search_icon refresh"></div>
          </div>
          <ul class="hot_search_conent">
            <li class="search_label">
              <a href="/c/71974" class="">
                我拿到的恋爱剧本不对劲！？
              </a>
            </li>
            <li class="search_label">
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
            </li>
          </ul>
        </div>
      </div>
      <div class="hot_search hosity">
        <div class="hot_serch_header">
          <div class="search_title">搜索历史</div>
          <div class="search_icon clear"></div>
        </div>
        <ul class="hot_search_conent">
          <li class="search_label">
            <span class="search_label_text">发送到</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>
<style lang="scss" scoped>
.page-search {
  height: 100%;
  .top {
    height: 44px;
    margin: 16px 16px 0;
    .top-ferame {
      width: 258px;
      height: 44px;
      background: #ffffff;
      float: left;
      i {
        width: 44px;
        height: 44px;
      }
      input {
        width: 244px;
        height: 27px;
        padding: 4px 0 1px;
      }
    }
    .right {
      height: 44px;
      height: 24px;
      margin: 10px 0 10px 11px;
      color: #666;
      float: right;
      font-size: 14px;
    }
  }
}
</style>
