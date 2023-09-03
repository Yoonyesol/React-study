import styled from "styled-components";

import "./Button.css";

const Button = styled.button`
  width: 100%; //미디어쿼리 화면 사이즈에 속하지 않을 때 버튼 사이즈
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  //미디어쿼리(모바일 화면보다 큰 장치일 때)
  @media (min-width: 768px) {
    width: auto;
  }

  // &:생성한 컴포넌트의 가상선택자(해당 요소가 존재한다면 실행)
  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;

// const Button = props => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };

export default Button;
