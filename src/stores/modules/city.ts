/*
 * @Author: 秦弘林 1092750452@qq.com
 * @Date: 2022-09-30 11:05:49
 * @LastEditors: 秦弘林 1092750452@qq.com
 * @LastEditTime: 2022-09-30 15:39:47
 * @FilePath: \vue3-trip\src\stores\modules\city.ts
 */
import { defineStore } from 'pinia'
import api from '@/service'
import type { city } from '@/type/city'
const useCityStore = defineStore('city', {
  state: () => ({
    allCities: {},
    currentCity: {
      cityName: '深圳',
    },
  }),
  actions: {
    async GET_ALL_CITY() {
      /**
       * @method 获取城市信息
       */
      this.allCities = await api.city_api.getCityAll()
      return Promise.resolve()
    },
    SET_CURRENT_CITY(city: city) {
      /**
       * @method 设置当前城市
       */
      this.currentCity = city
      return Promise.resolve()
    },
  },
})
export default useCityStore
