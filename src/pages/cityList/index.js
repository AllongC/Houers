import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import { connect } from 'react-redux';

// 引入axios实例
import { instance as axios } from '../../untils/request';
// 引入css
import listCss from './index.module.scss'

class CityList extends Component {
    state = {
        list: [],
        letter: []
    }
    async componentDidMount() {
        const res = await Promise.all([this.getHotCity(), this.getAllCity()])
        const hotCity = res[0].data.body
        const allCity = res[1].data.body
        let list = [{ name: '当前定位', list: [this.props.cityName] }]
        list.push({ name: '热门城市', list: hotCity.map(item => item.label) })
        const letterArr = ['#', '热']
        allCity.sort((a, b) => a.short.localeCompare(b.short))
        allCity.forEach(item => {
            const alphabet = item.short[0].toUpperCase();
            const index = letterArr.indexOf(alphabet)
            if (index == -1) {
                letterArr.push(alphabet)
                list.push({ name: alphabet, list: [item.label] })
            } else {
                list[index].list.push(item.label)
            }
        })
        this.setState({
            list,
            letter: letterArr
        })
    }
    getHotCity = () => {
        return axios.get('/area/hot')
    }
    getAllCity = () => {
        return axios.get('/area/city?level=1')
    }
    render() {
        const { list } = this.state
        return <div>
            {/*1.0 头部 start */}
            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => console.log('onLeftClick')}
            >{this.props.cityName}</NavBar>
            {/*1.0 头部 end */}

            {/* 2.0 列表 start */}
            <div className={listCss.list_box}>
                {list.map(item => <div key={item.name} className={listCss.list_item}>
                    {item.name}
                    {item.list.map(item => <div key={item} className={listCss.list_items}>{item}</div>)}
                </div>)}
            </div>
            {/* 2.0 列表 end */}
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        cityName: state.cityReducer.cityName
    }
}

export default connect(mapStateToProps)(CityList);