let animal = {
  kinds: 'mammals',
  feature: 'cat',
  eats () {
    console.log('animal eats meats');
  }
};
let rabbit = {
  jumps: true,
  __proto__: animal
};

// rabbit.__proto__ = animal; // (*)

// 프로퍼티 eats과 jumps를 rabbit에서도 사용할 수 있게 되었습니다.
rabbit.eats(); // true (**)
console.log( rabbit.jumps ); // true
console.log( rabbit.kinds );

let user = {
  name: "John",
  surname: "Smith",

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};

let admin = {
  __proto__: user,
  isAdmin: true
};

console.log(admin.fullName); // John Smith (*)

// setter 함수가 실행됩니다!
admin.fullName = "Alice Cooper"; // (**)

console.log(admin.fullName); // Alice Cooper, setter에 의해 추가된 admin의 프로퍼티(name, surname)에서 값을 가져옴
console.log(user.fullName); // John Smith, 본래 user에 있었던 프로퍼티 값

// animal엔 다양한 메서드가 있습니다.
let animal2 = {
  walk() {
    if (!this.isSleeping) {
      alert(`동물이 걸어갑니다.`);
    }
  },
  sleep() {
    this.isSleeping = true;
  }
};

let rabbit2 = {
  name: "하얀 토끼",
  __proto__: animal2
};

// rabbit에 새로운 프로퍼티 isSleeping을 추가하고 그 값을 true로 변경합니다.
rabbit2.sleep();
// animal2.sleep();
console.log(rabbit2.isSleeping); // true
console.log(animal2.isSleeping); // undefined (프로토타입에는 isSleeping이라는 프로퍼티가 없습니다.)

// Object.keys는 객체 자신의 키만 반환합니다.
console.log(Object.keys(rabbit)); // jumps

// for..in은 객체 자신의 키와 상속 프로퍼티의 키 모두를 순회합니다.
for(let prop in rabbit) console.log(prop); // jumps, eats

//obj.hasOwnProperty(key)를 이용하면 상속 프로퍼티를 순회 대상에서 제외할 수 있습니다
for(let prop in rabbit) {
  let isOwn = rabbit.hasOwnProperty(prop);

  if (isOwn) {
    console.log(`객체 자신의 프로퍼티: ${prop}`); // 객체 자신의 프로퍼티: jumps
  } else {
    console.log(`상속 프로퍼티: ${prop}`); // 상속 프로퍼티: eats
  }
}