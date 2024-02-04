'use strict';

const setEx = new Set(['s','e','e','a','t','c','c',1,2])
console.log(setEx.size);
// for (const i of setEx) console.log(i)

const question = new Map([
  ['question', 'What is the best'],
  [1, 'C#'],  [2, 'Java'],  [3, "JavaScript"],
  [true, 'Win 🏆🏆🏆🏆🏆🏆'], [false, 'Lose 🤣🤣🤣🤣🤣'],
  ['answer', 3],
]);

for (const [key, value] of question){
  typeof key === 'number' && console.log(`${key} : ${value}`)
}
// const answer = Number(prompt("정답번호는 ? "));
const answer = 3;
console.log(question.get(question.get('answer') === answer))

const objSample = {
  name: 'kim', age: 33,
}
const objToMap = new Map(Object.entries(objSample));
console.log(objToMap)