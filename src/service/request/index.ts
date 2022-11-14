/*
 * @Author: 秦弘林 1092750452@qq.com
 * @Date: 2022-09-29 14:08:27
 * @LastEditors: 秦弘林 1092750452@qq.com
 * @LastEditTime: 2022-09-30 10:06:53
 * @FilePath: \vue3-trip\src\service\request\index.ts
 */
import axios from 'axios'
import qs from 'qs'
import { BASE_URL, TIME_OUT } from './config'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

import { Toast } from 'vant'
const axiosConfig = {
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  Headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
}

const handleError = (err: any) => {
  const {
    data: { errmsg },
  } = err.response
  Toast.clear()
  Toast(errmsg ? errmsg : '请求失败，请重新刷新页面')
  return Promise.reject(err)
}

class Request {
  instance: AxiosInstance
  constructor() {
    this.instance = axios.create(axiosConfig)
    this.initInstance()
  }
  getCurrentInstance(): AxiosInstance {
    return this.instance
  }
  initInstance() {
    this.instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        const _token = window.localStorage.getItem('ACCESS_TOKEN')
        if (_token) {
          config.headers.common['Authorization'] = _token
        }
        if (config.method === 'get') {
          config.url += qs.stringify(config.data ?? '')
        }
        return config
      },
      (err: any) => handleError(err)
    )
    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        if (res.data.errcode) {
          Toast(res.data.errmsg ? res.data.errmsg : '请求失败，请重新刷新页面')
          if (res.data.errcode === 403 || res.data.errcode === 505) {
            console.log('token过期')
          }
          return Promise.reject(res.data)
        }
        return Promise.resolve(res.data)
      },
      (err: any) => handleError(err)
    )
  }
  request(config: AxiosRequestConfig) {
    return new Promise<any>(async (resolve, reject) => {
      try {
        const { data } = await this.instance.request(config as AxiosRequestConfig)
        resolve(data)
      } catch (error: any) {
        reject(error)
      }
    })
  }
  GET(config: AxiosRequestConfig) {
    return this.request({ ...config, method: 'get' })
  }
  POST(config: AxiosRequestConfig) {
    return this.request({ ...config, method: 'post' })
  }
  DELETE(config: AxiosRequestConfig) {
    return this.request({ ...config, method: 'delete' })
  }
  PUT(config: AxiosRequestConfig) {
    return this.request({ ...config, method: 'put' })
  }
}
export default new Request()
