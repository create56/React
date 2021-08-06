// 데이터를 다운받았다고 가정
// 데이터의 형태는 제이슨
const posts = [
  {
    id: 1,
    title: '리엑트 쉬운거 맞음??',
    content: '리엑트란 ...................',
  },

  {
    id: 2,
    title: '리엑트가 백엔드 보다 쉽다',
    content: '리엑트란 ...................',
  },

  {
    id: 3,
    title: '복잡한 로직을 하고 싶다',
    content: '리엑트란 ...................',
  },

  {
    id: 4,
    title: '데이터 받기 어렵네ㅠㅠ',
    content: '리엑트란 ...................',
  },

  {
    id: 5,
    title: '리엑트 쉬운거 맞음??',
    content: '리엑트란 ...................',
  },
];

function getData() {
  return posts;
}

export { getData };
