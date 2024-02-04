'use strict';
/*
const oneWord = function (str) {
  return str.replace(/ /g,'').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// higher order function
const transformer = function (str, fn) {
  console.log(`원래 문장 : ${str}`);
  console.log(`변환되는 문장 : ${fn(str)}`);
  console.log(`Transformed by : ${fn.name}`)
};

transformer('Javascript is the Best!', upperFirstWord)
transformer('Javascript is the Best!', oneWord)

const high5 = function (e) {
  console.log('👋🏼')
  console.log(this?.className || 'has not className')  // buy
  console.log(e.currentTarget === this) // true
};
document.querySelector('.buy').addEventListener('mouseover', high5);
['rebecca', 'Jonas', 'Tom'].forEach(high5);*/
/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  }
};
const greetArrow = greeting => name => console.log(`${greeting} ==> ${name}`)

const greeterHey = greet('Hey');
greeterHey('kim')

greet("Hello")('Tom');
greetArrow('Hi 👋🏼')('Rebecca');*/
// 'this' manually setting

const bookFn = function (flightNum, name) {
  console.log(`${name} booked a seat on ${this.airline} flight ${this.startCode}${flightNum}`);
  this.bookings.push({
    name : name, airline: this.airline, flightNum: this.startCode+flightNum
  })
}

const lufthansa = {
  airline: 'Lufthansa',
  startCode: 'LH',
  bookings: [],
  // book: bookFn,
}
// fn is defined call directly from object. lufthansa.book(.......); if not below

const asiana = {
  airline: 'Asiana',
  startCode: 'AN',
  bookings: [],
}
const swissAir = {
  airline: 'Swiss air line',
  startCode: 'SW',
  bookings: [],
}
// const book = lufthansa.book; // if function is in the object not out this object. copy function.
// not working can't find what is this keyword
// book(22, "Tom Cruise");
// fn is not defined use call function like below .call(thisArg, .., ..)
// call for using this
console.log('========== call method =============')
bookFn.call(lufthansa, 2938, 'Tom')
bookFn.call(lufthansa, 3636, 'Ferguson')
bookFn.call(asiana, 392, 'Tom Cruise')
bookFn.call(swissAir, 912, 'Rebecca')

// Apply method => this, array data for input data
console.log('========== apply method =============')
const flightData = [3902, 'Jin and Dong'];
bookFn.apply(swissAir, flightData) // not used 'use call' and spread method
bookFn.call(swissAir, ...flightData)

// Bind method : set this arg and make new fn.
console.log('========== bind method =============')
const bookBindAS = bookFn.bind(asiana);
const bookBindLu = bookFn.bind(lufthansa);
const bookBindSw = bookFn.bind(swissAir);

bookBindAS(3928, 'bind asiana');
bookBindLu(9999, 'from bind Lufthansa')
bookBindSw(1111, 'swwwwww')
// 번호를 사전에 정해서 함수로 정의
console.log('========== call method with args =============')
const bookASFlSet7777 = bookFn.bind(asiana, 7777); // flight num set to 7777
bookASFlSet7777('set fl num');
bookASFlSet7777('우진희');

// with event listeners
console.log('========== call, bind with dom =============')
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log("this ==> ", this)
  this.planes++;
  console.log('after ++ this.planes ==> ',this.planes)
};
document.querySelector('.buy').addEventListener('click',
  lufthansa.buyPlane.bind(lufthansa));

asiana.planes = 200;
const asBuyPlane = lufthansa.buyPlane;
asBuyPlane.call(asiana);
const bindBuyPlaneAsiana = asBuyPlane.bind(asiana)

// partial application
console.log('========== partial application =============')
const addTax = (rate, price) => price + price*rate;
const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100))

// const addVATFn = function (rate) {
//   return function (price) {
//     return price + price*rate
//   };
// }
const addVATArrow = rate => price => price + price*rate;
const addVAT2 = addVATArrow(0.23);
console.log(addVAT2(100))
