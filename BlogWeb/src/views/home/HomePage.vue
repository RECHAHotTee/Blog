<template>
  <a-carousel autoplay class="carousel">
    <div v-for="item in carouselData" :key="item.id" class="carousel-item">
      <div @click="handleMenuClick(item.articleId)">
        <img :src="item.imgUrl" :alt="item.title" />
      </div>
    </div>
  </a-carousel>
</template>

<script>
import { reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
export default {
  name: "HomePage",
  setup() {
    const router = useRouter();
    const state = reactive({
      carouselData: [],
    });
    state.carouselData.push(
      {
        imgUrl:
          "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wwuo?ver=7f01",
        id: 0,
        articleId: 0,
        title: "title",
      },
      {
        imgUrl:
          "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wwuo?ver=7f01",
        id: 1,
        articleId: 0,
      },
      {
        imgUrl:
          "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wwuo?ver=7f01",
        id: 2,
        articleId: 0,
      },
      {
        imgUrl:
          "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wwuo?ver=7f01",
        id: 3,
        articleId: 0,
      },
      {
        imgUrl:
          "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wwuo?ver=7f01",
        id: 4,
        articleId: 0,
      }
    );
    // 轮播图点击跳转
    const handleMenuClick = (param) => {
      router.push({ path: "/article", query: { id: param } });
    };
    return { ...state, handleMenuClick };
  },
};
</script>

<style scoped>
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 360px;
  line-height: 160px;
  overflow: hidden;
}
</style>