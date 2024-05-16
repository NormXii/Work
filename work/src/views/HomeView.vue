<template>
  <div class="home">
    <el-button>这是elementui的测试按钮</el-button>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="欢迎您，Vue.js App！"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
  },
});
</script>
