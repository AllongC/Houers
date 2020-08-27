import { TabBar } from 'antd-mobile';
import React, { Component } from 'react'

import Index from '../index'
import Found from '../found'
import My from '../my'

import { Route } from 'react-router-dom'


class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.history.location.pathname);
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', bottom: 0 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#45ba7a"
                    barTintColor="white"
                >
                    <TabBar.Item
                        title="首页"
                        key="Index"
                        icon={<i className="iconfont icon-ind" style={{ width: '22px', height: '22px', }}></i>}
                        selectedIcon={<i className="iconfont icon-ind" style={{ width: '22px', height: '22px', color: '#45ba7a' }}></i>}
                        selected={this.props.history.location.pathname === '/home/index'}
                        onPress={() => {
                            this.props.history.push('/home/index')
                        }}
                        data-seed="logId"
                    >
                        <Route path="/home/index" component={Index} />
                    </TabBar.Item>
                    <TabBar.Item
                        icon={<i className="iconfont icon-findHouse" style={{ width: '22px', height: '22px', }}></i>}
                        selectedIcon={<i className="iconfont icon-findHouse" style={{ width: '22px', height: '22px', color: '#45ba7a' }}></i>}
                        title="找房"
                        key="Found"
                        selected={this.props.history.location.pathname === '/home/found'}
                        onPress={() => {
                            this.props.history.push('/home/found')
                        }}
                        data-seed="logId1"
                    >
                        <Route path="/home/found" component={Found}></Route>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={<i className="iconfont icon-my" style={{ width: '22px', height: '22px', }}></i>}
                        selectedIcon={<i className="iconfont icon-my" style={{ width: '22px', height: '22px', color: '#45ba7a' }}></i>}
                        title="我的"
                        key="My"
                        selected={this.props.history.location.pathname === '/home/my'}
                        onPress={() => {
                            this.props.history.push('/home/my')
                        }}
                    >
                        <Route path="/home/my" component={My}></Route>
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}


export default Home