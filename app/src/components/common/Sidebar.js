import React from 'react';
import { Link } from 'react-router-dom';
import HoverItem from './HoverItem';


class Sidebar extends React.Component {
  links = this.props.links;
  render() {
    console.log(this.props);
    
    let key = 0;
    return(
      <ul id='sidebar'>
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