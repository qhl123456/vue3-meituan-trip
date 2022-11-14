<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <!-- 平铺 -->
    <div class="list">
      <template v-for="item in houseList" :key="item.data.houseId">
        <HouseItemCover v-if="item.discoveryContentType === 9" :item-data="item.data"></HouseItemCover>
        <HouseItemHalf v-else-if="item.discoveryContentType === 3" :item-data="item.data"></HouseItemHalf>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'

import HouseItemCover from '@/components/content-houseItem/houseItemCover.vue'
import HouseItemHalf from '@/components/content-houseItem/houseItemHalf.vue'

import useHomeStore from '@/stores/modules/home'

const { houseList } = storeToRefs(useHomeStore())
</script>
<style scoped lang="less">
.content {
  padding: 10px 8px;

  .title {
    font-size: 22px;
    padding: 10px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
