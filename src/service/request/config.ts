/*
 * @Author: 秦弘林 1092750452@qq.com
 * @Date: 2022-09-29 14:08:35
 * @LastEditors: 秦弘林 1092750452@qq.com
 * @LastEditTime: 2022-09-29 17:35:25
 * @FilePath: \vue3-trip\src\service\request\config.ts
 */

let BASE_URL: string;
const TIME_OUT: number = 10000;
if (process.env.NODE_ENV === "development") {
  BASE_URL = "http://123.207.32.32:1888/api";
} else if (process.env.NODE_ENV === "production") {
  BASE_URL = "http://coderwhy.org/prod";
} else {
  BASE_URL = "http://coderwhy.org/test";
}
export { BASE_URL, TIME_OUT };
