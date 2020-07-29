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
        <div className='logoWrapper'>

        </div>
        <div className='navWrapper'>
        {buttonList.map((text, index) => {
        return (
        <Link to={buttonLinks[index]} key={index}>
          <button className='' value=''> {text} </button>
        </Link>
  )
 })}
        </div>
      </div>
    )
    
}

export default Navigation;


{/* <div className='headerStrip'>
<div className='headerStripLeft'>
  <div className='headerTier1'></div>
  <div className='headerTier2'></div>
  <div className='headerTier3'></div>
  <div className='headerTier4'></div>
</div>
<div className='headerTitleBlock'>
  <span className='topTitle'>Karel Fourie</span><br></br>
  <span className='mainTitle'>Photography</span>
</div>
<div className='headerStripRight'>
  <div className='headerTier1'></div>
  <div className='headerTier2'></div>
  <div className='headerTier3'></div>
  <div className='headerTier4'></div>
</div>
</div>
<div className=''>
{buttonList.map((text, index) => {
return (
  <Link to={buttonLinks[index]} key={index}>
    <button className='' value=''> {text} </button>
  </Link>
  )
 })}
</div> */}