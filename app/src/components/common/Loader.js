import React from 'react';

class Loader extends React.Component {
  render() {
    return(
      <div className='loader' style={{background:this.props.color}} />
    );
  }
}

export default Loader;