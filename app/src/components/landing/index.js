import React from 'react';
import Sidebar from '../common/Sidebar';

class Landing extends React.Component {
  render() {
    return (
      <div className='page-container'>
        <Sidebar />
        <div className='right-side'>
          <h1>Welcome</h1>
        </div>
      </div>
    )
  }
}

export default Landing

