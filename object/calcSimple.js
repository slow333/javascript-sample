function Calculator() {
  let a; let b;
  this.read = () => {
    this.a = +prompt("1st");
    this.b = +prompt("2nd");
  }
  this.sum = () => this.a + this.b;
  this.mul = () => this.a*this.b ;
}

let calculator = new Calculator();
calculator.read();
alert("sum = " + calculator.sum());
alert("mul = " + calculator.mul());