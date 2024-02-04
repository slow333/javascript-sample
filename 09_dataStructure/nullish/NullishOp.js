'use strict';

// || 는 false 값을 비교, null, undefined, 0, ''
const isTrue = 0 || "0 ||";
// nullish 는 null or undefined에 대해서 비교하는 연산자
const nullishText = 0 ?? "0 ??";

console.log(isTrue , 'nullish', nullishText);

const rest1 = { name: 'Rebecca', numGuests: 0}
const rest2 = { name: 'ferguson', owner: "Tom cruise"}
// rest1.numGuests ||= 10;
rest1.numGuests ??= 10; // null or undefined set 10;
rest2.numGuests ||= 30; // false(null, undefined, 0, '' ) set numGuests 10;
// 일반적으로 || 보다는 ??를 사용하는게 애러가 없음... 일단 ??로 하고 결과를 봐야함.
console.log(rest1.numGuests);
console.log(rest2.numGuests);

rest1.owner &&= '<no>'
rest2.owner &&= '<Anonymous>'

console.log(rest1)
console.log(rest2)