<!--
 * @Author: 秦弘林 1092750452@qq.com
 * @Date: 2022-09-19 23:09:35
 * @LastEditors: 秦弘林 1092750452@qq.com
 * @LastEditTime: 2022-09-30 09:46:15
 * @FilePath: \vue3-trip\src\App.vue
-->

<template>
  <div class="app">
    <!-- <router-view v-slot="props">
      <keep-alive include="home">
        <component :is="props.Component"></component>
      </keep-alive>
    </router-view>  -->
    <router-view></router-view>
    <tab-bar />
  </div>
</template>
<script setup lang="ts">
import TabBar from './components/content-tabBar/src/tabBar.vue'
</script>

<style scoped></style>
