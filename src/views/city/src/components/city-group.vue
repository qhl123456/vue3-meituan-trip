<!--
 * @Author: 秦弘林 1092750452@qq.com
 * @Date: 2022-09-30 10:22:52
 * @LastEditors: 秦弘林 1092750452@qq.com
 * @LastEditTime: 2022-09-30 14:10:34
 * @FilePath: \vue3-trip\src\views\city\src\components\city-group.vue
-->
<template>
  <div class="city-group">
    <van-index-bar :sticky="false" :index-list="cityList">
      <van-index-anchor index="热门" />
      <div class="list">
        <template v-for="(city, index) in hotCities">
          <div class="city" @click="handleChooseCity(city)">{{ city.cityName }}</div>
        </template>
      </div>

      <template v-for="(group, index) in cityGroup" :key="index">
        <van-index-anchor :index="group.group" />
        <template v-for="(city, idx) in group.cities" :key="idx">
          <van-cell @click="handleChooseCity(city)" :title="city.cityName" />
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, computed, ComputedRef } from 'vue'

import type { groupData, city } from '@/type/city'
import useCityStore from '@/stores/modules/city'
import { useRouter } from 'vue-router'
const router = useRouter()
const cityStore = useCityStore()
interface propsType {
  cityGroup: groupData[]
  hotCities: city[]
}
const _props = withDefaults(defineProps<propsType>(), {
  cityGroup: () => [],
  hotCities: () => [],
})

const cityList: ComputedRef<string[]> = computed(() => {
  const list = _props.cityGroup.map((v: groupData) => v.group)
  list.unshift('#')
  return list
})

const handleChooseCity = (city: city) => {
  /***
   * @method 选择城市
   */
  cityStore.SET_CURRENT_CITY(city)
  router.push('/home')
}
</script>

<style scoped lang="less">
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px;
  padding-right: 25px;
  .city {
    width: 70px;
    height: 28px;
    border-radius: 14px;
    font-size: 12px;
    color: #000;
    text-align: center;
    line-height: 28px;
    background-color: #fff4ec;
    margin: 6px 0;
  }
}
</style>
