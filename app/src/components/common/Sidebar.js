import React from 'react';
import HoverItem from './HoverItem';
import home from '../../assets/icons/home.png';
import gallery from '../../assets/icons/gallery.png';
import skills from '../../assets/icons/skills.png';
import contact from '../../assets/icons/message.png';
import about from '../../assets/icons/information.png';

class Sidebar extends React.Component {
  links = [
    {link:'about', icon: about}, 
    {link: 'skills', icon: skills}, 
    {link:'gallery', icon: gallery}, 
    {link: 'contact', icon: contact},
    {link: 'home', icon: home}
  ];

  render() {
    let key = 0;
    return(
      <ul id='sidebar'>
        <li className='logo'>
          Ab Steve
        </li>
        {this.links.map( display => {
          return(
            <HoverItem key={key += 0.1} color={'white'} link={display} />
          )
        })}
        <div className='credentials'>
          Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a>
          from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> 
          is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 
          title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
        </div>
      </ul>
    )
  }
}

export default Sidebar