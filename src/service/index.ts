/*
 * @Author: 秦弘林 1092750452@qq.com
 * @Date: 2022-09-19 23:22:10
 * @LastEditors: 秦弘林 1092750452@qq.com
 * @LastEditTime: 2022-09-29 17:47:03
 * @FilePath: \vue3-trip\src\service\index.ts
 */
/**
 * @method 自动化导入并注册所有接口
 */
const files = import.meta.globEager("./modules/*.ts");
const models: any = {};
for (const key in files) {
  try {
    const keys = {};
    for (const v in files[key]) {
      Object.assign(keys, { [v]: files[key][v] });
    }
    models[key.replace(/(\.\/modules\/|\.ts)/g, "")] = keys;
  } catch (error) {
    throw new Error(`${key}模块导出失败`);
  }
}
export default models;
