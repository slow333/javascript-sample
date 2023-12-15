let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  }
};
for (let num of range) {
  alert(num); // 1, then 2, 3, 4, 5
}

// range는 챕터 위쪽 예시에서 그대로 가져왔다고 가정합시다.

// 각 숫자를 제곱
let arr = Array.from(range, num => num * num);

alert(arr); // 1,4,9,16,25