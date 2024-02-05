'use strict';

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`)
  };
};
// booker를 생성하면 이때 parent function 자체는 stack에서 사라지나
// javascript 내부에서 closure를 생성해서 상위 함수의 변수 값을 별도로 저장함
// return 함수는 parent 함수는 없어서 변수에 접근할 수 없으나 closure를 통해 변수가 관리됨에 따라
// 값이 저장되고 업데이트됨.
const booker = secureBooking();
booker();
booker();
booker();
// closure 는 변수 저장소 , 어딘가 저장해 놓고 함수와는 별개로 동작함.

console.dir(booker)