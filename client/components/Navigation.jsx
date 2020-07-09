import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Header extends Component {
  
  render() {
    return (
      <div className='headerWrapper'>
        <div className='logoStrip'>
          <h1>Karel Fourie Photography</h1>
        </div>
        <div className='navStrip'>
          <Link to='/Preschool'><button className='mainNavigation' value=''> Pre-schools </button></Link>
          <Link to='/Portraits'><button className='mainNavigation' value=''> Portraits </button></Link>
          <Link to='/Events'><button className='mainNavigation' value=''> Booked Events </button></Link>
          <Link to='/Contact'><button className='mainNavigation' value=''> Contact </button></Link>
        </div>
      </div>
    )
  }
}

export default Header;