/*
 * @Author: 秦弘林 1092750452@qq.com
 * @Date: 2022-09-30 14:49:19
 * @LastEditors: 秦弘林 1092750452@qq.com
 * @LastEditTime: 2022-09-30 14:59:20
 * @FilePath: \vue3-trip\src\utils\index.ts
 */
import dayjs, { Dayjs } from 'dayjs'

export enum timeType {
  year = 'YYYY',
  month = 'YYYY-MM',
  day = 'YYYY-MM-DD',
  hour = 'HH',
  minute = 'HH:mm',
  second = 'HH:mm:ss',
  yearH = 'YYYY-MM-DD HH',
  yearM = 'YYYY-MM-DD HH:mm',
  yearS = 'YYYY-MM-DD HH:mm:ss',
}
export const useImageUrl = (folder: string = '', name: string, type: string = 'png'): string => {
  /**
   * @method vite动态引入图片
   */
  return new URL(`../assets/images/${folder}/${name}.${type}`, import.meta.url).href
}

export const useUuid = (len: number, radix: number): string => {
  /**
   * @method 生成唯一uuid,用于后端返回数据没有主键id的情况下需要生成唯一id
   * @param {len} 长度
   * @param {radix} 基数
   * @desc uuid(8,10)
   */

  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
  const uuid = []
  let i: number
  radix = radix || chars.length
  if (len) {
    // Compact form
    for (i = 0; i < len; i++) uuid[i] = chars[0 | (Math.random() * radix)]
  } else {
    let r
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
    uuid[14] = '4'
    for (i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | (Math.random() * 16)
        uuid[i] = chars[i == 19 ? (r & 0x3) | 0x8 : r]
      }
    }
  }
  return uuid.join('')
}

export const useFormatTime = (time: Dayjs | string, mode: 'add' | 'edit', type: 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second' | 'yearH' | 'yearM' | 'yearS' = 'yearS'): string | Dayjs => {
  /**
   * @method dayjs时间格式化
   * @param {time} 需要格式化的时间
   * @param {mode} 需要格式化的方式
   * @returns {string} 格式化后的时间
   */
  if (mode === 'add') {
    time = time ? dayjs(time).format(timeType[type]) : ''
  } else if (mode === 'edit') {
    time = time ? dayjs(time, timeType[type]) : ''
  }
  return time
}
