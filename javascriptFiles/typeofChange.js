// const num1 = Number('  12  ');
// const num2 = Number(' 123000');
// const num3 = Number(true);
// const num5 = Number(false);
// let strArray = [num1, num2, num3, num5];
// const h1Tag = document.createElement('h1');
// const pTag = document.createElement('p');
// for (let i = 0; i < strArray.length; i++) {
//     h1Tag.append(`${strArray[i]} : 숫자 변환 `);
//     pTag.append(",,,");
//     document.body.append(h1Tag);
//     document.body.append(pTag);
// }
const num = +prompt("숫자를 입력하세요");
const input = document.createElement('h1');
nextNum : for (let i = 2; i <= num; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            continue nextNum;
        } else {
            input.append(`${i} :`);
        }
    }
}
document.body.appendChild(input)

/*
let a = prompt("number ? ", 1);
let b = prompt("number ? ", 2);

alert(+a + +b);

const isJavascriptOfficialName = prompt("js의 공식이름은 ?");
if (isJavascriptOfficialName == 'ECMAScript') {
    alert("정답");
} else {
    alert("모르셨나요? 정답은 ECMAScript입니다!")
}

const isPlusOrMinus = +prompt("숫자를 입력하세요");
if (isPlusOrMinus > 0) {
    alert(1);
} else alert(-1);

const login = prompt('현재 직급을 입력하세요.');
let message =
    (login == '직원') ? '안녕하세요' :
    (login=='임원') ? '환영합니다' :
    (login =='') ? '로그인이 필요합니다.' : '';
const testOut = document.getElementById('test_output');
testOut.innerText = message;

const whoAreYou = prompt("id를 입력하세요");
if (whoAreYou == 'Admin') {
    const password = prompt('password를 입력하세요');
    if (password == 'TheMaster') {
        alert('Welcome!!!');
    } else if(password != 'TheMaster'){
        alert('인증에 실패하였습니다.')
    } else if(password == '' || password == null) alert('취소하였습니다. 아이디 입력후')
} else if (whoAreYou == '' || whoAreYou == null) alert('취소되었습니다.')
 else  alert("그런 아이디는 없습니다.")

for (let i = 1; i < 11; i++) {
    if (i%2)  continue;
    alert(i);
}
let i = 0;
while (i < 1) {
    alert(`number ${i} !!!`);
    i++;
}
*/

// let num;
// do {
//     num = +prompt('100보다 큰 값을 입력');
// }
// while (num <= 100 && num );
//
