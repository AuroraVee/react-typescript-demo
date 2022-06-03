import axios, {
 type AxiosInstance,
 type AxiosRequestConfig,
 type AxiosPromise,
 type AxiosResponse,
} from 'axios' // 引入axios和定义在node_modules/axios/index.ts文件里的类型声明
import { env } from 'node:process';
import config from './config';


const { api: { devApiBaseUrl, proApiBaseUrl } }=config
const apiBaseUrl = env.NODE_ENV === 'production' ? proApiBaseUrl : devApiBaseUrl;


// 定义接口请求类，用于创建axios请求实例
class HttpRequest {
  // 接收接口请求的基本路径
  constructor(public baseUrl: string=apiBaseUrl) {
    this.baseUrl = baseUrl
  }

  // 调用接口时调用实例的这个方法，返回AxiosPromise
  public request(options: AxiosRequestConfig): AxiosPromise {
    // 创建axios实例，它是函数，同时这个函数包含多个属性
    const instance: AxiosInstance = axios.create()
    // 合并基础路径和每个接口单独传入的配置，比如url、参数等
    options = this.mergeConfig(options)
    // 调用interceptors方法使拦截器生效
    this.interceptors(instance, options.url)
    // 返回AxiosPromise
    return instance(options)
  }

  // 用于添加全局请求和响应拦截
  private interceptors(instance: AxiosInstance, url?: string) {
    // 请求和响应拦截
    	// 请求拦截
        instance.interceptors.request.use((config: AxiosRequestConfig) => {
            // 接口请求的所有配置，可以在axios.defaults修改配置
            return config
          },
          (error) => {
            return Promise.reject(error)
          })
           
            // 响应拦截
          instance.interceptors.response.use((res: AxiosResponse) => {
            // 一般服务端会将状态码、提示信息和数据封装在一起，然后作为数据返回
            const { data } = res 
            const { code, msg } = data
            if (code !== 0) {
              console.error(msg) 
            }
            return res
          },
          (error) => { 
            return Promise.reject(error)
          })
      
  
  }

  // 用于合并基础路径配置和接口单独配置
  private mergeConfig(options: AxiosRequestConfig): AxiosRequestConfig {
    return Object.assign({ baseURL: this.baseUrl }, options)
  }
}
export default HttpRequest
