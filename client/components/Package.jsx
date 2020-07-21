import React, { Component } from 'react';
import { Link } from 'react-router-dom'

//EXTERNAL DATA
import packageSource from '../../server/public/data/packageSource'

class Package extends Component {



  render() {
  
    return (
      <>
        {packageSource.map((pack, index) => {
          return (
                  <div className='packageContainer'>
                    <div className='packageTitle'>
                      <h3>{pack.packTitle}</h3>
                    </div>
                    <div className='packageIncludes'>
                      <span id='packageHeading'>Includes </span>
                      {pack.packIncludes}
                    </div>
                    <div className='packageTime'>
                      <span id='packageHeading'>Duration </span>
                     {pack.packTime}
                    </div>
                    <div className='packageLocation'>
                      <span id='packageHeading'>Location </span>
                      {pack.packLocation}
                    </div>
                    <div className='packagePrice'>
                      {pack.packPrice}
                    </div>
                    <Link to='/Bookings'>
                      <button className='packageButton'>Book</button>
                    </Link>
                  </div>
          )
        })}
      </>
    );
  }
}

export default Package;