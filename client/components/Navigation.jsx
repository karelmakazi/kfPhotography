import React from 'react'
import { Link } from 'react-router-dom'

//EXTERNAL SOURCE DATA
import buttonSource from '../../server/public/data/sourceButton'


const Navigation = props => {
  
  let navDataMarker = props.navMarker
  let buttonData = buttonSource.find(source => source.pageID === navDataMarker)
  let buttonList = buttonData.buttonList
  let buttonLinks = buttonData.buttonLinks
  
  return (
      <div className='headerWrapper'>
        <div className='headerStrip'>
          <div className='headerTier1'></div>
          <div className='headerTier2'></div>
          <div className='headerTier3'></div>
          <div className='headerTier4'></div>
          <div className='headerTitleStrip'>
            <div className='headerSubHead'>
              Karel Fourie
            </div>
            <div className='headerMainHead'>
             Photography
            </div>
        </div>
        </div>


        {/* <div className='navStrip'>
          {buttonList.map((text, index) => {
            return (
              <Link to={buttonLinks[index]} key={index}>
                <button className='mainNavigation' value=''> {text} </button>
              </Link>
            )
          })}
        </div> */}


      </div>
    )
}

export default Navigation;
