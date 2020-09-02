import React, { Component } from 'react';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom'
import CityList from './pages/cityList'
import Home from './pages/home'
// 引入connect
import { connect } from 'react-redux'

import CityLists from './demo/cityList'

import { initCityAsync } from './store/actionCreator'

class App extends Component {
  componentDidMount() {
    this.props.getInitCity()
  }
  render() {
    return <div>
      {this.props.cityName && <Router>
        <Route exact path="/">
          <Redirect to='/home/index' />
        </Route>
        <Route path="/home" component={Home} />
        <Route path="/citylist" component={CityList} />
      </Router>}
    </div>
  }
}
const mapStateToProps = (state) => {
  return {
    cityName: state.cityReducer.cityName
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getInitCity() {
      dispatch(initCityAsync())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
