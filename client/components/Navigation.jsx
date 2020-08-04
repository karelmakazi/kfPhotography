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
      <div className='headerContainer'>
 
      <div className='titleContainer'>
        <span className='subTitle' style={{fontSize: subTitleWeight}}>{topTitle}</span><br></br>
        <span className='mainTitle' style={{fontSize: mainTitleWeight}}>{subTitle}</span>
      </div>

        <div className='navContainer'>
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