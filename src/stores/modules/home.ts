/*
 * @Author: 秦弘林 1092750452@qq.com
 * @Date: 2022-09-30 11:05:49
 * @LastEditors: 秦弘林 1092750452@qq.com
 * @LastEditTime: 2022-09-30 15:39:47
 * @FilePath: \vue3-trip\src\stores\modules\home.ts
 */
import { defineStore } from 'pinia'
import api from '@/service'
import { hotSuggestItem, classifyType } from '@/type/home'
const useHomeStore = defineStore('home', {
  state: () => ({
    hotSuggests: [] as hotSuggestItem[],
    classifyOptions: [] as classifyType[],
    houseList: [] as any[],
    currentPage: 1,
  }),
  actions: {
    async GET_HOT_SUGGESTS() {
      /**
       * @method 获取热门推荐
       */
      this.hotSuggests = await api.home_api.getHotSuggests()
    },
    async GET_CLASSIFY_DATA() {
      /**
       * @method 分类数据
       */
      this.classifyOptions = await api.home_api.getCategories()
      return Promise.resolve()
    },
    async GET_HOUSE_DATA() {
      /**
       * @method 房屋列表
       */
      const houseList = await api.home_api.getHouseList({ page: this.currentPage })
      this.houseList.push(...houseList)
      this.currentPage++
      return Promise.resolve()
    },
  },
})
export default useHomeStore
