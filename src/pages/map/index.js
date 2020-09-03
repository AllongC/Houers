import React, { Component } from "react";
import { NavBar, Icon } from 'antd-mobile';
import { connect } from "react-redux";
import MapCss from "./index.module.scss";

import { instance as axios } from '../../untils/request'

const BMap = window.BMap

class Map extends Component {
    async componentDidMount() {
        var map = new BMap.Map("container");
        map.centerAndZoom(this.props.cityName);
        // 添加带有定位的导航控件
        var navigationControl = new BMap.NavigationControl();
        map.addControl(navigationControl);
        // 获取城市id
        const { value } = (await (axios.get('/area/info', { params: { name: this.props.cityName } }))).data.body
        // 获取当前城市的租房定位
        const res = (await axios.get('/area/map', { params: { id: value } })).data.body
        console.log(res);
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