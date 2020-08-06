import React, { Component } from 'react';
import Navigation from './Navigation'
import Steps from './Steps'

const navMarker = 'Our Process'

class Process extends Component {
  render() {
    return (
      <>
      <div><Navigation navMarker={navMarker}/></div>

      <div className='contentContainer'>
        <div className='copyContainer'>
          <div className='copySection'>
            <div className='stepWrapper'>
              <Steps />
            </div>
          </div>
          
        </div>
      </div>
      </>
    );
  }
}

export default Process;