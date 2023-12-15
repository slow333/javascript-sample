import _ from "lodash";

function loadScript(src) {
  return new Promise( function (resolve, reject) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`${src} 호출 애러`));

    document.body.append(script);
  })
}

let promise = loadScript('../javascriptFiles/arrowFuc.js');
promise.then(
  script => console.log(`promise ==========>>>   ${script.src} 를 불러옴`),
  error => console.log(`애러 : ${error.message}`)
);

Promise.resolve()
  .then(() => console.log("프라미스 성공!"))
  .then(() => console.log("코드 종료"));

async function f() {
  return 1;
}

f().then(value => { console.log(value)});
// f().then(alert); // 1

async function f1() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("완료!"), 1000)
  });

  let result = await promise; // 프라미스가 이행될 때까지 기다림 (*)

  console.log('promise await ====>>> ', result); // "완료!"
}

f1();

async function showAvatar() {

  // JSON 읽기
  let response = await fetch('/article/promise-chaining/user.json');
  let user = await response.json();

  // github 사용자 정보 읽기
  let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
  let githubUser = await githubResponse.json();

  // 아바타 보여주기
  let img = document.createElement('img');
  img.src = githubUser.avatar_url;
  img.className = "promise-avatar-example";
  document.body.append(img);

  // 3초 대기
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));

  img.remove();

  return githubUser;
}

showAvatar();

