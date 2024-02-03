'use strict';

const airline = 'Korean Air asian tour';
const plan = 'A320';
// console.log(
//   plan[0], airline.length,
//   airline.indexOf('r'),  airline.lastIndexOf('r'),  airline.indexOf('Air'),
//   airline.slice(7),"///",  airline.slice(7,9),
//   '|slice and indexOf >>',  airline.slice(0, airline.indexOf(' ')),
//   '|lastIndexOf >> ',  airline.slice(0, airline.lastIndexOf(' ')),
//   '| negative >> ',  airline.slice(-3),  airline.slice(2, -3),
// )
const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const st = seat.slice(-1)
  const isMiddleSeat = st === 'B' || st === 'E'
    ? "this is middle seat"
    : 'Not middle seat';
  console.log(isMiddleSeat);
}
// checkMiddleSeat('33E')

// console.log(airline.toLowerCase())
// console.log(airline.toUpperCase())
const nameCorrect = (name) => name.toLowerCase()[0].toUpperCase()
  + name.toLowerCase().slice(1);
// console.log(nameCorrect('tom CruSe'));
// comparing emails
const emailCheck = (email) => {
  const check = email.indexOf('@') !== -1
  return check ? {check: true, email: email.toLowerCase().trim()}
    : {check: false, email: 'email 형식이 아님니다.'};
};
// console.log(hasAt ? "ok email format accept" : 'not email format');

// emailCheck('sok@email.com');
// emailCheck('all about')

const compareEmail = (e1, e2) => {
  const e1Check = emailCheck(e1);
  const e2Check = emailCheck(e2);
  if (!e1Check.check || !e2Check.check)
    console.log('email 형식이 아님니다.')
  if (e1Check.check && e2Check.check)
    console.log(e1Check.email === e2Check.email
      ? "둘이 같은 이메일"
      : '서로 다른 이메일')
}
compareEmail('heoo apb.com', '  heoo@apb.com  \n')

const announcement = " all passengers come to boarding door 23, Boarding door 23!";
const newAnn = announcement.replaceAll('door', 'gate');
console.log(newAnn)
// regular expression
console.log(announcement.replace(/door/g, '문')) // g global 모두 찾기
// booleans : includes, startsWith, endsWith
// split('구분자')
const [성, 이름] = 'kim kwanYong'.split(' ')
console.log('안녕하세요 ', 성, '씨');
// array를 string으로 합치기 ==> join
const newName = ['Mr.', 성, 이름, '축하해요 🎉🎉', 33, '생일'].join(' ')
console.log(newName)
const capitalizedName = function (name) {
  const names = name.split(' ');
  let upperName = [];
  // let upperName = '';
  for (const n of names) {
    // upperName += n[0].toUpperCase() + n.slice(1) + ' '
    upperName.push(n.replace(n[0], n[0].toUpperCase()))
  }
  console.log(upperName.join(' 구분자 '));
}
capitalizedName('rebeca ferguson');

// 앞 또는 뒤에 문자 채우기///
// console.log('kim'.padEnd(6, '🎉'))
// console.log('kim'.padEnd(6, '+'))
// console.log('kim'.padStart(10, '_+'))
// console.log('kim'.padStart(10, '_+').padEnd(15,'&'))
// const cardNumbers='2345-2039-2039-1839';
// const cards = cardNumbers.split('-');
const maskCardEnd = function (number) {
  const cards = number + '';
  const last = cards.slice(-4);
  const masked = last.padStart(cards.length + 3, '****-')
  console.log(masked)
};
const maskCardStart = function (number) {
  const cards = (number + '');
  // const mask = cards.slice(0, 8).padEnd(cards.length + 3, "-****")

  let arr2 = '';
  cards.split('').forEach((value, i) =>
    (i !== 0 && i % 4 === 0) ? arr2 += "-" + value : arr2 += value
  )
  // for (let i = 0; i < cards.length; i++) {
  //   i !== 0 && i % 4 === 0 ? arr2 += "-" + cards[i] : arr2 += cards[i]
  // }
  const newArr = arr2.slice(0, 9).padEnd(arr2.length, '-****')
  // console.log("new array => ",newArr)
  // for(let i = 0; i < newArr.length; i++) {
  //   if(i !== 0) {
  //     newArr[i] = '-****'
  //   }
  // }
  // console.log(arr2.join(''))
  console.log(newArr)
};
maskCardEnd(1111222233334444)
maskCardStart(1111222233334444)

const secureCardNum
  = '123456789111'.slice(0, 4).padEnd(20, '*')
// console.log(secureCardNum)
console.log('🎉🎉 '.repeat(4))
/*
연습 문제 *************
 */
console.log("============================")
const btn = document.createElement('button');
btn.innerText = 'BUTTON'
btn.style.cssText
  = 'color: blue; background-color: yellow; ' +
  'width: 160px;height: 50px; font-size: 20px; padding: 6px';

const txArea = document.createElement('textarea');
document.body.append(txArea);
document.body.append(btn);

btn.addEventListener('click', function () {
  const text = document.querySelector('textarea').value;

  let low = text.trim().toLowerCase().split('\n');

  let newOne = []

  for (const n of low)
    n.includes(' ') ? newOne.push(...n.trim().split(' ')) : newOne.push(n)


  if (newOne.join('').trim().includes('(', ')', '.', '+', '{', '}')) {
    document.querySelector('textarea').value = '';
    alert('적당한 형식이 아님니다.');
  } else {
    let newArr = [];
    for (let i = 0; i < newOne.length; i++) {
      let [first, ...seconds] = newOne[i].trim().split('_');
      let newSecondString = '';
      for (const n of seconds) {
        newSecondString += n.replace(n[0], n[0].toUpperCase())
      }
      newArr.push((first.toLowerCase() + newSecondString).padEnd(30, ' ') +
        '🎉'.repeat(i + 1));
    }
    console.log(newArr.join('\n'));
  }
})

/*btn.addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  let low = text.toLowerCase().split(' ');
  let newArr = [];

  for (let i = 0; i < low.length; i++) {
    let icon ='🎉'.repeat(i+1)
    let splitBy = low[i].trim().split('_')
    let name = '';
    for (let j = 0; j < splitBy.length; j++) {
      j === 0
        ? name += splitBy[j]
        : name += splitBy[j].replace(splitBy[j][0], splitBy[j][0].toUpperCase())
    }
    // const joinArr = newArr.join('\n')
    newArr.push(name.padEnd(30,' ') + icon)
  }
  console.log(newArr.join('\n'));
})*/
// console.log(camelCase(text));
const testText = `underscore_case first_name
 Some_Variable 
 calculate_AGE 
 delayed_departure 
AOD_muto_under_bar`
// console.log('abcd'.padEnd(20, '*'))
// console.log('abcddddd'.padEnd(20, '*'))

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const flightsArr = flights.trim().split('+');
const getCode = (s) => s.slice(0, 3).toUpperCase();
const timeCh = (t) => t.replace(':', '시') + '분';
for (const fl of flightsArr) {
  // console.log(fl)
  const [type, from, to, time] = fl.split(';')
  let printOut =
    (type.startsWith('_Delayed'))
      ? `🔴 ${type.replaceAll('_'," ")} ${getCode(from)} ${getCode(to)} (${timeCh(time)})`
      : `${type.replaceAll('_'," ")} ${getCode(from)} ${getCode(to)} (${timeCh(time)})`;
  console.log(printOut.padStart(38))
}