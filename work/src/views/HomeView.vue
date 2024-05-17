<template>
  <div>
    <el-container>
      <!-- 侧边栏 -->
      <el-aside>
        <div style="height: 60px; line-height: 60px; background-color: #8c939d; color: red; display: flex; align-items: center; justify-content: center;">
          Logo
        </div>
        
        <template>
  <el-menu :default-active="activeIndex" class="el-menu-vertical-demo" @select="handleSelect">
    <el-menu-item index="1">
      <i class="el-icon-house"></i>
      <span>系统首页</span>
    </el-menu-item>
    <el-submenu index="2">
      <template v-slot:title>
        <i class="el-icon-menu"></i>
        <span>信息管理</span>
      </template>
      <el-menu-item index="2-1">用户信息</el-menu-item>
      <el-menu-item index="2-2">角色信息</el-menu-item>
    </el-submenu>
    <el-submenu index="3">
      <template v-slot:title>
        <i class="el-icon-setting"></i>
        <span>设置</span>
      </template>
      <el-menu-item index="3-1">个人设置</el-menu-item>
      <el-menu-item index="3-2">系统设置</el-menu-item>
    </el-submenu>
  </el-menu>
</template>



      </el-aside>
      <el-container>
        <!-- 头部区域 -->
              
        <el-header>
          头部区域

       </el-header>


        <!-- 主体区域 -->

        <el-main>

          主体区域

        </el-main>
       </el-container>

    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src


export default {
  data() {
    return {
      activeIndex: '1',
    }
  },

}
</script>


<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
