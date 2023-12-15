// 화살표 함수에는 'this’가 없습니다
let group = {
  title: "1모둠",
  students: ["보라", "호진", "지민"],

  showList() {
    this.students.forEach(
      student => console.log(this.title + ': ' + student)
    );
  }
};

group.showList();
// 예시의 forEach에서 화살표 함수를 사용했기 때문에 화살표 함수 본문에 있는
// this.title은 화살표 함수 바깥에 있는 메서드인 showList가 가리키는 대상과 동일해집니다.
// 즉 this.title은 group.title과 같습니다.

// 화살표 함수엔 'arguments’가 없습니다
// 화살표 함수는 일반 함수와는 다르게 모든 인수에 접근할 수 있게 해주는 유사 배열 객체 arguments를 지원하지 않습니다.
// 이런 특징은 현재 this 값과 arguments 정보를 함께 실어 호출을 포워딩해 주는 데코레이터를 만들 때 유용하게 사용됩니다.
// 아래 예시에서 데코레이터 defer(f, ms)는 함수를 인자로 받고 이 함수를 래퍼로 감싸 반환하는데, 함수 f는 ms 밀리초 후에 호출됩니다.

function defer(f, ms) {
  return function() {
    setTimeout(() => f.apply(this, arguments), ms)
  };
}

function sayHi(who) {
  console.log('안녕, ' + who);
}

let sayHiDeferred = defer(sayHi, 2000);
sayHiDeferred("철수"); // 2초 후 "안녕, 철수"가 출력됩니다.