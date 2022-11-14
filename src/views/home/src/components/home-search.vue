<!--
 * @Author: 秦弘林 1092750452@qq.com
 * @Date: 2022-09-30 15:26:28
 * @LastEditors: 秦弘林 1092750452@qq.com
 * @LastEditTime: 2022-09-30 16:02:51
 * @FilePath: \vue3-trip\src\views\home\src\components\home-search.vue
-->
<template>
  <div class="search-box">
    <!-- 位置信息 -->
    <div class="location bottom-gray-line">
      <div class="city" @click="router.push('/city')">{{ currentCity.cityName }}</div>
      <div class="position" @click="handleChooseLocation">
        <span class="text">我的位置</span>
        <van-icon name="location-o" :style="{ paddingTop: '4px' }" />
      </div>
    </div>
    <!-- 日期选择 -->
    <div class="section date-range bottom-gray-line" @click="showDate = true">
      <div class="start">
        <div class="date">
          <div class="tip">入住</div>
          <div class="time">{{ startDate }}</div>
        </div>
      </div>
      <div class="stay">共{{ diffTime }}晚</div>
      <div class="end">
        <div class="date">
          <div class="tip">离开</div>
          <div class="time">{{ endDate }}</div>
        </div>
      </div>
    </div>
    <van-calendar type="range" color="#1989fa" :show-confirm="false" v-model:show="showDate" @confirm="onConfirm" :round="false" />

    <!-- 价格/人数选择 -->
    <div class="section price-counter bottom-gray-line">
      <div class="start">价格不限</div>
      <div class="end">人数不限</div>
    </div>
    <!-- 关键字 -->
    <div class="section keyword bottom-gray-line">关键字/位置/民宿名</div>
    <!-- 热门建议 -->
    <div class="section hot-suggests">
      <template v-for="(item, index) in hotSuggests" :key="index">
        <div class="item" :style="{ color: item.tagText.color, background: item.tagText.background.color }">
          {{ item.tagText.text }}
        </div>
      </template>
    </div>
    <!-- 搜索按钮 -->
    <div class="section search-btn">
      <div class="btn" @click="handleSearch">开始搜索</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import useCityStore from '@/stores/modules/city'
import useHomeStore from '@/stores/modules/home'
import useCommonStore from '@/stores/modules/common'
import dayjs from 'dayjs'
import { useFormatTime } from '@/utils'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
const router = useRouter()
const startDate = ref()
const endDate = ref()
const showDate = ref<boolean>(false)
const diffTime = ref<number>(1)

const { currentCity } = storeToRefs(useCityStore())
const { hotSuggests } = storeToRefs(useHomeStore())
const commonStore = useCommonStore()
onMounted(() => {
  startDate.value = useFormatTime(dayjs(), 'add')
  endDate.value = useFormatTime(dayjs().add(1, 'day'), 'add')
  diffTime.value = dayjs(endDate.value).diff(dayjs(startDate.value), 'day')
})

const handleChooseLocation = () => {
  /**
   * @method 选择我的位置
   */
  navigator.geolocation.getCurrentPosition(
    (res: any) => {
      console.log('获取位置信息成功', res)
    },
    (err: any) => {
      console.log('获取位置信息失败', err)
    },
    {
      enableHighAccuracy: true,
      timeout: 20000,
      maximumAge: 0,
    }
  )
}

const onConfirm = (e: string[]) => {
  /**
   * @method 日期选择
   */
  startDate.value = useFormatTime(e[0], 'add')
  endDate.value = useFormatTime(e[1], 'add')
  diffTime.value = dayjs(endDate.value).diff(dayjs(startDate.value), 'day')
  commonStore.SET_DATA('start', 'day', e[0])
  commonStore.SET_DATA('end', 'day', e[1])
  showDate.value = false
}

const handleSearch = () => {
  /**
   * @method 搜索
   */
  router.push({
    path: '/search',
    query: {
      startDate: startDate.value,
      endDate: endDate.value,
      currentCity: currentCity.value.cityName,
    },
  })
}
</script>

<style scoped lang="less">
.search-box {
  --van-calendar-popup-height: 100%;
}

.location {
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 20px;

  .city {
    flex: 1;
    color: #333;
    font-size: 15px;
  }

  .position {
    width: 74px;
    display: flex;
    align-items: center;

    .text {
      position: relative;
      top: 2px;
      color: #666;
      font-size: 12px;
    }

    img {
      margin-left: 5px;
      width: 18px;
      height: 18px;
    }
  }
}

.section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 20px;
  color: #999;
  height: 44px;

  .start {
    flex: 1;
    display: flex;
    height: 44px;
    align-items: center;
  }

  .end {
    min-width: 30%;
    padding-left: 20px;
  }

  .date {
    display: flex;
    flex-direction: column;

    .tip {
      font-size: 12px;
      color: #999;
    }

    .time {
      margin-top: 3px;
      color: #333;
      font-size: 15px;
      font-weight: 500;
    }
  }
}

.date-range {
  height: 44px;
  .stay {
    flex: 1;
    text-align: center;
    font-size: 12px;
    color: #666;
  }
}

.price-counter {
  .start {
    border-right: 1px solid var(--line-color);
  }
}

.hot-suggests {
  margin: 10px 0;
  height: auto;

  .item {
    padding: 4px 8px;
    margin: 4px;
    border-radius: 14px;
    font-size: 12px;
    line-height: 1;
  }
}

.search-btn {
  .btn {
    width: 342px;
    height: 38px;
    max-height: 50px;
    font-weight: 500;
    font-size: 18px;
    line-height: 38px;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    background-image: var(--theme-linear-gradient);
  }
}
</style>
