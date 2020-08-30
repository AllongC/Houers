import React, { Component } from "react";

// 引入search组件
import searchCss from "./index.module.scss";
// 引入路由信息
import { withRouter } from "react-router";
// 引入connect
import { connect } from 'react-redux'

import { initCityAsync } from '../../store/actionCreator'

class Search extends Component {
    componentDidMount() {
        this.props.getInitCity()
    }
    render() {
        return <div className={searchCss.search} onClick={() => { this.props.history.push('/citylist') }}>
            <div className={searchCss.search_left}>
                <p>{this.props.cityName}</p>
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

const mapStateToProps = (state) => {
    return {
        cityName: state.cityReducer.cityName
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getInitCity() {
            dispatch(initCityAsync())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Search));