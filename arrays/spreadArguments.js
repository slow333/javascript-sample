function showName() {
  console.log( arguments.length );
  console.log( arguments[0] );
  console.log( arguments[1] );

  // arguments는 이터러블 객체이기 때문에
  // for(let arg of arguments) alert(arg); 를 사용해 인수를 펼칠 수 있습니다.
}

// 2, Bora, Lee가 출력됨
showName("Bora", "Lee");

// 1, Bora, undefined가 출력됨(두 번째 인수는 없음)
showName("Bora");

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];
console.log( Math.max(...arr1, ...arr2) ); // 5 (스프레드 문법이 배열을 인수 목록으로 바꿔주었습니다.)
let merged = [...arr1, ...arr2];
console.log(merged);
let copiedArr = [...arr1]; //새로운 객체 생성

let str = "Hello";

let chars = [...str]; // H,e,l,l,o
let arrayFrom = Array.from(str);

let obj = { a: 1, b: 2, c: 3 };
let objCopy = { ...obj }; // 객체를 펼쳐서 각 요소를 분리후, 매개변수 목록으로 만든 다음에
                          // 매개변수 목록을 새로운 객체에 할당함

function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
console.log(counter);