const defaultState = {
    cityName: ''
}
export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case 'GETINITCITY':
            newState.cityName = action.cityName
            return newState
            break;
        case 'CHANGECITY':
            newState.cityName = action.cityName
            return newState
            break;
        default:
            break;
    }
    return state
}
