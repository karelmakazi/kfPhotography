import React, { Component } from 'react';

const firstPositionArray = [1,3,4,6,7,8,9,10,1,2,3,4,5,6,7,8,10,1,2,1]
let firstPosTrend = []

const numberDue = [
  {
    number: 0,
    position: []
  },
]

//LOTTO RANGE LOOP
for ( var i = 0; i <= 10; i++){
  //COUNT POSITION LOOP
  for( var r = 0; r <= firstPositionArray.length; r++){
    if (firstPositionArray[r] === i){
      let newOccurance = r
      let previousOccurance =  
      firstPosTrend.push(r)
      console.log(firstPosTrend)
    }
  }
}






class Test extends Component {
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default Test;