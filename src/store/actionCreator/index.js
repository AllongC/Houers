// 引入地图js
import { getCity } from '../../untils/baiduMap'
/**
 * 获取当前位置
 */
export const initCityAsync = () => {
    return (dispatch => {
        return getCity().then(res => {
            const cityName = res.name.replace(/市$/g, '')
            dispatch({ type: 'GETINITCITY', cityName })
        })
    })
}

export const changeCity = (cityName) => {
    return { type: 'CHANGECITY', cityName }
}