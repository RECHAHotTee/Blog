<template>
  <a-layout-header class="layout_header">
      <a-menu
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">热茶 RECHA</a-menu-item>
        <a-menu-item key="2">首页</a-menu-item>
        <a-menu-item key="3">文章列表</a-menu-item>
        <a-menu-item key="4">时间轴</a-menu-item>
      </a-menu>
    </a-layout-header>
</template>

<script>
  export default {
    name: 'Header',
    setup() {
      return {}
    }
  }
</script>