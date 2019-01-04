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
import Sidebar from './components/common/Sidebar';
import * as home from './assets/icons/home.png';
import * as gallery from './assets/icons/gallery.png';
import * as skills from './assets/icons/skills.png';
import * as contact from './assets/icons/message.png';
import * as about from './assets/icons/information.png';


class Routes extends Component {
  home = '../../assets/icons/home.png';
  gallery = '../../assets/icons/gallery.png';
  skills = '../../assets/icons/skills.png';
  contact = '../../assets/icons/message.png';
  about = '../../assets/icons/information.png';

  links = [
    {link:'about', icon: this.about}, 
    {link: 'skills', icon: this.skills}, 
    {link:'gallery', icon: this.gallery}, 
    {link: 'contact', icon: this.contact},
    {link: 'home', icon: this.home}
  ];

  render() {
    return (
      <Switch>
        <Sidebar links={this.links} icons={this.icons}/>
        <Route exact path='/' component={Landing} />
        <Route path='/about' component={About} />
        <Route path='/skills' component={Skills} />
        <Route path='/gallery' component={Gallery} />
        <Route path='/contact' component={Contact} />
      </Switch>
    );
  }
}

export default Routes;
