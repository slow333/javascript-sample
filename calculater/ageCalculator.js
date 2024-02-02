'use strict';
// alert('자바스크립트!')
// alert('hello ~~')
// alert('error');
// [1,3].forEach(alert);
// let admin;
// let name;
// name = 'john';
// admin = name;
// alert(admin);
//
// const outPlanetName = 'earth';
// let currentUserName='yong';

const calculateAge = (date) => {
    let currentDate = Date.now();
    let birthday = date.BIRTHDAY.split('.');
    let newBirthDayFormat = new Date(birthday[2], birthday[1]-1, birthday[0]).getTime();

    let ageNumber = currentDate - newBirthDayFormat;
    // let age = currentDate.getFullYear() - newBirthDayFormat.getFullYear() +1;
    // const monthAndDay = currentDate.getMonth() - newBirthDayFormat.getMonth();
    // if(monthAndDay < 0 || (monthAndDay ===0 && currentDate.getDate() < newBirthDayFormat.getDate())){
    //     age = age -1;
    // }
    return Math.ceil(ageNumber / (1000 * 60 * 60 * 24 * 365));
};

const BIRTHDAY = '23.09.1970';
let age = calculateAge({BIRTHDAY});

const currentDateAge = document.getElementById('age');
currentDateAge.textContent = age + '살 입니다.';