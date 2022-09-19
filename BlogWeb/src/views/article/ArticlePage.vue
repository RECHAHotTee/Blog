<template>
  <div class="page_content">
    <div class="title_wrap">
      <div class="title">题目</div>
    </div>
    <div class="desc_wrap">
      <div class="item">
        <div></div>
        <div>作者</div>
      </div>
      <div class="item">
        <div></div>
        <div>发表时间</div>
      </div>
    </div>
    <div class="content_wrap">
      <div class="content" v-html="article.value"></div>
    </div>
  </div>
</template>

<script>
import { marked } from "marked";
import { reactive } from "vue";

export default {
  name: "ArticlePage",
  //必须设置为异步加载，因为解析需要时间，注意加上async

  setup() {
    const article = reactive({ value: "" });

    const readFile = async function () {
      await import("../../assets/note/test.md").then((myModule) => {
        article.value = myModule.default;
      });
      return { article };
    };

    readFile();
    return {
      article,
    };
  },
};
</script>

<style lang="less">
.page_content {
  padding: 10px 2% 80px;
  .title_wrap {
    .title {
      font-size: 16px;
      color: #333333;
      font-weight: bold;
    }
  }
  .desc_wrap {
    margin-top: 10px;
    display: flex;
    align-items: center;
    font-size: 11px;
    color: #999999;
    .item {
      display: flex;
      margin-right: 20px;
      div {
        &:last-child {
          margin-left: 4px;
        }
      }
    }
  }
  .content_wrap {
    margin-top: 30px;
    .content {
      line-height: 26px;
      font-size: 14px;
      h1 {
        font-size: 18px;
        padding-bottom: 15px;
        font-weight: bold;
        color: #333333;
      }
      h2 {
        font-size: 16px;
        padding-bottom: 8px;
        border-bottom: 1px solid #ececec;
        font-weight: bold;
        color: #333333;
        margin-bottom: 8px;
      }
      h3 {
        font-size: 15px;
        padding-bottom: 6px;
        color: #333333;
      }
      :deep(pre) {
        background-color: #f8f8f8;
        border-radius: 3px;
        padding: 5px 10px;
        margin: 20px 3px;
        font-family: sans-serif;
        code {
          xmp {
            padding: 0;
            margin: 0;
            font-size: 13px;
            line-height: 20px;
          }
        }
      }
    }
  }
}
</style>