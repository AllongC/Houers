import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import { connect } from 'react-redux';
import { List } from 'react-virtualized';
// 引入axios实例
import { instance as axios } from '../../untils/request';
// 引入css
import listCss from './index.module.scss'

class CityList extends Component {
    state = {
        list: [],
        letter: [],
        currentIndex: 0
    }
    rowRenderer = ({
        key, // Unique key within array of rows
        index, // Index of row within collection
        isScrolling, // The List is currently being scrolled
        isVisible, // This row is visible within the List (eg it is not an overscanned row)
        style, // Style object to be applied to row (to position it)
    }) => {
        const { list } = this.state
        return (
            <div key={key} style={style}>
                <div className={listCss.list_item}>
                    {list[index].name}
                    {list[index].list.map(item => <div key={item} className={listCss.list_items}>{item}</div>)}
                </div>
            </div>
        );
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
    rowHeight = ({ index }) => {
        const height = this.state.list[index].list.length * 48 + 40
        return height
    }
    getHotCity = () => {
        return axios.get('/area/hot')
    }
    getAllCity = () => {
        return axios.get('/area/city?level=1')
    }
    onRowsRendered = ({ startIndex }) => {
        this.setState({
            currentIndex: startIndex
        })
    }
    changeCurrent = (index) => {
        this.setState({
            currentIndex: index
        })
    }
    render() {
        const { list, letter, currentIndex } = this.state
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
                <List
                    width={window.innerWidth}
                    height={window.innerHeight - 45}
                    rowCount={list.length}
                    rowHeight={this.rowHeight}
                    rowRenderer={this.rowRenderer}
                    onRowsRendered={this.onRowsRendered}
                    scrollToIndex={currentIndex}
                    scrollToAlignment="start"
                />
                <div className={listCss.letter_box}>
                    {letter.map((item, index) => <div key={item} className={listCss.letter_box_item}>
                        <span
                            className={[listCss.letter_box_items, currentIndex === index ? listCss.letter_box_active : ' '].join(' ')}
                            onClick={() => { this.changeCurrent(index) }}
                        >
                            {item}
                        </span>
                    </div>)}
                </div>
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