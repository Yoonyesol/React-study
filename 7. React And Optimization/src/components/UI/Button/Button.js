import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  //부모 컴포넌트가 재실행되면 모든 자식 컴포넌트가 재실행, 재평가된다.->불필요한 재평가, 재실행이 발생할 수 있음.
  console.log("BUTTON RUNNING");
  return (
    <button
      type={props.type || "button"}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default React.memo(Button);
