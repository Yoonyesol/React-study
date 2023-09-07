import React, { useImperativeHandle, useRef } from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    //외부에서 사용할 수 있는 모든 데이터를 포함한 함수
    return {
      focus: activate,
    };
  });

  return (
    <div
      className={`${classes.control} ${
        props.data.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.htmlfor}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});
export default Input;
