import {bench} from "./dateEx";

const DatePracticeApp = () => {
  function diffSubtract(date1, date2) {
    return date2 - date1;
  }
  function diffGetTime(date1, date2) {
    return date2.getTime() - date1.getTime();
  }
  let time1 = 0;
  let time2 = 0;

// 함수 bench를 각 함수(diffSubtract, diffGetTime)별로 10번씩 돌립니다.
  for (let i = 0; i < 10; i++) {
    time1 += bench(diffSubtract);
    time2 += bench(diffGetTime);
  }

  return (
    <div>
      {time1} , {time2}
    </div>
  );
};

export default DatePracticeApp;