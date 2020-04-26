import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from'react-router-dom'
import Nav from './Nav'
import About from './About'
import Friends from './Friends'
import Friend from  './Friend'



function App() {
  return (
    <Router>     
    <div className="App">
      <Nav/>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/friends" exact component={Friends}/>
      <Route path="/friends/:id" component={Friend}/>
      </Switch>
    </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)

export default App;
