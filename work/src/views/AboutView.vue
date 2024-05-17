<template>
  <div class="container">
    <el-menu :default-active="activeIndex" mode="horizontal" @select="handleMenuSelect">
      <el-menu-item index="home">首页</el-menu-item>
      <el-submenu index="about">
        <template #title>关于我们</template>
        <el-menu-item index="about/company" @click="toggleSubMenu('company')">公司简介</el-menu-item>
        <el-menu-item index="about/team" v-show="subMenuVisible.company">团队介绍</el-menu-item>
      </el-submenu>
      <el-menu-item index="services">我们的服务</el-menu-item>
      <el-menu-item index="contact">联系我们</el-menu-item>
    </el-menu>

    <div v-if="selectedMenu">
      <h2>{{ selectedMenu }}</h2>
      <p>这里是 {{ selectedMenu }} 的内容</p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'App',
  setup() {
    const activeIndex = ref('home');
    const selectedMenu = ref('');
    const subMenuVisible = {
      company: false,
    };

    const handleMenuSelect = (index) => {
      activeIndex.value = index;
      selectedMenu.value = index;
    };

    const toggleSubMenu = (menu) => {
      subMenuVisible[menu] = !subMenuVisible[menu];
    };

    return {
      activeIndex,
      selectedMenu,
      subMenuVisible,
      handleMenuSelect,
      toggleSubMenu,
    };
  },
};
</script>

<style>
.container {
  margin: 20px;
}
</style>
