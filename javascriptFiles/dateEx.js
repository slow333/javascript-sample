let now = new Date();
// console.log(now.getTime());
// console.log(now.getTimezoneOffset()/60);
now.setDate(0); // 일의 최솟값은 1이므로 0을 입력하면 전 달의 마지막 날을 설정한 것과 같은 효과를 봅니다.
// console.log(now);
let start = Date.now(); // 1970년 1월 1일부터 현재까지의 밀리초

// 원하는 작업을 수행
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}
let end = Date.now(); // done
// console.log( `반복문을 모두 도는데 ${end - start} 밀리초가 걸렸습니다.` );
function diffSubtract(date1, date2) {
  return date2 - date1;
}
function diffGetTime(date1, date2) {
  return date2.getTime() - date1.getTime();
}
function bench(f) {
  let date1 = new Date(0);
  let date2 = new Date();

  let start = Date.now();
  for (let i = 0; i < 100000; i++) f(date1, date2);
  return Date.now() - start;
}

let time1 = 0;
let time2 = 0;

// 함수 bench를 각 함수(diffSubtract, diffGetTime)별로 10번씩 돌립니다.
for (let i = 0; i < 10; i++) {
  time1 += bench(diffSubtract);
  time2 += bench(diffGetTime);
}

// console.log( 'diffSubtract에 소모된 시간: ' + time1 );
// console.log( 'diffGetTime에 소모된 시간: ' + time2 );
let d2 = new Date("January 20, 2022 03:12:00");
// console.log( d2 );

function getWeekDay(date) {
  let weekNum = date.getDay();
  let listWeek =  ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
  return listWeek[weekNum];
}
// console.log(getWeekDay(new Date(2019, 11, 5)));

function getLocalDay(date) {
  return date.getDay() === 0 ? 6 : date.getDay() + 1;
}
console.log('오늘 날짜 가지고 오기 getLocalDay : '+getLocalDay(new Date(2019, 11, 5)));

let date3 = new Date(2015, 0, 2); // 2015년 1월 2일
function getDateAgo(date, num) {
  let newDate = new Date(date);
  newDate.setDate(date.getDate() - num);
  return newDate.getDate();
}
// console.log("==================================="); // 1, (2015년 1월 1일)
// console.log( getDateAgo(date3, 1) ); // 1, (2015년 1월 1일)
// console.log( getDateAgo(date3, 2) ); // 31, (2014년 12월 31일)
// console.log( getDateAgo(date3, 365) ); // 2, (2014년 1월 2일)

function getLastDayOfMonth(year, month) {
  let date = new Date(year, month+1, 1);
  date.setDate(0);
  return date.getDate();
}
// console.log(getLastDayOfMonth(2023, 0));
// console.log(getLastDayOfMonth(2023, 6));