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
                  <div className='packageBodyContainer'>
                    <div className='packageTopContainer'>
                      <div>
                        <div className='packageTitle'>
                          <h3>{pack.packTitle}</h3>
                        </div>
                        <div className='summaryContainer'>
                          <p>{pack.packSummary}</p>
                        </div>
                      </div>
                      <div>
                        <div className='packagePrice'>
                          {pack.packPrice}
                          <div className='packageFine'>{pack.packFine}</div>
                        </div>
                      </div>
                    </div>
                    <div className='packageBottomContainer'>
                      <Link to='/Bookings'>
                        <button className='packageButton'>Book Session </button>
                      </Link>
                    </div>

                  </div>
          )
        })}
      </>
    );
  }
}

export default Package;