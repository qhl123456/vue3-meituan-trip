/*
 * @Author: 秦弘林 1092750452@qq.com
 * @Date: 2022-09-29 15:47:03
 * @LastEditors: 秦弘林 1092750452@qq.com
 * @LastEditTime: 2022-09-30 11:40:39
 * @FilePath: \vue3-trip\src\service\modules\home_api.ts
 */
import Fetch from '../request'
enum homeApi {
  hotSuggests = '/home/hotSuggests',
  classify = '/home/categories',
  houseList = '/home/houselist',
}
import { hotSuggestItem, classifyType } from '@/type/home'
export const getHotSuggests = (params?: any): Promise<hotSuggestItem[]> => Fetch.GET({ url: homeApi.hotSuggests, params })

export const getCategories = (params?: any): Promise<classifyType[]> => Fetch.GET({ url: homeApi.classify, params })

export const getHouseList = (params?: any): Promise<any[]> => Fetch.GET({ url: homeApi.houseList, params })
