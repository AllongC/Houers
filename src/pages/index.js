import React, { Component } from 'react'

// 引入轮播组件
import Swiper from "../component/swiper";


class Index extends Component {
    render() {
        return <div>
            {/* 1.0 轮播图 start */}
            <Swiper></Swiper>
            {/* 1.0 轮播图 end */}
        </div>
    }
}

export default Index