import React from 'react';
import styled from 'styled-components';

const StyleBox = styled.div`
  display: flex;
  gap: 10px;
  backhground-color: cyan;
`;

const StyleItem = styled.div`
  backhground-color: yellow;
  height: 50px;
  wigth:30%
  margin-bottom: 5px;
`;

function Center(props) {
  console.log(props);
  return (
    <StyleBox>
      <StyleItem>{props.num}</StyleItem>
      <StyleItem></StyleItem>
      <StyleItem></StyleItem>
      <StyleItem></StyleItem>
    </StyleBox>
  );
}

export default Center;
