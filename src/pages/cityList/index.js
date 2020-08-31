import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import { connect } from 'react-redux';

// 引入axios实例
import { instance as axios } from '../../untils/request';

class CityList extends Component {
    async componentDidMount() {
        const res = await Promise.all([this.getHotCity(), this.getAllCity()])
        const hotCity = res[0].data.body
        const allCity = res[1].data.body
    }
    getHotCity = () => {
        return axios.get('/area/hot')
    }
    getAllCity = () => {
        return axios.get('/area/city?level=1')
    }
    render() {
        return <div>
            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => console.log('onLeftClick')}
            >{this.props.cityName}</NavBar>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        cityName: state.cityReducer.cityName
    }
}

export default connect(mapStateToProps)(CityList);