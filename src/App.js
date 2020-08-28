import React, { Component } from 'react';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom'
import Home from './pages/home'

class App extends Component {
  render() {
    return <div>
      <Router>
        <Route path="/home" component={Home} />
        <Redirect path="/" to='/home/index' />
      </Router>
    </div>
  }
}

export default App;
