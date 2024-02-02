let fruits = ['apple', 'pear', 'peach', 'banana', '오렌지', 'orange'];
fruits.pop();
fruits.push('바나나'); // 뒤에 추가
fruits.unshift('사과', '배'); // 앞에 추가

// 배열 요소를 대상으로 반복 작업을 수행합니다.
for (let fruit of fruits) {
  // alert( fruit );
}
for (let key in fruits) {
  // alert( fruits[key] ); // 사과, 오렌지, 배
}

let arr2 = ['Jazz', "Blues"];
arr2.push('Rock-n-Roll');
let center = (arr2.length%2 !== 0) ? arr2.length - Math.ceil(arr2.length/2) : -1;
arr2[center] = 'Classics';
arr2.shift();
arr2.unshift('Rap', 'Reggae');

let arr1 = ["a", "b"];

arr1.push(function() {
  alert(this) ;
})

function sumInput(){
  let arr = [];
  while (true){
    let input = prompt('input number');
    if(input === null || input === '' || !isFinite(input)) break;
    arr.push(+input);
  };
  let sum = 0;
  for(let n of arr) sum += n;

  return sum;
}

function getMaxSubSum(arr){
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) { // 배열의 각 요소를
    partialSum += item; // partialSum에 더합니다.
    maxSum = Math.max(maxSum, partialSum); // 최대값을 기억해 놓습니다.
    if (partialSum < 0) partialSum = 0; // 음수가 되면 0을 대입합니다.
  }
  return maxSum;
}
// getMaxSubSum([-1, 2, 3, -9]) == 5 (강조 표시된 요소들의 합)
// getMaxSubSum([2, -1, 2, 3, -9]) == 6
// getMaxSubSum([-1, 2, 3, -9, 11]) == 11
// getMaxSubSum([-2, -1, 1, 2]) == 3
// getMaxSubSum([100, -9, 2, -3, 5]) == 100
// getMaxSubSum([1, 2, 3]) == 6 (모든 요소)
let arr = [ 1, 2, 15 ];
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a === b) return 0;
  if (a < b) return -1;
}

// arr.sort(compareNumeric);
// arr.sort(function(a, b) { return a - b; });
arr.sort((a, b) => a - b );

let countries = ['Österreich', 'Andorra', 'Vietnam'];

let kor = ['가나', '다라', '가가'];

countries.sort( (a, b) => a > b ? 1 : -1); // Andorra, Vietnam, Österreich (제대로 정렬이 되지 않았습니다.)
kor.sort( (a, b) => a.localeCompare(b) ); // Andorra,Österreich,Vietnam (제대로 정렬되었네요!)

let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  }
};

let users = [
  {age: 16},
  {age: 20},
  {age: 23},
  {age: 30}
];

// army.canJoin 호출 시 참을 반환해주는 user를 찾음
let soldiers = users.filter(army.canJoin, army);

// alert(soldiers.length); // 2
// alert(soldiers[0].age); // 20
// alert(soldiers[1].age); // 23