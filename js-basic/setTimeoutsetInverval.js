//아래 코드를 실행하면 1초 후에 sayHi()가 호출됩니다.

function sayHi() {
  console.log('안녕하세요.');
}

setTimeout(sayHi, 1000); // 정해진 시간 후에 실행
function sayHi2(who, phrase) {
  console.log( who + ' 님, ' + phrase );
}

setTimeout(sayHi2, 3000, "홍길동", "안녕하세요."); // 홍길동 님, 안녕하세요.

setTimeout("console.log('안녕하세요.2')", 1000);
setTimeout(() => console.log('안녕하세요.3'), 1000);


let timerId = setTimeout(() => alert("아무런 일도 일어나지 않습니다."), 1000);
console.log(timerId); // 타이머 식별자

clearTimeout(timerId);
console.log(timerId); // 위 타이머 식별자와 동일함 (취소 후에도 식별자의 값은 null이 되지 않습니다.)

// setInterval 정해진 시간 마다 실행

// 2초 간격으로 메시지를 보여줌
let timerId2 = setInterval(() => console.log('째깍'), 2000);

// 5초 후에 정지
setTimeout(() => { clearInterval(timerId2); console.log('정지'); }, 5000);