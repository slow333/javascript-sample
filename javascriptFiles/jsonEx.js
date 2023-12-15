const outP = document.querySelector('.textOut p');
const outLi = document.querySelector('.textOut li');
outP.textContent = '';

let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null
};
let jsonFormat = JSON.stringify(student);
console.log(jsonFormat);

let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  date: new Date(2020, 0, 1),
  place: room // meetup은 room을 참조합니다.
};

room.occupiedBy = meetup; // room references meetup

JSON.stringify(meetup, ['title', 'participants', 'name', 'number', 'place']);
// console.log('===============================');
JSON.stringify(meetup, function replacer(key, value) {
  console.log(`${key}: ${value}`);
  return (key == 'occupiedBy') ? undefined : value;
});

let user = {
  name: "John",
  age: 25,
  roles: {
    isAdmin: false,
    isEditor: true
  }
};

console.log(JSON.stringify(user, null, 5)); // 공백문자 2개

let room2 = {
  number: 23,
  toJSON(){
    return this.number;
  }
};

let meetup2 = {
  title: "Conference",
  date: new Date(Date.UTC(2017, 0, 1)),
  room2
};

console.log( JSON.stringify(room2) );
console.log( JSON.stringify(meetup2) );

let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

let user2 = JSON.parse(userData);

console.log( user2.friends[1] ); // 1

let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup3 = JSON.parse(str, function(key, value) {
  if (key == 'date') return new Date(value); // 받은 값이 date이면 date 객체로 변환해서 받음 
  return value;
});

console.log( meetup3.date.getDate() );

let testUser = {
  name : "kim kwan",
  age: 56
};
let jsonUser = JSON.stringify(testUser);
console.log(jsonUser);
let jsonToObj = JSON.parse(jsonUser);
console.log(jsonToObj);

let newRoom = {
  number: 23
};

let newMeetup = {
  title: "Conference",
  occupiedBy: [{name: "John"}, {name: "Alice"}],
  place: newRoom
};

// 순환 참조
newRoom.occupiedBy = newMeetup;
newMeetup.self = newMeetup;

console.log( JSON.stringify(newMeetup, function replacer(key, value) {
  /* 코드를 작성할 곳 */
  // console.log(`${key}: ${value}`);
  return (key != "" && value == newMeetup) ? undefined : value; // key가 없거나 값이 Object(자기 자신)일 경우 undefined(pass ??)
}));

/* 얼럿창엔 아래와 같은 결과가 출력되어야 합니다.
{
  "title":"Conference",
  "occupiedBy":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}

: [object Object]
jsonEx.js:102 title: Conference
jsonEx.js:102 occupiedBy: [object Object],[object Object]
jsonEx.js:102 0: [object Object]
jsonEx.js:102 name: John
jsonEx.js:102 1: [object Object]
jsonEx.js:102 name: Alice
jsonEx.js:102 place: [object Object]
jsonEx.js:102 number: 23
jsonEx.js:102 occupiedBy: [object Object]
*/
