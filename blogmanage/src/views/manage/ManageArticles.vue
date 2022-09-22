<template>
  <a-list item-layout="horizontal" :pagination="pagination" :data-source="dataList">
    <template #renderItem="{ item }">
      <a-list-item key="item.title">
        <template #actions>
          <a key="list-loadmore-edit">edit</a>
          <a key="list-loadmore-more">more</a>
        </template>
        <a-list-item-meta :description="item.description">
          <template #title>
            <a :href="item.href">{{ item.title }}</a>
          </template>
        </a-list-item-meta>
        {{ item.content }}
      </a-list-item>
    </template>
  </a-list>
</template>
<script>
import { onMounted, ref, reactive } from 'vue';

export default {
  name: "ManageArticles",
  setup() {
    const state = reactive({
      dataList: [{
        title: "这是文章的标题",
        description: "这是文章的一段描述",
      }, {
        title: "这是文章的标题",
        description: "这是文章的一段描述",
      }, {
        title: "这是文章的标题",
        description: "这是文章的一段描述",
      }, {
        title: "这是文章的标题",
        description: "这是文章的一段描述",
      }, {
        title: "这是文章的标题",
        description: "这是文章的一段描述",
      }, {
        title: "这是文章的标题",
        description: "这是文章的一段描述",
      }, {
        title: "这是文章的标题",
        description: "这是文章的一段描述",
      }, {
        title: "这是文章的标题",
        description: "这是文章的一段描述",
      }],
    });
    const pagination = {
      onChange: page => {
        console.log(page);
      },
      pageSize: 6,
    };
    return {
      ...state,
      pagination
    }
  },
}
</script>
<style scoped>

</style>