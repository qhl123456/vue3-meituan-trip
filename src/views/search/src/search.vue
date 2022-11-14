<template>
  <div>开始时间：{{ route.query.startDate }} 结束时间：{{ route.query.endDate }} 当前城市：{{ route.query.currentCity }}</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
<style scoped lang="less"></style>
