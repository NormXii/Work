<template>
  <div class="wrapper">
    <div class="left-half"></div>
    <div class="right-half">
      <div class="login-container">
        <div class="login-header">
          <b>您好</b>
          <br><br>
          <b>欢迎使用日程管理系统！</b>
        </div>
        <el-form :model="user" :rules="rules" ref="loginForm">
          <el-form-item prop="username" class="form-item">
            <el-input
                size="default"
                class="input"
                v-model="user.username"
                placeholder="请输入用户名">
              <template #prefix>
                <el-icon><User /></el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password" class="form-item">
            <el-input
                size="default"
                class="input"
                v-model="user.password"
                show-password
                placeholder="请输入密码">
              <template #prefix>
                <el-icon><Lock /></el-icon>
              </template>
            </el-input>
          </el-form-item>
          <div class="button-container">
            <el-button type="primary" size="small" autocomplete="off" class="el-button" @click="login">登录</el-button>
            <el-button type="warning" size="small" autocomplete="off" class="el-button" @click="$router.push('/register')">注册</el-button>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>


<script>
import { User, Lock } from '@element-plus/icons-vue'
import axios from 'axios'

export default {
  name: "LoginView",
  components: {
    User,
    Lock
  },
  data() {
    return {
      user: {},
      rules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    login() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          axios.post("/user/login", this.user).then(res => {
            if (res.data.success) {
              this.$message.success("登录成功");
              this.$router.push("/home")
            } else {
              this.$message.error("用户名或密码错误")
            }
          }).catch(err => {
            this.$message.error("请求失败，请稍后重试")
          });
        } else {
          this.$message.error("用户名或密码为空")
        }
      });
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
  margin-bottom: 0;
  text-align: center;
  font-size: 30px;
}
.input {
  height: 50px;
  margin-bottom: 15px;
}
.form-item{
  margin: 10px;
}
.button-container .el-button {
  flex: 1;
  margin: 0 50px;
  font-size: 18px;
  padding: 20px 30px;
}
</style>
