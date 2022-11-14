/*
 * @Author: 秦弘林 1092750452@qq.com
 * @Date: 2022-09-29 15:47:03
 * @LastEditors: 秦弘林 1092750452@qq.com
 * @LastEditTime: 2022-09-30 11:40:39
 * @FilePath: \vue3-trip\src\service\modules\test_api.ts
 */
import Fetch from '../request'
enum cityApi {
  CityAll = '/city/all',
}
import type { cityAll } from '@/type/city'
export const getCityAll = (params?: any): Promise<cityAll> => Fetch.GET({ url: cityApi.CityAll, params })
