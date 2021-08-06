import React from 'react';
import styled from 'styled-components';

// 컴포넌트에서 디자인 하는것은 아니다.
function MyButton(props) {
  const { text, color } = props;

  const StyledButton = styled.button`
    background-color: ${color || 'orange'};
    height: 30px;
    border: none;
    box-shadow: 0 5px 5px 0 gray;
    cursor: pointer;
    margin-left: 3px;
  `;

  return <StyledButton>{text}</StyledButton>;
}

export default MyButton;
