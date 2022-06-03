// 指定res中data属性的具体类型
export interface ResponseData {
  code: number
  data?: any
  msg: string
}

export interface ILogin {
  user: string
  password: number | string
}
