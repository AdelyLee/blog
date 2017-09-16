/**
 * Created by lyc on 2017-09.
 */
import axios from 'axios'
import * as qs from 'querystring'
import {BASE_URL} from './common'
let base = BASE_URL
let AUTH_TOKEN = localStorage.getItem('access-user')
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
/**
 * 账号密码登录
 * @param params
 */
export const accountLogin = (params: any) => {
  return axios.post(`${base}/login/login`, qs.stringify(params)).then(res => res.data)
}