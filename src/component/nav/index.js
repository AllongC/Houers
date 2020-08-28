import React, { Component } from "react";

// 引入图片
import nav1 from "../../assets/images/nav-1.png";
import nav2 from '../../assets/images/nav-2.png'
import nav3 from '../../assets/images/nav-3.png'
import nav4 from '../../assets/images/nav-4.png'

// 引入样式
import navCss from './index.module.scss'
class Nav extends Component {
    constructor() {
        super()
        this.state = {
            navList: [
                { imgSrc: nav1, font: '整租' },
                { imgSrc: nav2, font: '合租' },
                { imgSrc: nav3, font: '地图找房' },
                { imgSrc: nav4, font: '去出租' },
            ]
        }
    }
    render() {
        const { navList } = this.state
        return <nav className={navCss.nav}>
            {navList.map(item => <li key={item.imgSrc} className={navCss.nav_item}>
                <img src={item.imgSrc} />
                <p className={navCss.nav_item_font}>{item.font}</p>
            </li>)}
        </nav>
    }
}

export default Nav