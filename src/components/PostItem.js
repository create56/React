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

  return (
    <StyledPostBox>
      <StyledTitle>
        {id} : {title}
      </StyledTitle>
      <StyledButtonBox>
        <MyButton text={'삭제'} color={'red'} />
        <MyButton text={'상세보기'} />
      </StyledButtonBox>
    </StyledPostBox>
  );
}

export default PostItem;
