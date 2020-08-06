import React, { Component } from 'react';
import Navigation from './Navigation'
import Package from './Package' 

//EXTERNAL SOURCE DATA 
//TEXT
import copySource from '../../server/public/data/sourceCopy'

const navMarker = 'Portraits'

class Portraits extends Component {
  render() {
    return (
      <>
      <div><Navigation navMarker={navMarker}/></div>

      <div className='contentContainer'>
        <div className='slideContainer'>
         
        </div>
        <div className='copyWrapper'>
          <div className='copyContainer'>
            <h2>Our Portrait Packages</h2>
            <div className='packageContainer'>
              <Package />
            </div>
          </div>
          <div className='copyContainer'>
            <h2>Our Process</h2>
            <p className='copyBody'>
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className='copyContainer'>
            <h2>On the Day</h2>
            <p className='copyBody'>
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          
        </div>
      </div>
      </>
    );
  }
}

export default Portraits;