/*
 * @Author: 秦弘林 1092750452@qq.com
 * @Date: 2022-09-30 11:05:49
 * @LastEditors: 秦弘林 1092750452@qq.com
 * @LastEditTime: 2022-09-30 15:39:47
 * @FilePath: \vue3-trip\src\stores\modules\common.ts
 */
import { defineStore } from 'pinia'
import { useFormatTime } from '@/utils'
import dayjs from 'dayjs'
import { timeType } from '@/utils'
const useCommonStore = defineStore('common', {
  state: () => ({
    startDate: useFormatTime(dayjs(), 'add', 'yearS'),
    endDate: useFormatTime(dayjs().add(1, 'day'), 'add', 'yearS'),
    diffDate: 0,
    isShowLoading: false,
  }),
  actions: {
    SET_DATA(type: 'start' | 'end', timeType: 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second', date?: string) {
      /**
       * @method 设置全局时间，开始时间，结束时间,相差时间
       * @params type 开始时间 / 结束时间
       * @params 年月日时分秒 具体utils 下有枚举值
       */
      switch (type) {
        case 'start':
          this.startDate = useFormatTime(date ? date : dayjs(), 'add', timeType)
          break
        case 'end':
          this.endDate = useFormatTime(date ? date : dayjs(), 'add', timeType)
          break
        default:
          break
      }
      this.diffDate = dayjs(this.endDate).diff(dayjs(this.startDate), 'day')
      return Promise.resolve()
    },
    SET_LOADING(flag: boolean) {
      /**
       * @method 设置loading显示/隐藏
       */
      this.isShowLoading = flag
      return Promise.resolve()
    },
    SET_DATE_TYPE(type: timeType) {
      return
    },
  },
})
export default useCommonStore
