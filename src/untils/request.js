
import { Toast } from 'antd-mobile';

import axios from 'axios'

let instanceTime = 0


export const baseURL = 'https://api-haoke-web.itheima.net'
export const instance = axios.create({
    baseURL,
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    instanceTime++
    Toast.loading('加载中...', 0);
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    instanceTime--
    if (instanceTime == 0) {
        Toast.hide()
    }
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});