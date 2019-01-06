import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import About from './components/about';
import Contact from './components/contact';
import Gallery from './components/gallery';
import Landing from './components/landing';
import Skills from './components/skills';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/home' component={Landing} />
        <Route path='/about' component={About} />
        <Route path='/skills' component={Skills} />
        <Route path='/gallery' component={Gallery} />
        <Route path='/contact' component={Contact} />
        </Switch>
    );
  }
}

export default Routes;
