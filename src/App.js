import React from 'react';
import './App.css';
import {Route, Redirect} from'react-router-dom'
import LandingPage from './components/LandingPage'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Route path="/landingpage" component={LandingPage} />
      <Redirect from={"/"} to={"/landingpage/registro"}/>
      <Route path="/home" component={Home} />
    </div>
  );
}

export default App
