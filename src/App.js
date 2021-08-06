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
  console.log(getData());

  const [posts, setPosts] = useState(getData());

  return (
    <div>
      <NavBar />
      <StyledBox>
        <StyledRightBox>
          <MyButton text={'추가'} color={'blue'} />
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
