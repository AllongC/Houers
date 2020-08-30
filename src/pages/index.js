import React, { Component } from 'react'

// 引入轮播组件
import Swiper from "../component/swiper";
// 引入导航条组件
import Nav from "../component/nav";
// 移入租房小组
import Renting from '../component/renting'
//引入最新资讯
import Newest from "../component/newest";

class Index extends Component {
    render() {
        return <div>
            {/* 1.0 轮播图 start */}
            <Swiper></Swiper>
            {/* 1.0 轮播图 end */}

            {/* 2.0 导航条 start */}
            <Nav></Nav>
            {/* 2.0 导航条 end */}

            {/* 3.0 租房小组 start */}
            <Renting></Renting>
            {/* 3.0 租房小组 end */}

            {/* 4.0 最新资讯 start */}
            <Newest></Newest>
            {/* 4.0 最新资讯 end */}
        </div>
    }
}

export default Index