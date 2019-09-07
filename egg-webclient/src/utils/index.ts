/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-04 23:03:55
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-05 16:15:48
 */
import * as Cookie from 'js-cookie';

const key = 'authorization';
export let getToken: () => any = () => {
    return Cookie.get(key);
}

export let setToken: (value: string) => void = (value) => {
    Cookie.set(key, value, { expires: 7 })
}

export let setOnceToken: (value: string) => void = (value) => {
    Cookie.set(key, value)
}

export let removeToken: () => void = () => {
    Cookie.remove(key);
}