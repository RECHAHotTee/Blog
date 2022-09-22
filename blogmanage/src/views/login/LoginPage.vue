<template>
  <div class="layout" style="height: 100vh">
    <a-form class="login-form" :model="formState" name="basic" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }"
      autocomplete="off" @finish="onFinish" @finishFailed="onFinishFailed">
      <h1 style="text-align: center;">
        后台登录
      </h1>
      <a-form-item label="Username" name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]">
        <a-input v-model:value="formState.username" />
      </a-form-item>

      <a-form-item label="Password" name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]">
        <a-input-password v-model:value="formState.password" />
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" html-type="submit" @click="handleLogin()">登录</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script>
import { reactive } from 'vue';
import {post} from '../../utils/request'
export default {
  setup() {
    const formState = reactive({
      username: '',
      password: '',
      remember: true,
    });

    const onFinish = values => {
      console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };

    const handleLogin = async () => {
      try {
        const result = await post("/login",{
         
         
        });
        console.log(result);
      } catch (e) {
        console.log(e,"error");
      }
    };

    return {
      formState,
      onFinish,
      onFinishFailed,
      handleLogin
    };
  },

}
</script>

<style lang="less" scoped>
.layout {
  background: url("https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80");
  background-size: 100% 100%;
}

.login-form {
  background: #fff;
  border: 1px solid #fff;
  border-radius: 5px;
  width: 40vw;
  position: relative;
  margin: 0 auto;
  padding: 80px 80px 80px 80px;
  top: 50%;
  transform: translateY(-50%);
  opacity: 90%;
}
</style>