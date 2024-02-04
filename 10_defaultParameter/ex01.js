'use strict';

const bookings = [];
const createBooking = function (
  flightNum,
  numPassenger = 1,
  price = 100 * numPassenger) {

  const booking = {
    flightNum, numPassenger, price
  }
  console.log(booking);
  bookings.push(booking)
};

createBooking('AS920', 4, 200 * 4)
createBooking('AS320', 2, 100 * 4)
createBooking('QA120')
createBooking('QA100',3)

console.log(bookings);

const flight = 'LH202';
const rebecca = {
  name: 'rebecca ferguson',
  passport: 293840283,
}

const checkIn = function (flightNum, passenger) {
  // flightNum = 'LH999'; // 들어 오는 값을 모두 변경, 위에 적으면 없을 경우에 적용
  passenger.name = "Mr OR Ms " + passenger.name;
  if(passenger.passport === 293840283){
    console.log('Checked in ',passenger.name,', flight number : ', flightNum);
  } else console.log('Wrong passport!');
};
checkIn(flight, rebecca);
console.log(rebecca, flight);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};
newPassport(rebecca);
console.log(rebecca.passport);
checkIn(flight, rebecca);
