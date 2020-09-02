import React, { Component } from "react";
import { NavBar, Icon } from 'antd-mobile';


class Map extends Component {
    render() {
        return <div>
            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={this.props.history.goBack}
            >地图找房</NavBar>
        </div>
    }
}

export default Map