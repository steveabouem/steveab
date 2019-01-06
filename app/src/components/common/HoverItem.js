import React from 'react';
import {Link} from 'react-router-dom';


class HoverItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: props.link.link,
      isHovered: false,
      icon: props.link.icon
    };
  }

  handleMouseOver = () => {
    this.setState({
      isHovered: true,
    })
  };

  handleMouseOut = () => {
    this.setState({
      isHovered:null,
    })
  }

  render() {
    return (
      <li className='sidebar-item' onMouseOver={e =>{this.handleMouseOver()}}>
        {!this.state.isHovered ? this.state.content : 
          <Link to={'/' + this.state.content}>
           <img src={this.state.icon} onMouseOut={this.handleMouseOut} />
          </Link>
        }
      </li>
    )
  }
}

export default HoverItem;