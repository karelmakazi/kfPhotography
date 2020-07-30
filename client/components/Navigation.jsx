import React from 'react'
import { Link } from 'react-router-dom'

//EXTERNAL SOURCE DATA
import buttonSource from '../../server/public/data/sourceButton'

const Navigation = props => {
  let navDataMarker = props.navMarker
  
  //Dynamic Navigation 
  let buttonData = buttonSource.find(source => source.pageID === navDataMarker)
  let buttonList = buttonData.buttonList
  let buttonLinks = buttonData.buttonLinks

  //Dynamic Title
  let topTitle = (navDataMarker === 'Home') ? 'Karel Fourie' : 'Karel Fourie Photography'
  let subTitle = (navDataMarker === 'Home') ? 'Photography' : navDataMarker
  let subTitleWeight = (navDataMarker === 'Home') ? '34px' : '24px'
  let mainTitleWeight = (navDataMarker === 'Home') ? '400%' : '450%'
  
  return (
      <div className='headerWrapper'>
        <div className='logoWrapper'>
          <div className='headerStripLeft'>
            <div className='headerTier1'></div>
            <div className='headerTier2'></div>
            <div className='headerTier3'></div>
            <div className='headerTier4'></div>
            <div className='headerTier3'></div>
            <div className='headerTier2'></div>
            <div className='headerTier1'></div>
          </div>
          <div className='headerTitleBlock'>
            <span className='topTitle' style={{fontSize: subTitleWeight}}>{topTitle}</span><br></br>
            <span className='mainTitle' style={{fontSize: mainTitleWeight}}>{subTitle}</span>
          </div>
          <div className='headerStripRight'>
            <div className='headerTier1'></div>
            <div className='headerTier2'></div>
            <div className='headerTier3'></div>
            <div className='headerTier4'></div>
            <div className='headerTier3'></div>
            <div className='headerTier2'></div>
            <div className='headerTier1'></div>
          </div>
        </div>
        <div className='navWrapper'>
          {buttonList.map((text, index) => {
          return (
            <Link to={buttonLinks[index]} key={index}>
              <button className='' value=''> {text} </button>
            </Link>
            )})}
        </div>
      </div>
    )
}

export default Navigation;