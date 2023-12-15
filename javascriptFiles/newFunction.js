let func = new Function ([arg1, arg2, ...argN], functionBody);
// 인수를 한꺼번에 모아(쉼표로 구분) 전달할 수도 있습니다.
//
//   아래 세 선언 방식은 동일하게 동작하죠.

new Function('a', 'b', 'return a + b'); // 기본 문법
new Function('a,b', 'return a + b'); // 쉼표로 구분
new Function('a , b', 'return a + b'); // 쉼표와 공백으로 구분