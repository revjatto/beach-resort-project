import React from 'react';

import './App.css'
import Home from './pages/Home.js';
import Room from './pages/Room';
import SingleRoom from './pages/SingleRoom';
import About from './pages/About';
import Error from './pages/Error';
import Travel from './pages/Travel';

import {Route, Switch} from 'react-router-dom';

import NavBar from './components/NavBar';

class App extends React.Component {

  render(){
    return (
      <div>
        <NavBar />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Room} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route exact path="/about/" component={About} />
        <Route exact path="/travels/" component={Travel} />
        <Route component={Error} />
      </Switch>
      </div>
    )
  }
  
}

export default App;
