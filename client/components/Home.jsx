import React, { Component } from 'react';
import Navigation from './Navigation'

//EXTERNAL SOURCE DATA
import copySource from '../../server/public/data/sourceCopy'

const navMarker = 'Home'

let pageText = copySource.find(source => source.pageID === navMarker)
let quoteSection1 = pageText.quoteSection1
let quoteSection2 = pageText.quoteSection2
let quoteSection3 = pageText.quoteSection3
let bodyCopy1 = pageText.bodyCopy1



class Home extends Component {
  render() {
    return (
      <>
      <div><Navigation navMarker={navMarker}/></div>

      <div className='contentContainer one-edge-shadow'>
        <div className='slideContainer'>
        </div>
        <div className='copyContainer'>
          <div className='quoteBody'>
            <div>{quoteSection1}</div>
            <div>{quoteSection2}</div>
            <span className='quoteAuthor'> {quoteSection3} </span>
          </div>
          <p className='paragraphContainer'>
            {bodyCopy1}
          </p>
          <p className='paragraphContainer'>
            {bodyCopy1}
          </p>
        </div>
      </div>
      </>
    );
  }
}

export default Home;