<template>
  <a-layout>
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu theme="dark" mode="inline" v-for="(item, index) in menuList" :key="index">
        <a-menu-item @click="handleMenuClick(item, $event)" class="a-menu-item">
          <user-outlined />
          <span>{{item.meta.title}}</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import { UserOutlined, VideoCameraOutlined, UploadOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue';
import { ref, reactive, onMounted } from 'vue';
import { useRouter, useRoute } from "vue-router";

export default {
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },

  setup() {
    const router = useRouter();
    const route = useRoute();
    // 获取路由菜单
    const menuList = router.getRoutes().filter((item) => item.meta.isMenu);
    const state = reactive({
      menuList,
    })
    // 菜单页点击跳转，更改菜单颜色
    const handleMenuClick = (param, e) => {
      let menus = document.querySelectorAll('.ant-menu-item-selected');
      menus.forEach(item => {
        item.classList.remove('ant-menu-item-selected');
      });
      e.currentTarget.classList.add('ant-menu-item-selected');
      state.selectedKey = param.path;
      router.push({ path: param.path });
    };
    onMounted(()=>{
      let menus = document.querySelectorAll('.a-menu-item');
      menus[0].classList.add('ant-menu-item-selected');
    });
    return {
      ...state,
      collapsed: ref(false),
      handleMenuClick,
    };
  },

}
</script>
<style lang="less" scoped>
#root,
body,
html {
  height: 100%;
}

.ant-layout-content {
  position: relative;
}

.ant-layout {
  display: flex;
  width: 100%;
  min-height: 100%;
}

#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>