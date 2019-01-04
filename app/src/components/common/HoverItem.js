import React from 'react';

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
          <img src={require(this.state.icon)} onMouseOut={this.handleMouseOut} style={{width: '100%', height:'60%', background: `${this.props.color}`}}/>
        }
      </li>
    )
  }
}

export default HoverItem;