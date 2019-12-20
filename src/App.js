import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LeftSidebar from './components/LeftSidebar'
import RightSidebar from './components/RightSidebar'
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Clients from './components/Clients';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return ( 
      <div>
        <Router>
        <div className="App">
          <div className="main">
            <LeftSidebar />
            <RightSidebar />
          </div>
        </div>
        <Switch>
          <Route exact path="/home" 
           component={Home}>
          </Route>

          <Route exact path="/#/about" component={About}>
          </Route>
          
          <Route exact path="/#/services" component={Services}>
          </Route>

          <Route exact path="/#/clients">
            <Clients />
          </Route>

          <Route  exact path="/#/contact">
            <Contact />
          </Route>
        </Switch>
        </Router>
      </div>   
    );
  }
}

export default App;
