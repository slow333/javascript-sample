let arr6 = ["HTML", "JavaScript", "CSS"];
let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

users.sort((a, b) => a.name > b.name ? 1 : -1);

function byField(fieldName){
  return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}

const ArraySort = () => {
  const sortedArr = copySorted(arr6)
  let arr = [ 1, 2, 15,4,3,0 ];
  arr.sort((a, b) => a - b );
  let countries = ['Österreich', 'Andorra', 'Vietnam'];
  let kor = ['가나', '다라', '가가'];

  return (
    <div>
      {sortedArr}
      {arr.sort(compareNumeric)}
      {arr.sort(function(a, b) { return a - b; })}
      <p>일반 정렬 방식으로는 영어 외에는 정렬이 정상적으로 이루어 지지 않음</p>
      {countries.sort( (a, b) => a > b ? 1 : -1)}
      <p>localeCompare를 사용해야 문자가 정상 정렬됨</p>
      {kor.sort( (a, b) => a.localeCompare(b) )}
      <p>이름을 기준으로 정렬(Ann, John, Pete)</p>
      {users.map(value => <div>{value.name}</div>)}
      <p>나이를 기준으로 정렬</p>
      {users.sort((a, b) => a.age - b.age).map(value => <p>{value.age}</p>)}
      {JSON.stringify(users)}
      {users.sort(byField('name')).map(v => <p>{v.name}</p>)}
      {users.sort(byField('age')).map(v => <p>{v.age}</p>)}
    </div>
  );
};
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a === b) return 0;
  if (a < b) return -1;
}
function copySorted(arr){
  const arrSorted = arr.slice().sort((a, b) => a.localeCompare(b));
  // console.log(arrSorted)
  return arrSorted;
}
export default ArraySort;