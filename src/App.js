import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom'
import Home from './pages/home'

class App extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return <div>
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <Redirect to='/home' />
        </Switch>
      </Router>
    </div>
  }
}

export default App;
