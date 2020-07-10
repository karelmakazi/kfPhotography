import React from 'react'
import { Route } from 'react-router-dom'

//Component Imports
import Contact from './Contact'
import Events from './Events'
import Footer from './Footer'
import Home from './Home'
import Navigation from './Navigation'
import Preschool from './Preschool'
import Portraits from './Portraits'

const App = () => {
  return (
    <div className='appContainer'>
      <Navigation />
      <Route exact path='/' component={ Home } />
      <Route exact path='/Preschool' component={ Preschool } />
      <Route exact path='/Portraits' component={ Portraits } />
      <Route exact path='/Events' component={ Events } />
      <Route exact path='/Contact' component={ Contact } />
      <Footer />
    </div>
  )
}

export default App
