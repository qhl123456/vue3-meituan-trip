<template>
  <div class="classify">
    <template v-for="item in classifyOptions" :key="item.id">
      <div class="item">
        <img :src="item.pictureUrl" alt="" />
        <div class="text">{{ item.title }}</div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import useHomeStore from '@/stores/modules/home'
import { storeToRefs } from 'pinia'
const { classifyOptions } = storeToRefs(useHomeStore())
</script>
<style scoped lang="less">
.classify {
  display: flex;
  overflow-x: auto;
  height: 80px;
  padding: 0 10px;
  margin-top: 8px;
  &::-webkit-scrollbar {
    display: none;
  }
  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70px;
    flex-shrink: 0;
    text-align: center;
    img {
      width: 32px;
      height: 32px;
    }
  }
  .text {
    font-size: 12px;
    margin-top: 5px;
  }
}
</style>
