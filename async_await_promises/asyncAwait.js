function loadScript(src, callback) {
  // <script> 태그를 만들고 페이지에 태그를 추가합니다.
  // 태그가 페이지에 추가되면 src에 있는 스크립트를 로딩하고 실행합니다.
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => callback(script);
  document.head.append(script);
}
loadScript("../javascriptFiles/checkAge.js",
  function () {
  console.log('(001) ==========>  callback 호출 시 pow 함수 : ', pow(3, 10));
  console.log('(002) ==========>  ',fibForLoop(9));
});
loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js',
    script => {
                console.log(`(003) ==========>  ${script.src}가 로드되었습니다.`);
                console.log( _ ); // 스크립트에 정의된 함수
      });

// 이런 방식을 ‘콜백 기반(callback-based)’ 비동기 프로그래밍이라고 합니다.
// 무언가를 비동기적으로 수행하는 함수는 함수 내 동작이 모두 처리된 후 실행되어야 하는 함수가 들어갈 콜백을 인수로 반드시 제공해야 합니다.
// 위 예시에선 loadScript의 인수로 콜백을 제공해 주었는데,
// 이렇게 콜백을 사용한 방식은 비동기 프로그래밍의 일반적인 접근법입니다.

function fibForLoop(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}
// 콜백 안에 콜백을 넣으면 밖에서 부터 안으로 실행 됨... 외부에서 지정한 것과 섞임...
loadScript('../javascriptFiles/checkAge.js', function(checkAge) {
  console.log(`(004) ==========>  ${checkAge.src}을 로딩했습니다. 이젠, 다음 스크립트를 로딩합시다.`);

  loadScript('../javascriptFiles/dateEx.js', function(dateEx) {
    console.log(`(005) ==========>  ${dateEx.src}를 로딩하는 두 번째 스크립트를 성공적으로 로딩했습니다.`);
  });
});

function loadScriptErrorHandle(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`${src}를 불러오는 도중에 에러가 발생했습니다.`));

  document.head.append(script);
}
loadScriptErrorHandle('../javascriptFiles/random.js', function(error, script) {
  if (error) {
    console.log("(006) ==========>  loading error ~~~");
  } else {
    console.log("(007) ==========>  loading success !!!!!");
  }
});

