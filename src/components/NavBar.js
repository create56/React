import React from 'react';
import styled from 'styled-components';

const StyledNavBar = styled.div`
  border: 1px solid black;
  font-size: 20px;
`;
const StyledMenu = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;

// 리액트 에서는 하이퍼 링크는 사용할수 없다.
// 싱글 페이지
function navbar(props) {
  return (
    <div>
      <div>
        <ul>
          <StyledNavBar>
            <StyledMenu>
              <li>홈</li>
              <li>글쓰기</li>
            </StyledMenu>
          </StyledNavBar>
        </ul>
      </div>
    </div>
  );
}

export default navbar;
