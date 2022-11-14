/*
 * @Author: 秦弘林 1092750452@qq.com
 * @Date: 2022-09-30 11:39:09
 * @LastEditors: 秦弘林 1092750452@qq.com
 * @LastEditTime: 2022-09-30 13:47:20
 * @FilePath: \vue3-trip\src\type\city.ts
 */
export type city = {
  cityId?: number
  cityName: string
  gangAoTai?: boolean
  hot?: boolean
  latitude?: string
  longitude?: string
  pinYin?: string
}
export type groupData = {
  group: string
  cities?: city[]
}
export interface cityAll {
  cityGroup?: groupData[]
  hotCities?: city[]
}
