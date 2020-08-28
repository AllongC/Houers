import React, { Component } from 'react'

// 引入axios
import axios from "axios";
// 引入scss文件
import renCss from './index.module.scss'

class Renting extends Component {
    constructor() {
        super()
        this.state = {
            rentingList: []
        }
    }
    componentDidMount() {
        axios.get('http://157.122.54.189:9060/home/groups').then(res => {
            this.setState({
                rentingList: res.data.body
            })
        })
    }
    render() {
        const { rentingList } = this.state
        return <div className={renCss.renting}>
            <div className={renCss.renting_top}>
                <h3 className={renCss.renting_top_title}>租房小组</h3>
                <p className={renCss.renting_top_more}>更多</p>
            </div>
            <div className={renCss.renting_bottom}>
                {rentingList.map(item => <div className={renCss.renting_bottom_item} key={item.id}>
                    <div className={renCss.renting_bottom_item_left}>
                        <h4 className={renCss.renting_bottom_item_left_title}>{item.title}</h4>
                        <p className={renCss.renting_bottom_item_left_desc}>{item.desc}</p>
                    </div>
                    <div className={renCss.renting_bottom_item_right}>
                        <img src={'http://157.122.54.189:9060' + item.imgSrc} />
                    </div>
                </div>)}
            </div>
        </div >
    }
}

export default Renting