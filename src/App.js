// JsxTest는 별칭이다 
import { useState } from "react";
import JsxTest, {num} from "./test/JsxTest";
// import {num} from ".test/JsxTest"; 

function App() {
  console.log("App() 실행");
  // 1. JSX는 return시에 하나의 dom만 리턴할수 있다.
  // 리턴 문에 html로 그림만 그리면 된다.
  // (1)JSX문법으로 그림을 그린다.
  //  <h1>숫자 : {num}</h1>

  // 2.상태 관리
  // 조건 1: 데이터 변경
  //      2. 지역변수로 두면 데이터를 변경하여 출력할수 없다.

const [num, setNum] = useState(1);
 // useState로 상태를 관리 한다.
// let num = 1; 
  // ex5문법
  // 여기는 jsx영역 "add()" X
  function add(){
  //let data = num +1;
  setNum(num +1);
 // setNum(num -1)
 // console.log("add 클릭됨" + num);
 //  num = num + 1;
 // console.log("add 클릭됨" + num);
  }
  return <div>
    <h1>숫자 : {num} </h1>
    <button onClick={()=>add()}>증가</button>
      </div>;
}

export default App;
