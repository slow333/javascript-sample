'use strict';

const testOneOut = document.getElementById('test-one');
const testTwoOut = document.getElementById('test-two');

let user = {
  name: "John",
  surname: "Smith",
};

user.name = "Pete";
// delete user.name;

let schedule = {};

schedule['3시30분'] = '일어 나세요';
let isEmpty =(objs) => {
  for(let obj in objs) {
    return false;
  }
    return true;
}

let salaries ={
  john: 100,
  ann: 150,
  pete: 220,
}
let sum = (obj) => {
  let result = 0;
  for (let key in obj){
    console.log(obj[key]);
    result += obj[key];
  }
  return result;
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric (objs) {
  for (let key in objs) {
    if ((typeof objs[key]) === "number")  objs[key] *= 2 ;
  }
}

multiplyNumeric(menu);

testOneOut.innerText = menu.width;
testTwoOut.innerText = menu.height;