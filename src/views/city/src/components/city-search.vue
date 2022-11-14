<!--
 * @Author: 秦弘林 1092750452@qq.com
 * @Date: 2022-09-30 10:22:44
 * @LastEditors: 秦弘林 1092750452@qq.com
 * @LastEditTime: 2022-09-30 10:24:07
 * @FilePath: \vue3-trip\src\views\city\src\components\city-search.vue
-->
<template>
  <div>
    <van-search v-model="searchValue" placeholder="城市/区域/位置" shape="round" show-action @cancel="handleCancelClick" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const searchValue = ref<string>('')
const handleCancelClick = () => {
  /**
   * @method 取消搜索
   */
  router.back()
}
</script>

<style scoped lang="less"></style>
