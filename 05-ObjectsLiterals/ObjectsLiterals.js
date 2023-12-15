import React from 'react';


const ObjectsLiterals = () => {

   const blogsObj = [
      { title: " mac & cheese", likes: 30 },
      { title: " first song", likes: 50 },
      { title: "latest action", likes: 80 },
   ]

   let user = {
      name: 'jennie', age: 22, email: "sa@bp.com",
      blogs: blogsObj,
      login() { return 'hi black pink'},
      logout() { return 'user logout'},
      logBlogs() {
         return this.blogs.map(bl => <div>{bl.title}, {bl.likes}</div>)
      },
      thisTest() {
         return console.log(this)} // window 객체를 나타냄
   }

   return (
       <div>
          {user.name.toUpperCase()} {user['email']}<br/>
          {/*{JSON.stringify(user)}*/}
          {/*<div>{typeof user}</div>*/}
          {/*<div>{user.login()}</div>*/}
          {/*<div>{user.logout()}</div>*/}
          {/*{user.blogs.map(bl => <div>{bl}</div>)}*/}
          <div>map 함수 호출하기..</div>
          {user.logBlogs()}
          {user.thisTest()}
          {/*{windowsTest}*/}
       </div>
   );
};
// function thisTest (){
//    return console.log(window)}
export default ObjectsLiterals;