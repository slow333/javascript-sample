// call, apply 명시적으로 this 값을 지정해서 호출 할때 사용하는 내장 함수 임
// cachingDecorator는 한번 수행한 값을 저장하고 있다가 다시 호출 시에는 다시 원래 함수를 실행하지 않고
// 가지고 있는 값을 return하는 wrapper 함수로 화면에 출력 시에 무거 운 작업을 반복하지 않게 하기 위한 방식
// apply는 매개변수를 array 형태의 값으로 받는 것만 다름(다수의 매개 변수를 갖을 경우에 사용)

// React에는 useEffect를 사용 : 특정 값이 변경 시에만 화면을 다시 랜더힝하는 별도의 변수를 갖고 있음
// => 꼭 필요한 기능이나 내용이 좀 난해 함....
function slow(x) {
  console.log('slow의 x를 호출함 =>', x);
  return x;
}
function cachingDecorator(func) {
  let cache = new Map();

  return function(x){
    if (cache.has(x)) {
      return cache.get(x);
    }
    let result = func.call(this, x); // 이젠 'this'가 제대로 전달됩니다.(worker 로 할 경우)

    cache.set(x, result);
    return result;
  }
}

slow = cachingDecorator(slow);
// console.log(slow(1));
// console.log('again', slow(1));
// console.log(slow(2));
// console.log('again2', slow(2));

let worker = {
  someMethod() {
    return 2;
  },

  slow(x) {
    // CPU 집약적인 작업이라 가정
    console.log(`slow(${x})을/를 호출함`);
    return x * this.someMethod(); // (*)
  }
};
// console.log(worker.slow(3));
worker.slow = cachingDecorator(worker.slow); // 캐싱 데코레이터 적용

// console.log( worker.slow(2) ); // 제대로 동작합니다.
// console.log( worker.slow(2) ); // 제대로 동작합니다. 다만, 원본 함수가 호출되지 않고 캐시 된 값이 출력됩니다.
console.log("==========================");

let applyWorker = {
  someMethod() {
    return 2;
  },
  slow(min, max) {
    console.log(`slow(${min},${max})을/를 호출함`);
    return this.someMethod() + min + max;
  }
};

function cachingDecoratorApply(func, hash) {
  let cache = new Map();
  return function() {
    let key = hash(arguments); // (*)
    if (cache.has(key)) {
      return cache.get(key);
    }

    let result = func.call(this, ...arguments); // (**)

    cache.set(key, result);
    return result;
  };
}

function hash(args) {
  // return args[0] + ',' + args[1];
  console.log( [].join.call(arguments) ); // 1,2
}

applyWorker.slow = cachingDecoratorApply(applyWorker.slow, hash);

console.log( applyWorker.slow(3, 5) ); // 제대로 동작합니다.
console.log( "다시 호출: " + applyWorker.slow(3, 5) ); // 동일한 결과 출력(캐시된 결과)