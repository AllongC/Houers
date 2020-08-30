import React, { Component } from "react";

// 引入axios
import axios from "axios";
// 引入scss文件
import newCss from './index.module.scss'


class Newest extends Component {
    constructor() {
        super()
        this.state = {
            newestList: []
        }
    }
    componentDidMount() {
        axios.get('http://157.122.54.189:9060/home/news').then(res => {
            this.setState({
                newestList: res.data.body
            })
        })
    }
    render() {
        const { newestList } = this.state
        return <div className={newCss.newest}>
            <div className={newCss.newest_top}>
                <h3>最新资讯</h3>
            </div>
            <div className={newCss.newest_bottom}>
                {newestList.map(item => <div className={newCss.newest_bottom_item} key={item.id}>
                    <div className={newCss.newest_bottom_item_left}>
                        <img src={"http://157.122.54.189:9060" + item.imgSrc} />
                    </div>
                    <div className={newCss.newest_bottom_item_right}>
                        <h3>{item.title}</h3>
                        <p><span>{item.from}</span><span>{item.date}</span></p>
                    </div>
                </div>)}
            </div>
        </div>
    }
}

export default Newest