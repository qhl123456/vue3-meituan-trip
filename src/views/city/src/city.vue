<!--
 * @Author: 秦弘林 1092750452@qq.com
 * @Date: 2022-09-29 17:54:26
 * @LastEditors: 秦弘林 1092750452@qq.com
 * @LastEditTime: 2022-09-30 14:10:43
 * @FilePath: \vue3-trip\src\views\city\src\city.vue
-->
<template>
  <div class="city top-page">
    <div class="top">
      <city-search />
      <van-tabs v-model:active="tabActive" color="#ff9854" line-height="3">
        <template v-for="(value, key) in allCities" :key="key">
          <van-tab :title="value['title']" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <template v-for="(value, key) in allCities">
        <CityGroup v-show="tabActive === key" :cityGroup="value['cities']" :hotCities="value['hotCities']" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import CityGroup from './components/city-group.vue'
import CitySearch from './components/city-search.vue'
import useCityStore from '@/stores/modules/city'

const tabActive = ref()

const cityStore = useCityStore()
cityStore.GET_ALL_CITY()
const { allCities } = storeToRefs(cityStore)
</script>

<style scoped lang="less">
.city {
  .top {
    position: relative;
    z-index: 9;
  }
  // 布局滚动
  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>
