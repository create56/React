import { useState } from 'react';
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

  const [posts, setPosts] = useState(getData());

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

  return (
    <div>
      <NavBar />
      <StyledBox>
        <StyledRightBox>
          <button onClick={() => addPost()}>추가</button>
        </StyledRightBox>
        {posts.map((post) => (
          // post => 키값
          <PostItem post={post} />
        ))}
      </StyledBox>
    </div>
  );
}

export default App;
