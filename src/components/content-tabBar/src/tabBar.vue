<template>
  <div>
    <van-tabbar v-model="currentTabbar" route>
      <template v-for="item in tabbarData">
        <van-tabbar-item replace :to="item.path" :icon="item.icon">
          {{ item.text }}
          <template #icon="props">
            <van-icon :name="props.active ? item.activeIcon : item.icon" />
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { tabbarData } from './config'
const currentTabbar = ref<number>(0)
</script>
<style scoped lang="less"></style>
