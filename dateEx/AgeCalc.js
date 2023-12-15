const AgeCalc = () => {

  const BIRTHDAY = '23.02.1967'.split(".");

  let currentDate = Date.now();
  let newBirthDayFormat = new Date(BIRTHDAY[2], BIRTHDAY[1]-1, BIRTHDAY[0]);
  let ageNumber = currentDate - newBirthDayFormat;
  let age=  Math.ceil(ageNumber / (1000 * 60 * 60 * 24 * 365));

  return (
    <>
      {age}
    </>
  );
};

export default AgeCalc;