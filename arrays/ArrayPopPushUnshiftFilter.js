const ArrayPopPushUnshiftFilter = () => {
  let fruits = ['apple', 'pear', 'peach', 'banana', '오렌지', 'orange'];
  fruits.pop();
  fruits.push('바나나'); // 뒤에 추가
  fruits.unshift('사과', '배'); // 앞에 추가

/*

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
*/
  return (
    <div>
      {fruits.map((value, key) => <div key={key}>{key} : {value}</div>)}
    </div>
  );
};

export default ArrayPopPushUnshiftFilter;