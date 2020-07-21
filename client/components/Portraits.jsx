import React, { Component } from 'react';
import Navigation from './Navigation'
import Package from './Package' 

//EXTERNAL SOURCE DATA
import copySource from '../../server/public/data/sourceCopy'

const navMarker = 'portraits'

// let pageText = copySource.find(source => source.pageID === navMarker)
// let quoteSection1 = pageText.quoteSection1
// let quoteSection2 = pageText.quoteSection2
// let quoteSection3 = pageText.quoteSection3
// let bodyCopy1 = pageText.bodyCopy1



class Portraits extends Component {
  render() {
    return (
      <>
      <div><Navigation navMarker={navMarker}/></div>

      <div className='contentWrapper'>
        <div className='slideWrapper'>
         
        </div>
        <div className='copyWrapper'>
          <div className='copySection'>
            <h2>Portrait Packages</h2>
            <div className='packageWrapper'>
              
            </div>
          </div>
          <div className='copySection'>
            <h2>Our Process</h2>
            <p className='copyBody'>
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className='copySection'>
            <h2>On the Day</h2>
            <p className='copyBody'>
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className='copySection'>
            <h2>FUCK THIS</h2>
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