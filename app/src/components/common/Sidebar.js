import React from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
  links = this.props.links;
  render() {
    console.log(this.props);
    return(
      <ul id='sidebar'>
        {this.links.map( link => {
          return(
            <li>
              <a href={`/${link}`}>
                {link}
              </a>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default Sidebar