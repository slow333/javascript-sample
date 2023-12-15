let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr7 = [ john, pete, mary ];
function getAverageAge(arr){
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}
// alert( getAverageAge(arr7) );
function unique(arr) {
  let result = [];
  for (let i of arr) {
    if(!result.includes(i)){
      result.push(i);
    }
  }
  return result;
}
let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
let sets = new Set(strings);
const arrayOut = document.querySelector("#array-out");
arrayOut.textContent = unique(strings);
// arrayOut.textContent = sets.get(0);


let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(array) {

  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {})
}
let usersById = groupById(users);

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

const text = document.querySelector('.textOut');
text.textContent = usersById.ann.name;