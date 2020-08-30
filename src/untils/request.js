import axios from 'axios'


export const baseURL = 'http://157.122.54.189:9060'
export const instance = axios.create({
    baseURL,
});