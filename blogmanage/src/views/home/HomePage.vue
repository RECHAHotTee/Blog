<template>
  <div>
    <div style="background-color: #ececec; padding: 20px">
      <a-row :gutter="12">
        <a-col :span="8">
          <a-card :bordered="false">
            <p>今年已经过去了</p>
            <a-progress :percent="30" />
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card :bordered="false">
            <p>网站已经被访问了N次</p>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card :bordered="false">
            <p>已经发表文章N篇</p>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>