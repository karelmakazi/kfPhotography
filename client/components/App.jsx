import React from 'react'
import { Route } from 'react-router-dom'

//Component Imports
import Navigation from './Navigation'
import Preschool from './Preschool'
import Portraits from './Portraits'
import Events from './Events'
import Contact from './Contact'
import Footer from './Footer'

const App = () => {
  return (
    <div className='appContainer'>
      <Navigation />
      <Route exact path='/Preschool' component={ Preschool } />
      <Route exact path='/Portraits' component={ Portraits } />
      <Route exact path='/Events' component={ Events } />
      <Route exact path='/Contact' component={ Contact } />
      <Footer />
    </div>
  )
}

export default App
