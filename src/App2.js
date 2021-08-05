import styled from 'styled-components';
import Center from './test/Center';

const StyleContainer = styled.div`
  margin: 0 auto;
  width: 80%;
`;

const Style1 = styled.h1`
  color: bule;
`;

const styleBox = styled.div`
  display: flex;
  gap: 10px
  backhground-color: cyan;
`;

const styleItem = styled.div`
  backhground-color: yellow;
  height: 50px;
  wigth:30%
  margin-bottom: 5px;
`;

function App() {
  return (
    <StyleContainer>
      <Style1>스타일 컴포넌트 디자인 해보기</Style1>
      <styleBox></styleBox>
    </StyleContainer>
  );
}

export default App;
