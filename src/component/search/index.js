import React, { Component } from "react";

// 引入search组件
import searchCss from "./index.module.scss";
// 引入地图js
import { getCity } from '../../untils/baiduMap'


class Search extends Component {
    state = {
        cityName: ''
    }
    componentDidMount() {
        getCity().then(res => {
            this.setState({
                cityName: res.name.replace(/市$/g, '')
            })
        })
    }
    render() {
        return <div className={searchCss.search}>
            <div className={searchCss.search_left}>
                <p>{this.state.cityName}</p>
            </div>
            <div className={searchCss.search_right}>
                <i className={["iconfont icon-seach", searchCss.seach_icon].join(' ')}></i>
                <input type="text" placeholder="请输入小区或地址" />
            </div>
            <div className={searchCss.search_icon}>
                <i className={["iconfont icon-map", searchCss.map_icon].join(' ')}></i>
            </div>
        </div>
    }
}

export default Search;