import React from 'react';
import Sidebar from '../common/Sidebar';


class About extends React.Component {
  

  render() {
    return (
      <div className='page-container'>
        <Sidebar />
        <div className='right-side'>
          <h1>Gallery</h1>
        </div>
      </div>
    )
  }
}

export default About

