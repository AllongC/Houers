// 获取当前城市
export const getCity = () => {
    return new Promise((resolve => {
        const myCity = new window.BMap.LocalCity();
        myCity.get(resolve);
    }))
}