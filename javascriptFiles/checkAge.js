function checkAge(age) {
    return (age > 18) || console.log('보호자의 동의를 받으셨나요...');
}
checkAge(1);
function min(a, b) {
    return (a > b) ? b : a;
}

// console.log('메인 호출시 min 함수 : '+ min(3, -3));

function pow(x, n) {
    if(n < 0 ){
        console.log('1 이상의 자연수를 넣으세요');
    }
    let number = 1;
    for (let i = 0; i < n; i++) {
        number *= x;
    }
    return number;
}

// console.log('메인 호출시 pow 함수 : '+ pow(3, 3));


// 사용법: 함수 showOk와 showCancel가 ask 함수의 인수로 전달됨
// ask("동의하십니까?", showOk, showCancel);

