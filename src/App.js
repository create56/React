import { useEffect, useState } from 'react';
import styled from 'styled-components';
import MyButton from './components/MyButton';
import NavBar from './components/NavBar';
import PostItem from './components/PostItem';
import { getData } from './provider/Post';

const StyledBox = styled.div`
  width: 70%;
  margin: 30px auto;
  padding: 30px;
  border: 1px solid black;
`;

const StyledRightBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 30px;
`;

function App() {
  console.log('App()');

  const [posts, setPosts] = useState();

  // 테스트가 끝나고 이제 실습
  // 리액트에서는 delete 사용불가 키워드로 사용가능
  // 함수는 여기에 적는다 왜냐하면 setPosts 애만 들고 있기 떄문이다.
  function deleteById(id) {
    let deleteData = posts.filter((post) => post.id !== id);
    setPosts(deleteData);
  }

  function addPost() {
    // 상태변경이란?
    // 값을 변경하고 함수를 재실행하는것
    setPosts([
      ...posts,
      {
        id: 6,
        title: '리엑트 전개 연산자',
        content: '전개 연산자는 흩뿌리는 연산자',
      },
    ]);
  }

  //1 생성자 만들기
  //2 데이터 받아보기
  async function download() {
    // 데이터 주소를 복붙함
    let res = await fetch('https://jsonplaceholder.typicode.com/comments/1');
    let parseRes = await res.json();
    console.log(parseRes);
    // 데이터 다운과 상태관리를 같이함
    setPosts(parseRes);
  }
  //3 데이터 다운
  // 데이터 다운 방법 구글에 json placeholder를 검색 -> JSONPlaceholder - Free Fake REST API로 들어가서 - /posts를 찾는다 -> 들어가서 데이터하나를 가져옴
  // useEffect의 기능
  //1.앱이 최초 실행될떄 실행
  //2.그림이 다시 그려질떄 실행 => 무한반복됨
  //3.실행(조건 : 의존성) => [] 배열에 아무것도 넣지 않으면 무한반복 하지 않는다.
  //지금 데이터가 나오지 않는데 조금있으면 나온다.

  useEffect(() => {
    download();
  }, []);

  // function del(id) {
  //   setPosts([
  //    {
  //     id: 6,
  //    title: '리엑트 전개 연산자',
  //   content: '전개 연산자는 흩뿌리는 연산자',
  //  },
  // {
  //   id: 6,
  //  title: '리엑트 전개 연산자',
  //  content: '전개 연산자는 흩뿌리는 연산자',
  //  },
  // ]);
  // }

  // 필요없는 것들은 전부 주석처리함
  // <button onClick={() => del(2)}>삭제</button>
  // {posts.map((post) => (
  // post => 키값
  // 을 넣어서 오류를 수정했다.
  // 파라메터를 넣을수 없다
  // 그래서 함수만 전달
  // <PostItem key={post.id} post={post} deleteById={deleteById} />;
  // ))}
  //<button onClick={() => addPost()}>추가</button>
  return (
    <div>
      <NavBar />
      <StyledBox>
        <StyledRightBox></StyledRightBox>
        <div>{posts.title}</div>
      </StyledBox>
    </div>
  );
}

export default App;
