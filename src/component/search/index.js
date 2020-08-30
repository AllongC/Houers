import React, { Component } from "react";

// 引入search组件
import searchCss from "./index.module.scss";

class Search extends Component {
    render() {
        return <div className={searchCss.search}>
            <div className={searchCss.search_left}>
                <p> 广州</p>
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