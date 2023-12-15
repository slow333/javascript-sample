let user = {
  firstName: 'John',
  sayHi(){
    console.log(`hello , ${this.firstName}`);
  }
};
/*
setTimeout(() => {
  user.sayHi();
} , 2000);

user = {
  sayHi() { console.log('다른 사용자');  }
};*/
// 이렇게 하면 this가 변경된 값이 나옴
// bind로 this 값을 고정해야 함...
let sayHi2 = user.sayHi.bind(user);

console.log('일반 sayHi',sayHi2());
setTimeout(sayHi2, 2000);

console.log('binded sayHi',sayHi2());
user = {
  sayHi() { console.log('다른 사용자');  }
};
console.log('다른 사용자 => ', user.sayHi);

// bind로 context도 인수로 전달 가능...???
function mul(a, b) {
  return a * b;
}

let double = mul.bind(null, 2);

console.log( double(3) ); // = mul(2, 3) = 6
console.log( double(4) ); // = mul(2, 4) = 8
console.log( double(5) ); // = mul(2, 5) = 10

function partial(func, ...argsBound) {
  return function(...args) { // (*)
    return func.call(this, ...argsBound, ...args);
  }
}

// 사용법:
let user2 = {
  firstName: "John",
  say(time, phrase) {
    console.log(`[${time}] ${this.firstName}: ${phrase}!`);
  }
};

// 시간을 고정한 부분 메서드를 추가함
user2.sayNow = partial(user2.say, new Date().getHours() + ':' + new Date().getMinutes());

user2.sayNow("Hello");
// 출력값 예시:
// [10:00] John: Hello!