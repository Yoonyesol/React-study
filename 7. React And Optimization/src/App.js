import React, { useState } from "react";

import Button from "./components/UI/Button/Button";
import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log("APP RUNNING"); //버튼 누를 때마다 출력됨 -> 리액트는 상태나 props, context 변경 시에만 함수를 재실행, 재평가한다.

  const toggleParagraphHandler = () => {
    setShowParagraph((prevshowParagraph) => !prevshowParagraph);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      <Button onClick={toggleParagraphHandler}>Show Paragraph!</Button>
    </div>
  );
}

export default App;
//App 컴포넌트는 React가 실행한다. 따라서 매 실행마다 모든 함수와 컴포넌트가 재실행되게 된다.
//App 컴포넌트에 정의된 함수는 항상 새로운 함수이므로, 버튼에 들어가는 함수도 매번 달라진다.
//따라서 버튼 컴포넌트도 매번 재실행되게 된다.
//그럼 왜 DemoOutput은 show={false}를 가지고도 재실행되지 않는가?
//원시값 vs 참조값: DemoOutput의 false는 원시값이므로 늘 동일.
//그러나 배열이나 함수는 값이 동일하다 해도 비교연산을 수행해보면 true가 아닌 false가 리턴된다.
