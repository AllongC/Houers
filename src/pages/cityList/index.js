import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import { connect } from 'react-redux'
class CityList extends Component {
    render() {
        return <div>
            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => console.log('onLeftClick')}
            >{this.props.cityName}</NavBar>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        cityName: state.cityReducer.cityName
    }
}

export default connect(mapStateToProps)(CityList);