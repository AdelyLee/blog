/**
 * Created by lyc on 17-7-11.
 */
import axios from 'axios'
import {BASE_URL} from './common'
let base = BASE_URL
let AUTH_TOKEN = localStorage.getItem('access-user')
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
/**
 * 获取文章列表 POST /es/findPageByMustShouldDateInType
 * @param params
 */
export const getArticles = (params: any) => {
    return axios.post(`${base}/es/findPageByMustShouldDateInType`, params).then(res => res.data)
}