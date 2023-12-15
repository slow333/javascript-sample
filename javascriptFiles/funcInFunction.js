// java public private protected 등과 같은 접근 제어자 와 같은 개념임...

// Filter inBetween
function inBetween(a, b) {
  return function(x) {
    return x >= a && x <= b;
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

// Filter inArray
function inArray(arr) {
  return function(x) {
    return arr.includes(x);
  };
}

let arr2 = [1, 2, 3, 4, 5, 6, 7];
console.log( arr2.filter(inArray([1, 2, 10])) ); // 1,2

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

// 이름을 기준으로 정렬(Ann, John, Pete)
// users.sort((a, b) => a.name - b.name);
users.sort((a, b) => a.name > b.name ? 1 : -1);
console.log(JSON.stringify(users));
// 나이를 기준으로 정렬(Pete, Ann, John)
users.sort((a, b) => a.age - b.age);
// users.sort((a, b) => a.age > b.age ? 1 : -1);
console.log(JSON.stringify(users));

function byField(fieldName){
  return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}

users.sort(byField('name'));
users.sort(byField('age'));

function makeArmy() {
  let shooters = [];

  let i = 0;
  for(let i = 0; i < 10; i++) {
    let shooter = function() { // shooter 함수
      console.log( i ); // 몇 번째 shooter인지 출력해줘야 함
    };
    shooters.push(shooter);
  }

  return shooters;
}

let army = makeArmy();
console.log(army)

army[0](); // 0번째 shooter가 10을 출력함
army[5](); // 5번째 shooter 역시 10을 출력함
// 모든 shooter가 자신의 번호 대신 10을 출력하고 있음

