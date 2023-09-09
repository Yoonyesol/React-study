import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
  console.log("DEMOOUTPUT RUNNING"); //버튼 누를 때마다 매번 상태 변화가 나타나므로 해당 문구도 출력됨
  return <MyParagraph>{props.show ? "This is new!" : ""}</MyParagraph>;
  //<p>는 항상 존재하지만 화면에 표시되는 문자열은 props.show의 값에 따라 달라진다.
};
export default React.memo(DemoOutput);
//React.memo: 컴포넌트 최적화, 인자로 들어간 컴포넌트에
//어떤 props가 입력되는지 확인하고 입력되는 모든 props의 신규 값을 확인한 뒤
//이를 기존의 props 값과 비교하도록 리액트에게 전달하는 역할을 한다.
//그리고 props의 값이 바뀐 경우에만 컴포넌트를 재실행, 재평가한다.
//부모 컴포넌트가 바뀌었지만 해당 컴포넌트의 props 값이 바뀌지 않았다면
//컴포넌트 실행은 건너뛴다.(그 컴포넌트의 자식 컴포넌트도 재평가/재실행되지 않는다.)
//매번 비교연산에는 비용이 따르기 때문에, 모든 컴포넌트에 memo를 적용하는 것은 합리적이지 못하다.
