import React from 'react'
import { Link } from 'react-router-dom'

//EXTERNAL SOURCE DATA
import buttonSource from '../../server/public/data/sourceButton'

const navMarker = 'footer'

const Footer = props => {
  
  let footerLinkData = buttonSource.find(source => source.pageID === navMarker)
  let footerList = footerLinkData.buttonList
  let footerLinks = footerLinkData.buttonLinks
  
  return (
      <div className='footerWrapper'>
        <div className='footerStrip'>
          {footerList.map((text, index) => {
            return (
              <Link to={footerLinks[index]} key={index}>
                <button className='footerButton' value=''> {text} </button>
              </Link>
            )
          })}
        </div>
      </div>
    )
}

export default Footer;