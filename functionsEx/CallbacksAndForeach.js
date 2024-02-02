import React from 'react';

const CallbacksAndForeach = () => {
   const people = ['self', 'me', 'you', 'love']

   const result = myFunc(value => value*2 )
   let html = ``;
   people.forEach((person) => {
      html += `<li>${person}</li>`
   });
   return (
       <div>
          <div>{result}</div>
          {people.map((item, idx) => <p key={idx}>{item}</p>)}
          <ul dangerouslySetInnerHTML={{__html: html}}></ul>
       </div>
   );
};
const myFunc = (callbackFunc) => {
   let value = 30;
   return callbackFunc(value)
}

export default CallbacksAndForeach;