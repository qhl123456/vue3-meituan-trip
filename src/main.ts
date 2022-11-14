/*
 * @Author: 秦弘林 1092750452@qq.com
 * @Date: 2022-09-19 23:09:35
 * @LastEditors: 秦弘林 1092750452@qq.com
 * @LastEditTime: 2022-09-30 14:04:15
 * @FilePath: \vue3-trip\src\main.ts
 */
import { createApp } from 'vue'

import 'normalize.css'
import 'vant/lib/index.css'
import '@/assets/css/index.css'
import App from './App.vue'
import router from './router'

import pinia from '@/stores'
import api from '@/service'

const app = createApp(App)
app.config.globalProperties.$api = api

app.use(pinia).use(router).mount('#app')
