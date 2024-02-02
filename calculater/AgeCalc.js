const AgeCalc = () => {
  const BIRTHDAY = '23.02.1967';
  let age = calculateAge({BIRTHDAY});
  return (
    <>
      {age}
    </>
  );
};

const calculateAge = (bd) => {
  let currentDate = Date.now();
  let birthday = bd.split('.');

  let newBirthDayFormat = new Date(birthday[2], birthday[1]-1, birthday[0]).getTime();
  let ageNumber = currentDate - newBirthDayFormat;
  // let age = currentDate.getFullYear() - newBirthDayFormat.getFullYear() +1;
  // const monthAndDay = currentDate.getMonth() - newBirthDayFormat.getMonth();
  // if(monthAndDay < 0 || (monthAndDay ===0 && currentDate.getDate() < newBirthDayFormat.getDate())){
  //     age = age -1;
  // }
  return Math.ceil(ageNumber / (1000 * 60 * 60 * 24 * 365));
};


export default AgeCalc;