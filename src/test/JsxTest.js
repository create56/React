import React from 'react';

let num = 10;

let user = {
  id: 1,
  username: 'ssar',
  email: 'ssar@nate.com',
};

// 컬랙션

let users = [
  {
    id: 1,
    username: 'ssar',
    email: 'ssar@nate.com',
  },
  {
    id: 2,
    username: 'cos',
    email: 'cos@nate.com',
  },
  {
    id: 3,
    username: 'love',
    email: 'love@nate.com',
  },
];

function JsxTest() {
  return (
    // 리턴내부만 JSX이다.
    <div>
      <h1>JSX 문법 예제 {num}</h1>
      <hr />
      <div>
        <div>2.삼항 연산자 - IF를 사용할수 없다.</div>
        {num === 10 ? 'ok' : 'fail'}
      </div>
      <hr />
      <div>
        번호 : {user.id} <br />
        유저네임 : {user.username} <br />
        이메일 : {user.email} <br />
      </div>
      <hr />
      <div>
        {/*users[0].username*/}
        {/*users.map((user) => <div>hello</div>)*/}
        {users.map((user) => (
          <div>{user.username}</div>
        ))}
      </div>
    </div>
  );
}
// 2. export는 자바의 public과 같다.
// default가 없기 떄문에 {} 중괄호가 필요함
export { num };
export default JsxTest;
