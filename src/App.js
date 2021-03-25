import './App.css';
import axios from 'axios'
import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import HomePage from './index.jsx';
import ErrorPage from './components/pages/error.jsx';
import AboutPage from './components/pages/about.jsx';
import CreatePage from './components/pages/create.jsx';
import HowPage from './components/pages/how.jsx';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";


class App extends Component {
  constructor () {
    super()
    this.state = {
      username: ''
    }

    this.handleClick = this.handleClick.bind(this)
  }

  /* handleClick () {
    axios.get('https://api.github.com/users/maecapozzi')
      .then(response => this.setState({username: response.data.name}))
    }
 */
  handleClick () {
    axios.defaults.headers.common['Authorization'] = 'quickstart-QUdJIGlzIGNvbWluZy4uLi4K';
    axios.post('https://api.deepai.org/api/deepdream', {
      image: 'https://cdn.logo.com/hotlink-ok/logo-social.png'
    })
      .then(response => console.log("Success"))
    }

  render() {
    return (
    <Router> 
      <div className="App">
          <Navbar></Navbar> 
          <button className='button' onClick={this.handleClick}>
            Click Me
          </button>
          <p>{this.state.username}</p>
      </div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/create" component={CreatePage} />
        <Route exact path="/how" component={HowPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path= "/404/" component={ErrorPage}/>
        <Redirect to="/404/"/>
      </Switch>
    </Router>
    );
  }
}

export default App;
