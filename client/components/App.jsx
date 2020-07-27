import React from 'react'
import { Route } from 'react-router-dom'

//Component Imports
import Contact from './Bookings'
import Events from './Events'
import Footer from './Footer'
import Home from './Home'
import Preschool from './Preschool'
import Portraits from './Portraits'
import Process from './Process'

const App = () => {
  return (
    <div className='appContainer'>
      <Route exact path='/' component={ Home } />
      <Route exact path='/Preschools' component={ Preschool } />
      <Route exact path='/Portraits' component={ Portraits } />
      <Route exact path='/Events' component={ Events } />
      <Route exact path='/Contact' component={ Contact } />
      <Route exact path='/Process' component={ Process } />
      <Footer />
    </div>
  )
}

export default App
