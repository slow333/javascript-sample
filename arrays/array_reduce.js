let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };
let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];
let arr = [ john, pete, mary ];

export function GetAverageAge(){
  return (
    <div>
      {users.reduce((prev, user) => prev + user.age, 0) / users.length}
    </div>
  )
}
let str = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];
export function Unique() {
  let result = [];
  for (let i of str) {
    if(!result.includes(i)){
      result.push(i);
    }
  }
  return (
   <div>{result.map((value, inx) => <h3 key={inx}>{value}</h3>)}</div>
  )
}