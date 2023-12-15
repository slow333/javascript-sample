let user = {
  name: "John",
  surname: "Smith",
  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
};
/*

Object.defineProperty(user, 'fullName', {
  get() {
    return `${this.name} ${this.surname}`;
  },

  set(value) {
    [this.name, this.surname] = value.split(" ");
  }
});
*/

console.log(user.fullName); // John Smith
user.fullName = "Alice Cooper";

for(let key in user) {
  console.log(key + ':'+ user[key]);
} // name, surname
// console.log(user.name);

function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  // age는 현재 날짜와 생일을 기준으로 계산됩니다.
  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    }
  });
}

let john = new User("John", new Date(1992, 6, 1));

console.log( john.birthday ); // birthday를 사용할 수 있습니다.
console.log('추가된 변수 age : '+ john.age );      // age 역시 사용할 수 있습니다.