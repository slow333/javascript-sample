// const _ = require('lodash');
// import { createRequire } from '../node_modules/lodash';
// const require = createRequire(import.meta.url);
//
// const _ = require('lodash');
// var _ = require('lodash');

/*

function camelize(str) {
  let arr = str.split('-');
  let newArr = '';
  for (let s of arr) {
    if(arr.indexOf(s) === 0)
      newArr = s;
    else newArr += s[0].toUpperCase() + s.slice(1);
  }
  return newArr;
}

function camelizeMap(str) {
  return str.split('-')
    .map((word, index) =>
      (index == 0 ? word : word[0].toUpperCase() + word.slice(1))
    )
    .join('');
}
let arr3 = [5, 3, 8, 1];

function filterRange(arr, a, b) {
  return arr.filter((num) => (num >= a && num <= b));
}

let filtered = filterRange(arr3, 1, 4);

let arr4 = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    // 범위 밖의 요소를 제거함
    if (val < a || val > b) {
      arr.splice(i, 1);
      // i--;
    }
  }
}
filterRangeInPlace(arr4, 1, 4); // 1과 4 사이에 있지 않은 요소는 모두 제거함
let arr5 = [5, 2, 1, -10, 8];

arr5.sort((a, b) => b -a);

let arr6 = ["HTML", "JavaScript", "CSS"];

function copySorted(arr){
  return arr.slice().sort((a, b) => a.localeCompare(b));
}
let sorted = copySorted(arr6);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (no changes)

function Calculator() {
  this.method = {
    '-': (a, b) => a - b,
    '+': (a, b) => a + b,
  };
  this.calculate = function (str){
    let split = str.split(' '),
      a = +split[0], op = split[1], b = +split[2];
    if(!this.method[op] || isNaN(a) || isNaN(b)) return NaN;
    return this.method[op](a, b);
  }
  this.addMethod = function (name, func){
    this.method[name] = func;
  }
}
let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a**b);
// alert(powerCalc.calculate("3 ** 7"));

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users2 = [ john, pete, mary ];

let usersMapped = users2.map(item => ({
  fullName: `${item.name} ${item.surname}`,
  id: item.id
}));
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr7 = [ john, pete, mary ];
function getAverageAge(arr){
  let ages = arr.map(user => user.age );
  let sum =0;
  for (let age of ages) {
    sum +=age;
  }
  return sum / ages.length;
}
alert( getAverageAge(arr7) );
/!*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*!/

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // John Smith
function shuffle(array) {
  // array.sort(() => Math.random() - 0.5);
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // 무작위 인덱스(0 이상 i 미만)

    // array[i]와 array[j]를 바꿔치기합니다.
    // 아래 답안에선 "구조 분해 할당(destructuring assignment)"이라 불리는 문법을 사용하여
    // 원하는 것을 구현하였는데,
    // 이 문법에 대한 자세한 내용은 이후 챕터에서 다룰 예정입니다.
    // 구조 분해 할당을 사용하지 않고 작성한 코드는 아래와 같습니다.
    // let t = array[i]; array[i] = array[j]; array[j] = t
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// 1, 2, 3으로 만들 수 있는 모든 순열의 빈도를 세줍니다.
let count = {
  '123': 0,
  '132': 0,
  '213': 0,
  '231': 0,
  '321': 0,
  '312': 0
};

for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  shuffle(array);
  count[array.join('')]++;
}

// 만들 수 있는 모든 순열의 생성 빈도를 세서 출력해줍니다.
for (let key in count) {
  const p = document.createElement('p');
  p.textContent = `${key}: ${count[key]}`;
  document.body.appendChild(p);
}


const arrayOut = document.querySelector("#array-out");
arrayOut.textContent = count.toString();
*/

let aa = [1,2,3,4];
let bb = _.shuffle(aa);

console.log(bb); // [4,3,1,2]