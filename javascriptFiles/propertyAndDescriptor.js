'use strict';
let user = {
  name: "John"
};

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

console.log( JSON.stringify(descriptor, null, 2 ) );

let user2 = {};

Object.defineProperty(user2, "name", {
  value: "John"
});

let descriptor2 = Object.getOwnPropertyDescriptor(user2, 'name');

console.log( JSON.stringify(descriptor2, null, 2 ) );

Object.defineProperty(user, "name", {
  writable: false
});

//user.name = "Pete"; // Error: Cannot assign to read only property 'name' => strict mode

let user3 = { };

Object.defineProperty(user3, "name", {
  value: "John",
  // defineProperty를 사용해 새로운 프로퍼티를 만들 땐, 어떤 플래그를 true로 할지 명시해주어야 합니다.
  enumerable: true,
  configurable: true
});
console.log(user3.name); // John
// user3.name = "Pete"; // Error

let user4 = {
  name: "John",
  toString() {
    return this.name;
  }
};

Object.defineProperty(user4, "toString", {
  enumerable: false
});

// 이제 for...in을 사용해 toString을 열거할 수 없게 되었습니다.
// for (let key in user4) alert(key); // name

let descriptor5 = Object.getOwnPropertyDescriptor(Math, 'PI');

console.log( JSON.stringify(descriptor5, null, 2 ) );
// configurable 플래그를 false로 설정하면 돌이킬 방법이 없습니다. defineProperty를 써도 값을 true로 되돌릴 수 없죠.
let user6 = { };

Object.defineProperty(user6, "name", {
  value: "John",
  writable: false,
  configurable: false
});

// user.name 프로퍼티의 값이나 플래그를 변경할 수 없습니다.
// 아래와 같이 변경하려고 하면 에러가 발생합니다.
//   user.name = "Pete"
//   delete user.name
//   Object.defineProperty(user, "name", { value: "Pete" })
// Object.defineProperty(user6, "name", {writable: true}); // Error
let user7 = {};
Object.defineProperties(user7, {
  name: { value: "John", writable: false },
  surname: { value: "Smith", writable: false },
  // ...
});

let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(user7));
console.log(Object.getOwnPropertyDescriptor(clone, 'name'));

