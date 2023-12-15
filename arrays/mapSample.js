let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',    50]
]);
const out = document.querySelector('.textOut');
recipeMap.forEach((value, key, map) => {
  const text = document.createElement('p');
  text.innerText = `${key} : ${value}`;
  document.body.appendChild(text);
});

let obj = {
  name: "John",
  age: 30
};
// from obj => map
let map = new Map(Object.entries(obj));
map.get('name'); // John

// from map => obj
let mapFromSomewhere = new Map();
mapFromSomewhere.set('banana', 1);
mapFromSomewhere.set('orange', 2);
mapFromSomewhere.set('meat', 4);
let prices = Object.fromEntries(mapFromSomewhere);
// now prices = { banana: 1, orange: 2, meat: 4 }
out.textContent = prices.orange; // 2
function unique(arr) {
  let mySet = new Set(arr);
  // for (let a of arr) {
  //   mySet.add(a);
  // }
  return Array.from(mySet);
  // return Array.from(new Set(arr))

  // return mySet.forEach((value, value2, set) => {
  //   alert(value);
  // });
}
let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

unique(values); // 얼럿창엔 `Hare, Krishna, :-O`만 출력되어야 합니다.

let arr2 = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const strArr = arr[i].toLowerCase().split('').sort().join('');
    map.set(strArr, arr[i]);
  }
  return Array.from(map.values());
}
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
function sumSalaries(obj){
  let sum = 0;
  for (let s of Object.values(obj)) {
    sum += s;
  }
  return sum;
}

function count(obj) {
  return Object.entries(obj).length;
}
out.textContent = '';