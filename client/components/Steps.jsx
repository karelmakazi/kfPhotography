import React, { Component } from 'react';

//EXTERNAL DATA
import processSource from '../../server/public/data/processSource'

class Steps extends Component {

  render() {
    return (
      <>
        {processSource.map((step, index) => {
          return (
                  <div className='stepContainer'>
                    <div className='stepTitle'>
                      <div className='stepNumber'>
                        {step.stepNumber}
                      </div>
                      <div className='stepTitle'>
                        <h3>{step.stepTitle}</h3>
                      </div>
                    </div>
                    <div className='stepSummary'>
                      {pack.stepDescription}
                    </div>
                  </div>
                  )
        })}
      </>
    );
  }
}

export default Steps;