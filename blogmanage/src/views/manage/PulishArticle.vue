<template>
  <div  id="publish">
    <div class="publish-content">
      <a-input-group compact>
        <a-input v-model:value="value19" placeholder="请输入文章标题" style="width: calc(100% - 100px)" class="margin20" />
        <a-button type="primary" @click="showModal" class="margin20">Submit</a-button>
      </a-input-group>
      <div class="md-editor">
        <v-md-editor v-model="text" height="100%"></v-md-editor>
      </div>
    </div>
    <div>
      <a-modal v-model:visible="visible" title="提交信息" @ok="handleOk">
        <a-input v-model:value="value1" show-count :maxlength="8" addonBefore="分类" class="margin20" />
        <a-input v-model:value="value1" show-count :maxlength="10" addonBefore="作者" class="margin20" />
        <a-textarea v-model:value="value2" show-count :maxlength="100" addonBefore="描述" placeholder="请输入对文章的描述" />
      </a-modal>
    </div>
  </div>
</template>

<script>
import { ref } from "vue"
export default {
  name: 'PulishArticle',
  setup() {
    const visible = ref(false);
    const showModal = () => {
      visible.value = true;
    };

    const handleOk = e => {
      console.log(e);
      visible.value = false;
    };
    return {
      text: ref(''),
      value19: '',
      visible,
      showModal,
      handleOk,
    }
  }
}
</script>

<style lang="less" scoped>

.margin20 {
  margin: 20px 0 20px 0;
}
.publish-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 2%;
  display: flex;
  flex-direction: column;
}
.md-editor{
  height: 100%-10px;
}

</style>