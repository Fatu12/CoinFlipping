import React from 'react'
// ! promise is a pattern where the eventual response (and how long it will take to receive it  ) is 
// ! not known 
// promises are alway an object 
//! 
const CoinToss = () => {
    const tossCoin = () =>{
        return Math.random() > 0.5 ? "head": "tails";
    }
const fiveHeadsSync = ()=> {
    let headsCount = 0;
    let attempts = 0;
    while(headsCount !== 5 && attempts < 50){
        attempts ++;
        let result = tossCoin();
        if(result === "head"){
            headsCount ++;
        }else{
            headsCount = 0;
        }
    }
    // promise taken call back function resolve and reject are function that pass to the promise as an argument 
   return new Promise( (resolve, reject) => {
    if(headsCount === 5){
        resolve('you have flipped your coin')
    }
    else if(attempts >= 50){
        reject(" sorry no more flips for you ")
    }
   }
   )
}
fiveHeadsSync()
//  then for any resolves and they take their oun call back function 
// ! gain back is whatever resolve function
    .then( res => console.log(res))
    // catch for any reject
    .catch( err => console.log(err) );
console.log( "When does this run now?" );

  return (
    <div>
        <h3> Flip the coin .....to win $$$$$$</h3>
    </div>
  )
}

export default CoinToss