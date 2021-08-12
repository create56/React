const posts = [
  {
    id: 1,
    title: "리엑트 쉬운거 맞음??",
    content: "리엑트란 ...................",
  },

  {
    id: 2,
    title: "리엑트가 백엔드 보다 쉽다",
    content: "리엑트란 ...................",
  },

  {
    id: 3,
    title: "복잡한 로직을 하고 싶다",
    content: "리엑트란 ...................",
  },

  {
    id: 4,
    title: "데이터 받기 어렵네ㅠㅠ",
    content: "리엑트란 ...................",
  },

  {
    id: 5,
    title: "리엑트 어렵네",
    content: "리엑트란 ...................",
  },
];

//1. 추가
// 자기 타입을 집어던지는 애
// let data = [1,2,3] = ...posts 흩뿌리는 애
// 5번 데이터를 집어 넣음
// 원본 데이터에 저장하는것이 아니라 다른 공간에 저장한다.
// 리액트가 깊은 복사를 해야한다. 전개 연산자도 깊은 복사를 해야한다.
// 10억개 중에 변경된 부분을 찾아서 변경된 부분을 다시 그리기 위해서는 연산하나하나 다 검사해 봐야한다.
// 깊은 복사로 10억개의 데이터를 넘겨 주면 변경된 부분에 주소가 달라지니 리액트 입장에서는 옅은 복사를 통해서 빠르게 변경된 부분을 그린다.
let addData = [
  ...posts,
  {
    id: 5,
    title: "리엑트 쉬운거 맞음??",
    content: "리엑트란 ...................",
  },
];

//console.log(addData);

//2. 삭제, 검색
// [1,2,3,4]이 있는데 3번 만 삭제하고 1,2,4만 필터링해서 넣는다.
//post에서 postid가 3번값을 담아서 트루를 반환
let minusData = posts.filter((post) => post.id !== 3);
//console.log(minusData);

// 검색해서 3번을 찾으면
let selectData = posts.filter((post) => post.id === 3);
//console.log(selectData);

//3 .수정
// 키값이 1번이면 타이틀을 수정하도록한다.
let updateDate = posts.map((post) => {
  return post.id === 1 ? { ...post, title: "리액트 너무 어려움" } : post;
});

console.log(updateDate);

let user = {
  id: 1,
  username: "ssar",
  password: "1234",
};

// 내가 쌀로 넣었는데  cos로 덮어 씌움
// 부분적으로 바꿀떄는 전개 연산자를 쓰면 덮어씌운다.
//이게 리액트 에서 쓰는 수정방법이다.
let newUser = { ...user, username: "cos" };
//console.log(newUser);
