import React from 'react';
import styled from 'styled-components';
import MyButton from './MyButton';

const StyledPostBox = styled.div`
  border: 1px solid black;
  padding: 10px;
  background-color: beige;
  margin-bottom: 20px;
`;

const StyledTitle = styled.div`
  color: blue;
  font-size: 25px;
  font-weight: bold;
`;

const StyledButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

function PostItem(props) {
  console.log(1, props);
  // 구조화를 분해해서 할당 그떄 쓰이는 것이 {} 중괄호이다.
  // 반복해서 적어야될 것들을 쓴것들이다.
  // 추가 말고 다른 텍스트를 추가한다.
  const { id, title, content } = props.post;
  // App.js가 떄려진다. 함수로 전달
  const deleteById = props.deleteById;

  // 원래 디자인 있었는데 이해을 쉽게 하기 위해 지움
  // postItem은 상태를 가지고 있지 않다.
  // 내가 상태를 들고 있지 않으면 함수를 전달
  return (
    <StyledPostBox>
      <StyledTitle>
        {id} : {title}
      </StyledTitle>
      <StyledButtonBox>
        <button onClick={() => deleteById(id)}>삭제</button>
        <button>상세보기</button>
      </StyledButtonBox>
    </StyledPostBox>
  );
}

export default PostItem;
