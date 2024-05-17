<template>
  <div>
    <el-container>
      <!-- 侧边栏 -->
      <el-aside>
        <div style="height: 60px; line-height: 60px; background-color: #8c939d; color: red; display: flex; align-items: center; justify-content: center;">
          Logo
        </div>
        
        <el-menu>
  <el-menu-item index="1">
    <i class="el-icon-home"></i>
    <span>系统首页</span>
  </el-menu-item>
  <el-submenu index="2">
    <template>
      <i class="el-icon-menu"></i>
      <span>信息管理</span>
    </template>
    <el-menu-item>用户信息</el-menu-item>
  </el-submenu>
</el-menu>


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

export default defineComponent({
  name: 'HomeView',
  
});
</script>

