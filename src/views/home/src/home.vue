<!--
 * @Author: 秦弘林 1092750452@qq.com
 * @Date: 2022-09-30 09:38:18
 * @LastEditors: 秦弘林 1092750452@qq.com
 * @LastEditTime: 2022-09-30 15:46:00
 * @FilePath: \vue3-trip\src\views\home\src\home.vue
-->
<template>
  <div class="home" ref="homeRef">
    <home-nav-bar />
    <home-banner />
    <home-search />
    <home-classify />
    <home-house-list />
    <div class="search-bar" v-show="isShowSearchBar">
      <search-bar />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import useHomeStore from '@/stores/modules/home'
import useScroll from '@/hooks/useScroll'
import HomeNavBar from './components/home-nav-bar.vue'
import HomeSearch from './components/home-search.vue'
import HomeBanner from './components/home-banner.vue'
import HomeClassify from './components/home-classify.vue'
import HomeHouseList from './components/home-house-list.vue'
import searchBar from '@/components/content-search'
const homeRef = ref<HTMLElement>()

const homeStore = useHomeStore()
const { isReachBottom, scrollTop } = useScroll()

homeStore.GET_HOT_SUGGESTS()
homeStore.GET_CLASSIFY_DATA()

const getHouseList = () => {
  /**
   * @method 房屋列表
   */
  homeStore.GET_HOUSE_DATA()
  return Promise.resolve()
}
getHouseList()
watch(isReachBottom, async (newVal) => {
  if (newVal) {
    await getHouseList()
    isReachBottom.value = false
  }
})
const isShowSearchBar = computed(() => scrollTop.value >= 350)
</script>

<style scoped lang="less">
.home {
  // height: 100vh;
  // overflow-y: auto;
  // box-sizing: border-box;
  padding-bottom: 60px;
  &::-webkit-scrollbar {
    display: none;
  }
}
.search-bar {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  padding: 16px 16px 10px;
  background-color: #fff;
}
</style>
