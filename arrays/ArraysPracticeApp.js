import {GetAverageAge, Unique} from "./array_reduce";
import {
  Calculator,
  Camelize,
  CamelizeMap,
  CopySorted,
  FilterRange,
  FilterRangeInPlace
} from "./array_split_filter_shuffle";
import ArrayPopPushUnshiftFilter from "./ArrayPopPushUnshiftFilter";
import ArraySort from "./array_sort";

const ArraysPracticeApp = () => {
  const str = "adbd-eso"
  let arr3 = [5, 3, 8, 1];
  let arr5 = [5, 2, 1, -10, 8];
  let powerCalc = new Calculator();
  powerCalc.addMethod("*", (a, b) => a * b);
  powerCalc.addMethod("/", (a, b) => a / b);
  powerCalc.addMethod("**", (a, b) => a**b);
  return (
    <div>
      <GetAverageAge/><Unique/>
      <Camelize str = {str}/>  <CamelizeMap str = {str}/>
      <FilterRange arr={arr3} a={2} b={6} />
      <FilterRangeInPlace arr={arr5} a={1} b={5} />
      <div>{powerCalc.calculate("3 - 4")}</div>
      <ArrayPopPushUnshiftFilter/>
      <ArraySort />

    </div>
  );
};

export default ArraysPracticeApp;