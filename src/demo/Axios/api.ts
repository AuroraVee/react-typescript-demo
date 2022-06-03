import axios, {type ResponseData } from './index'
import {type AxiosPromise } from 'axios'
import {type ILogin} from "./type"



export const loginReq = (data: ILogin): AxiosPromise<ResponseData> => {
  return axios.request({
    url: '/api/user/login',
    data,
    method: 'POST',
  })
}
