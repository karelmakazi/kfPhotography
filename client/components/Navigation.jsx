import React from 'react'
import { Link } from 'react-router-dom'

import buttonSource from '../../server/public/data/source'



const Navigation = props => {
  
  let navDataMarker = props.navMarker
  let buttonData = buttonSource.find(source => source.pageID === navDataMarker)
  let buttonList = buttonData.buttonList
  let buttonLinks = buttonData.buttonLinks
  
  return (
      <div className='headerWrapper'>
        <div className='logoStrip'>
          <div className='logo'>Karel Fourie Photography</div>
        </div>
        <div className='navStrip'>
          {buttonList.map((text, index) => {
            return (
              <Link to={buttonLinks[index]} key={index}>
                <button className='mainNavigation' value=''> {text} </button>
              </Link>
            )
          })}
        </div>
      </div>
    )

}


export default Navigation;
