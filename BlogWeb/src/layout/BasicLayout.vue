<template>
  <a-layout class="layout">
    <a-layout-header class="layout_header">
      <a-menu theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }">
        <a-menu-item
          v-for="(item, index) in menuList"
          :key="index"
          @click="handleMenuClick(item)"
          :selectable="item.path == selectedKey"
        >
          {{ item.meta.title }}
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item v-for="item in menuList" :key="item.name">{{
          curNavTitle
        }}</a-breadcrumb-item>
      </a-breadcrumb>
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
        <router-view></router-view>
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>
<script>
import { watch, reactive, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  name: "BasicLayout",
  setup() {
    const router = useRouter();
    const route = useRoute();
    // 获取路由菜单
    const menuList = router.getRoutes().filter((item) => item.meta.isMenu);
    // 定义参数
    const state = reactive({
      breadcrumbList: [],
      menuList,
      selectedKey: "/home",
      curNavTitle: "home",
    });
    //监听路由变化，渲染面包屑导航
    const initBreadcrumbList = () => {
      const breadcrumbList = router
        .getRoutes()
        .filter((item) => item.meta.isBreadcrumb)
        .filter((item) => item.path == route.path);
      if (breadcrumbList[0].path !== "/home") {
        breadcrumbList.unshift(menuList.find((item) => item.path == "/home"));
      }
      // if (route.path !== "/search") {
      //   store.dispatch("setIsSearchBoxShow", false);
      // }
      state.selectedKey = route.path;
      state.breadcrumbList = breadcrumbList;
      state.curNavTitle = route.meta.title;
    };
    // 菜单页点击跳转
    const handleMenuClick = (param) => {
      state.selectedKey = param.path;
      router.push({ path: param.path });
    };

    onMounted(() => {
      initBreadcrumbList();
    });
    watch(
      () => route.path,
      () => {
        initBreadcrumbList();
        console.log("breadcrumbList", state.breadcrumbList);
      }
    );
    return {
      ...state,
      handleMenuClick,
    };
  },
};
</script>
<style lang="scss">
</style>