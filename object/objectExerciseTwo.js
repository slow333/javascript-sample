// 'use strict';
const testOneOut = document.getElementById('test-one');
const testTwoOut = document.getElementById('test-two');

function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    }
  };
}

let user = makeUser();

let calculator = {
  read() {
    this.firstNumber = +prompt("첫번째 번호를 입력 ");
    this.secondNumber = +prompt("두번째 번호를 입력");
  },
  sum() {
    return this.firstNumber + this.secondNumber;
  },
  mul() {
    return this.firstNumber * this.secondNumber;
  }
}

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // 사다리에서 몇 번째 단에 올라와 있는지 보여줌
    testOneOut.innerText = this.step;
    return this;
  }
};

ladder
  .up()
  .up()
  .down()
  .up()
  .showStep();

function A() {
  return new B();
}
function B(){}
