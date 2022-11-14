/*
 * @Author: 秦弘林 1092750452@qq.com
 * @Date: 2022-09-30 15:51:02
 * @LastEditors: 秦弘林 1092750452@qq.com
 * @LastEditTime: 2022-09-30 15:52:18
 * @FilePath: \vue3-trip\globalProperties.d.ts
 */
import getImageUrl from '@/hooks/useImageUrl'

declare module 'vue' {
  interface ComponentCustomProperties {
    $getImageUrl: typeof getImageUrl
  }
}

export {}
