'use strict';

// console.log(this);
//
// const calcAge = function (birthYear) {
//   console.log("age : ", 2033 - birthYear);
//   console.log(this);
// }
// calcAge(1988);
//
// const calcAgeArrow =  (birthYear) => {
//   console.log("age : ", 2033 - birthYear);
//   console.log(this);
// }
//
// calcAgeArrow(1988);
//
// function calcAgeFunc(birthYear) {
//   console.log("age : ", 2033 - birthYear);
//   console.log(this);
// }
// calcAgeFunc(1988)

const Rebecca = {
  name: 'rebecca',
  year: 1990,
  calcAge: function () {
    console.log(this);
    console.log(2024 - this.year)
  }
}

Rebecca.calcAge();

const ferguson = {
  name: 'ferguson',
  year: 2019,
};
console.log(ferguson)
const f = Rebecca.calcAge;
ferguson.calcAge = f;
ferguson.calcAge();

