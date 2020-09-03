import React, { Component } from "react";
import { NavBar, Icon } from 'antd-mobile';
import { connect } from "react-redux";
import MapCss from "./index.module.scss";

import { instance as axios } from '../../untils/request'

class Map extends Component {
    async componentDidMount() {
        var map = new window.BMap.Map("container");
        map.centerAndZoom(this.props.cityName);
        // 获取城市id
        const { value } = (await (axios.get('/area/info', { params: { name: this.props.cityName } }))).data.body
        // 获取当前城市的租房定位
        const res = (await axios.get('/area/map', { params: { id: value } })).data.body
    }
    render() {
        return <div>
            {/*1.0 头部 start */}
            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={this.props.history.goBack}
            >地图找房</NavBar>
            {/*1.0 头部 end */}

            {/* 2.0 地图 start */}
            <div id="container" className={MapCss.map}></div>
            {/* 2.0 地图 end */}
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        cityName: state.cityReducer.cityName,
    }
}

export default connect(mapStateToProps)(Map)