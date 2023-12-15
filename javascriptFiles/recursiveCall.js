function pow(x, n) {
  let result = 1;

  // 반복문을 돌면서 x를 n번 곱함
  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}
console.log( recursionPow(2, 3) ); // 8

function recursionPow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

let company = { // 동일한 객체(간결성을 위해 약간 압축함)
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
  development: {
    sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
    internals: [{name: 'Jack', salary: 1300}]
  }
};

// 급여 합계를 구해주는 함수 ==> 이해 안됨........
function sumSalaries(department) {
  if (Array.isArray(department)) { // 첫 번째 경우
    return department.reduce((prev, current) => prev + current.salary, 0); // 배열의 요소를 합함
  } else { // 두 번째 경우
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // 재귀 호출로 각 하위 부서 임직원의 급여 총합을 구함
    }
    return sum;
  }
}
console.log(sumSalaries(company));

function sumTo(number){
  if(number === 1) return 1;
  else return number + sumTo(number - 1);
}
function sumToFor(number){
  let sum = 0;
  for(let i = 1 ; i <= number ; i++)  sum += i;
  return sum;
}
function sumToMath(number){
  return number * (number+1) /2;
}
// console.log(sumTo(10000));
// console.log(sumToMath(100000));

function factorial(n){
  return (n === 1) ? 1 : n * (factorial(n - 1));
}
// console.log(factorial(170));

function fib(n){
  return n <= 1 ? n : fib(n-1)+fib(n-2);
}
let start = Date.now();
console.log(fib(40));
let end = new Date().getTime();
console.log(end-start);

function fibForLoop(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

let start2 = Date.now();
console.log(fibForLoop(77));
let end2 = new Date().getTime();
console.log(end2-start2);












