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
                    <div className='stepTitleWrapper'>
                      <div className='stepTitle'>
                        <h3 className='h3Dark'>
                        <span className='number'> {step.stepNumber}</span>
                        {step.stepTitle}</h3>
                      </div>
                    </div>
                    <div className='stepSummary'>
                      {step.stepDescription}
                    </div>
                  </div>
                  )
        })}
      </>
    );
  }
}

export default Steps;