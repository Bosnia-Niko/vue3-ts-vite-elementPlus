/*
 * @Description: 文件介绍
 * @Version: 1.0.0
 * @Author: 张豪
 * @Date: 2022-03-14 14:22:01
 * @LastEditTime: 2022-03-14 14:43:28
 * @LastEditors: 张豪
 */
import axios from "axios";
import type {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import type {RequestConfig, RequestInterceptors} from "./types"

class Request {
  //axios实例
  instance: AxiosInstance
  //拦截器对象
  interceptorsObj?: RequestInterceptors

  constructor(config: RequestConfig) {
    this.instance = axios.create(config)
    this.interceptorsObj = config.interceptors
    this.instance.interceptors.request.use(
      (res: AxiosRequestConfig) => {
        console.log("全局请求拦截器")
        return res
      },
      (err: any) => err
    )
    //使用实例拦截器
    this.instance.interceptors.request.use(
      this.interceptorsObj?.requestInterceptors,
      this.interceptorsObj?.requestInterceptorsCatch
    )
    this.instance.interceptors.response.use(
      this.interceptorsObj?.responseInterceptors,
      this.interceptorsObj?.responseInterceptorsCatch
    )
    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        console.log("全局响应拦截器")
        return res.data
      },
      (err: any) => err
    )
  }

  request(config: AxiosRequestConfig) {
    return this.instance.request(config)
  }
}

export default Request