import React, { Component } from 'react';
import About from './components/about';
import Contact from './components/contact';
import Gallery from './components/gallery';
import Landing from './components/landing';
import Skills from './components/skills';
import Sidebar from './components/common/Sidebar';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

class Routes extends Component {
  links = ['about', 'skills', 'gallery', 'contact'];
  render() {
    return (
      <Switch>
        <Sidebar links={this.links}/>
        <Route exact path='/' component={Landing} / >
        <Route exact path='/about' component={About} / >
        <Route exact path='/skills' component={Skills} / >
        <Route exact path='/gallery' component={Gallery} / >
        <Route exact path='/contact' component={Contact} / >
      </Switch>
    );
  }
}

export default Routes;
