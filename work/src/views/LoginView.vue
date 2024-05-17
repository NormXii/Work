<template>
  <div class="wrapper">
    <div class="left-half"></div>
    <div class="right-half">
      <div class="login-container">
        <div class="login-header">
          <b>欢迎您！</b>
        </div>
        <el-input
            size="default"
            class="input"
            v-model="user.username"
            placeholder="Username">
          <template #prefix>
            <el-icon><User /></el-icon>
          </template>
        </el-input>
        <el-input
            size="default"
            class="input"
            v-model="user.password"
            show-password
            placeholder="Password">
          <template #prefix>
            <el-icon><Lock /></el-icon>
          </template>
        </el-input>
        <div class="button-container">
          <el-button type="primary" size="small" autocomplete="off" class="el-button">登录</el-button>
          <el-button type="warning" size="small" autocomplete="off" class="el-button">注册</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { User, Lock } from '@element-plus/icons-vue'

export default {
  name: "LoginView",
  components: {
    User,
    Lock
  },
  data() {
    return {
      user: {}
    }
  }
}
</script>

<style>
.wrapper {
  display: flex;
  height: 100vh;
  background-image: url('@/assets/background.jpg');
  background-size: cover;
  background-position: center;
  overflow: hidden;
}
.left-half {
  flex: 1;
}
.right-half {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-container {
  background-color: #fff;
  width: 400px;
  height: 350px;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.login-header {
  margin-bottom: 20px;
  text-align: center;
  font-size: 30px;
}
.input {
  height: 47px;
  margin-bottom: 18px;
}
.button-container .el-button {
  flex: 1;
  margin: 0 50px;
  font-size: 18px;
  padding: 20px 30px;
}
</style>
