const defaultState = {
    cityName: '北京'
}
export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case 'GETINITCITY':
            newState.cityName = action.cityName
            return newState
            break;

        default:
            break;
    }
    return newState
}
