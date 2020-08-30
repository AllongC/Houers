import React, { Component } from 'react';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom'
import CityList from './pages/cityList'
import Home from './pages/home'

class App extends Component {
  render() {
    return <div>
      <Router>
        <Route exact path="/">
          <Redirect to='/home/index' />
        </Route>
        <Route path="/home" component={Home} />
        <Route path="/citylist" component={CityList} />
      </Router>
    </div>
  }
}

export default App;
