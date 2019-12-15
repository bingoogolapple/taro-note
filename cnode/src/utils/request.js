// https://taro-docs.jd.com/taro/docs/apis/network/request/request.html
import Taro from '@tarojs/taro'
import '@tarojs/async-await'
import api from '../constants/api'

export function getJSON(url, data) {
    Taro.showLoading()
    return Taro.request({ url: url, data: data, method: 'GET' })
        .finally(() => {
            Taro.hideLoading()
        })
}
export function postJSON(url, data) {
    Taro.showLoading()
    return Taro.request({
        header: {
            'content-type': 'application/json'
        }, url: url, data: data, method: 'POST'
    }).finally(() => {
        Taro.hideLoading()
    })
}
