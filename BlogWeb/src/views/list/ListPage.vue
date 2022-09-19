<template>
  <div>
    <a-checkable-tag v-model:checked="checked1" @change="handleChange"
      >Tag1</a-checkable-tag
    >
    <a-checkable-tag v-model:checked="checked2" @change="handleChange"
      >Tag2</a-checkable-tag
    >
    <a-checkable-tag v-model:checked="checked3" @change="handleChange"
      >Tag3</a-checkable-tag
    >
  </div>
  <a-list
    item-layout="vertical"
    size="large"
    :pagination="pagination"
    :data-source="listData"
  >
    <template #renderItem="{ item }">
      <a-list-item key="item.title">
        <a-list-item-meta :description="item.description">
          <template #title>
            <a @click="handleGoArticle(item)">{{ item.title }}</a>
          </template>
          <template #avatar><a-avatar :src="item.avatar" /></template>
        </a-list-item-meta>
        {{ item.content }}
      </a-list-item>
    </template>
  </a-list>
</template>
<script>
import { useRouter, useRoute } from "vue-router";
import { ref } from "vue"
const listData = [];

for (let i = 0; i < 23; i++) {
  listData.push({
    href: "https://www.antdv.com/",
    title: `ant design vue part ${i}`,
    avatar: "https://joeschmoe.io/api/v1/random",
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
  });
}

export default {
  setup() {
    const router = useRouter();
    const pagination = {
      onChange: (page) => {
        console.log(page);
      },
      pageSize: 4,
    };
    const handleGoArticle = (item) => {
      console.log("handleGoArticle");
      router.push({ path: "/article", query: { id: item } });
    };
    const handleChange = (checked) => {
      console.log(checked);
    };
    return {
      listData,
      pagination,
      handleGoArticle,
      handleChange,
      checked1: ref(false),
      checked2: ref(false),
      checked3: ref(false),
    };
  },
};
</script>