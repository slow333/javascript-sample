let user = { name: "John", years: 30 };

// 할당 연산자 좌측에 답안을 작성하시면 되겠죠?
let {name, years: age, isAdmin = false} = user

console.log( name ); // John
console.log( age ); // 30
console.log( isAdmin ); // false

let salaries = {    "John": 100,    "Pete": 300,    "Mary": 250  };

function topSalary(obj) {
  let max = 0;
  let maxName = '';
  for (const [name, salary] of Object.entries(obj)) {
    if (max < salary) {
      max = salary;
      maxName = name;
    }
  }
  return `${maxName} earns ${max} dollar`;
}
console.log(topSalary(salaries));
