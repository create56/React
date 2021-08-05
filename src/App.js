import { useState } from 'react';
import styled from 'styled-components';
import Center from './test/Center';

const StyleContainer = styled.div`
  margin: 0 auto;
  width: 80%;
`;

const StyleH1 = styled.h1`
  color: bule;
`;

function App() {
  const [data, setData] = useState([1, 2, 3, 4]);

  return (
    <StyleContainer>
      <StyleH1>스타일 컴포넌트 디자인 해보기</StyleH1>
      {data.map((num) => (
        <Center num={num} />
      ))}
    </StyleContainer>
  );
}

export default App;
