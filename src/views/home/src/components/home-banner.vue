<template>
  <div class="banner">
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in images" :key="image">
        <img :src="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useImageUrl from '@/hooks/useImageUrl'
const images = ref([useImageUrl('home', 'banner1', 'png'), useImageUrl('home', 'banner2', 'png'), useImageUrl('home', 'banner3', 'png')])
</script>
<style scoped lang="less">
.banner {
  img {
    width: 100%;
  }
}
</style>
