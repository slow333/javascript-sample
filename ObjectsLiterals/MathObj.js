import React from 'react';

const MathObj = () => {

   const num = 5.6
   return (
       <div>
          <div>{Math.PI}</div>
          <div>round : {Math.round(num)}</div>
          <div>floor: {Math.floor(num)}</div>
          <div>ceil: {Math.ceil(num)}</div>
          <div>trunc: {Math.trunc(num)}</div>
          <div>random : {Math.ceil(Math.random()*10)}</div>
          <div>random : {Math.ceil(Math.random()*10)}</div>
       </div>
   );
};

export default MathObj;