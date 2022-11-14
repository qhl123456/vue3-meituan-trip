/*
 * @Author: 秦弘林 1092750452@qq.com
 * @Date: 2022-09-30 15:00:37
 * @LastEditors: 秦弘林 1092750452@qq.com
 * @LastEditTime: 2022-09-30 15:00:48
 * @FilePath: \vue3-trip\src\hooks\useImageUrl.ts
 */
const useImageUrl = (folder: string = '', name: string, type: string = 'png'): string => {
  /**
   * @method vite动态引入图片
   * @params folder 文件夹名称 name 文件名称 type 文件格式 一般为png/jpg/webp/gif等...
   * @returns 图片
   */
  return new URL(`../assets/images/${folder}/${name}.${type}`, import.meta.url).href
}
export default useImageUrl
