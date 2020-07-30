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
                    <div className='packageSummary'>
                      {pack.packSummary}
                    </div>
                    <div className='packagePrice'>
                      {pack.packPrice}
                      <div className='packageFine'>{pack.packFine}</div>
                    </div>
                    <Link to='/Bookings'>
                      <button className='packageButton'>Book Session </button>
                    </Link>
                  </div>
          )
        })}
      </>
    );
  }
}

export default Package;